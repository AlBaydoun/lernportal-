-- ============================================================
-- Lernportal – Supabase Einrichtung
-- Kopiere ALLES und führe es im Supabase SQL Editor mit RUN aus.
-- Das Skript kann gefahrlos mehrfach ausgeführt werden.
-- ============================================================

-- 1) Tabelle anlegen (falls noch nicht vorhanden)
create table if not exists public.progress (
  id         text primary key,
  payload    text not null,
  updated_at timestamptz default now()
);

-- 2) Zeilenschutz einschalten
alter table public.progress enable row level security;

-- 3) Alte Regeln entfernen (damit das Skript wiederholbar ist)
drop policy if exists "portal read"    on public.progress;
drop policy if exists "portal write"   on public.progress;
drop policy if exists "portal update"  on public.progress;
drop policy if exists "portal_select"  on public.progress;
drop policy if exists "portal_insert"  on public.progress;
drop policy if exists "portal_update"  on public.progress;

-- 4) Neue Regeln: Lesen, Anlegen und Aktualisieren erlaubt.
--    LÖSCHEN wird bewusst NICHT erlaubt -> Daten können nicht verloren gehen.
create policy "portal_select" on public.progress
  for select to anon, authenticated using (true);

create policy "portal_insert" on public.progress
  for insert to anon, authenticated with check (true);

create policy "portal_update" on public.progress
  for update to anon, authenticated using (true) with check (true);

-- 5) Rechte für den öffentlichen Schlüssel (Publishable / anon)
grant usage on schema public to anon, authenticated;
grant select, insert, update on public.progress to anon, authenticated;
revoke delete on public.progress from anon, authenticated;

-- 6) Kontrolle: zeigt die aktiven Regeln an
select policyname, cmd, roles from pg_policies where tablename = 'progress';
