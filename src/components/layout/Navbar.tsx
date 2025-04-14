
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Avatar, AvatarImage, AvatarFallback
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LogOut, Menu, Layout, User, BookOpen, Phone, LogIn, UserPlus } from "lucide-react"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-white dark:bg-gray-900 sticky top-0 z-50 border-b dark:border-gray-800">
      <div className="container py-4 px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-gray-800 dark:text-white flex items-center">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-work-sans">myturnindia</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/mock-tests" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors font-work-sans font-semibold">
            Mock Tests
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors font-work-sans font-semibold">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="px-2 dark:text-gray-300">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 dark:bg-gray-900 dark:border-gray-800">
                <SheetHeader>
                  <SheetTitle className="text-left text-gray-900 dark:text-white font-work-sans">Menu</SheetTitle>
                  <SheetDescription className="text-left text-gray-600 dark:text-gray-400 font-work-sans">
                    Navigate through myturnindia
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-6">
                  <Link to="/mock-tests" className="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2 font-work-sans">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Mock Tests
                  </Link>
                  <Link to="/contact" className="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2 font-work-sans">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact
                  </Link>
                  
                  <div className="border-t dark:border-gray-800 pt-4 mt-2"></div>
                  
                  {isAuthenticated ? (
                    <>
                      <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2 font-work-sans">
                        <Layout className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                      <Link to="/profile" className="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2 font-work-sans">
                        <User className="mr-2 h-4 w-4" />
                        My Profile
                      </Link>
                      <Button variant="ghost" className="justify-start text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 p-0 h-auto font-work-sans" onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className={cn("flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2 font-work-sans", isLoginPage ? 'hidden' : '')}>
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                      </Link>
                      <Link to="/register" className={cn("flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2 font-work-sans", isRegisterPage ? 'hidden' : '')}>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/dashboard')} 
                className="hidden md:flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white gap-2 px-3 py-2 font-work-sans"
              >
                <Layout className="h-4 w-4" />
                <span>Dashboard</span>
              </Button>
              
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full p-0"
                onClick={handleProfileClick}
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    {user?.email?.charAt(0)?.toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout}
                className="hidden md:flex text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 font-work-sans"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              {!isLoginPage && (
                <Link to="/login">
                  <Button variant="outline" size="sm" className="dark:text-gray-300 dark:border-gray-700 font-work-sans">
                    Log In
                  </Button>
                </Link>
              )}
              {!isRegisterPage && (
                <Link to="/register">
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-work-sans font-semibold">
                    Sign Up
                  </Button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
