
import { useEffect, useState } from "react";
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
import { Loader2, Calendar, AlertCircle, CheckCircle, ShoppingBag, BookOpen, User, FileText, ExternalLink, Award } from "lucide-react";

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
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <Card className="sticky top-20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-3xl font-bold">
                      {user?.email?.[0].toUpperCase() || <User className="h-12 w-12" />}
                    </div>
                  </div>
                  <CardTitle className="text-center">{user?.email?.split('@')[0] || "User"}</CardTitle>
                  <CardDescription className="text-center">{user?.email}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 py-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Member since</span>
                      <span className="font-medium">Apr 2023</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Exams taken</span>
                      <span className="font-medium">{purchases?.length || 0}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => navigate("/dashboard")}>
                    Go to Dashboard
                  </Button>
                </CardFooter>
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
                </TabsList>
                
                <TabsContent value="purchases" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Purchases</CardTitle>
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
                            <Card key={index} className="overflow-hidden">
                              <CardHeader className="bg-blue-50 py-4">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <CardTitle className="text-lg">{purchase.exam?.title || "Exam Package"}</CardTitle>
                                    <CardDescription>{purchase.exam?.category || "Unknown"} - {purchase.exam?.type || "Mock Test"}</CardDescription>
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
                                      {new Date(new Date(purchase.created_at).getTime() + 10 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-sm text-gray-500">Amount Paid</div>
                                    <div className="font-medium mt-1">
                                      ₹{purchase.amount}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-sm text-gray-500">Payment Status</div>
                                    <div className="font-medium text-green-600 mt-1">
                                      {purchase.status || "Completed"}
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                              <CardFooter className="border-t bg-gray-50 py-3 flex justify-between">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => navigate(`/dashboard`)}
                                >
                                  View Details
                                </Button>
                                <Button 
                                  size="sm"
                                  onClick={() => navigate(`/exam/${purchase.exam_id}`)}
                                >
                                  Take Test
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
                  <Card>
                    <CardHeader>
                      <CardTitle>Recommended for You</CardTitle>
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
                            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                              <div className={`h-2 bg-gradient-to-r ${exam.category === 'NISM' ? 'from-blue-600 to-blue-800' : 'from-indigo-600 to-indigo-800'}`}></div>
                              <CardHeader className="pb-2">
                                <CardTitle className="text-lg">{exam.title}</CardTitle>
                                <CardDescription className="flex items-center">
                                  <BookOpen className="h-4 w-4 mr-1" />
                                  {exam.category} - {exam.type}
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="pb-3">
                                <div className="text-sm text-gray-500 line-clamp-2 mb-2">
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
                              <CardFooter className="bg-gray-50 pt-3">
                                <Button 
                                  className="w-full"
                                  onClick={() => navigate(`/payment/${exam.id}`)}
                                >
                                  Purchase for ₹{exam.fee}
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
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
