
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X, CreditCard, Shield, Clock, ArrowRight, Gem, Users, RotateCcw } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Toggle, toggleVariants } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { paymentService } from "@/services/api";

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Pricing - myturnindia";
  }, []);

  const plans = [
    {
      id: "free",
      name: "Free Trial",
      description: "Basic access to sample tests",
      monthly: 0,
      annual: 0,
      features: [
        "5 free mock tests",
        "Basic performance analytics",
        "Limited question bank access",
        "Email support"
      ],
      limitations: [
        "No detailed explanations",
        "No personalized feedback",
        "Limited test history",
        "No premium content"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline",
      popular: false,
      icon: <Users className="h-6 w-6 text-blue-500" />
    },
    {
      id: "standard",
      name: "Standard",
      description: "Perfect for serious exam preparation",
      monthly: 599,
      annual: 5990,
      features: [
        "All NISM & GATE mock tests",
        "Detailed performance analytics",
        "Complete question bank access",
        "Detailed explanations for all questions",
        "Priority email support",
        "3 months access"
      ],
      limitations: [
        "No personalized feedback",
        "No private doubt solving"
      ],
      buttonText: "Get Started",
      buttonVariant: "default",
      popular: true,
      icon: <Gem className="h-6 w-6 text-blue-600" />
    },
    {
      id: "premium",
      name: "Premium",
      description: "Comprehensive preparation with expert guidance",
      monthly: 999,
      annual: 9990,
      features: [
        "Everything in Standard",
        "Personalized feedback",
        "One-on-one doubt solving sessions",
        "Performance improvement tips",
        "Previous years' solved papers",
        "6 months access",
        "Exam strategy guides"
      ],
      limitations: [],
      buttonText: "Upgrade to Premium",
      buttonVariant: "default",
      popular: false,
      icon: <Gem className="h-6 w-6 text-indigo-700" />
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll get credit towards future billing."
    },
    {
      question: "Is there a refund policy?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with our services. After 7 days, refunds are handled on a case-by-case basis."
    },
    {
      question: "Can I access all exams with any subscription?",
      answer: "The Standard and Premium plans give you access to all NISM and GATE mock tests. The Free Trial provides limited access to sample tests only."
    },
    {
      question: "How long can I access the content after purchase?",
      answer: "Standard plan provides 3 months of access, while Premium gives you 6 months. You can always extend by renewing your subscription."
    }
  ];

  const handleBillingToggle = (value: boolean) => {
    setAnnual(value);
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handlePurchase = async (plan: any) => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to purchase a subscription",
        variant: "destructive"
      });
      navigate("/login", { state: { from: "/pricing", plan: plan.id } });
      return;
    }

    try {
      if (plan.id === "free") {
        toast({
          title: "Free Plan Activated",
          description: "You can now access free mock tests"
        });
        navigate("/dashboard");
        return;
      }

      // Example integration with payment service
      // In a real implementation, you would create a payment order
      // and redirect to payment page or show payment modal
      toast({
        title: "Processing your order",
        description: "Please wait while we set up your payment"
      });
      
      // Redirect to payment page with plan details
      navigate(`/payment/${plan.id}`, { 
        state: { 
          planName: plan.name,
          amount: annual ? plan.annual : plan.monthly,
          duration: annual ? "annual" : "monthly"
        } 
      });
    } catch (error) {
      console.error("Purchase error:", error);
      toast({
        title: "Purchase Failed",
        description: "There was an error processing your purchase. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block apple-glass p-3 rounded-full mb-6 bg-white/80 backdrop-blur-sm shadow-sm">
              <CreditCard className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
              Choose Your Perfect Plan
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Invest in your future with our comprehensive exam preparation plans
            </p>
            
            <div className="flex flex-col items-center justify-center mt-8 mb-4">
              <div className="bg-white/80 backdrop-blur-sm shadow-sm rounded-full p-1 mb-4">
                <ToggleGroup type="single" value={annual ? "annual" : "monthly"} className="border rounded-full">
                  <ToggleGroupItem value="monthly" onClick={() => setAnnual(false)}
                    className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${!annual ? 'bg-blue-600 text-white' : 'text-gray-700'}`}>
                    Monthly
                  </ToggleGroupItem>
                  <ToggleGroupItem value="annual" onClick={() => setAnnual(true)}
                    className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${annual ? 'bg-blue-600 text-white' : 'text-gray-700'}`}>
                    Annual
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              {annual && (
                <div className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Save 20% with annual billing
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="py-16 px-4 relative -mt-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`overflow-hidden transition-all duration-300 hover:shadow-xl border-gray-200 ${
                    selectedPlan === plan.id ? 'ring-2 ring-blue-500 transform scale-[1.02]' : 'hover:scale-[1.01]'
                  } ${
                    plan.popular ? 'relative z-10' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="bg-gradient-to-b from-gray-50 to-white border-b">
                    <div className="flex items-center mb-2">
                      <div className="rounded-full bg-blue-50 p-2 mr-3">
                        {plan.icon}
                      </div>
                      <CardTitle className="text-2xl text-gray-800">{plan.name}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                    <div className="mt-4 flex items-end">
                      <span className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                        ₹{annual ? plan.annual : plan.monthly}
                      </span>
                      <span className="text-gray-600 ml-2">
                        {plan.monthly > 0 ? (annual ? '/year' : '/month') : 'Free'}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        What's included:
                      </h4>
                      <ul className="space-y-2 pl-6">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <div className="rounded-full bg-green-100 p-1 mr-2 mt-0.5 flex-shrink-0">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {plan.limitations.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                          <X className="h-4 w-4 text-red-500 mr-2" />
                          Limitations:
                        </h4>
                        <ul className="space-y-2 pl-6">
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start text-gray-700">
                              <div className="rounded-full bg-red-100 p-1 mr-2 mt-0.5 flex-shrink-0">
                                <X className="h-3 w-3 text-red-600" />
                              </div>
                              <span>{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="pt-4 pb-6">
                    <Button 
                      className={`w-full transition-all ${
                        plan.buttonVariant === 'default' 
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white' 
                          : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                      } ${selectedPlan === plan.id ? 'animate-pulse' : ''}`}
                      variant={plan.buttonVariant as "default" | "outline"}
                      onClick={() => handlePurchase(plan)}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
              Every Plan Includes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">High-Quality Content</h3>
                <p className="text-gray-700">
                  Expert-crafted questions that match the actual exam pattern and difficulty level
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Secure Platform</h3>
                <p className="text-gray-700">
                  Robust security measures to protect your data and ensure a fair testing environment
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Regular Updates</h3>
                <p className="text-gray-700">
                  Continuous updates to the question bank and features based on the latest exam patterns
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300 border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Have more questions about our pricing or plans?
              </p>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                <Link to="/contact" className="inline-flex items-center">
                  Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white p-3 rounded-full mb-6 shadow-sm">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
              100% Satisfaction Guarantee
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              We're confident in the quality of our platform. If you're not satisfied with our services, we offer a 7-day money-back guarantee.
            </p>
            <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link to="/refund-policy">View Refund Policy</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
