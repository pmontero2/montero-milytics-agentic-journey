import { Users, Database, Bot, ArrowRightLeft, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const AgenticConcept = () => {
  const navigate = useNavigate();

  const goToEmpresasAgenticas = () => {
    navigate("/empresas-agenticas");
  };

  const conceptElements = [
    {
      icon: Users,
      title: "Talento Humano",
      description: "Profesionales que lideran estrategias y toman decisiones complejas",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Database,
      title: "Datos Inteligentes",
      description: "Información estructurada que alimenta la toma de decisiones",
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: Bot,
      title: "Agentes IA",
      description: "Sistemas autónomos que ejecutan tareas y optimizan procesos",
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30"
    }
  ];

  return (
    <section id="agentic-concept" className="py-12 sm:py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              El concepto: Empresas Agénticas
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
              La evolución natural de las empresas: donde la inteligencia artificial trabaja junto a los humanos para crear sistemas que funcionan 24/7.
            </p>
          </div>

          {/* Main Concept Explanation */}
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12 border border-accent/20 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                ¿Qué es una Empresa Agéntica?
              </h3>
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed max-w-4xl mx-auto">
                Una <span className="text-accent font-semibold">Empresa Agéntica</span> es aquella que integra agentes de IA 
                en sus procesos operativos para funcionar de manera autónoma y eficiente. No es solo automatización, 
                es la creación de sistemas inteligentes que aprenden, adaptan y optimizan continuamente.
              </p>
            </div>

            {/* Concept Elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Talento Humano */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 border border-blue-500/30 text-center hover:scale-105 transition-all duration-300 group">
                <div className="mb-4">
                  <Users className="h-12 w-12 mx-auto text-blue-500 group-hover:text-glow-accent transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {conceptElements[0].title}
                </h4>
                <p className="text-foreground/80">
                  {conceptElements[0].description}
                </p>
              </div>
              
              {/* Datos Inteligentes */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-6 border border-green-500/30 text-center hover:scale-105 transition-all duration-300 group">
                <div className="mb-4">
                  <Database className="h-12 w-12 mx-auto text-green-500 group-hover:text-glow-accent transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {conceptElements[1].title}
                </h4>
                <p className="text-foreground/80">
                  {conceptElements[1].description}
                </p>
              </div>
              
              {/* Agentes IA */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-6 border border-purple-500/30 text-center hover:scale-105 transition-all duration-300 group">
                <div className="mb-4">
                  <Bot className="h-12 w-12 mx-auto text-purple-500 group-hover:text-glow-accent transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {conceptElements[2].title}
                </h4>
                <p className="text-foreground/80">
                  {conceptElements[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6 border border-accent/20">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                🎯 ¿Por qué funciona?
              </h4>
              <ul className="space-y-3 text-foreground/85">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Los humanos se enfocan en estrategia y creatividad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Los datos proporcionan insights accionables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Los agentes IA ejecutan tareas 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>El sistema se auto-optimiza continuamente</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/5 rounded-full translate-y-10 -translate-x-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">🚀</div>
                  <h4 className="text-xl font-bold text-foreground">
                    El resultado
                  </h4>
                </div>
                
                <p className="text-foreground/90 leading-relaxed mb-4">
                  Una empresa que funciona como un <span className="text-accent font-semibold">organismo inteligente</span>: 
                  cada componente tiene su función específica, se comunica eficientemente y se adapta automáticamente 
                  a los cambios del mercado.
                </p>
                
                <div className="p-3 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20">
                  <p className="text-foreground/90 font-semibold text-center text-sm">
                    <span className="text-accent">Sin fricciones operativas</span> • 
                    <span className="text-accent"> Sin desperdicio de recursos</span> • 
                    <span className="text-accent"> Máxima eficiencia</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-3000"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary/40 rounded-full animate-ping delay-4000"></div>
      </div>
    </section>
  );
};
