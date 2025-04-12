
import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import PaymentCard from "@/components/payment/PaymentCard";

// Type definitions for Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const { examId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
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
          
          <PaymentCard planInfo={planInfo} examId={examId} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
