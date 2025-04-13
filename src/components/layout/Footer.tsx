
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">myturnindia</h3>
            <p className="text-gray-300 max-w-xs">
              Premium mock exam platform for NISM Certification and GATE Exam preparation. Empowering students to excel in their exams since 2020.
            </p>
            <div className="flex space-x-4 items-center pt-2">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors p-2 bg-gray-800 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors p-2 bg-gray-800 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors p-2 bg-gray-800 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors p-2 bg-gray-800 rounded-full">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Exam Categories</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/exams/nism" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transition-transform group-hover:translate-x-1" />
                  NISM Certification
                </Link>
              </li>
              <li>
                <Link to="/exams/gate" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transition-transform group-hover:translate-x-1" />
                  GATE Exams
                </Link>
              </li>
              <li>
                <Link to="/exams/gate/section-wise" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transition-transform group-hover:translate-x-1" />
                  GATE Section-wise Tests
                </Link>
              </li>
              <li>
                <Link to="/exams/gate/full-length" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transition-transform group-hover:translate-x-1" />
                  GATE Full-length Tests
                </Link>
              </li>
              <li>
                <Link to="/mock-tests" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transition-transform group-hover:translate-x-1" />
                  Free Mock Tests
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transition-transform group-hover:translate-x-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transition-transform group-hover:translate-x-1" />
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transition-transform group-hover:translate-x-1" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transition-transform group-hover:translate-x-1" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500 transition-transform group-hover:translate-x-1" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Education Street, Tech Park<br />
                  Bangalore, Karnataka 560001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">
                  info@myturnindia.com
                </span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase text-gray-400 mb-3">Subscribe to Newsletter</h4>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 rounded-l-md rounded-r-none focus:outline-none"
                />
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-l-none rounded-r-md"
                >
                  Go
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} myturnindia. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-6">
              <Link to="/terms" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
