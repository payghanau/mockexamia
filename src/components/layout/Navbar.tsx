import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  
  const { user, isAuthenticated } = useAuth();
  const isAdmin = propIsAdmin || user?.role === 'admin';
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 10);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
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
            ? "bg-white/95 backdrop-blur-lg shadow-light py-3"
            : "bg-white py-5"
        } ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container px-4 mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              myturnindia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/mock-tests"
              className={`text-sm font-medium transition-colors ${
                location.pathname.includes('mock-tests') 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Mock Tests
            </Link>
            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors ${
                location.pathname.includes('pricing') 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                location.pathname.includes('contact') 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              }`}
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
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-800" />
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
              className={`text-lg font-medium ${location.pathname.includes('mock-tests') ? 'text-primary font-semibold' : ''}`}
              onClick={closeMenu}
            >
              Mock Tests
            </Link>
            <Link
              to="/pricing"
              className={`text-lg font-medium ${location.pathname.includes('pricing') ? 'text-primary font-semibold' : ''}`}
              onClick={closeMenu}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`text-lg font-medium ${location.pathname.includes('contact') ? 'text-primary font-semibold' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>

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
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;
