import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Clock, 
  Award, 
  CheckCircle, 
  Users, 
  Layers,
  Sparkles,
  ClipboardCheck,
  Lightbulb,
  BarChart4
} from "lucide-react";
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
        {/* Hero Section with Background Gradient */}
        <div className="pt-32 pb-24 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          {/* Decorative Elements */}
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-blue-300/20 to-blue-400/20 blur-3xl"></div>
          <div className="absolute bottom-10 left-[5%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-300/20 blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-sm font-medium bg-blue-100/80 text-blue-700 rounded-full backdrop-blur-sm border border-blue-200/50">
              <Sparkles className="h-4 w-4" />
              <span>Premium Test Series</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-900 leading-tight">
              Elevate Your Preparation<br className="hidden md:block" /> With Expert-Crafted Mock Tests
            </h1>
            
            <p className="text-lg md:text-xl text-blue-900/80 max-w-3xl mx-auto mb-10">
              Comprehensive practice designed by industry experts to help you excel in your certification exams
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/20 font-medium rounded-xl px-8">
                <a href="#categories" className="flex items-center gap-2">
                  Explore Test Categories <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/70 backdrop-blur-sm border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 rounded-xl px-8">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
            
            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
              {[
                { value: "35K+", label: "Enrolled Students", icon: <Users className="h-5 w-5 text-blue-500" /> },
                { value: "98%", label: "Success Rate", icon: <Award className="h-5 w-5 text-blue-500" /> },
                { value: "3,500+", label: "Questions", icon: <ClipboardCheck className="h-5 w-5 text-blue-500" /> },
                { value: "15+", label: "Exam Categories", icon: <BookOpen className="h-5 w-5 text-blue-500" /> }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-blue-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 mb-2">
                    {stat.icon}
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-blue-900">{stat.value}</span>
                  <span className="text-sm text-blue-700">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mock Tests Categories */}
        <div id="categories" className="py-24 px-4 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent h-40"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100/80 text-blue-700 rounded-full backdrop-blur-sm">
                <Layers className="h-4 w-4" />
                <span>Specialized Exam Categories</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                Choose Your Exam Path
              </h2>
              <p className="text-lg text-blue-700/80 max-w-3xl mx-auto">
                Select from our comprehensive range of practice tests designed by subject matter experts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* NISM Card */}
              <Card className="group overflow-hidden rounded-2xl border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50">
                <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-bl-3xl opacity-90 transition-all group-hover:scale-110"></div>
                
                <CardHeader className="pb-2 relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 text-white group-hover:scale-105 transition-all shadow-md">
                    <BookOpen className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-blue-900">NISM Mock Tests</CardTitle>
                  <CardDescription className="text-blue-700 font-medium">
                    Securities Market Certification Exams
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-blue-800 mb-4">
                    {[
                      "Series V-A: Mutual Fund Distributors",
                      "Series VIII: Equity Derivatives",
                      "Series X-A: Investment Adviser",
                      "And many more..."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <CheckCircle className="h-3 w-3 text-blue-600" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center text-sm py-3 border-t border-blue-100">
                    <div className="text-blue-800">
                      <span className="font-medium">12,000+</span> students
                    </div>
                    <div className="text-blue-800">
                      <span className="font-medium">86%</span> success rate
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md group-hover:shadow-lg transition-all rounded-xl">
                    <Link to="/exams/nism" className="group flex items-center justify-center gap-2">
                      Explore Tests 
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* GATE Card */}
              <Card className="group overflow-hidden rounded-2xl border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50">
                <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-blue-700 to-blue-800 rounded-bl-3xl opacity-90 transition-all group-hover:scale-110"></div>
                
                <CardHeader className="pb-2 relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-800 flex items-center justify-center mb-4 text-white group-hover:scale-105 transition-all shadow-md">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-blue-900">GATE Mock Tests</CardTitle>
                  <CardDescription className="text-blue-700 font-medium">
                    Graduate Aptitude Test in Engineering
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-blue-800 mb-4">
                    {[
                      "Section-wise Practice Tests",
                      "Full-length Mock Exams",
                      "Previous Year Papers",
                      "Subject-specific Questions"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <CheckCircle className="h-3 w-3 text-blue-600" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center text-sm py-3 border-t border-blue-100">
                    <div className="text-blue-800">
                      <span className="font-medium">18,000+</span> students
                    </div>
                    <div className="text-blue-800">
                      <span className="font-medium">82%</span> success rate
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white shadow-md group-hover:shadow-lg transition-all rounded-xl">
                    <Link to="/exams/gate" className="group flex items-center justify-center gap-2">
                      Explore Tests 
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Other Exams Card */}
              <Card className="group overflow-hidden rounded-2xl border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white">
                <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-gray-400 to-gray-500 rounded-bl-3xl opacity-30 transition-all group-hover:scale-110"></div>
                
                <CardHeader className="pb-2 relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-center mb-4 text-white group-hover:scale-105 transition-all shadow-md">
                    <Clock className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">Other Exam Tests</CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    Coming Soon
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="py-10 text-center">
                    <p className="text-gray-700 font-medium text-lg mb-2">
                      We're working on adding more exam categories.
                    </p>
                    <p className="text-gray-600">
                      Stay tuned for updates!
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button disabled className="w-full bg-gray-300 hover:bg-gray-300 opacity-70 cursor-not-allowed rounded-xl">
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
        <div className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-300/20 to-blue-400/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-500/20 blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100/80 text-blue-700 rounded-full backdrop-blur-sm">
              <Award className="h-4 w-4" />
              <span>Our Advantage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              What Sets Our Mock Tests Apart
            </h2>
            <p className="text-lg text-blue-800/80 max-w-3xl mx-auto mb-16">
              We combine expert content with innovative learning tools to help you achieve your best results
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Realistic Exam Simulation",
                  icon: <Layers className="h-8 w-8 text-white" />,
                  description: "Experience the exact exam environment with our simulator that mirrors the official exam interface and question pattern.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "AI-Powered Analytics",
                  icon: <BarChart4 className="h-8 w-8 text-white" />,
                  description: "Get comprehensive insights into your performance with AI analytics that identify your strengths and areas for improvement.",
                  color: "from-blue-600 to-blue-700"
                },
                {
                  title: "Expert-Crafted Content",
                  icon: <Lightbulb className="h-8 w-8 text-white" />,
                  description: "Questions created by industry professionals and academics with years of experience in their respective fields.",
                  color: "from-blue-700 to-blue-800"
                }
              ].map((feature, idx) => (
                <div key={idx} className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 transform hover:-translate-y-1 border border-blue-100 flex flex-col items-center text-center">
                  <div className={`h-16 w-16 rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg bg-gradient-to-r ${feature.color} group-hover:scale-105 transition-all`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-900">{feature.title}</h3>
                  <p className="text-blue-700">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100/80 text-blue-700 rounded-full">
                <ClipboardCheck className="h-4 w-4" />
                <span>Simple Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                How Our Test Platform Works
              </h2>
              <p className="text-lg text-blue-700/80 max-w-3xl mx-auto">
                A streamlined experience designed to maximize your learning efficiency
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Choose Your Exam",
                  description: "Select from our wide range of certification tests based on your career goals."
                },
                {
                  step: "02",
                  title: "Practice & Learn",
                  description: "Take section-wise or full-length tests with detailed explanations for each question."
                },
                {
                  step: "03",
                  title: "Review Analytics",
                  description: "Get personalized feedback and in-depth analysis of your performance."
                },
                {
                  step: "04",
                  title: "Master & Succeed",
                  description: "Improve your weak areas and build confidence to excel in your actual exam."
                }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-16 left-[calc(100%-16px)] w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0"></div>
                  )}
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-lg transition-all relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xl mb-5">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-blue-900">{step.title}</h3>
                    <p className="text-blue-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Elevate Your Exam Preparation?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who've transformed their preparation journey with our platform
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg rounded-xl px-8 font-medium">
                <Link to="/register">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-xl px-8 font-medium">
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

export default MockTests;
