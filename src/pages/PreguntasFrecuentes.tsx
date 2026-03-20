import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { SEO } from "@/components/SEO";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const PreguntasFrecuentes = () => {
  useScrollToTop();

  return (
    <div className="w-full">
      <SEO
        title="Preguntas Frecuentes — Brian Montero"
        description="Resuelve dudas sobre IA, automatización, agentes y procesos de implementación para empresas."
        canonical="https://www.bmontero.com/preguntas-frecuentes"
        keywords="preguntas frecuentes IA, automatización, agentes IA, implementación de IA en empresas"
      />
      <Navbar />
      <main className="pt-20">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default PreguntasFrecuentes;
