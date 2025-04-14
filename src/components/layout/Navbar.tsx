import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  Home,
  BookOpen,
  LayoutDashboard,
  Mail,
  User,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Content of the component
const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const routes = [
    { title: "", path: "/", icon: Home },
    { title: "Mock Tests", path: "/mock-tests", icon: BookOpen },
    { title: "Dashboard", path: "/dashboard", icon: LayoutDashboard, auth: true },
    { title: "Contact", path: "/contact", icon: Mail },
  ];

  const profileRoutes = [
    { title: "Profile", path: "/user-profile", icon: User },
    { title: "Logout", path: "#", icon: LogOut, action: handleLogout },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="/logo.png"
                alt="myturnindia Logo"
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 ${location.pathname === route.path ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' : ''}`}
                  >
                    {route.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <div className="relative">
                  <Link
                    to="/user-profile"
                    className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <span className="mr-2">
                      {user?.user_metadata?.name || user?.email?.split('@')[0]}
                    </span>
                    <User className="h-5 w-5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <SheetHeader className="text-left">
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navigate through the app
                  </SheetDescription>
                </SheetHeader>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  <div className="py-4">
                    {routes.map((route) => (
                      <Link
                        key={route.path}
                        to={route.path}
                        className={`block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${location.pathname === route.path ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                        onClick={closeMenu}
                      >
                        {route.title}
                      </Link>
                    ))}
                  </div>
                  <div className="py-4">
                    {!isAuthenticated ? (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                          onClick={closeMenu}
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="block px-4 py-2 text-sm font-medium bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-800 rounded-md"
                          onClick={closeMenu}
                        >
                          Sign Up
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/user-profile"
                          className="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          onClick={closeMenu}
                        >
                          Profile
                        </Link>
                        <Button variant="destructive" size="sm" className="w-full justify-start rounded-none py-2 px-4" onClick={handleLogout}>
                          Logout
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
