
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ExamCard from "@/components/exams/ExamCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExamRow } from "@/types/supabase";
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
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
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
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">Failed to load exams</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-full"
            >
              Try Again
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const nismExams = exams.filter((exam: ExamRow) => exam.category === "NISM");
  const gateExams = exams.filter((exam: ExamRow) => exam.category === "GATE");
  const sectionWiseGateExams = gateExams.filter((exam: ExamRow) => exam.type === "section-wise");
  const fullLengthGateExams = gateExams.filter((exam: ExamRow) => exam.type === "full-length");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="flex-1 px-4 md:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 tracking-tight text-center">Available Mock Tests</h1>
          
          <Tabs defaultValue="nism" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 p-1 rounded-full">
                <TabsTrigger 
                  value="nism" 
                  className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm"
                >
                  NISM Certification
                </TabsTrigger>
                <TabsTrigger 
                  value="gate-section" 
                  className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm"
                >
                  GATE Section-wise
                </TabsTrigger>
                <TabsTrigger 
                  value="gate-full" 
                  className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm"
                >
                  GATE Full-length
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="nism" className="space-y-6">
              {nismExams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nismExams.map((exam: ExamRow) => (
                    <ExamCard 
                      key={exam.id} 
                      exam={{
                        id: exam.id,
                        title: exam.title,
                        description: exam.description || undefined,
                        category: exam.category as 'NISM' | 'GATE',
                        subcategory: exam.subcategory || undefined,
                        type: exam.type as 'chapter-wise' | 'section-wise' | 'full-length',
                        duration: exam.duration,
                        totalQuestions: exam.total_questions,
                        fee: exam.fee,
                        createdBy: exam.created_by || '',
                        createdAt: exam.created_at ? new Date(exam.created_at) : new Date(),
                        isActive: exam.is_active || false
                      }} 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-gray-500">No NISM exams available at the moment.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="gate-section" className="space-y-6">
              {sectionWiseGateExams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sectionWiseGateExams.map((exam: ExamRow) => (
                    <ExamCard 
                      key={exam.id} 
                      exam={{
                        id: exam.id,
                        title: exam.title,
                        description: exam.description || undefined,
                        category: exam.category as 'NISM' | 'GATE',
                        subcategory: exam.subcategory || undefined,
                        type: exam.type as 'chapter-wise' | 'section-wise' | 'full-length',
                        duration: exam.duration,
                        totalQuestions: exam.total_questions,
                        fee: exam.fee,
                        createdBy: exam.created_by || '',
                        createdAt: exam.created_at ? new Date(exam.created_at) : new Date(),
                        isActive: exam.is_active || false
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-gray-500">No section-wise GATE exams available at the moment.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="gate-full" className="space-y-6">
              {fullLengthGateExams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fullLengthGateExams.map((exam: ExamRow) => (
                    <ExamCard 
                      key={exam.id} 
                      exam={{
                        id: exam.id,
                        title: exam.title,
                        description: exam.description || undefined,
                        category: exam.category as 'NISM' | 'GATE',
                        subcategory: exam.subcategory || undefined,
                        type: exam.type as 'chapter-wise' | 'section-wise' | 'full-length',
                        duration: exam.duration,
                        totalQuestions: exam.total_questions,
                        fee: exam.fee,
                        createdBy: exam.created_by || '',
                        createdAt: exam.created_at ? new Date(exam.created_at) : new Date(),
                        isActive: exam.is_active || false
                      }}
                      isPremium={true}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
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
