
// Custom type definitions for Supabase tables
// These types are used to provide type safety for our database operations

export type ExamRow = {
  id: string;
  title: string;
  description?: string;
  category: string;
  subcategory?: string;
  type: string;
  duration: number;
  total_questions: number;
  fee: number;
  created_by?: string;
  created_at?: string;
  is_active: boolean;
}

export type QuestionRow = {
  id: string;
  exam_id: string;
  text: string;
  options: string[];
  correct_answers: number[];
  type: string;
  marks: number;
  negative_marks: number;
}

export type UserExamRow = {
  id: string;
  user_id: string;
  exam_id: string;
  status: string;
  start_time: string;
  end_time?: string;
  score?: number;
  answers?: {
    questionId: string;
    selectedOptions: number[];
    isCorrect: boolean;
    marksObtained: number;
  }[];
  payment_status: string;
  payment_id?: string;
}

export type PaymentRow = {
  id: string;
  user_id: string;
  exam_id: string;
  amount: number;
  status: string;
  payment_id?: string;
  order_id?: string;
  created_at?: string;
}
