
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen, Award, BarChart2, TrendingUp, Clock, Trophy,
  CheckCircle, UserCheck, FileText, Star, Users, GraduationCap,
  Edit, MessageSquare, Send, ChevronLeft, ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import DrifterStars from "@/components/ui/DrifterStars";

const MockTests = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, isAdmin } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("all");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);
  
  useEffect(() => {
    document.title = "Mock Tests - myturnindia";
    fetchReviews();
    
    // Auto rotate testimonials
    const intervalId = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  
  const submitReview = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to submit a review",
        variant: "destructive"
      });
      return;
    }
    
    if (!reviewText.trim()) {
      toast({
        title: "Review cannot be empty",
        description: "Please write something before submitting",
        variant: "destructive"
      });
      return;
    }
    
    setSubmitLoading(true);
    
    try {
      const { error } = await supabase
        .from('reviews')
        .insert([
          { user_id: user.id, content: reviewText.trim(), user_email: user.email }
        ]);
        
      if (error) throw error;
      
      toast({
        title: "Review Submitted",
        description: "Thank you for sharing your feedback!",
        variant: "default"
      });
      
      setReviewText("");
      fetchReviews();
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your review. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitLoading(false);
    }
  };
  
  const deleteReview = async (reviewId) => {
    if (!isAdmin) return;
    
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', reviewId);
        
      if (error) throw error;
      
      toast({
        title: "Review Deleted",
        description: "The review has been removed successfully",
      });
      
      fetchReviews();
    } catch (error) {
      console.error("Error deleting review:", error);
      toast({
        title: "Deletion Failed",
        description: "There was an error deleting the review",
        variant: "destructive"
      });
    }
  };

  const nismExams = [
    {
      id: "nism-1",
      title: "NISM Series-VIII: Equity Derivatives",
      description: "Comprehensive test for NISM Series-VIII certification covering equity derivatives",
      category: "NISM",
      duration: 120,
      questions: 100,
      price: 599,
      popularityScore: 95,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "nism-2",
      title: "NISM Series-V-A: Mutual Funds",
      description: "Complete preparation for NISM Series-V-A certification on mutual fund distribution",
      category: "NISM",
      duration: 120,
      questions: 100,
      price: 499,
      popularityScore: 98,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "nism-3",
      title: "NISM Series-X-A: Investment Adviser",
      description: "Comprehensive exam prep for NISM Investment Adviser certification",
      category: "NISM",
      duration: 150,
      questions: 100,
      price: 699,
      popularityScore: 92,
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "nism-4",
      title: "NISM Series-XV: Securities Operations",
      description: "Full test preparation for NISM Securities Operations and Risk Management certification",
      category: "NISM",
      duration: 120,
      questions: 100,
      price: 549,
      popularityScore: 90,
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const gateExams = [
    {
      id: "gate-1",
      title: "Computer Science Full Test",
      description: "Complete GATE CS preparation with full-length mock tests",
      category: "GATE",
      duration: 180,
      questions: 65,
      price: 799,
      popularityScore: 96,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "gate-2",
      title: "Electronics & Communication",
      description: "Comprehensive GATE ECE preparation with expert-crafted questions",
      category: "GATE",
      duration: 180,
      questions: 65,
      price: 799,
      popularityScore: 94,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "gate-3",
      title: "Electrical Engineering",
      description: "Complete preparation for GATE EE with full-length mock tests",
      category: "GATE",
      duration: 180,
      questions: 65,
      price: 799,
      popularityScore: 91,
      image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "gate-4",
      title: "Mechanical Engineering",
      description: "Comprehensive GATE ME preparation with topic-wise mock tests",
      category: "GATE",
      duration: 180,
      questions: 65,
      price: 799,
      popularityScore: 89,
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "NISM Certified Professional",
      content: "The mock tests were incredibly helpful in my preparation. The questions were very similar to the actual exam, and the detailed explanations helped me understand the concepts better.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Rahul Kapoor",
      role: "GATE 2024 Qualifier",
      content: "I've tried many mock test platforms, but myturnindia stands out for its quality and relevance. The section-wise tests helped me identify my weak areas and focus my preparation effectively.",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Anjali Desai",
      role: "Financial Advisor",
      content: "The NISM certification mock tests were excellent. The platform's user interface is intuitive, and the performance analytics gave me valuable insights into my progress.",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: 4
    }
  ];

  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      title: "Expert-crafted Questions",
      description: "Questions designed by industry experts to match actual exam patterns"
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      title: "Detailed Analytics",
      description: "Comprehensive performance insights to track your progress"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
      title: "Exam-like Experience",
      description: "Simulated testing environment to prepare you for the real exam"
    }
  ];

  const renderExamCard = (exam) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
      onClick={() => navigate(`/exam/${exam.id}`)}
    >
      <div className="relative h-48">
        <img src={exam.image} alt={exam.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-4 left-4">
          <Badge className={`px-2 py-1 ${exam.category === 'NISM' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'}`}>
            {exam.category}
          </Badge>
        </div>
        {exam.popularityScore >= 95 && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-2 py-1">
              Popular
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 font-work-sans">{exam.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 font-roboto">{exam.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mt-auto mb-3">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {exam.duration} mins
          </div>
          <div className="flex items-center">
            <FileText className="h-4 w-4 mr-1" />
            {exam.questions} Questions
          </div>
        </div>
      </div>
      
      <div className="px-5 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-lg text-gray-900 dark:text-white">₹{exam.price}</div>
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-work-sans font-semibold">
            Enroll Now
          </Button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <DrifterStars starCount={100} starColor="#4f7df0" speed={0.3} className="opacity-40" />
      
      <main className="flex-1 pt-8 relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-800/90 z-10 dark:from-blue-900/90 dark:to-indigo-900/90"></div>
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Students studying for exams" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight font-work-sans"
              >
                Expert-Crafted Mock Tests for Exam Success
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-blue-100 mb-8 font-work-sans font-regular"
              >
                Ace your NISM certifications and GATE exams with our comprehensive practice tests
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:text-blue-800 hover:bg-gray-50 shadow-md dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700 font-work-sans font-semibold"
                  onClick={() => navigate("/dashboard")}
                >
                  Go to Dashboard
                </Button>
                {!isAuthenticated && (
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 font-work-sans font-semibold"
                    onClick={() => navigate("/register")}
                  >
                    Sign Up Now
                  </Button>
                )}
              </motion.div>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-12 text-white">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col items-center"
              >
                <Users className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold font-work-sans">15,000+</div>
                <div className="text-blue-100 text-sm font-work-sans">Happy Students</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center"
              >
                <FileText className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold font-work-sans">500+</div>
                <div className="text-blue-100 text-sm font-work-sans">Mock Tests</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col items-center"
              >
                <CheckCircle className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold font-work-sans">98%</div>
                <div className="text-blue-100 text-sm font-work-sans">Success Rate</div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Tabs for Exams */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-work-sans">
                Our Mock Test Catalog
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-work-sans">
                Choose from our extensive range of meticulously designed mock tests
              </p>
            </div>
            
            <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100 dark:bg-gray-800 p-1">
                  <TabsTrigger
                    value="all"
                    className={`px-6 py-2 font-work-sans font-semibold ${activeTab === 'all' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    All Tests
                  </TabsTrigger>
                  <TabsTrigger
                    value="nism"
                    className={`px-6 py-2 flex items-center space-x-2 font-work-sans font-semibold ${activeTab === 'nism' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    <Award className="h-4 w-4" />
                    <span>NISM Certification</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="gate"
                    className={`px-6 py-2 flex items-center space-x-2 font-work-sans font-semibold ${activeTab === 'gate' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>GATE Exams</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center font-work-sans">
                    <Award className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
                    NISM Certification Tests
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {nismExams.map(exam => renderExamCard(exam))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center mt-16 font-work-sans">
                    <GraduationCap className="mr-2 h-6 w-6 text-purple-600 dark:text-purple-400" />
                    GATE Exam Tests
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {gateExams.map(exam => renderExamCard(exam))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="nism" className="mt-0">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 mb-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="md:w-2/3 md:pr-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-work-sans">NISM Certification Tests</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 font-work-sans">
                          Our NISM mock tests are designed by industry experts who understand the certification requirements inside out. Each test mirrors the actual exam pattern, helping you build confidence and mastery.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <Badge className="bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1.5 font-work-sans">Series V-A</Badge>
                          <Badge className="bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1.5 font-work-sans">Series VIII</Badge>
                          <Badge className="bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1.5 font-work-sans">Series X-A</Badge>
                          <Badge className="bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1.5 font-work-sans">Series XV</Badge>
                        </div>
                      </div>
                      <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
                        <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
                          <Award className="h-16 w-16 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {nismExams.map(exam => renderExamCard(exam))}
                </div>
              </TabsContent>
              
              <TabsContent value="gate" className="mt-0">
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-8 mb-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="md:w-2/3 md:pr-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-work-sans">GATE Exam Tests</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 font-work-sans">
                          Prepare for GATE with our comprehensive test series covering all branches of engineering. Our tests are constructed with the latest exam pattern and feature detailed explanations to strengthen your understanding.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <Badge className="bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-300 px-3 py-1.5 font-work-sans">Computer Science</Badge>
                          <Badge className="bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-300 px-3 py-1.5 font-work-sans">Electronics</Badge>
                          <Badge className="bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-300 px-3 py-1.5 font-work-sans">Electrical</Badge>
                          <Badge className="bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-300 px-3 py-1.5 font-work-sans">Mechanical</Badge>
                        </div>
                      </div>
                      <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
                        <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center">
                          <GraduationCap className="h-16 w-16 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {gateExams.map(exam => renderExamCard(exam))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-4 py-1 font-work-sans">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-work-sans">The myturnindia Advantage</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-work-sans">
                Our platform is designed to maximize your learning and ensure exam success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-work-sans">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-work-sans">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-work-sans">Success Stories</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-work-sans">
                See how our platform has helped students achieve their goals
              </p>
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center text-center md:text-left"
                >
                  <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                    <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900">
                      <img 
                        src={testimonials[testimonialIndex].image} 
                        alt={testimonials[testimonialIndex].name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex mb-4 justify-center md:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonials[testimonialIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 italic font-merriweather">"{testimonials[testimonialIndex].content}"</p>
                    <h4 className="font-semibold text-gray-900 dark:text-white font-work-sans">{testimonials[testimonialIndex].name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-work-sans">{testimonials[testimonialIndex].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center mt-8 space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setTestimonialIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setTestimonialIndex(prev => (prev + 1) % testimonials.length)}
                  className="rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Submit Review Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-work-sans">Share Your Experience</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-work-sans">
                Let us know how myturnindia helped you in your exam preparation
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Card className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-gray-100 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-work-sans">
                    <Edit className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                    Write a Review
                  </CardTitle>
                  <CardDescription className="font-work-sans">
                    Your feedback helps us improve and helps other students make informed decisions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Share your experience with our mock tests..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="min-h-32 resize-none font-roboto"
                  />
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 flex items-center font-work-sans font-semibold"
                    onClick={submitReview}
                    disabled={submitLoading}
                  >
                    {submitLoading ? "Submitting..." : "Submit Review"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              
              {/* User Reviews List */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center font-work-sans">
                  <MessageSquare className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Student Reviews
                </h3>
                
                {reviews.length === 0 ? (
                  <div className="text-center text-gray-600 dark:text-gray-400 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg font-work-sans">
                    No reviews yet. Be the first to share your experience!
                  </div>
                ) : (
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <Card key={review.id} className="border-gray-100 dark:border-gray-700">
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center">
                              <div className="bg-blue-100 dark:bg-blue-900 h-10 w-10 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 mr-3">
                                {review.user_email?.charAt(0)?.toUpperCase() || "U"}
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 dark:text-white font-work-sans">
                                  {review.user_email?.split('@')[0] || "Anonymous"}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-work-sans">
                                  {new Date(review.created_at).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            {isAdmin && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 font-work-sans"
                                onClick={() => deleteReview(review.id)}
                              >
                                Delete
                              </Button>
                            )}
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 font-roboto">{review.content}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight font-work-sans">
                Ready to Ace Your Exam?
              </h2>
              
              <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed font-work-sans">
                Start your preparation journey today with our expert-crafted mock tests
              </p>
              
              <div className="flex flex-wrap justify-center gap-5">
                <Button 
                  size="lg" 
                  className="bg-white text-indigo-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-base px-8 py-6 h-auto rounded-xl dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700 font-work-sans font-semibold"
                  onClick={() => navigate("/dashboard")}
                >
                  Go to Dashboard
                </Button>
                {!isAuthenticated && (
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 text-base px-8 py-6 h-auto rounded-xl dark:border-gray-300 dark:text-gray-300 font-work-sans font-semibold"
                    onClick={() => navigate("/register")}
                  >
                    Sign Up Now
                  </Button>
                )}
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
