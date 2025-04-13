
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon, UserIcon, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot 
} from "@/components/ui/input-otp";

type AuthFormProps = {
  type: "login" | "register";
  userRole?: "user" | "admin";
  hideGoogleAuth?: boolean;
  useOtpVerification?: boolean;
};

const AuthForm = ({ 
  type, 
  userRole = "user", 
  hideGoogleAuth = false,
  useOtpVerification = false
}: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // OTP verification states
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState<string>("");
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login, register } = useAuth();

  // Generate a 6-digit OTP
  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    return otp;
  };

  const sendVerificationEmail = async () => {
    const newOtp = generateOTP();
    setIsEmailSent(true);
    
    try {
      // In a real app, this would call an API to send the email with OTP
      // For this demo, we're just showing it in the UI
      
      // Display a toast notification with the OTP
      toast({
        title: "Verification code sent",
        description: `Your OTP code is: ${newOtp}`,
      });
      
      console.log(`OTP code generated for ${email}: ${newOtp}`);
      
      // In a real implementation, we would make an API call here to send an email
      // containing the OTP to the user's email address
      // For example:
      // await fetch('/api/send-verification-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, otp: newOtp }),
      // });
      
    } catch (error) {
      console.error("Failed to send verification email:", error);
      toast({
        title: "Error",
        description: "Failed to send verification code. Please try again.",
        variant: "destructive",
      });
    }
  };

  const verifyOtp = async () => {
    setIsVerifying(true);
    
    try {
      // Check if entered OTP matches the generated one
      if (otp === generatedOtp) {
        // Proceed with registration
        await handleRegistration();
        
        toast({
          title: "Email verified",
          description: "Your email has been successfully verified.",
        });
      } else {
        throw new Error("Invalid verification code. Please try again.");
      }
    } catch (error) {
      toast({
        title: "Verification failed",
        description: error instanceof Error ? error.message : "Failed to verify email",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleRegistration = async () => {
    try {
      if (!email || !password || !name) {
        throw new Error("Please fill all required fields");
      }

      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      await register(email, password, name);
      navigate("/login");
      
      toast({
        title: "Registration successful",
        description: "Your account has been created. You can now log in.",
      });
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!email || !password) {
        throw new Error("Please fill all required fields");
      }

      if (type === "register") {
        if (useOtpVerification && !showOtpVerification) {
          await sendVerificationEmail();
          setShowOtpVerification(true);
          setIsLoading(false);
          return;
        } else if (!useOtpVerification) {
          await handleRegistration();
        }
      } else {
        try {
          await login(email, password);
          
          if (userRole === "admin" && email === "akashpayghan2001@gmail.com") {
            console.log("Admin logged in successfully");
            navigate("/admin");
          } else {
            navigate("/dashboard");
          }
        } catch (loginError) {
          console.error("Login error:", loginError);
          
          if (userRole === "admin" && email === "akashpayghan2001@gmail.com") {
            toast({
              title: "Admin Login",
              description: "Please create an admin account first with this email",
              variant: "destructive",
            });
          } else {
            throw loginError;
          }
        }
      }
      
    } catch (error) {
      console.error("Auth error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Authentication failed",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Registration form with OTP verification step
  if (type === "register" && showOtpVerification) {
    return (
      <Card className="w-full max-w-md mx-auto glass">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Verify Your Email
          </CardTitle>
          <CardDescription>
            We've sent a 6-digit verification code to {email}
          </CardDescription>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-md">
            <p className="text-sm text-gray-700 mb-1">For this demo purpose, your verification code is:</p>
            <p className="text-lg font-semibold text-blue-600">{generatedOtp}</p>
            <p className="text-xs text-gray-500 mt-1">In a real app, this would be sent to your email</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">Enter Verification Code</Label>
            <div className="flex justify-center py-4">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="text-center mt-2">
              <Button 
                variant="link" 
                size="sm" 
                className="text-blue-600"
                onClick={sendVerificationEmail}
                disabled={isEmailSent && !isVerifying}
              >
                Resend Code
              </Button>
            </div>
          </div>
          
          <Button 
            type="button" 
            className="w-full" 
            onClick={verifyOtp}
            disabled={otp.length !== 6 || isVerifying}
          >
            {isVerifying ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                Verifying...
              </div>
            ) : (
              "Verify & Create Account"
            )}
          </Button>
          
          <Button 
            type="button" 
            variant="ghost" 
            className="w-full"
            onClick={() => setShowOtpVerification(false)}
          >
            Back to Registration
          </Button>
        </CardContent>
      </Card>
    );
  }

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
          {type === "register" && (
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-mcq-gray-dark">
                  <UserIcon className="h-4 w-4" />
                </div>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          )}
          
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
              <>{userRole === "admin" ? "Admin Sign In" : type === "login" ? "Sign In" : "Continue"}</>
            )}
          </Button>
        </form>
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
