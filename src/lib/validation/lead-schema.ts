import { z } from "zod";

export const leadSubmissionSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  package: z.string().trim().max(50).optional().default("Not sure yet"),
  needsPhotographer: z.boolean(),
  needsBrandDesigner: z.boolean(),
  businessIdea: z
    .string()
    .trim()
    .min(10, "Please tell me a little more about your idea.")
    .max(5000, "Your message is too long."),
  callbackNumber: z.string().trim().max(30).optional().default(""),
  preferredContact: z.enum(["call", "whatsapp", ""]).optional().default(""),
  website: z.string().max(0).optional().default(""),
});

export type LeadSubmission = z.infer<typeof leadSubmissionSchema>;

export type LeadRecord = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  package: string | null;
  needs_photographer: boolean;
  needs_brand_designer: boolean;
  business_idea: string;
  callback_number: string | null;
  preferred_contact: string | null;
  ip_address: string | null;
  user_agent: string | null;
  status: string;
};

export type LeadInsert = Omit<LeadRecord, "id" | "created_at">;
