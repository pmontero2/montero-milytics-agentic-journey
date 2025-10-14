import { Compass, Globe, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface VisionPurposeProps {
  hideCTA?: boolean;
}

export const VisionPurpose = ({ hideCTA = false }: VisionPurposeProps) => {
  const navigate = useNavigate();

  const goToSobreMi = () => {
    navigate("/sobre-mi");
  };

  return (
    <section id="vision-purpose" className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Mi propósito y visión
            </h2>
            <p className="text-base sm:text-lg text-white/80">
              Por qué hago lo que hago
            </p>
          </div>

          {/* 2 Main Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Propósito Block */}
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-6 sm:p-8 border border-accent/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 mr-3 sm:mr-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Propósito</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-white/90 leading-relaxed text-base sm:text-lg text-justify">
                  Quiero que la <span className="text-yellow-300 font-semibold">tecnología impulse a las personas</span>, no que las reemplace. Mi meta es usar la IA para hacer la vida más fácil, accesible y humana.
                </p>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base text-justify">
                  Mi propósito es usar la innovación y la inteligencia artificial para hacer la vida más fácil, mejorar procesos, y ayudar a que tanto las empresas como las personas crezcan de forma <span className="text-accent font-medium">sostenible y humana</span>.
                </p>
              </div>
            </div>

            {/* Visión Block */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-6 sm:p-8 border border-primary/30 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 mr-3 sm:mr-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Visión</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-white/90 leading-relaxed text-base sm:text-lg text-justify">
                  Visualizo un <span className="text-yellow-300 font-semibold">mundo donde la IA esté tan integrada</span> que ayude silenciosamente a las personas, desde su trabajo hasta su día a día.
                </p>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base text-justify">
                  Donde la IA sea parte de la sostenibilidad, la educación, la productividad y la calidad de vida.
                </p>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base text-justify">
                  Sueño con un mundo que abrace el cambio, que deje de temerle a la innovación, y donde cada persona sienta que puede ser parte de esa <span className="text-accent font-medium">revolución</span>.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          {!hideCTA && (
            <div className="text-center px-4">
              <Button
                onClick={goToSobreMi}
                variant="outline"
                size="lg"
                className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground hover:border-accent hover:scale-105 hover:shadow-lg hover:shadow-accent/25 font-semibold text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 group min-h-[48px] sm:min-h-[56px] w-full sm:w-auto"
              >
                <span className="hidden sm:inline">Conoce más sobre mi historia y motivación</span>
                <span className="sm:hidden">Mi historia y motivación</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-3000"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-4000"></div>
      </div>
    </section>
  );
};