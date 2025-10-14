import { ArrowDown, Eye, Building2, ChevronDown, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FloatingContactForm } from "./FloatingContactForm";
import brinziImage from "@/assets/bzy2.webp";

export const HeroHome = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const scrollToVision = () => {
    document.getElementById("vision-purpose")?.scrollIntoView({ behavior: "smooth" });
  };

  const goToEmpresasAgenticas = () => {
    navigate("/empresas-agenticas");
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/50 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full animate-ping delay-3000"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary rounded-full animate-ping delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-center">
          {/* Left Column - Image */}
          <div className="flex-shrink-0 animate-fade-in z-10 mb-8 lg:mb-0">
              <img 
                src={brinziImage} 
                alt="Brian Montero" 
                className="w-40 h-52 sm:w-48 sm:h-64 md:w-56 md:h-80 lg:w-64 lg:h-96 object-contain scale-105 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              />
          </div>

          {/* Right Column - Content */}
          <div className="flex-1 text-center lg:text-left relative z-20 lg:-ml-8">
            {/* Main Headlines */}
            <div className="mb-6 sm:mb-8 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                Hola, soy Brian Montero
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-white max-w-2xl mx-auto lg:mx-0">
                Ayudo a personas y empresas a entender y aplicar la <span className="text-yellow-300 font-semibold">inteligencia artificial</span> de forma <span className="text-yellow-300 font-semibold">simple y útil</span>.
              </h2>
              
              <div className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8">
                Desde <span className="text-yellow-300 font-semibold">Milytics</span>, ayudo a construir empresas más <span className="text-yellow-300 font-semibold">humanas y eficientes</span>.
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center animate-fade-in mb-6 sm:mb-8">
              <Button
                onClick={openForm}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-[0_0_30px_hsl(187_100%_50%/0.3)] hover:scale-105 transition-all duration-300 min-h-[48px] sm:min-h-[56px] group w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                Agenda diagnóstico gratis
              </Button>
              <Button
                onClick={goToEmpresasAgenticas}
                variant="outline"
                size="lg"
                className="border-accent/30 text-white hover:bg-accent/10 font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full hover:scale-105 transition-all duration-300 min-h-[48px] sm:min-h-[56px] group w-full sm:w-auto"
              >
                <Building2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                Ver Empresas Agénticas
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <FloatingContactForm 
        isOpen={isFormOpen} 
        onClose={closeForm} 
        source="hero home" 
      />
    </section>
  );
};
