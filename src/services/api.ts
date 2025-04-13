import { supabaseClient } from "@/lib/supabase";
import { ContactFormValues } from "@/types";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const authService = {
  login: async (email: string) => {
    try {
      const { error } = await supabaseClient.auth.signInWithOtp({ email });
      if (error) throw error;
      return { success: true, message: 'Check your email for the login link' };
    } catch (err: any) {
      console.error('Login error:', err.message);
      return { success: false, message: err.message || 'Failed to login' };
    }
  },

  register: async (email: string) => {
    try {
      const { error } = await supabaseClient.auth.signUp({ email, options: { emailRedirectTo: `${window.location.origin}/dashboard` } });
      if (error) throw error;
      return { success: true, message: 'Check your email to complete registration' };
    } catch (err: any) {
      console.error('Registration error:', err.message);
      return { success: false, message: err.message || 'Failed to register' };
    }
  },

  logout: async () => {
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;
      return { success: true };
    } catch (err: any) {
      console.error('Logout error:', err.message);
      return { success: false, message: err.message || 'Failed to logout' };
    }
  },
};

export const paymentService = {
  createRazorpayOrder: async (amount: number, examId: string, userId: string) => {
    try {
      const response = await fetch('/api/razorpay-create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, examId, userId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create Razorpay order');
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error('Error creating Razorpay order:', error.message);
      throw error;
    }
  },

  verifyRazorpayPayment: async (razorpayOrderId: string, razorpayPaymentId: string, razorpaySignature: string) => {
    try {
      const response = await fetch('/api/razorpay-verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ razorpayOrderId, razorpayPaymentId, razorpaySignature }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to verify Razorpay payment');
      }

      const data = await response.json();
      return data.success;
    } catch (error: any) {
      console.error('Error verifying Razorpay payment:', error.message);
      throw error;
    }
  },
};

export const contactService = {
  submitContactForm: async (values: ContactFormValues) => {
    try {
      const response = await fetch('/api/submit-contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit contact form');
      }

      const data = await response.json();
      return data.success;
    } catch (error: any) {
      console.error('Error submitting contact form:', error.message);
      throw error;
    }
  },
};

export const examService = {
  getAllExams: async () => {
    try {
      const { data, error } = await supabaseClient
        .from('exams')
        .select('*')
        .eq('is_active', true);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching exams:', error);
      throw error;
    }
  },

  getExamById: async (examId: string) => {
    try {
      const { data, error } = await supabaseClient
        .from('exams')
        .select('*')
        .eq('id', examId)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching exam:', error);
      throw error;
    }
  },
  
  getUserPurchases: async (userId: string) => {
    try {
      if (!userId) throw new Error("User ID is required");
      
      const { data, error } = await supabaseClient
        .from('payments')
        .select(`
          *,
          exam:exam_id (
            id,
            title,
            description,
            category,
            type,
            duration,
            total_questions
          )
        `)
        .eq('user_id', userId)
        .eq('status', 'success');

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching user purchases:', error);
      return [];
    }
  },
};
