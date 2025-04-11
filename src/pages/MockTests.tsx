
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, BarChart2, Award, Lock, Zap, ChevronRight, BookCheck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import DrifterStars from "@/components/ui/DrifterStars";

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
      isFree: true,
      category: "NISM"
    },
    {
      id: 2,
      title: "NISM Series V-A: Mutual Fund Distributors",
      description: "Comprehensive mock test for Mutual Fund Distributors certification",
      questions: 100,
      duration: 180,
      difficulty: "Hard",
      isFree: false,
      category: "NISM"
    },
    {
      id: 3,
      title: "GATE CSE: Operating Systems",
      description: "In-depth practice on Operating Systems concepts",
      questions: 30,
      duration: 60,
      difficulty: "Hard",
      isFree: false,
      category: "GATE"
    },
    {
      id: 4,
      title: "NISM Series XII: Securities Markets Foundation",
      description: "Foundational mock test for Securities Markets certification",
      questions: 75,
      duration: 150,
      difficulty: "Easy",
      isFree: false,
      category: "NISM"
    },
    {
      id: 5,
      title: "GATE ECE: Digital Circuits",
      description: "Comprehensive practice on Digital Circuits concepts",
      questions: 25,
      duration: 45,
      difficulty: "Medium",
      isFree: false,
      category: "GATE"
    },
    {
      id: 6,
      title: "NISM Series VII: Securities Operations and Risk Management",
      description: "Full-length mock test covering all exam topics",
      questions: 80,
      duration: 160,
      difficulty: "Medium",
      isFree: false,
      category: "NISM"
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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      } 
    }
  };

  const handleCategoryClick = (category) => {
    if (category === 'NISM') {
      navigate('/nism-exams');
    } else if (category === 'GATE') {
      navigate('/gate-exams');
    }
  };

  const features = [
    {
      icon: <BookCheck className="h-6 w-6 text-blue-500" />,
      title: "Expert-crafted Questions",
      description: "Questions designed by industry experts to match actual exam patterns"
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      title: "Detailed Analytics",
      description: "Comprehensive performance insights to track your progress"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-500" />,
      title: "Exam-like Experience",
      description: "Simulated testing environment to prepare you for the real exam"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <DrifterStars starCount={100} starColor="#4f7df0" speed={0.3} className="opacity-40" />
      <main className="flex-1 pt-16 relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                Ace Your Exams with Expert-Crafted Mock Tests
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Prepare confidently with our comprehensive practice tests designed to mirror real exam experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md"
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
            
            {/* Features */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full opacity-70 blur-3xl"></div>
          </div>
        </section>
        
        {/* Exam Categories Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose your exam category and start practicing with our specialized mock tests
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer"
                onClick={() => handleCategoryClick('NISM')}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg border border-blue-100 group">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-20"></div>
                  <div className="p-6 bg-white">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">NISM Certification</h3>
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Award className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Practice for your NISM certification with our comprehensive mock tests covering all exam modules.
                    </p>
                    <div className="flex items-center justify-between mt-6">
                      <div className="text-sm text-gray-500">4 Mock Tests Available</div>
                      <Button 
                        variant="ghost" 
                        className="text-blue-600 hover:text-blue-700 p-0 flex items-center group-hover:translate-x-1 transition-transform"
                      >
                        View Tests <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer"
                onClick={() => handleCategoryClick('GATE')}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg border border-purple-100 group">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-20"></div>
                  <div className="p-6 bg-white">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">GATE Exams</h3>
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Prepare for GATE with subject-wise and full-length mock tests designed by experts.
                    </p>
                    <div className="flex items-center justify-between mt-6">
                      <div className="text-sm text-gray-500">2 Mock Tests Available</div>
                      <Button 
                        variant="ghost" 
                        className="text-purple-600 hover:text-purple-700 p-0 flex items-center group-hover:translate-x-1 transition-transform"
                      >
                        View Tests <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Featured Mock Tests */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Featured Mock Tests</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Start with our most popular mock tests to kickstart your preparation
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {mockTests.slice(0, 3).map((test) => (
              <motion.div key={test.id} variants={cardVariant}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden border-gray-200">
                  <div className={`h-2 w-full ${test.category === 'NISM' ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{test.title}</CardTitle>
                      {test.isFree ? (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Free</Badge>
                      ) : (
                        <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">Premium</Badge>
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
                      className={`w-full ${test.isFree 
                        ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" 
                        : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"}`}
                      onClick={() => handleStartTest(test.id, test.isFree)}
                    >
                      {test.isFree ? (
                        <div className="flex items-center justify-center">
                          <Zap className="h-4 w-4 mr-2" />
                          Start Free Test
                        </div>
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
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate("/dashboard")}
              className="bg-blue-600 hover:bg-blue-700"
            >
              View All Mock Tests
            </Button>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Ace Your Exam?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
                Get full access to all premium mock tests and boost your exam preparation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-blue-700 hover:bg-gray-100 shadow-md"
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
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MockTests;
