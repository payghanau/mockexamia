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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & { step: any })
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
      ? PublicTableNameOrOptions
      : never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][TableName] extends {
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
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
      ? PublicTableNameOrOptions
      : never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][TableName] extends {
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
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
      ? PublicTableNameOrOptions
      : never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][TableName] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
      ? PublicEnumNameOrOptions
      : never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][EnumName]
    : never
// Add the contact_messages table to the Tables interface
export interface ExamRow {
  id: string;
  title: string;
  description: string | null;
  duration: number;
  total_questions: number;
  category: string;
  subcategory: string | null;
  type: string;
  fee: number;
  created_by: string | null;
  created_at: string | null;
  is_active: boolean | null;
}

export interface Tables {
  exams: {
    Row: ExamRow;
    Insert: {
      id?: string;
      title: string;
      description?: string | null;
      duration: number;
      total_questions: number;
      category: string;
      subcategory?: string | null;
      type: string;
      fee: number;
      created_by?: string | null;
      created_at?: string | null;
      is_active?: boolean | null;
    };
    Update: {
      id?: string;
      title?: string;
      description?: string | null;
      duration?: number;
      total_questions?: number;
      category?: string;
      subcategory?: string | null;
      type?: string;
      fee?: number;
      created_by?: string | null;
      created_at?: string | null;
      is_active?: boolean | null;
    };
    Relationships: [];
  };
  payments: {
    Row: {
      id: string;
      user_id: string;
      amount: number;
      status: string;
      created_at: string | null;
      payment_id: string | null;
      exam_id: string | null;
    };
    Insert: {
      id?: string;
      user_id: string;
      amount: number;
      status?: string;
      created_at?: string | null;
      payment_id?: string | null;
      exam_id?: string | null;
    };
    Update: {
      id?: string;
      user_id?: string;
      amount?: number;
      status?: string;
      created_at?: string | null;
      payment_id?: string | null;
      exam_id?: string | null;
    };
    Relationships: [];
  };
  questions: {
    Row: {
      id: string;
      exam_id: string;
      question_text: string;
      options: string[] | null;
      correct_answer: string;
      explanation: string | null;
      created_at: string | null;
    };
    Insert: {
      id?: string;
      exam_id: string;
      question_text: string;
      options?: string[] | null;
      correct_answer: string;
      explanation?: string | null;
      created_at?: string | null;
    };
    Update: {
      id?: string;
      exam_id?: string;
      question_text?: string;
      options?: string[] | null;
      correct_answer?: string;
      explanation?: string | null;
      created_at?: string | null;
    };
    Relationships: [];
  };
  user_exams: {
    Row: {
      id: string;
      user_id: string;
      exam_id: string;
      score: number;
      time_taken: number;
      created_at: string | null;
      answers: Record<string, string> | null;
    };
    Insert: {
      id?: string;
      user_id: string;
      exam_id: string;
      score: number;
      time_taken: number;
      created_at?: string | null;
      answers?: Record<string, string> | null;
    };
    Update: {
      id?: string;
      user_id?: string;
      exam_id?: string;
      score?: number;
      time_taken?: number;
      created_at?: string | null;
      answers?: Record<string, string> | null;
    };
    Relationships: [];
  };
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
