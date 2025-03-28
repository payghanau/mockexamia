
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Award, BookOpen, Briefcase, CheckCircle, Clock, Layers, Users } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "myturnindia - NISM & GATE Mock Exams";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-mcq-blue to-blue-700">
                Excel in Your Certification Journey
              </h1>
              <p className="text-lg md:text-xl text-mcq-gray-dark mb-8 max-w-xl">
                Comprehensive and industry-aligned practice tests for NISM Certifications and GATE Exams. Designed by experts to maximize your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-mcq-blue hover:bg-blue-700 text-white">
                  <Link to="/login">Start Practicing <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-mcq-blue text-mcq-blue hover:bg-blue-50">
                  <Link to="/register">Create Free Account</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-blue-${i * 100}`}></div>
                  ))}
                </div>
                <p className="ml-4 text-sm text-mcq-gray-dark">
                  <span className="font-semibold">2,000+</span> students trust our exam preparations
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-200 to-blue-300 opacity-30 blur-xl"></div>
                <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
                  <div className="p-4 bg-blue-50 border-b border-blue-100">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="mx-auto text-sm font-medium text-mcq-gray-dark">NISM Mock Exam</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Securities Market - Chapter 2</h3>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-start p-3 rounded-lg bg-blue-50 border border-blue-100">
                          <div className="mr-3 mt-1 p-1 bg-white rounded-full">
                            <div className="w-5 h-5 bg-mcq-blue rounded-full flex items-center justify-center text-white text-xs font-medium">{i}</div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-mcq-gray-dark">
                              Which of the following entities regulate the securities market in India?
                            </p>
                            <div className="mt-2 space-y-1">
                              {["SEBI", "RBI", "Both SEBI and RBI", "None of the above"].map((option, idx) => (
                                <div key={idx} className={`text-xs p-1.5 px-3 rounded ${idx === 2 ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-gray-100 text-gray-700'}`}>
                                  {option} {idx === 2 && <CheckCircle className="inline-block w-3 h-3 ml-1" />}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-mcq-gray-dark mr-1" />
                        <span className="text-xs text-mcq-gray-dark">8:45 remaining</span>
                      </div>
                      <Button size="sm" className="bg-mcq-blue text-white hover:bg-blue-700">Next Question</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Students Choose myturnindia</h2>
            <p className="text-mcq-gray-dark max-w-2xl mx-auto">
              Our platform is designed to help you excel in certification exams with industry-aligned content and advanced tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-mcq-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exam-Simulated Tests</h3>
              <p className="text-mcq-gray-dark">
                Experience tests that replicate the actual exam pattern, difficulty levels, and time constraints
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-mcq-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Detailed Analytics</h3>
              <p className="text-mcq-gray-dark">
                Get comprehensive insights into your performance with topic-wise analysis and improvement suggestions
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-mcq-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert-Crafted Content</h3>
              <p className="text-mcq-gray-dark">
                Questions curated by industry professionals who understand examination patterns and key concepts
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-mcq-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Success-Oriented</h3>
              <p className="text-mcq-gray-dark">
                Proven track record of helping students achieve better scores and clear certifications
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-mcq-gray-dark max-w-2xl mx-auto">
              Hear from students who have successfully prepared for their certifications with myturnindia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "NISM Series VIII Certified",
                content: "The practice tests were invaluable for my NISM preparation. The questions closely matched the actual exam pattern, and the detailed explanations helped me understand concepts better."
              },
              {
                name: "Raj Patel",
                role: "GATE CSE Qualifier",
                content: "I cleared GATE with a good score thanks to myturnindia's comprehensive practice tests. The topic-wise analysis helped me focus on my weak areas and improve systematically."
              },
              {
                name: "Ananya Singh",
                role: "NISM Series VII Certified",
                content: "The platform's user interface is intuitive, and the questions are challenging and relevant. The mock tests boosted my confidence and prepared me well for the actual certification exam."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-mcq-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-mcq-gray-dark">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-mcq-gray-dark italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Exam Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Exam Categories</h2>
            <p className="text-mcq-gray-dark max-w-2xl mx-auto">
              Choose from our wide range of practice tests tailored to help you succeed in your certification exams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-all">
              <div className="mb-6">
                <div className="inline-block p-3 bg-blue-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-mcq-blue" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">NISM Certification</h3>
              <p className="mb-6 text-mcq-gray-dark">
                Practice tests for all NISM modules with chapter-wise questions. Take focused 10-question tests in just 12 minutes to master specific topics.
              </p>
              <ul className="mb-6 space-y-2">
                {["Securities Market Foundation", "Mutual Fund Distributor", "Securities Operations", "Investment Advisor"].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-mcq-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full border-mcq-blue text-mcq-blue hover:bg-blue-50">
                <Link to="/exams/nism">Explore NISM Tests</Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-all">
              <div className="mb-6">
                <div className="inline-block p-3 bg-blue-100 rounded-lg">
                  <Award className="h-6 w-6 text-mcq-blue" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">GATE Exam</h3>
              <p className="mb-6 text-mcq-gray-dark">
                Comprehensive practice for GATE exams with both section-wise tests (10 questions, 20 minutes) and full-length mock exams (65 questions, 3 hours).
              </p>
              <ul className="mb-6 space-y-2">
                {["Computer Science", "Electronics & Communication", "Electrical Engineering", "Mechanical Engineering"].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm text-mcq-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full border-mcq-blue text-mcq-blue hover:bg-blue-50">
                <Link to="/exams/gate">Explore GATE Tests</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ace Your Certification Exam?</h2>
            <p className="text-lg text-mcq-gray-dark mb-8">
              Join thousands of successful students who have prepared with myturnindia's comprehensive practice tests
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-mcq-blue hover:bg-blue-700 text-white">
                <Link to="/register">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-mcq-blue text-mcq-blue hover:bg-blue-100">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
