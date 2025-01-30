import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://xibuneqeunqyobrfafbu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpYnVuZXFldW5xeW9icmZhZmJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNDc4NTAsImV4cCI6MjA1MTkyMzg1MH0.6phe6qju0I2h4F-ugadpAfS8npyvUEGV6ESdtBWnTRw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
