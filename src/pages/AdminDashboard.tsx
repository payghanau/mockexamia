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
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

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
  
  // Analytics period state
  const [analyticsPeriod, setAnalyticsPeriod] = useState<"month" | "year">("month");
  
  useEffect(() => {
    document.title = "Admin Dashboard - myturnindia";
    
    // In a real app, this would be an API call to get existing exams
    const mockExams: Exam[] = [
      {
        id: "nism-1",
        title: "NISM Series V-A: Mutual Fund Distributors",
        description: "Chapter 1-3: Introduction to Mutual Funds",
        category: "NISM",
        type: "chapter-wise",
        duration: 12,
        totalQuestions: 10,
        fee: 199,
        createdBy: "admin",
        createdAt: new Date(),
        isActive: true
      },
      {
        id: "gate-1",
        title: "GATE Computer Science - Section Test",
        description: "Data Structures & Algorithms",
        category: "GATE",
        subcategory: "Computer Science",
        type: "section-wise",
        duration: 20,
        totalQuestions: 10,
        fee: 299,
        createdBy: "admin",
        createdAt: new Date(),
        isActive: true
      }
    ];
    
    setExams(mockExams);
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

  const handleCreateExam = () => {
    // Validate exam details
    if (!examTitle || !examCategory || !examType || examDuration <= 0 || examQuestionsCount <= 0 || examFee < 0) {
      toast({
        variant: "destructive",
        title: "Missing information",
        description: "Please fill all required exam details",
      });
      return;
    }
    
    // Create new exam object
    const newExam: Exam = {
      id: `exam-${Date.now()}`,
      title: examTitle,
      description: examDescription,
      category: examCategory,
      subcategory: examSubcategory || undefined,
      type: examType,
      duration: examDuration,
      totalQuestions: examQuestionsCount,
      fee: examFee,
      createdBy: "admin",
      createdAt: new Date(),
      isActive: true
    };
    
    // Add to exams list
    setExams([...exams, newExam]);
    
    toast({
      title: "Exam created",
      description: "The exam has been created successfully.",
    });
    
    // Reset form
    setExamTitle("");
    setExamDescription("");
    setExamCategory("NISM");
    setExamSubcategory("");
    setExamType("chapter-wise");
    setExamDuration(12);
    setExamQuestionsCount(10);
    setExamFee(199);
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

  const handleCorrectAnswerChange = (optionIndex: number, isCorrect: boolean) => {
    setQuestions(prev => {
      const updated = [...prev];
      const currentQuestion = updated[currentQuestionIndex];
      let correctAnswers = [...(currentQuestion.correctAnswers || [])];
      
      if (isCorrect) {
        if (currentQuestion.type === 'single') {
          correctAnswers = [optionIndex];
        } else {
          if (!correctAnswers.includes(optionIndex)) {
            correctAnswers.push(optionIndex);
          }
        }
      } else {
        correctAnswers = correctAnswers.filter(i => i !== optionIndex);
      }
      
      updated[currentQuestionIndex] = {
        ...currentQuestion,
        correctAnswers
      };
      
      return updated;
    });
  };

  const handleSaveQuestions = () => {
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
    
    toast({
      title: "Questions saved",
      description: `${questions.length} questions have been saved successfully.`,
    });
  };

  const handleDeleteExam = (examId: string) => {
    setExams(prev => prev.filter(exam => exam.id !== examId));
    
    toast({
      title: "Exam deleted",
      description: "The exam has been deleted successfully.",
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
                
                {/* Other tabs remain the same */}
                {activeTab === "exams" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exams.map(exam => (
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
                            <Button variant="outline" size="sm" className="flex-1">
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
                    ))}
                  </div>
                )}
                
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
                            <Label htmlFor="exam-description">Description</Label>
                            <Textarea 
                              id="exam-description" 
                              value={examDescription}
                              onChange={(e) => setExamDescription(e.target.value)}
                              placeholder="Brief description of the exam"
                              rows={3}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="exam-category">Category</Label>
                            <Select 
                              value={examCategory}
                              onValueChange={(value: "NISM" | "GATE") => setExamCategory(value)}
                            >
                              <SelectTrigger id="exam-category">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="NISM">NISM</SelectItem>
                                <SelectItem value="GATE">GATE</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          {examCategory === "GATE" && (
                            <div>
                              <Label htmlFor="exam-subcategory">Subcategory</Label>
                              <Input 
                                id="exam-subcategory" 
                                value={examSubcategory}
                                onChange={(e) => setExamSubcategory(e.target.value)}
                                placeholder="e.g. Computer Science, Electrical Engineering"
                              />
                            </div>
                          )}
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="exam-type">Exam Type</Label>
                            <Select 
                              value={examType}
                              onValueChange={(value: "chapter-wise" | "section-wise" | "full-length") => setExamType(value)}
                            >
                              <SelectTrigger id="exam-type">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="chapter-wise">Chapter-wise</SelectItem>
                                <SelectItem value="section-wise">Section-wise</SelectItem>
                                <SelectItem value="full-length">Full-length</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="exam-duration">Duration (minutes)</Label>
                            <Input 
                              id="exam-duration" 
                              type="number"
                              value={examDuration}
                              onChange={(e) => setExamDuration(parseInt(e.target.value))}
                              min={1}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="exam-questions">Number of Questions</Label>
                            <Input 
                              id="exam-questions" 
                              type="number"
                              value={examQuestionsCount}
                              onChange={(e) => setExamQuestionsCount(parseInt(e.target.value))}
                              min={1}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="exam-fee">Exam Fee (₹)</Label>
                            <Input 
                              id="exam-fee" 
                              type="number"
                              value={examFee}
                              onChange={(e) => setExamFee(parseInt(e.target.value))}
                              min={0}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button onClick={handleCreateExam}>
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Create Exam
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "questions" && (
                  <div>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">
                          Question {currentQuestionIndex + 1} of {questions.length}
                        </h3>
                        
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                            disabled={currentQuestionIndex === 0}
                            size="sm"
                          >
                            Previous
                          </Button>
                          
                          <span className="text-sm text-mcq-gray-dark px-2">
                            {currentQuestionIndex + 1} / {questions.length}
                          </span>
                          
                          <Button 
                            variant="outline"
                            onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
                            disabled={currentQuestionIndex === questions.length - 1}
                            size="sm"
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="question-text">Question Text</Label>
                          <Textarea 
                            id="question-text" 
                            value={currentQuestion.text}
                            onChange={(e) => handleQuestionChange('text', e.target.value)}
                            placeholder="Enter the question text"
                            rows={3}
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="question-type">Question Type</Label>
                            <Select 
                              value={currentQuestion.type}
                              onValueChange={(value: "single" | "multiple") => handleQuestionChange('type', value)}
                            >
                              <SelectTrigger id="question-type">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="single">Single Choice</SelectItem>
                                <SelectItem value="multiple">Multiple Choice</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="question-marks">Marks</Label>
                            <Select 
                              value={currentQuestion.marks?.toString()}
                              onValueChange={(value) => handleQuestionChange('marks', parseInt(value) as 1 | 2)}
                            >
                              <SelectTrigger id="question-marks">
                                <SelectValue placeholder="Select marks" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1 Mark</SelectItem>
                                <SelectItem value="2">2 Marks</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="negative-marking">Negative Marking</Label>
                          <Input 
                            id="negative-marking" 
                            type="number"
                            value={currentQuestion.negativeMarks}
                            onChange={(e) => handleQuestionChange('negativeMarks', parseFloat(e.target.value))}
                            step={0.25}
                            min={0}
                          />
                        </div>
                        
                        <div className="space-y-4 mt-6">
                          <Label>Options</Label>
                          
                          <div className="grid grid-cols-1 gap-3 mt-2">
                            {(currentQuestion.options || []).map((option, idx) => (
                              <Card key={idx} className={`border ${(currentQuestion.correctAnswers || []).includes(idx) ? 'border-green-500' : 'border-gray-200'}`}>
                                <CardContent className="p-3">
                                  <div className="flex items-start space-x-3">
                                    <div className="pt-2">
                                      {currentQuestion.type === 'single' ? (
                                        <input 
                                          type="radio" 
                                          id={`option-correct-${idx}`}
                                          name="correct-option"
                                          checked={(currentQuestion.correctAnswers || []).includes(idx)}
                                          onChange={(e) => handleCorrectAnswerChange(idx, e.target.checked)}
                                        />
                                      ) : (
                                        <Checkbox 
                                          id={`option-correct-${idx}`}
                                          checked={(currentQuestion.correctAnswers || []).includes(idx)}
                                          onCheckedChange={(checked) => 
                                            handleCorrectAnswerChange(idx, checked === true)
                                          }
                                        />
                                      )}
                                    </div>
                                    <div className="flex-1">
                                      <Label htmlFor={`option-text-${idx}`} className="text-sm">
                                        Option {String.fromCharCode(65 + idx)}
                                      </Label>
                                      <Input 
                                        id={`option-text-${idx}`}
                                        value={option}
                                        onChange={(e) => handleOptionChange(idx, e.target.value)}
                                        placeholder={`Enter option ${String.fromCharCode(65 + idx)}`}
                                      />
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-8">
                        <Button onClick={handleSaveQuestions}>
                          <Save className="mr-2 h-4 w-4" />
                          Save All Questions
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === "users" && (
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">User Management</CardTitle>
                        <CardDescription>View and manage platform users</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-md border">
                          <div className="grid grid-cols-6 border-b py-3 px-4 font-medium">
                            <div className="col-span-2">Name</div>
                            <div className="col-span-2">Email</div>
                            <div>Role</div>
                            <div>Actions</div>
                          </div>
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="grid grid-cols-6 py-3 px-4 border-b last:border-0">
                              <div className="col-span-2 flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-mcq-blue-light flex items-center justify-center text-sm font-medium text-mcq-blue">
                                  {['RS', 'PM', 'AK', 'NP', 'VT'][i-1]}
                                </div>
                                <div>
                                  {['Rahul Sharma', 'Priya Mehta', 'Arjun Kumar', 'Neha Patel', 'Vikram Tiwari'][i-1]}
                                </div>
                              </div>
                              <div className="col-span-2 flex items-center">
                                {['rahul@example.com', 'priya@example.com', 'arjun@example.com', 'neha@example.com', 'vikram@example.com'][i-1]}
                              </div>
                              <div className="flex items-center">
                                <span className={`inline-block px-2 py-1 rounded-full text-xs ${i === 1 ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                                  {i === 1 ? 'Admin' : 'Student'}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button size="sm" variant="ghost">
                                  Edit
                                </Button>
                                <Button size="sm" variant="ghost" className="text-red-500">
                                  Delete
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
                
                {activeTab === "settings" && (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Platform Settings</CardTitle>
                        <CardDescription>Configure global platform settings</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="platform-name">Platform Name</Label>
                            <Input 
                              id="platform-name" 
                              defaultValue="myturnindia"
                              placeholder="Enter platform name"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="contact-email">Contact Email</Label>
                            <Input 
                              id="contact-email" 
                              defaultValue="contact@myturnindia.com"
                              placeholder="Enter contact email"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="support-phone">Support Phone</Label>
                            <Input 
                              id="support-phone" 
                              defaultValue="+91 9876543210"
                              placeholder="Enter support phone number"
                            />
                          </div>
                          
                          <div className="flex items-start space-x-2 pt-2">
                            <Checkbox id="maintenance-mode" />
                            <div className="grid gap-1.5 leading-none">
                              <Label
                                htmlFor="maintenance-mode"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Maintenance Mode
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                When enabled, only admins can access the platform
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end mt-6">
                          <Button>
                            <Save className="mr-2 h-4 w-4" />
                            Save Settings
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
