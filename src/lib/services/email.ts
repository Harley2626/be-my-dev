import { Resend } from "resend";
import type { LeadRecord } from "@/lib/validation/lead-schema";

let resendClient: Resend | null = null;

function getResend(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Missing RESEND_API_KEY");
    }
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

function getFromEmail(): string {
  const from = process.env.RESEND_FROM_EMAIL;
  if (!from) {
    throw new Error("Missing RESEND_FROM_EMAIL");
  }
  return from;
}

function getOwnerEmail(): string {
  const to = process.env.RESEND_TO_EMAIL;
  if (!to) {
    throw new Error("Missing RESEND_TO_EMAIL");
  }
  return to;
}

function formatNeeds(lead: LeadRecord): string {
  const parts: string[] = [];
  if (lead.needs_photographer) parts.push("Photographer");
  if (lead.needs_brand_designer) parts.push("Brand designer");
  return parts.length > 0 ? parts.join(", ") : "None";
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

export async function sendOwnerLeadEmail(lead: LeadRecord): Promise<void> {
  const resend = getResend();
  const timestamp = formatTimestamp(lead.created_at);

  const { error } = await resend.emails.send({
    from: getFromEmail(),
    to: getOwnerEmail(),
    subject: "🔥 New Be My Dev Lead",
    text: [
      "Name:",
      lead.name,
      "",
      "Email:",
      lead.email,
      "",
      "Package:",
      lead.package ?? "Not sure yet",
      "",
      "Needs:",
      formatNeeds(lead),
      "",
      "Business Idea:",
      lead.business_idea,
      "",
      "Phone:",
      lead.callback_number || "Not provided",
      "",
      "Preferred Contact:",
      formatPreferredContact(lead.preferred_contact),
      "",
      "Timestamp:",
      timestamp,
    ].join("\n"),
  });

  if (error) {
    throw new Error(`Owner email failed: ${error.message}`);
  }
}

export async function sendCustomerConfirmationEmail(
  lead: LeadRecord,
): Promise<void> {
  const resend = getResend();

  const { error } = await resend.emails.send({
    from: getFromEmail(),
    to: lead.email,
    subject: "Thanks for contacting Be My Dev",
    text: [
      `Hi ${lead.name},`,
      "",
      "Thank you for reaching out to Be My Dev.",
      "",
      "I've received your enquiry and will review it personally. You can expect a reply within one business day.",
      "",
      "In the meantime, feel free to explore more of my work:",
      "https://www.bemydev.co.za",
      "",
      "Warm regards,",
      "Jared",
      "Be My Dev",
    ].join("\n"),
  });

  if (error) {
    throw new Error(`Customer email failed: ${error.message}`);
  }
}
