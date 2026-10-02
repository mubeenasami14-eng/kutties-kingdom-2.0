/*
# Create bookings table for Kutties Kingdom

1. New Tables
- `bookings`
  - `id` (uuid, primary key)
  - `parent_name` (text, not null) - name of the parent/guardian submitting the booking
  - `phone` (text, not null) - contact phone number
  - `children_count` (integer, not null, default 1) - number of children
  - `preferred_date` (date, not null) - date they want to visit
  - `preferred_time` (text, not null) - preferred time slot
  - `extra_arcade_games` (integer, not null, default 0) - number of extra arcade games requested
  - `message` (text) - optional notes from parent
  - `status` (text, not null, default 'pending') - booking status
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `bookings`.
- Allow anon + authenticated CRUD because this is a no-auth public booking form.
- All policies use `TO anon, authenticated` so the anon-key frontend can insert and read bookings.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name text NOT NULL,
  phone text NOT NULL,
  children_count integer NOT NULL DEFAULT 1,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  extra_arcade_games integer NOT NULL DEFAULT 0,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_bookings" ON bookings;
CREATE POLICY "anon_select_bookings"
ON bookings FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings"
ON bookings FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_bookings" ON bookings;
CREATE POLICY "anon_update_bookings"
ON bookings FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_bookings" ON bookings;
CREATE POLICY "anon_delete_bookings"
ON bookings FOR DELETE
TO anon, authenticated USING (true);