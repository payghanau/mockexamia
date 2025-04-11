
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthForm from "@/components/auth/AuthForm";
import { Award, Zap, ShieldCheck } from "lucide-react";
import DrifterStars from "@/components/ui/DrifterStars";

const Register = () => {
  useEffect(() => {
    document.title = "Register - myturnindia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <DrifterStars starCount={150} starColor="#4f7df0" speed={0.3} />
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left content */}
            <div className="lg:col-span-2 text-left space-y-6">
              <div className="inline-block apple-glass p-3 rounded-full mb-6 bg-white/80 backdrop-blur-sm shadow-sm">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
                Create Your Account
              </h1>
              <p className="text-gray-700 text-lg">
                Join thousands of students preparing for their exams with personalized study plans and expert guidance.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Accelerate Your Preparation</h3>
                    <p className="text-gray-600">Access to comprehensive practice tests and analytics</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Secure & Personalized</h3>
                    <p className="text-gray-600">Your data is secure and your learning path personalized</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-gray-700">
                  Already have an account?{" "}
                  <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
            
            {/* Right content - Registration form */}
            <div className="lg:col-span-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-1">Get Started</h2>
                  <p className="text-gray-600">Fill out the form below to create your account</p>
                </div>
                <AuthForm type="register" hideGoogleAuth={true} useOtpVerification={true} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
