import React from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Award,
  Users,
  Layers,
  Sparkles,
  GraduationCap,
  BarChart4,
  Star,
  BookCheck,
  Calculator,
  Trophy
} from "lucide-react";

const NismExams = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "NISM Certifications - myturnindia";
  }, []);

  const nismCourses = [
    {
      id: "series-va",
      title: "Series V-A: Mutual Fund Distributors",
      icon: <BookOpen className="h-5 w-5 text-white" />,
      description: "Comprehensive test series for mutual fund distributors",
      topics: ["Mutual Fund Basics", "Regulations", "Investment Analysis", "Client Management"],
      students: "15,000+",
      successRate: "88%",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "series-viii",
      title: "Series VIII: Equity Derivatives",
      icon: <Calculator className="h-5 w-5 text-white" />,
      description: "Practice tests for equity derivatives certification",
      topics: ["Derivatives Concepts", "Options & Futures", "Trading Strategies", "Risk Management"],
      students: "12,000+",
      successRate: "85%",
      color: "from-blue-600 to-blue-700"
    },
    {
      id: "series-x",
      title: "Series X-A: Investment Adviser",
      icon: <BookCheck className="h-5 w-5 text-white" />,
      description: "Preparation for investment adviser certification",
      topics: ["Financial Planning", "Asset Allocation", "Portfolio Management", "Regulations"],
      students: "10,000+",
      successRate: "82%",
      color: "from-blue-700 to-blue-800"
    },
    {
      id: "series-xii",
      title: "Series XII: Securities Markets Foundation",
      icon: <BookOpen className="h-5 w-5 text-white" />,
      description: "Foundational knowledge of securities markets",
      topics: ["Market Structure", "Securities Types", "Trading Mechanisms", "Regulatory Framework"],
      students: "18,000+",
      successRate: "90%",
      color: "from-blue-800 to-blue-900"
    }
  ];

  const examFeatures = [
    {
      title: "Chapter-wise Tests",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      description: "Focus on specific chapters to master individual concepts",
      features: [
        "10 questions per chapter",
        "12-minute time limit",
        "Instant feedback and explanations",
        "Track progress by chapter"
      ],
      bgClass: "from-blue-500 to-blue-600"
    },
    {
      title: "Full Mock Tests",
      icon: <Clock className="h-6 w-6 text-white" />,
      description: "Simulate the actual NISM exam experience",
      features: [
        "100 questions in 2 hours",
        "Exam-like interface",
        "Performance analysis",
        "Passing score indication"
      ],
      bgClass: "from-blue-600 to-blue-700"
    },
    {
      title: "Practice Question Bank",
      icon: <Award className="h-6 w-6 text-white" />,
      description: "Thousands of practice questions with detailed explanations",
      features: [
        "5,000+ unique questions",
        "Difficulty levels",
        "Bookmark important questions",
        "Review incorrect answers"
      ],
      bgClass: "from-blue-700 to-blue-800"
    }
  ];

  const examPackages = [
    {
      id: "chapter-wise",
      title: "NISM Chapter-wise Tests",
      description: "Practice with comprehensive chapter-wise tests covering all NISM modules",
      features: [
        "In-depth coverage of all chapters",
        "Detailed explanations for every question",
        "Track progress by chapter",
        "Focus on specific areas"
      ],
      price: 499,
      gst: "18%",
      validity: "10 days",
      examId: "nism-chapter-wise"
    },
    {
      id: "full-mock",
      title: "NISM Full Mock Tests",
      description: "4 complete mock tests simulating the actual NISM certification experience",
      features: [
        "4 full-length mock tests",
        "Real exam-like interface",
        "Time management practice",
        "Comprehensive performance analysis"
      ],
      price: 599,
      gst: "18%",
      validity: "10 days",
      examId: "nism-full-mock"
    },
    {
      id: "combo",
      title: "NISM Combo Package",
      description: "Complete preparation package including both chapter-wise and full mock tests",
      features: [
        "All chapter-wise tests",
        "4 full-length mock tests",
        "Comprehensive question bank",
        "Best value package"
      ],
      price: 799,
      gst: "18%",
      validity: "10 days",
      examId: "nism-combo-package",
      isBest: true
    }
  ];

  const handlePackageClick = (pkg: any) => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to access this exam package",
        variant: "destructive"
      });
      navigate("/login");
      return;
    }
    
    navigate(`/payment/${pkg.examId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 pt-32 pb-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-blue-300/20 to-blue-400/20 blur-3xl"></div>
          <div className="absolute bottom-10 left-[5%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-300/20 blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-sm font-medium bg-blue-100/80 text-blue-700 rounded-full backdrop-blur-sm border border-blue-200/50">
              <Award className="h-4 w-4" />
              <span>NISM Certification</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900 leading-tight">
              Master NISM Certifications<br className="hidden md:block" /> With Expert Guidance
            </h1>
            
            <p className="text-lg md:text-xl text-blue-900/80 max-w-3xl mx-auto mb-10">
              Comprehensive practice tests designed by industry experts to help you excel in NISM certification exams
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/20 font-medium rounded-xl px-8">
                <Link to="/register" className="flex items-center gap-2">
                  Start Preparing Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/70 backdrop-blur-sm border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 rounded-xl px-8">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
            
            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {[
                { value: "25K+", label: "Certified Professionals", icon: <Users className="h-5 w-5 text-blue-500" /> },
                { value: "92%", label: "First Attempt Success", icon: <Trophy className="h-5 w-5 text-blue-500" /> },
                { value: "8,500+", label: "Practice Questions", icon: <BookCheck className="h-5 w-5 text-blue-500" /> },
                { value: "12+", label: "NISM Modules", icon: <Layers className="h-5 w-5 text-blue-500" /> }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-blue-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 mb-2">
                    {stat.icon}
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-blue-900">{stat.value}</span>
                  <span className="text-sm text-blue-700">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What is NISM Section */}
        <div className="py-24 px-4 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent h-40"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100/80 text-blue-700 rounded-full">
                  <GraduationCap className="h-4 w-4" />
                  <span>About NISM</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">What is NISM?</h2>
                <p className="text-blue-800/80 mb-4 text-lg">
                  The National Institute of Securities Markets (NISM) is a public trust established by the Securities and Exchange Board of India (SEBI) to enhance the quality of securities markets through educational initiatives.
                </p>
                <p className="text-blue-800/80 mb-6 text-lg">
                  NISM certifications are mandatory for various professionals working in the securities market, including mutual fund distributors, investment advisers, and securities operations professionals.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <Link to="/nism-details" className="group flex items-center text-blue-700 hover:text-blue-800 transition-colors">
                    Learn more about NISM certifications
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-200 to-blue-300 opacity-20 blur"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <h3 className="text-xl font-bold mb-6 text-blue-800">Why NISM Certification Matters</h3>
                  <ul className="space-y-5">
                    {[
                      { title: "Mandatory Requirement", desc: "Required for securities market professionals", icon: <Award /> },
                      { title: "Enhanced Credibility", desc: "Builds trust with clients and employers", icon: <Users /> },
                      { title: "Regulatory Knowledge", desc: "Demonstrates understanding of market regulations", icon: <BookOpen /> },
                      { title: "Career Advancement", desc: "Opens doors to better opportunities", icon: <Trophy /> }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-xl mr-3 mt-1 flex-shrink-0">
                          {React.cloneElement(item.icon, { className: "h-5 w-5 text-blue-600" })}
                        </div>
                        <div>
                          <span className="block font-semibold text-blue-900">{item.title}</span>
                          <span className="text-blue-700 text-sm">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-300/20 to-blue-400/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-500/20 blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100/80 text-blue-700 rounded-full backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                <span>Our Methodology</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                Our Approach to NISM Preparation
              </h2>
              <p className="text-lg text-blue-800/80 max-w-3xl mx-auto">
                Structured learning and practice methodology to help you clear NISM certifications with confidence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {examFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`text-white overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 bg-gradient-to-br ${feature.bgClass} border-none rounded-2xl`}
                >
                  <div className="absolute top-0 right-0 opacity-10">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="60" cy="60" r="60" fill="white"/>
                    </svg>
                  </div>
                  
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                    <CardDescription className="text-blue-100">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-white text-blue-700 hover:bg-blue-50 apple-button rounded-xl font-medium shadow-md">
                      <Link to="/dashboard">Explore Tests</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* NISM Courses */}
        <div className="py-24 px-4 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent h-40"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100/80 text-blue-700 rounded-full backdrop-blur-sm">
                <BookCheck className="h-4 w-4" />
                <span>Premium Courses</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Popular NISM Courses</h2>
              <p className="text-lg text-blue-800/80 max-w-3xl mx-auto mb-12">
                Comprehensive test series for all major NISM certifications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nismCourses.map((course) => (
                <Card 
                  key={course.id} 
                  className="group overflow-hidden rounded-2xl border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50"
                >
                  <div className={`absolute right-0 top-0 h-20 w-20 bg-gradient-to-br ${course.color} rounded-bl-3xl opacity-90 transition-all group-hover:scale-110`}></div>
                  
                  <CardHeader className="pb-2 relative">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center mb-4 text-white group-hover:scale-105 transition-all shadow-md`}>
                      {course.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-blue-900">{course.title}</CardTitle>
                    <CardDescription className="text-blue-700 font-medium">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.topics.map((topic, i) => (
                        <span key={i} className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm py-3 border-t border-blue-100">
                      <div className="text-blue-800">
                        <span className="font-medium">{course.students}</span> students enrolled
                      </div>
                      <div className="text-blue-800">
                        <span className="font-medium">{course.successRate}</span> success rate
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 mt-2 text-white rounded-xl shadow-md group-hover:shadow-lg transition-all`}>
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
        <div className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-300/20 to-blue-400/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-500/20 blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100/80 text-blue-700 rounded-full backdrop-blur-sm">
                <Star className="h-4 w-4" />
                <span>Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Success Stories</h2>
              <p className="text-lg text-blue-800/80 max-w-3xl mx-auto">
                Join thousands of students who cleared their NISM certifications with our practice tests
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rahul Mehta",
                  role: "NISM Series V-A Certified",
                  content: "The chapter-wise tests helped me understand complex concepts in small chunks. Cleared my certification in the first attempt!",
                  image: "/placeholder.svg"
                },
                {
                  name: "Priya Desai",
                  role: "NISM Series VIII Certified",
                  content: "The practice question bank was extensive and covered all topics. The detailed explanations helped me understand the concepts thoroughly.",
                  image: "/placeholder.svg"
                },
                {
                  name: "Amit Kumar",
                  role: "NISM Series X-A Certified",
                  content: "The full mock tests simulated the actual exam environment perfectly. I was well-prepared and confident on the exam day.",
                  image: "/placeholder.svg"
                }
              ].map((testimonial, idx) => (
                <Card key={idx} className="rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        {"★★★★★".split("").map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-blue-900 mb-6 italic text-lg">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-blue-900">{testimonial.name}</div>
                        <div className="text-sm text-blue-700">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-white">Get NISM Ready with myturnindia</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Join thousands of successful students who aced their NISM certification with our comprehensive preparation platform
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 gap-2 shadow-lg rounded-xl px-8 font-medium">
                <Link to="/register" className="flex items-center gap-2">
                  Get Started Today <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 shadow-sm rounded-xl px-8 font-medium">
                <Link to="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your NISM Exam Package
              </h2>
              <p className="text-gray-600">
                Select the package that best fits your preparation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {examPackages.map((pkg) => (
                <Card 
                  key={pkg.id} 
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${pkg.isBest ? 'border-blue-400 shadow-lg' : 'border-gray-200'}`}
                >
                  {pkg.isBest && (
                    <div className="absolute top-5 right-5 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Best Value
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{pkg.title}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-900">₹{pkg.price}</div>
                      <div className="text-sm text-gray-500">+{pkg.gst} GST • {pkg.validity} validity</div>
                    </div>
                    
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className={`w-full ${pkg.isBest ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                      onClick={() => handlePackageClick(pkg)}
                    >
                      Purchase Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NismExams;
