import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Mountain, Menu, X } from "lucide-react";
import Button from "@mui/material/Button";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const handleBookNow = () => {
    window.open("https://forms.gle/YourGoogleFormID", "_blank");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <Mountain className="h-8 w-8 text-[#FF9933]/90" />
            <span className="font-playfair font-bold text-xl text-[#22223b]">
              Trouville
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  location === item.href
                    ? "text-[#FF9933]/90"
                    : "text-[#22223b] hover:text-[#FF9933]/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={handleBookNow}
              sx={{
                backgroundColor: "#FF9933",
                color: "#FFFFFF",
                borderRadius: "9999px",
                textTransform: "none",
                fontWeight: 500,
                padding: "8px 24px",
                "&:hover": {
                  backgroundColor: "rgba(255, 153, 51, 0.9)",
                },
              }}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="text"
              sx={{
                minWidth: "auto",
                padding: 0,
                color: "#333333",
              }}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-[#22223b]" />
              ) : (
                <Menu className="h-6 w-6 text-[#22223b]" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col space-y-4 py-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    location === item.href
                      ? "text-[#FF9933]/90"
                      : "text-[#22223b] hover:text-[#FF9933]/90"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  handleBookNow();
                  closeMobileMenu();
                }}
                sx={{
                  backgroundColor: "#FF9933",
                  color: "#FFFFFF",
                  borderRadius: "9999px",
                  textTransform: "none",
                  fontWeight: 500,
                  padding: "8px 24px",
                  marginTop: "16px",
                  "&:hover": {
                    backgroundColor: "rgba(255, 153, 51, 0.9)",
                  },
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;