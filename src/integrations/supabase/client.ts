// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://nufzndolknzcpsiszsev.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51ZnpuZG9sa256Y3BzaXN6c2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NDQ5MjksImV4cCI6MjA1ODMyMDkyOX0.Nj_Tq7esivnTfAH-dLSGU4h2Rw9W6NQjmaSWG0lro2A";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);