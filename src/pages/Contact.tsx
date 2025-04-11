
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact Us - myturnindia";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contact form submission logic would go here
    console.log("Form submitted");
    
    // Display success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
      action: (
        <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="h-5 w-5 text-green-600" />
        </div>
      ),
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block apple-glass p-3 rounded-full mb-6 bg-white/80 backdrop-blur-sm shadow-sm">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
              We're Here to Help
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Have questions about our exam preparation services? Our team is ready to assist you.
            </p>
          </div>
        </div>

        {/* Contact Forms and Info Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
                <p className="text-gray-700 mb-8">
                  Fill out the form below, and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        required
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help you?"
                      required
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg w-full"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg py-3 text-white gap-2">
                    Send Message <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Information</h2>
                <p className="text-gray-700 mb-8">
                  Reach out to us directly or visit our office during business hours.
                </p>

                <div className="space-y-6">
                  <Card className="overflow-hidden border-gray-100 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                          <Phone className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                          <p className="text-gray-700">+91 98765 43210</p>
                          <p className="text-gray-700">+91 12345 67890</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-gray-100 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                          <p className="text-gray-700">info@myturnindia.com</p>
                          <p className="text-gray-700">support@myturnindia.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-gray-100 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Us</h3>
                          <p className="text-gray-700">123 Education Street, Tech Park</p>
                          <p className="text-gray-700">Bangalore, Karnataka 560001</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-gray-100 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Hours</h3>
                          <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                          <p className="text-gray-700">Sunday: Closed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Find Us</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 border border-gray-100">
              {/* Placeholder for a map. In a real application, you would integrate Google Maps or another map service here */}
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <p className="text-gray-800 text-lg font-medium">Interactive Map Loading...</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Frequently Asked Questions</h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Find quick answers to common questions about our services and platform
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-md transition-all duration-300 border-gray-100 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I access the mock tests?</h3>
                  <p className="text-gray-700">
                    After registering and purchasing a plan, you can access all mock tests from your dashboard. Login to your account and navigate to the "Tests" section.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-all duration-300 border-gray-100 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-700">
                    We accept credit/debit cards, UPI, net banking, and various digital wallets. All payments are secured through industry-standard encryption.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-all duration-300 border-gray-100 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Are the mock tests similar to the actual exams?</h3>
                  <p className="text-gray-700">
                    Yes, our mock tests are designed to closely simulate the actual exam pattern, difficulty level, and interface to provide you with a realistic experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-all duration-300 border-gray-100 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How long is my subscription valid?</h3>
                  <p className="text-gray-700">
                    Subscription validity depends on the plan you purchase. We offer monthly, quarterly, and annual plans. You can check the details on our pricing page.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-700 mb-6">
                Still have questions? Explore our comprehensive help center.
              </p>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg">
                <Link to="/pricing" className="inline-flex items-center">
                  View Our Plans <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
