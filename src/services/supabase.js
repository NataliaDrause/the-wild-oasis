import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://qmdkijyzevyrfryapokn.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtZGtpanl6ZXZ5cmZyeWFwb2tuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NjkyMTQsImV4cCI6MjA1NDQ0NTIxNH0.Ouq_L4m7bVkau5XdiXmMkJjpHhYPr6mDun_LR7aHmMU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
