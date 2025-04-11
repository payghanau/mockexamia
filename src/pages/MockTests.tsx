
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, BarChart2, Award, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

const MockTests = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    document.title = "Mock Tests - myturnindia";
  }, []);

  const mockTests = [
    {
      id: 1,
      title: "NISM Series VIII: Equity Derivatives",
      description: "Practice test for NISM Series VIII certification",
      questions: 60,
      duration: 120,
      difficulty: "Medium",
      isFree: true
    },
    {
      id: 2,
      title: "NISM Series V-A: Mutual Fund Distributors",
      description: "Comprehensive mock test for Mutual Fund Distributors certification",
      questions: 100,
      duration: 180,
      difficulty: "Hard",
      isFree: false
    },
    {
      id: 3,
      title: "GATE CSE: Operating Systems",
      description: "In-depth practice on Operating Systems concepts",
      questions: 30,
      duration: 60,
      difficulty: "Hard",
      isFree: false
    },
    {
      id: 4,
      title: "NISM Series XII: Securities Markets Foundation",
      description: "Foundational mock test for Securities Markets certification",
      questions: 75,
      duration: 150,
      difficulty: "Easy",
      isFree: false
    },
    {
      id: 5,
      title: "GATE ECE: Digital Circuits",
      description: "Comprehensive practice on Digital Circuits concepts",
      questions: 25,
      duration: 45,
      difficulty: "Medium",
      isFree: false
    },
    {
      id: 6,
      title: "NISM Series VII: Securities Operations and Risk Management",
      description: "Full-length mock test covering all exam topics",
      questions: 80,
      duration: 160,
      difficulty: "Medium",
      isFree: false
    },
  ];

  const handleStartTest = (testId, isFree) => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    
    if (isFree) {
      navigate(`/exam/${testId}`);
    } else {
      navigate(`/payment/${testId}`);
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariant = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-blue-50 to-white pt-20">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Practice Makes Perfect
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Prepare for your exams with our comprehensive mock tests designed by experts to help you succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => navigate("/pricing")}
                >
                  View Premium Plans
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => navigate("/dashboard")}
                >
                  Go to Dashboard
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full opacity-70 blur-3xl"></div>
          </div>
        </section>
        
        {/* Mock Tests Grid */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Mock Tests</h2>
            <p className="text-gray-600 max-w-3xl">
              Choose from our selection of carefully designed mock tests to practice and improve your skills.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {mockTests.map((test) => (
              <motion.div key={test.id} variants={cardVariant}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{test.title}</CardTitle>
                      {test.isFree ? (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Free</Badge>
                      ) : (
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Premium</Badge>
                      )}
                    </div>
                    <CardDescription className="mt-2">{test.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4 flex-grow">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">{test.questions} Questions</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">{test.duration} Minutes</span>
                      </div>
                      <div className="flex items-center">
                        <BarChart2 className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">{test.difficulty}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-gray-700">Certification</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      className={`w-full ${test.isFree ? "bg-blue-600 hover:bg-blue-700" : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"}`}
                      onClick={() => handleStartTest(test.id, test.isFree)}
                    >
                      {test.isFree ? (
                        "Start Free Test"
                      ) : (
                        <div className="flex items-center justify-center">
                          <Lock className="h-4 w-4 mr-2" />
                          Unlock Premium Test
                        </div>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Ace Your Exam?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get full access to all premium mock tests and boost your exam preparation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-700 hover:bg-gray-100"
                onClick={() => navigate("/pricing")}
              >
                View Premium Plans
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-blue-700"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MockTests;
