
import { useEffect } from "react";
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
  Layers
} from "lucide-react";

const GateExams = () => {
  useEffect(() => {
    document.title = "GATE Exams - myturnindia";
  }, []);

  const gateCourses = [
    {
      id: "cse",
      title: "Computer Science & Engineering",
      icon: <BookOpen className="h-5 w-5 text-white" />,
      description: "Core CS concepts, data structures, algorithms, OS, DBMS, and more",
      topics: ["Data Structures", "Algorithms", "OS", "DBMS", "TOC", "CN", "COA"],
      students: "25,000+",
      successRate: "85%"
    },
    {
      id: "ece",
      title: "Electronics & Communication",
      icon: <PenSquare className="h-5 w-5 text-white" />,
      description: "Analog & Digital circuits, Signals & Systems, Communications, and more",
      topics: ["Networks", "Signals & Systems", "Analog Circuits", "Digital Circuits", "EMT"],
      students: "18,000+",
      successRate: "82%"
    },
    {
      id: "ee",
      title: "Electrical Engineering",
      icon: <Zap className="h-5 w-5 text-white" />,
      description: "Power systems, Control systems, Electrical machines, and more",
      topics: ["Power Systems", "Control Systems", "Electrical Machines", "Power Electronics"],
      students: "15,000+",
      successRate: "80%"
    },
    {
      id: "me",
      title: "Mechanical Engineering",
      icon: <Target className="h-5 w-5 text-white" />,
      description: "Thermodynamics, Fluid Mechanics, Manufacturing, and more",
      topics: ["Thermodynamics", "Fluid Mechanics", "Manufacturing", "Industrial Engineering"],
      students: "20,000+",
      successRate: "78%"
    }
  ];

  const examTypes = [
    {
      title: "Subject-wise Practice",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      description: "Master individual subjects with focused practice tests",
      features: [
        "100+ questions per subject",
        "Clear explanations for every question",
        "Track your progress by topic",
        "Focus on your weak areas"
      ],
      bgClass: "from-blue-600 to-blue-800"
    },
    {
      title: "Previous Year Papers",
      icon: <Clock className="h-6 w-6 text-white" />,
      description: "Practice with actual questions from previous GATE exams",
      features: [
        "Last 10 years of GATE papers",
        "Detailed solutions and explanations",
        "Analysis of question patterns",
        "Topic-wise classification"
      ],
      bgClass: "from-blue-700 to-blue-900"
    },
    {
      title: "Full Mock Tests",
      icon: <Brain className="h-6 w-6 text-white" />,
      description: "Simulate the actual GATE exam experience",
      features: [
        "Exam-like interface and timer",
        "65 questions in 3 hours",
        "NAT and MCQ question types",
        "Detailed performance analysis"
      ],
      bgClass: "from-blue-800 to-blue-950"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block bg-white/90 backdrop-blur-md p-4 rounded-full mb-6 shadow-sm">
              <GraduationCap className="h-8 w-8 text-blue-700" />
            </div>
            <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
              GATE Preparation
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900">
              GATE Exam Preparation
            </h1>
            <p className="text-lg md:text-xl text-blue-900 max-w-3xl mx-auto mb-8">
              Comprehensive mock tests and practice resources to boost your GATE score
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 apple-button-primary bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 shadow-md">
                <Link to="/register">Start Practicing <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="apple-button-secondary border-blue-700 text-blue-700">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
            
            {/* Apple-style floating elements */}
            <div className="relative max-w-3xl mx-auto mt-12 hidden md:block">
              <div className="absolute -right-12 -top-32 w-48 h-48 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
              <div className="absolute -left-16 -bottom-8 w-32 h-32 rounded-full bg-blue-300 opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* What is GATE Section */}
        <div className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
                  About GATE
                </span>
                <h2 className="text-3xl font-semibold mb-4 apple-gradient-text">What is GATE?</h2>
                <p className="text-gray-700 mb-4">
                  The Graduate Aptitude Test in Engineering (GATE) is a prestigious national examination that tests the comprehensive understanding of various undergraduate subjects in engineering and science.
                </p>
                <p className="text-gray-700 mb-6">
                  GATE score is used for admissions to postgraduate programs (ME, M.Tech, PhD) in Indian institutes like IITs, NITs, and IIITs. It's also recognized by many public sector undertakings (PSUs) for recruitment.
                </p>
                <div className="flex items-center text-blue-700 font-medium">
                  <Link to="/gate-details" className="group apple-link flex items-center">
                    Learn more about GATE examination
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="apple-showcase-card relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-300 to-blue-400 opacity-20 blur"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-md border border-blue-100">
                  <h3 className="text-xl font-semibold mb-4 text-blue-900">Why GATE Certification Matters</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <GraduationCap className="h-5 w-5 text-blue-700" />
                      </div>
                      <span className="text-blue-900">Gateway to prestigious institutions like IITs and NITs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-blue-700" />
                      </div>
                      <span className="text-blue-900">Essential for PSU recruitments and higher-paying jobs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <Award className="h-5 w-5 text-blue-700" />
                      </div>
                      <span className="text-blue-900">Opportunity for research scholarships and stipends</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-blue-700" />
                      </div>
                      <span className="text-blue-900">Recognized globally for academic excellence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 apple-gradient-text">
                Our Approach to GATE Preparation
              </h2>
              <p className="text-lg text-blue-900 max-w-3xl mx-auto">
                Structured learning and practice methodology to maximize your GATE score
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {examTypes.map((type, index) => (
                <Card 
                  key={index} 
                  className={`text-white overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 bg-gradient-to-br ${type.bgClass} border-none`}
                >
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      {type.icon}
                    </div>
                    <CardTitle className="text-2xl">{type.title}</CardTitle>
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
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-white hover:bg-blue-50 text-blue-700 apple-button">
                      <Link to="/dashboard">Explore Tests</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* GATE Courses */}
        <div className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
                Our Offerings
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 apple-gradient-text">Popular GATE Courses</h2>
              <p className="text-lg text-blue-900 max-w-3xl mx-auto mb-12">
                Comprehensive test series for all major GATE disciplines
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gateCourses.map((course) => (
                <Card 
                  key={course.id} 
                  className="overflow-hidden transition-all duration-300 hover:shadow-xl border-blue-100 apple-card-hover bg-gradient-to-br from-blue-50/50 to-white group"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center text-white group-hover:from-blue-800 group-hover:to-blue-900 transition-all">
                        {course.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-800">{course.title}</CardTitle>
                        <CardDescription className="text-blue-700">{course.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.topics.map((topic, i) => (
                        <span key={i} className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-blue-800">
                        <span className="font-medium">{course.students}</span> students enrolled
                      </div>
                      <div className="text-blue-800">
                        <span className="font-medium">{course.successRate}</span> success rate
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 mt-2 text-white apple-button">
                      <Link to="/dashboard">Start Practicing</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 apple-gradient-text">Success Stories</h2>
              <p className="text-lg text-blue-900 max-w-3xl mx-auto">
                Join thousands of students who improved their GATE scores with our practice tests
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ankit Sharma",
                  role: "GATE CSE AIR 856",
                  content: "I improved my GATE rank from 15,000 to 856 in just 3 months using the full mock tests. The detailed performance analysis was a game-changer."
                },
                {
                  name: "Meera Patel",
                  role: "GATE ECE AIR 450",
                  content: "The subject-wise practice helped me identify my weak areas in Signals and Systems. Got into an IIT with a GATE score of 720."
                },
                {
                  name: "Karthik Ramesh",
                  role: "GATE ME AIR 305",
                  content: "The previous year papers with detailed solutions helped me understand the exam pattern. Secured admission to NIT Trichy with 99.2 percentile."
                }
              ].map((testimonial, idx) => (
                <Card key={idx} className="apple-blur-bg p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 apple-card-hover">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <p className="text-blue-900 mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-blue-700">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Get GATE Ready with myturnindia</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Join our comprehensive GATE preparation platform and boost your score
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 gap-2 shadow-md apple-button">
                <Link to="/register">Get Started Today <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 shadow-sm apple-button">
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
