import { Navbar } from "@/components/Navbar";
import { HeroHome } from "@/components/HeroHome";
import { VisionPurpose } from "@/components/VisionPurpose";
import { TrajectoryExperience } from "@/components/TrajectoryExperience";
import { WhatIDo } from "@/components/WhatIDo";
import { CommunityContent } from "@/components/CommunityContent";
import { StickyCTA } from "@/components/StickyCTA";
import { CTASection } from "@/components/CTASection";
// import { ScrollProgressHome } from "@/components/ScrollProgressHome";
import { Testimonial } from "@/components/Testimonial";
import { Footer } from "@/components/Footer";
import { WorkflowSection } from "@/components/WorkflowSection";
import { FAQ } from "@/components/FAQ";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const Home = () => {
  useScrollToTop();

  return (
    <div className="overflow-y-auto">
      <Navbar />
      
      {/* 1️⃣ Hero / Bienvenida */}
      <div id="hero">
        <HeroHome />
      </div>
      
      {/* 2️⃣ Visión y Propósito */}
      <div id="vision-purpose">
        <VisionPurpose />
      </div>
      
      {/* 3️⃣ Trayectoria y Experiencia */}
      <div id="trajectory">
        <TrajectoryExperience />
      </div>
      
      {/* 4️⃣ Qué hago / Cómo ayudo */}
      <div id="what-i-do">
        <WhatIDo />
      </div>
      
      {/* 5️⃣ Comunidad y Contenido */}
      <div id="community">
        <CommunityContent />
      </div>
      
      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>
      
      {/* Final CTA */}
      <div id="cta">
        <CTASection />
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll Progress & Sticky Elements */}
      {/* <ScrollProgressHome /> */}
      <StickyCTA />
    </div>
  );
};

export default Home;
