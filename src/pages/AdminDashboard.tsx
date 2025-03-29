import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Exam, Question } from "@/types";
import { 
  ArrowRight, 
  ListChecks, 
  PlusCircle, 
  Save, 
  Trash2, 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp,
  Database,
  BarChart3,
  Settings,
  FileText,
  GraduationCap,
  PercentCircle,
  Calendar,
  Activity,
  LayoutDashboard,
  ChevronRight
} from "lucide-react";
import StatCard from "@/components/admin/StatCard";
import SalesChart from "@/components/admin/SalesChart";
import { supabase } from "@/integrations/supabase/client";
import { ExamRow, QuestionRow } from "@/types/supabase";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("analytics");
  
  // New exam form state
  const [examTitle, setExamTitle] = useState("");
  const [examDescription, setExamDescription] = useState("");
  const [examCategory, setExamCategory] = useState<"NISM" | "GATE">("NISM");
  const [examSubcategory, setExamSubcategory] = useState("");
  const [examType, setExamType] = useState<"chapter-wise" | "section-wise" | "full-length">("chapter-wise");
  const [examDuration, setExamDuration] = useState(12);
  const [examQuestionsCount, setExamQuestionsCount] = useState(10);
  const [examFee, setExamFee] = useState(199);
  
  // Questions form state
  const [questions, setQuestions] = useState<Partial<Question>[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // Existing exams
  const [exams, setExams] = useState<Exam[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Analytics period state
  const [analyticsPeriod, setAnalyticsPeriod] = useState<"month" | "year">("month");

  // Load exams from Supabase
  const fetchExams = async () => {
    try {
      const { data, error } = await supabase
        .from('exams')
        .select('*');
      
      if (error) {
        console.error("Error fetching exams:", error);
        toast({
          variant: "destructive",
          title: "Failed to fetch exams",
          description: error.message,
        });
        return;
      }
      
      // Convert Supabase data to our app's Exam type
      const formattedExams: Exam[] = data.map((exam: ExamRow) => ({
        id: exam.id,
        title: exam.title,
        description: exam.description || "",
        category: exam.category as "NISM" | "GATE",
        subcategory: exam.subcategory,
        type: exam.type as "chapter-wise" | "section-wise" | "full-length",
        duration: exam.duration,
        totalQuestions: exam.total_questions,
        fee: exam.fee,
        createdBy: exam.created_by || "admin",
        createdAt: new Date(exam.created_at || Date.now()),
        isActive: exam.is_active
      }));
      
      setExams(formattedExams);
    } catch (err) {
      console.error("Error in fetchExams:", err);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to load exams data",
      });
    }
  };
  
  useEffect(() => {
    document.title = "Admin Dashboard - myturnindia";
    fetchExams();
  }, []);
  
  useEffect(() => {
    // Initialize questions based on count
    if (examQuestionsCount > 0) {
      const initialQuestions: Partial<Question>[] = Array.from({ length: examQuestionsCount }).map((_, index) => ({
        id: `new-q-${index + 1}`,
        text: "",
        options: ["", "", "", ""],
        correctAnswers: [],
        type: "single",
        marks: 1,
        negativeMarks: 0.25
      }));
      
      setQuestions(initialQuestions);
    }
  }, [examQuestionsCount]);

  const handleCreateExam = async () => {
    // Validate exam details
    if (!examTitle || !examCategory || !examType || examDuration <= 0 || examQuestionsCount <= 0 || examFee < 0) {
      toast({
        variant: "destructive",
        title: "Missing information",
        description: "Please fill all required exam details",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create new exam object for Supabase
      const newExamData = {
        title: examTitle,
        description: examDescription,
        category: examCategory,
        subcategory: examSubcategory || null,
        type: examType,
        duration: examDuration,
        total_questions: examQuestionsCount,
        fee: examFee,
        created_by: null, // Will be set by RLS
        is_active: true
      };
      
      // Insert into Supabase
      const { data, error } = await supabase
        .from('exams')
        .insert([newExamData])
        .select();
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Exam created",
        description: "The exam has been created successfully.",
      });
      
      // Add the new exam to the state
      if (data && data.length > 0) {
        const newExam: Exam = {
          id: data[0].id,
          title: data[0].title,
          description: data[0].description || "",
          category: data[0].category as "NISM" | "GATE",
          subcategory: data[0].subcategory,
          type: data[0].type as "chapter-wise" | "section-wise" | "full-length",
          duration: data[0].duration,
          totalQuestions: data[0].total_questions,
          fee: data[0].fee,
          createdBy: data[0].created_by || "admin",
          createdAt: new Date(data[0].created_at || Date.now()),
          isActive: data[0].is_active
        };
        
        setExams([...exams, newExam]);
      }
      
      // Reset form
      setExamTitle("");
      setExamDescription("");
      setExamCategory("NISM");
      setExamSubcategory("");
      setExamType("chapter-wise");
      setExamDuration(12);
      setExamQuestionsCount(10);
      setExamFee(199);
      
      // Switch to exams tab to show the new exam
      setActiveTab("exams");
    } catch (error: any) {
      console.error("Error creating exam:", error);
      toast({
        variant: "destructive",
        title: "Failed to create exam",
        description: error.message || "An error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuestionChange = (field: keyof Question, value: any) => {
    setQuestions(prev => {
      const updated = [...prev];
      updated[currentQuestionIndex] = {
        ...updated[currentQuestionIndex],
        [field]: value
      };
      return updated;
    });
  };

  const handleOptionChange = (optionIndex: number, value: string) => {
    setQuestions(prev => {
      const updated = [...prev];
      const currentOptions = [...(updated[currentQuestionIndex].options || [])];
      currentOptions[optionIndex] = value;
      
      updated[currentQuestionIndex] = {
        ...updated[currentQuestionIndex],
        options: currentOptions
      };
      
      return updated;
    });
  };

  const handleCorrectAnswerChange = (questionIndex: number, optionIndex: number) => {
    setQuestions(prev => {
      const updated = [...prev];
      const currentQuestion = updated[questionIndex];
      let correctAnswers = [...(currentQuestion.correctAnswers || [])];
      
      if (currentQuestion.type === 'single') {
        correctAnswers = [optionIndex];
      } else {
        if (!correctAnswers.includes(optionIndex)) {
          correctAnswers.push(optionIndex);
        } else {
          correctAnswers = correctAnswers.filter(i => i !== optionIndex);
        }
      }
      
      updated[questionIndex] = {
        ...currentQuestion,
        correctAnswers
      };
      
      return updated;
    });
  };

  const handleSaveQuestions = async () => {
    // Validate questions
    const invalidQuestions = questions.filter(q => 
      !q.text || 
      !q.options?.every(opt => opt.trim() !== "") ||
      !q.correctAnswers?.length
    );
    
    if (invalidQuestions.length > 0) {
      toast({
        variant: "destructive",
        title: "Incomplete questions",
        description: `${invalidQuestions.length} questions are incomplete. Please fill all required fields.`,
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // We need an exam ID to associate these questions with
      if (exams.length === 0) {
        toast({
          variant: "destructive",
          title: "No exam available",
          description: "Please create an exam first before adding questions.",
        });
        return;
      }
      
      // For simplicity, we'll associate with the first exam
      // In a real app, you would let the user choose which exam
      const examId = exams[0].id;
      
      // Format questions for Supabase
      const formattedQuestions = questions.map(q => ({
        exam_id: examId,
        text: q.text || "",
        options: q.options || [],
        correct_answers: q.correctAnswers || [],
        type: q.type || "single",
        marks: q.marks || 1,
        negative_marks: q.negativeMarks || 0.25
      }));
      
      // Insert into Supabase
      const { data, error } = await supabase
        .from('questions')
        .insert(formattedQuestions);
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Questions saved",
        description: `${questions.length} questions have been saved successfully.`,
      });
      
      // Reset the form for new questions
      setQuestions([
        {
          id: "1",
          text: "",
          options: ["", "", "", ""],
          correctAnswers: [],
          type: "single",
          marks: 1,
          negativeMarks: 0.25
        }
      ]);
      
      setCurrentQuestionIndex(0);
    } catch (error: any) {
      console.error("Error saving questions:", error);
      toast({
        variant: "destructive",
        title: "Failed to save questions",
        description: error.message || "An error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteExam = async (examId: string) => {
    try {
      // Delete from Supabase
      const { error } = await supabase
        .from('exams')
        .delete()
        .eq('id', examId);
      
      if (error) {
        throw error;
      }
      
      // Update state
      setExams(prev => prev.filter(exam => exam.id !== examId));
      
      toast({
        title: "Exam deleted",
        description: "The exam has been deleted successfully.",
      });
    } catch (error: any) {
      console.error("Error deleting exam:", error);
      toast({
        variant: "destructive",
        title: "Failed to delete exam",
        description: error.message || "An error occurred",
      });
    }
  };

  const handleEditExam = (examId: string) => {
    // In a real app, you would navigate to an edit page or show a modal
    toast({
      title: "Edit functionality",
      description: "Edit functionality would open here in a complete implementation",
    });
  };

  const currentQuestion = questions[currentQuestionIndex] || {
    text: "",
    options: ["", "", "", ""],
    correctAnswers: [],
    type: "single",
    marks: 1,
    negativeMarks: 0.25
  };

  // Sidebar menu items
  const sidebarItems = [
    { title: "Dashboard", value: "analytics", icon: LayoutDashboard },
    { title: "Exams", value: "exams", icon: FileText },
    { title: "Create Exam", value: "create", icon: PlusCircle },
    { title: "Questions", value: "questions", icon: ListChecks },
    { title: "Users", value: "users", icon: Users },
    { title: "Settings", value: "settings", icon: Settings },
  ];

  // Dashboard section summaries for analytics
  const analyticsSummaries = [
    {
      title: "Users Summary",
      stats: [
        { label: "Total Users", value: "1,274" },
        { label: "New Users (30d)", value: "168" },
        { label: "Active Today", value: "98" },
      ],
      color: "bg-gradient-card-purple text-white"
    },
    {
      title: "Exam Statistics",
      stats: [
        { label: "Total Exams", value: exams.length.toString() },
        { label: "Active Exams", value: exams.filter(e => e.isActive).length.toString() },
        { label: "Avg. Difficulty", value: "7.5/10" },
      ],
      color: "bg-gradient-card-blue text-white"
    },
    {
      title: "Revenue Metrics",
      stats: [
        { label: "Total Revenue", value: "₹2,45,890" },
        { label: "This Month", value: "₹28,460" },
        { label: "Growth", value: "+14%" },
      ],
      color: "bg-gradient-card-green text-white"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your platform and monitor performance</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <Card className="h-full border-0 shadow-sm bg-white">
              <CardHeader className="pb-4 border-b">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Admin Panel</CardTitle>
                    <CardDescription>myturnindia</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="py-2">
                  {sidebarItems.map((item) => (
                    <Button
                      key={item.value}
                      variant={activeTab === item.value ? "default" : "ghost"}
                      className={`w-full justify-start text-left font-normal mb-1 rounded-none border-l-2 ${
                        activeTab === item.value 
                          ? "border-l-primary bg-primary/5" 
                          : "border-l-transparent"
                      }`}
                      onClick={() => setActiveTab(item.value)}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                      {activeTab === item.value && (
                        <ChevronRight className="ml-auto h-4 w-4" />
                      )}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <Card className="overflow-hidden border-0 shadow-sm bg-white">
              <CardHeader className="pb-3 border-b bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">
                      {sidebarItems.find(item => item.value === activeTab)?.title || "Dashboard"}
                    </CardTitle>
                    <CardDescription>
                      {activeTab === "analytics" && "Overview of your platform performance"}
                      {activeTab === "exams" && "Manage existing exams and tests"}
                      {activeTab === "create" && "Create new exams for your students"}
                      {activeTab === "questions" && "Add and edit exam questions"}
                      {activeTab === "users" && "Manage platform users"}
                      {activeTab === "settings" && "Configure platform settings"}
                    </CardDescription>
                  </div>
                  
                  {activeTab === "analytics" && (
                    <div className="space-x-1">
                      <Button 
                        variant={analyticsPeriod === "month" ? "default" : "outline"} 
                        size="sm" 
                        onClick={() => setAnalyticsPeriod("month")}
                      >
                        Monthly
                      </Button>
                      <Button 
                        variant={analyticsPeriod === "year" ? "default" : "outline"} 
                        size="sm" 
                        onClick={() => setAnalyticsPeriod("year")}
                      >
                        Yearly
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                {/* Analytics Tab */}
                {activeTab === "analytics" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <StatCard 
                        title="Total Users" 
                        value="1,274" 
                        description="Active students on platform"
                        icon={Users}
                        trend={{ value: 12, isPositive: true }}
                        color="purple"
                      />
                      <StatCard 
                        title="Total Exams" 
                        value={exams.length.toString()} 
                        description="Tests available on platform"
                        icon={BookOpen}
                        color="blue"
                      />
                      <StatCard 
                        title="Tests Attempted" 
                        value="8,562" 
                        description="Total test attempts by students"
                        icon={ListChecks}
                        trend={{ value: 8, isPositive: true }}
                        color="green"
                      />
                      <StatCard 
                        title="Revenue" 
                        value="₹2,45,890" 
                        description="Total revenue generated"
                        icon={DollarSign}
                        trend={{ value: 14, isPositive: true }}
                        color="orange"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {analyticsSummaries.map((summary, index) => (
                        <Card key={index} className={`${summary.color} shadow-sm`}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium opacity-90">{summary.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {summary.stats.map((stat, i) => (
                                <div key={i} className="flex justify-between items-center">
                                  <span className="text-sm opacity-80">{stat.label}</span>
                                  <span className="font-bold">{stat.value}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <SalesChart period={analyticsPeriod} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <Card className="border border-gray-100 shadow-sm hover:shadow-card-hover transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <GraduationCap className="h-5 w-5 mr-2 text-purple-500" />
                            Popular Tests
                          </CardTitle>
                          <CardDescription>Most popular tests by sales volume</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {exams.slice(0, 5).map((exam, index) => (
                              <div key={exam.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-3">
                                  <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium">
                                    {index + 1}
                                  </div>
                                  <div>
                                    <p className="font-medium text-sm">{exam.title}</p>
                                    <p className="text-xs text-gray-500">{exam.category}</p>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end">
                                  <div className="text-sm font-medium">{Math.floor(Math.random() * 100) + 50} sales</div>
                                  <div className="text-xs text-green-600">+{Math.floor(Math.random() * 20)}%</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border border-gray-100 shadow-sm hover:shadow-card-hover transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <Activity className="h-5 w-5 mr-2 text-green-500" />
                            Recent Transactions
                          </CardTitle>
                          <CardDescription>Last 5 test purchases</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-3">
                                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold">
                                    {['RS', 'PM', 'AK', 'NP', 'VT'][i-1]}
                                  </div>
                                  <div>
                                    <p className="font-medium text-sm">
                                      {['Rahul S.', 'Priya M.', 'Arjun K.', 'Neha P.', 'Vikram T.'][i-1]}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      Purchased {exams[i % exams.length]?.title.substring(0, 20)}...
                                    </p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-medium">₹{exams[i % exams.length]?.fee}</div>
                                  <div className="text-xs text-gray-500">
                                    {new Date(Date.now() - i * 3600000).toLocaleDateString()}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
                      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-l-blue-500">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-blue-700">Performance Score</h3>
                              <p className="text-sm text-blue-600 mt-1">Platform health metrics</p>
                            </div>
                            <div className="p-2 bg-blue-100 rounded-full">
                              <PercentCircle className="h-6 w-6 text-blue-700" />
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="text-3xl font-bold text-blue-700">92%</div>
                            <div className="w-full bg-blue-200 h-2 rounded-full mt-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                            </div>
                            <div className="mt-4 text-sm text-blue-600">
                              <span className="font-medium">Excellent</span> - Performance is above target
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-l-green-500">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-green-700">Growth Trend</h3>
                              <p className="text-sm text-green-600 mt-1">Month-over-month change</p>
                            </div>
                            <div className="p-2 bg-green-100 rounded-full">
                              <TrendingUp className="h-6 w-6 text-green-700" />
                            </div>
                          </div>
                          <div className="mt-6">
                            <div className="text-3xl font-bold text-green-700">+18.2%</div>
                            <div className="w-full bg-green-200 h-2 rounded-full mt-2">
                              <div className="bg-green-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                            </div>
                            <div className="mt-4 text-sm text-green-600">
                              <span className="font-medium">Growing</span> - Faster than previous quarter
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-l-orange-500">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-orange-700">Upcoming Events</h3>
                              <p className="text-sm text-orange-600 mt-1">Next 7 days</p>
                            </div>
                            <div className="p-2 bg-orange-100 rounded-full">
                              <Calendar className="h-6 w-6 text-orange-700" />
                            </div>
                          </div>
                          <div className="mt-6 space-y-4">
                            {[
                              { date: "Tomorrow", title: "New NISM launch" },
                              { date: "18 Aug", title: "Platform maintenance" },
                              { date: "20 Aug", title: "Marketing campaign" }
                            ].map((event, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <div>
                                  <p className="text-sm font-medium text-orange-800">{event.title}</p>
                                  <p className="text-xs text-orange-600">{event.date}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
                
                {/* Exams Tab */}
                {activeTab === "exams" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exams.length === 0 ? (
                      <div className="col-span-full text-center py-12">
                        <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                          <FileText className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No exams yet</h3>
                        <p className="text-gray-500 mb-4">Create your first exam to get started</p>
                        <Button 
                          onClick={() => setActiveTab("create")}
                          className="inline-flex items-center"
                        >
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Create Exam
                        </Button>
                      </div>
                    ) : (
                      exams.map(exam => (
                        <Card key={exam.id} className="border-2 border-gray-100 hover:border-mcq-blue/20 transition-all">
                          <CardHeader>
                            <CardTitle className="text-lg">{exam.title}</CardTitle>
                            <CardDescription>{exam.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <p className="text-mcq-gray-dark">Category</p>
                                <p className="font-medium">{exam.category}</p>
                              </div>
                              <div>
                                <p className="text-mcq-gray-dark">Type</p>
                                <p className="font-medium">{exam.type}</p>
                              </div>
                              <div>
                                <p className="text-mcq-gray-dark">Questions</p>
                                <p className="font-medium">{exam.totalQuestions}</p>
                              </div>
                              <div>
                                <p className="text-mcq-gray-dark">Duration</p>
                                <p className="font-medium">{exam.duration} min</p>
                              </div>
                              <div>
                                <p className="text-mcq-gray-dark">Fee</p>
                                <p className="font-medium">₹{exam.fee}</p>
                              </div>
                              <div>
                                <p className="text-mcq-gray-dark">Status</p>
                                <p className={`font-medium ${exam.isActive ? 'text-green-600' : 'text-red-500'}`}>
                                  {exam.isActive ? 'Active' : 'Inactive'}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex gap-2 pt-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex-1"
                                onClick={() => handleEditExam(exam.id)}
                              >
                                <ListChecks className="h-4 w-4 mr-2" />
                                Edit
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex-1 text-red-500 hover:bg-red-50 hover:text-red-600"
                                onClick={() => handleDeleteExam(exam.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                )}
                
                {/* Create Exam Tab */}
                {activeTab === "create" && (
                  <div>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="exam-title">Exam Title</Label>
                            <Input 
                              id="exam-title" 
                              value={examTitle}
                              onChange={(e) => setExamTitle(e.target.value)}
                              placeholder="e.g. NISM Series VIII: Equity Derivatives"
                            />
                          </div>
                          
                          <div>
