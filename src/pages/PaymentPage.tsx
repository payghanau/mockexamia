
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Exam } from "@/types";
import { ArrowLeft, CreditCard, IndianRupee, LockKeyhole, Shield } from "lucide-react";

const PaymentPage = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [loading, setLoading] = useState(true);
  const [exam, setExam] = useState<Exam | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  
  // Credit card form state
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  
  // UPI form state
  const [upiId, setUpiId] = useState("");
  
  useEffect(() => {
    document.title = "Payment - myturnindia";
    
    // In a real app, this would be an API call
    setTimeout(() => {
      // Mock exam data
      const mockExam: Exam = {
        id: examId || "",
        title: "NISM Series V-A: Mutual Fund Distributors",
        description: "Chapter 1-3: Introduction to Mutual Funds",
        category: "NISM",
        type: "chapter-wise",
        duration: 12,
        totalQuestions: 10,
        fee: 199,
        createdBy: "admin",
        createdAt: new Date(),
        isActive: true
      };
      
      setExam(mockExam);
      setLoading(false);
    }, 800);
  }, [examId]);

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate payment details
    if (paymentMethod === "card") {
      if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
        toast({
          variant: "destructive",
          title: "Missing information",
          description: "Please fill all card details",
        });
        return;
      }
    } else if (paymentMethod === "upi") {
      if (!upiId) {
        toast({
          variant: "destructive",
          title: "Missing information",
          description: "Please enter your UPI ID",
        });
        return;
      }
    }
    
    // Show processing toast
    toast({
      title: "Processing payment",
      description: "Please wait while we process your payment...",
    });
    
    // Simulate payment processing
    setTimeout(() => {
      // Success - in a real app this would depend on payment gateway response
      toast({
        title: "Payment successful!",
        description: "You can now access the exam.",
        variant: "default",
      });
      
      // Redirect to exam page
      setTimeout(() => {
        navigate(`/exam/${examId}`);
      }, 1500);
    }, 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-mcq-blue border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-mcq-gray-dark">Loading payment details...</p>
        </div>
      </div>
    );
  }

  if (!exam) {
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
            {/* Payment Form */}
            <div className="md:col-span-2">
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Complete Payment</CardTitle>
                  <CardDescription>
                    Choose your preferred payment method
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePaymentSubmit}>
                    <RadioGroup 
                      value={paymentMethod} 
                      onValueChange={setPaymentMethod}
                      className="mb-6"
                    >
                      <div className="flex items-center space-x-2 mb-4">
                        <RadioGroupItem value="card" id="payment-card" />
                        <Label htmlFor="payment-card" className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Credit/Debit Card
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="upi" id="payment-upi" />
                        <Label htmlFor="payment-upi" className="flex items-center">
                          <Shield className="h-4 w-4 mr-2" />
                          UPI Payment
                        </Label>
                      </div>
                    </RadioGroup>
                    
                    {paymentMethod === "card" ? (
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input
                            id="card-number"
                            placeholder="0000 0000 0000 0000"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="card-name">Cardholder Name</Label>
                          <Input
                            id="card-name"
                            placeholder="Name as on card"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="card-expiry">Expiry Date</Label>
                            <Input
                              id="card-expiry"
                              placeholder="MM/YY"
                              value={cardExpiry}
                              onChange={(e) => setCardExpiry(e.target.value)}
                            />
                          </div>
                          
                          <div className="grid gap-2">
                            <Label htmlFor="card-cvv">CVV</Label>
                            <Input
                              id="card-cvv"
                              placeholder="123"
                              type="password"
                              maxLength={3}
                              value={cardCvv}
                              onChange={(e) => setCardCvv(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <Label htmlFor="upi-id">UPI ID</Label>
                          <Input
                            id="upi-id"
                            placeholder="name@upi"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-6 flex items-center justify-center">
                      <Button type="submit" className="w-full md:w-auto">
                        <LockKeyhole className="mr-2 h-4 w-4" />
                        Pay ₹{exam.fee}
                      </Button>
                    </div>
                  </form>
                </CardContent>
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
                      <span className="text-mcq-blue">₹{exam.fee}</span>
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
