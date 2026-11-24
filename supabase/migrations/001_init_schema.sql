create extension if not exists "uuid-ossp";

create table if not exists public.profiles (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  full_name text not null,
  role text not null default 'admin' check (role in ('admin', 'editor', 'viewer')),
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  description text not null,
  short_description text,
  icon_name text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  excerpt text not null,
  content text not null,
  cover_image text,
  author_id uuid references public.profiles(id) on delete set null,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz,
  seo_title text,
  seo_description text,
  reading_time integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_post_categories (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid not null references public.blog_posts(id) on delete cascade,
  category_id uuid not null references public.blog_categories(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(post_id, category_id)
);

create table if not exists public.appointments (
  id uuid primary key default uuid_generate_v4(),
  customer_name text not null,
  company_name text,
  email text not null,
  phone text not null,
  subject text not null,
  service_id uuid references public.services(id) on delete set null,
  preferred_date date not null,
  preferred_time time not null,
  meeting_mode text not null check (meeting_mode in ('presentiel', 'visio')),
  message text,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.availability_rules (
  id uuid primary key default uuid_generate_v4(),
  day_of_week smallint not null check (day_of_week between 0 and 6),
  start_time time not null,
  end_time time not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blocked_slots (
  id uuid primary key default uuid_generate_v4(),
  date date not null,
  start_time time not null,
  end_time time not null,
  reason text,
  created_at timestamptz not null default now()
);

create table if not exists public.quote_requests (
  id uuid primary key default uuid_generate_v4(),
  customer_name text not null,
  company_name text,
  email text not null,
  phone text not null,
  sector text,
  service_id uuid references public.services(id) on delete set null,
  description text not null,
  budget_estimate numeric,
  desired_deadline text,
  status text not null default 'new' check (status in ('new', 'in_review', 'quote_preparing', 'quote_sent', 'accepted', 'rejected', 'closed')),
  reference text unique not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quote_attachments (
  id uuid primary key default uuid_generate_v4(),
  quote_request_id uuid not null references public.quote_requests(id) on delete cascade,
  file_name text not null,
  storage_path text not null,
  mime_type text,
  file_size integer,
  uploaded_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id uuid primary key default uuid_generate_v4(),
  setting_key text unique not null,
  setting_value jsonb not null,
  description text,
  updated_at timestamptz not null default now()
);

create table if not exists public.activity_logs (
  id uuid primary key default uuid_generate_v4(),
  actor_id uuid references public.profiles(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_blog_posts_slug on public.blog_posts(slug);
create index if not exists idx_blog_posts_status on public.blog_posts(status);
create index if not exists idx_blog_posts_published_at on public.blog_posts(published_at);
create index if not exists idx_appointments_status on public.appointments(status);
create index if not exists idx_appointments_date on public.appointments(preferred_date);
create index if not exists idx_quote_requests_status on public.quote_requests(status);
create index if not exists idx_contact_messages_status on public.contact_messages(status);

alter table public.profiles enable row level security;
alter table public.services enable row level security;
alter table public.blog_categories enable row level security;
alter table public.blog_posts enable row level security;
alter table public.blog_post_categories enable row level security;
alter table public.appointments enable row level security;
alter table public.availability_rules enable row level security;
alter table public.blocked_slots enable row level security;
alter table public.quote_requests enable row level security;
alter table public.quote_attachments enable row level security;
alter table public.contact_messages enable row level security;
alter table public.site_settings enable row level security;
alter table public.activity_logs enable row level security;

create policy "Public can read published blog posts" on public.blog_posts
for select using (status = 'published');

create policy "Public can read blog categories" on public.blog_categories
for select using (true);

create policy "Public can read active services" on public.services
for select using (is_active = true);

create policy "Public can insert contact messages" on public.contact_messages
for insert with check (true);

create policy "Public can insert appointments" on public.appointments
for insert with check (true);

create policy "Public can insert quote requests" on public.quote_requests
for insert with check (true);

create policy "Authenticated admins can manage profiles" on public.profiles
for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Authenticated admins can manage blog data" on public.blog_posts
for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Authenticated admins can manage quote requests" on public.quote_requests
for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Authenticated admins can manage appointments" on public.appointments
for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Authenticated admins can manage site settings" on public.site_settings
for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Authenticated admins can manage activity logs" on public.activity_logs
for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
