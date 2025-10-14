import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { FloatingContactForm } from "./FloatingContactForm";

export const StickyCTA = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 animate-fade-in">
        <Button
          onClick={openForm}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-6 rounded-full shadow-[var(--glow-accent)] hover:scale-110 transition-all duration-300 min-h-[40px] sm:min-h-[44px]"
        >
          <span className="hidden sm:inline">Obtener consulta gratis</span>
          <span className="sm:hidden">Consulta gratis</span>
          <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
      
      <FloatingContactForm 
        isOpen={isFormOpen} 
        onClose={closeForm} 
        source="brinz landing" 
      />
    </>
  );
};
