import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import logoBmontero from "@/assets/logo-bmontero.png";
import { CVModal } from "./CVModal";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Empresas Agénticas", path: "/empresas-agenticas" },
    { label: "Proyectos", path: "/proyectos" },
    { label: "Blog", path: "/blog" },
    { label: "FAQ", path: "/preguntas-frecuentes" },
    { label: "Sobre Mí", path: "/sobre-mi" },
  ];

  const isItemActive = (path: string) => {
    if (path === "/blog") {
      return location.pathname === "/blog" || location.pathname.startsWith("/blog/");
    }
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] transition-all duration-500",
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="flex items-center group relative"
          >
            <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={logoBmontero}
              alt="BMONTERO Logo"
              className="h-8 w-auto sm:h-10 relative z-10"
            />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -2 }}
                onClick={() => navigate(item.path)}
                className={cn(
                  "px-4 py-2 transition-colors duration-300 font-medium text-sm sm:text-base rounded-full relative group",
                  isItemActive(item.path)
                    ? "text-accent"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
                {isItemActive(item.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/5 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCVModalOpen(true)}
              className="ml-4 px-6 py-2 bg-accent/10 border border-accent/20 hover:bg-accent/20 text-accent rounded-full font-medium transition-all duration-300"
            >
              CV
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-accent transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-black/90 backdrop-blur-2xl rounded-2xl mt-2 border border-white/10"
            >
              <div className="py-6 px-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => navigate(item.path)}
                    className={cn(
                      "block w-full text-left transition-colors duration-300 font-medium py-3 px-4 rounded-xl text-sm sm:text-base",
                      isItemActive(item.path)
                        ? "bg-accent/10 text-accent"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setIsCVModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-center mt-4 transition-all duration-300 font-bold py-3 px-4 rounded-xl bg-accent text-accent-foreground shadow-[0_0_20px_rgba(var(--accent),0.3)]"
                >
                  Ver CV
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </motion.nav>
  );
};

