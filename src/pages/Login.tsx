
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthForm from "@/components/auth/AuthForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  useEffect(() => {
    document.title = "Sign In - myturnindia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center items-center px-4 pt-24 pb-16">
        <div className="w-full max-w-lg mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-3">Welcome Back</h1>
          <p className="text-mcq-gray-dark">
            Sign in to your account to continue your preparation journey
          </p>
        </div>
        
        <Tabs defaultValue="user" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="user">User Login</TabsTrigger>
            <TabsTrigger value="admin">Admin Login</TabsTrigger>
          </TabsList>
          
          <TabsContent value="user">
            <AuthForm type="login" userRole="user" />
          </TabsContent>
          
          <TabsContent value="admin">
            <AuthForm type="login" userRole="admin" />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
