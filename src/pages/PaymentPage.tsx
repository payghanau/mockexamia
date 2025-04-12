
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CreditCard, ArrowLeft, ShieldCheck } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";

// Replace with actual implementation when required
declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const { examId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  
  // Get plan info from location state with fallback values
  const planInfo = location.state || {
    planName: "Standard Plan",
    amount: 599,
    duration: "monthly"
  };

  useEffect(() => {
    document.title = `Payment for ${planInfo.planName} - myturnindia`;
    
    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [planInfo.planName]);
  
  const handlePayment = async () => {
    try {
      setLoading(true);
      
      // Mock implementation - replace with actual API call
      const orderData = {
        id: "order_" + Math.random().toString(36).substring(2, 15),
        amount: planInfo.amount * 100, // Convert to smallest currency unit
        currency: "INR",
        key_id: "rzp_test_YourTestKey", // Replace with actual key in production
      };

      // Create Razorpay instance with more options enabled
      const razorpay = new window.Razorpay({
        key: orderData.key_id,
        amount: orderData.amount,
        currency: "INR",
        name: "myturnindia",
        description: `${planInfo.planName} - ${planInfo.duration} subscription`,
        order_id: orderData.id,
        handler: function(response: any) {
          // Handle successful payment
          handlePaymentSuccess(response);
        },
        prefill: {
          name: user?.email ? user.email.split('@')[0] : "",
          email: user?.email || "",
        },
        theme: {
          color: "#3B82F6"
        },
        // Enable all payment methods
        modal: {
          confirm_close: true,
          ondismiss: function() {
            setPaymentInitiated(false);
            setLoading(false);
          }
        },
        // Show all payment options
        methods: {
          netbanking: true,
          card: true,
          upi: true,
          wallet: true,
          emi: true,
          cardless_emi: true,
          paylater: true
        }
      });
      
      razorpay.open();
      setPaymentInitiated(true);
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment Error",
        description: "Failed to initialize payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handlePaymentSuccess = async (response: any) => {
    try {
      setLoading(true);
      
      // Mock API call - replace with actual implementation
      const verificationResponse = {
        success: true,
        message: "Payment verified successfully"
      };
      
      if (verificationResponse.success) {
        toast({
          title: "Payment Successful",
          description: "Your subscription has been activated.",
        });
        
        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        toast({
          title: "Payment Verification Failed",
          description: "Please contact support.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      toast({
        title: "Verification Error",
        description: "Failed to verify payment. Please contact support.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/pricing")}
            className="mb-6 text-gray-700 hover:text-blue-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Pricing
          </Button>
          
          <Card className="overflow-hidden border-gray-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Complete Your Purchase</CardTitle>
                  <CardDescription className="text-blue-100 mt-1">
                    Secure payment powered by Razorpay
                  </CardDescription>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-lg text-gray-800 mb-2">Order Summary</h3>
                  <div className="flex justify-between py-2 border-b border-blue-100">
                    <span className="text-gray-600">Plan</span>
                    <span className="font-medium text-gray-800">{planInfo.planName}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-blue-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium text-gray-800">{planInfo.duration}</span>
                  </div>
                  <div className="flex justify-between py-2 text-lg">
                    <span className="font-medium text-gray-800">Total Amount</span>
                    <span className="font-bold text-blue-700">₹{planInfo.amount}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg text-gray-800 mb-2">Payment Method</h3>
                  <div className="border rounded-lg p-4 bg-white">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://cdn.razorpay.com/static/assets/logo/payment/razorpay.svg" 
                        alt="Razorpay" 
                        className="h-8" 
                      />
                      <div>
                        <h4 className="font-medium">Razorpay Secure Checkout</h4>
                        <p className="text-sm text-gray-500">Credit/Debit Card, UPI, Netbanking & more</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  <span>Your payment information is processed securely.</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 flex flex-col space-y-4 p-6">
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                onClick={handlePayment}
                disabled={loading || paymentInitiated}
              >
                {loading ? "Processing..." : `Pay ₹${planInfo.amount}`}
              </Button>
              
              <p className="text-xs text-center text-gray-500">
                By proceeding, you agree to our Terms of Service and Privacy Policy.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
