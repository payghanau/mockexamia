import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, BarChart2, Award, Lock, Zap, ChevronRight, BookCheck, ShieldCheck, Star, Trophy, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import DrifterStars from "@/components/ui/DrifterStars";
import { scaleIn, fadeIn, slideUp, staggerContainer, gradientShift, pulseAnimation } from "@/lib/animations";

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

  const renderFeaturedMockTests = () => (
    <section className="py-20 px-4 max-w-7xl mx-auto relative">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl -z-10"
        style={{ 
          backgroundSize: '20px 20px',
          backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 0)`
        }}
      />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-12 relative"
      >
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <motion.div 
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
            className="inline-block"
          >
            <Trophy className="h-14 w-14 text-blue-500 opacity-10" />
          </motion.div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
          Featured Mock Tests
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"></div>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Start with our most popular mock tests to kickstart your preparation journey
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {mockTests.slice(0, 3).map((test) => (
          <motion.div key={test.id} variants={scaleIn} className="h-full">
            <Card className="h-full group hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border-gray-200 relative">
              <div className="absolute top-0 right-0 -mt-1 -mr-1 z-10">
                {test.isFree ? (
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs py-1 px-3 rounded-bl-xl rounded-tr-xl font-medium shadow-md">
                    FREE ACCESS
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs py-1 px-3 rounded-bl-xl rounded-tr-xl font-medium shadow-md">
                    PREMIUM
                  </div>
                )}
              </div>
              
              <div className={`h-2 w-full ${test.category === 'NISM' ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-purple-400 to-purple-600'}`}></div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-2">
                    <div className={`mt-1 p-1.5 rounded-full ${test.category === 'NISM' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                      {test.category === 'NISM' ? 
                        <Award className="h-4 w-4 text-blue-600" /> : 
                        <BookOpen className="h-4 w-4 text-purple-600" />
                      }
                    </div>
                    <CardTitle className="text-xl">{test.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="mt-2">{test.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pb-2 flex-grow">
                <div className="mt-2 mb-4 flex items-center">
                  <div className="flex">
                    {[...Array(test.difficulty === 'Easy' ? 1 : test.difficulty === 'Medium' ? 2 : 3)].map((_, i) => (
                      <Star key={i} fill="#3b82f6" className="h-4 w-4 text-blue-500" />
                    ))}
                    {[...Array(3 - (test.difficulty === 'Easy' ? 1 : test.difficulty === 'Medium' ? 2 : 3))].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gray-300" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">{test.difficulty} difficulty</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center bg-gray-50 p-2 rounded-lg">
                    <BookOpen className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-700">{test.questions} Questions</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-2 rounded-lg">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-700">{test.duration} Minutes</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm font-medium">500+ students took this test</span>
                    </div>
                    <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">{test.category}</Badge>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-2">
                <Button 
                  className={`w-full ${test.isFree 
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md group-hover:shadow-lg transition-all" 
                    : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md group-hover:shadow-lg transition-all"}`}
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
      
      <motion.div 
        className="text-center mt-14"
        variants={slideUp}
        initial="hidden"
        animate="visible"
      >
        <Button 
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-6 h-auto text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          View All Mock Tests
          <ChevronRight className="ml-1 h-5 w-5" />
        </Button>
      </motion.div>
    </section>
  );

  const renderCtaSection = () => (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 -z-10"></div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full"></div>
        <div className="grid grid-cols-10 grid-rows-10 gap-5 h-full w-full">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="bg-white/5 rounded-full w-1 h-1"
              style={{
                gridColumnStart: Math.floor(Math.random() * 10) + 1,
                gridRowStart: Math.floor(Math.random() * 10) + 1,
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-block mb-6 p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
            <Trophy className="h-10 w-10 text-yellow-300" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Ready to Ace Your Exam?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
            Get full access to all premium mock tests and boost your exam preparation with expert-crafted questions and detailed analytics.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl">
                <div className="mb-3 bg-white/20 p-3 rounded-full">
                  <BookCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">500+ Practice Questions</h3>
                <p className="text-blue-100 text-sm text-center">Expertly crafted to mirror actual exam patterns</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl">
                <div className="mb-3 bg-white/20 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">Performance Analytics</h3>
                <p className="text-blue-100 text-sm text-center">Track your progress with detailed insights</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl">
                <div className="mb-3 bg-white/20 p-3 rounded-full">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">Certification Ready</h3>
                <p className="text-blue-100 text-sm text-center">Be fully prepared for your certification exams</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-5">
            <Button 
              size="lg" 
              className="bg-white text-indigo-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-base px-8 py-6 h-auto rounded-xl"
              onClick={() => navigate("/pricing")}
            >
              View Premium Plans
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-base px-8 py-6 h-auto rounded-xl"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <DrifterStars starCount={100} starColor="#4f7df0" speed={0.3} className="opacity-40" />
      <main className="flex-1 pt-16 relative z-10">
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
          
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full opacity-70 blur-3xl"></div>
          </div>
        </section>
        
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
        
        {renderFeaturedMockTests()}
        
        {renderCtaSection()}
      </main>
      <Footer />
    </div>
  );
};

export default MockTests;
