
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth services
export const authService = {
  register: async (userData: { email: string; password: string; name?: string }) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  
  login: async (credentials: { email: string; password: string }) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },
  
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  }
};

// Exam services
export const examService = {
  getAllExams: async (params?: { category?: string; type?: string }) => {
    const response = await api.get('/exams', { params });
    return response.data;
  },
  
  getExamById: async (examId: string) => {
    const response = await api.get(`/exams/${examId}`);
    return response.data;
  },
  
  getExamQuestions: async (examId: string) => {
    const response = await api.get(`/exams/${examId}/questions`);
    return response.data;
  },
  
  createExam: async (examData: any) => {
    const response = await api.post('/exams', examData);
    return response.data;
  },
  
  updateExam: async (examId: string, examData: any) => {
    const response = await api.put(`/exams/${examId}`, examData);
    return response.data;
  },
  
  deleteExam: async (examId: string) => {
    const response = await api.delete(`/exams/${examId}`);
    return response.data;
  },
  
  addQuestions: async (examId: string, questions: any[]) => {
    const response = await api.post(`/exams/${examId}/questions`, { questions });
    return response.data;
  }
};

// User exam services
export const userExamService = {
  getUserExams: async () => {
    const response = await api.get('/user-exams');
    return response.data;
  },
  
  getUserExamById: async (resultId: string) => {
    const response = await api.get(`/user-exams/${resultId}`);
    return response.data;
  },
  
  startExam: async (examId: string) => {
    const response = await api.post('/user-exams/start', { examId });
    return response.data;
  },
  
  submitExam: async (userExamId: string, answers: any[]) => {
    const response = await api.post(`/user-exams/${userExamId}/submit`, { answers });
    return response.data;
  },
  
  getExamAnalysis: async (resultId: string) => {
    const response = await api.get(`/user-exams/${resultId}/analysis`);
    return response.data;
  }
};

// Payment services
export const paymentService = {
  processPayment: async (examId: string, paymentMethod: string) => {
    const response = await api.post('/payments/process', { examId, paymentMethod });
    return response.data;
  },
  
  getPaymentStatus: async (examId: string) => {
    const response = await api.get(`/payments/${examId}/status`);
    return response.data;
  }
};

export default api;
