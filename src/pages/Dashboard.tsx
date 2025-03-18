
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ExamCard from "@/components/exams/ExamCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Exam } from "@/types";
import { examService } from "@/services/api";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Dashboard - myturnindia";
  }, []);

  // Fetch all exams
  const { data: exams, isLoading, error } = useQuery({
    queryKey: ['exams'],
    queryFn: () => examService.getAllExams()
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Loading exams...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">Failed to load exams</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Try Again
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const nismExams = exams.filter((exam: Exam) => exam.category === "NISM");
  const gateExams = exams.filter((exam: Exam) => exam.category === "GATE");
  const sectionWiseGateExams = gateExams.filter((exam: Exam) => exam.type === "section-wise");
  const fullLengthGateExams = gateExams.filter((exam: Exam) => exam.type === "full-length");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-white to-blue-50 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Available Mock Tests</h1>
          
          <Tabs defaultValue="nism" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="nism">NISM Certification</TabsTrigger>
              <TabsTrigger value="gate-section">GATE Section-wise</TabsTrigger>
              <TabsTrigger value="gate-full">GATE Full-length</TabsTrigger>
            </TabsList>
            
            <TabsContent value="nism" className="space-y-6">
              {nismExams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nismExams.map((exam: Exam) => (
                    <ExamCard key={exam.id} exam={exam} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No NISM exams available at the moment.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="gate-section" className="space-y-6">
              {sectionWiseGateExams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sectionWiseGateExams.map((exam: Exam) => (
                    <ExamCard key={exam.id} exam={exam} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No section-wise GATE exams available at the moment.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="gate-full" className="space-y-6">
              {fullLengthGateExams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fullLengthGateExams.map((exam: Exam) => (
                    <ExamCard key={exam.id} exam={exam} isPremium={true} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No full-length GATE exams available at the moment.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
