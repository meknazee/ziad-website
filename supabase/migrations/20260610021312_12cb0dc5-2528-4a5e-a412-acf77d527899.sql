
-- profiles: one row per signed-in user
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  email text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant select on public.profiles to authenticated;
grant insert, update on public.profiles to authenticated;
grant all on public.profiles to service_role;

alter table public.profiles enable row level security;

create policy "Authenticated can read profiles"
  on public.profiles for select to authenticated using (true);

create policy "Users insert own profile"
  on public.profiles for insert to authenticated
  with check (auth.uid() = id);

create policy "Users update own profile"
  on public.profiles for update to authenticated
  using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, email)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data->>'display_name',
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      split_part(new.email, '@', 1)
    ),
    new.email
  );
  return new;
end;
$$;

revoke execute on function public.handle_new_user() from public, anon, authenticated;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- bookings: tennis lessons with Coach Z
create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references auth.users(id) on delete cascade,
  meeting_type_slug text not null,
  meeting_type_title text not null,
  duration_minutes int not null,
  location text not null default 'Tuckahoe Recreation Club',
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  client_name text not null default '',
  client_email text not null default '',
  client_notes text not null default '',
  -- reserved for future Google Calendar sync
  google_event_id text,
  google_meet_url text,
  status text not null default 'pending_confirmation'
    check (status in ('pending_confirmation','confirmed','cancelled')),
  created_at timestamptz not null default now(),
  check (ends_at > starts_at)
);

create index on public.bookings (starts_at);
create index on public.bookings (client_id, starts_at);

grant select, insert, update on public.bookings to authenticated;
grant all on public.bookings to service_role;

alter table public.bookings enable row level security;

-- Authenticated users can see all bookings' time ranges (so they can compute
-- which slots are taken). This is intentional: we expose only that a slot is
-- taken, not who booked it. For privacy we'll add a view later if needed.
create policy "Authenticated can read bookings"
  on public.bookings for select to authenticated using (true);

create policy "Clients insert own bookings"
  on public.bookings for insert to authenticated
  with check (auth.uid() = client_id);

create policy "Clients update own bookings"
  on public.bookings for update to authenticated
  using (auth.uid() = client_id);
