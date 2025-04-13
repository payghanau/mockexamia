
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, BookOpen, BarChart2, Award, Lock, Zap, 
  ChevronRight, BookCheck, ShieldCheck, Star, 
  Trophy, TrendingUp, Users, FileText, CheckCircle, 
  ArrowRight, UserCheck, Brain, Target, Lightbulb
} from "lucide-react";
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

  const featuredCourses = [
    {
      id: 1,
      title: "NISM Series-VIII: Equity Derivatives",
      category: "NISM",
      instructor: "Prof. Rajesh Kumar",
      duration: "3 Hours",
      questions: 100,
      rating: 4.8,
      students: 4820,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Derivatives", "NISM", "Finance"]
    },
    {
      id: 2,
      title: "GATE: Computer Science Full Test",
      category: "GATE",
      instructor: "Dr. Anand Sharma",
      duration: "3 Hours",
      questions: 65,
      rating: 4.9,
      students: 6250,
      image: "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      tags: ["Computer Science", "GATE", "Engineering"]
    },
    {
      id: 3,
      title: "NISM Series-V-A: Mutual Funds",
      category: "NISM",
      instructor: "CA Deepak Mehta",
      duration: "2 Hours",
      questions: 100,
      rating: 4.7,
      students: 5640,
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80",
      tags: ["Mutual Funds", "NISM", "Finance"]
    },
    {
      id: 4,
      title: "GATE: Electronics & Communication",
      category: "GATE",
      instructor: "Prof. Sunil Malhotra",
      duration: "3 Hours",
      questions: 65,
      rating: 4.8,
      students: 4120,
      image: "https://images.unsplash.com/photo-1581695250507-9bb63b750e19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80",
      tags: ["Electronics", "GATE", "Engineering"]
    },
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
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <DrifterStars starCount={100} starColor="#4f7df0" speed={0.3} className="opacity-40" />
      <main className="flex-1 pt-16 relative z-10">
        {/* Hero Section with Course Search */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-800/90 z-10 dark:from-blue-900/90 dark:to-indigo-900/90"></div>
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Students studying for exams" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Master Your Exams with Expert-Crafted Tests
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-blue-100 mb-8"
              >
                Join thousands of successful candidates who aced their exams with our comprehensive practice tests
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative max-w-2xl mx-auto mb-8"
              >
                <div className="flex items-center bg-white dark:bg-gray-800 rounded-full overflow-hidden shadow-lg p-2">
                  <div className="ml-3 flex-1">
                    <input 
                      type="text" 
                      placeholder="Search for exams, topics, or categories..."
                      className="w-full border-none focus:ring-0 text-gray-800 dark:text-gray-200 bg-transparent outline-none py-2 px-1"
                    />
                  </div>
                  <Button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6">
                    Search
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:text-blue-800 hover:bg-gray-50 shadow-md dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                  onClick={() => navigate("/pricing")}
                >
                  View Premium Plans
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => navigate("/dashboard")}
                >
                  Go to Dashboard
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Badge variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/40 px-4 py-2 text-sm rounded-full">
                NISM Certification
              </Badge>
              <Badge variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/40 px-4 py-2 text-sm rounded-full">
                GATE Exam
              </Badge>
              <Badge variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/40 px-4 py-2 text-sm rounded-full">
                Section-wise Tests
              </Badge>
              <Badge variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/40 px-4 py-2 text-sm rounded-full">
                Full-length Mock Tests
              </Badge>
            </motion.div>
            
            <div className="flex items-center justify-center gap-8 mt-16 text-white">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col items-center"
              >
                <Users className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold">15,000+</div>
                <div className="text-blue-100 text-sm">Happy Students</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center"
              >
                <FileText className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-blue-100 text-sm">Mock Tests</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col items-center"
              >
                <CheckCircle className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold">98%</div>
                <div className="text-blue-100 text-sm">Success Rate</div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Featured Courses Carousel */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Mock Tests</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Hand-picked tests by our expert educators</p>
              </div>
              <Button variant="ghost" className="text-blue-600 dark:text-blue-400 flex items-center" onClick={() => navigate('/dashboard')}>
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                  onClick={() => navigate(`/exam/${course.id}`)}
                >
                  <div className="relative h-48">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge className={`px-2 py-1 ${course.category === 'NISM' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'}`}>
                        {course.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-800 dark:text-gray-200">{course.rating}</span>
                      </div>
                      <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{course.students.toLocaleString()} students</span>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{course.title}</h3>
                    
                    <div className="flex items-center mb-3">
                      <UserCheck className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{course.instructor}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mt-auto">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        {course.questions} Questions
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-5 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-100 dark:bg-blue-900/40 rounded-full opacity-70 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/40 rounded-full opacity-70 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-4 py-1">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive Learning Experience</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our platform is designed to maximize your learning and ensure exam success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Targeted Practice</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Focus on specific topics or take comprehensive tests that mirror the actual exam environment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Section-wise practice tests</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Full-length mock exams</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Customizable test creation</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Smart Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Gain insights into your performance with detailed analytics and personalized recommendations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Performance tracking dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Strength and weakness analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Personalized study recommendations</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Expert Guidance</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Learn from detailed explanations and insights provided by industry experts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Detailed solution explanations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Expert-verified questions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Study resources and tips</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Our Students Say</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Don't just take our word for it. See what our students have achieved with our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 flex-1 italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 -z-10"></div>
          
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Students studying" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400 dark:bg-indigo-600 rounded-full blur-3xl"></div>
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
                  className="bg-white text-indigo-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-base px-8 py-6 h-auto rounded-xl dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700"
                  onClick={() => navigate("/pricing")}
                >
                  View Premium Plans
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-base px-8 py-6 h-auto rounded-xl dark:border-gray-300 dark:text-gray-300"
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
