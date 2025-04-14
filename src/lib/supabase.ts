
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storageKey: 'myturnindia-auth'
  }
});

// Create reviews table if it doesn't exist
(async () => {
  try {
    const { error } = await supabase.rpc('create_reviews_table_if_not_exists');
    if (error && !error.message.includes('already exists')) {
      console.error('Error creating reviews table:', error);
    }
  } catch (err) {
    // Ignore if RPC doesn't exist (will be created by SQL migration)
    console.log('Using SQL migration for reviews table creation');
  }
})();
