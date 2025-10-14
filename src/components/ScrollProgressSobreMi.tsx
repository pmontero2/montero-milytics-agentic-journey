import { useEffect, useState } from "react";

export const ScrollProgressSobreMi = () => {
  const [activeSection, setActiveSection] = useState(0);
  
  // Secciones específicas de la página Sobre Mi
  const sections = [
    { id: "hero", name: "Presentación", icon: "👋" },
    { id: "personal", name: "Personal", icon: "🎯" },
    { id: "trajectory", name: "Trayectoria", icon: "📈" },
    { id: "vision-purpose", name: "Propósito", icon: "🎯" },
    { id: "what-i-do", name: "Servicios", icon: "⚙️" },
    { id: "cta", name: "Contacto", icon: "📞" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Detectar qué sección está visible usando los elementos reales
      let currentSection = 0;
      
      // Buscar elementos por ID para detección más precisa
      const personalElement = document.getElementById('personal');
      const trajectoryElement = document.getElementById('trajectory');
      const visionElement = document.getElementById('vision-purpose');
      const whatIDoElement = document.getElementById('what-i-do');
      const ctaElement = document.getElementById('cta');
      
      if (personalElement && scrollPosition >= personalElement.offsetTop - windowHeight * 0.3) {
        currentSection = 1;
      }
      if (trajectoryElement && scrollPosition >= trajectoryElement.offsetTop - windowHeight * 0.3) {
        currentSection = 2;
      }
      if (visionElement && scrollPosition >= visionElement.offsetTop - windowHeight * 0.3) {
        currentSection = 3;
      }
      if (whatIDoElement && scrollPosition >= whatIDoElement.offsetTop - windowHeight * 0.3) {
        currentSection = 4;
      }
      if (ctaElement && scrollPosition >= ctaElement.offsetTop - windowHeight * 0.3) {
        currentSection = 5;
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    // Buscar elementos por ID o clase para scroll más preciso
    let targetElement: HTMLElement | null = null;
    
    if (index === 0) {
      // Hero - ir al inicio
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    } else if (index === 1) {
      // Sección Personal - usar el ID que añadimos
      targetElement = document.getElementById('personal');
    } else if (index === 2) {
      // Trayectoria - usar el ID del componente TrajectoryExperience
      targetElement = document.getElementById('trajectory');
    } else if (index === 3) {
      // Visión y Propósito - usar el ID del componente VisionPurpose
      targetElement = document.getElementById('vision-purpose');
    } else if (index === 4) {
      // Qué hago/Servicios - usar el ID del componente WhatIDo
      targetElement = document.getElementById('what-i-do');
    } else if (index === 5) {
      // CTA/Contacto - usar el ID que añadimos
      targetElement = document.getElementById('cta');
    }
    
    if (targetElement) {
      // Calcular posición con offset para evitar que aparezca cortada
      const elementRect = targetElement.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const offset = 80; // Offset en píxeles para evitar que aparezca cortada
      
      window.scrollTo({ 
        top: absoluteElementTop - offset, 
        behavior: "smooth" 
      });
    } else {
      // Fallback: usar cálculo aproximado basado en la estructura real
      const windowHeight = window.innerHeight;
      let targetScroll = 0;
      
      switch(index) {
        case 0: targetScroll = 0; break;
        case 1: targetScroll = windowHeight * 1.2; break;
        case 2: targetScroll = windowHeight * 2.5; break;
        case 3: targetScroll = windowHeight * 4.0; break;
        case 4: targetScroll = windowHeight * 5.5; break;
        case 5: targetScroll = windowHeight * 7.0; break;
        default: targetScroll = index * windowHeight * 0.8;
      }
      
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-5">
      {sections.map((section, index) => (
        <button
          key={section.name}
          onClick={() => scrollToSection(index)}
          className="group flex items-center justify-end gap-4 transition-all duration-300 min-h-[24px]"
          aria-label={`Ir a ${section.name}`}
        >
          <span
            className={`text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeSection === index
                ? "text-accent opacity-100"
                : "text-foreground/40 opacity-0 group-hover:opacity-100"
            }`}
          >
            {section.name}
          </span>
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 flex-shrink-0 ${
              activeSection === index
                ? "border-accent bg-accent scale-125 shadow-[0_0_10px_hsl(187_100%_50%/0.5)]"
                : "border-foreground/30 bg-transparent hover:border-accent/50"
            }`}
          />
        </button>
      ))}
      <div className="text-xs text-foreground/40 mt-3 text-right">
        {activeSection + 1}/{sections.length}
      </div>
    </div>
  );
};
