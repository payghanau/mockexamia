
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { examService, paymentService } from "@/services/api";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Shield, CreditCard, CheckCircle } from "lucide-react";
import { ExamRow } from "@/types/supabase";

declare global {
  interface Window {
    Razorpay: any;
  }
}

enum PaymentStatus {
  LOADING = "loading",
  PENDING = "pending",
  PROCESSING = "processing",
  COMPLETED = "completed",
  FAILED = "failed"
}

const PaymentPage = () => {
  const { examId } = useParams<{ examId: string }>();
  const [exam, setExam] = useState<ExamRow | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>(PaymentStatus.LOADING);
  const [isLoadingRazorpay, setIsLoadingRazorpay] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Fetch exam details
  useEffect(() => {
    const fetchExam = async () => {
      try {
        if (!examId) return;
        const examData = await examService.getExamById(examId);
        setExam(examData);
        
        // Check if payment already made
        const paymentData = await paymentService.getPaymentStatus(examId);
        
        if (paymentData.status === "completed") {
          setPaymentStatus(PaymentStatus.COMPLETED);
        } else {
          setPaymentStatus(PaymentStatus.PENDING);
        }
      } catch (error) {
        console.error("Error fetching exam:", error);
        setPaymentStatus(PaymentStatus.FAILED);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load exam details. Please try again.",
        });
      }
    };

    fetchExam();
  }, [examId, toast]);

  // Load Razorpay script
  useEffect(() => {
    if (paymentStatus !== PaymentStatus.PENDING) return;

    const loadRazorpayScript = async () => {
      setIsLoadingRazorpay(true);
      
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => {
          resolve(true);
          setIsLoadingRazorpay(false);
        };
        document.body.appendChild(script);
      });
    };

    if (!window.Razorpay) {
      loadRazorpayScript();
    } else {
      setIsLoadingRazorpay(false);
    }
  }, [paymentStatus]);

  const handlePayment = async () => {
    try {
      if (!exam) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Exam details not found. Please try again.",
        });
        return;
      }
      
      setIsProcessing(true);
      
      // For demo purposes, we'll create a mock order
      // In production, you would use the Razorpay endpoint
      const order = await paymentService.createPaymentOrder(examId!);
      
      if (!order.id) {
        throw new Error("Failed to create payment order");
      }
      
      const options = {
        key: "rzp_test_yourkeyhere", // Replace with actual Razorpay key for production
        amount: exam.fee * 100, // Razorpay expects amount in paise
        currency: "INR",
        name: "MCQ Pro",
        description: `Payment for ${exam.title}`,
        order_id: order.id,
        handler: async (response: any) => {
          try {
            // Verify payment
            const data = await paymentService.verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });
            
            if (data.success) {
              setPaymentStatus(PaymentStatus.COMPLETED);
              toast({
                title: "Payment Successful",
                description: "You can now access the exam.",
              });
              
              // Navigate to exam page after successful payment
              setTimeout(() => {
                navigate(`/exam/${examId}`);
              }, 2000);
            } else {
              setPaymentStatus(PaymentStatus.FAILED);
              toast({
                variant: "destructive",
                title: "Payment Verification Failed",
                description: "Please contact support if payment was deducted.",
              });
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            setPaymentStatus(PaymentStatus.FAILED);
            toast({
              variant: "destructive",
              title: "Payment Processing Error",
              description: "Please contact support if payment was deducted.",
            });
          }
        },
        prefill: {
          name: user?.user_metadata?.name || "",
          email: user?.email || "",
        },
        theme: {
          color: "#3B82F6",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      
      razorpay.on('payment.failed', (response: any) => {
        console.error("Payment failed:", response.error);
        setPaymentStatus(PaymentStatus.FAILED);
        toast({
          variant: "destructive",
          title: "Payment Failed",
          description: response.error.description,
        });
      });
    } catch (error) {
      console.error("Payment initiation error:", error);
      setPaymentStatus(PaymentStatus.FAILED);
      toast({
        variant: "destructive",
        title: "Payment Error",
        description: "Failed to initiate payment. Please try again.",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (paymentStatus === PaymentStatus.LOADING) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg font-medium">Loading payment details...</p>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Exam Payment</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="col-span-1 md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{exam?.title || "Exam"}</CardTitle>
              <CardDescription>
                Please review the exam details before making the payment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Exam Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Type</p>
                    <p className="font-medium">{exam?.type || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Questions</p>
                    <p className="font-medium">{exam?.total_questions || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">{exam?.duration || "N/A"} minutes</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="text-lg font-medium mb-4">Fee Details</h3>
                <div className="flex justify-between items-center">
                  <span>Exam Fee</span>
                  <span className="font-semibold">₹{exam?.fee || 0}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span>GST (18%)</span>
                  <span className="font-semibold">₹{exam ? (exam.fee * 0.18).toFixed(2) : 0}</span>
                </div>
                <div className="flex justify-between items-center mt-4 border-t pt-2">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-lg">₹{exam ? (exam.fee * 1.18).toFixed(2) : 0}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {paymentStatus === PaymentStatus.PENDING && (
                <Button 
                  className="w-full" 
                  onClick={handlePayment}
                  disabled={isLoadingRazorpay || isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : isLoadingRazorpay ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Loading Payment Gateway...
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Pay Now (₹{exam?.fee || 0})
                    </>
                  )}
                </Button>
              )}
              
              {paymentStatus === PaymentStatus.COMPLETED && (
                <div className="w-full text-center">
                  <div className="flex items-center justify-center mb-2 text-green-500">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span className="font-medium">Payment Completed</span>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => navigate(`/exam/${examId}`)}
                  >
                    Start Exam
                  </Button>
                </div>
              )}
              
              {paymentStatus === PaymentStatus.FAILED && (
                <div className="w-full">
                  <p className="text-red-500 text-center mb-2">Payment failed. Please try again.</p>
                  <Button 
                    className="w-full" 
                    onClick={handlePayment}
                    disabled={isLoadingRazorpay || isProcessing}
                  >
                    Retry Payment
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
        
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Secure Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                <div>
                  <h4 className="font-medium">100% Secure Payments</h4>
                  <p className="text-sm text-gray-500">All major credit & debit cards accepted</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                <div>
                  <h4 className="font-medium">Easy Refunds</h4>
                  <p className="text-sm text-gray-500">In case of technical issues, get a full refund</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-5 w-5 mr-2 text-primary" />
                <div>
                  <h4 className="font-medium">Instant Access</h4>
                  <p className="text-sm text-gray-500">Start your exam immediately after payment</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                If you're facing any issues with payment or have questions, 
                our support team is available 24/7 to assist you.
              </p>
              <Button variant="outline" className="w-full" onClick={() => navigate('/contact')}>
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
