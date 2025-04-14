
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Brain, 
  CreditCard, 
  Calculator, 
  ChevronRight, 
  Clock, 
  Target, 
  BarChart4,
  ArrowRight,
  CircleDot,
  CheckCircle,
  PenSquare,
  Users
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import DrifterStars from "@/components/ui/DrifterStars";

const MockTests = () => {
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    document.title = "Mock Tests - myturnindia";
  }, []);

  const examCategories = [
    {
      id: "nism",
      title: "NISM Certification",
      description: "Comprehensive mock tests for all NISM certification modules",
      icon: <CreditCard className="h-8 w-8 text-white" />,
      bgClass: "from-purple-600 to-purple-800",
      features: [
        "Chapter-wise practice tests",
        "Full-length mock exams",
        "Detailed performance analytics",
        "Expert explanations for every question"
      ],
      path: "/nism-certification",
      color: "purple"
    },
    {
      id: "gate",
      title: "GATE Exams",
      description: "Complete preparation for Graduate Aptitude Test in Engineering",
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      bgClass: "from-blue-600 to-blue-800",
      features: [
        "Subject-wise practice tests",
        "Previous year papers",
        "Full-length mock tests",
        "Personalized test analysis"
      ],
      path: "/gate-exams",
      color: "blue"
    }
  ];

  const popularExams = [
    {
      id: "nism-va",
      title: "NISM Series-VA: Mutual Fund Distributors",
      category: "NISM",
      icon: <CreditCard className="h-5 w-5 text-purple-700 dark:text-purple-400" />,
      path: "/nism-certification",
      color: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
    },
    {
      id: "gate-cse",
      title: "GATE: Computer Science & Engineering",
      category: "GATE",
      icon: <Brain className="h-5 w-5 text-blue-700 dark:text-blue-400" />,
      path: "/gate-exams",
      color: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
    },
    {
      id: "nism-xb",
      title: "NISM Series-XB: Investment Adviser (Level 2)",
      category: "NISM",
      icon: <PenSquare className="h-5 w-5 text-purple-700 dark:text-purple-400" />,
      path: "/nism-certification",
      color: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
    },
    {
      id: "gate-ece",
      title: "GATE: Electronics & Communication",
      category: "GATE",
      icon: <Target className="h-5 w-5 text-blue-700 dark:text-blue-400" />,
      path: "/gate-exams",
      color: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
    },
    {
      id: "nism-viii",
      title: "NISM Series-VIII: Equity Derivatives",
      category: "NISM",
      icon: <BarChart4 className="h-5 w-5 text-purple-700 dark:text-purple-400" />,
      path: "/nism-certification",
      color: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
    },
    {
      id: "gate-me",
      title: "GATE: Mechanical Engineering",
      category: "GATE",
      icon: <Calculator className="h-5 w-5 text-blue-700 dark:text-blue-400" />,
      path: "/gate-exams",
      color: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <DrifterStars starCount={100} starColor="#6366f1" speed={0.3} className="opacity-30" />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-sm font-medium bg-blue-100/80 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300 rounded-full">
              <BookOpen className="h-4 w-4" />
              <span>Mock Test Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold font-work-sans mb-6 text-gray-900 dark:text-white">
              Ace Your Exams with Our<br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"> Premium Mock Tests</span>
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10 font-roboto">
              Practice with our comprehensive mock test series designed by industry experts to boost your preparation
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {isAuthenticated ? (
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg rounded-xl px-8 font-medium">
                  <Link to="/dashboard" className="flex items-center gap-2">
                    Go to Dashboard <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg rounded-xl px-8 font-medium">
                  <Link to="/register" className="flex items-center gap-2">
                    Get Started Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              <Button asChild variant="outline" size="lg" className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-xl px-8">
                <a href="#exam-categories">View Mock Tests</a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {[
                { value: "50+", label: "Mock Tests", icon: <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" /> },
                { value: "10K+", label: "Questions", icon: <PenSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" /> },
                { value: "30K+", label: "Students", icon: <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" /> },
                { value: "90%", label: "Success Rate", icon: <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" /> }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center p-4 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-blue-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-2">
                    {stat.icon}
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
                  <span className="text-sm text-blue-700 dark:text-blue-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Exam Categories */}
        <section id="exam-categories" className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-work-sans text-gray-900 dark:text-white mb-4">Explore Mock Test Categories</h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-roboto">
                Choose from our comprehensive range of mock tests designed for different certification exams
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {examCategories.map((category) => (
                <Card 
                  key={category.id}
                  className={`overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${category.bgClass} text-white rounded-2xl border-0`}
                >
                  <CardHeader>
                    <div className="h-16 w-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                      {category.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold font-work-sans">{category.title}</CardTitle>
                    <CardDescription className="text-white/80">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CircleDot className="h-5 w-5 mr-3 mt-0.5 text-white/70 flex-shrink-0" />
                          <span className="font-roboto">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-medium shadow-md">
                      <Link to={category.path} className="flex items-center justify-center gap-2">
                        View {category.title} Tests
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Tests */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-work-sans text-gray-900 dark:text-white mb-4">Popular Mock Tests</h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-roboto">
                Discover our most sought-after mock tests for various certification exams
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularExams.map((exam) => (
                <Link 
                  key={exam.id}
                  to={exam.path}
                  className="group block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-full ${exam.color} flex items-center justify-center mr-3`}>
                      {exam.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{exam.category}</div>
                      <div className="font-semibold text-gray-900 dark:text-white font-work-sans">{exam.title}</div>
                    </div>
                    <div className="text-gray-400 dark:text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>120 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span>100 questions</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="rounded-full px-8 py-6 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                <Link to="/dashboard" className="flex items-center gap-2">
                  View All Mock Tests <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-work-sans text-gray-900 dark:text-white mb-4">Why Choose Our Mock Tests</h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-roboto">
                Designed by industry experts to help you pass your exams with confidence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
                  title: "Comprehensive Coverage",
                  description: "Our mock tests cover all important topics and concepts from the latest exam patterns and syllabus."
                },
                {
                  icon: <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
                  title: "Realistic Experience",
                  description: "Experience exam-like environment with similar question types, difficulty levels, and time constraints."
                },
                {
                  icon: <BarChart4 className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
                  title: "Detailed Analytics",
                  description: "Get in-depth performance reports highlighting your strengths and areas for improvement."
                },
                {
                  icon: <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
                  title: "Time Management",
                  description: "Learn to manage your time effectively during the exam with our timed mock tests."
                },
                {
                  icon: <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
                  title: "Targeted Practice",
                  description: "Focus on specific topics or sections with our chapter-wise and subject-wise tests."
                },
                {
                  icon: <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
                  title: "Expert Solutions",
                  description: "Access detailed explanations and solutions prepared by subject matter experts."
                }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold font-work-sans text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-roboto">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-work-sans mb-6">Ready to Start Your Exam Preparation?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto font-roboto">
              Join thousands of successful candidates who passed their exams with our mock test platform
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-700 hover:text-blue-800 hover:bg-gray-50 shadow-lg rounded-xl px-8 font-medium">
                <Link to="/register" className="flex items-center gap-2">
                  Sign Up Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 shadow-sm rounded-xl px-8 font-medium">
                <Link to="/login">Login</Link>
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
