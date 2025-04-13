
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
import { GraduationCap, Lightbulb, Timer, BookOpen, Bookmark } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Available Mock Tests - myturnindia";
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
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
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
              className="px-4 py-2 bg-primary text-white rounded-full"
            >
              Try Again
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const nismExams = exams?.filter((exam: ExamRow) => exam.category === "NISM") || [];
  const gateExams = exams?.filter((exam: ExamRow) => exam.category === "GATE") || [];
  const sectionWiseGateExams = gateExams.filter((exam: ExamRow) => exam.type === "section-wise");
  const fullLengthGateExams = gateExams.filter((exam: ExamRow) => exam.type === "full-length");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="flex-1 px-4 md:px-6 lg:px-8 py-6 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Available Mock Tests</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prepare for your certification exams with our comprehensive mock tests designed by industry experts
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg mr-3">
                <GraduationCap className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Expert Curated</h3>
                <p className="text-sm text-gray-500">By industry professionals</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg mr-3">
                <Timer className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Timed Tests</h3>
                <p className="text-sm text-gray-500">Exam-like environment</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center">
              <div className="bg-green-100 p-3 rounded-lg mr-3">
                <Lightbulb className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Detailed Analysis</h3>
                <p className="text-sm text-gray-500">Performance insights</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center">
              <div className="bg-amber-100 p-3 rounded-lg mr-3">
                <BookOpen className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Extensive Coverage</h3>
                <p className="text-sm text-gray-500">All important topics</p>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="nism" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white shadow-sm border border-gray-100 p-1 rounded-full">
                <TabsTrigger 
                  value="nism" 
                  className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm text-sm"
                >
                  NISM Certification
                </TabsTrigger>
                <TabsTrigger 
                  value="gate-section" 
                  className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm text-sm"
                >
                  GATE Section-wise
                </TabsTrigger>
                <TabsTrigger 
                  value="gate-full" 
                  className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm text-sm"
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
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <Bookmark className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">No NISM exams available</h3>
                  <p className="text-gray-500 max-w-md mx-auto">We're working on adding new NISM certification exams. Check back soon!</p>
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
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <Bookmark className="h-12 w-12 text-purple-200 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">No section-wise GATE exams available</h3>
                  <p className="text-gray-500 max-w-md mx-auto">We're working on adding new section-wise GATE exams. Check back soon!</p>
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
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <Bookmark className="h-12 w-12 text-indigo-200 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">No full-length GATE exams available</h3>
                  <p className="text-gray-500 max-w-md mx-auto">We're working on adding new full-length GATE exams. Check back soon!</p>
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
