/*
# Create contact_inquiries table (single-tenant, no auth)

1. New Tables
- `contact_inquiries`
- `id` (uuid, primary key)
- `name` (text, not null) — sender's name
- `email` (text, not null) — sender's email
- `project_type` (text) — optional category (e.g. "Web Design", "Branding")
- `budget` (text) — optional budget range
- `message` (text, not null) — the inquiry body
- `status` (text, default 'new') — tracking status (new/read/replied)
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_inquiries`.
- Allow anon + authenticated INSERT only (public contact form submissions).
- No SELECT/UPDATE/DELETE for anon — only the service role (server-side) can read/manage inquiries.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text,
  budget text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_inquiries"
ON contact_inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
