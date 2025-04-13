
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { examService } from "@/services/api";
import { 
  Loader2, Calendar, AlertCircle, CheckCircle, 
  ShoppingBag, BookOpen, User, FileText, 
  ExternalLink, Award, Clock, BookMarked,
  CheckCheck, BarChart4, BadgeCheck, Medal
} from "lucide-react";

const UserProfile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "My Profile - myturnindia";
    
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to view your profile",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [isAuthenticated, navigate, toast]);
  
  // Fetch user's purchases
  const { data: purchases, isLoading: isLoadingPurchases } = useQuery({
    queryKey: ['user-purchases', user?.id],
    queryFn: () => examService.getUserPurchases(user?.id),
    enabled: !!user?.id,
  });
  
  // Fetch available exams for recommendations
  const { data: availableExams, isLoading: isLoadingExams } = useQuery({
    queryKey: ['available-exams'],
    queryFn: () => examService.getAllExams(),
  });
  
  const getRecommendedExams = () => {
    if (!availableExams || !purchases) return [];
    
    // Filter out exams that the user has already purchased
    const purchasedExamIds = purchases.map(p => p.exam_id);
    return availableExams
      .filter(exam => !purchasedExamIds.includes(exam.id))
      .sort(() => 0.5 - Math.random()) // Randomize
      .slice(0, 3); // Get top 3
  };
  
  if (!isAuthenticated) {
    return null; // Already redirecting in useEffect
  }
  
  const hasPurchases = purchases && purchases.length > 0;
  const recommendedExams = getRecommendedExams();
  
  // User stats
  const totalAttempts = hasPurchases ? purchases.length : 0;
  const completedExams = hasPurchases ? purchases.filter(p => p.status === 'completed').length : 0;
  const averageScore = hasPurchases && completedExams > 0 
    ? (purchases.filter(p => p.status === 'completed').reduce((acc, curr) => acc + (curr.score || 0), 0) / completedExams).toFixed(1) 
    : 'N/A';
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="flex-1 px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <Card className="sticky top-20 overflow-hidden border-0 shadow-md">
                <div className="h-20 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <CardHeader className="pb-3 relative">
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                    <div className="h-24 w-24 rounded-full bg-white p-1 shadow-md flex items-center justify-center text-blue-700 text-3xl font-bold overflow-hidden">
                      {user?.email?.[0].toUpperCase() || <User className="h-12 w-12" />}
                    </div>
                  </div>
                  <div className="mt-10 text-center">
                    <CardTitle className="text-xl">{user?.email?.split('@')[0] || "User"}</CardTitle>
                    <CardDescription className="text-sm">{user?.email}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 text-center py-3 border-y">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{totalAttempts}</div>
                      <div className="text-xs text-gray-500">Enrolled</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{completedExams}</div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{averageScore}</div>
                      <div className="text-xs text-gray-500">Avg Score</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-gray-500">Joined</span>
                      <span className="ml-auto font-medium">Apr 2023</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Award className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-gray-500">Status</span>
                      <span className="ml-auto font-medium text-blue-600">Active</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookMarked className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-gray-500">Last activity</span>
                      <span className="ml-auto font-medium">Today</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50">
                  <Button variant="outline" className="w-full" onClick={() => navigate("/dashboard")}>
                    View All Exams
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Stats Card */}
              <Card className="mt-6 shadow-md border-0">
                <CardHeader>
                  <CardTitle className="text-base flex items-center">
                    <BarChart4 className="h-4 w-4 mr-2" />
                    Your Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <div className="text-sm text-gray-500">Completion Rate</div>
                        <div className="text-sm font-medium">{totalAttempts > 0 ? Math.round((completedExams / totalAttempts) * 100) : 0}%</div>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${totalAttempts > 0 ? Math.round((completedExams / totalAttempts) * 100) : 0}%` }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <div className="text-sm text-gray-500">Accuracy</div>
                        <div className="text-sm font-medium">{averageScore !== 'N/A' ? `${Math.min(parseFloat(averageScore), 100)}%` : '0%'}</div>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${averageScore !== 'N/A' ? Math.min(parseFloat(averageScore), 100) : 0}%` }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-9">
              <Tabs defaultValue="purchases" className="w-full">
                <TabsList className="mb-8 bg-white shadow-sm border border-gray-200 p-1 rounded-lg w-full">
                  <TabsTrigger 
                    value="purchases" 
                    className="flex-1 py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-none rounded-md"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    My Purchases
                  </TabsTrigger>
                  <TabsTrigger 
                    value="recommendations" 
                    className="flex-1 py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-none rounded-md"
                  >
                    <Award className="h-4 w-4 mr-2" />
                    Recommendations
                  </TabsTrigger>
                  <TabsTrigger 
                    value="achievements" 
                    className="flex-1 py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-none rounded-md"
                  >
                    <Medal className="h-4 w-4 mr-2" />
                    Achievements
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="purchases" className="mt-0">
                  <Card className="shadow-md border-0">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center">
                        <ShoppingBag className="h-5 w-5 mr-2 text-blue-600" />
                        My Purchases
                      </CardTitle>
                      <CardDescription>
                        View all exam packages you've purchased on myturnindia
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {isLoadingPurchases ? (
                        <div className="flex justify-center py-8">
                          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                        </div>
                      ) : hasPurchases ? (
                        <div className="space-y-4">
                          {purchases.map((purchase, index) => (
                            <Card key={index} className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                              <CardHeader className="bg-blue-50 py-4">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <CardTitle className="text-lg">{purchase.exam?.title || "Exam Package"}</CardTitle>
                                    <CardDescription className="flex items-center text-sm">
                                      <BookOpen className="h-3 w-3 mr-1 text-gray-500" />
                                      {purchase.exam?.category || "Unknown"} - {purchase.exam?.type || "Mock Test"}
                                    </CardDescription>
                                  </div>
                                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Active
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent className="py-4">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                  <div>
                                    <div className="text-sm text-gray-500">Purchase Date</div>
                                    <div className="font-medium flex items-center mt-1">
                                      <Calendar className="h-4 w-4 text-blue-600 mr-1" />
                                      {new Date(purchase.created_at).toLocaleDateString()}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-sm text-gray-500">Valid Until</div>
                                    <div className="font-medium flex items-center mt-1">
                                      <Calendar className="h-4 w-4 text-blue-600 mr-1" />
                                      {new Date(new Date(purchase.created_at).getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-sm text-gray-500">Amount Paid</div>
                                    <div className="font-medium mt-1">
                                      ₹{purchase.amount}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-sm text-gray-500">Completion</div>
                                    <div className="font-medium flex items-center mt-1">
                                      <Clock className="h-4 w-4 text-blue-600 mr-1" />
                                      {purchase.status === 'completed' ? (
                                        <span className="text-green-600 flex items-center">
                                          <CheckCheck className="h-4 w-4 mr-1" /> Completed
                                        </span>
                                      ) : (
                                        <span>In Progress</span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                {purchase.status === 'completed' && (
                                  <div className="mt-4 pt-4 border-t">
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="text-sm text-gray-500">Your Score</span>
                                      <span className="font-medium">{purchase.score || 0}/{purchase.exam?.total_questions || 100} ({purchase.score ? Math.round((purchase.score / purchase.exam?.total_questions) * 100) : 0}%)</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                      <div 
                                        className={`h-2 rounded-full ${purchase.score && purchase.exam?.total_questions && (purchase.score / purchase.exam.total_questions) >= 0.7 ? 'bg-green-500' : 'bg-blue-600'}`} 
                                        style={{ width: `${purchase.score && purchase.exam?.total_questions ? (purchase.score / purchase.exam.total_questions) * 100 : 0}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                )}
                              </CardContent>
                              <CardFooter className="border-t bg-gray-50 py-3 flex justify-between">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => navigate(`/results/${purchase.id}`)}
                                  disabled={purchase.status !== 'completed'}
                                >
                                  {purchase.status === 'completed' ? 'View Results' : 'Not Completed'}
                                </Button>
                                <Button 
                                  size="sm"
                                  onClick={() => navigate(`/exam/${purchase.exam_id}`)}
                                >
                                  {purchase.status === 'completed' ? 'Retake Test' : 'Take Test'}
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <Alert>
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>No purchases found</AlertTitle>
                          <AlertDescription>
                            You haven't purchased any exam packages yet. Check out our recommendations!
                          </AlertDescription>
                        </Alert>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="recommendations" className="mt-0">
                  <Card className="shadow-md border-0">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center">
                        <Award className="h-5 w-5 mr-2 text-blue-600" />
                        Recommended for You
                      </CardTitle>
                      <CardDescription>
                        Personalized recommendations based on your profile and interests
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {isLoadingExams ? (
                        <div className="flex justify-center py-8">
                          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {recommendedExams.map((exam, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
                              <div className={`h-2 bg-gradient-to-r ${exam.category === 'NISM' ? 'from-blue-600 to-blue-800' : 'from-indigo-600 to-indigo-800'}`}></div>
                              <CardHeader className="pb-2">
                                <CardTitle className="text-lg">{exam.title}</CardTitle>
                                <CardDescription className="flex items-center">
                                  <BookOpen className="h-4 w-4 mr-1" />
                                  {exam.category} - {exam.type}
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="pb-3">
                                <div className="text-sm text-gray-500 line-clamp-2 mb-3">
                                  {exam.description || `Comprehensive ${exam.category} exam covering all essential topics for successful certification.`}
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                  <div className="bg-gray-50 p-2 rounded flex flex-col">
                                    <span className="text-gray-500">Questions</span>
                                    <span className="font-medium">{exam.total_questions}</span>
                                  </div>
                                  <div className="bg-gray-50 p-2 rounded flex flex-col">
                                    <span className="text-gray-500">Duration</span>
                                    <span className="font-medium">{exam.duration} min</span>
                                  </div>
                                </div>
                              </CardContent>
                              <CardFooter className="bg-gray-50 pt-3 flex justify-between">
                                <div className="text-lg font-bold text-blue-600">₹{exam.fee}</div>
                                <Button 
                                  onClick={() => navigate(`/payment/${exam.id}`)}
                                >
                                  Purchase
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                          
                          {recommendedExams.length === 0 && (
                            <div className="col-span-3 text-center py-12">
                              <Award className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                              <h3 className="text-lg font-medium text-gray-800 mb-2">No recommendations yet</h3>
                              <p className="text-gray-500 max-w-md mx-auto mb-4">
                                We don't have any recommendations for you right now. Explore all our exams to find what suits you best.
                              </p>
                              <Button 
                                variant="outline" 
                                onClick={() => navigate("/dashboard")}
                              >
                                Browse All Exams
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-center border-t py-4">
                      <Button 
                        variant="outline" 
                        onClick={() => navigate("/dashboard")}
                        className="flex items-center"
                      >
                        View All Available Tests
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="achievements" className="mt-0">
                  <Card className="shadow-md border-0">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center">
                        <Medal className="h-5 w-5 mr-2 text-blue-600" />
                        Your Achievements
                      </CardTitle>
                      <CardDescription>
                        Track your progress and unlock achievements as you complete exams
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="border border-gray-100">
                          <CardHeader className="pb-3">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                              <BadgeCheck className="h-6 w-6 text-blue-600" />
                            </div>
                            <CardTitle className="text-center text-base">First Exam</CardTitle>
                            <CardDescription className="text-center text-xs">
                              Complete your first exam
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pb-4 pt-0 text-center">
                            {completedExams > 0 ? (
                              <div className="text-green-600 flex items-center justify-center">
                                <CheckCircle className="h-4 w-4 mr-1" /> 
                                Completed
                              </div>
                            ) : (
                              <Button variant="outline" size="sm" onClick={() => navigate("/dashboard")}>
                                Take an Exam
                              </Button>
                            )}
                          </CardContent>
                        </Card>
                        
                        <Card className="border border-gray-100">
                          <CardHeader className="pb-3">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                              <Award className="h-6 w-6 text-blue-600" />
                            </div>
                            <CardTitle className="text-center text-base">Perfect Score</CardTitle>
                            <CardDescription className="text-center text-xs">
                              Get 100% on any exam
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pb-4 pt-0 text-center">
                            <div className="text-gray-500 flex items-center justify-center">
                              <Clock className="h-4 w-4 mr-1" /> 
                              In Progress
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="border border-gray-100">
                          <CardHeader className="pb-3">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                              <FileText className="h-6 w-6 text-blue-600" />
                            </div>
                            <CardTitle className="text-center text-base">Exam Mastery</CardTitle>
                            <CardDescription className="text-center text-xs">
                              Complete 5 exams
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pb-4 pt-0 text-center">
                            <div className="flex flex-col items-center">
                              <div className="text-sm mb-1">{completedExams}/5 completed</div>
                              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(completedExams / 5) * 100}%` }}></div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
