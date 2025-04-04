
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X, CreditCard, Shield, Clock, ArrowRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  useEffect(() => {
    document.title = "Pricing - myturnindia";
  }, []);

  const plans = [
    {
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
      popular: false
    },
    {
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
      popular: true
    },
    {
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
      popular: false
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-primary-light pt-24 pb-16 px-4 apple-soft-gradient">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block apple-glass p-2 rounded-full mb-6">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Simple, Transparent Pricing</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your exam preparation journey
            </p>
            
            <div className="flex items-center justify-center mt-8 mb-4 apple-glass px-3 py-2 rounded-full inline-flex">
              <span className={`mr-3 text-lg ${!annual ? 'font-medium text-gray-800' : 'text-gray-600'}`}>Monthly</span>
              <Switch 
                checked={annual} 
                onCheckedChange={setAnnual} 
                className="data-[state=checked]:bg-primary"
              />
              <span className={`ml-3 text-lg ${annual ? 'font-medium text-gray-800' : 'text-gray-600'}`}>Annual <span className="text-xs font-medium px-2 py-1 bg-primary text-white rounded-full">Save 20%</span></span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="py-16 px-4 bg-white relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`overflow-hidden transition-all duration-300 hover:shadow-xl border-gray-200 apple-card apple-card-hover ${
                    plan.popular ? 'ring-2 ring-primary relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-800">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">₹{annual ? plan.annual : plan.monthly}</span>
                      <span className="text-gray-600 ml-2">{annual ? '/year' : '/month'}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">What's included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {plan.limitations.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Limitations:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start">
                              <X className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button 
                      asChild 
                      className={`w-full mt-4 apple-button ${
                        plan.buttonVariant === 'default' 
                          ? 'bg-primary hover:bg-primary-dark' 
                          : 'border-primary text-primary hover:bg-primary-light'
                      }`}
                      variant={plan.buttonVariant as "default" | "outline"}
                    >
                      <Link to="/register">{plan.buttonText}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 px-4 apple-soft-gradient">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">All Plans Include</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="apple-card p-6 rounded-xl flex flex-col items-center text-center apple-card-hover">
                <div className="h-12 w-12 rounded-full bg-primary-light flex items-center justify-center mb-4 apple-glass">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">High-Quality Content</h3>
                <p className="text-gray-700">
                  Expert-crafted questions that match the actual exam pattern and difficulty level
                </p>
              </div>
              
              <div className="apple-card p-6 rounded-xl flex flex-col items-center text-center apple-card-hover">
                <div className="h-12 w-12 rounded-full bg-primary-light flex items-center justify-center mb-4 apple-glass">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure Platform</h3>
                <p className="text-gray-700">
                  Robust security measures to protect your data and ensure a fair testing environment
                </p>
              </div>
              
              <div className="apple-card p-6 rounded-xl flex flex-col items-center text-center apple-card-hover">
                <div className="h-12 w-12 rounded-full bg-primary-light flex items-center justify-center mb-4 apple-glass">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Regular Updates</h3>
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
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="apple-card hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Have more questions about our pricing or plans?
              </p>
              <Button asChild className="apple-button bg-primary hover:bg-primary-dark">
                <Link to="/contact" className="inline-flex items-center">
                  Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="py-16 px-4 apple-soft-gradient">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block apple-glass p-3 rounded-full mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Money-Back Guarantee</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              We're confident in the quality of our platform. If you're not satisfied with our services, we offer a 7-day money-back guarantee.
            </p>
            <Button asChild variant="outline" className="apple-button border-primary text-primary hover:bg-primary-light">
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
