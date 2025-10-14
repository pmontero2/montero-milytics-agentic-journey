import { FunnelDiagram } from "./FunnelDiagram";
import { MiniTestimonial } from "./MiniTestimonial";

interface StickyFunnelLayoutHomeProps {
  panels: Array<{
    title: string;
    description: string;
    imageSrc: string;
  }>;
}

export const StickyFunnelLayoutHome = ({ panels }: StickyFunnelLayoutHomeProps) => {
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
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-glow-accent">
                    {panel.title}
                  </h2>
                  <p className="text-lg md:text-xl text-accent max-w-3xl mx-auto leading-relaxed">
                    {panel.description}
                  </p>
                </div>
                
                {/* Funnel Diagram */}
                <div className="mb-8">
                  <FunnelDiagram />
                </div>
                
                {/* Mini Testimonial */}
                <div className="mb-8">
                  <MiniTestimonial />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
