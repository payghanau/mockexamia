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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LogOut, Menu, Layout, User } from "lucide-react"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  return (
    <div className="bg-white sticky top-0 z-50 border-b">
      <div className="container py-4 px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-gray-800">
          myturnindia
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/mock-tests" className="text-gray-600 hover:text-gray-800">
            Mock Tests
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-gray-800">
            Pricing
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="px-2">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-60">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navigate through myturnindia
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <Link to="/mock-tests" className="text-gray-600 hover:text-gray-800 block py-2">
                    Mock Tests
                  </Link>
                  <Link to="/pricing" className="text-gray-600 hover:text-gray-800 block py-2">
                    Pricing
                  </Link>
                  <Link to="/contact" className="text-gray-600 hover:text-gray-800 block py-2">
                    Contact
                  </Link>
                  {isAuthenticated ? (
                    <>
                      <Link to="/dashboard" className="text-gray-600 hover:text-gray-800 block py-2">
                        Dashboard
                      </Link>
                      <Link to="/profile" className="text-gray-600 hover:text-gray-800 block py-2">
                        My Profile
                      </Link>
                      <Button variant="ghost" className="justify-start" onClick={logout}>
                        Log out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className={cn("text-gray-600 hover:text-gray-800 block py-2", isLoginPage ? 'hidden' : '')}>
                        Login
                      </Link>
                      <Link to="/register" className={cn("text-gray-600 hover:text-gray-800 block py-2", isRegisterPage ? 'hidden' : '')}>
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback>
                      {user?.email?.charAt(0)?.toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.email?.split('@')[0]}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">
                    <Layout className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>My Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              {!isLoginPage && (
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Log In
                  </Button>
                </Link>
              )}
              {!isRegisterPage && (
                <Link to="/register">
                  <Button size="sm">Sign Up</Button>
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
