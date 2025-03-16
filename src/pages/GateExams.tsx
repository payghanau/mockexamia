
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Clock, BookOpen, BarChart } from "lucide-react";

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
      difficulty: "High"
    },
    {
      id: "ee",
      name: "Electrical Engineering",
      topicsCount: 14,
      sectionTests: 28,
      fullTests: 5,
      difficulty: "High"
    },
    {
      id: "me",
      name: "Mechanical Engineering",
      topicsCount: 15,
      sectionTests: 30,
      fullTests: 5,
      difficulty: "High"
    },
    {
      id: "ce",
      name: "Civil Engineering",
      topicsCount: 13,
      sectionTests: 26,
      fullTests: 5,
      difficulty: "High"
    },
    {
      id: "ec",
      name: "Electronics & Communication",
      topicsCount: 14,
      sectionTests: 28,
      fullTests: 5,
      difficulty: "High"
    },
    {
      id: "ch",
      name: "Chemical Engineering",
      topicsCount: 12,
      sectionTests: 24,
      fullTests: 5,
      difficulty: "High"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-white to-blue-50 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">GATE Exam Preparation</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive practice tests for GATE examination across multiple engineering disciplines
            </p>
          </div>

          {/* Test Types */}
          <Tabs defaultValue="section" className="mb-16">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
              <TabsTrigger value="section">Section-wise Tests</TabsTrigger>
              <TabsTrigger value="full">Full-length Tests</TabsTrigger>
            </TabsList>
            
            <TabsContent value="section" className="mt-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <BookOpen className="h-6 w-6 text-mcq-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Section-wise Practice Tests</h3>
                    <p className="text-gray-600">
                      Focus on mastering specific topics with targeted practice tests
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mcq-blue rounded-full mr-3"></div>
                    <span className="text-gray-700">10 questions per test</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mcq-blue rounded-full mr-3"></div>
                    <span className="text-gray-700">20 minutes time limit</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mcq-blue rounded-full mr-3"></div>
                    <span className="text-gray-700">Mix of MCQs and numerical answer type (NAT) questions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mcq-blue rounded-full mr-3"></div>
                    <span className="text-gray-700">Detailed explanation for each question</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mcq-blue rounded-full mr-3"></div>
                    <span className="text-gray-700">Topic-specific performance analytics</span>
                  </li>
                </ul>
                
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/dashboard">Browse Section Tests</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="full" className="mt-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-mcq-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full-length Mock Tests</h3>
                    <p className="text-gray-600">
                      Simulate the actual GATE exam experience with comprehensive tests
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mcq-blue rounded-full mr-3"></div>
                    <span className="text-gray-700">65 questions (mix of 1 and 2 marks)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mcq-blue rounded-full mr-3"></div>
                    <span className="text-gray-700">3 hours time limit</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mcq-blue rounded-full mr-3"></div>
                    <span className="text-gray-700">Identical to actual GATE exam pattern</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mcq-blue rounded-full mr-3"></div>
                    <span className="text-gray-700">Virtual calculator and formula sheet</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-mcq-blue rounded-full mr-3"></div>
                    <span className="text-gray-700">Comprehensive performance analysis</span>
                  </li>
                </ul>
                
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/dashboard">Browse Full Tests</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Available GATE Subjects */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Available GATE Disciplines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gateSubjects.map((subject) => (
                <div key={subject.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">{subject.name}</h3>
                  <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-5">
                    <div>Topics: {subject.topicsCount}</div>
                    <div>Difficulty: {subject.difficulty}</div>
                    <div>Section Tests: {subject.sectionTests}</div>
                    <div>Full Tests: {subject.fullTests}</div>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/dashboard">View Tests</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Why Choose Our GATE Mock Tests?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-5 w-5 text-mcq-blue" />
                  </div>
                  <h3 className="font-semibold text-lg">Expert-Crafted Questions</h3>
                </div>
                <p className="text-gray-600">
                  Questions designed by GATE toppers and subject experts to match the actual exam pattern and difficulty
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <BarChart className="h-5 w-5 text-mcq-blue" />
                  </div>
                  <h3 className="font-semibold text-lg">Detailed Analytics</h3>
                </div>
                <p className="text-gray-600">
                  Comprehensive performance reports to track your progress and identify areas for improvement
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Clock className="h-5 w-5 text-mcq-blue" />
                  </div>
                  <h3 className="font-semibold text-lg">Realistic Exam Environment</h3>
                </div>
                <p className="text-gray-600">
                  Experience the actual GATE exam interface with our simulator featuring virtual calculator and tools
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Ace Your GATE Exam?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start your GATE preparation journey with our comprehensive mock tests and improve your chances of securing a top rank
            </p>
            <Button asChild size="lg">
              <Link to="/register">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GateExams;
