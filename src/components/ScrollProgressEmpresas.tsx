import { useEffect, useState } from "react";

export const ScrollProgressEmpresas = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showActiveText, setShowActiveText] = useState(true);
  
  // Secciones específicas de la página Empresas Agénticas
  const sections = [
    { id: "hero", name: "Inicio", icon: "🏢" },
    { id: "concepto", name: "Concepto", icon: "🧠" },
    { id: "scrollytelling", name: "Servicios", icon: "⚡" },
    { id: "workflow", name: "Proceso", icon: "🔄" },
    { id: "faq", name: "FAQ", icon: "💬" },
    { id: "contact", name: "Contacto", icon: "📞" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Detectar qué sección está visible usando los elementos reales
      let currentSection = 0;
      let minDistance = Infinity;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollPosition;
          const elementCenter = elementTop + rect.height / 2;
          
          // Calcular la distancia desde el centro de la ventana al centro del elemento
          const windowCenter = scrollPosition + windowHeight / 2;
          const distance = Math.abs(windowCenter - elementCenter);
          
          // Si el elemento está visible y es el más cercano al centro
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = index;
            }
          }
        }
      });
      
      setActiveSection(currentSection);
      
      // Mostrar texto de la sección activa y ocultarlo después de 2 segundos
      setShowActiveText(true);
      setTimeout(() => {
        setShowActiveText(false);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const section = sections[index];
    if (section) {
      const element = document.getElementById(section.id);
      if (element) {
        // Calcular posición para centrar la sección en la ventana
        const elementRect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const offsetTop = window.pageYOffset + elementRect.top - (windowHeight / 2) + (elementRect.height / 2);
        
        window.scrollTo({ 
          top: Math.max(0, offsetTop), 
          behavior: "smooth" 
        });
        
        // Actualizar inmediatamente el estado activo después de un pequeño delay
        setTimeout(() => {
          setActiveSection(index);
        }, 100);
        
        // Mostrar texto de la sección activa y ocultarlo después de 2 segundos
        setShowActiveText(true);
        setTimeout(() => {
          setShowActiveText(false);
        }, 2000);
      }
    }
  };

  return (
    <>
      {/* Versión Desktop - Sin cambios */}
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

      {/* Versión Móvil - Nueva implementación */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 lg:hidden">
        <div className="flex flex-col gap-5">
          {sections.map((section, index) => (
            <button
              key={section.name}
              onClick={() => scrollToSection(index)}
              className="group flex items-center gap-4 transition-all duration-300 min-h-[24px]"
              aria-label={`Ir a ${section.name}`}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 flex-shrink-0 ${
                  activeSection === index
                    ? "border-accent bg-accent scale-125 shadow-[0_0_10px_hsl(187_100%_50%/0.5)]"
                    : "border-foreground/30 bg-transparent hover:border-accent/50"
                }`}
              />
              <span
                className={`text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === index
                    ? showActiveText
                      ? "text-accent opacity-100"
                      : "text-accent opacity-0"
                    : "text-foreground/40 opacity-0 group-hover:opacity-100"
                }`}
              >
                {section.name}
              </span>
            </button>
          ))}
          <div className="text-xs text-foreground/40 mt-3 text-left">
            {activeSection + 1}/{sections.length}
          </div>
        </div>
      </div>
    </>
  );
};
