export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      exams: {
        Row: {
          category: string
          created_at: string | null
          created_by: string | null
          description: string | null
          duration: number
          fee: number
          id: string
          is_active: boolean | null
          subcategory: string | null
          title: string
          total_questions: number
          type: string
        }
        Insert: {
          category: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          duration: number
          fee: number
          id?: string
          is_active?: boolean | null
          subcategory?: string | null
          title: string
          total_questions: number
          type: string
        }
        Update: {
          category?: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          duration?: number
          fee?: number
          id?: string
          is_active?: boolean | null
          subcategory?: string | null
          title?: string
          total_questions?: number
          type?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          exam_id: string | null
          id: string
          payment_id: string | null
          status: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          exam_id?: string | null
          id?: string
          payment_id?: string | null
          status?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          exam_id?: string | null
          id?: string
          payment_id?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      questions: {
        Row: {
          correct_answer: string
          created_at: string | null
          exam_id: string
          explanation: string | null
          id: string
          options: string[] | null
          question_text: string
        }
        Insert: {
          correct_answer: string
          created_at?: string | null
          exam_id: string
          explanation?: string | null
          id?: string
          options?: string[] | null
          question_text: string
        }
        Update: {
          correct_answer?: string
          created_at?: string | null
          exam_id?: string
          explanation?: string | null
          id?: string
          options?: string[] | null
          question_text?: string
        }
        Relationships: []
      }
      user_exams: {
        Row: {
          answers: Json | null
          created_at: string | null
          exam_id: string
          id: string
          score: number
          time_taken: number
          user_id: string
        }
        Insert: {
          answers?: Json | null
          created_at?: string | null
          exam_id: string
          id?: string
          score: number
          time_taken: number
          user_id: string
        }
        Update: {
          answers?: Json | null
          created_at?: string | null
          exam_id?: string
          id?: string
          score?: number
          time_taken?: number
          user_id?: string
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          id: string;
          name: string;
          email: string;
          subject: string;
          message: string;
          created_at: string;
          status: string;
          user_id: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          subject: string;
          message: string;
          created_at?: string;
          status?: string;
          user_id?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          subject?: string;
          message?: string;
          created_at?: string;
          status?: string;
          user_id?: string | null;
        };
        Relationships: [];
      };
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type ExamRow = Database['public']['Tables']['exams']['Row'];
export type QuestionRow = Database['public']['Tables']['questions']['Row'];
export type UserExamRow = Database['public']['Tables']['user_exams']['Row'];
export type PaymentRow = Database['public']['Tables']['payments']['Row'];
export type ContactMessageRow = Database['public']['Tables']['contact_messages']['Row'];

export type TablesType<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : PublicTableNameOrOptions
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : PublicTableNameOrOptions
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : PublicTableNameOrOptions
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type EnumsType<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : PublicEnumNameOrOptions
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName extends keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"] ? EnumName : never]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never
