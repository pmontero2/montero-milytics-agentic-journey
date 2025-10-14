import { FunnelDiagram } from "./FunnelDiagram";
import { MiniTestimonial } from "./MiniTestimonial";

interface StickyFunnelLayoutProps {
  panels: Array<{
    title: string;
    description: string;
    imageSrc: string;
  }>;
}

export const StickyFunnelLayout = ({ panels }: StickyFunnelLayoutProps) => {
  return (
    <div className="relative">
      {/* Dynamic Content Sections - Todas visibles */}
      {panels.map((panel, index) => (
        <div key={panel.title}>
          <div
            className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary"
          >
            {/* Animated Background similar to Hero */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/50 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-ping delay-1000"></div>
              <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-ping delay-2000"></div>
              <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full animate-ping delay-3000"></div>
              <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary rounded-full animate-ping delay-4000"></div>
            </div>

            {/* Subtle pattern overlay instead of images */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, hsl(45 100% 50% / 0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, hsl(45 100% 50% / 0.05) 0%, transparent 50%)`,
              }}></div>
            </div>
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90"></div>
            
            {/* Content - Centered */}
            <div className="container mx-auto px-6 flex items-center justify-center relative z-10">
              <div className="max-w-5xl text-center transition-all duration-1000">
                <div className="mb-6">
                  <span className="text-accent font-bold text-sm tracking-wider bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
                    0{index + 1}
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold mb-8 text-glow-accent drop-shadow-lg">
                  {panel.title}
                </h2>
                
                <p className="text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-semibold drop-shadow-md mb-8">
                  {panel.description}
                </p>

                {/* Contenido específico para cada sección */}
                {index === 0 && (
                  <div className="space-y-6 mt-12">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-accent/20">
                        <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                        <div className="text-sm text-foreground/80">Escucha multicanal</div>
                      </div>
                      <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-accent/20">
                        <div className="text-3xl font-bold text-accent mb-2">+15-35%</div>
                        <div className="text-sm text-foreground/80">MQL en 4-8 semanas</div>
                      </div>
                      <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-accent/20">
                        <div className="text-3xl font-bold text-accent mb-2">Tiempo real</div>
                        <div className="text-sm text-foreground/80">Alertas a ventas</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20">
                      <h3 className="text-lg font-bold text-accent mb-3">Proceso de Leads</h3>
                      <ul className="space-y-2 text-sm text-foreground/80">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span>Escucha multicanal · scoring automático</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span>Alertas a ventas en tiempo real</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span>Reporte semanal de pipeline</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="space-y-6 mt-12">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-accent mb-4">Proceso de Conversión</h3>
                        <ul className="space-y-3 text-foreground/90">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span>Handoff limpio entre marketing y ventas</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span>Seguimiento automático por intención</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span>Citas agendadas sin fricción</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-accent/20">
                        <div className="text-4xl font-bold text-accent mb-2">Menos retrabajo</div>
                        <div className="text-lg text-foreground/80 mb-2">Más cierres</div>
                        <div className="text-sm text-foreground/60">Datos completos y próximos pasos claros</div>
                      </div>
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="space-y-8 mt-12">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 text-center">
                        <div className="text-3xl font-bold text-accent mb-2">6h → 18 min</div>
                        <div className="text-sm text-foreground/80">1ª respuesta (pilotos)</div>
                      </div>
                      <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 text-center">
                        <div className="text-3xl font-bold text-accent mb-2">2-15 min</div>
                        <div className="text-sm text-foreground/80">Procesamiento típico</div>
                      </div>
                      <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 text-center">
                        <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                        <div className="text-sm text-foreground/80">Cobertura</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20">
                      <h3 className="text-xl font-bold text-accent mb-3">Velocidad vs. Competencia</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span>Proceso tradicional:</span>
                          <span className="text-foreground/60">2-4 horas</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Con IA empresarial:</span>
                          <span className="text-accent font-bold">2-15 minutos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {index === 3 && (
                  <div className="space-y-8 mt-12">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-accent mb-4">Operaciones sin quiebres</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">Stock con alertas</div>
                              <div className="text-sm text-foreground/70">Compra programada y reposición a tiempo</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">Logística con excepciones visibles</div>
                              <div className="text-sm text-foreground/70">Despachos claros y seguimiento</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">Panel de salud operacional</div>
                              <div className="text-sm text-foreground/70">Monitoreo continuo y alertas</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-accent/20">
                          <div className="text-3xl font-bold text-accent mb-2">Proyección</div>
                          <div className="text-sm text-foreground/80">de demanda inteligente</div>
                        </div>
                        <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 border border-accent/20">
                          <div className="text-3xl font-bold text-accent mb-2">Sin quiebres</div>
                          <div className="text-sm text-foreground/80">Operaciones continuas</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Insertar testimonio después de Conversión (index 1) */}
          {index === 1 && <MiniTestimonial />}
        </div>
      ))}
    </div>
  );
};