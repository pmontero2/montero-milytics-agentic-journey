import { useState } from "react";
import { Menu, X, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import logoBmontero from "@/assets/logo-bmontero.png";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "Inicio", action: () => navigate("/") },
    { label: "Empresas Agénticas", action: () => navigate("/empresas-agenticas") },
    { label: "Sobre Mí", action: () => navigate("/sobre-mi") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-black/80 backdrop-blur-md border-b border-accent/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center group"
          >
            <img
              src={logoBmontero}
              alt="BMONTERO Logo"
              className="h-8 w-auto sm:h-10 group-hover:scale-110 transition-transform duration-300"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className={cn(
                  "transition-colors duration-300 font-medium text-sm sm:text-base",
                  (item.label === "Inicio" && location.pathname === "/") ||
                  (item.label === "Empresas Agénticas" && location.pathname === "/empresas-agenticas") ||
                  (item.label === "Sobre Mí" && location.pathname === "/sobre-mi")
                    ? "text-accent"
                    : "text-white/80 hover:text-accent"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="https://www.instagram.com/brinz_._"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/70 hover:text-accent transition-colors duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/bmonterop"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/70 hover:text-accent transition-colors duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-accent transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 overflow-hidden relative z-[70]",
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-4 border-t border-accent/20 mt-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className={cn(
                  "block w-full text-left transition-colors duration-300 font-medium py-2 text-sm sm:text-base",
                  (item.label === "Inicio" && location.pathname === "/") ||
                  (item.label === "Empresas Agénticas" && location.pathname === "/empresas-agenticas") ||
                  (item.label === "Sobre Mí" && location.pathname === "/sobre-mi")
                    ? "text-accent"
                    : "text-white/80 hover:text-accent"
                )}
              >
                {item.label}
              </button>
            ))}
            
            {/* Social Links Mobile */}
            <div className="pt-4 border-t border-accent/10">
              <div className="flex items-center justify-center space-x-6">
                <a
                  href="https://www.instagram.com/brinz_._"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-white/70 hover:text-accent transition-colors duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bmonterop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-white/70 hover:text-accent transition-colors duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
