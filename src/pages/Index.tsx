import { Hero } from "@/components/Hero";
import { ScrollPanel } from "@/components/ScrollPanel";
import { StickyCTA } from "@/components/StickyCTA";
import { FinalPanel } from "@/components/FinalPanel";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Testimonial } from "@/components/Testimonial";
import { Footer } from "@/components/Footer";

import robotLeadsImage from "@/assets/robot-leads.png";
import robotConversionImage from "@/assets/robot-conversion.png";
import robotSpeedImage from "@/assets/robot-speed.png";
import robotOperationsImage from "@/assets/robot-operations.png";

const Index = () => {
  const panels = [
    {
      title: "Leads",
      description: "Identificamos y calificamos oportunidades 24/7.",
      imageSrc: robotLeadsImage,
    },
    {
      title: "Conversión",
      description: "Pases con contexto: datos completos → menos retrabajo.",
      imageSrc: robotConversionImage,
    },
    {
      title: "Velocidad",
      description: "1ª respuesta en minutos, no horas.",
      imageSrc: robotSpeedImage,
    },
    {
      title: "Operaciones",
      description: "Reposición a tiempo, menos quiebres y despachos claros.",
      imageSrc: robotOperationsImage,
    },
  ];

  return (
    <div className="overflow-y-auto">
      <Hero />
      
      <div id="scrollytelling">
        {panels.slice(0, 2).map((panel, index) => (
          <ScrollPanel
            key={panel.title}
            title={panel.title}
            description={panel.description}
            imageSrc={panel.imageSrc}
            index={index}
          />
        ))}
        
        <Testimonial />
        
        {panels.slice(2).map((panel, index) => (
          <ScrollPanel
            key={panel.title}
            title={panel.title}
            description={panel.description}
            imageSrc={panel.imageSrc}
            index={index + 2}
          />
        ))}
      </div>

      <FinalPanel />
      
      <Footer />
      
      <ScrollProgress />
      <StickyCTA />
    </div>
  );
};

export default Index;
