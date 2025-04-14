
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { getUserPurchases } from "@/services/api";
import { LoaderCircle, BookCheck, BadgeCheck, Award, TrendingUp, Clock, CreditCard, UserCog, Activity, BookOpen, CalendarDays, BookmarkCheck, CheckCircle2, Star } from "lucide-react";
import DrifterStars from "@/components/ui/DrifterStars";
import { motion } from "framer-motion";
import { gradientShift } from "@/lib/animations";

const UserProfile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    document.title = "My Profile - myturnindia";
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const userPurchases = await getUserPurchases();
      setPurchases(userPurchases);
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast({
        title: "Error",
        description: "Failed to load profile data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Calculate statistics
  const completedExams = purchases.filter(purchase => purchase.status === 'completed').length;
  const totalExams = purchases.length;
  const completionRate = totalExams > 0 ? Math.round((completedExams / totalExams) * 100) : 0;
  
  // Group exams by category
  const examsByCategory = purchases.reduce((acc, purchase) => {
    const category = purchase.exam?.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(purchase);
    return acc;
  }, {});

  const handleLogout = () => {
    logout();
    navigate('/');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <DrifterStars starCount={100} starColor="#4f7df0" speed={0.3} className="opacity-40" />
      
      <main className="flex-1 relative z-10 profile-container">
        {loading ? (
          <div className="flex items-center justify-center h-96">
            <LoaderCircle className="h-8 w-8 animate-spin text-blue-600 dark:text-blue-400" />
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            {/* Premium gradient header */}
            <div className="relative w-full rounded-xl overflow-hidden mb-8">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900"
                animate={gradientShift.animate}
                initial={gradientShift.initial}
              ></motion.div>
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="h-24 w-24 ring-4 ring-white/50 shadow-xl">
                  <AvatarImage src="/placeholder.svg" alt={user?.email || "User"} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl">
                    {user?.email?.charAt(0)?.toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                
                <div className="text-center md:text-left md:flex-1">
                  <div className="mb-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {user?.email?.split('@')[0] || "User"}
                    </h1>
                    <p className="text-blue-100 text-lg">{user?.email}</p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
                      <BookCheck className="h-5 w-5 text-blue-100 mr-2" />
                      <div>
                        <div className="text-sm text-blue-100">Enrolled Courses</div>
                        <div className="text-xl font-bold text-white">{totalExams}</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
                      <BadgeCheck className="h-5 w-5 text-blue-100 mr-2" />
                      <div>
                        <div className="text-sm text-blue-100">Completed</div>
                        <div className="text-xl font-bold text-white">{completedExams}</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
                      <Award className="h-5 w-5 text-blue-100 mr-2" />
                      <div>
                        <div className="text-sm text-blue-100">Completion Rate</div>
                        <div className="text-xl font-bold text-white">{completionRate}%</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 mt-4 md:mt-0">
                  <Button
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 text-white border-none"
                    onClick={() => navigate('/dashboard')}
                  >
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 text-white border-none"
                    onClick={handleLogout}
                  >
                    <UserCog className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-gray-100 dark:bg-gray-800 w-full justify-start mb-8 p-1 rounded-lg">
                <TabsTrigger
                  value="overview"
                  className={`px-4 py-2 ${activeTab === 'overview' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="purchases"
                  className={`px-4 py-2 ${activeTab === 'purchases' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  My Purchases
                </TabsTrigger>
                <TabsTrigger
                  value="performance"
                  className={`px-4 py-2 ${activeTab === 'performance' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  Performance
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-gray-100 dark:border-gray-700 shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center text-gray-900 dark:text-white">
                        <Activity className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                        Activity Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <BookOpen className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                            <span className="text-gray-700 dark:text-gray-300">Total Enrolled</span>
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white">{totalExams}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <BookmarkCheck className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                            <span className="text-gray-700 dark:text-gray-300">Completed</span>
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white">{completedExams}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                            <span className="text-gray-700 dark:text-gray-300">In Progress</span>
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white">{totalExams - completedExams}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <CheckCircle2 className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                            <span className="text-gray-700 dark:text-gray-300">Completion Rate</span>
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white">{completionRate}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-gray-100 dark:border-gray-700 shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center text-gray-900 dark:text-white">
                        <CalendarDays className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                        Recent Activity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {purchases.length > 0 ? (
                        <div className="space-y-4">
                          {purchases.slice(0, 3).map((purchase, index) => (
                            <div key={index} className="border-b dark:border-gray-700 pb-3 last:border-0 last:pb-0">
                              <div className="font-medium text-gray-900 dark:text-white mb-1">
                                {purchase.exam?.title || "Unknown Exam"}
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">
                                  {formatDate(purchase.created_at)}
                                </span>
                                <span className={`${purchase.status === 'completed' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}>
                                  {purchase.status === 'completed' ? 'Completed' : 'In Progress'}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400 text-center py-6">
                          No recent activity found.
                        </p>
                      )}
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-100 dark:border-blue-900/30 shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center text-gray-900 dark:text-white">
                        <Star className="mr-2 h-5 w-5 text-orange-500 dark:text-orange-400" />
                        Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-100 dark:border-blue-900/30">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-1">NISM Series-VIII: Equity Derivatives</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Perfect for finance professionals</p>
                          <Button variant="outline" size="sm" className="w-full border-blue-200 text-blue-700 dark:border-blue-700 dark:text-blue-400" onClick={() => navigate('/exams/nism')}>
                            View Details
                          </Button>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-100 dark:border-blue-900/30">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-1">GATE Computer Science</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Comprehensive preparation suite</p>
                          <Button variant="outline" size="sm" className="w-full border-blue-200 text-blue-700 dark:border-blue-700 dark:text-blue-400" onClick={() => navigate('/exams/gate')}>
                            View Details
                          </Button>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-4">
                          <h4 className="font-medium mb-1">Unlock Premium Access</h4>
                          <p className="text-sm text-blue-100 mb-2">Get access to all mock tests and features</p>
                          <Button size="sm" className="w-full bg-white text-blue-700 hover:bg-gray-100">
                            Explore
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Achievement Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Award className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                    Your Achievements
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {completedExams > 0 ? (
                      <>
                        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl border border-orange-100 dark:border-orange-900/30 p-4 flex flex-col items-center text-center">
                          <div className="bg-orange-100 dark:bg-orange-900/50 rounded-full p-3 mb-3">
                            <Award className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                          </div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-1">First Completion</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Completed your first exam</p>
                        </div>
                        
                        {completedExams >= 5 && (
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30 p-4 flex flex-col items-center text-center">
                            <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full p-3 mb-3">
                              <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Dedicated Learner</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Completed 5+ mock tests</p>
                          </div>
                        )}
                        
                        {completionRate >= 80 && (
                          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-100 dark:border-green-900/30 p-4 flex flex-col items-center text-center">
                            <div className="bg-green-100 dark:bg-green-900/50 rounded-full p-3 mb-3">
                              <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Completion Master</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">80%+ completion rate</p>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="col-span-full text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                        <Award className="h-12 w-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">No Achievements Yet</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">Complete mock tests to earn achievements</p>
                        <Button 
                          variant="outline"
                          onClick={() => navigate('/mock-tests')}
                          className="mx-auto"
                        >
                          Explore Mock Tests
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Category breakdown */}
                {Object.keys(examsByCategory).length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <BookOpen className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Your Exam Categories
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(examsByCategory).map(([category, exams], index) => (
                        <Card key={index} className="border-gray-100 dark:border-gray-700 shadow-sm">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center text-gray-900 dark:text-white">
                              {category === 'NISM' ? 
                                <Award className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" /> : 
                                <BookOpen className="mr-2 h-5 w-5 text-purple-600 dark:text-purple-400" />
                              }
                              {category} Exams
                            </CardTitle>
                            <CardDescription>
                              You have {exams.length} {category.toLowerCase()} {exams.length === 1 ? 'exam' : 'exams'}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {exams.slice(0, 3).map((purchase, i) => (
                                <div key={i} className="flex justify-between items-center">
                                  <div className="flex-1">
                                    <div className="font-medium text-gray-900 dark:text-white text-sm">
                                      {purchase.exam?.title || "Unknown Exam"}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                      {purchase.status === 'completed' ? 'Completed' : 'In Progress'} • {formatDate(purchase.created_at)}
                                    </div>
                                  </div>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    className="text-blue-600 dark:text-blue-400"
                                    onClick={() => navigate(`/exam/${purchase.exam_id}`)}
                                  >
                                    View
                                  </Button>
                                </div>
                              ))}
                              
                              {exams.length > 3 && (
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="w-full mt-2"
                                  onClick={() => setActiveTab("purchases")}
                                >
                                  See All {exams.length} Exams
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="purchases" className="mt-0">
                <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <CreditCard className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Purchase History
                    </h3>
                  </div>
                  
                  {purchases.length > 0 ? (
                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                      {purchases.map((purchase, index) => (
                        <div key={index} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 dark:text-white text-lg mb-1">
                                {purchase.exam?.title || "Unknown Exam"}
                              </h4>
                              <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {purchase.exam?.duration} mins
                                </div>
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                  <CalendarDays className="h-4 w-4 mr-1" />
                                  {formatDate(purchase.created_at)}
                                </div>
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                  <CreditCard className="h-4 w-4 mr-1" />
                                  ₹{purchase.amount}
                                </div>
                                <div className={`flex items-center ${purchase.status === 'completed' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}>
                                  {purchase.status === 'completed' ? 
                                    <CheckCircle2 className="h-4 w-4 mr-1" /> : 
                                    <Clock className="h-4 w-4 mr-1" />
                                  }
                                  {purchase.status === 'completed' ? 'Completed' : 'In Progress'}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              {purchase.status === 'completed' ? (
                                <>
                                  <Button variant="outline" onClick={() => navigate(`/results/${purchase.id}`)}>
                                    View Results
                                  </Button>
                                </>
                              ) : (
                                <Button onClick={() => navigate(`/exam/${purchase.exam_id}`)}>
                                  Continue
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-12 text-center">
                      <BookOpen className="h-12 w-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">No Purchases Yet</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                        You haven't purchased any mock tests yet. Explore our collection to find the perfect test for your needs.
                      </p>
                      <Button 
                        onClick={() => navigate('/mock-tests')}
                        className="mx-auto"
                      >
                        Explore Mock Tests
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="performance" className="mt-0">
                <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Performance Analytics
                    </h3>
                  </div>
                  
                  {completedExams > 0 ? (
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Card className="border-gray-100 dark:border-gray-700 shadow-sm">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg text-gray-900 dark:text-white">
                              Completion Rate
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center">
                              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                {completionRate}%
                              </div>
                              <div className="ml-auto h-16 w-16 flex items-center justify-center">
                                <div className="relative h-full w-full">
                                  <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <circle 
                                      cx="18" cy="18" r="16" 
                                      fill="none" 
                                      stroke="#e5e7eb" 
                                      strokeWidth="3" 
                                      className="dark:stroke-gray-700"
                                    />
                                    <circle 
                                      cx="18" cy="18" r="16" 
                                      fill="none" 
                                      stroke="currentColor" 
                                      strokeWidth="3" 
                                      strokeDasharray={`${completionRate}, 100`}
                                      strokeLinecap="round"
                                      className="text-blue-500 dark:text-blue-400"
                                      transform="rotate(-90 18 18)"
                                    />
                                  </svg>
                                  <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                                    {completedExams}/{totalExams}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-gray-100 dark:border-gray-700 shadow-sm">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg text-gray-900 dark:text-white">
                              Exams Completed
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center">
                              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                                {completedExams}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                                out of {totalExams} enrolled
                              </div>
                              <div className="ml-auto">
                                <CheckCircle2 className="h-12 w-12 text-green-200 dark:text-green-900" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-gray-100 dark:border-gray-700 shadow-sm">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg text-gray-900 dark:text-white">
                              Pending Exams
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center">
                              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                                {totalExams - completedExams}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                                remaining to complete
                              </div>
                              <div className="ml-auto">
                                <Clock className="h-12 w-12 text-orange-200 dark:text-orange-900" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Completed Exams</h4>
                        <div className="space-y-4">
                          {purchases.filter(purchase => purchase.status === 'completed').map((purchase, index) => (
                            <Link key={index} to={`/results/${purchase.id}`} className="block">
                              <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                <div className="mr-4">
                                  {purchase.exam?.category === 'NISM' ? (
                                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                                      <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                  ) : (
                                    <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                                      <BookOpen className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                  )}
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-medium text-gray-900 dark:text-white">
                                    {purchase.exam?.title || "Unknown Exam"}
                                  </h5>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Completed on {formatDate(purchase.created_at)}
                                  </p>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    View Results →
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-12 text-center">
                      <TrendingUp className="h-12 w-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">No Performance Data Yet</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                        Complete some mock tests to see your performance analytics and track your progress.
                      </p>
                      <Button 
                        onClick={() => navigate('/mock-tests')}
                        className="mx-auto"
                      >
                        Take a Mock Test
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
