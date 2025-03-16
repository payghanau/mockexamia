
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "Contact Us - myturnindia";
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-white to-blue-50 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about our mock tests or need assistance? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your query in detail..." 
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-mcq-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Office Address</h3>
                      <p className="text-gray-600">
                        123 Education Street, Knowledge Park<br />
                        New Delhi, 110001, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-mcq-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        support@myturnindia.com<br />
                        info@myturnindia.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-mcq-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-gray-600">
                        +91 98765 43210<br />
                        +91 12345 67890
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Operating Hours */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-mcq-blue" />
                  Customer Support Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                  <p>Sunday: Closed</p>
                  <p className="pt-2 text-sm">
                    Email support available 24/7. We aim to respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">How do I reset my password?</h3>
                <p className="text-gray-600">
                  You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your registered email address.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">Can I get a demo before purchasing?</h3>
                <p className="text-gray-600">
                  Yes, we offer a free demo test for each category. Register for a free account to access the demo tests.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">How do I report a technical issue?</h3>
                <p className="text-gray-600">
                  Please email us at support@myturnindia.com with details of the issue you're experiencing, including screenshots if possible.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">Do you offer bulk discounts for institutions?</h3>
                <p className="text-gray-600">
                  Yes, we offer special pricing for educational institutions. Please contact us at info@myturnindia.com for details.
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-16">
            <div className="rounded-lg overflow-hidden h-[400px] bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Google Map would be embedded here</p>
              {/* In a real implementation, you would use a map component here */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
