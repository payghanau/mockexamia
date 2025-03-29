
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

type NavbarProps = {
  isAuthenticated?: boolean;
  isAdmin?: boolean;
};

const Navbar = ({ isAuthenticated: propIsAuthenticated, isAdmin: propIsAdmin }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const { user, isAuthenticated } = useAuth();
  const isAdmin = propIsAdmin || user?.role === 'admin';
  
  const lastScrollY = useRef(0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set background when scrolled down
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down - hide
      } else {
        setIsVisible(true); // Scrolling up - show
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-sm py-3"
            : "bg-white/90 py-5"
        } ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container px-4 mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-mcq-blue to-mcq-blue-dark bg-clip-text text-transparent">
              myturnindia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/mock-tests"
              className="text-sm font-medium text-foreground hover:text-mcq-blue transition-base"
            >
              Mock Tests
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium text-foreground hover:text-mcq-blue transition-base"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-foreground hover:text-mcq-blue transition-base"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Authentication */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated || propIsAuthenticated ? (
              <>
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="outline" size="sm">
                      Admin Dashboard
                    </Button>
                  </Link>
                )}
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    // In real app, add logout logic here
                    window.location.href = "/";
                  }}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="default" size="sm">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <MenuIcon className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="text-foreground"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-8 p-8">
            <Link
              to="/mock-tests"
              className="text-lg font-medium"
              onClick={closeMenu}
            >
              Mock Tests
            </Link>
            <Link
              to="/pricing"
              className="text-lg font-medium"
              onClick={closeMenu}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium"
              onClick={closeMenu}
            >
              Contact
            </Link>

            {/* Mobile Authentication */}
            <div className="pt-8 flex flex-col space-y-4 w-full">
              {isAuthenticated || propIsAuthenticated ? (
                <>
                  {isAdmin && (
                    <Link to="/admin" onClick={closeMenu}>
                      <Button className="w-full">Admin Dashboard</Button>
                    </Link>
                  )}
                  <Link to="/dashboard" onClick={closeMenu}>
                    <Button className="w-full">Dashboard</Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      // In real app, add logout logic here
                      window.location.href = "/";
                    }}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={closeMenu}>
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/register" onClick={closeMenu}>
                    <Button className="w-full">Register</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* Add spacing div to prevent content overlap with fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
