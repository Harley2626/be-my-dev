import { NextRequest } from "next/server";
import { ZodError } from "zod";
import { countRecentLeadsByIp, insertLead } from "@/lib/supabase/admin";
import { sendCustomerConfirmationEmail, sendOwnerLeadEmail } from "@/lib/services/email";
import { sendWhatsAppLeadNotification } from "@/lib/services/whatsapp";
import { leadSubmissionSchema } from "@/lib/validation/lead-schema";

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MINUTES = 15;

export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function processLeadSubmission(
  request: NextRequest,
  body: unknown,
): Promise<{ ok: true } | { ok: false; status: number; message: string }> {
  try {
    const parsed = leadSubmissionSchema.parse(body);

    if (parsed.website) {
      return { ok: false, status: 400, message: "Invalid submission." };
    }

    const ipAddress = getClientIp(request);
    const userAgent = request.headers.get("user-agent") ?? "unknown";

    const recentCount = await countRecentLeadsByIp(ipAddress, RATE_LIMIT_WINDOW_MINUTES);
    if (recentCount >= RATE_LIMIT_MAX) {
      return {
        ok: false,
        status: 429,
        message: "Too many submissions. Please try again in a few minutes.",
      };
    }

    const lead = await insertLead({
      name: parsed.name,
      email: parsed.email,
      package: parsed.package || "Not sure yet",
      needs_photographer: parsed.needsPhotographer,
      needs_brand_designer: parsed.needsBrandDesigner,
      business_idea: parsed.businessIdea,
      callback_number: parsed.callbackNumber || null,
      preferred_contact: parsed.preferredContact || null,
      ip_address: ipAddress,
      user_agent: userAgent,
      status: "New",
    });

    const notifications = await Promise.allSettled([
      sendOwnerLeadEmail(lead),
      sendCustomerConfirmationEmail(lead),
      sendWhatsAppLeadNotification(lead),
    ]);

    const failures = notifications
      .map((result, index) => ({ result, channel: ["owner email", "customer email", "WhatsApp"][index] }))
      .filter((entry) => entry.result.status === "rejected");

    if (failures.length > 0) {
      console.error(
        "Lead saved but notification failures:",
        failures.map((f) => ({
          channel: f.channel,
          reason: f.result.status === "rejected" ? f.result.reason : undefined,
        })),
      );
    }

    const whatsappFailed = failures.some((f) => f.channel === "WhatsApp");
    if (whatsappFailed) {
      console.error("WhatsApp delivery failed for lead", lead.id);
    }

    return { ok: true };
  } catch (error) {
    if (error instanceof ZodError) {
      const message = error.issues[0]?.message ?? "Please check your form and try again.";
      return { ok: false, status: 400, message };
    }

    console.error("Lead submission error:", error);
    return {
      ok: false,
      status: 500,
      message: "Something went wrong. Please try again or contact me directly on WhatsApp.",
    };
  }
}
