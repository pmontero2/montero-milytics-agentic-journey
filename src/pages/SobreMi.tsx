import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgressSobreMi } from "@/components/ScrollProgressSobreMi";
import { TrajectoryExperience } from "@/components/TrajectoryExperience";
import { VisionPurpose } from "@/components/VisionPurpose";
import { WhatIDo } from "@/components/WhatIDo";
import { CTASection } from "@/components/CTASection";
import { StickyCTA } from "@/components/StickyCTA";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Calendar, Wrench, Heart, Code, Brain, Download } from "lucide-react";
import brinziImage from "@/assets/brinzi.webp";
import mufiImage from "@/assets/mufi.webp";
import corsitaImage from "@/assets/corsita.webp";
import agente4Image from "@/assets/agente4.webp";

const SobreMi = () => {
  useScrollToTop();
  const navigate = useNavigate();

  const goToContact = () => {
    window.location.href = "mailto:bmontero@milytics.io";
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV Brian Montero 2025V3 ESP.pdf';
    link.download = 'CV Brian Montero 2025V3 ESP.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="overflow-y-auto">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary pt-16">
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          {/* Profile Image */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={brinziImage} 
                alt="Brian Montero"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-accent/30 shadow-2xl shadow-accent/25 object-cover"
              />
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-accent/90 rounded-full p-1.5 sm:p-2">
                <Brain className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-glow-accent leading-tight">
            Brian Montero
          </h1>
          
          <div className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
            <p className="mb-4 sm:mb-6">
              Ingeniero Civil Telemático especializado en <span className="text-accent font-semibold">Inteligencia Artificial empresarial</span> y automatización de procesos.
            </p>
            
            <p className="mb-4 sm:mb-6">
              Fundador de <span className="text-accent font-semibold">Milytics</span>, donde transformo empresas tradicionales en <span className="text-accent font-semibold">Empresas Agénticas</span> mediante la implementación estratégica de agentes de IA.
            </p>
            
            <p className="mb-6 sm:mb-8">
              Mi misión es hacer que la tecnología <span className="text-accent font-semibold">impulse a las personas</span>, no que las reemplace. Trabajo directamente con equipos ejecutivos para crear soluciones que generen resultados medibles y sostenibles.
            </p>
          </div>

          {/* Personal Info Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-2 sm:p-3 md:p-4 border border-accent/30">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-accent mx-auto mb-1 sm:mb-2" />
              <p className="text-xs sm:text-sm text-white/80">Coquimbo, Chile</p>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-2 sm:p-3 md:p-4 border border-accent/30">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-accent mx-auto mb-1 sm:mb-2" />
              <p className="text-xs sm:text-sm text-white/80">25 años</p>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-2 sm:p-3 md:p-4 border border-accent/30">
              <Code className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-accent mx-auto mb-1 sm:mb-2" />
              <p className="text-xs sm:text-sm text-white/80">UTFSM - Ingeniero Civil Telemático</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              onClick={downloadCV}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 min-h-[48px] sm:min-h-[56px] w-full sm:w-auto"
            >
              Descargar CV
              <Download className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={goToContact}
              variant="outline"
              className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground hover:border-accent font-semibold px-6 sm:px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 min-h-[48px] sm:min-h-[56px] w-full sm:w-auto"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contactarme
            </Button>
          </div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section id="personal" className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
              Más allá del código
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12">
              Cuando no estoy diseñando agentes de IA, me encuentras...
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div 
                className="relative rounded-xl p-4 sm:p-6 border border-sky-500/30 hover:scale-105 transition-all duration-300 overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.3), rgba(2, 132, 199, 0.3)), url(${corsitaImage})`,
                  backgroundSize: '120%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-white bg-sky-500/20 rounded-full p-1.5 sm:p-2" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-center">Mecánico amateur</h3>
                  <p className="text-white/90 text-xs sm:text-sm text-center bg-black/20 rounded-lg p-2 backdrop-blur-sm">
                    Me encanta meter mano: desarmar, aprender y dejar mejor que como estaba.
                  </p>
                </div>
              </div>
              
              <div 
                className="relative rounded-xl p-4 sm:p-6 border border-emerald-500/30 hover:scale-105 transition-all duration-300 overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.3)), url(${mufiImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white bg-emerald-500/20 rounded-full p-1.5 sm:p-2" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-center">Cat lover</h3>
                  <p className="text-white/90 text-xs sm:text-sm text-center bg-black/20 rounded-lg p-2 backdrop-blur-sm">
                    Apasionado por los gatos, tengo a Mufi que es mi compañero felino.
                  </p>
                </div>
              </div>
              
              <div 
                className="relative rounded-xl p-4 sm:p-6 border border-indigo-500/30 hover:scale-105 transition-all duration-300 overflow-hidden sm:col-span-2 lg:col-span-1"
                style={{
                  backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3), rgba(67, 56, 202, 0.3)), url(${agente4Image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-white bg-indigo-500/20 rounded-full p-1.5 sm:p-2" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-center">Innovador</h3>
                  <p className="text-white/90 text-xs sm:text-sm text-center bg-black/20 rounded-lg p-2 backdrop-blur-sm">
                    Siempre explorando nuevas tecnologías y buscando maneras simples de resolver problemas complejos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrate existing components */}
      <TrajectoryExperience />
      <VisionPurpose hideCTA={true} />
      <WhatIDo />
      
      {/* Final CTA Section */}
      <section id="cta">
        <CTASection />
      </section>
      
      <Footer />
      <ScrollProgressSobreMi />
      <StickyCTA />
    </div>
  );
};

export default SobreMi;
