
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
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations";

const MockTests = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    document.title = "Mock Tests - myturnindia";
  }, []);

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

  const renderCtaSection = () => (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 -z-10"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Students studying" 
          className="w-full h-full object-cover"
        />
      </div>
      
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
        {/* Hero Section with Beautiful Image */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-indigo-800/80 z-10"></div>
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Students studying for exams" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ace Your Exams with Expert-Crafted Mock Tests
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Prepare confidently with our comprehensive practice tests designed to mirror real exam experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:text-blue-800 hover:bg-gray-50 shadow-md"
                  onClick={() => navigate("/pricing")}
                >
                  View Premium Plans
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
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
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100"
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
        </section>
        
        {/* Explore by Category with Beautiful Images */}
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
                className="cursor-pointer relative overflow-hidden rounded-2xl shadow-lg group"
                onClick={() => handleCategoryClick('NISM')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-blue-900/80 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="NISM Certification" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">NISM Certification</h3>
                    <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <p className="text-white/90 mb-4">
                    Practice for your NISM certification with our comprehensive mock tests covering all exam modules.
                  </p>
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-sm text-white/80">4 Mock Tests Available</div>
                    <Button 
                      variant="secondary" 
                      className="bg-white/20 backdrop-blur-sm text-white border border-white/40 hover:bg-white/30 p-0 px-3 py-1 flex items-center group-hover:translate-x-1 transition-transform"
                    >
                      View Tests <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer relative overflow-hidden rounded-2xl shadow-lg group"
                onClick={() => handleCategoryClick('GATE')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/70 to-purple-900/80 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                  alt="GATE Exams" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">GATE Exams</h3>
                    <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <p className="text-white/90 mb-4">
                    Prepare for GATE with subject-wise and full-length mock tests designed by experts.
                  </p>
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-sm text-white/80">2 Mock Tests Available</div>
                    <Button 
                      variant="secondary" 
                      className="bg-white/20 backdrop-blur-sm text-white border border-white/40 hover:bg-white/30 p-0 px-3 py-1 flex items-center group-hover:translate-x-1 transition-transform"
                    >
                      View Tests <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section (renderCtaSection already has image background) */}
        {renderCtaSection()}
      </main>
      <Footer />
    </div>
  );
};

export default MockTests;
