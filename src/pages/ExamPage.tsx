
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import Timer from "@/components/exams/Timer";
import { Question, UserExam } from "@/types";
import { ArrowLeft, ArrowRight, Flag, Save } from "lucide-react";

const ExamPage = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number[] }>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<string[]>([]);
  const [examDuration, setExamDuration] = useState(0);
  const [examData, setExamData] = useState<any>(null);
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    document.title = "Exam - myturnindia";
    
    // Fetch exam data
    // In a real app, this would be an API call
    setTimeout(() => {
      const mockExam = {
        id: examId,
        title: "NISM Series V-A: Mutual Fund Distributors",
        duration: 12, // minutes
        totalQuestions: 10,
        type: "chapter-wise",
        category: "NISM"
      };
      
      setExamData(mockExam);
      setExamDuration(mockExam.duration * 60); // convert to seconds
      
      // Mock questions
      const mockQuestions: Question[] = Array.from({ length: 10 }).map((_, i) => ({
        id: `q-${i+1}`,
        text: `Sample question ${i+1} for the exam. This is a ${i % 3 === 0 ? 'multiple' : 'single'} choice question.`,
        options: [
          `Option A for question ${i+1}`,
          `Option B for question ${i+1}`,
          `Option C for question ${i+1}`,
          `Option D for question ${i+1}`
        ],
        correctAnswers: i % 3 === 0 ? [0, 2] : [i % 4],
        type: i % 3 === 0 ? 'multiple' : 'single',
        marks: i % 5 === 0 ? 2 : 1,
        negativeMarks: 0.25
      }));
      
      setQuestions(mockQuestions);
      setLoading(false);
    }, 1000);
  }, [examId]);

  const handleAnswerChange = (questionId: string, selectedOptions: number[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedOptions
    }));
  };

  const handleSingleChoiceChange = (questionId: string, optionIndex: number) => {
    handleAnswerChange(questionId, [optionIndex]);
  };

  const handleMultipleChoiceChange = (questionId: string, optionIndex: number, checked: boolean) => {
    const currentSelections = answers[questionId] || [];
    let newSelections;
    
    if (checked) {
      newSelections = [...currentSelections, optionIndex];
    } else {
      newSelections = currentSelections.filter(index => index !== optionIndex);
    }
    
    handleAnswerChange(questionId, newSelections);
  };

  const toggleFlagQuestion = (questionId: string) => {
    setFlaggedQuestions(prev => {
      if (prev.includes(questionId)) {
        return prev.filter(id => id !== questionId);
      } else {
        return [...prev, questionId];
      }
    });
    
    toast({
      title: flaggedQuestions.includes(questionId) 
        ? "Question unflagged" 
        : "Question flagged for review",
      duration: 1500
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmitExam = () => {
    // Calculate results
    const results = questions.map(question => {
      const selectedOptions = answers[question.id] || [];
      const isCorrect = 
        question.correctAnswers.length === selectedOptions.length &&
        question.correctAnswers.every(i => selectedOptions.includes(i));
      
      const marksObtained = isCorrect 
        ? question.marks 
        : selectedOptions.length > 0 
          ? -question.negativeMarks 
          : 0;
          
      return {
        questionId: question.id,
        selectedOptions,
        isCorrect,
        marksObtained
      };
    });
    
    // In a real app, this would be sent to an API
    const resultId = `result-${Date.now()}`;
    
    // Store in local storage for demo purposes
    const examResult = {
      id: resultId,
      userId: "user-1",
      examId,
      startTime: new Date(Date.now() - examDuration * 1000),
      endTime: new Date(),
      status: 'completed',
      answers: results,
      paymentStatus: 'completed'
    };
    
    localStorage.setItem(resultId, JSON.stringify(examResult));
    
    // Navigate to results page
    navigate(`/results/${resultId}`);
  };

  const handleTimerEnd = () => {
    setTimerEnded(true);
    toast({
      variant: "destructive",
      title: "Time's up!",
      description: "Your exam will be automatically submitted.",
      duration: 3000
    });
    
    // Auto-submit after 3 seconds
    setTimeout(() => {
      handleSubmitExam();
    }, 3000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-mcq-blue border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-mcq-gray-dark">Loading your exam...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isQuestionAnswered = !!answers[currentQuestion.id];
  const isQuestionFlagged = flaggedQuestions.includes(currentQuestion.id);
  const answeredCount = Object.keys(answers).length;
  const unansweredCount = questions.length - answeredCount;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Exam Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-mcq-blue">{examData?.title}</h1>
            <p className="text-sm text-mcq-gray-dark">
              {examData?.category} - {examData?.type}
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <div className="bg-blue-50 px-4 py-2 rounded-lg mr-4">
              <Timer 
                initialTime={examDuration} 
                onTimerEnd={handleTimerEnd}
              />
            </div>
            
            <Button 
              onClick={handleSubmitExam}
              variant="outline" 
              disabled={timerEnded}
            >
              <Save className="mr-2 h-4 w-4" />
              Submit Exam
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-white shadow-sm">
            <CardContent className="pt-6">
              {/* Question Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="bg-mcq-blue/10 text-mcq-blue px-3 py-1 rounded-full text-sm font-medium">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                  <span className="ml-3 text-sm text-mcq-gray-dark">
                    {currentQuestion.marks} {currentQuestion.marks === 1 ? 'mark' : 'marks'}
                    {currentQuestion.negativeMarks > 0 && ` • -${currentQuestion.negativeMarks} negative marking`}
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => toggleFlagQuestion(currentQuestion.id)}
                  className={`${isQuestionFlagged ? 'text-amber-500' : 'text-mcq-gray-dark'}`}
                >
                  <Flag className={`h-4 w-4 mr-2 ${isQuestionFlagged ? 'fill-amber-500' : ''}`} />
                  {isQuestionFlagged ? 'Flagged' : 'Flag for review'}
                </Button>
              </div>
              
              {/* Question Text */}
              <div className="text-lg font-medium mb-6">
                {currentQuestion.text}
              </div>
              
              {/* Answer Options */}
              <div className="space-y-4 mb-8">
                {currentQuestion.type === 'single' ? (
                  <RadioGroup 
                    value={(answers[currentQuestion.id]?.[0] ?? -1).toString()}
                    onValueChange={(value) => handleSingleChoiceChange(currentQuestion.id, parseInt(value))}
                  >
                    {currentQuestion.options.map((option, idx) => (
                      <div key={idx} className="flex items-center space-x-2 p-3 rounded-md hover:bg-blue-50">
                        <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                        <label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer">
                          {option}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <div className="space-y-2">
                    {currentQuestion.options.map((option, idx) => (
                      <div key={idx} className="flex items-center space-x-2 p-3 rounded-md hover:bg-blue-50">
                        <Checkbox 
                          id={`option-${idx}`} 
                          checked={(answers[currentQuestion.id] || []).includes(idx)}
                          onCheckedChange={(checked) => 
                            handleMultipleChoiceChange(currentQuestion.id, idx, checked === true)
                          }
                        />
                        <label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between items-center pt-4 border-t">
                <Button 
                  variant="outline" 
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                
                <div className="text-sm text-mcq-gray-dark">
                  <span className="text-green-600 font-medium">{answeredCount}</span> answered •&nbsp;
                  <span className="text-amber-500 font-medium">{flaggedQuestions.length}</span> flagged •&nbsp;
                  <span className="text-red-500 font-medium">{unansweredCount}</span> unanswered
                </div>
                
                <Button 
                  variant={currentQuestionIndex === questions.length - 1 ? "default" : "outline"}
                  onClick={currentQuestionIndex === questions.length - 1 ? handleSubmitExam : goToNextQuestion}
                >
                  {currentQuestionIndex === questions.length - 1 ? (
                    <>Finish Exam</>
                  ) : (
                    <>Next <ArrowRight className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ExamPage;
