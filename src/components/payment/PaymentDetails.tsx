
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";

type PlanInfo = {
  planName: string;
  amount: number;
  duration: string;
};

interface PaymentDetailsProps {
  planInfo: PlanInfo;
}

const PaymentDetails = ({ planInfo }: PaymentDetailsProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  
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
    <div className="bg-gray-50 flex flex-col space-y-4 p-6">
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
    </div>
  );
};

export default PaymentDetails;
