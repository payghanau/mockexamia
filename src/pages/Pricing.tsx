
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing - myturnindia";
  }, []);

  const pricingPlans = [
    {
      name: "NISM Basic",
      price: 499,
      description: "Essential practice for NISM certification aspirants",
      features: [
        "5 chapter-wise tests for any one NISM module",
        "Basic performance analytics",
        "Access for 30 days",
        "Email support"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "NISM Pro",
      price: 999,
      description: "Comprehensive preparation for NISM certification",
      features: [
        "All chapter-wise tests for any two NISM modules",
        "Detailed performance analytics",
        "Access for 60 days",
        "Email & chat support",
        "Personalized improvement suggestions"
      ],
      popular: true,
      buttonText: "Best Value"
    },
    {
      name: "GATE Basic",
      price: 1499,
      description: "Essential practice for GATE aspirants",
      features: [
        "20 section-wise tests for any one GATE subject",
        "2 full-length mock tests",
        "Basic performance analytics",
        "Access for 60 days",
        "Email support"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "GATE Pro",
      price: 2999,
      description: "Comprehensive preparation for GATE exam",
      features: [
        "All section-wise tests for any one GATE subject",
        "5 full-length mock tests",
        "Detailed performance analytics",
        "Access for 180 days",
        "Email & chat support",
        "Personalized improvement suggestions",
        "Virtual study groups"
      ],
      popular: false,
      buttonText: "Get Started"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-white to-blue-50 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan to help you prepare for your exams and achieve certification success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-sm border ${plan.popular ? 'border-mcq-blue ring-2 ring-mcq-blue/20' : 'border-gray-100'} overflow-hidden flex flex-col`}
              >
                {plan.popular && (
                  <div className="bg-mcq-blue text-white py-1 px-4 text-center text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">₹{plan.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-mcq-blue shrink-0 mr-2" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? 'bg-mcq-blue hover:bg-blue-600' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <Link to="/register">{plan.buttonText}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Offerings */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Additional Test Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">Individual NISM Tests</h3>
                <p className="text-gray-600 mb-4">
                  Purchase individual chapter-wise tests for any NISM module
                </p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-medium">₹199 per test</span>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/dashboard">Browse Tests</Link>
                  </Button>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-mcq-blue shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Access for 7 days</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-mcq-blue shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Basic performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-mcq-blue shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">2 attempts allowed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">Individual GATE Tests</h3>
                <p className="text-gray-600 mb-4">
                  Purchase individual section or full-length tests for any GATE subject
                </p>
                <div className="flex flex-col space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">₹299 per section test</span>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/dashboard">Browse Tests</Link>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">₹499 per full test</span>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/dashboard">Browse Tests</Link>
                    </Button>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-mcq-blue shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Access for 15 days</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-mcq-blue shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Detailed performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-mcq-blue shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">3 attempts allowed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">Can I switch between different NISM modules?</h3>
                <p className="text-gray-600">
                  For NISM Pro plan, you can select any two modules at the time of purchase. Additional modules can be purchased separately.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">Are there any discounts for students?</h3>
                <p className="text-gray-600">
                  Yes, students can avail a 15% discount on all plans by verifying their student status through their institution email.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">How are the tests updated?</h3>
                <p className="text-gray-600">
                  All tests are regularly updated to reflect the latest exam patterns and syllabus changes. Updates are included in your subscription.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">Can I request a refund?</h3>
                <p className="text-gray-600">
                  We offer a 7-day money-back guarantee if you're not satisfied with our service and haven't attempted more than 2 tests.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For institutional purchases or custom requirements, contact our team for special pricing and tailored solutions
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
