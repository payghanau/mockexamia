
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
import { GraduationCap, Lightbulb, Timer, BookOpen, Bookmark, BarChart2, Award, Shield } from "lucide-react";
import { motion } from "framer-motion";

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
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading exams...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400 mb-4">Failed to load exams</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-white rounded-full dark:bg-blue-700"
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      <main className="flex-1 px-4 md:px-6 lg:px-8 py-6 md:py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">Available Mock Tests</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Prepare for your certification exams with our comprehensive mock tests designed by industry experts
            </p>
          </motion.div>
          
          {/* Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center hover:shadow-md transition-all group hover:-translate-y-1">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Expert Curated</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">By industry professionals</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center hover:shadow-md transition-all group hover:-translate-y-1">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                <Timer className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Timed Tests</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Exam-like environment</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center hover:shadow-md transition-all group hover:-translate-y-1">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Detailed Analysis</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Performance insights</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center hover:shadow-md transition-all group hover:-translate-y-1">
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Extensive Coverage</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">All important topics</p>
              </div>
            </div>
          </motion.div>
          
          <Tabs defaultValue="nism" className="w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <TabsList className="bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 p-1 rounded-full">
                <TabsTrigger 
                  value="nism" 
                  className="rounded-full px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-sm text-sm dark:text-gray-300 dark:data-[state=active]:text-white"
                >
                  NISM Certification
                </TabsTrigger>
                <TabsTrigger 
                  value="gate-section" 
                  className="rounded-full px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-sm text-sm dark:text-gray-300 dark:data-[state=active]:text-white"
                >
                  GATE Section-wise
                </TabsTrigger>
                <TabsTrigger 
                  value="gate-full" 
                  className="rounded-full px-6 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-sm text-sm dark:text-gray-300 dark:data-[state=active]:text-white"
                >
                  GATE Full-length
                </TabsTrigger>
              </TabsList>
            </motion.div>
            
            <TabsContent value="nism" className="space-y-6">
              {nismExams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nismExams.map((exam: ExamRow, index: number) => (
                    <motion.div
                      key={exam.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <ExamCard 
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
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm"
                >
                  <Bookmark className="h-12 w-12 text-blue-200 dark:text-blue-900 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">No NISM exams available</h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">We're working on adding new NISM certification exams. Check back soon!</p>
                </motion.div>
              )}
            </TabsContent>
            
            <TabsContent value="gate-section" className="space-y-6">
              {sectionWiseGateExams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sectionWiseGateExams.map((exam: ExamRow, index: number) => (
                    <motion.div
                      key={exam.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <ExamCard 
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
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm"
                >
                  <Bookmark className="h-12 w-12 text-purple-200 dark:text-purple-900 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">No section-wise GATE exams available</h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">We're working on adding new section-wise GATE exams. Check back soon!</p>
                </motion.div>
              )}
            </TabsContent>
            
            <TabsContent value="gate-full" className="space-y-6">
              {fullLengthGateExams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fullLengthGateExams.map((exam: ExamRow, index: number) => (
                    <motion.div
                      key={exam.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <ExamCard 
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
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm"
                >
                  <Bookmark className="h-12 w-12 text-indigo-200 dark:text-indigo-900 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">No full-length GATE exams available</h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">We're working on adding new full-length GATE exams. Check back soon!</p>
                </motion.div>
              )}
            </TabsContent>
          </Tabs>
          
          {/* Additional features section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 shadow-sm border border-blue-100 dark:border-blue-900/30"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Why choose our mock tests?</h2>
              <p className="text-gray-600 dark:text-gray-400">Experience the difference with industry-leading exam preparation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <BarChart2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Comprehensive Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400">Track your performance with detailed insights and improvement suggestions</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Expert-verified Content</h3>
                <p className="text-gray-600 dark:text-gray-400">Questions created and reviewed by industry experts with years of experience</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure Testing Environment</h3>
                <p className="text-gray-600 dark:text-gray-400">Take your tests in a distraction-free, secure environment that mimics real exams</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
