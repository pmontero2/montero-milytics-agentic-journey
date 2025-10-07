import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const scrollToContent = () => {
    document.getElementById("scrollytelling")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
        <div className="mb-6">
          <span className="text-accent font-bold text-sm tracking-wider uppercase">
            Milytics
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow-accent leading-tight">
          Brian Montero
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary text-glow-primary">
          Empresas Agénticas
        </h2>
        
        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          Transformando negocios tradicionales en organizaciones autónomas impulsadas por agentes inteligentes
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 rounded-full shadow-[var(--glow-accent)] hover:scale-105 transition-all duration-300 min-h-[44px]"
          >
            Agenda una llamada
          </Button>
          <Button
            onClick={scrollToContent}
            variant="outline"
            size="lg"
            className="border-accent/30 text-foreground hover:bg-accent/10 font-semibold text-lg px-8 py-6 rounded-full hover:scale-105 transition-all duration-300 min-h-[44px]"
          >
            Descubre cómo
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
};
