
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ExamCard from "@/components/exams/ExamCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Exam } from "@/types";

const Dashboard = () => {
  const navigate = useNavigate();
  const [exams, setExams] = useState<Exam[]>([]);
  
  useEffect(() => {
    document.title = "Dashboard - myturnindia";
    
    // In a real app, this would be an API call
    // For now, we'll use mock data
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
        id: "nism-2",
        title: "NISM Series VIII: Equity Derivatives",
        description: "Chapter 4-6: Options Trading Strategies",
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
      },
      {
        id: "gate-2",
        title: "GATE Computer Science - Full Length",
        description: "Complete syllabus coverage",
        category: "GATE",
        subcategory: "Computer Science",
        type: "full-length",
        duration: 180,
        totalQuestions: 65,
        fee: 499,
        createdBy: "admin",
        createdAt: new Date(),
        isActive: true
      },
      {
        id: "gate-3",
        title: "GATE Electrical Engineering - Section Test",
        description: "Circuit Theory & Electromagnetic Fields",
        category: "GATE",
        subcategory: "Electrical Engineering",
        type: "section-wise",
        duration: 20,
        totalQuestions: 10,
        fee: 299,
        createdBy: "admin",
        createdAt: new Date(),
        isActive: true
      },
      {
        id: "gate-4",
        title: "GATE Electrical Engineering - Full Length",
        description: "Complete syllabus coverage",
        category: "GATE",
        subcategory: "Electrical Engineering",
        type: "full-length",
        duration: 180,
        totalQuestions: 65,
        fee: 499,
        createdBy: "admin",
        createdAt: new Date(), 
        isActive: true
      }
    ];
    
    setExams(mockExams);
  }, []);

  const nismExams = exams.filter(exam => exam.category === "NISM");
  const gateExams = exams.filter(exam => exam.category === "GATE");
  const sectionWiseGateExams = gateExams.filter(exam => exam.type === "section-wise");
  const fullLengthGateExams = gateExams.filter(exam => exam.type === "full-length");

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nismExams.map(exam => (
                  <ExamCard key={exam.id} exam={exam} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="gate-section" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectionWiseGateExams.map(exam => (
                  <ExamCard key={exam.id} exam={exam} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="gate-full" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fullLengthGateExams.map(exam => (
                  <ExamCard key={exam.id} exam={exam} isPremium={true} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
