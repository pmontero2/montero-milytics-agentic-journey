import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["Leads", "Conversión", "Velocidad", "Operaciones"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const heroHeight = windowHeight;
      
      // Calculate which section is active based on scroll position
      const sectionIndex = Math.floor((scrollPosition - heroHeight) / windowHeight);
      const clampedIndex = Math.max(0, Math.min(sections.length - 1, sectionIndex));
      
      setActiveSection(clampedIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const heroHeight = window.innerHeight;
    const targetScroll = heroHeight + (index * window.innerHeight);
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {sections.map((section, index) => (
        <button
          key={section}
          onClick={() => scrollToSection(index)}
          className="group flex items-center gap-3 transition-all duration-300"
          aria-label={`Ir a ${section}`}
        >
          <span
            className={`text-sm font-medium transition-all duration-300 ${
              activeSection === index
                ? "text-accent opacity-100"
                : "text-foreground/40 opacity-0 group-hover:opacity-100"
            }`}
          >
            {section}
          </span>
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === index
                ? "border-accent bg-accent scale-125 shadow-[0_0_10px_hsl(187_100%_50%/0.5)]"
                : "border-foreground/30 bg-transparent hover:border-accent/50"
            }`}
          />
        </button>
      ))}
      <div className="text-xs text-foreground/40 mt-2 ml-auto">
        {activeSection + 1}/{sections.length}
      </div>
    </div>
  );
};
