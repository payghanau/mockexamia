
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - myturnindia";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contact form submission logic would go here
    console.log("Form submitted");
    // Display success message or handle errors
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-primary-light text-gray-800 pt-24 pb-16 px-4 apple-soft-gradient">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block apple-glass p-2 rounded-full mb-6">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We're here to help with any questions about our exam preparation services
            </p>
          </div>
        </div>

        {/* Contact Forms and Info Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                <p className="text-gray-700 mb-8">
                  Fill out the form below, and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 apple-surface p-8">
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
                        className="apple-input border-gray-200 focus:border-primary focus:ring-primary"
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
                        className="apple-input border-gray-200 focus:border-primary focus:ring-primary"
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
                      className="apple-input border-gray-200 focus:border-primary focus:ring-primary"
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
                      className="apple-input border-gray-200 focus:border-primary focus:ring-primary w-full"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full apple-button bg-primary hover:bg-primary-dark gap-2">
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
                  <Card className="overflow-hidden border-gray-200 hover:shadow-md transition-all duration-300 apple-card apple-card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full apple-glass flex items-center justify-center mr-4">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
                          <p className="text-gray-700">+91 98765 43210</p>
                          <p className="text-gray-700">+91 12345 67890</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-gray-200 hover:shadow-md transition-all duration-300 apple-card apple-card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full apple-glass flex items-center justify-center mr-4">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h3>
                          <p className="text-gray-700">info@myturnindia.com</p>
                          <p className="text-gray-700">support@myturnindia.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-gray-200 hover:shadow-md transition-all duration-300 apple-card apple-card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full apple-glass flex items-center justify-center mr-4">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">Visit Us</h3>
                          <p className="text-gray-700">123 Education Street, Tech Park</p>
                          <p className="text-gray-700">Bangalore, Karnataka 560001</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-gray-200 hover:shadow-md transition-all duration-300 apple-card apple-card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full apple-glass flex items-center justify-center mr-4">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">Business Hours</h3>
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
        <div className="py-16 px-4 apple-soft-gradient">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Find Us</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 border border-gray-200 apple-card">
              {/* Placeholder for a map. In a real application, you would integrate Google Maps or another map service here */}
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <p className="text-gray-800 text-lg font-medium">Map Loading...</p>
                {/* A real application would have something like: */}
                {/* <iframe src="https://www.google.com/maps/embed?..." width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe> */}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="apple-card hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I access the mock tests?</h3>
                  <p className="text-gray-700">
                    After registering and purchasing a plan, you can access all mock tests from your dashboard. Login to your account and navigate to the "Tests" section.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="apple-card hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-700">
                    We accept credit/debit cards, UPI, net banking, and various digital wallets. All payments are secured through industry-standard encryption.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="apple-card hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Are the mock tests similar to the actual exams?</h3>
                  <p className="text-gray-700">
                    Yes, our mock tests are designed to closely simulate the actual exam pattern, difficulty level, and interface to provide you with a realistic experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="apple-card hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How long is my subscription valid?</h3>
                  <p className="text-gray-700">
                    Subscription validity depends on the plan you purchase. We offer monthly, quarterly, and annual plans. You can check the details on our pricing page.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-700 mb-4">
                Still have questions? Reach out to our customer support team.
              </p>
              <Button asChild variant="outline" className="apple-button border-primary text-primary hover:bg-primary-light">
                <a href="mailto:support@myturnindia.com">Contact Support</a>
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
