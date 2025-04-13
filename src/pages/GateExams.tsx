
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
  Zap,
  Target,
  TrendingUp,
  Layers,
  Sparkles,
  Star,
  Trophy,
  Users,
  BookCheck,
  Calculator,
  IndianRupee
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";

const GateExams = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    document.title = "GATE Exams - myturnindia";
  }, []);

  const gateCourses = [
    {
      id: "cse",
      title: "Computer Science & Engineering",
      icon: <Brain className="h-5 w-5 text-white" />,
      description: "Core CS concepts, data structures, algorithms, OS, DBMS, and more",
      topics: ["Data Structures", "Algorithms", "OS", "DBMS", "TOC", "CN", "COA"],
      students: "25,000+",
      successRate: "85%",
      color: "from-blue-600 to-blue-700"
    },
    {
      id: "ece",
      title: "Electronics & Communication",
      icon: <Zap className="h-5 w-5 text-white" />,
      description: "Analog & Digital circuits, Signals & Systems, Communications, and more",
      topics: ["Networks", "Signals & Systems", "Analog Circuits", "Digital Circuits", "EMT"],
      students: "18,000+",
      successRate: "82%",
      color: "from-blue-700 to-blue-800"
    },
    {
      id: "ee",
      title: "Electrical Engineering",
      icon: <Zap className="h-5 w-5 text-white" />,
      description: "Power systems, Control systems, Electrical machines, and more",
      topics: ["Power Systems", "Control Systems", "Electrical Machines", "Power Electronics"],
      students: "15,000+",
      successRate: "80%",
      color: "from-blue-800 to-blue-900"
    },
    {
      id: "me",
      title: "Mechanical Engineering",
      icon: <Target className="h-5 w-5 text-white" />,
      description: "Thermodynamics, Fluid Mechanics, Manufacturing, and more",
      topics: ["Thermodynamics", "Fluid Mechanics", "Manufacturing", "Industrial Engineering"],
      students: "20,000+",
      successRate: "78%",
      color: "from-blue-700 to-blue-800"
    }
  ];

  const examTypes = [
    {
      id: "subject",
      title: "Subject-wise Practice",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      description: "Master individual subjects with focused practice tests",
      features: [
        "100+ questions per subject",
        "Clear explanations for every question",
        "Track your progress by topic",
        "Focus on your weak areas"
      ],
      bgClass: "from-blue-600 to-blue-800",
      price: 299,
      gst: "18%",
      examId: "gate-subject-practice"
    },
    {
      id: "previous",
      title: "Previous Year Papers",
      icon: <Clock className="h-6 w-6 text-white" />,
      description: "Practice with actual questions from previous GATE exams",
      features: [
        "Last 10 years of GATE papers",
        "Detailed solutions and explanations",
        "Analysis of question patterns",
        "Topic-wise classification"
      ],
      bgClass: "from-blue-700 to-blue-900",
      price: 299,
      gst: "18%",
      examId: "gate-previous-papers"
    },
    {
      id: "full",
      title: "Full Mock Tests",
      icon: <Brain className="h-6 w-6 text-white" />,
      description: "Simulate the actual GATE exam experience",
      features: [
        "Exam-like interface and timer",
        "65 questions in 3 hours",
        "NAT and MCQ question types",
        "Detailed performance analysis"
      ],
      bgClass: "from-blue-800 to-blue-950",
      price: 599,
      gst: "18%",
      examId: "gate-full-mock"
    }
  ];
  
  const comboPackage = {
    id: "combo",
    title: "GATE Combo Package",
    description: "Complete GATE preparation package including all mock tests",
    features: [
      "Subject-wise Practice",
      "Previous Year Papers",
      "Full Mock Tests",
      "10 days validity for all tests"
    ],
    price: 899,
    gst: "18%",
    examId: "gate-combo-package"
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
              <GraduationCap className="h-4 w-4" />
              <span>GATE Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900 leading-tight">
              Unlock Your GATE Success<br className="hidden md:block" /> With Expert Preparation
            </h1>
            
            <p className="text-lg md:text-xl text-blue-900/80 max-w-3xl mx-auto mb-10">
              Comprehensive mock tests and practice resources designed by IIT alumni to maximize your GATE score
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white shadow-lg shadow-blue-600/20 font-medium rounded-xl px-8">
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
                { value: "30K+", label: "Students Enrolled", icon: <Users className="h-5 w-5 text-blue-600" /> },
                { value: "85%", label: "IIT Selection Rate", icon: <Trophy className="h-5 w-5 text-blue-600" /> },
                { value: "10K+", label: "Practice Questions", icon: <BookCheck className="h-5 w-5 text-blue-600" /> },
                { value: "15+", label: "Years Experience", icon: <Layers className="h-5 w-5 text-blue-600" /> }
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

        {/* What is GATE Section */}
        <div className="py-24 px-4 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent h-40"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100/80 text-blue-700 rounded-full">
                  <BookOpen className="h-4 w-4" />
                  <span>About GATE</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">What is GATE?</h2>
                <p className="text-blue-800/80 mb-4 text-lg">
                  The Graduate Aptitude Test in Engineering (GATE) is a prestigious national examination that tests the comprehensive understanding of various undergraduate subjects in engineering and science.
                </p>
                <p className="text-blue-800/80 mb-6 text-lg">
                  GATE score is used for admissions to postgraduate programs (ME, M.Tech, PhD) in Indian institutes like IITs, NITs, and IIITs. It's also recognized by many public sector undertakings (PSUs) for recruitment.
                </p>
                <div className="flex items-center text-blue-700 font-medium">
                  <Link to="/gate-details" className="group flex items-center text-blue-700 hover:text-blue-800 transition-colors">
                    Learn more about GATE examination
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-300 to-blue-400 opacity-20 blur"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <h3 className="text-xl font-bold mb-6 text-blue-900">Why GATE Certification Matters</h3>
                  <ul className="space-y-5">
                    {[
                      { title: "Gateway to IITs & NITs", desc: "Admission to prestigious institutions", icon: <GraduationCap /> },
                      { title: "PSU Recruitment", desc: "Essential for public sector jobs", icon: <TrendingUp /> },
                      { title: "Research Opportunities", desc: "Access to scholarships and stipends", icon: <Award /> },
                      { title: "Global Recognition", desc: "Acknowledged for academic excellence", icon: <Trophy /> }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-xl mr-3 mt-1 flex-shrink-0">
                          {React.cloneElement(item.icon, { className: "h-5 w-5 text-blue-700" })}
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
                Our Approach to GATE Preparation
              </h2>
              <p className="text-lg text-blue-800/80 max-w-3xl mx-auto">
                Structured learning and practice methodology designed by IIT alumni to maximize your GATE score
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {examTypes.map((type, index) => (
                <Card 
                  key={index} 
                  className={`text-white overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 bg-gradient-to-br ${type.bgClass} border-none rounded-2xl cursor-pointer`}
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
                    <CardTitle className="text-2xl font-bold">{type.title}</CardTitle>
                    <CardDescription className="text-blue-100">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 py-3 px-4 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-between">
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4 text-white mr-1" />
                        <span className="text-xl font-bold">{type.price}</span>
                        <span className="text-sm ml-1">+{type.gst} GST</span>
                      </div>
                      <div className="text-sm text-blue-100">
                        10 days validity
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-white hover:bg-blue-50 text-blue-800 rounded-xl font-medium shadow-md">
                      Purchase Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* Combo Package Card */}
            <div className="mt-12">
              <Card className="overflow-hidden rounded-2xl border-2 border-blue-400 shadow-xl bg-gradient-to-br from-blue-50 to-white">
                <div className="absolute top-5 right-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                  Best Value
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-blue-900">{comboPackage.title}</CardTitle>
                      <CardDescription className="text-blue-700 mt-1">{comboPackage.description}</CardDescription>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-xl flex items-center">
                      <div>
                        <div className="flex items-center">
                          <IndianRupee className="h-4 w-4 text-blue-700" />
                          <span className="text-2xl font-bold text-blue-900">{comboPackage.price}</span>
                          <span className="text-sm ml-1 text-blue-700">+{comboPackage.gst} GST</span>
                        </div>
                        <div className="text-xs text-blue-600 mt-1">10 days validity</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {comboPackage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center bg-blue-50 p-3 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-blue-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-blue-600 text-sm mt-4 bg-blue-50 p-3 rounded-lg">
                    <Star className="h-4 w-4 text-yellow-500 inline mr-2" />
                    Save ₹298 compared to purchasing individual packages!
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-xl py-6 text-lg font-medium shadow-lg"
                    onClick={() => handleExamTypeClick(comboPackage)}
                  >
                    Get Complete Package
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        {/* GATE Courses */}
        <div className="py-24 px-4 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent h-40"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100/80 text-blue-700 rounded-full backdrop-blur-sm">
                <Calculator className="h-4 w-4" />
                <span>Premium Courses</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Popular GATE Courses</h2>
              <p className="text-lg text-blue-800/80 max-w-3xl mx-auto mb-12">
                Comprehensive test series for all major GATE disciplines
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gateCourses.map((course) => (
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
                Join thousands of students who improved their GATE scores with our preparation platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ankit Sharma",
                  role: "GATE CSE AIR 856",
                  content: "I improved my GATE rank from 15,000 to 856 in just 3 months using the full mock tests. The detailed performance analysis was a game-changer.",
                  image: "/placeholder.svg"
                },
                {
                  name: "Meera Patel",
                  role: "GATE ECE AIR 450",
                  content: "The subject-wise practice helped me identify my weak areas in Signals and Systems. Got into an IIT with a GATE score of 720.",
                  image: "/placeholder.svg"
                },
                {
                  name: "Karthik Ramesh",
                  role: "GATE ME AIR 305",
                  content: "The previous year papers with detailed solutions helped me understand the exam pattern. Secured admission to NIT Trichy with 99.2 percentile.",
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
                        <GraduationCap className="h-5 w-5 text-blue-700" />
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
        <div className="py-24 px-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-white">Get GATE Ready with myturnindia</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Join thousands of successful students who secured their dream institutions with our GATE preparation platform
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
      </main>
      <Footer />
    </div>
  );
};

export default GateExams;
