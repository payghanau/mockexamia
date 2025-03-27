
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Clock, 
  BookOpen, 
  BarChart, 
  Award, 
  ChevronRight, 
  CheckCircle, 
  Cpu, 
  Lightbulb, 
  TrendingUp 
} from "lucide-react";

const GateExams = () => {
  useEffect(() => {
    document.title = "GATE Exams - myturnindia";
  }, []);

  const gateSubjects = [
    {
      id: "cs",
      name: "Computer Science",
      topicsCount: 12,
      sectionTests: 24,
      fullTests: 5,
      difficulty: "High",
      icon: <Cpu className="h-10 w-10 text-blue-600" />
    },
    {
      id: "ee",
      name: "Electrical Engineering",
      topicsCount: 14,
      sectionTests: 28,
      fullTests: 5,
      difficulty: "High",
      icon: <Lightbulb className="h-10 w-10 text-blue-600" />
    },
    {
      id: "me",
      name: "Mechanical Engineering",
      topicsCount: 15,
      sectionTests: 30,
      fullTests: 5,
      difficulty: "High",
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />
    },
    {
      id: "ce",
      name: "Civil Engineering",
      topicsCount: 13,
      sectionTests: 26,
      fullTests: 5,
      difficulty: "High",
      icon: <Award className="h-10 w-10 text-blue-600" />
    },
    {
      id: "ec",
      name: "Electronics & Communication",
      topicsCount: 14,
      sectionTests: 28,
      fullTests: 5,
      difficulty: "High",
      icon: <BookOpen className="h-10 w-10 text-blue-600" />
    },
    {
      id: "ch",
      name: "Chemical Engineering",
      topicsCount: 12,
      sectionTests: 24,
      fullTests: 5,
      difficulty: "High",
      icon: <BarChart className="h-10 w-10 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero section */}
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Prepare for GATE Success
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Comprehensive practice tests designed by GATE toppers and subject experts to maximize your score
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" variant="secondary" className="gap-2">
                    <Link to="/register">Start Practicing <ChevronRight className="h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-transparent border-white hover:bg-white/10">
                    <Link to="/pricing">View Plans</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block bg-white/10 backdrop-blur-md rounded-lg p-8">
                <div className="text-center">
                  <div className="mb-6 text-5xl font-bold tracking-tight text-white">98%</div>
                  <p className="text-blue-100 mb-4">Of our students report improved scores after using our GATE mock tests</p>
                </div>
                <hr className="border-white/20 my-6" />
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2 text-white">500+</div>
                    <p className="text-blue-100 text-sm">Topic-wise tests</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2 text-white">50+</div>
                    <p className="text-blue-100 text-sm">Full-length mocks</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2 text-white">10K+</div>
                    <p className="text-blue-100 text-sm">Practice questions</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2 text-white">24/7</div>
                    <p className="text-blue-100 text-sm">Expert support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About GATE Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-blue-50 rounded-lg p-8 shadow-sm order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-4">Why GATE Matters</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Gateway to M.Tech programs at IITs, NITs, and other prestigious institutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Eligibility for PSU recruitment and government research positions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Scholarship opportunities including MHRD scholarship for M.Tech students</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>International recognition for technical knowledge and expertise</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">What is GATE?</h2>
                <p className="text-gray-700 mb-4">
                  The Graduate Aptitude Test in Engineering (GATE) is a prestigious national examination that tests the comprehensive understanding of various undergraduate subjects in engineering and science for admission to postgraduate programs.
                </p>
                <p className="text-gray-700 mb-6">
                  GATE is conducted jointly by the Indian Institute of Science (IISc) and seven Indian Institutes of Technology (IITs) on behalf of the National Coordination Board (NCB)-GATE, Department of Higher Education, Ministry of Education, Government of India.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <Link to="/exams/gate-details" className="group flex items-center hover:underline">
                    Learn more about GATE
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Types */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our GATE Test Series</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the perfect practice format to match your preparation needs
              </p>
            </div>
            
            <Tabs defaultValue="section" className="mb-16">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-10">
                <TabsTrigger value="section" className="text-base py-3">Section-wise Tests</TabsTrigger>
                <TabsTrigger value="full" className="text-base py-3">Full-length Tests</TabsTrigger>
              </TabsList>
              
              <TabsContent value="section" className="mt-8 transition-all duration-500 ease-in-out">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                        <BookOpen className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">Section-wise Practice Tests</h3>
                      <p className="text-gray-600 mb-6">
                        Master individual topics with focused practice tests that help you build a strong foundation for the complete GATE syllabus
                      </p>
                      <Button asChild className="w-full md:w-auto">
                        <Link to="/dashboard">Browse Section Tests</Link>
                      </Button>
                    </div>
                    
                    <div className="md:w-2/3 bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold mb-4 text-lg">What you get:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <span className="font-medium">10 questions per test</span>
                          </div>
                          <p className="text-sm text-gray-600">Focus on specific concepts without getting overwhelmed</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <span className="font-medium">20 minutes time limit</span>
                          </div>
                          <p className="text-sm text-gray-600">Quick practice sessions that fit into your schedule</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <span className="font-medium">MCQs and NAT questions</span>
                          </div>
                          <p className="text-sm text-gray-600">Practice with both multiple choice and numerical answer types</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <span className="font-medium">Detailed explanations</span>
                          </div>
                          <p className="text-sm text-gray-600">Learn from comprehensive solutions for each question</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <span className="font-medium">Recommended for:</span>
                            <p className="text-sm text-gray-700 mt-1">Early and mid-stage preparation when you're still mastering individual topics and building your knowledge base</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="full" className="mt-8 transition-all duration-500 ease-in-out">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                        <Clock className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">Full-length Mock Tests</h3>
                      <p className="text-gray-600 mb-6">
                        Simulate the actual GATE exam experience with comprehensive tests that cover the entire syllabus and build your exam stamina
                      </p>
                      <Button asChild className="w-full md:w-auto">
                        <Link to="/dashboard">Browse Full Tests</Link>
                      </Button>
                    </div>
                    
                    <div className="md:w-2/3 bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold mb-4 text-lg">What you get:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <span className="font-medium">65 questions</span>
                          </div>
                          <p className="text-sm text-gray-600">Mix of 1 and 2 mark questions covering the entire syllabus</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <span className="font-medium">3 hours time limit</span>
                          </div>
                          <p className="text-sm text-gray-600">Build stamina and time management skills for the actual exam</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <span className="font-medium">Official GATE pattern</span>
                          </div>
                          <p className="text-sm text-gray-600">Identical to the actual GATE exam format and interface</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex items-center mb-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            <span className="font-medium">Virtual calculator</span>
                          </div>
                          <p className="text-sm text-gray-600">Practice with the same tools available in the real exam</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <span className="font-medium">Recommended for:</span>
                            <p className="text-sm text-gray-700 mt-1">Final stages of preparation when you need to test your comprehensive knowledge and build exam temperament</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Available GATE Subjects */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Available GATE Disciplines</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive test series for all major GATE engineering disciplines
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gateSubjects.map((subject) => (
                <div 
                  key={subject.id} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                      {subject.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{subject.name}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Difficulty</span>
                      <span className="font-medium text-blue-600">{subject.difficulty}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-blue-600 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{subject.topicsCount} Topics</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{subject.sectionTests} Section Tests</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{subject.fullTests} Full Tests</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2 text-gray-400" />
                      <span>All Chapters Covered</span>
                    </div>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/dashboard">Explore Tests</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our GATE Mock Tests?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Features that set our GATE test series apart from others
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <BookOpen className="h-6 w-6 text-mcq-blue" />
                  </div>
                  <h3 className="font-semibold text-xl">Expert-Crafted Questions</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Questions designed by GATE toppers and subject experts with years of experience in coaching GATE aspirants
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-mcq-blue rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    <span>Matches actual GATE difficulty level</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-mcq-blue rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    <span>Updated with latest exam patterns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-mcq-blue rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    <span>Comprehensive coverage of syllabus</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <BarChart className="h-6 w-6 text-mcq-blue" />
                  </div>
                  <h3 className="font-semibold text-xl">Advanced Analytics</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Gain deep insights into your performance with our comprehensive analytics dashboard
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-mcq-blue rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    <span>Topic-wise performance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-mcq-blue rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    <span>Comparison with other test-takers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-mcq-blue rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    <span>Personalized improvement suggestions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-mcq-blue" />
                  </div>
                  <h3 className="font-semibold text-xl">Realistic Exam Simulator</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Practice in an environment that replicates the actual GATE examination interface
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-mcq-blue rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    <span>Identical UI to the GATE portal</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-mcq-blue rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    <span>Virtual scientific calculator</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-mcq-blue rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                    <span>Simulated exam pressure and timing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from students who cracked GATE with the help of our test series
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "The section-wise tests were perfect for building my foundation. The analytics helped me identify my weak areas. Secured AIR 34 in GATE CS!"
                </p>
                <div>
                  <div className="font-semibold">Vikram Singh</div>
                  <div className="text-sm text-gray-500">AIR 34, GATE CS 2023</div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "The full-length mock tests were almost identical to the actual GATE paper. The detailed solutions helped me understand concepts better. Got AIR 156!"
                </p>
                <div>
                  <div className="font-semibold">Ananya Patel</div>
                  <div className="text-sm text-gray-500">AIR 156, GATE EE 2023</div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "What sets myturnindia apart is the quality of questions and detailed explanations. The test series played a crucial role in my GATE preparation."
                </p>
                <div>
                  <div className="font-semibold">Rahul Sharma</div>
                  <div className="text-sm text-gray-500">AIR 243, GATE ME 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Ace Your GATE Exam?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who secured top GATE ranks with our comprehensive test series
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link to="/register">Get Started Today <ChevronRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white hover:bg-white/10">
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
