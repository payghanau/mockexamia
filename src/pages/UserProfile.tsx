import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  BookOpen, 
  Award, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  Edit, 
  Save, 
  X, 
  Upload, 
  Trash2, 
  LogOut 
} from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mock data for user profile
const mockUserData = {
  id: "user123",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+91 9876543210",
  avatar: "/avatars/user1.png",
  joinedDate: "2023-01-15",
  subscription: {
    type: "Premium",
    status: "active",
    expiresAt: "2023-12-31",
  },
  progress: {
    nism: {
      completed: 8,
      total: 12,
      score: 76,
    },
    gate: {
      completed: 5,
      total: 15,
      score: 68,
    },
  },
  certificates: [
    {
      id: "cert001",
      name: "NISM Series VIII - Equity Derivatives",
      issueDate: "2023-03-20",
      score: 82,
      status: "verified",
    },
    {
      id: "cert002",
      name: "NISM Series VII - Securities Operations",
      issueDate: "2023-02-10",
      score: 78,
      status: "verified",
    },
  ],
  recentExams: [
    {
      id: "exam001",
      name: "NISM Mutual Funds Mock Test 3",
      date: "2023-05-15",
      score: 85,
      totalQuestions: 100,
      correctAnswers: 85,
    },
    {
      id: "exam002",
      name: "GATE CSE Full Mock Test 2",
      date: "2023-05-10",
      score: 72,
      totalQuestions: 65,
      correctAnswers: 47,
    },
    {
      id: "exam003",
      name: "NISM Securities Operations Practice Test",
      date: "2023-05-05",
      score: 90,
      totalQuestions: 50,
      correctAnswers: 45,
    },
  ],
  savedNotes: [
    {
      id: "note001",
      title: "NISM Series VIII Important Points",
      date: "2023-04-20",
      content: "Key points about derivatives market regulations...",
    },
    {
      id: "note002",
      title: "GATE CSE Algorithms Revision",
      date: "2023-04-15",
      content: "Time complexity analysis of sorting algorithms...",
    },
  ],
};

const UserProfile = () => {
  const { user, isLoading, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // State for user data
  const [userData, setUserData] = useState(mockUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // State for notes
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteContent, setNoteContent] = useState("");
  
  // Load user data
  useEffect(() => {
    // In a real app, we would fetch user data from an API
    // For now, we'll use the mock data
    if (user) {
      // If we have real user data from auth context, update some fields
      setUserData(prevData => ({
        ...prevData,
        name: user.user_metadata?.name || user.email?.split('@')[0] || prevData.name,
        email: user.email || prevData.email,
      }));
      
      setEditedUserData({
        name: user.user_metadata?.name || user.email?.split('@')[0] || mockUserData.name,
        email: user.email || mockUserData.email,
        phone: mockUserData.phone,
      });
    }
  }, [user]);
  
  // Handle edit profile
  const handleEditProfile = () => {
    setIsEditing(true);
  };
  
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedUserData({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
    });
  };
  
  const handleSaveProfile = () => {
    // In a real app, we would send the updated data to an API
    setUserData(prevData => ({
      ...prevData,
      name: editedUserData.name,
      email: editedUserData.email,
      phone: editedUserData.phone,
    }));
    
    setIsEditing(false);
    
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
  };
  
  // Handle avatar upload
  const handleAvatarUpload = () => {
    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false);
      
      toast({
        title: "Avatar updated",
        description: "Your profile picture has been updated successfully.",
      });
    }, 1500);
  };
  
  // Handle account deletion
  const handleDeleteAccount = () => {
    setIsDeleting(true);
    
    // Simulate deletion delay
    setTimeout(() => {
      setIsDeleting(false);
      
      toast({
        title: "Account deleted",
        description: "Your account has been permanently deleted.",
        variant: "destructive",
      });
      
      // Log out and redirect to home page
      logout();
      navigate("/");
    }, 1500);
  };
  
  // Handle note selection
  const handleNoteSelect = (note) => {
    setSelectedNote(note);
    setNoteContent(note.content);
    setIsEditingNote(false);
  };
  
  // Handle note editing
  const handleEditNote = () => {
    setIsEditingNote(true);
  };
  
  const handleSaveNote = () => {
    // Update the note content
    const updatedNotes = userData.savedNotes.map(note => 
      note.id === selectedNote.id 
        ? { ...note, content: noteContent } 
        : note
    );
    
    setUserData(prevData => ({
      ...prevData,
      savedNotes: updatedNotes,
    }));
    
    setSelectedNote(prev => ({ ...prev, content: noteContent }));
    setIsEditingNote(false);
    
    toast({
      title: "Note updated",
      description: "Your note has been saved successfully.",
    });
  };
  
  const handleDeleteNote = () => {
    // Remove the note
    const updatedNotes = userData.savedNotes.filter(note => note.id !== selectedNote.id);
    
    setUserData(prevData => ({
      ...prevData,
      savedNotes: updatedNotes,
    }));
    
    setSelectedNote(null);
    
    toast({
      title: "Note deleted",
      description: "Your note has been deleted successfully.",
    });
  };
  
  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error);
      toast({
        title: "Logout failed",
        description: "There was an error logging out. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  // Calculate subscription days remaining
  const calculateDaysRemaining = () => {
    if (!userData.subscription || !userData.subscription.expiresAt) {
      return 0;
    }
    
    const currentDate = new Date();
    const expiryDate = new Date(userData.subscription.expiresAt);
    const timeDiff = expiryDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    return Math.max(0, daysRemaining);
  };
  
  // Calculate progress percentages
  const calculateProgress = (completed, total) => {
    if (!total || total === 0) return 0;
    return Math.round((completed / total) * 100);
  };
  
  const nismProgress = calculateProgress(userData.progress.nism.completed, userData.progress.nism.total);
  const gateProgress = calculateProgress(userData.progress.gate.completed, userData.progress.gate.total);
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }
  
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 profile-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Sidebar */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader className="text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={userData.avatar} alt={userData.name} />
                      <AvatarFallback className="text-2xl">
                        {userData.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Upload className="h-4 w-4 mr-1" /> Change Photo
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Update Profile Picture</DialogTitle>
                          <DialogDescription>
                            Upload a new profile picture. Recommended size: 300x300 pixels.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="flex items-center justify-center">
                            <Label htmlFor="picture" className="sr-only">Picture</Label>
                            <Input id="picture" type="file" accept="image/*" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => {}}>Cancel</Button>
                          <Button onClick={handleAvatarUpload} disabled={isUploading}>
                            {isUploading ? (
                              <>
                                <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                                Uploading...
                              </>
                            ) : (
                              'Upload'
                            )}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    
                    <div>
                      <h2 className="text-2xl font-bold">{userData.name}</h2>
                      <p className="text-gray-500 dark:text-gray-400">
                        Member since {formatDate(userData.joinedDate)}
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <Badge variant={userData.subscription.status === 'active' ? 'default' : 'outline'} className="text-xs">
                        {userData.subscription.type} Account
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{userData.email}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{userData.phone}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Joined {formatDate(userData.joinedDate)}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Subscription Status</span>
                        <Badge variant={userData.subscription.status === 'active' ? 'default' : 'destructive'}>
                          {userData.subscription.status === 'active' ? 'Active' : 'Expired'}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Expires In</span>
                        <span>{calculateDaysRemaining()} days</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" onClick={() => navigate('/payment/subscription')}>
                      {userData.subscription.status === 'active' ? 'Extend Subscription' : 'Renew Subscription'}
                    </Button>
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col space-y-4">
                  <Button variant="outline" className="w-full" onClick={handleEditProfile}>
                    <Edit className="h-4 w-4 mr-2" /> Edit Profile
                  </Button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" className="w-full">
                        <LogOut className="h-4 w-4 mr-2" /> Logout
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
                        <AlertDialogDescription>
                          You will be redirected to the login page.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardFooter>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2">
              <Tabs defaultValue="dashboard" className="w-full">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="exams">Exams</TabsTrigger>
                  <TabsTrigger value="certificates">Certificates</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>
                
                {/* Dashboard Tab */}
                <TabsContent value="dashboard">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Your Progress</CardTitle>
                        <CardDescription>Track your exam preparation progress</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">NISM Exams</span>
                            <span className="text-sm text-gray-500">
                              {userData.progress.nism.completed}/{userData.progress.nism.total} completed
                            </span>
                          </div>
                          <Progress value={nismProgress} className="h-2" />
                          <div className="flex justify-between text-sm">
                            <span>Average Score: {userData.progress.nism.score}%</span>
                            <span>{nismProgress}% Complete</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">GATE Exams</span>
                            <span className="text-sm text-gray-500">
                              {userData.progress.gate.completed}/{userData.progress.gate.total} completed
                            </span>
                          </div>
                          <Progress value={gateProgress} className="h-2" />
                          <div className="flex justify-between text-sm">
                            <span>Average Score: {userData.progress.gate.score}%</span>
                            <span>{gateProgress}% Complete</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Exams</CardTitle>
                        <CardDescription>Your most recent exam attempts</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {userData.recentExams.map((exam) => (
                            <div key={exam.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                              <div className="flex flex-col">
                                <span className="font-medium">{exam.name}</span>
                                <span className="text-sm text-gray-500">{formatDate(exam.date)}</span>
                              </div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right">
                                  <div className="font-medium">{exam.score}%</div>
                                  <div className="text-sm text-gray-500">
                                    {exam.correctAnswers}/{exam.totalQuestions} correct
                                  </div>
                                </div>
                                <Button variant="outline" size="sm" onClick={() => navigate(`/results/${exam.id}`)}>
                                  View
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" onClick={() => navigate('/dashboard')}>
                          View All Exams
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                
                {/* Exams Tab */}
                <TabsContent value="exams">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Exam History</CardTitle>
                      <CardDescription>All your attempted exams and practice tests</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {userData.recentExams.map((exam) => (
                          <div key={exam.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div className="flex flex-col mb-2 md:mb-0">
                              <span className="font-medium">{exam.name}</span>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="h-3 w-3 mr-1" />
                                {formatDate(exam.date)}
                              </div>
                            </div>
                            <div className="flex items-center justify-between md:justify-end w-full md:w-auto md:space-x-4">
                              <div className="flex items-center">
                                <Badge variant={exam.score >= 70 ? "default" : "outline"} className="mr-2">
                                  {exam.score}%
                                </Badge>
                                <span className="text-sm text-gray-500">
                                  {exam.correctAnswers}/{exam.totalQuestions}
                                </span>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm" onClick={() => navigate(`/results/${exam.id}`)}>
                                  Results
                                </Button>
                                <Button size="sm" onClick={() => navigate(`/exam/${exam.id}?mode=review`)}>
                                  Review
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" onClick={() => navigate('/mock-tests')}>
                        Take New Mock Test
                      </Button>
                      <Button onClick={() => navigate('/dashboard')}>
                        Go to Dashboard
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                {/* Certificates Tab */}
                <TabsContent value="certificates">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Certificates</CardTitle>
                      <CardDescription>Certificates you've earned</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {userData.certificates.map((cert) => (
                          <div key={cert.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div className="flex flex-col mb-2 md:mb-0">
                              <div className="flex items-center">
                                <span className="font-medium">{cert.name}</span>
                                {cert.status === 'verified' && (
                                  <Badge variant="default" className="ml-2">
                                    <CheckCircle className="h-3 w-3 mr-1" /> Verified
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="h-3 w-3 mr-1" />
                                Issued on {formatDate(cert.issueDate)}
                              </div>
                            </div>
                            <div className="flex items-center justify-between md:justify-end w-full md:w-auto md:space-x-4">
                              <div>
                                <Badge variant="outline">Score: {cert.score}%</Badge>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                                <Button size="sm">
                                  Download
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        {userData.certificates.length === 0 && (
                          <div className="text-center py-8">
                            <Award className="h-12 w-12 mx-auto text-gray-400" />
                            <h3 className="mt-4 text-lg font-medium">No Certificates Yet</h3>
                            <p className="mt-2 text-gray-500">
                              Complete exams and earn certificates to display here.
                            </p>
                            <Button className="mt-4" onClick={() => navigate('/mock-tests')}>
                              Take an Exam
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Notes Tab */}
                <TabsContent value="notes">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <Card className="h-full">
                        <CardHeader>
                          <CardTitle>Your Notes</CardTitle>
                          <CardDescription>Study notes and reminders</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {userData.savedNotes.map((note) => (
                              <div 
                                key={note.id} 
                                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                                  selectedNote?.id === note.id 
                                    ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800' 
                                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                }`}
                                onClick={() => handleNoteSelect(note)}
                              >
                                <h4 className="font-medium truncate">{note.title}</h4>
                                <p className="text-xs text-gray-500">{formatDate(note.date)}</p>
                              </div>
                            ))}
                            
                            {userData.savedNotes.length === 0 && (
                              <div className="text-center py-8">
                                <FileText className="h-8 w-8 mx-auto text-gray-400" />
                                <p className="mt-2 text-sm text-gray-500">No notes yet</p>
                              </div>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Create New Note
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                    
                    <div className="md:col-span-2">
                      <Card className="h-full">
                        <CardHeader className="flex flex-row items-center justify-between">
                          <div>
                            <CardTitle>{selectedNote ? selectedNote.title : 'Note Details'}</CardTitle>
                            {selectedNote && (
                              <CardDescription>
                                Created on {formatDate(selectedNote.date)}
                              </CardDescription>
                            )}
                          </div>
                          
                          {selectedNote && !isEditingNote && (
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" onClick={handleEditNote}>
                                <Edit className="h-4 w-4 mr-1" /> Edit
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="destructive" size="sm">
                                    <Trash2 className="h-4 w-4 mr-1" /> Delete
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This will permanently delete this note. This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={handleDeleteNote}>Delete</AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          )}
                          
                          {selectedNote && isEditingNote && (
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" onClick={() => setIsEditingNote(false)}>
                                <X className="h-4 w-4 mr-1" /> Cancel
                              </Button>
                              <Button size="sm" onClick={handleSaveNote}>
                                <Save className="h-4 w-4 mr-1" /> Save
                              </Button>
                            </div>
                          )}
                        </CardHeader>
                        
                        <CardContent>
                          {selectedNote ? (
                            isEditingNote ? (
                              <textarea
                                className="w-full h-64 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={noteContent}
                                onChange={(e) => setNoteContent(e.target.value)}
                              />
                            ) : (
                              <div className="prose dark:prose-invert max-w-none">
                                <p>{selectedNote.content}</p>
                              </div>
                            )
                          ) : (
                            <div className="text-center py-16">
                              <FileText className="h-12 w-12 mx-auto text-gray-400" />
                              <h3 className="mt-4 text-lg font-medium">No Note Selected</h3>
                              <p className="mt-2 text-gray-500">
                                Select a note from the list to view its contents.
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      {/* Edit Profile Dialog */}
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile information.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={editedUserData.name}
                onChange={(e) => setEditedUserData({ ...editedUserData, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={editedUserData.email}
                onChange={(e) => setEditedUserData({ ...editedUserData, email: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                value={editedUserData.phone}
                onChange={(e) => setEditedUserData({ ...editedUserData, phone: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleCancelEdit}>
              Cancel
            </Button>
            <Button onClick={handleSaveProfile}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Account Dialog */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" className="hidden">
            Delete Account
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteAccount} disabled={isDeleting}>
              {isDeleting ? (
                <>
                  <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                  Deleting...
                </>
              ) : (
                'Delete Account'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <Footer />
    </>
  );
};

export default UserProfile;
