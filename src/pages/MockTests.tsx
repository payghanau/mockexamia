import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, BookOpen, GraduationCap, Clock, Award, CheckCircle, Users, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const MockTests = () => {
  useEffect(() => {
    document.title = "Mock Tests - myturnindia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-5 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
              Mock Tests
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900">
              Prepare for Success with Our Mock Tests
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive practice designed to help you excel in your certification exams
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="apple-button-primary bg-gradient-to-r from-blue-500 to-blue-700">
                <a href="#categories" className="flex items-center gap-2">
                  View Test Categories <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Mock Tests Categories */}
        <div id="categories" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
                Exam Categories
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 apple-gradient-text">
                Choose Your Exam Category
              </h2>
              <p className="apple-caption">
                Select from our comprehensive range of practice tests designed to match your specific exam needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* NISM Card */}
              <Card className="apple-card apple-card-hover overflow-hidden transition-all duration-300 border border-gray-200 group">
                <CardHeader className="pb-2">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 transition-all">
                    <BookOpen className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">NISM Mock Tests</CardTitle>
                  <CardDescription className="text-blue-600">
                    Securities Market Certification Exams
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Series V-A: Mutual Fund Distributors</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Series VIII: Equity Derivatives</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Series X-A: Investment Adviser</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>And many more...</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="apple-button w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                    <Link to="/nism-exams" className="group flex items-center justify-center gap-2">
                      Explore Tests 
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* GATE Card */}
              <Card className="apple-card apple-card-hover overflow-hidden transition-all duration-300 border border-gray-200 group">
                <CardHeader className="pb-2">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 flex items-center justify-center mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-blue-900 transition-all">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">GATE Mock Tests</CardTitle>
                  <CardDescription className="text-blue-700">
                    Graduate Aptitude Test in Engineering
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Section-wise Practice Tests</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Full-length Mock Exams</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Previous Year Papers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>Subject-specific Questions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="apple-button w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white">
                    <Link to="/gate-exams" className="group flex items-center justify-center gap-2">
                      Explore Tests 
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Other Exams Card */}
              <Card className="apple-card apple-card-hover overflow-hidden transition-all duration-300 border border-gray-200 bg-gradient-to-br from-gray-50 to-white">
                <CardHeader className="pb-2">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-center mb-4 text-white">
                    <Clock className="h-7 w-7" />
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
                  <Button disabled className="apple-button w-full bg-gray-300 hover:bg-gray-300 opacity-70 cursor-not-allowed">
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
        <div className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 apple-gradient-text">
              Why Choose Our Mock Tests?
            </h2>
            <p className="apple-caption mb-12">
              We combine expert content with innovative learning tools to help you achieve your best results
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="apple-feature-card apple-card-hover group">
                <div className="h-16 w-16 rounded-xl apple-glass flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
                  <Layers className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Realistic Exam Simulation</h3>
                <p className="text-gray-600">
                  Experience the exact exam environment with our simulator that mirrors the official exam interface and question pattern.
                </p>
              </div>
              
              <div className="apple-feature-card apple-card-hover group">
                <div className="h-16 w-16 rounded-xl apple-glass flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Detailed Performance Analysis</h3>
                <p className="text-gray-600">
                  Get comprehensive insights into your performance with analytics that help identify your strengths and areas for improvement.
                </p>
              </div>
              
              <div className="apple-feature-card apple-card-hover group">
                <div className="h-16 w-16 rounded-xl apple-glass flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
                  <Clock className="h-8 w-8 text-blue-600" />
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
        <div className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4">Ready to Start Practicing?</h3>
            <p className="text-xl text-blue-100 mb-8">
              Choose your exam category and begin your preparation journey today
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="apple-button bg-white text-blue-700 hover:bg-blue-50">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="apple-button border-white text-white hover:bg-white/10">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MockTests;
