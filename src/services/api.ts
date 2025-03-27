
import axios from 'axios';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

// Create axios instance for any external APIs we might still need
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Auth services
export const authService = {
  register: async (userData: { email: string; password: string; name?: string }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            name: userData.name || ''
          }
        }
      });
      
      if (error) throw error;
      
      return data;
    } catch (error: any) {
      console.error('Registration failed:', error);
      throw error;
    }
  },
  
  login: async (credentials: { email: string; password: string }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      });
      
      if (error) throw error;
      
      return data;
    } catch (error: any) {
      console.error('Login failed:', error);
      throw error;
    }
  },
  
  getCurrentUser: async () => {
    try {
      const { data, error } = await supabase.auth.getUser();
      
      if (error) throw error;
      
      return data.user;
    } catch (error: any) {
      console.error('Get current user failed:', error);
      throw error;
    }
  }
};

// Exam services - using Supabase
export const examService = {
  getAllExams: async (params?: { category?: string; type?: string }) => {
    try {
      let query = supabase.from('exams').select('*');
      
      if (params?.category) {
        query = query.eq('category', params.category);
      }
      
      if (params?.type) {
        query = query.eq('type', params.type);
      }
      
      const { data, error } = await query;
      
      if (error) throw error;
      
      return data;
    } catch (error: any) {
      console.error('Get all exams failed:', error);
      toast.error('Failed to load exams');
      throw error;
    }
  },
  
  getExamById: async (examId: string) => {
    try {
      const { data, error } = await supabase
        .from('exams')
        .select('*')
        .eq('id', examId)
        .single();
      
      if (error) throw error;
      
      return data;
    } catch (error: any) {
      console.error('Get exam by ID failed:', error);
      toast.error('Failed to load exam details');
      throw error;
    }
  },
  
  getExamQuestions: async (examId: string) => {
    try {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('exam_id', examId);
      
      if (error) throw error;
      
      return data;
    } catch (error: any) {
      console.error('Get exam questions failed:', error);
      toast.error('Failed to load exam questions');
      throw error;
    }
  },
  
  createExam: async (examData: any) => {
    try {
      const { data, error } = await supabase
        .from('exams')
        .insert(examData)
        .select();
      
      if (error) throw error;
      
      return data[0];
    } catch (error: any) {
      console.error('Create exam failed:', error);
      toast.error('Failed to create exam');
      throw error;
    }
  },
  
  updateExam: async (examId: string, examData: any) => {
    try {
      const { data, error } = await supabase
        .from('exams')
        .update(examData)
        .eq('id', examId)
        .select();
      
      if (error) throw error;
      
      return data[0];
    } catch (error: any) {
      console.error('Update exam failed:', error);
      toast.error('Failed to update exam');
      throw error;
    }
  },
  
  deleteExam: async (examId: string) => {
    try {
      const { error } = await supabase
        .from('exams')
        .delete()
        .eq('id', examId);
      
      if (error) throw error;
      
      return { success: true };
    } catch (error: any) {
      console.error('Delete exam failed:', error);
      toast.error('Failed to delete exam');
      throw error;
    }
  },
  
  addQuestions: async (examId: string, questions: any[]) => {
    try {
      const questionsWithExamId = questions.map(q => ({
        ...q,
        exam_id: examId
      }));
      
      const { data, error } = await supabase
        .from('questions')
        .insert(questionsWithExamId)
        .select();
      
      if (error) throw error;
      
      return data;
    } catch (error: any) {
      console.error('Add questions failed:', error);
      toast.error('Failed to add questions');
      throw error;
    }
  }
};

// User exam services - using Supabase
export const userExamService = {
  getUserExams: async () => {
    try {
      const { data, error } = await supabase
        .from('user_exams')
        .select('*');
      
      if (error) throw error;
      
      return data;
    } catch (error: any) {
      console.error('Get user exams failed:', error);
      toast.error('Failed to load your exam results');
      throw error;
    }
  },
  
  getUserExamById: async (resultId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_exams')
        .select('*')
        .eq('id', resultId)
        .single();
      
      if (error) throw error;
      
      return data;
    } catch (error: any) {
      console.error('Get user exam by ID failed:', error);
      toast.error('Failed to load exam result');
      throw error;
    }
  },
  
  startExam: async (examId: string) => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      
      if (!userData.user) throw new Error('Not authenticated');
      
      const { data, error } = await supabase
        .from('user_exams')
        .insert({
          exam_id: examId,
          user_id: userData.user.id,
          status: 'in_progress',
          start_time: new Date().toISOString()
        })
        .select();
      
      if (error) throw error;
      
      return data[0];
    } catch (error: any) {
      console.error('Start exam failed:', error);
      toast.error('Failed to start exam');
      throw error;
    }
  },
  
  submitExam: async (userExamId: string, answers: any[]) => {
    try {
      // First, update the user_exam record
      const { data: examData, error: examError } = await supabase
        .from('user_exams')
        .update({
          status: 'completed',
          end_time: new Date().toISOString(),
          answers: answers
        })
        .eq('id', userExamId)
        .select();
      
      if (examError) throw examError;
      
      return examData[0];
    } catch (error: any) {
      console.error('Submit exam failed:', error);
      toast.error('Failed to submit exam');
      throw error;
    }
  },
  
  getExamAnalysis: async (resultId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_exams')
        .select(`
          *,
          exam:exams(*)
        `)
        .eq('id', resultId)
        .single();
      
      if (error) throw error;
      
      return data;
    } catch (error: any) {
      console.error('Get exam analysis failed:', error);
      toast.error('Failed to load exam analysis');
      throw error;
    }
  }
};

// Payment services - continue using Razorpay
export const paymentService = {
  createPaymentOrder: async (examId: string) => {
    try {
      // For Razorpay we still need a server endpoint
      const response = await api.post('/payments/create-order', { examId });
      return response.data;
    } catch (error: any) {
      console.error('Create payment order failed:', error);
      toast.error('Failed to create payment order');
      throw error;
    }
  },
  
  verifyPayment: async (paymentData: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }) => {
    try {
      const response = await api.post('/payments/verify', paymentData);
      return response.data;
    } catch (error: any) {
      console.error('Verify payment failed:', error);
      toast.error('Failed to verify payment');
      throw error;
    }
  },
  
  getPaymentStatus: async (examId: string) => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      
      if (!userData.user) throw new Error('Not authenticated');
      
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .eq('exam_id', examId)
        .eq('user_id', userData.user.id)
        .order('created_at', { ascending: false })
        .limit(1);
      
      if (error) throw error;
      
      return data.length > 0 ? data[0] : { status: 'not_paid' };
    } catch (error: any) {
      console.error('Get payment status failed:', error);
      toast.error('Failed to get payment status');
      throw error;
    }
  }
};

export default api;
