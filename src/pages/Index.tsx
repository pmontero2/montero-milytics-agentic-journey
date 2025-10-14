import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StickyFunnelLayout } from "@/components/StickyFunnelLayout";
import { StickyCTA } from "@/components/StickyCTA";
import { CTASection } from "@/components/CTASection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Testimonial } from "@/components/Testimonial";
import { Footer } from "@/components/Footer";
import { WorkflowSection } from "@/components/WorkflowSection";
import { FAQ } from "@/components/FAQ";
import { AccessibilityToggle } from "@/components/AccessibilityToggle";

import robotLeadsImage from "@/assets/robot-leads.png";
import robotConversionImage from "@/assets/robot-conversion.png";
import robotSpeedImage from "@/assets/robot-speed.png";
import robotOperationsImage from "@/assets/robot-operations.png";

const Index = () => {
  const panels = [
    {
      title: "Más Leads",
      description: "Identificamos, califican y priorizan oportunidades 24/7 para tu equipo.",
      imageSrc: robotLeadsImage,
    },
    {
      title: "Mejor Conversión",
      description: "Pases con contexto: datos completos y próximos pasos claros. Menos retrabajo, más cierres.",
      imageSrc: robotConversionImage,
    },
    {
      title: "Velocidad 24/7",
      description: "Primera respuesta en minutos y ciclos más cortos que la competencia.",
      imageSrc: robotSpeedImage,
    },
    {
      title: "Operaciones sin quiebres",
      description: "Proyección de demanda, reposición a tiempo y despachos claros.",
      imageSrc: robotOperationsImage,
    },
  ];

  return (
    <div className="overflow-y-auto">
      <Navbar />
      <Hero />
      
      <div id="scrollytelling">
        <StickyFunnelLayout panels={panels} />
        
        <div id="testimonials">
          <Testimonial />
        </div>
      </div>

      <div id="workflow">
        <WorkflowSection />
      </div>

      
      <CTASection />
      <FAQ />
      <Footer />
      
      <ScrollProgress />
      <StickyCTA />
    </div>
  );
};

export default Index;
