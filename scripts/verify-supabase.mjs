/**
 * Verifies Supabase env vars and leads table connectivity.
 * Run: node scripts/verify-supabase.mjs
 * Does not print secret values.
 */
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const ROOT = process.cwd();
const ENV_PATH = path.join(ROOT, ".env.local");

function loadEnvLocal() {
  if (!fs.existsSync(ENV_PATH)) {
    return { exists: false, vars: {} };
  }

  const vars = {};
  for (const line of fs.readFileSync(ENV_PATH, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    vars[key] = value;
  }

  return { exists: true, vars };
}

function isPlaceholder(value) {
  if (!value) return true;
  const lower = value.toLowerCase();
  return (
    lower.includes("your-") ||
    lower.includes("xxxxxxxx") ||
    lower === "https://your-project.supabase.co"
  );
}

async function main() {
  const { exists, vars } = loadEnvLocal();

  console.log("=== Supabase verification ===\n");
  console.log(`.env.local exists: ${exists ? "yes" : "no"}`);

  if (!exists) {
    console.log("\nCreate .env.local in the project root and add your Supabase keys.");
    process.exit(1);
  }

  const required = ["SUPABASE_URL", "SUPABASE_ANON_KEY", "SUPABASE_SERVICE_ROLE_KEY"];
  for (const key of required) {
    const value = vars[key];
    const set = Boolean(value && !isPlaceholder(value));
    console.log(`${key}: ${set ? "set" : "MISSING or placeholder"}`);
  }

  const url = vars.SUPABASE_URL;
  const serviceKey = vars.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey || isPlaceholder(url) || isPlaceholder(serviceKey)) {
    console.log("\nPaste your Supabase URL and Secret (service_role) key into .env.local, then re-run.");
    process.exit(1);
  }

  const supabase = createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  console.log("\nTesting connection...");

  const { error: tableError, count } = await supabase
    .from("leads")
    .select("id", { count: "exact", head: true });

  if (tableError) {
    console.log(`leads table: NOT READY (${tableError.message})`);
    console.log("\nRun the migration SQL in Supabase SQL Editor:");
    console.log("  supabase/migrations/001_create_leads.sql");
    process.exit(1);
  }

  console.log(`leads table: EXISTS (${count ?? 0} row(s) currently)`);

  const testLead = {
    name: "Supabase Verify Test",
    email: "verify-test@bemydev.local",
    package: "Starter",
    needs_photographer: false,
    needs_brand_designer: false,
    business_idea: "Automated connection test — safe to delete.",
    callback_number: null,
    preferred_contact: null,
    ip_address: "127.0.0.1",
    user_agent: "verify-supabase-script",
    status: "New",
  };

  const { data: inserted, error: insertError } = await supabase
    .from("leads")
    .insert(testLead)
    .select("id")
    .single();

  if (insertError) {
    console.log(`insert test: FAILED (${insertError.message})`);
    process.exit(1);
  }

  console.log(`insert test: OK (id ${inserted.id})`);

  const { error: deleteError } = await supabase.from("leads").delete().eq("id", inserted.id);

  if (deleteError) {
    console.log(`cleanup test row: FAILED (${deleteError.message})`);
    console.log(`Manually delete test lead id: ${inserted.id}`);
    process.exit(1);
  }

  console.log("cleanup test row: OK");
  console.log("\nSupabase is configured correctly. Lead inserts will work.");
}

main().catch((err) => {
  console.error("Verification failed:", err.message ?? err);
  process.exit(1);
});
