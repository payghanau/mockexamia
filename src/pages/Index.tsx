import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  User, 
  Play,
  Search,
  Star,
  Users,
  BarChart,
  Youtube
} from "lucide-react";
import { 
  fadeIn,
  slideUp,
  staggerContainer
} from "@/lib/animations";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  useEffect(() => {
    document.title = "myturnindia - NISM & GATE Mock Exams";
  }, []);

  // YouTube Videos Data
  const youtubeVideos = [
    {
      id: "video1",
      title: "NISM Series VIII: Essential Concepts Explained",
      thumbnail: "https://img.youtube.com/vi/Yf5d_Zx3AaI/maxresdefault.jpg",
      videoId: "Yf5d_Zx3AaI",
      duration: "15:24",
      views: "2.5K"
    },
    {
      id: "video2",
      title: "How to Prepare for GATE Exam in 3 Months",
      thumbnail: "https://img.youtube.com/vi/N2bLMCJ8jjw/maxresdefault.jpg",
      videoId: "N2bLMCJ8jjw",
      duration: "22:15",
      views: "4.2K"
    },
    {
      id: "video3",
      title: "NISM Mock Test Strategy for Success",
      thumbnail: "https://img.youtube.com/vi/aJzRGNpZZ4E/maxresdefault.jpg",
      videoId: "aJzRGNpZZ4E",
      duration: "18:10",
      views: "1.9K"
    },
    {
      id: "video4",
      title: "GATE CSE: Data Structures Crash Course",
      thumbnail: "https://img.youtube.com/vi/Xvekin8SQcM/maxresdefault.jpg",
      videoId: "Xvekin8SQcM",
      duration: "31:42",
      views: "7.8K"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none"></div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
                <Star className="w-4 h-4 mr-1.5" /> Trusted by over 2,000+ students
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Ace Your <span className="text-blue-600">Certification</span> With Expert-Led Preparation
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                Our comprehensive mock tests for NISM and GATE exams are designed by industry experts to maximize your success rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6">
                  <Link to="/mock-tests">Explore Mock Tests</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-lg border-blue-200 hover:bg-blue-50 px-6">
                  <Link to="/login" className="flex items-center">
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600"></div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">4.9/5</span> from over 2,000+ reviews
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-600">NISM - Series VIII: Equity Derivatives</div>
                  <div></div>
                </div>
                <div className="p-6">
                  <div className="mb-6 space-y-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">Quiz Progress</h3>
                      <span className="text-sm text-blue-600 font-medium">14 of 30 questions</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                      <h4 className="font-medium text-gray-800 mb-2">Question 14:</h4>
                      <p className="text-gray-700 mb-3">Which of the following is NOT a function of Securities and Exchange Board of India (SEBI)?</p>
                      <div className="space-y-2">
                        {[
                          "Regulating the business of stock exchanges",
                          "Setting monetary policy for the country",
                          "Protecting the interests of investors",
                          "Promoting development of securities market"
                        ].map((option, idx) => (
                          <div 
                            key={idx} 
                            className={`p-3 rounded-lg border ${idx === 1 ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'} cursor-pointer hover:border-blue-300 transition-colors`}
                          >
                            <div className="flex items-center">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${idx === 1 ? 'bg-green-500 text-white' : 'border border-gray-300'}`}>
                                {idx === 1 && <CheckCircle className="w-3 h-3" />}
                              </div>
                              <span className={`${idx === 1 ? 'font-medium' : ''}`}>{option}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <Button variant="outline" size="sm" className="border-gray-200">Previous</Button>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>12:45 remaining</span>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Next Question</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-20 -bottom-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
              <div className="absolute -left-20 -top-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50 z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Trusted By Section */}
      <section className="py-10 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">Trusted by top universities and companies</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {["IIT Delhi", "BITS Pilani", "Delhi University", "SBI Securities", "HDFC Bank"].map((partner, idx) => (
              <div key={idx} className="text-lg md:text-xl font-bold text-gray-400">{partner}</div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Makes Our Mock Tests Exceptional</h2>
            <p className="text-lg text-gray-600">Our comprehensive approach to test preparation goes beyond conventional methods</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Exam-Aligned Content",
                description: "Our questions are meticulously crafted to match the actual exam pattern and difficulty level"
              },
              {
                icon: BarChart,
                title: "Detailed Analytics",
                description: "Comprehensive performance reports to identify strengths and areas for improvement"
              },
              {
                icon: Award,
                title: "Expert-Crafted Questions",
                description: "Created by industry professionals with years of experience in their respective fields"
              },
              {
                icon: Clock,
                title: "Time Management",
                description: "Practice with realistic time constraints to improve speed and accuracy"
              },
              {
                icon: Users,
                title: "Community Support",
                description: "Join a community of learners for support, motivation, and shared knowledge"
              },
              {
                icon: Layers,
                title: "Diverse Question Bank",
                description: "Thousands of questions covering every topic in the syllabus with regular updates"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Exam Categories */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-3">
              Our Specializations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Choose Your Certification Path
            </h2>
            <p className="text-lg text-gray-600">
              Select from our comprehensive range of mock tests designed for your specific certification needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* NISM Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow"
            >
              <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')] opacity-20 bg-cover bg-center"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">NISM Certification</h3>
                  <p className="opacity-90">National Institute of Securities Markets</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">
                    Comprehensive practice tests for all NISM modules covering regulatory requirements, product knowledge, and operational aspects.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      "Series VIII: Equity Derivatives",
                      "Series VII: Securities Operations",
                      "Series V-A: Mutual Fund Distributors",
                      "Series X-A: Investment Adviser"
                    ].map((module, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="flex -space-x-1">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-blue-200"></div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">1,200+ students</span>
                  </div>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link to="/exams/nism">View Tests</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* GATE Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow"
            >
              <div className="h-40 bg-gradient-to-r from-indigo-600 to-indigo-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092921461-39b13a45e8b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVuZ2luZWVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')] opacity-20 bg-cover bg-center"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">GATE Examination</h3>
                  <p className="opacity-90">Graduate Aptitude Test in Engineering</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">
                    Section-wise practice and full-length mock tests designed to help you master GATE exam patterns and concepts.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      "Computer Science",
                      "Electronics Engineering",
                      "Electrical Engineering",
                      "Mechanical Engineering"
                    ].map((module, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="flex -space-x-1">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-indigo-200"></div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">800+ students</span>
                  </div>
                  <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                    <Link to="/exams/gate">View Tests</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* YouTube Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-red-100 text-red-700 rounded-full mb-3">
              <Youtube className="w-4 h-4 inline-block mr-1" /> Educational Content
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Learn From Our Video Tutorials
            </h2>
            <p className="text-lg text-gray-600">
              Watch expert-led video tutorials to complement your exam preparation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {youtubeVideos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              >
                <a 
                  href={`https://www.youtube.com/watch?v=${video.videoId}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-white fill-current ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                </a>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center text-xs text-gray-600">
                    <span>{video.views} views</span>
                    <span className="mx-2">•</span>
                    <span>myturnindia</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="rounded-full">
              <a 
                href="https://www.youtube.com/@myturnindia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Youtube className="mr-2 h-4 w-4" />
                Visit Our YouTube Channel
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-3">
              Student Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Our Students Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from students who have successfully prepared with our practice tests
            </p>
          </div>
          
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  name: "Priya Sharma",
                  role: "NISM Series VIII Certified",
                  content: "The practice tests perfectly matched the actual exam pattern. I was able to identify my weak areas and improve systematically. I passed my certification with a score of 87%.",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "Rajat Patel",
                  role: "GATE CSE AIR 856",
                  content: "The detailed explanations for each question helped me understand complex concepts better. My GATE score improved by 15 points compared to my previous attempt!",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                },
                {
                  name: "Ananya Singh",
                  role: "NISM Series VII Certified",
                  content: "The timed mock tests helped me manage my time better during the actual exam. The interface is intuitive and user-friendly. I'll be using this platform for my next certification too.",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                }
              ].map((testimonial, idx) => (
                <CarouselItem key={idx} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-blue-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative inset-0 translate-y-0" />
              <CarouselNext className="relative inset-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-3">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our mock tests and preparation materials
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How up-to-date are your mock tests?",
                  answer: "Our mock tests are regularly updated to reflect the latest exam patterns, syllabus changes, and industry developments. We have a team of experts who continuously monitor changes in certification requirements and update our question bank accordingly."
                },
                {
                  question: "Can I access the mock tests on mobile devices?",
                  answer: "Yes, our platform is fully responsive and works seamlessly on all devices including smartphones, tablets, laptops, and desktop computers. You can prepare for your exams anytime, anywhere."
                },
                {
                  question: "How do I track my progress?",
                  answer: "Our platform provides comprehensive analytics and performance tracking. You can view detailed reports of your test attempts, including time spent on each question, accuracy by topic, and improvement over time. These insights help you focus your study efforts more effectively."
                },
                {
                  question: "Are the mock tests similar to the actual exams?",
                  answer: "Absolutely. Our mock tests are designed to closely mimic the actual exam experience in terms of content, difficulty level, question format, and time constraints. Many of our successful students report that our mock tests were very similar to what they encountered in the actual certification exams."
                },
                {
                  question: "Do you offer any free tests before purchasing?",
                  answer: "Yes, we offer free demo tests for each certification category so you can experience our platform and question quality before making a purchase. Simply create a free account to access these demo tests."
                }
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container px-4 mx-auto relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Certification Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful professionals who have prepared with our expert-led mock tests
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg">
                <Link to="/register">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <Play className="w-10 h-10 text-white mr-4" />
              <Link to="#" className="text-white hover:underline">Watch how it works</Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
