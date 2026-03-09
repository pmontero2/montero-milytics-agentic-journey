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
import { SEO } from "@/components/SEO";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { ScrollReveal } from "@/components/ScrollReveal";

const Home = () => {
  useScrollToTop();

  return (
    <div className="w-full">
      <SEO
        title="Brian Montero — Especialista en IA y Automatización Empresarial"
        description="Ingeniero especializado en IA y automatización. Transformo procesos empresariales mediante agentes de IA, automatización y soluciones inteligentes."
        canonical="https://www.bmontero.com/"
      />
      <Navbar />

      {/* 1️⃣ Hero / Bienvenida */}
      <div id="hero">
        <HeroHome />
      </div>

      {/* 2️⃣ Visión y Propósito */}
      <ScrollReveal>
        <div id="vision-purpose">
          <VisionPurpose />
        </div>
      </ScrollReveal>

      {/* 3️⃣ Trayectoria y Experiencia */}
      <ScrollReveal delay={0.2}>
        <div id="trajectory">
          <TrajectoryExperience />
        </div>
      </ScrollReveal>

      {/* 4️⃣ Qué hago / Cómo ayudo */}
      <ScrollReveal>
        <div id="what-i-do">
          <WhatIDo />
        </div>
      </ScrollReveal>

      {/* 5️⃣ Comunidad y Contenido */}
      <ScrollReveal>
        <div id="community">
          <CommunityContent />
        </div>
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal>
        <div id="faq">
          <FAQ />
        </div>
      </ScrollReveal>

      {/* Final CTA */}
      <ScrollReveal>
        <div id="cta">
          <CTASection />
        </div>
      </ScrollReveal>

      {/* Footer */}
      <Footer />

      {/* Scroll Progress & Sticky Elements */}
      {/* <ScrollProgressHome /> */}
      <StickyCTA />
    </div>
  );
};

export default Home;
