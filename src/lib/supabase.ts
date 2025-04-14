
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
    // Check if the reviews table exists
    const { data, error } = await supabase
      .from('reviews')
      .select('id')
      .limit(1);
    
    // If the table doesn't exist or there's an error, attempt to create it
    if (error && error.code === 'PGRST116') {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS reviews (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
          user_email TEXT NOT NULL,
          content TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
        
        -- Add RLS policies
        ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
        
        -- Policy for all users to read reviews
        CREATE POLICY "Reviews are viewable by everyone" ON reviews
          FOR SELECT USING (true);
        
        -- Policy for users to insert their own reviews
        CREATE POLICY "Users can create their own reviews" ON reviews
          FOR INSERT WITH CHECK (auth.uid() = user_id);
        
        -- Policy for users to update their own reviews
        CREATE POLICY "Users can update their own reviews" ON reviews
          FOR UPDATE USING (auth.uid() = user_id);
        
        -- Policy for admin to delete any review
        CREATE POLICY "Admins can delete any review" ON reviews
          FOR DELETE USING (
            auth.email() LIKE '%@admin.com' OR
            auth.email() = 'admin@myturnindia.com'
          );
      `;
      
      const { error: createError } = await supabase.rpc('exec_sql', { sql: createTableQuery });
      if (createError) console.error('Error creating reviews table:', createError);
    }
  } catch (err) {
    // Silently handle any errors during startup
    console.log('Error checking or creating reviews table:', err);
  }
})();
