
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import GoogleAuth from "./GoogleAuth";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";

type AuthFormProps = {
  type: "login" | "register";
  userRole?: "user" | "admin";
};

const AuthForm = ({ type, userRole = "user" }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login, register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validation
      if (!email || !password) {
        throw new Error("Please fill all required fields");
      }

      if (type === "register" && password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      if (type === "login") {
        await login(email, password);
        // Navigate based on role after successful login
        if (userRole === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      } else {
        await register(email, password);
        navigate("/dashboard");
      }
      
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Authentication failed",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto glass">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          {userRole === "admin" ? "Admin Access" : type === "login" ? "Sign In" : "Create an account"}
        </CardTitle>
        <CardDescription>
          {userRole === "admin" 
            ? "Enter your admin credentials to access the dashboard"
            : type === "login"
              ? "Enter your credentials to access your account"
              : "Fill out the form below to create your account"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-mcq-gray-dark">
                <MailIcon className="h-4 w-4" />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-mcq-gray-dark">
                <LockIcon className="h-4 w-4" />
              </div>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10"
                autoComplete={type === "login" ? "current-password" : "new-password"}
                required
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-mcq-gray-dark"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
              </div>
            </div>
          </div>

          {type === "register" && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-mcq-gray-dark">
                  <LockIcon className="h-4 w-4" />
                </div>
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10"
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>
          )}

          {type === "login" && (
            <div className="flex items-center justify-end">
              <a 
                href="#" 
                className="text-sm font-medium text-mcq-blue hover:text-mcq-blue-dark transition-base"
              >
                Forgot password?
              </a>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                {userRole === "admin" 
                  ? "Signing in as admin..." 
                  : type === "login" 
                    ? "Signing in..." 
                    : "Creating account..."}
              </div>
            ) : (
              <>{userRole === "admin" ? "Admin Sign In" : type === "login" ? "Sign In" : "Create Account"}</>
            )}
          </Button>
        </form>

        {userRole !== "admin" && (
          <>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <GoogleAuth type={type} />
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        {userRole !== "admin" && (
          <p className="text-sm text-muted-foreground">
            {type === "login" ? "Don't have an account? " : "Already have an account? "}
            <a
              href={type === "login" ? "/register" : "/login"}
              className="font-medium text-mcq-blue hover:text-mcq-blue-dark transition-base"
            >
              {type === "login" ? "Sign up" : "Sign in"}
            </a>
          </p>
        )}
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
