
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthForm from "@/components/auth/AuthForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, BookOpen, ShieldCheck } from "lucide-react";
import DrifterStars from "@/components/ui/DrifterStars";

const Login = () => {
  useEffect(() => {
    document.title = "Sign In - myturnindia";
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
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-gray-700 text-lg">
                Sign in to your account to continue your preparation journey and access your personalized dashboard.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Track Your Progress</h3>
                    <p className="text-gray-600">Monitor your performance and improvement areas</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Access All Mock Tests</h3>
                    <p className="text-gray-600">Resume your preparation from where you left off</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-gray-700">
                  New to myturnindia?{" "}
                  <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
            
            {/* Right content - Login form */}
            <div className="lg:col-span-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100">
                <Tabs defaultValue="user" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="user" className="py-3">User Login</TabsTrigger>
                    <TabsTrigger value="admin" className="py-3">Admin Login</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="user">
                    <AuthForm type="login" userRole="user" hideGoogleAuth={true} />
                  </TabsContent>
                  
                  <TabsContent value="admin">
                    <AuthForm type="login" userRole="admin" hideGoogleAuth={true} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
