import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Award, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  GraduationCap, 
  Layers, 
  Users 
} from "lucide-react";
import { 
  floatingAnimation,
  pulseAnimation,
  rotateAnimation,
  gradientShift,
  fadeIn,
  slideUp,
  staggerContainer
} from "@/lib/animations";

const Index = () => {
  useEffect(() => {
    document.title = "myturnindia - NISM & GATE Mock Exams";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient circles */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-300/20 to-blue-500/20 blur-3xl"
          variants={pulseAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-blue-100/30 to-indigo-300/30 blur-3xl"
          variants={pulseAnimation}
          initial="initial"
          animate="animate"
          custom={1.5}
        />
        <motion.div 
          className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-blue-200/20 to-purple-300/20 blur-3xl"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        />
        
        {/* Animated mesh grid background */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1"></path>
            </pattern>
          </defs>
          <motion.rect 
            width="100%" 
            height="100%" 
            fill="url(#grid-pattern)"
            variants={rotateAnimation}
            initial="initial"
            animate="animate"
            style={{ transformOrigin: 'center' }}
          ></motion.rect>
        </svg>

        {/* Floating particles */}
        {[...Array(15)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            custom={Math.random() * 2 + 1}
          />
        ))}
      </div>
      
      <Navbar />
      
      {/* Hero Section with Apple-like Design */}
      <motion.section 
        className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container px-4 mx-auto relative z-10">
          <motion.div 
            className="flex flex-col lg:flex-row items-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12">
              <motion.span 
                className="inline-block px-4 py-1.5 mb-5 text-sm font-medium bg-blue-100 text-blue-600 rounded-full"
                variants={slideUp}
              >
                Prepare to Excel
              </motion.span>
              <motion.h1 
                className="apple-hero-text mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900"
                variants={slideUp}
              >
                Master Your Certification Journey
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
                variants={slideUp}
              >
                Expertly crafted mock tests designed for NISM Certifications and GATE Exams. Developed by industry professionals to help you succeed.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={slideUp}
              >
                <Button asChild size="lg" className="apple-button-primary bg-gradient-to-r from-blue-500 to-blue-700">
                  <Link to="/mock-tests" className="flex items-center">
                    Explore Tests <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="apple-button-secondary">
                  <Link to="/login">Get Started</Link>
                </Button>
              </motion.div>
              <motion.div 
                className="mt-8 flex items-center"
                variants={slideUp}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600 opacity-75"></div>
                  ))}
                </div>
                <p className="ml-4 text-sm text-gray-600">
                  <span className="font-semibold">2,000+</span> students trust our exam preparations
                </p>
              </motion.div>
            </div>
            <motion.div 
              className="w-full lg:w-1/2"
              variants={fadeIn}
              custom={0.5}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-300 to-blue-500 opacity-30 blur-xl"
                  variants={pulseAnimation}
                  initial="initial"
                  animate="animate"
                ></motion.div>
                <div className="relative apple-blur-bg rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="mx-auto text-sm font-medium text-gray-700">NISM Mock Exam</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Securities Market - Chapter 2</h3>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <motion.div 
                          key={i}
                          className="flex items-start p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-100"
                          variants={slideUp}
                          custom={i * 0.2}
                        >
                          <div className="mr-3 mt-1 p-1 bg-white rounded-full shadow-sm">
                            <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-medium">{i}</div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">
                              Which of the following entities regulate the securities market in India?
                            </p>
                            <div className="mt-2 space-y-1">
                              {["SEBI", "RBI", "Both SEBI and RBI", "None of the above"].map((option, idx) => (
                                <div key={idx} className={`text-xs p-1.5 px-3 rounded ${idx === 2 ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-gray-100 text-gray-700'}`}>
                                  {option} {idx === 2 && <CheckCircle className="inline-block w-3 h-3 ml-1" />}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-600 mr-1" />
                        <span className="text-xs text-gray-600">8:45 remaining</span>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full">Next Question</Button>
                    </div>
                  </div>
                </div>
                
                {/* Apple-style floating elements */}
                <motion.div 
                  className="absolute -right-12 top-1/4 w-24 h-24 rounded-full bg-gradient-to-tr from-blue-300 to-blue-100 opacity-50 blur-xl"
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                  custom={2}
                ></motion.div>
                <motion.div 
                  className="absolute -left-16 bottom-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-blue-200 to-blue-50 opacity-40 blur-xl"
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                  custom={1.5}
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Features Section with Apple-style cards */}
      <motion.section 
        className="apple-section bg-white"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 apple-gradient-text">
              Designed for Your Success
            </h2>
            <p className="apple-caption">
              Our platform combines expert content with innovative learning tools to maximize your exam performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Exam-Matched Tests", description: "Experience tests that mirror actual exam patterns and difficulty levels" },
              { icon: Layers, title: "In-depth Analytics", description: "Gain comprehensive insights with detailed performance analysis and recommendations" },
              { icon: Award, title: "Expert Content", description: "Questions crafted by industry professionals with deep exam expertise" },
              { icon: Clock, title: "Time Management", description: "Practice with realistic timing to improve your speed and efficiency" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="apple-feature-card apple-card-hover group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-5 group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Exam Categories Section */}
      <motion.section 
        className="apple-section bg-gradient-to-b from-gray-50 to-white"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
              Our Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 apple-gradient-text">
              Specialized Exam Preparation
            </h2>
            <p className="apple-caption">
              Choose from our comprehensive range of mock tests tailored to your certification needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* NISM Card */}
            <div className="apple-showcase-card apple-card-hover overflow-hidden group">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white mr-4">
                  <BookOpen className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">NISM Certification</h3>
                  <p className="text-blue-600">Securities Market Professional</p>
                </div>
              </div>
              <p className="mb-6 text-gray-600">
                Comprehensive practice tests for all NISM modules covering regulatory requirements, product knowledge, and operational aspects.
              </p>
              <ul className="mb-8 space-y-3">
                {["Mutual Fund Distributor", "Securities Operations", "Investment Adviser", "Research Analyst"].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full apple-button-primary bg-gradient-to-r from-blue-500 to-blue-700">
                <Link to="/nism-exams" className="flex items-center justify-center gap-2">
                  Explore NISM Tests <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* GATE Card */}
            <div className="apple-showcase-card apple-card-hover overflow-hidden group">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 flex items-center justify-center text-white mr-4">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">GATE Exam</h3>
                  <p className="text-blue-700">Graduate Aptitude Test in Engineering</p>
                </div>
              </div>
              <p className="mb-6 text-gray-600">
                Section-wise practice and full-length mock tests designed to help you master GATE exam patterns and concepts.
              </p>
              <ul className="mb-8 space-y-3">
                {["Computer Science", "Electronics Engineering", "Electrical Engineering", "Mechanical Engineering"].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="w-full apple-button-primary bg-gradient-to-r from-blue-700 to-blue-800">
                <Link to="/gate-exams" className="flex items-center justify-center gap-2">
                  Explore GATE Tests <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Testimonials */}
      <motion.section 
        className="apple-section bg-white"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium bg-blue-100 text-blue-600 rounded-full">
              Student Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 apple-gradient-text">
              Success Stories
            </h2>
            <p className="apple-caption">
              Hear from students who have successfully prepared with our practice tests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "NISM Series VIII Certified",
                content: "The practice tests perfectly matched the actual exam pattern. I was able to identify my weak areas and improve systematically."
              },
              {
                name: "Raj Patel",
                role: "GATE CSE AIR 856",
                content: "The detailed explanations for each question helped me understand complex concepts better. My GATE score improved by 15 points!"
              },
              {
                name: "Ananya Singh",
                role: "NISM Series VII Certified",
                content: "The timed mock tests helped me manage my time better during the actual exam. The interface is intuitive and user-friendly."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="apple-blur-bg rounded-2xl p-6 apple-card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                <div className="mt-4 text-yellow-400 flex">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ 
            background: "linear-gradient(120deg, rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 0.9) 100%)",
            backgroundSize: "200% 200%"
          }}
          variants={gradientShift}
          initial="initial"
          animate="animate"
        />
        
        {/* Animated wave pattern */}
        <svg className="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path 
            d="M0,0 C150,90 350,0 500,100 C650,190 700,120 900,30 C1050,-30 1200,90 1200,90 L1200,120 L0,120 Z" 
            fill="white"
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            custom={1.2}
          ></motion.path>
        </svg>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Start Your Preparation?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have prepared with our comprehensive practice tests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-white text-blue-700 hover:bg-blue-50 px-8">
              <Link to="/register">Start Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
              <Link to="/mock-tests">Browse Tests</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
