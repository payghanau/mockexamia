
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminRoute from "./components/auth/AdminRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import ExamPage from "./pages/ExamPage";
import TestResults from "./pages/TestResults";
import PaymentPage from "./pages/PaymentPage";
import AdminDashboard from "./pages/AdminDashboard";
import NismExams from "./pages/NismExams";
import GateExams from "./pages/GateExams";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import MockTests from "./pages/MockTests";
import BackgroundAnimation from "./components/ui/BackgroundAnimation";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <BackgroundAnimation variant="minimal" />
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/exam/:examId" element={
                <ProtectedRoute>
                  <ExamPage />
                </ProtectedRoute>
              } />
              <Route path="/results/:resultId" element={
                <ProtectedRoute>
                  <TestResults />
                </ProtectedRoute>
              } />
              <Route path="/payment/:examId" element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              } />
              <Route path="/admin" element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } />
              <Route path="/admin/*" element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } />
              <Route path="/exams/nism" element={<NismExams />} />
              <Route path="/exams/gate" element={<GateExams />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mock-tests" element={<MockTests />} />
              
              {/* Add redirects for the old paths to maintain backward compatibility */}
              <Route path="/nism-exams" element={<Navigate to="/exams/nism" replace />} />
              <Route path="/gate-exams" element={<Navigate to="/exams/gate" replace />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
