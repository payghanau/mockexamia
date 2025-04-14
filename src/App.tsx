import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Contact from '@/pages/Contact';
import MockTests from '@/pages/MockTests';
import GateExams from '@/pages/GateExams';
import NismCertification from '@/pages/NismCertification';
import NismExams from '@/pages/NismExams';
import Dashboard from '@/pages/Dashboard';
import UserProfile from '@/pages/UserProfile';
import ExamPage from '@/pages/ExamPage';
import TestResults from '@/pages/TestResults';
import PaymentPage from '@/pages/PaymentPage';
import AdminDashboard from '@/pages/AdminDashboard';
import NotFound from '@/pages/NotFound';
import ProtectedRoute from '@/components/ProtectedRoute';
import AdminRoute from '@/components/AdminRoute';

function App() {
  return (
    <div className="font-work-sans">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mock-tests" element={<MockTests />} />
        <Route path="/gate-exams" element={<GateExams />} />
        <Route path="/nism-certification" element={<NismCertification />} />
        <Route path="/nism-exams" element={<NismExams />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/user-profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
        <Route path="/exam/:examId" element={<ProtectedRoute><ExamPage /></ProtectedRoute>} />
        <Route path="/results/:resultId" element={<ProtectedRoute><TestResults /></ProtectedRoute>} />
        <Route path="/payment/:examId" element={<ProtectedRoute><PaymentPage /></ProtectedRoute>} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
