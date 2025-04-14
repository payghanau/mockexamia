
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { 
  Award, Clock, FileText, CheckCircle, X, CreditCard, 
  BookOpen, BarChart2, TrendingUp, Calendar, Users, Star 
} from "lucide-react";
import DrifterStars from "@/components/ui/DrifterStars";

const NismExams = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    document.title = "NISM Certification Exams - myturnindia";
  }, []);

  const handleEnroll = (examId) => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to enroll in this exam",
        variant: "destructive"
      });
      navigate("/login", { state: { from: `/exams/nism`, examId } });
      return;
    }
    
    navigate(`/payment/${examId}`);
  };

  const nismExams = [
    {
      id: "nism-va",
      title: "NISM Series-V-A: Mutual Funds",
      description: "Complete preparation for NISM Series-V-A certification on mutual fund distribution",
      category: "Core",
      duration: 120,
      questions: 100,
      price: 599,
      popular: true,
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80",
      features: [
        "100 practice questions",
        "5 full-length mock tests",
        "Detailed explanations",
        "Performance analytics",
        "Mobile-friendly interface"
      ],
      validity: "3 months"
    },
    {
      id: "nism-viii",
      title: "NISM Series-VIII: Equity Derivatives",
      description: "Comprehensive test for NISM Series-VIII certification covering equity derivatives",
      category: "Specialized",
      duration: 120,
      questions: 100,
      price: 699,
      popular: false,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80",
      features: [
        "100 practice questions",
        "5 full-length mock tests",
        "Detailed explanations",
        "Performance analytics",
        "Mobile-friendly interface"
      ],
      validity: "3 months"
    },
    {
      id: "nism-xa",
      title: "NISM Series-X-A: Investment Adviser",
      description: "Complete exam preparation for investment adviser certification with expert guidance",
      category: "Specialized",
      duration: 150,
      questions: 100,
      price: 799,
      popular: false,
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80",
      features: [
        "100 practice questions",
        "5 full-length mock tests",
        "Detailed explanations",
        "Performance analytics",
        "Mobile-friendly interface"
      ],
      validity: "3 months"
    },
    {
      id: "nism-xv",
      title: "NISM Series-XV: Securities Operations",
      description: "Full mock test preparation for NISM Securities Operations and Risk Management certification",
      category: "Specialized",
      duration: 120,
      questions: 100,
      price: 599,
      popular: false,
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80",
      features: [
        "100 practice questions",
        "5 full-length mock tests",
        "Detailed explanations",
        "Performance analytics",
        "Mobile-friendly interface"
      ],
      validity: "3 months"
    },
    {
      id: "nism-xb",
      title: "NISM Series-X-B: Investment Adviser",
      description: "Advanced preparation for Investment Adviser (Advanced) certification with advanced topics",
      category: "Advanced",
      duration: 150,
      questions: 100,
      price: 899,
      popular: false,
      image: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80",
      features: [
        "100 practice questions",
        "5 full-length mock tests",
        "Detailed explanations",
        "Performance analytics",
        "Mobile-friendly interface",
        "Expert guidance"
      ],
      validity: "3 months"
    },
    {
      id: "nism-vib",
      title: "NISM Series-VI-B: Depository Operations",
      description: "Complete preparation for NISM Depository Operations certification",
      category: "Core",
      duration: 120,
      questions: 100,
      price: 599,
      popular: false,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2574&q=80",
      features: [
        "100 practice questions",
        "5 full-length mock tests",
        "Detailed explanations",
        "Performance analytics",
        "Mobile-friendly interface"
      ],
      validity: "3 months"
    }
  ];

  const generateBadgeColor = (category) => {
    switch(category) {
      case "Core":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Specialized":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Advanced":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <DrifterStars starCount={100} starColor="#4f7df0" speed={0.3} className="opacity-40" />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 z-10 dark:from-blue-900/90 dark:to-indigo-800/90"></div>
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="NISM Certifications" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-block p-3 rounded-full mb-6 bg-white/20 backdrop-blur-sm">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                NISM Certification Mock Tests
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Comprehensive preparation material for all NISM certification exams
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:text-blue-800 hover:bg-gray-50 shadow-md dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                  onClick={() => document.getElementById('exams-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Tests
                </Button>
                {!isAuthenticated && (
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800"
                    onClick={() => navigate("/register")}
                  >
                    Sign Up Now
                  </Button>
                )}
              </div>
              
              <div className="flex items-center justify-center gap-8 mt-16 text-white">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <Users className="h-8 w-8 mb-2" />
                  <div className="text-2xl font-bold">10,000+</div>
                  <div className="text-blue-100 text-sm">Successful Candidates</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <Star className="h-8 w-8 mb-2" />
                  <div className="text-2xl font-bold">4.8/5</div>
                  <div className="text-blue-100 text-sm">Student Rating</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <Award className="h-8 w-8 mb-2" />
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-blue-100 text-sm">Pass Rate</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Exams Section */}
        <section id="exams-section" className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Available NISM Certification Tests
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose from our comprehensive range of NISM certification mock tests
              </p>
            </div>
            
            <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100 dark:bg-gray-800 p-1">
                  <TabsTrigger
                    value="all"
                    className={`px-6 py-2 ${activeTab === 'all' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    All Tests
                  </TabsTrigger>
                  <TabsTrigger
                    value="core"
                    className={`px-6 py-2 ${activeTab === 'core' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    Core
                  </TabsTrigger>
                  <TabsTrigger
                    value="specialized"
                    className={`px-6 py-2 ${activeTab === 'specialized' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    Specialized
                  </TabsTrigger>
                  <TabsTrigger
                    value="advanced"
                    className={`px-6 py-2 ${activeTab === 'advanced' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    Advanced
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {nismExams.map((exam) => (
                    <motion.div
                      key={exam.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className={`overflow-hidden transition-all duration-300 hover:shadow-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 h-full flex flex-col ${
                        exam.popular ? 'relative border-blue-200 dark:border-blue-700' : ''
                      }`}>
                        {exam.popular && (
                          <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 text-sm font-bold rounded-bl-lg z-10">
                            Popular
                          </div>
                        )}
                        
                        <div className="relative h-48">
                          <img 
                            src={exam.image} 
                            alt={exam.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className={`${generateBadgeColor(exam.category)} px-2 py-1`}>
                              {exam.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl text-gray-900 dark:text-white">{exam.title}</CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-400">
                            {exam.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="flex-grow">
                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <Clock className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              {exam.duration} minutes
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <FileText className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              {exam.questions} questions
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <Calendar className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              {exam.validity} validity
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <CreditCard className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              ₹{exam.price}
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">What's included:</h4>
                            <ul className="space-y-1">
                              {exam.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 text-sm">
                                  <CheckCircle className="h-4 w-4 mr-2 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="bg-gray-50 dark:bg-gray-800">
                          <Button 
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                            onClick={() => handleEnroll(exam.id)}
                          >
                            Enroll Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="core" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {nismExams.filter(exam => exam.category === "Core").map((exam) => (
                    // Same card component as above
                    <motion.div
                      key={exam.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className={`overflow-hidden transition-all duration-300 hover:shadow-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 h-full flex flex-col ${
                        exam.popular ? 'relative border-blue-200 dark:border-blue-700' : ''
                      }`}>
                        {exam.popular && (
                          <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 text-sm font-bold rounded-bl-lg z-10">
                            Popular
                          </div>
                        )}
                        
                        <div className="relative h-48">
                          <img 
                            src={exam.image} 
                            alt={exam.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className={`${generateBadgeColor(exam.category)} px-2 py-1`}>
                              {exam.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl text-gray-900 dark:text-white">{exam.title}</CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-400">
                            {exam.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="flex-grow">
                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <Clock className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              {exam.duration} minutes
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <FileText className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              {exam.questions} questions
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <Calendar className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              {exam.validity} validity
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <CreditCard className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              ₹{exam.price}
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">What's included:</h4>
                            <ul className="space-y-1">
                              {exam.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 text-sm">
                                  <CheckCircle className="h-4 w-4 mr-2 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="bg-gray-50 dark:bg-gray-800">
                          <Button 
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                            onClick={() => handleEnroll(exam.id)}
                          >
                            Enroll Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="specialized" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {nismExams.filter(exam => exam.category === "Specialized").map((exam) => (
                    // Same card component as above
                    <motion.div
                      key={exam.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className={`overflow-hidden transition-all duration-300 hover:shadow-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 h-full flex flex-col ${
                        exam.popular ? 'relative border-blue-200 dark:border-blue-700' : ''
                      }`}>
                        {exam.popular && (
                          <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 text-sm font-bold rounded-bl-lg z-10">
                            Popular
                          </div>
                        )}
                        
                        <div className="relative h-48">
                          <img 
                            src={exam.image} 
                            alt={exam.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className={`${generateBadgeColor(exam.category)} px-2 py-1`}>
                              {exam.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl text-gray-900 dark:text-white">{exam.title}</CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-400">
                            {exam.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="flex-grow">
                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <Clock className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              {exam.duration} minutes
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <FileText className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              {exam.questions} questions
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <Calendar className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              {exam.validity} validity
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <CreditCard className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              ₹{exam.price}
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">What's included:</h4>
                            <ul className="space-y-1">
                              {exam.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 text-sm">
                                  <CheckCircle className="h-4 w-4 mr-2 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="bg-gray-50 dark:bg-gray-800">
                          <Button 
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                            onClick={() => handleEnroll(exam.id)}
                          >
                            Enroll Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="advanced" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {nismExams.filter(exam => exam.category === "Advanced").map((exam) => (
                    // Same card component as above
                    <motion.div
                      key={exam.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className={`overflow-hidden transition-all duration-300 hover:shadow-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800 h-full flex flex-col ${
                        exam.popular ? 'relative border-blue-200 dark:border-blue-700' : ''
                      }`}>
                        {exam.popular && (
                          <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 text-sm font-bold rounded-bl-lg z-10">
                            Popular
                          </div>
                        )}
                        
                        <div className="relative h-48">
                          <img 
                            src={exam.image} 
                            alt={exam.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className={`${generateBadgeColor(exam.category)} px-2 py-1`}>
                              {exam.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl text-gray-900 dark:text-white">{exam.title}</CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-400">
                            {exam.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="flex-grow">
                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <Clock className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              {exam.duration} minutes
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <FileText className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              {exam.questions} questions
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <Calendar className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              {exam.validity} validity
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-300">
                              <CreditCard className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                              ₹{exam.price}
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">What's included:</h4>
                            <ul className="space-y-1">
                              {exam.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 text-sm">
                                  <CheckCircle className="h-4 w-4 mr-2 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="bg-gray-50 dark:bg-gray-800">
                          <Button 
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                            onClick={() => handleEnroll(exam.id)}
                          >
                            Enroll Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Our NISM Mock Tests
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Designed by industry experts to help you pass your certification exam with confidence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Exam-focused Content</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our tests are meticulously designed to match the actual NISM exam pattern, covering all the important topics and concepts.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                  <BarChart2 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Detailed Analytics</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Get comprehensive performance insights that highlight your strengths and areas for improvement, helping you focus your study efforts.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Performance Tracking</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Monitor your progress over time with our intuitive performance tracking tools, and see your improvement as you practice.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Ace Your NISM Certification?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of successful candidates who passed their NISM exams with our comprehensive mock tests
            </p>
            
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:text-blue-800 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('exams-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NismExams;
