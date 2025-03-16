
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

type NavbarProps = {
  isAuthenticated?: boolean;
  isAdmin?: boolean;
};

const Navbar = ({ isAuthenticated = false, isAdmin = false }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-mcq-blue to-mcq-blue-dark bg-clip-text text-transparent">
            MockExamia
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-medium text-foreground hover:text-mcq-blue transition-base"
          >
            Home
          </Link>
          <Link
            to="/exams/nism"
            className="text-sm font-medium text-foreground hover:text-mcq-blue transition-base"
          >
            NISM Exams
          </Link>
          <Link
            to="/exams/gate"
            className="text-sm font-medium text-foreground hover:text-mcq-blue transition-base"
          >
            GATE Exams
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
          {isAuthenticated ? (
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
            to="/"
            className="text-lg font-medium"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/exams/nism"
            className="text-lg font-medium"
            onClick={closeMenu}
          >
            NISM Exams
          </Link>
          <Link
            to="/exams/gate"
            className="text-lg font-medium"
            onClick={closeMenu}
          >
            GATE Exams
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
            {isAuthenticated ? (
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
  );
};

export default Navbar;
