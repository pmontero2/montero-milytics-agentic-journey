import { MiniTestimonial } from "./MiniTestimonial";

interface StickyFunnelLayoutEmpresasProps {
  panels: Array<{
    title: string;
    subtitle?: string;
    description: string;
    bullets?: string[];
    imageSrc: string;
  }>;
}

export const StickyFunnelLayoutEmpresas = ({ panels }: StickyFunnelLayoutEmpresasProps) => {
  return (
    <div className="relative">
      {/* Dynamic Content Sections - Todas visibles */}
      {panels.map((panel, index) => (
        <div key={panel.title} id={`panel-${index}`} data-panel-index={index}>
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
            
            {/* Dark overlay for better text readability - Responsive */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80 lg:from-background/90 lg:via-background/80 lg:to-background/90"></div>
            
            {/* Content - Responsive Layout */}
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-center relative z-10">
              <div className="max-w-7xl w-full transition-all duration-1000">
                {/* Mobile Layout - Image First */}
                <div className="lg:hidden">
                  <div className="flex flex-col items-center space-y-8">
                    {/* Image First on Mobile */}
                    <div className="w-full max-w-sm">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-xl"></div>
                        <img 
                          src={panel.imageSrc} 
                          alt={panel.title}
                          className="relative w-full h-auto rounded-2xl shadow-2xl"
                        />
                      </div>
                    </div>
                    
                    {/* Information Below */}
                    <div className="text-center px-4">
                      <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-glow-accent">
                        {panel.title}
                      </h2>
                      {panel.subtitle && (
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-accent">
                          {panel.subtitle}
                        </h3>
                      )}
                      <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6 sm:mb-8">
                        {panel.description}
                      </p>
                      
                      {/* Mini Testimonial */}
                      <div className="mb-6 sm:mb-8">
                        <MiniTestimonial bullets={panel.bullets} agentName={`Agente de ${panel.title}`} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - 2 Column */}
                <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
                  {/* Left Column - Information */}
                  <div className="text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-glow-accent">
                      {panel.title}
                    </h2>
                    {panel.subtitle && (
                      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-accent">
                        {panel.subtitle}
                      </h3>
                    )}
                    <p className="text-lg md:text-xl text-foreground/90 max-w-2xl leading-relaxed mb-8">
                      {panel.description}
                    </p>
                    
                    {/* Mini Testimonial */}
                    <div className="mb-8">
                      <MiniTestimonial bullets={panel.bullets} agentName={`Agente de ${panel.title}`} />
                    </div>
                  </div>
                  
                  {/* Right Column - Image */}
                  <div className="flex justify-end">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-xl"></div>
                      <img 
                        src={panel.imageSrc} 
                        alt={panel.title}
                        className="relative w-full max-w-md h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
