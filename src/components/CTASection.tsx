import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { FloatingContactForm } from "./FloatingContactForm";

export const CTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section id="contact" className="bg-accent/5 border-t border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            ¿Listo para transformar tu negocio?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Agenda una consulta gratuita y descubre cómo la IA puede revolucionar tu empresa.
          </p>
          <Button
            onClick={openForm}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-[0_0_20px_hsl(45_100%_50%/0.3)] hover:scale-105 transition-all duration-300 min-h-[48px] sm:min-h-[56px]"
          >
            Obtener consulta gratis
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
      
      <FloatingContactForm 
        isOpen={isFormOpen} 
        onClose={closeForm} 
        source="brinz landing" 
      />
    </section>
  );
};
