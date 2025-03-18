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
import { ArrowRight, ListChecks, PlusCircle, Save, Trash2, Users, BookOpen, DollarSign, TrendingUp } from "lucide-react";
import StatCard from "@/components/admin/StatCard";
import SalesChart from "@/components/admin/SalesChart";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <main className="flex-1 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          
          <Tabs defaultValue="analytics" className="space-y-6">
            <TabsList className="mb-8">
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="exams">Manage Exams</TabsTrigger>
              <TabsTrigger value="create">Create New Exam</TabsTrigger>
              <TabsTrigger value="questions">Add Questions</TabsTrigger>
            </TabsList>
            
            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <StatCard 
                    title="Total Users" 
                    value="1,274" 
                    description="Active students on platform"
                    icon={Users}
                    trend={{ value: 12, isPositive: true }}
                  />
                  <StatCard 
                    title="Total Exams" 
                    value={exams.length.toString()} 
                    description="Tests available on platform"
                    icon={BookOpen}
                  />
                  <StatCard 
                    title="Tests Attempted" 
                    value="8,562" 
                    description="Total test attempts by students"
                    icon={ListChecks}
                    trend={{ value: 8, isPositive: true }}
                  />
                  <StatCard 
                    title="Revenue" 
                    value="₹2,45,890" 
                    description="Total revenue generated"
                    icon={DollarSign}
                    trend={{ value: 14, isPositive: true }}
                  />
                </div>

                <div className="flex justify-end mb-2">
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
                </div>

                <SalesChart period={analyticsPeriod} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Popular Tests</CardTitle>
                      <CardDescription>Most popular tests by sales volume</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {exams.slice(0, 5).map((exam, index) => (
                          <div key={exam.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="bg-blue-100 text-blue-700 h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium">
                                {index + 1}
                              </div>
                              <div>
                                <p className="font-medium text-sm">{exam.title}</p>
                                <p className="text-xs text-muted-foreground">{exam.category}</p>
                              </div>
                            </div>
                            <div className="text-sm font-medium">{Math.floor(Math.random() * 100) + 50} sales</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Transactions</CardTitle>
                      <CardDescription>Last 5 test purchases</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-sm">
                                {['Rahul S.', 'Priya M.', 'Arjun K.', 'Neha P.', 'Vikram T.'][i-1]}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Purchased {exams[i % exams.length]?.title.substring(0, 20)}...
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium">₹{exams[i % exams.length]?.fee}</div>
                              <div className="text-xs text-muted-foreground">
                                {new Date(Date.now() - i * 3600000).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Existing Exams Tab */}
            <TabsContent value="exams">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exams.map(exam => (
                  <Card key={exam.id} className="glass">
                    <CardHeader>
                      <CardTitle>{exam.title}</CardTitle>
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
            </TabsContent>
            
            {/* Create New Exam Tab */}
            <TabsContent value="create">
              <Card>
                <CardHeader>
                  <CardTitle>Create New Exam</CardTitle>
                  <CardDescription>
                    Fill in the details to create a new mock test
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
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
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Questions Tab */}
            <TabsContent value="questions">
              <Card>
                <CardHeader>
                  <CardTitle>Add Questions</CardTitle>
                  <CardDescription>
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
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
                    
                    <div className="space-y-4">
                      <Label>Options</Label>
                      
                      {(currentQuestion.options || []).map((option, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
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
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                      disabled={currentQuestionIndex === 0}
                    >
                      Previous Question
                    </Button>
                    
                    <span className="text-sm text-mcq-gray-dark">
                      {currentQuestionIndex + 1} of {questions.length}
                    </span>
                    
                    <Button 
                      variant={currentQuestionIndex === questions.length - 1 ? "default" : "outline"}
                      onClick={() => 
                        currentQuestionIndex === questions.length - 1 
                          ? handleSaveQuestions() 
                          : setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))
                      }
                    >
                      {currentQuestionIndex === questions.length - 1 ? (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          Save All Questions
                        </>
                      ) : (
                        <>
                          Next Question
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
