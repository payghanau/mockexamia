
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, HelpCircle, Zap, BookOpen } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - MockExamia";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white pt-28 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block p-3 rounded-full mb-6 bg-white shadow-sm">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
              We're Here to Help You Succeed
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Have questions about our exam preparation services? Our dedicated support team is ready to assist you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-4 w-4" /> Call Us
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Mail className="mr-2 h-4 w-4" /> Email Support
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Forms and Info Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold mb-3 text-gray-800">Get in Touch</h2>
                <div className="h-1 w-20 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 mb-8">
                  Fill out the form below, and our team will get back to you within 24 hours.
                </p>

                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-3 text-gray-800">Contact Information</h2>
                <div className="h-1 w-20 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 mb-8">
                  Reach out to us directly or visit our office during business hours.
                </p>

                <div className="space-y-6">
                  <Card className="overflow-hidden hover:shadow-md transition-all duration-300 bg-white border-blue-100">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <Phone className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                          <p className="text-gray-700 mb-1">+91 98765 43210</p>
                          <p className="text-gray-700">+91 12345 67890</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-md transition-all duration-300 bg-white border-blue-100">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                          <p className="text-gray-700 mb-1">info@mockexamia.com</p>
                          <p className="text-gray-700">support@mockexamia.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-md transition-all duration-300 bg-white border-blue-100">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Us</h3>
                          <p className="text-gray-700 mb-1">123 Education Street, Tech Park</p>
                          <p className="text-gray-700">Bangalore, Karnataka 560001</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-md transition-all duration-300 bg-white border-blue-100">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Hours</h3>
                          <p className="text-gray-700 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p className="text-gray-700 mb-1">Saturday: 10:00 AM - 2:00 PM</p>
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
        <div className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center text-gray-800">Find Us</h2>
            <div className="h-1 w-20 bg-blue-600 mb-8 mx-auto"></div>
            <div className="rounded-xl overflow-hidden shadow-lg h-96 border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1654612031587!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Office Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center text-gray-800">Frequently Asked Questions</h2>
            <div className="h-1 w-20 bg-blue-600 mb-3 mx-auto"></div>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Find quick answers to common questions about our services and platform
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="flex items-start mb-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <HelpCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">How can I access the mock tests?</h3>
                </div>
                <p className="text-gray-700 pl-11">
                  After registering and purchasing a plan, you can access all mock tests from your dashboard. Login to your account and navigate to the "Tests" section.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="flex items-start mb-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <HelpCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">What payment methods do you accept?</h3>
                </div>
                <p className="text-gray-700 pl-11">
                  We accept credit/debit cards, UPI, net banking, and various digital wallets. All payments are secured through industry-standard encryption.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="flex items-start mb-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <Zap className="h-4 w-4 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Are the mock tests similar to the actual exams?</h3>
                </div>
                <p className="text-gray-700 pl-11">
                  Yes, our mock tests are designed to closely simulate the actual exam pattern, difficulty level, and interface to provide you with a realistic experience.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="flex items-start mb-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">How long is my subscription valid?</h3>
                </div>
                <p className="text-gray-700 pl-11">
                  Subscription validity depends on the plan you purchase. We offer monthly, quarterly, and annual plans. You can check the details on our pricing page.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-700 mb-6">
                Still have questions? Explore our comprehensive help center.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/faq" className="inline-flex items-center">
                    Visit Help Center <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link to="/pricing" className="inline-flex items-center">
                    View Our Plans <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
