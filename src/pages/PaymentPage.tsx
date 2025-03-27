
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Exam } from "@/types";
import { ArrowLeft, IndianRupee, Info, LockKeyhole, Shield } from "lucide-react";
import { examService, paymentService } from "@/services/api";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Declare Razorpay at global level
declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [processingPayment, setProcessingPayment] = useState(false);
  
  // Fetch exam details
  const { data: exam, isLoading, error } = useQuery({
    queryKey: ['exam', examId],
    queryFn: () => examId ? examService.getExamById(examId) : Promise.reject('No exam ID'),
    enabled: !!examId
  });

  // Create payment order mutation
  const createOrderMutation = useMutation({
    mutationFn: () => paymentService.createPaymentOrder(examId!),
    onSuccess: (data) => {
      if (data.success) {
        initializeRazorpayCheckout(data.order, data.key_id);
      }
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Payment Failed",
        description: error.response?.data?.message || "Could not initiate payment"
      });
      setProcessingPayment(false);
    }
  });

  // Verify payment mutation
  const verifyPaymentMutation = useMutation({
    mutationFn: (paymentData: any) => paymentService.verifyPayment(paymentData),
    onSuccess: (data) => {
      if (data.success) {
        toast({
          title: "Payment Successful!",
          description: "You can now access the exam.",
        });
        
        // Redirect to exam page
        setTimeout(() => {
          navigate(`/exam/${examId}`);
        }, 1500);
      } else {
        toast({
          variant: "destructive",
          title: "Payment Verification Failed",
          description: data.message || "Something went wrong"
        });
      }
      setProcessingPayment(false);
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Payment Verification Failed",
        description: error.response?.data?.message || "Could not verify payment"
      });
      setProcessingPayment(false);
    }
  });

  useEffect(() => {
    document.title = "Payment - myturnindia";
    
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const initializeRazorpayCheckout = (order: any, keyId: string) => {
    const options = {
      key: keyId,
      amount: order.amount,
      currency: order.currency,
      name: "myturnindia",
      description: `Payment for ${exam?.title || 'Exam'}`,
      order_id: order.id,
      handler: function (response: any) {
        handlePaymentSuccess(response);
      },
      prefill: {
        name: localStorage.getItem('userName') || '',
        email: localStorage.getItem('userEmail') || '',
        contact: ""
      },
      notes: {
        examId: examId
      },
      theme: {
        color: "#3399cc"
      },
      modal: {
        ondismiss: function() {
          setProcessingPayment(false);
          toast({
            title: "Payment Cancelled",
            description: "You can try again when you're ready.",
          });
        }
      }
    };

    try {
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Failed to initialize Razorpay:", error);
      toast({
        variant: "destructive",
        title: "Payment Failed",
        description: "Could not initialize payment gateway. Please try again.",
      });
      setProcessingPayment(false);
    }
  };

  const handlePaymentSuccess = (response: any) => {
    // Verify the payment with our server
    verifyPaymentMutation.mutate({
      razorpay_order_id: response.razorpay_order_id,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature
    });
  };

  const handleProceedToPayment = () => {
    if (!examId) return;
    
    setProcessingPayment(true);
    
    // Create the payment order
    toast({
      title: "Initializing Payment",
      description: "Please wait while we connect to the payment gateway...",
    });
    
    createOrderMutation.mutate();
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-mcq-blue border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-mcq-gray-dark">Loading payment details...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !exam) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-red-500 mb-4">Exam not found</p>
          <Button asChild>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <main className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link to="/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Payment Details */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Complete Payment</CardTitle>
                  <CardDescription>
                    Secure payment via Razorpay
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      You'll be redirected to Razorpay's secure payment page to complete your transaction.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="rounded-lg bg-blue-50 p-4 text-blue-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Exam Fee</span>
                      <span className="text-lg font-bold flex items-center">
                        <IndianRupee className="h-4 w-4 mr-1" /> {exam.fee}
                      </span>
                    </div>
                    
                    <p className="text-sm text-blue-700">
                      This is a one-time payment for access to {exam.title}
                    </p>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Shield className="h-4 w-4 mr-2" />
                      Secure payment processed by Razorpay
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <LockKeyhole className="h-4 w-4 mr-2" />
                      Your payment information is encrypted
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleProceedToPayment} 
                    className="w-full" 
                    disabled={processingPayment}
                  >
                    {processingPayment ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2"></span>
                        Processing...
                      </>
                    ) : (
                      <>Proceed to Payment</>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Order Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-mcq-gray-dark">Exam</span>
                    <span className="font-medium">{exam.title}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-mcq-gray-dark">Type</span>
                    <span>{exam.type}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-mcq-gray-dark">Questions</span>
                    <span>{exam.totalQuestions}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-mcq-gray-dark">Duration</span>
                    <span>{exam.duration} minutes</span>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-mcq-blue flex items-center">
                        <IndianRupee className="h-4 w-4 mr-1" /> {exam.fee}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 text-xs text-mcq-gray-dark rounded-b-lg">
                  <div className="flex items-center">
                    <Shield className="h-3 w-3 mr-1" />
                    All payments are secure and encrypted
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaymentPage;
