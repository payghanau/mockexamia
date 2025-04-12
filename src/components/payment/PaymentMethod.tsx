
import React, { useState } from "react";
import { ShieldCheck, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { paymentService } from "@/services/api";
import { useAuth } from "@/context/AuthContext";

interface PaymentMethodProps {
  examId: string;
  onPaymentSuccess: (paymentId: string) => void;
}

const PaymentMethod = ({ examId, onPaymentSuccess }: PaymentMethodProps) => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const initializePayment = async () => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "Please sign in to make a payment",
        action: (
          <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="h-5 w-5 text-red-600" />
          </div>
        ),
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create order
      const orderData = await paymentService.createPaymentOrder(examId);
      
      if (!orderData || !orderData.order) {
        throw new Error("Failed to create payment order");
      }

      // Initialize Razorpay
      const options = {
        key: "rzp_test_q8RGzKBRKwEH1J", // Replace with your actual Razorpay key
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "myturnindia",
        description: "Exam Payment",
        order_id: orderData.order.id,
        prefill: {
          email: user.email || '',
          name: user.user_metadata?.name || ''
        },
        handler: async function (response: any) {
          try {
            // Verify payment
            await paymentService.verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              examId
            });

            // Call success callback
            onPaymentSuccess(response.razorpay_payment_id);
            
            toast({
              title: "Payment Successful",
              description: "Your payment has been processed successfully",
            });
          } catch (error: any) {
            console.error("Payment verification failed:", error);
            toast({
              variant: "destructive",
              title: "Payment Verification Failed",
              description: error.message || "Please try again or contact support",
              action: (
                <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
              ),
            });
          }
        },
        theme: {
          color: "#2563EB",
        },
      };

      // Open Razorpay
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error: any) {
      console.error("Payment initialization failed:", error);
      toast({
        variant: "destructive",
        title: "Payment Failed",
        description: error.message || "Please try again later",
        action: (
          <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="h-5 w-5 text-red-600" />
          </div>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <h3 className="font-medium text-lg text-gray-800 mb-2">Payment Method</h3>
        <div className="border rounded-lg p-4 bg-white">
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={!isLoading ? initializePayment : undefined}
          >
            <img 
              src="https://cdn.razorpay.com/static/assets/logo/payment/razorpay.svg" 
              alt="Razorpay" 
              className="h-8" 
            />
            <div>
              <h4 className="font-medium">
                {isLoading ? "Initializing payment..." : "Razorpay Secure Checkout"}
              </h4>
              <p className="text-sm text-gray-500">Credit/Debit Card, UPI, Netbanking & more</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center text-sm text-gray-600 space-x-2">
        <ShieldCheck className="h-4 w-4 text-green-600" />
        <span>Your payment information is processed securely.</span>
      </div>
    </>
  );
};

export default PaymentMethod;
