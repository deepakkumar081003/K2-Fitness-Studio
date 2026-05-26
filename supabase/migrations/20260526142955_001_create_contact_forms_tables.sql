/*
  # Create Contact Forms Tables for K2 Fitness Studio

  This migration creates tables to handle contact form submissions for the K2 Fitness Studio website.

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key) - Unique identifier for each appointment
      - `name` (text, not null) - Full name of the person booking
      - `email` (text, not null) - Email address
      - `phone` (text, not null) - Phone number
      - `preferred_date` (date, not null) - Preferred visit date
      - `preferred_time` (text, not null) - Preferred time slot
      - `fitness_goals` (text) - Optional fitness goals/interests
      - `status` (text, default 'pending') - Appointment status (pending, confirmed, completed, cancelled)
      - `created_at` (timestamptz, default now()) - Submission timestamp
    
    - `quote_requests`
      - `id` (uuid, primary key) - Unique identifier for each quote request
      - `name` (text, not null) - Full name
      - `email` (text, not null) - Email address
      - `phone` (text, not null) - Phone number
      - `membership_type` (text) - Interested membership type (monthly, quarterly, yearly)
      - `requirements` (text) - Special requirements or questions
      - `status` (text, default 'pending') - Quote status (pending, responded)
      - `created_at` (timestamptz, default now()) - Submission timestamp

  2. Security
    - Enable RLS on both tables
    - Public INSERT policies to allow form submissions
    - No SELECT/UPDATE/DELETE policies for public access (admin only)
  
  3. Important Notes
    - These tables allow public form submissions (no authentication required)
    - Data can only be viewed/managed through Supabase dashboard
    - Contact forms are protected by rate limiting at the application level
*/

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  fitness_goals text DEFAULT '',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  membership_type text DEFAULT '',
  requirements text DEFAULT '',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Create INSERT policy for appointments (public can submit)
CREATE POLICY "Public can submit appointment requests"
  ON appointments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create INSERT policy for quote_requests (public can submit)
CREATE POLICY "Public can submit quote requests"
  ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);