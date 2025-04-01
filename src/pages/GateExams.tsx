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
  ChevronRight,
  Clock,
  PenSquare,
  BarChart4,
  Brain,
  Zap,
  Target,
  TrendingUp
} from "lucide-react";

const GateExams = () => {
  useEffect(() => {
    document.title = "GATE Exams - myturnindia";
  }, []);

  const gateCourses = [
    {
      id: "cse",
      title: "Computer Science & Engineering",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      description: "Core CS concepts, data structures, algorithms, OS, DBMS, and more",
      topics: ["Data Structures", "Algorithms", "OS", "DBMS", "TOC", "CN", "COA"],
      students: "25,000+",
      successRate: "85%"
    },
    {
      id: "ece",
      title: "Electronics & Communication",
      icon: <PenSquare className="h-5 w-5 text-primary" />,
      description: "Analog & Digital circuits, Signals & Systems, Communications, and more",
      topics: ["Networks", "Signals & Systems", "Analog Circuits", "Digital Circuits", "EMT"],
      students: "18,000+",
      successRate: "82%"
    },
    {
      id: "ee",
      title: "Electrical Engineering",
      icon: <Zap className="h-5 w-5 text-primary" />,
      description: "Power systems, Control systems, Electrical machines, and more",
      topics: ["Power Systems", "Control Systems", "Electrical Machines", "Power Electronics"],
      students: "15,000+",
      successRate: "80%"
    },
    {
      id: "me",
      title: "Mechanical Engineering",
      icon: <Target className="h-5 w-5 text-primary" />,
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
      bgClass: "bg-gradient-to-r from-blue-600 to-blue-800"
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
      bgClass: "bg-gradient-to-r from-blue-700 to-blue-900"
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
      bgClass: "bg-gradient-to-r from-blue-800 to-blue-950"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-r from-white/50 to-blue-100/50 backdrop-blur-md p-3 rounded-full mb-6">
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900">GATE Exam Preparation</h1>
            <p className="text-lg md:text-xl text-blue-800 max-w-3xl mx-auto mb-8">
              Comprehensive mock tests and practice resources to boost your GATE score
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800">
                <Link to="/register">Start Practicing <ChevronRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-purple-900">What is GATE?</h2>
                <p className="text-gray-700 mb-4">
                  The Graduate Aptitude Test in Engineering (GATE) is a prestigious national examination that tests the comprehensive understanding of various undergraduate subjects in engineering and science.
                </p>
                <p className="text-gray-700 mb-6">
                  GATE score is used for admissions to postgraduate programs (ME, M.Tech, PhD) in Indian institutes like IITs, NITs, and IIITs. It's also recognized by many public sector undertakings (PSUs) for recruitment.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  <Link to="/gate-details" className="group flex items-center hover:underline">
                    Learn more about GATE examination
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 shadow-lg border border-purple-200">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Why GATE is Important</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <GraduationCap className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-purple-800">Gateway to prestigious institutions like IITs and NITs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-purple-800">Essential for PSU recruitments and higher-paying jobs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <Award className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-purple-800">Opportunity for research scholarships and stipends</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-purple-800">Recognized globally for academic excellence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-purple-900">Our Approach to GATE Preparation</h2>
              <p className="text-lg text-purple-700 max-w-3xl mx-auto">
                Structured learning and practice methodology to maximize your GATE score
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {examTypes.map((type, index) => (
                <Card key={index} className={`text-white overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${type.bgClass}`}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      {type.icon}
                    </div>
                    <CardTitle className="text-2xl">{type.title}</CardTitle>
                    <CardDescription className="text-purple-100">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-white text-purple-700 hover:bg-purple-50">
                      <Link to="/dashboard">Explore Tests</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-900">Popular GATE Courses</h2>
            <p className="text-lg text-center text-purple-700 max-w-3xl mx-auto mb-12">
              Comprehensive test series for all major GATE disciplines
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gateCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl border-purple-200 bg-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white">
                        {course.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-purple-900">{course.title}</CardTitle>
                        <CardDescription className="text-purple-600">{course.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.topics.map((topic, i) => (
                        <span key={i} className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-purple-700">
                        <span className="font-medium">{course.students}</span> students enrolled
                      </div>
                      <div className="text-purple-700">
                        <span className="font-medium">{course.successRate}</span> success rate
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 mt-2">
                      <Link to="/dashboard">Start Practicing</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 px-4 bg-gradient-to-b from-slate-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-purple-900">Success Stories</h2>
              <p className="text-lg text-purple-700 max-w-3xl mx-auto">
                Join thousands of students who improved their GATE scores with our practice tests
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-purple-100 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-0">
                  <p className="text-purple-800 mb-4">
                    "I improved my GATE rank from 15,000 to 856 in just 3 months using the full mock tests. The detailed performance analysis was a game-changer."
                  </p>
                  <div className="mt-4">
                    <div className="font-semibold text-purple-900">Ankit Sharma</div>
                    <div className="text-sm text-purple-600">GATE CSE AIR 856</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-purple-100 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-0">
                  <p className="text-purple-800 mb-4">
                    "The subject-wise practice helped me identify my weak areas in Signals and Systems. Got into an IIT with a GATE score of 720."
                  </p>
                  <div className="mt-4">
                    <div className="font-semibold text-purple-900">Meera Patel</div>
                    <div className="text-sm text-purple-600">GATE ECE AIR 450</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-purple-100 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-0">
                  <p className="text-purple-800 mb-4">
                    "The previous year papers with detailed solutions helped me understand the exam pattern. Secured admission to NIT Trichy with 99.2 percentile."
                  </p>
                  <div className="mt-4">
                    <div className="font-semibold text-purple-900">Karthik Ramesh</div>
                    <div className="text-sm text-purple-600">GATE ME AIR 305</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="py-16 px-4 bg-gradient-to-r from-purple-700 to-purple-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Get GATE Ready with myturnindia</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
              Join our comprehensive GATE preparation platform and boost your score
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-purple-50 gap-2">
                <Link to="/register">Get Started Today <ChevronRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
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
