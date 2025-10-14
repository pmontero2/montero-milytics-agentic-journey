import { Quote } from "lucide-react";

export const BrandingQuote = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote icon */}
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30">
              <Quote className="h-8 w-8 text-accent" />
            </div>
          </div>

          {/* Main quote */}
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            "No se trata de reemplazar personas, sino de liberar su tiempo."
          </blockquote>

          {/* Author attribution */}
          <div className="text-lg md:text-xl text-accent font-medium">
            — Brian Montero
          </div>

          {/* Subtitle */}
          <div className="mt-6 text-base md:text-lg text-accent/70 max-w-2xl mx-auto">
            Esta es mi filosofía: usar la tecnología para que las personas puedan enfocarse en lo que realmente importa.
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
