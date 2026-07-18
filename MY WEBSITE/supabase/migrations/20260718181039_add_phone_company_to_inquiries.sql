/*
# Add phone and company columns to contact_inquiries

1. Modified Tables
- `contact_inquiries`
  - Add `phone` (text, nullable) — visitor's phone number (optional)
  - Add `company` (text, nullable) — visitor's company name (optional)
2. Security
- No RLS policy changes. Existing anon INSERT policy already covers the new columns.
*/

ALTER TABLE contact_inquiries
  ADD COLUMN IF NOT EXISTS phone text,
  ADD COLUMN IF NOT EXISTS company text;
