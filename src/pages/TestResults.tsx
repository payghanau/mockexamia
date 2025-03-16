
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestAnalysis from "@/components/exams/TestAnalysis";
import { ExamAnalysis, UserExam } from "@/types";
import { ArrowLeft, Download, Home } from "lucide-react";

const TestResults = () => {
  const { resultId } = useParams();
  const [loading, setLoading] = useState(true);
  const [examResult, setExamResult] = useState<any>(null);
  const [analysis, setAnalysis] = useState<ExamAnalysis | null>(null);

  useEffect(() => {
    document.title = "Test Results - myturnindia";
    
    // In a real app, this would be an API call
    setTimeout(() => {
      // For demo, we'll retrieve from localStorage
      const storedResult = localStorage.getItem(resultId || "");
      
      if (storedResult) {
        const resultData = JSON.parse(storedResult);
        setExamResult(resultData);
        
        // Calculate analysis
        const totalQuestions = resultData.answers.length;
        const attempted = resultData.answers.filter((a: any) => a.selectedOptions.length > 0).length;
        const correct = resultData.answers.filter((a: any) => a.isCorrect).length;
        const incorrect = attempted - correct;
        const skipped = totalQuestions - attempted;
        
        const obtainedMarks = resultData.answers.reduce((total: number, a: any) => total + a.marksObtained, 0);
        const totalMarks = totalQuestions; // Simplified for demo, in real app would sum question marks
        
        const percentageScore = (obtainedMarks / totalMarks) * 100;
        const accuracy = attempted > 0 ? (correct / attempted) * 100 : 0;
        
        // Mock time taken - in seconds
        const timeTaken = 60 * 10 + 45;
        
        setAnalysis({
          totalQuestions,
          attempted,
          correct,
          incorrect,
          skipped,
          totalMarks,
          obtainedMarks,
          percentageScore,
          timeTaken,
          accuracy
        });
      }
      
      setLoading(false);
    }, 1000);
  }, [resultId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-mcq-blue border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-mcq-gray-dark">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (!examResult || !analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-red-500 mb-4">Results not found</p>
          <Button asChild>
            <Link to="/dashboard">
              <Home className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <main className="flex-1 px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Test Analysis</h1>
              <p className="text-mcq-gray-dark">
                Your performance report for the exam
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button asChild variant="outline">
                <Link to="/dashboard">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Link>
              </Button>
              
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
            </div>
          </div>
          
          <TestAnalysis analysis={analysis} />
          
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Question-wise Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {examResult.answers.map((answer: any, index: number) => (
                    <div key={index} className="p-4 rounded-lg border border-gray-100 bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          answer.isCorrect 
                            ? 'bg-green-100 text-green-600' 
                            : answer.selectedOptions.length === 0 
                              ? 'bg-gray-100 text-gray-500'
                              : 'bg-red-100 text-red-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="font-medium">
                          Question {index + 1}
                        </div>
                        <div className="ml-auto text-sm">
                          {answer.isCorrect 
                            ? `+${answer.marksObtained}` 
                            : answer.marksObtained < 0 
                              ? answer.marksObtained 
                              : '0'
                          }
                        </div>
                      </div>
                      <div className="text-sm text-mcq-gray-dark">
                        {answer.isCorrect 
                          ? 'Correct answer' 
                          : answer.selectedOptions.length === 0 
                            ? 'Not attempted'
                            : 'Incorrect answer'
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TestResults;
