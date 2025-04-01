import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, BookOpen, GraduationCap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const MockTests = () => {
  useEffect(() => {
    document.title = "Mock Tests - myturnindia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-primary-light pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Prepare for Success with Our Mock Tests
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Comprehensive practice tests designed to help you ace your exams
            </p>
          </div>
        </div>

        {/* Mock Tests Categories */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Choose Your Exam Category</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* NISM Card */}
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl bg-white border border-gray-200">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">NISM Mock Tests</CardTitle>
                  <CardDescription className="text-gray-600">
                    Securities Market Certification Exams
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>Series V-A: Mutual Fund Distributors</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>Series VIII: Equity Derivatives</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>Series X-A: Investment Adviser</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>And many more...</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="mt-4 w-full bg-primary hover:bg-primary-dark">
                    <Link to="/exams/nism" className="group flex items-center justify-center gap-2">
                      Explore Tests 
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* GATE Card */}
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl bg-white border border-gray-200">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">GATE Mock Tests</CardTitle>
                  <CardDescription className="text-gray-600">
                    Graduate Aptitude Test in Engineering
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>Section-wise Practice Tests</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>Full-length Mock Exams</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>Previous Year Papers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>Subject-specific Questions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="mt-4 w-full bg-primary hover:bg-primary-dark">
                    <Link to="/exams/gate" className="group flex items-center justify-center gap-2">
                      Explore Tests 
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Other Exams Card */}
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl bg-white border border-gray-200">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">Other Exam Tests</CardTitle>
                  <CardDescription className="text-gray-600">
                    Coming Soon
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="py-8 text-center">
                    <p className="text-gray-700 font-medium text-lg">
                      We're working on adding more exam categories.
                    </p>
                    <p className="text-gray-600 mt-2">
                      Stay tuned for updates!
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button disabled className="mt-4 w-full bg-gray-300 hover:bg-gray-300 opacity-70 cursor-not-allowed">
                    <span className="flex items-center justify-center gap-2">
                      Coming Soon
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">Why Choose Our Mock Tests?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Realistic Exam Simulation</h3>
                <p className="text-gray-600">
                  Experience the exact exam environment with our simulator that mirrors the official exam interface and question pattern.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Detailed Performance Analysis</h3>
                <p className="text-gray-600">
                  Get comprehensive insights into your performance with analytics that help identify your strengths and areas for improvement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Customizable Practice</h3>
                <p className="text-gray-600">
                  Choose from chapter-wise, section-wise, or full-length tests to customize your preparation according to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Practicing?</h3>
            <p className="text-xl mb-8">
              Choose your exam category and begin your preparation journey today
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MockTests;
