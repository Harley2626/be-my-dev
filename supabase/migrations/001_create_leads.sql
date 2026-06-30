-- Be My Dev — leads table
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  package text,
  needs_photographer boolean not null default false,
  needs_brand_designer boolean not null default false,
  business_idea text not null,
  callback_number text,
  preferred_contact text,
  ip_address text,
  user_agent text,
  status text not null default 'New'
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (email);
create index if not exists leads_ip_address_idx on public.leads (ip_address);

alter table public.leads enable row level security;

-- No public policies: only service role (server-side) can read/write.
