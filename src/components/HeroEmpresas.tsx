import { ArrowDown, Sparkles, Building2, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { FloatingContactForm } from "./FloatingContactForm";
import agentesImage from "@/assets/agentes.webp";

export const HeroEmpresas = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const scrollToConcept = () => {
    document.getElementById("concepto")?.scrollIntoView({ behavior: "smooth" });
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const goToMilytics = () => {
    window.open("https://milytics.io", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/50 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Imagen de fondo de agentes */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={agentesImage} 
          alt="Agentes trabajando en equipo" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full animate-ping delay-3000"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary rounded-full animate-ping delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Main Headlines */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-glow-accent leading-tight">
            Empresas Agénticas
          </h1>
          
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-white">
            Automatización Inteligente para tu Negocio
          </h2>
          
          <div className="text-base sm:text-lg md:text-xl text-accent mb-4 sm:mb-6 max-w-2xl mx-auto">
            Desde <span className="text-glow-accent font-bold text-lg sm:text-xl md:text-2xl">Milytics</span>, descubre cómo las <span className="text-glow-accent font-semibold">empresas agénticas</span> están revolucionando la industria con IA que trabaja 24/7.
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in">
          <Button
            onClick={scrollToConcept}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-[0_0_30px_hsl(187_100%_50%/0.3)] hover:scale-105 transition-all duration-300 min-h-[48px] sm:min-h-[56px] group w-full sm:w-auto"
          >
            <ArrowDown className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform duration-300" />
            Descubre Cómo
          </Button>
          <Button
            onClick={goToMilytics}
            variant="outline"
            size="lg"
            className="border-accent/30 text-white hover:bg-white hover:text-gray-900 font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full hover:scale-105 transition-all duration-300 min-h-[48px] sm:min-h-[56px] group w-full sm:w-auto"
          >
            <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
            Conocer Milytics
          </Button>
        
        </div>
      </div>
      
      <FloatingContactForm 
        isOpen={isFormOpen} 
        onClose={closeForm} 
        source="empresas agenticas" 
      />
    </section>
  );
};
