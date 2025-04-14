
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  GraduationCap,
  CheckCircle,
  Award,
  BookOpen,
  Clock,
  PenSquare,
  BarChart4,
  Brain,
  Target,
  TrendingUp,
  Layers,
  Sparkles,
  Star,
  Trophy,
  Users,
  BookCheck,
  Calculator,
  IndianRupee,
  CreditCard,
  Calendar
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import DrifterStars from "@/components/ui/DrifterStars";

const NismCertification = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    document.title = "NISM Certification - myturnindia";
  }, []);

  const examTypes = [
    {
      id: "chapter-wise",
      title: "Chapter-wise Practice",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      description: "Master individual chapters with focused practice tests",
      features: [
        "100+ questions per chapter",
        "Clear explanations for every question",
        "Track your progress by topic",
        "Focus on your weak areas"
      ],
      bgClass: "from-purple-600 to-purple-800",
      price: 499,
      gst: "18%",
      examId: "nism-chapter-practice",
      validity: "10 days"
    },
    {
      id: "full-mock",
      title: "Full Mock Tests",
      icon: <Brain className="h-6 w-6 text-white" />,
      description: "Simulate the actual NISM exam experience",
      features: [
        "4 complete mock tests",
        "Exam-like interface and timer",
        "Detailed performance analysis",
        "Identify strengths and weaknesses"
      ],
      bgClass: "from-purple-700 to-purple-900",
      price: 599,
      gst: "18%",
      examId: "nism-full-mock",
      validity: "10 days"
    }
  ];
  
  const comboPackage = {
    id: "combo",
    title: "NISM Combo Package",
    description: "Complete NISM preparation package including all mock tests",
    features: [
      "Chapter-wise Practice",
      "Full Mock Tests (4)",
      "10 days validity for all tests",
      "Performance analytics dashboard"
    ],
    price: 799,
    gst: "18%",
    examId: "nism-combo-package",
    validity: "10 days"
  };
  
  const handleExamTypeClick = (examType) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to access this exam package",
        variant: "destructive"
      });
      navigate("/login");
      return;
    }
    
    navigate(`/payment/${examType.examId}`);
  };

  const nismModules = [
    {
      id: "va",
      title: "NISM-Series-VA: Mutual Fund Distributors",
      icon: <CreditCard className="h-5 w-5 text-white" />,
      description: "Essential certification for mutual fund distribution professionals",
      topics: ["Mutual Fund Basics", "Fund Structure", "Legal & Regulatory", "Investment Products", "Risk & Return"],
      students: "15,000+",
      successRate: "90%",
      color: "from-purple-600 to-purple-700"
    },
    {
      id: "xb",
      title: "NISM-Series-XB: Investment Adviser (Level 2)",
      icon: <Target className="h-5 w-5 text-white" />,
      description: "Advanced certification for investment advisory professionals",
      topics: ["Portfolio Management", "Risk Assessment", "Tax Planning", "Retirement Planning", "Estate Planning"],
      students: "8,000+",
      successRate: "85%",
      color: "from-purple-700 to-purple-800"
    },
    {
      id: "viii",
      title: "NISM-Series-VIII: Equity Derivatives",
      icon: <BarChart4 className="h-5 w-5 text-white" />,
      description: "Comprehensive certification for derivatives market professionals",
      topics: ["Options", "Futures", "Trading Strategies", "Risk Management", "Market Mechanisms"],
      students: "12,000+",
      successRate: "82%",
      color: "from-purple-800 to-purple-900"
    },
    {
      id: "xv",
      title: "NISM-Series-XV: Research Analyst",
      icon: <PenSquare className="h-5 w-5 text-white" />,
      description: "Essential certification for research analysis professionals",
      topics: ["Financial Analysis", "Equity Research", "Valuation Methods", "Industry Analysis", "Report Writing"],
      students: "10,000+",
      successRate: "88%",
      color: "from-purple-700 to-purple-800"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <DrifterStars starCount={100} starColor="#9b87f5" speed={0.3} className="opacity-40" />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-white pt-32 pb-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-purple-300/20 to-purple-400/20 blur-3xl"></div>
          <div className="absolute bottom-10 left-[5%] w-72 h-72 rounded-full bg-gradient-to-r from-purple-200/20 to-purple-300/20 blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-sm font-medium bg-purple-100/80 text-purple-700 dark:bg-purple-900/80 dark:text-purple-300 rounded-full backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50">
              <Award className="h-4 w-4" />
              <span>NISM Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold font-work-sans mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 dark:from-purple-400 dark:to-purple-600 leading-tight">
              Master NISM Certification<br className="hidden md:block" /> With Expert Preparation
            </h1>
            
            <p className="text-lg md:text-xl text-purple-900/80 dark:text-purple-300/80 max-w-3xl mx-auto mb-10 font-roboto">
              Comprehensive mock tests and practice resources designed by industry experts to ensure your NISM certification success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white shadow-lg shadow-purple-600/20 font-medium rounded-xl px-8">
                <Link to="/register" className="flex items-center gap-2">
                  Start Preparing Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-gray-700 hover:border-purple-300 dark:hover:border-purple-600 rounded-xl px-8">
                <a href="#exams-section">View Packages</a>
              </Button>
            </div>
            
            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {[
                { value: "20K+", label: "Students Certified", icon: <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" /> },
                { value: "90%", label: "Pass Rate", icon: <Trophy className="h-5 w-5 text-purple-600 dark:text-purple-400" /> },
                { value: "5K+", label: "Practice Questions", icon: <BookCheck className="h-5 w-5 text-purple-600 dark:text-purple-400" /> },
                { value: "10+", label: "Years Experience", icon: <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" /> }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-purple-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/50 mb-2">
                    {stat.icon}
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-purple-900 dark:text-purple-300">{stat.value}</span>
                  <span className="text-sm text-purple-700 dark:text-purple-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What is NISM Section */}
        <div className="py-24 px-4 bg-white dark:bg-gray-900 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 dark:from-gray-800/50 to-transparent h-40"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium bg-purple-100/80 dark:bg-purple-900/80 text-purple-700 dark:text-purple-300 rounded-full">
                  <BookOpen className="h-4 w-4" />
                  <span>About NISM</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold font-work-sans mb-4 text-purple-900 dark:text-purple-300">What is NISM?</h2>
                <p className="text-purple-800/80 dark:text-purple-300/80 mb-4 text-lg font-roboto">
                  The National Institute of Securities Markets (NISM) is a public trust established by the Securities and Exchange Board of India (SEBI) to enhance the quality standards and strengthen the securities markets through certification programs.
                </p>
                <p className="text-purple-800/80 dark:text-purple-300/80 mb-6 text-lg font-roboto">
                  NISM certifications are mandatory for professionals working in various segments of the Indian securities markets, ensuring they meet the minimum knowledge and skill requirements set by SEBI.
                </p>
                <div className="flex items-center text-purple-700 dark:text-purple-400 font-medium">
                  <Link to="/nism-details" className="group flex items-center text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
                    Learn more about NISM examination
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-300 dark:from-purple-700 to-purple-400 dark:to-purple-600 opacity-20 blur"></div>
                <div className="relative bg-gradient-to-br from-purple-50 dark:from-gray-800 to-white dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-purple-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold font-work-sans mb-6 text-purple-900 dark:text-purple-300">Why NISM Certification Matters</h3>
                  <ul className="space-y-5">
                    {[
                      { title: "Regulatory Compliance", desc: "Mandatory for securities market professionals", icon: <CheckCircle /> },
                      { title: "Career Advancement", desc: "Essential for growth in financial sector", icon: <TrendingUp /> },
                      { title: "Industry Recognition", desc: "Demonstrates professional competence", icon: <Award /> },
                      { title: "Knowledge Enhancement", desc: "Ensures up-to-date market knowledge", icon: <BookCheck /> }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-xl mr-3 mt-1 flex-shrink-0">
                          {React.cloneElement(item.icon, { className: "h-5 w-5 text-purple-700 dark:text-purple-400" })}
                        </div>
                        <div>
                          <span className="block font-semibold font-work-sans text-purple-900 dark:text-purple-300">{item.title}</span>
                          <span className="text-purple-700 dark:text-purple-400 text-sm font-roboto">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Package Section */}
        <div id="exams-section" className="py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-purple-300/20 dark:from-purple-700/20 to-purple-400/20 dark:to-purple-600/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/20 dark:from-purple-700/20 to-purple-500/20 dark:to-purple-600/20 blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium bg-purple-100/80 dark:bg-purple-900/80 text-purple-700 dark:text-purple-300 rounded-full backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                <span>Our Packages</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-work-sans mb-4 text-purple-900 dark:text-purple-300">
                NISM Certification Packages
              </h2>
              <p className="text-lg text-purple-800/80 dark:text-purple-300/80 max-w-3xl mx-auto font-roboto">
                Structured learning and practice methodology designed by industry experts to maximize your chance of success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {examTypes.map((type, index) => (
                <Card 
                  key={index} 
                  className={`text-white overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 bg-gradient-to-br ${type.bgClass} border-none rounded-2xl cursor-pointer dark:bg-opacity-90`}
                  onClick={() => handleExamTypeClick(type)}
                >
                  <div className="absolute top-0 right-0 opacity-10">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="60" cy="60" r="60" fill="white"/>
                    </svg>
                  </div>
                  
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm">
                      {type.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold font-work-sans">{type.title}</CardTitle>
                    <CardDescription className="text-purple-100">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm font-roboto">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 py-3 px-4 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-between">
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4 text-white mr-1" />
                        <span className="text-xl font-bold">{type.price}</span>
                        <span className="text-sm ml-1">+{type.gst} GST</span>
                      </div>
                      <div className="text-sm text-purple-100 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {type.validity} validity
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-white hover:bg-purple-50 text-purple-800 rounded-xl font-medium shadow-md">
                      Purchase Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* Combo Package Card */}
            <div className="mt-12">
              <Card className="overflow-hidden rounded-2xl border-2 border-purple-400 dark:border-purple-600 shadow-xl bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
                <div className="absolute top-5 right-5 bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                  Best Value
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold font-work-sans text-purple-900 dark:text-purple-300">{comboPackage.title}</CardTitle>
                      <CardDescription className="text-purple-700 dark:text-purple-400 mt-1">{comboPackage.description}</CardDescription>
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-900/50 p-4 rounded-xl flex items-center">
                      <div>
                        <div className="flex items-center">
                          <IndianRupee className="h-4 w-4 text-purple-700 dark:text-purple-400" />
                          <span className="text-2xl font-bold text-purple-900 dark:text-purple-300">{comboPackage.price}</span>
                          <span className="text-sm ml-1 text-purple-700 dark:text-purple-400">+{comboPackage.gst} GST</span>
                        </div>
                        <div className="text-xs text-purple-600 dark:text-purple-500 mt-1 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {comboPackage.validity} validity
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {comboPackage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center bg-purple-50 dark:bg-gray-800 p-3 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-purple-800 dark:text-purple-300 font-roboto">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-purple-600 dark:text-purple-400 text-sm mt-4 bg-purple-50 dark:bg-gray-800 p-3 rounded-lg">
                    <Star className="h-4 w-4 text-yellow-500 inline mr-2" />
                    Save ₹299 compared to purchasing individual packages!
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-xl py-6 text-lg font-medium shadow-lg"
                    onClick={() => handleExamTypeClick(comboPackage)}
                  >
                    Get Complete Package
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        {/* NISM Modules */}
        <div className="py-24 px-4 bg-white dark:bg-gray-900 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 dark:from-gray-800/50 to-transparent h-40"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium bg-purple-100/80 dark:bg-purple-900/80 text-purple-700 dark:text-purple-300 rounded-full backdrop-blur-sm">
                <Calculator className="h-4 w-4" />
                <span>NISM Modules</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-work-sans mb-4 text-purple-900 dark:text-purple-300">Popular NISM Certifications</h2>
              <p className="text-lg text-purple-800/80 dark:text-purple-300/80 max-w-3xl mx-auto mb-12 font-roboto">
                Comprehensive test series for all major NISM certification modules
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nismModules.map((module) => (
                <Card 
                  key={module.id} 
                  className="group overflow-hidden rounded-2xl border-purple-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800"
                >
                  <div className={`absolute right-0 top-0 h-20 w-20 bg-gradient-to-br ${module.color} rounded-bl-3xl opacity-90 transition-all group-hover:scale-110`}></div>
                  
                  <CardHeader className="pb-2 relative">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${module.color} flex items-center justify-center mb-4 text-white group-hover:scale-105 transition-all shadow-md`}>
                      {module.icon}
                    </div>
                    <CardTitle className="text-xl font-bold font-work-sans text-purple-900 dark:text-purple-300">{module.title}</CardTitle>
                    <CardDescription className="text-purple-700 dark:text-purple-400 font-medium">{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {module.topics.map((topic, i) => (
                        <span key={i} className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm py-3 border-t border-purple-100 dark:border-gray-700">
                      <div className="text-purple-800 dark:text-purple-300">
                        <span className="font-medium">{module.students}</span> students enrolled
                      </div>
                      <div className="text-purple-800 dark:text-purple-300">
                        <span className="font-medium">{module.successRate}</span> success rate
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className={`w-full bg-gradient-to-r ${module.color} hover:opacity-90 mt-2 text-white rounded-xl shadow-md group-hover:shadow-lg transition-all`}>
                      <Link to="/dashboard" className="group flex items-center justify-center gap-2">
                        Start Practicing
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-purple-300/20 dark:from-purple-700/20 to-purple-400/20 dark:to-purple-600/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/20 dark:from-purple-700/20 to-purple-500/20 dark:to-purple-600/20 blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium bg-purple-100/80 dark:bg-purple-900/80 text-purple-700 dark:text-purple-300 rounded-full backdrop-blur-sm">
                <Star className="h-4 w-4" />
                <span>Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-work-sans mb-4 text-purple-900 dark:text-purple-300">Success Stories</h2>
              <p className="text-lg text-purple-800/80 dark:text-purple-300/80 max-w-3xl mx-auto font-roboto">
                Join thousands of students who passed their NISM exams with our preparation platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Sharma",
                  role: "NISM-VA Certified",
                  content: "I cleared my NISM-VA certification in the first attempt with 85% score thanks to the chapter-wise practice and mock tests. The detailed explanations were extremely helpful.",
                  image: "/placeholder.svg"
                },
                {
                  name: "Priya Patel",
                  role: "NISM-XB Certified",
                  content: "The combo package was worth every penny. The practice questions covered all important topics, and the mock tests simulated the actual exam perfectly. Highly recommended!",
                  image: "/placeholder.svg"
                },
                {
                  name: "Sunil Mehta",
                  role: "NISM-VIII Certified",
                  content: "After failing twice, I used myturnindia's practice tests and passed with flying colors. The performance analytics helped me identify and focus on my weak areas.",
                  image: "/placeholder.svg"
                }
              ].map((testimonial, idx) => (
                <Card key={idx} className="rounded-2xl shadow-lg border border-white/50 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-purple-900 dark:text-purple-300 mb-6 italic text-lg font-roboto">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-3">
                        <GraduationCap className="h-5 w-5 text-purple-700 dark:text-purple-400" />
                      </div>
                      <div>
                        <div className="font-bold text-purple-900 dark:text-purple-300 font-work-sans">{testimonial.name}</div>
                        <div className="text-sm text-purple-700 dark:text-purple-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 px-4 bg-gradient-to-r from-purple-700 to-purple-800 dark:from-purple-800 dark:to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-3xl font-extrabold font-work-sans mb-4 text-white">Get NISM Ready with myturnindia</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100 font-roboto">
              Join thousands of successful professionals who secured their NISM certifications with our preparation platform
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-purple-50 gap-2 shadow-lg rounded-xl px-8 font-medium">
                <Link to="/register" className="flex items-center gap-2">
                  Get Started Today <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 shadow-sm rounded-xl px-8 font-medium">
                <a href="#exams-section">View Pricing Plans</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NismCertification;
