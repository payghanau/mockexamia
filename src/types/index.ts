
export type User = {
  id: string;
  email: string;
  name?: string;
  role: 'user' | 'admin';
  createdAt: Date;
};

export type Question = {
  id: string;
  text: string;
  options: string[];
  correctAnswers: number[];
  type: 'single' | 'multiple';
  marks: 1 | 2;
  negativeMarks: number;
};

export type Exam = {
  id: string;
  title: string;
  description?: string;
  category: 'NISM' | 'GATE';
  subcategory?: string;
  type: 'chapter-wise' | 'section-wise' | 'full-length';
  duration: number; // in minutes
  totalQuestions: number;
  fee: number;
  createdBy: string;
  createdAt: Date;
  isActive: boolean;
};

export type UserExam = {
  id: string;
  userId: string;
  examId: string;
  startTime: Date;
  endTime?: Date;
  status: 'pending' | 'in-progress' | 'completed';
  score?: number;
  answers: {
    questionId: string;
    selectedOptions: number[];
    isCorrect: boolean;
    marksObtained: number;
  }[];
  paymentStatus: 'pending' | 'completed';
  paymentId?: string;
};

export type ExamAnalysis = {
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  skipped: number;
  totalMarks: number;
  obtainedMarks: number;
  percentageScore: number;
  timeTaken: number; // in seconds
  accuracy: number;
};

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
