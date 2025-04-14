
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { examService } from "@/services/api";
import {
  User, BookOpen, Award, Clock, Calendar, FileText, GraduationCap, Settings, 
  LogOut, BookCheck, Edit, BarChart3, Bookmark, ThumbsUp, History
} from "lucide-react";

const UserProfile = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "My Profile - myturnindia";
    
    const fetchUserPurchases = async () => {
      if (!isAuthenticated || !user) return;
      
      try {
        setLoading(true);
        const data = await examService.getUserPurchases(user.id);
        setPurchases(data || []);
      } catch (error) {
        console.error("Error fetching purchases:", error);
        toast({
          title: "Error",
          description: "Failed to load your purchased exams",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserPurchases();
  }, [user, isAuthenticated, toast]);

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Success",
        description: "You have been logged out",
      });
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Error",
        description: "Failed to logout",
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Not Authenticated</CardTitle>
              <CardDescription>Please login to view your profile</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/login">Login</Link>
              </Button>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Profile Sidebar */}
            <div className="md:col-span-1">
              <Card className="bg-white dark:bg-gray-800 shadow-sm sticky top-20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/50 h-24 w-24 flex items-center justify-center">
                    <User className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold font-work-sans text-gray-900 dark:text-white">
                    {user.user_metadata?.name || user.email.split('@')[0]}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 font-roboto">
                    {user.email}
                  </CardDescription>
                  <div className="mt-2">
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                      Student
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <ul className="divide-y divide-gray-100 dark:divide-gray-700">
                    <li>
                      <Button 
                        variant="ghost" 
                        className={`w-full justify-start rounded-none py-4 px-6 ${activeTab === 'profile' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}
                        onClick={() => setActiveTab('profile')}
                      >
                        <User className="h-5 w-5 mr-3" />
                        Profile
                      </Button>
                    </li>
                    <li>
                      <Button 
                        variant="ghost" 
                        className={`w-full justify-start rounded-none py-4 px-6 ${activeTab === 'myExams' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}
                        onClick={() => setActiveTab('myExams')}
                      >
                        <BookCheck className="h-5 w-5 mr-3" />
                        My Exams
                      </Button>
                    </li>
                    <li>
                      <Button 
                        variant="ghost" 
                        className={`w-full justify-start rounded-none py-4 px-6 ${activeTab === 'performance' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}
                        onClick={() => setActiveTab('performance')}
                      >
                        <BarChart3 className="h-5 w-5 mr-3" />
                        Performance
                      </Button>
                    </li>
                    <li>
                      <Button 
                        variant="ghost" 
                        className={`w-full justify-start rounded-none py-4 px-6 ${activeTab === 'bookmarks' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}
                        onClick={() => setActiveTab('bookmarks')}
                      >
                        <Bookmark className="h-5 w-5 mr-3" />
                        Bookmarks
                      </Button>
                    </li>
                    <li>
                      <Button 
                        variant="ghost" 
                        className={`w-full justify-start rounded-none py-4 px-6 ${activeTab === 'settings' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}
                        onClick={() => setActiveTab('settings')}
                      >
                        <Settings className="h-5 w-5 mr-3" />
                        Settings
                      </Button>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="px-6 py-4">
                  <Button 
                    variant="destructive" 
                    className="w-full justify-start"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-5 w-5 mr-3" />
                    Logout
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Content Area */}
            <div className="md:col-span-3">
              <Card className="bg-white dark:bg-gray-800 shadow-sm">
                <CardContent className="p-0">
                  {activeTab === 'profile' && (
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold font-work-sans text-gray-900 dark:text-white">Profile Information</h2>
                        <Button variant="outline" size="sm" className="text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Profile
                        </Button>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Full Name</div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {user.user_metadata?.name || "Not provided"}
                            </div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email Address</div>
                            <div className="font-medium text-gray-900 dark:text-white">{user.email}</div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Account Created</div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {new Date(user.created_at).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Account Type</div>
                            <div className="font-medium text-gray-900 dark:text-white">Student</div>
                          </div>
                        </div>
                        
                        <Separator className="my-6" />
                        
                        <div>
                          <h3 className="text-lg font-semibold font-work-sans text-gray-900 dark:text-white mb-4">Activity Summary</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex items-start">
                              <div className="bg-blue-100 dark:bg-blue-800/50 p-2 rounded-lg mr-3">
                                <BookCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                  {purchases.length}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Purchased Exams</div>
                              </div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex items-start">
                              <div className="bg-green-100 dark:bg-green-800/50 p-2 rounded-lg mr-3">
                                <ThumbsUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                  {purchases.filter(p => p.status === 'completed').length}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Completed Exams</div>
                              </div>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg flex items-start">
                              <div className="bg-purple-100 dark:bg-purple-800/50 p-2 rounded-lg mr-3">
                                <History className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                  {purchases.filter(p => p.status === 'in-progress').length}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">In Progress Exams</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'myExams' && (
                    <div className="p-6">
                      <h2 className="text-2xl font-bold font-work-sans text-gray-900 dark:text-white mb-6">My Purchased Exams</h2>
                      
                      {loading ? (
                        <div className="text-center py-12">
                          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
                          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your exams...</p>
                        </div>
                      ) : purchases.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                          <BookOpen className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No exams purchased yet</h3>
                          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                            Explore our mock tests and add them to your collection to begin practicing.
                          </p>
                          <Button asChild>
                            <Link to="/mock-tests">Explore Mock Tests</Link>
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Tabs defaultValue="all">
                            <TabsList className="mb-4 bg-gray-100 dark:bg-gray-800 p-1">
                              <TabsTrigger value="all">All Exams</TabsTrigger>
                              <TabsTrigger value="inProgress">In Progress</TabsTrigger>
                              <TabsTrigger value="completed">Completed</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="all" className="mt-0">
                              <div className="space-y-4">
                                {purchases.map((purchase) => (
                                  <Card key={purchase.id} className="border-l-4 border-l-blue-500 dark:border-l-blue-600">
                                    <CardContent className="p-5">
                                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div>
                                          <div className="flex items-center">
                                            {purchase.exam?.type === 'GATE' ? (
                                              <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                                            ) : (
                                              <Award className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                                            )}
                                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{purchase.exam?.title}</h3>
                                          </div>
                                          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                                            <div className="flex items-center">
                                              <Calendar className="h-4 w-4 mr-1" />
                                              <span>Purchased: {new Date(purchase.created_at).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center">
                                              <Clock className="h-4 w-4 mr-1" />
                                              <span>{purchase.exam?.duration} minutes</span>
                                            </div>
                                            <div className="flex items-center">
                                              <FileText className="h-4 w-4 mr-1" />
                                              <span>{purchase.exam?.total_questions} questions</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-3 ml-auto">
                                          <Badge className={
                                            purchase.status === 'completed' 
                                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                                              : purchase.status === 'in-progress'
                                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                          }>
                                            {purchase.status === 'completed' ? 'Completed' : 
                                             purchase.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                                          </Badge>
                                          <Button 
                                            asChild 
                                            size="sm"
                                            className={purchase.status === 'completed' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}
                                          >
                                            <Link to={purchase.status === 'completed' 
                                              ? `/results/${purchase.id}` 
                                              : `/exam/${purchase.exam_id}?user_exam_id=${purchase.id}`}>
                                              {purchase.status === 'completed' ? 'View Results' : 'Continue Exam'}
                                            </Link>
                                          </Button>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="inProgress" className="mt-0">
                              <div className="space-y-4">
                                {purchases.filter(p => p.status === 'in-progress').length === 0 ? (
                                  <div className="text-center py-8 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                    <p className="text-gray-600 dark:text-gray-400">No exams in progress</p>
                                  </div>
                                ) : (
                                  purchases.filter(p => p.status === 'in-progress').map((purchase) => (
                                    <Card key={purchase.id} className="border-l-4 border-l-yellow-500 dark:border-l-yellow-600">
                                      <CardContent className="p-5">
                                        {/* Same content as above */}
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                          <div>
                                            <div className="flex items-center">
                                              {purchase.exam?.type === 'GATE' ? (
                                                <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                                              ) : (
                                                <Award className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                                              )}
                                              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{purchase.exam?.title}</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                                              <div className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                <span>Started: {new Date(purchase.start_time).toLocaleDateString()}</span>
                                              </div>
                                              <div className="flex items-center">
                                                <Clock className="h-4 w-4 mr-1" />
                                                <span>{purchase.exam?.duration} minutes</span>
                                              </div>
                                              <div className="flex items-center">
                                                <FileText className="h-4 w-4 mr-1" />
                                                <span>{purchase.exam?.total_questions} questions</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="flex items-center gap-3 ml-auto">
                                            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                                              In Progress
                                            </Badge>
                                            <Button 
                                              asChild 
                                              size="sm"
                                            >
                                              <Link to={`/exam/${purchase.exam_id}?user_exam_id=${purchase.id}`}>
                                                Continue Exam
                                              </Link>
                                            </Button>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  ))
                                )}
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="completed" className="mt-0">
                              <div className="space-y-4">
                                {purchases.filter(p => p.status === 'completed').length === 0 ? (
                                  <div className="text-center py-8 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                    <p className="text-gray-600 dark:text-gray-400">No completed exams</p>
                                  </div>
                                ) : (
                                  purchases.filter(p => p.status === 'completed').map((purchase) => (
                                    <Card key={purchase.id} className="border-l-4 border-l-green-500 dark:border-l-green-600">
                                      <CardContent className="p-5">
                                        {/* Same content as above */}
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                          <div>
                                            <div className="flex items-center">
                                              {purchase.exam?.type === 'GATE' ? (
                                                <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                                              ) : (
                                                <Award className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                                              )}
                                              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{purchase.exam?.title}</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                                              <div className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                <span>Completed: {new Date(purchase.end_time).toLocaleDateString()}</span>
                                              </div>
                                              <div className="flex items-center">
                                                <Clock className="h-4 w-4 mr-1" />
                                                <span>{purchase.exam?.duration} minutes</span>
                                              </div>
                                              <div className="flex items-center">
                                                <Award className="h-4 w-4 mr-1" />
                                                <span>Score: {purchase.score || 0}/{purchase.exam?.total_questions}</span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="flex items-center gap-3 ml-auto">
                                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                              Completed
                                            </Badge>
                                            <Button 
                                              asChild 
                                              size="sm"
                                              className="bg-green-600 hover:bg-green-700"
                                            >
                                              <Link to={`/results/${purchase.id}`}>
                                                View Results
                                              </Link>
                                            </Button>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  ))
                                )}
                              </div>
                            </TabsContent>
                          </Tabs>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'performance' && (
                    <div className="p-6">
                      <h2 className="text-2xl font-bold font-work-sans text-gray-900 dark:text-white mb-6">Performance Analytics</h2>
                      
                      {purchases.filter(p => p.status === 'completed').length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                          <BarChart3 className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No performance data available</h3>
                          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                            Complete some exams to see your performance analytics.
                          </p>
                          <Button asChild>
                            <Link to="/mock-tests">Explore Mock Tests</Link>
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <Card className="bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800">
                              <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-sm font-medium text-green-800 dark:text-green-300">Average Score</h3>
                                  <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div className="text-3xl font-bold text-green-900 dark:text-green-300">
                                  {Math.round(purchases
                                    .filter(p => p.status === 'completed')
                                    .reduce((acc, p) => acc + (p.score || 0), 0) / 
                                    purchases.filter(p => p.status === 'completed').length
                                  )}%
                                </div>
                              </CardContent>
                            </Card>
                            
                            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
                              <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">Exams Completed</h3>
                                  <BookCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="text-3xl font-bold text-blue-900 dark:text-blue-300">
                                  {purchases.filter(p => p.status === 'completed').length}
                                </div>
                              </CardContent>
                            </Card>
                            
                            <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800">
                              <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-sm font-medium text-purple-800 dark:text-purple-300">Time Spent</h3>
                                  <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div className="text-3xl font-bold text-purple-900 dark:text-purple-300">
                                  {purchases
                                    .filter(p => p.status === 'completed' && p.end_time && p.start_time)
                                    .reduce((acc, p) => {
                                      const start = new Date(p.start_time);
                                      const end = new Date(p.end_time);
                                      return acc + (end.getTime() - start.getTime()) / (1000 * 60);
                                    }, 0).toFixed(0)} min
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          
                          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Exam Results</h3>
                            <div className="space-y-4">
                              {purchases
                                .filter(p => p.status === 'completed')
                                .sort((a, b) => new Date(b.end_time) - new Date(a.end_time))
                                .slice(0, 3)
                                .map((purchase) => (
                                  <div key={purchase.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                                    <div>
                                      <div className="flex items-center">
                                        {purchase.exam?.type === 'GATE' ? (
                                          <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                                        ) : (
                                          <Award className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                                        )}
                                        <h4 className="font-medium text-gray-900 dark:text-white">{purchase.exam?.title}</h4>
                                      </div>
                                      <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        Completed: {new Date(purchase.end_time).toLocaleDateString()}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                      <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Score</div>
                                        <div className="font-bold text-gray-900 dark:text-white">{purchase.score || 0}/{purchase.exam?.total_questions}</div>
                                      </div>
                                      <Button asChild size="sm" variant="outline">
                                        <Link to={`/results/${purchase.id}`}>View</Link>
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'bookmarks' && (
                    <div className="p-6">
                      <h2 className="text-2xl font-bold font-work-sans text-gray-900 dark:text-white mb-6">Bookmarked Questions</h2>
                      
                      <div className="text-center py-12 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                        <Bookmark className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No bookmarked questions</h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                          Bookmark important questions while taking tests to review them later.
                        </p>
                        <Button asChild>
                          <Link to="/mock-tests">Explore Mock Tests</Link>
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'settings' && (
                    <div className="p-6">
                      <h2 className="text-2xl font-bold font-work-sans text-gray-900 dark:text-white mb-6">Account Settings</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                              <input 
                                type="text" 
                                defaultValue={user.user_metadata?.name || ""}
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                placeholder="Enter your full name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                              <input 
                                type="email" 
                                value={user.email}
                                disabled
                                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                              />
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Email cannot be changed</p>
                            </div>
                          </div>
                        </div>
                        
                        <Separator className="my-6" />
                        
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Password</h3>
                          <Button variant="outline">Change Password</Button>
                        </div>
                        
                        <Separator className="my-6" />
                        
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Actions</h3>
                          <Button variant="destructive" onClick={handleLogout}>
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
