import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  Search, 
  Plus, 
  FileText, 
  UserPlus, 
  Download, 
  Filter 
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import StatCard from "@/components/admin/StatCard";
import SalesChart from "@/components/admin/SalesChart";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="admin-layout">
        <aside className="admin-sidebar bg-white border-r border-gray-200 p-4 fixed h-full overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Dashboard</h3>
              <nav className="space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700">
                  <TrendingUp className="mr-3 h-5 w-5 text-blue-500" />
                  Overview
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
                  <BookOpen className="mr-3 h-5 w-5 text-gray-500" />
                  Exams
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
                  <Users className="mr-3 h-5 w-5 text-gray-500" />
                  Users
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
                  <DollarSign className="mr-3 h-5 w-5 text-gray-500" />
                  Payments
                </a>
              </nav>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Management</h3>
              <nav className="space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
                  <FileText className="mr-3 h-5 w-5 text-gray-500" />
                  Questions
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
                  <UserPlus className="mr-3 h-5 w-5 text-gray-500" />
                  Admins
                </a>
              </nav>
            </div>
          </div>
        </aside>
        
        <main className="admin-content bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-gray-600">Manage exams, users, and analytics</p>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="exams">Exams</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <StatCard 
                    title="Total Users"
                    value="2,543"
                    description="Active users this month"
                    icon={Users}
                    trend={{ value: 12, isPositive: true }}
                    color="blue"
                  />
                  <StatCard 
                    title="Total Exams"
                    value="124"
                    description="Across all categories"
                    icon={BookOpen}
                    color="purple"
                  />
                  <StatCard 
                    title="Revenue"
                    value="₹1,45,230"
                    description="This month's earnings"
                    icon={DollarSign}
                    trend={{ value: 8, isPositive: true }}
                    color="green"
                  />
                  <StatCard 
                    title="Exam Attempts"
                    value="3,842"
                    description="This month's attempts"
                    icon={TrendingUp}
                    trend={{ value: 3, isPositive: false }}
                    color="orange"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sales Overview</CardTitle>
                      <CardDescription>Monthly revenue and exams sold</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                      <SalesChart period="month" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>User Growth</CardTitle>
                      <CardDescription>New user registrations over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center bg-gray-50 rounded-md border border-dashed border-gray-300">
                        <p className="text-gray-500">User growth chart will be displayed here</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Transactions</CardTitle>
                      <CardDescription>Latest exam purchases</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3">User</th>
                              <th scope="col" className="px-6 py-3">Exam</th>
                              <th scope="col" className="px-6 py-3">Amount</th>
                              <th scope="col" className="px-6 py-3">Date</th>
                              <th scope="col" className="px-6 py-3">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b">
                              <td className="px-6 py-4 font-medium text-gray-900">Rahul Sharma</td>
                              <td className="px-6 py-4">NISM Series V-A</td>
                              <td className="px-6 py-4">₹499</td>
                              <td className="px-6 py-4">2023-06-15</td>
                              <td className="px-6 py-4">
                                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                  Completed
                                </span>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <td className="px-6 py-4 font-medium text-gray-900">Priya Patel</td>
                              <td className="px-6 py-4">GATE CSE Full Mock</td>
                              <td className="px-6 py-4">₹799</td>
                              <td className="px-6 py-4">2023-06-14</td>
                              <td className="px-6 py-4">
                                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                  Completed
                                </span>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <td className="px-6 py-4 font-medium text-gray-900">Amit Kumar</td>
                              <td className="px-6 py-4">NISM Series VIII</td>
                              <td className="px-6 py-4">₹599</td>
                              <td className="px-6 py-4">2023-06-14</td>
                              <td className="px-6 py-4">
                                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                  Pending
                                </span>
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <td className="px-6 py-4 font-medium text-gray-900">Sneha Gupta</td>
                              <td className="px-6 py-4">GATE ECE Section Test</td>
                              <td className="px-6 py-4">₹299</td>
                              <td className="px-6 py-4">2023-06-13</td>
                              <td className="px-6 py-4">
                                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                  Completed
                                </span>
                              </td>
                            </tr>
                            <tr className="bg-white">
                              <td className="px-6 py-4 font-medium text-gray-900">Vikram Singh</td>
                              <td className="px-6 py-4">NISM Series X-A</td>
                              <td className="px-6 py-4">₹699</td>
                              <td className="px-6 py-4">2023-06-12</td>
                              <td className="px-6 py-4">
                                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                                  Failed
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="exams">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="relative w-full md:w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input 
                        placeholder="Search exams..." 
                        className="pl-10" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        Filter
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Export
                      </Button>
                      <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        Add Exam
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">Exam Title</th>
                          <th scope="col" className="px-6 py-3">Category</th>
                          <th scope="col" className="px-6 py-3">Questions</th>
                          <th scope="col" className="px-6 py-3">Duration</th>
                          <th scope="col" className="px-6 py-3">Price</th>
                          <th scope="col" className="px-6 py-3">Status</th>
                          <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">NISM Series V-A: Full Mock Test 1</td>
                          <td className="px-6 py-4">NISM</td>
                          <td className="px-6 py-4">100</td>
                          <td className="px-6 py-4">120 min</td>
                          <td className="px-6 py-4">₹499</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="destructive" size="sm">Delete</Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">GATE CSE: Data Structures</td>
                          <td className="px-6 py-4">GATE</td>
                          <td className="px-6 py-4">30</td>
                          <td className="px-6 py-4">45 min</td>
                          <td className="px-6 py-4">₹299</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="destructive" size="sm">Delete</Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">NISM Series VIII: Full Mock Test</td>
                          <td className="px-6 py-4">NISM</td>
                          <td className="px-6 py-4">100</td>
                          <td className="px-6 py-4">120 min</td>
                          <td className="px-6 py-4">₹599</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Draft
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="destructive" size="sm">Delete</Button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="users">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="relative w-full md:w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input 
                        placeholder="Search users..." 
                        className="pl-10" 
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        Filter
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Export
                      </Button>
                      <Button className="flex items-center gap-2">
                        <UserPlus className="h-4 w-4" />
                        Add User
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">Name</th>
                          <th scope="col" className="px-6 py-3">Email</th>
                          <th scope="col" className="px-6 py-3">Joined</th>
                          <th scope="col" className="px-6 py-3">Exams Taken</th>
                          <th scope="col" className="px-6 py-3">Status</th>
                          <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">Rahul Sharma</td>
                          <td className="px-6 py-4">rahul.s@example.com</td>
                          <td className="px-6 py-4">2023-01-15</td>
                          <td className="px-6 py-4">12</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">View</Button>
                              <Button variant="destructive" size="sm">Block</Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">Priya Patel</td>
                          <td className="px-6 py-4">priya.p@example.com</td>
                          <td className="px-6 py-4">2023-02-22</td>
                          <td className="px-6 py-4">8</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">View</Button>
                              <Button variant="destructive" size="sm">Block</Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">Amit Kumar</td>
                          <td className="px-6 py-4">amit.k@example.com</td>
                          <td className="px-6 py-4">2023-03-10</td>
                          <td className="px-6 py-4">5</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                              Inactive
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">View</Button>
                              <Button variant="outline" size="sm">Activate</Button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="payments">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="relative w-full md:w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input 
                        placeholder="Search payments..." 
                        className="pl-10" 
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        Filter
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Export
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">Transaction ID</th>
                          <th scope="col" className="px-6 py-3">User</th>
                          <th scope="col" className="px-6 py-3">Exam</th>
                          <th scope="col" className="px-6 py-3">Amount</th>
                          <th scope="col" className="px-6 py-3">Date</th>
                          <th scope="col" className="px-6 py-3">Payment Method</th>
                          <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">TRX123456</td>
                          <td className="px-6 py-4">Rahul Sharma</td>
                          <td className="px-6 py-4">NISM Series V-A</td>
                          <td className="px-6 py-4">₹499</td>
                          <td className="px-6 py-4">2023-06-15</td>
                          <td className="px-6 py-4">Credit Card</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">TRX123457</td>
                          <td className="px-6 py-4">Priya Patel</td>
                          <td className="px-6 py-4">GATE CSE Full Mock</td>
                          <td className="px-6 py-4">₹799</td>
                          <td className="px-6 py-4">2023-06-14</td>
                          <td className="px-6 py-4">UPI</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">TRX123458</td>
                          <td className="px-6 py-4">Amit Kumar</td>
                          <td className="px-6 py-4">NISM Series VIII</td>
                          <td className="px-6 py-4">₹599</td>
                          <td className="px-6 py-4">2023-06-14</td>
                          <td className="px-6 py-4">Net Banking</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">TRX123459</td>
                          <td className="px-6 py-4">Sneha Gupta</td>
                          <td className="px-6 py-4">GATE ECE Section Test</td>
                          <td className="px-6 py-4">₹299</td>
                          <td className="px-6 py-4">2023-06-13</td>
                          <td className="px-6 py-4">UPI</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-medium text-gray-900">TRX123460</td>
                          <td className="px-6 py-4">Vikram Singh</td>
                          <td className="px-6 py-4">NISM Series X-A</td>
                          <td className="px-6 py-4">₹699</td>
                          <td className="px-6 py-4">2023-06-12</td>
                          <td className="px-6 py-4">Credit Card</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                              Failed
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
