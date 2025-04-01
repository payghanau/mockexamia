import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Award,
  Users 
} from "lucide-react";

const NismExams = () => {
  useEffect(() => {
    document.title = "NISM Certifications - myturnindia";
  }, []);

  const nismCourses = [
    {
      id: "series-va",
      title: "Series V-A: Mutual Fund Distributors",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      description: "Comprehensive test series for mutual fund distributors",
      topics: ["Mutual Fund Basics", "Regulations", "Investment Analysis", "Client Management"],
      students: "15,000+",
      successRate: "88%"
    },
    {
      id: "series-viii",
      title: "Series VIII: Equity Derivatives",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      description: "Practice tests for equity derivatives certification",
      topics: ["Derivatives Concepts", "Options & Futures", "Trading Strategies", "Risk Management"],
      students: "12,000+",
      successRate: "85%"
    },
    {
      id: "series-x",
      title: "Series X-A: Investment Adviser",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      description: "Preparation for investment adviser certification",
      topics: ["Financial Planning", "Asset Allocation", "Portfolio Management", "Regulations"],
      students: "10,000+",
      successRate: "82%"
    },
    {
      id: "series-xii",
      title: "Series XII: Securities Markets Foundation",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      description: "Foundational knowledge of securities markets",
      topics: ["Market Structure", "Securities Types", "Trading Mechanisms", "Regulatory Framework"],
      students: "18,000+",
      successRate: "90%"
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
      bgClass: "bg-gradient-to-r from-blue-500 to-blue-600"
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
      bgClass: "bg-gradient-to-r from-blue-600 to-blue-700"
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
      bgClass: "bg-gradient-to-r from-blue-700 to-blue-800"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-blue-100/50 to-blue-200/50 text-gray-800 pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block bg-white/60 backdrop-blur-md p-3 rounded-full mb-6 shadow-sm">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900">NISM Certification Preparation</h1>
            <p className="text-lg md:text-xl text-blue-800 max-w-3xl mx-auto mb-8">
              Expert-curated practice tests to help you excel in NISM certification exams
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 shadow-md">
                <Link to="/register">Start Practicing <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-500 text-blue-600 hover:bg-blue-50 shadow-sm">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-blue-900">What is NISM?</h2>
                <p className="text-gray-700 mb-4">
                  The National Institute of Securities Markets (NISM) is a public trust established by the Securities and Exchange Board of India (SEBI) to enhance the quality of securities markets through educational initiatives.
                </p>
                <p className="text-gray-700 mb-6">
                  NISM certifications are mandatory for various professionals working in the securities market, including mutual fund distributors, investment advisers, and securities operations professionals.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <Link to="/nism-details" className="group flex items-center hover:underline">
                    Learn more about NISM certifications
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 shadow-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Why NISM Certification Matters</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-700">Mandatory requirement for securities market professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-700">Enhances credibility with clients and employers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-700">Demonstrates knowledge and understanding of market regulations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-gray-700">Opens doors to better career opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Approach to NISM Preparation</h2>
              <p className="text-lg text-blue-700 max-w-3xl mx-auto">
                Structured learning and practice methodology to help you clear NISM certifications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {examFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`text-white overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 bg-gradient-to-br from-blue-600/90 to-blue-800/90`}
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    <CardDescription className="text-blue-100">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-white text-blue-700 hover:bg-blue-50">
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
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Popular NISM Courses</h2>
            <p className="text-lg text-center text-blue-700 max-w-3xl mx-auto mb-12">
              Comprehensive test series for all major NISM certifications
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nismCourses.map((course) => (
                <Card 
                  key={course.id} 
                  className="overflow-hidden transition-all duration-300 hover:shadow-xl border-blue-200 bg-gradient-to-br from-blue-50 to-white"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
                        {course.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-800">{course.title}</CardTitle>
                        <CardDescription className="text-gray-600">{course.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.topics.map((topic, i) => (
                        <span key={i} className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-gray-700">
                        <span className="font-medium">{course.students}</span> students enrolled
                      </div>
                      <div className="text-gray-700">
                        <span className="font-medium">{course.successRate}</span> success rate
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 mt-2">
                      <Link to="/dashboard">Start Practicing</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Success Stories</h2>
              <p className="text-lg text-blue-700 max-w-3xl mx-auto">
                Join thousands of students who cleared their NISM certifications with our practice tests
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-0">
                  <p className="text-gray-700 mb-4">
                    "The chapter-wise tests helped me understand complex concepts in small chunks. Cleared my Series V-A certification in the first attempt!"
                  </p>
                  <div className="mt-4">
                    <div className="font-semibold text-gray-800">Rahul Mehta</div>
                    <div className="text-sm text-gray-600">NISM Series V-A Certified</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-0">
                  <p className="text-gray-700 mb-4">
                    "The practice question bank was extensive and covered all topics. The detailed explanations helped me understand the concepts thoroughly."
                  </p>
                  <div className="mt-4">
                    <div className="font-semibold text-gray-800">Priya Desai</div>
                    <div className="text-sm text-gray-600">NISM Series VIII Certified</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-0">
                  <p className="text-gray-700 mb-4">
                    "The full mock tests simulated the actual exam environment perfectly. I was well-prepared and confident on the exam day."
                  </p>
                  <div className="mt-4">
                    <div className="font-semibold text-gray-800">Amit Kumar</div>
                    <div className="text-sm text-gray-600">NISM Series X-A Certified</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Get NISM Ready with myturnindia</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Join our comprehensive NISM preparation platform and clear your certification
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 gap-2 shadow-md">
                <Link to="/register">Get Started Today <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 shadow-sm">
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

export default NismExams;
