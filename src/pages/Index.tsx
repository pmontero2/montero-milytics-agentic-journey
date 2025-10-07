import { Hero } from "@/components/Hero";
import { ScrollPanel } from "@/components/ScrollPanel";
import { StickyCTA } from "@/components/StickyCTA";
import { FinalPanel } from "@/components/FinalPanel";

import robotLeadsImage from "@/assets/robot-leads.png";
import robotConversionImage from "@/assets/robot-conversion.png";
import robotSpeedImage from "@/assets/robot-speed.png";
import robotOperationsImage from "@/assets/robot-operations.png";

const Index = () => {
  const panels = [
    {
      title: "Leads",
      description: "Agentes inteligentes generando oportunidades de negocio 24/7. Identifican, califican y nutren leads mientras duermes.",
      imageSrc: robotLeadsImage,
    },
    {
      title: "Conversión",
      description: "Optimización automática de cada punto de contacto. Tus agentes aprenden y mejoran continuamente cada conversación.",
      imageSrc: robotConversionImage,
    },
    {
      title: "Velocidad",
      description: "Respuestas instantáneas, decisiones en tiempo real. 10x más rápido que cualquier operación manual tradicional.",
      imageSrc: robotSpeedImage,
    },
    {
      title: "Operaciones",
      description: "Coordinación perfecta entre todos los agentes. Una sinfonía de automatización que nunca descansa.",
      imageSrc: robotOperationsImage,
    },
  ];

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <Hero />
      
      <div id="scrollytelling">
        {panels.map((panel, index) => (
          <ScrollPanel
            key={panel.title}
            title={panel.title}
            description={panel.description}
            imageSrc={panel.imageSrc}
            index={index}
          />
        ))}
      </div>

      <FinalPanel />
      
      <StickyCTA />
    </div>
  );
};

export default Index;
