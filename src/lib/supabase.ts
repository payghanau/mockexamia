
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nufzndolknzcpsiszsev.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51ZnpuZG9sa256Y3BzaXN6c2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDQ5MjksImV4cCI6MjA1ODMyMDkyOX0.Nj_Tq7esivnTfAH-dLSGU4h2Rw9W6NQjmaSWG0lro2A';

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
