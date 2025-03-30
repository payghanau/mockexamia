
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  ArrowRight, FileText, CheckCircle, Award, BookOpen, 
  ChevronRight, ShieldCheck, Clock, BarChart, CircleCheck, 
  BadgeCheck, GraduationCap, Trophy 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const NismExams = () => {
  useEffect(() => {
    document.title = "NISM Exams - myturnindia";
  }, []);

  const nismCertifications = [
    {
      id: "va",
      title: "Series V-A: Mutual Fund Distributors",
      description: "Required for individuals engaged in selling and distributing mutual funds",
      chapters: 12,
      difficulty: "Moderate",
      popularity: "High",
      passRate: "72%"
    },
    {
      id: "vb",
      title: "Series V-B: Mutual Fund Foundation",
      description: "A foundation course for mutual fund knowledge",
      chapters: 8,
      difficulty: "Beginner",
      popularity: "Medium",
      passRate: "85%"
    },
    {
      id: "viii",
      title: "Series VIII: Equity Derivatives",
      description: "For professionals dealing with equity derivatives",
      chapters: 15,
      difficulty: "Advanced",
      popularity: "Medium",
      passRate: "68%"
    },
    {
      id: "xa",
      title: "Series X-A: Investment Adviser (Level 1)",
      description: "For individuals providing investment advice",
      chapters: 18,
      difficulty: "Advanced",
      popularity: "High",
      passRate: "65%"
    },
    {
      id: "xb",
      title: "Series X-B: Investment Adviser (Level 2)",
      description: "Advanced course for investment advisers",
      chapters: 12,
      difficulty: "Expert",
      popularity: "Medium",
      passRate: "58%"
    },
    {
      id: "xii",
      title: "Series XII: Securities Markets Foundation",
      description: "Basic knowledge about securities markets",
      chapters: 10,
      difficulty: "Beginner",
      popularity: "High",
      passRate: "80%"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section - Updated with a more professional gradient */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur-md p-3 rounded-full mb-6">
              <ShieldCheck className="h-8 w-8 text-blue-100" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NISM Certification Exams</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expert-designed mock tests to help you succeed in your NISM certification journey
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 bg-white text-blue-800 hover:bg-blue-50">
                <Link to="/register">Start Practicing <ChevronRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* What is NISM Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-blue-900">What is NISM?</h2>
                <p className="text-gray-700 mb-4">
                  The National Institute of Securities Markets (NISM) is a public trust established by the Securities and Exchange Board of India (SEBI) to enhance the quality of securities market professionals through education and certification.
                </p>
                <p className="text-gray-700 mb-6">
                  NISM certifications are mandatory for professionals working in various segments of the securities market, including mutual fund distribution, investment advisory, and securities operations.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <Link to="/exams/nism-details" className="group flex items-center hover:underline">
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
                      <BadgeCheck className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-blue-800">Mandatory requirement for securities professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-blue-800">Demonstrates expertise and professional knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <Trophy className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-blue-800">Enhances career opportunities in the securities industry</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                      <CircleCheck className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-blue-800">Builds client trust and improves service quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Exam Features */}
        <div className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Our NISM Mock Test Features</h2>
              <p className="text-lg text-blue-700 max-w-3xl mx-auto">
                Practice with the most comprehensive and realistic NISM mock tests
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white p-8 rounded-lg shadow-lg border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full mr-4 text-white">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-xl text-blue-800">Chapter-wise Tests</h3>
                </div>
                <CardContent className="p-0">
                  <p className="text-blue-700 mb-4">
                    Focus on mastering individual chapters with targeted 10-question tests that help solidify your understanding of key concepts
                  </p>
                  <ul className="text-sm text-blue-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      <span>10 questions per chapter</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      <span>12-minute timed tests</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      <span>Detailed explanations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white p-8 rounded-lg shadow-lg border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full mr-4 text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-xl text-blue-800">Realistic Format</h3>
                </div>
                <CardContent className="p-0">
                  <p className="text-blue-700 mb-4">
                    Experience the exact exam environment with our simulator that mirrors the official NISM examination interface and question pattern
                  </p>
                  <ul className="text-sm text-blue-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      <span>MCQ and case study questions</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      <span>Authentic interface</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      <span>Simulated exam pressure</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white p-8 rounded-lg shadow-lg border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full mr-4 text-white">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-xl text-blue-800">Performance Analysis</h3>
                </div>
                <CardContent className="p-0">
                  <p className="text-blue-700 mb-4">
                    Get detailed insights into your performance with comprehensive analytics that help identify your strengths and areas for improvement
                  </p>
                  <ul className="text-sm text-blue-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      <span>Topic-wise performance</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      <span>Comparative statistics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      <span>Improvement tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Available NISM Certifications */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Available NISM Certifications</h2>
            <p className="text-blue-700 mb-10 text-center max-w-3xl mx-auto">
              We offer comprehensive mock tests for the following NISM certifications. Each certification includes chapter-wise tests and full-length mock exams.
            </p>
            
            <div className="overflow-x-auto rounded-xl shadow-lg border border-blue-100">
              <Table className="w-full">
                <TableHeader className="bg-blue-700">
                  <TableRow>
                    <TableHead className="w-[350px] text-white font-medium">Certification</TableHead>
                    <TableHead className="text-white font-medium">Chapters</TableHead>
                    <TableHead className="text-white font-medium">Difficulty</TableHead>
                    <TableHead className="text-white font-medium">Popularity</TableHead>
                    <TableHead className="text-white font-medium">Pass Rate</TableHead>
                    <TableHead className="text-right text-white font-medium">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {nismCertifications.map((cert) => (
                    <TableRow key={cert.id} className="hover:bg-blue-50 transition-colors">
                      <TableCell className="font-medium">
                        <div>
                          <div className="font-semibold text-blue-900">{cert.title}</div>
                          <div className="text-sm text-blue-600">{cert.description}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-blue-700">{cert.chapters}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          cert.difficulty === "Beginner" ? "bg-green-100 text-green-800" :
                          cert.difficulty === "Moderate" ? "bg-blue-100 text-blue-800" :
                          cert.difficulty === "Advanced" ? "bg-orange-100 text-orange-800" :
                          "bg-red-100 text-red-800"
                        }`}>
                          {cert.difficulty}
                        </span>
                      </TableCell>
                      <TableCell className="text-blue-700">{cert.popularity}</TableCell>
                      <TableCell className="text-blue-700">{cert.passRate}</TableCell>
                      <TableCell className="text-right">
                        <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Link to="/dashboard">View Tests</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-blue-700 mb-6">
                Not sure which certification is right for you? Talk to our experts for personalized guidance.
              </p>
              <Button asChild variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="py-16 px-4 bg-gradient-to-b from-slate-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">What Our Students Say</h2>
              <p className="text-lg text-blue-700 max-w-3xl mx-auto">
                Success stories from professionals who passed their NISM exams with our help
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-0">
                  <p className="text-blue-800 mb-4">
                    "The chapter-wise approach helped me tackle difficult topics systematically. I passed my Series V-A exam on the first attempt with 82% marks."
                  </p>
                  <div className="mt-4">
                    <div className="font-semibold text-blue-900">Rajesh Sharma</div>
                    <div className="text-sm text-blue-600">Financial Advisor, Mumbai</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-0">
                  <p className="text-blue-800 mb-4">
                    "The test interface is exactly like the actual NISM exam. The detailed explanations for each question helped me understand concepts better."
                  </p>
                  <div className="mt-4">
                    <div className="font-semibold text-blue-900">Priya Patel</div>
                    <div className="text-sm text-blue-600">Mutual Fund Distributor, Delhi</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-0">
                  <p className="text-blue-800 mb-4">
                    "I was struggling with Series X-A until I found myturnindia. The performance analytics helped me focus on my weak areas and improve quickly."
                  </p>
                  <div className="mt-4">
                    <div className="font-semibold text-blue-900">Arun Nair</div>
                    <div className="text-sm text-blue-600">Investment Advisor, Bangalore</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Ace Your NISM Exam?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Join thousands of successful professionals who passed their NISM certification with our comprehensive practice tests
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 gap-2">
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

export default NismExams;
