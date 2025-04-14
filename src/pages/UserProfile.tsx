
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { getUserPurchases } from "@/services/api";
import { LogOut, Mail, Phone, User, Calendar, Award, BarChart2, FileText, Clock, ChevronRight } from "lucide-react";
import DrifterStars from "@/components/ui/DrifterStars";
import { motion } from "framer-motion";

const UserProfile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [userPurchases, setUserPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "My Profile - myturnindia";
    if (user?.id) {
      fetchUserPurchases();
    }
  }, [user]);

  const fetchUserPurchases = async () => {
    try {
      setLoading(true);
      const data = await getUserPurchases(user.id);
      setUserPurchases(data);
    } catch (error) {
      console.error("Error fetching user purchases:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString(undefined, { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Stats for the overview tab
  const stats = [
    {
      title: "Total Exams",
      value: userPurchases.length || 0,
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
    },
    {
      title: "Completed",
      value: userPurchases.filter(p => p.status === 'completed').length || 0,
      icon: <Award className="h-5 w-5 text-green-500" />,
      color: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
    },
    {
      title: "In Progress",
      value: userPurchases.filter(p => p.status === 'in_progress').length || 0,
      icon: <Clock className="h-5 w-5 text-orange-500" />,
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <DrifterStars starCount={100} starColor="#4f7df0" speed={0.3} className="opacity-40" />
      
      <main className="flex-1 pt-8 pb-16 z-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 rounded-2xl mb-8 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-900 text-white shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-blue-200 text-blue-700 text-2xl font-bold">
                  {user?.email?.substring(0, 1).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold font-work-sans mb-2">
                  {user?.email?.split('@')[0]?.charAt(0).toUpperCase() + user?.email?.split('@')[0]?.slice(1) || "User"}
                </h1>
                <p className="text-blue-100 flex items-center justify-center md:justify-start gap-2 mb-1 font-work-sans">
                  <Mail className="h-4 w-4" /> {user?.email || "email@example.com"}
                </p>
                <p className="text-blue-100 flex items-center justify-center md:justify-start gap-2 mb-3 font-work-sans">
                  <Calendar className="h-4 w-4" /> Joined {user?.created_at ? formatDate(user.created_at) : "Recently"}
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
                  <Badge className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 font-work-sans">Student</Badge>
                  {userPurchases.length > 5 && (
                    <Badge className="bg-amber-400/90 hover:bg-amber-400 text-amber-900 px-3 py-1 font-work-sans">Premium User</Badge>
                  )}
                </div>
              </div>
              
              <div>
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-work-sans"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 mt-3 flex items-center gap-2 font-work-sans"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" /> Logout
                </Button>
              </div>
            </div>
          </motion.div>
          
          {/* Tabs Section */}
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <TabsTrigger 
                value="overview" 
                className={`px-4 py-2 rounded-md transition-all font-work-sans ${activeTab === 'overview' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300' : ''}`}
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="exams" 
                className={`px-4 py-2 rounded-md transition-all font-work-sans ${activeTab === 'exams' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300' : ''}`}
              >
                My Exams
              </TabsTrigger>
              <TabsTrigger 
                value="account" 
                className={`px-4 py-2 rounded-md transition-all font-work-sans ${activeTab === 'account' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300' : ''}`}
              >
                Account Settings
              </TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                      <CardHeader className={`${stat.color} py-4`}>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg font-work-sans">{stat.title}</CardTitle>
                          {stat.icon}
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-3xl font-bold text-gray-900 dark:text-white font-work-sans">{stat.value}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* Recent Activity */}
              <Card className="border-gray-100 dark:border-gray-700 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-work-sans">Recent Activity</CardTitle>
                  <CardDescription className="font-work-sans">Your latest exam attempts and purchases</CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                  ) : userPurchases.length > 0 ? (
                    <div className="space-y-4">
                      {userPurchases.slice(0, 5).map((purchase, index) => (
                        <motion.div
                          key={purchase.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 relative group cursor-pointer"
                          onClick={() => navigate(`/results/${purchase.id}`)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white font-work-sans">{purchase.exam?.title || 'Untitled Exam'}</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-work-sans">
                                Purchased on {formatDate(purchase.created_at)}
                              </p>
                            </div>
                            <Badge className={`
                              ${purchase.status === 'completed' ? 
                                'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' : 
                                'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'}
                              font-work-sans
                            `}>
                              {purchase.status === 'completed' ? 'Completed' : 'In Progress'}
                            </Badge>
                          </div>
                          
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10 text-gray-500 dark:text-gray-400 font-work-sans">
                      <FileText className="h-12 w-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" />
                      <p>You haven't purchased any exams yet.</p>
                      <Button 
                        className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-work-sans"
                        onClick={() => navigate('/mock-tests')}
                      >
                        Browse Mock Tests
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Exams Tab */}
            <TabsContent value="exams" className="space-y-6">
              <Card className="border-gray-100 dark:border-gray-700 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-work-sans">My Exams</CardTitle>
                  <CardDescription className="font-work-sans">All the exams you've purchased</CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                  ) : userPurchases && userPurchases.length > 0 ? (
                    <div className="space-y-6">
                      {userPurchases.map((purchase) => (
                        <div key={purchase.id} className="p-6 border border-gray-100 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2 font-work-sans">{purchase.exam?.title || 'Untitled Exam'}</h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-3 font-work-sans">{purchase.exam?.description || 'No description provided'}</p>
                              
                              <div className="flex flex-wrap gap-3">
                                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 font-work-sans">
                                  {purchase.exam?.category || 'Uncategorized'}
                                </Badge>
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-work-sans">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {purchase.exam?.duration || 0} minutes
                                </div>
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-work-sans">
                                  <FileText className="h-4 w-4 mr-1" />
                                  {purchase.exam?.total_questions || 0} questions
                                </div>
                              </div>
                            </div>
                            
                            <Badge className={`
                              ${purchase.status === 'completed' ? 
                                'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' : 
                                'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'}
                              px-3 py-1 font-work-sans
                            `}>
                              {purchase.status === 'completed' ? 'Completed' : 'In Progress'}
                            </Badge>
                          </div>
                          
                          <Separator className="my-4" />
                          
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-work-sans">
                              Purchased on {formatDate(purchase.created_at)}
                            </div>
                            
                            <div className="flex gap-3">
                              {purchase.status === 'completed' ? (
                                <Button 
                                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-work-sans"
                                  onClick={() => navigate(`/results/${purchase.id}`)}
                                >
                                  View Results
                                </Button>
                              ) : (
                                <Button 
                                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-work-sans"
                                  onClick={() => navigate(`/exam/${purchase.exam_id}`)}
                                >
                                  Continue Exam
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500 dark:text-gray-400 font-work-sans">
                      <FileText className="h-12 w-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" />
                      <p>You haven't purchased any exams yet.</p>
                      <Button 
                        className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-work-sans"
                        onClick={() => navigate('/mock-tests')}
                      >
                        Browse Mock Tests
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Account Settings Tab */}
            <TabsContent value="account" className="space-y-6">
              <Card className="border-gray-100 dark:border-gray-700 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-work-sans">Account Settings</CardTitle>
                  <CardDescription className="font-work-sans">Manage your account details and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white font-work-sans">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-work-sans">Email</label>
                        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 font-work-sans">
                          {user?.email || "Not available"}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-work-sans">Account Created</label>
                        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 font-work-sans">
                          {user?.created_at ? formatDate(user.created_at) : "Not available"}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white font-work-sans">Account Actions</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white font-work-sans">Sign Out</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-work-sans">Log out from your current session</p>
                          </div>
                          <Button 
                            variant="destructive" 
                            className="bg-red-500 hover:bg-red-600 font-work-sans"
                            onClick={handleLogout}
                          >
                            Sign Out
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white font-work-sans">Get Support</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-work-sans">Contact our support team for assistance</p>
                          </div>
                          <Button 
                            variant="outline" 
                            className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 font-work-sans"
                            onClick={() => navigate('/contact')}
                          >
                            Contact Support
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserProfile;
