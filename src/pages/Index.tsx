
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, BookOpen, Briefcase, Layers } from "lucide-react";

const Index = () => {
  useEffect(() => {
    document.title = "MockExamia - NISM & GATE Mock Exams";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center px-4 pt-24 pb-16">
        <div className="w-full max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-mcq-blue to-blue-600">
            Ace Your Certification Exams with MockExamia
          </h1>
          <p className="text-xl text-mcq-gray-dark max-w-3xl mx-auto mb-8">
            Premium practice tests for NISM Certifications and GATE Exams designed by industry experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-mcq-blue hover:bg-blue-600">
              <Link to="/login">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-mcq-blue border-mcq-blue hover:bg-blue-50">
              <Link to="/register">Create Account</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MockExamia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-blue-50 shadow-sm">
              <div className="bg-mcq-blue/10 p-4 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-mcq-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Realistic Tests</h3>
              <p className="text-mcq-gray-dark">
                Mimics actual exam patterns and difficulty levels for better preparation
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-blue-50 shadow-sm">
              <div className="bg-mcq-blue/10 p-4 rounded-full mb-4">
                <Layers className="h-8 w-8 text-mcq-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Analysis</h3>
              <p className="text-mcq-gray-dark">
                Detailed performance metrics to help identify strengths and improvement areas
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-blue-50 shadow-sm">
              <div className="bg-mcq-blue/10 p-4 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-mcq-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert-Verified Content</h3>
              <p className="text-mcq-gray-dark">
                Questions created by subject matter experts with industry experience
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Exam Categories Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Available Exam Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">NISM Certification</h3>
              <p className="mb-6 text-mcq-gray-dark">
                Chapter-wise tests with 10 questions each. 12 minutes time limit per test.
                Perfect for focused preparation on specific topics.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/login">Start Practicing</Link>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">GATE Exam</h3>
              <p className="mb-6 text-mcq-gray-dark">
                Choose between section-wise tests (10 questions, 20 minutes) or 
                full-length tests (65 questions, 3 hours) to suit your preparation needs.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/login">Start Practicing</Link>
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
