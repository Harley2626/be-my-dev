import type { LeadRecord } from "@/lib/validation/lead-schema";

const GRAPH_API_VERSION = "v21.0";

function getWhatsAppConfig() {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const recipientNumber = process.env.WHATSAPP_RECIPIENT_NUMBER;

  if (!accessToken || !phoneNumberId || !recipientNumber) {
    throw new Error(
      "Missing WhatsApp configuration (WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_RECIPIENT_NUMBER)",
    );
  }

  return { accessToken, phoneNumberId, recipientNumber: recipientNumber.replace(/\D/g, "") };
}

function yesNo(value: boolean): string {
  return value ? "Yes" : "No";
}

function formatPreferredContact(value: string | null): string {
  if (value === "call") return "Call";
  if (value === "whatsapp") return "WhatsApp";
  return "Not specified";
}

function formatTimestamp(iso: string): string {
  return new Intl.DateTimeFormat("en-ZA", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Africa/Johannesburg",
  }).format(new Date(iso));
}

function buildWhatsAppBody(lead: LeadRecord): string {
  return [
    "🔥 NEW WEBSITE LEAD",
    "",
    "Name:",
    lead.name,
    "",
    "Email:",
    lead.email,
    "",
    "Package:",
    lead.package ?? "Not sure yet",
    "",
    "Photographer:",
    yesNo(lead.needs_photographer),
    "",
    "Brand Designer:",
    yesNo(lead.needs_brand_designer),
    "",
    "Business Idea:",
    lead.business_idea,
    "",
    "Callback:",
    lead.callback_number || "Not provided",
    "",
    "Preferred Contact:",
    formatPreferredContact(lead.preferred_contact),
    "",
    "Time:",
    formatTimestamp(lead.created_at),
  ].join("\n");
}

/**
 * Sends a lead notification to the site owner via Meta WhatsApp Cloud API.
 * @see https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages
 */
export async function sendWhatsAppLeadNotification(lead: LeadRecord): Promise<void> {
  const { accessToken, phoneNumberId, recipientNumber } = getWhatsAppConfig();
  const body = buildWhatsAppBody(lead);

  const response = await fetch(
    `https://graph.facebook.com/${GRAPH_API_VERSION}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: recipientNumber,
        type: "text",
        text: {
          preview_url: false,
          body,
        },
      }),
    },
  );

  const payload = (await response.json()) as {
    error?: { message?: string; code?: number };
  };

  if (!response.ok) {
    const detail = payload.error?.message ?? response.statusText;
    throw new Error(`WhatsApp notification failed: ${detail}`);
  }
}
