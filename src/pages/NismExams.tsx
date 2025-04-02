
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
  Users,
  Layers 
} from "lucide-react";

const NismExams = () => {
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
      successRate: "88%"
    },
    {
      id: "series-viii",
      title: "Series VIII: Equity Derivatives",
      icon: <BookOpen className="h-5 w-5 text-white" />,
      description: "Practice tests for equity derivatives certification",
      topics: ["Derivatives Concepts", "Options & Futures", "Trading Strategies", "Risk Management"],
      students: "12,000+",
      successRate: "85%"
    },
    {
      id: "series-x",
      title: "Series X-A: Investment Adviser",
      icon: <BookOpen className="h-5 w-5 text-white" />,
      description: "Preparation for investment adviser certification",
      topics: ["Financial Planning", "Asset Allocation", "Portfolio Management", "Regulations"],
      students: "10,000+",
      successRate: "82%"
    },
    {
      id: "series-xii",
      title: "Series XII: Securities Markets Foundation",
      icon: <BookOpen className="h-5 w-5 text-white" />,
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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block bg-white/90 backdrop-blur-md p-4 rounded-full mb-6 shadow-sm">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
              NISM Certification
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900">
              NISM Certification Preparation
            </h1>
            <p className="text-lg md:text-xl text-blue-900 max-w-3xl mx-auto mb-8">
              Expert-curated practice tests to help you excel in NISM certification exams
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 apple-button-primary bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-md">
                <Link to="/register">Start Practicing <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="apple-button-secondary">
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

        {/* What is NISM Section */}
        <div className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
                  About NISM
                </span>
                <h2 className="text-3xl font-semibold mb-4 apple-gradient-text">What is NISM?</h2>
                <p className="text-gray-700 mb-4">
                  The National Institute of Securities Markets (NISM) is a public trust established by the Securities and Exchange Board of India (SEBI) to enhance the quality of securities markets through educational initiatives.
                </p>
                <p className="text-gray-700 mb-6">
                  NISM certifications are mandatory for various professionals working in the securities market, including mutual fund distributors, investment advisers, and securities operations professionals.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <Link to="/nism-details" className="group apple-link flex items-center">
                    Learn more about NISM certifications
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="apple-showcase-card relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-200 to-blue-300 opacity-20 blur"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-md border border-blue-100">
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
        </div>

        {/* Our Approach Section */}
        <div className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 apple-gradient-text">
                Our Approach to NISM Preparation
              </h2>
              <p className="text-lg text-blue-900 max-w-3xl mx-auto">
                Structured learning and practice methodology to help you clear NISM certifications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {examFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`text-white overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 bg-gradient-to-br ${feature.bgClass} border-none`}
                >
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
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
                    <Button asChild className="w-full bg-white text-blue-700 hover:bg-blue-50 apple-button">
                      <Link to="/dashboard">Explore Tests</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* NISM Courses */}
        <div className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
                Our Offerings
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 apple-gradient-text">Popular NISM Courses</h2>
              <p className="text-lg text-blue-900 max-w-3xl mx-auto mb-12">
                Comprehensive test series for all major NISM certifications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nismCourses.map((course) => (
                <Card 
                  key={course.id} 
                  className="overflow-hidden transition-all duration-300 hover:shadow-xl border-blue-100 apple-card-hover bg-gradient-to-br from-blue-50/50 to-white group"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white group-hover:from-blue-600 group-hover:to-blue-700 transition-all">
                        {course.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-800">{course.title}</CardTitle>
                        <CardDescription className="text-blue-600">{course.description}</CardDescription>
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
                      <div className="text-gray-700">
                        <span className="font-medium">{course.students}</span> students enrolled
                      </div>
                      <div className="text-gray-700">
                        <span className="font-medium">{course.successRate}</span> success rate
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 mt-2 text-white apple-button">
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
              <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 apple-gradient-text">Success Stories</h2>
              <p className="text-lg text-blue-900 max-w-3xl mx-auto">
                Join thousands of students who cleared their NISM certifications with our practice tests
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rahul Mehta",
                  role: "NISM Series V-A Certified",
                  content: "The chapter-wise tests helped me understand complex concepts in small chunks. Cleared my certification in the first attempt!"
                },
                {
                  name: "Priya Desai",
                  role: "NISM Series VIII Certified",
                  content: "The practice question bank was extensive and covered all topics. The detailed explanations helped me understand the concepts thoroughly."
                },
                {
                  name: "Amit Kumar",
                  role: "NISM Series X-A Certified",
                  content: "The full mock tests simulated the actual exam environment perfectly. I was well-prepared and confident on the exam day."
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
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-blue-600">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Get NISM Ready with myturnindia</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Join our comprehensive NISM preparation platform and clear your certification
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

export default NismExams;
