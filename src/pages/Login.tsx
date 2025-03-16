
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthForm from "@/components/auth/AuthForm";

const Login = () => {
  useEffect(() => {
    document.title = "Sign In - MockExamia";
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
        <AuthForm type="login" />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
