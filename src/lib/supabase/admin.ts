import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { LeadRecord } from "@/lib/validation/lead-schema";

let adminClient: SupabaseClient | null = null;

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getSupabaseAdmin(): SupabaseClient {
  if (!adminClient) {
    adminClient = createClient(getEnv("SUPABASE_URL"), getEnv("SUPABASE_SERVICE_ROLE_KEY"), {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }
  return adminClient;
}

export async function countRecentLeadsByIp(ipAddress: string, windowMinutes = 15): Promise<number> {
  const since = new Date(Date.now() - windowMinutes * 60 * 1000).toISOString();
  const { count, error } = await getSupabaseAdmin()
    .from("leads")
    .select("id", { count: "exact", head: true })
    .eq("ip_address", ipAddress)
    .gte("created_at", since);

  if (error) {
    throw new Error(`Rate limit check failed: ${error.message}`);
  }

  return count ?? 0;
}

export async function insertLead(
  lead: Omit<LeadRecord, "id" | "created_at">,
): Promise<LeadRecord> {
  const { data, error } = await getSupabaseAdmin().from("leads").insert(lead).select().single();

  if (error) {
    throw new Error(`Failed to save lead: ${error.message}`);
  }

  return data as LeadRecord;
}
