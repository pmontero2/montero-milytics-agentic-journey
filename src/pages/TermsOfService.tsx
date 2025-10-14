import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export const TermsOfService = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Términos de Servicio
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-foreground/70">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-foreground/80 space-y-6 sm:space-y-8">
              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">1. Aceptación de los Términos</h2>
                <p className="text-sm sm:text-base">
                  Al acceder y utilizar los servicios de BMONTERO, aceptas estar sujeto a estos 
                  Términos de Servicio y a todas las leyes y regulaciones aplicables. Si no 
                  estás de acuerdo con alguno de estos términos, no debes utilizar nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">2. Descripción de los Servicios</h2>
                <p className="text-sm sm:text-base">
                  BMONTERO proporciona servicios de consultoría especializada en inteligencia 
                  artificial, incluyendo pero no limitado a:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Transformación digital de negocios tradicionales</li>
                  <li>Implementación de agentes de IA</li>
                  <li>Consultoría estratégica en automatización</li>
                  <li>Desarrollo de soluciones inteligentes</li>
                  <li>Capacitación y formación en tecnologías emergentes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">3. Uso Aceptable</h2>
                <p className="text-sm sm:text-base">Al utilizar nuestros servicios, te comprometes a:</p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Proporcionar información veraz y actualizada</li>
                  <li>Utilizar los servicios de manera ética y legal</li>
                  <li>Respetar la propiedad intelectual</li>
                  <li>No interferir con el funcionamiento de nuestros servicios</li>
                  <li>Mantener la confidencialidad de información sensible</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">4. Propiedad Intelectual</h2>
                <p className="text-sm sm:text-base">
                  Todos los contenidos, marcas comerciales, logos y materiales proporcionados 
                  por BMONTERO están protegidos por derechos de autor y otras leyes de 
                  propiedad intelectual. No puedes reproducir, distribuir o crear trabajos 
                  derivados sin autorización expresa.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">5. Confidencialidad</h2>
                <p className="text-sm sm:text-base">
                  Ambas partes reconocen que pueden tener acceso a información confidencial 
                  durante la prestación de servicios. Nos comprometemos a mantener la 
                  confidencialidad de tu información empresarial y esperamos el mismo nivel 
                  de confidencialidad de tu parte.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">6. Limitación de Responsabilidad</h2>
                <p className="text-sm sm:text-base">
                  BMONTERO proporciona servicios "tal como están". No garantizamos resultados 
                  específicos y no seremos responsables por daños indirectos, incidentales, 
                  especiales o consecuentes que puedan resultar del uso de nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">7. Pago y Facturación</h2>
                <p className="text-sm sm:text-base">
                  Los términos de pago se establecerán en contratos específicos para cada proyecto. 
                  Los pagos vencidos pueden resultar en la suspensión de servicios hasta que 
                  se resuelva el problema de pago.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">8. Terminación</h2>
                <p className="text-sm sm:text-base">
                  Cualquiera de las partes puede terminar los servicios con notificación previa 
                  según los términos acordados en el contrato específico. En caso de terminación, 
                  se aplicarán las cláusulas de confidencialidad y propiedad intelectual.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">9. Modificaciones</h2>
                <p className="text-sm sm:text-base">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                  Los cambios entrarán en vigor inmediatamente después de su publicación en 
                  nuestro sitio web. El uso continuado de nuestros servicios constituye 
                  aceptación de los términos modificados.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">10. Ley Aplicable</h2>
                <p className="text-sm sm:text-base">
                  Estos términos se rigen por las leyes del país donde opera BMONTERO. 
                  Cualquier disputa será resuelta en los tribunales competentes de esa jurisdicción.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">11. Contacto</h2>
                <p className="text-sm sm:text-base">
                  Si tienes preguntas sobre estos Términos de Servicio, puedes contactarnos en:
                </p>
                <div className="bg-accent/10 p-4 sm:p-6 rounded-lg mt-3 sm:mt-4">
                  <p className="text-sm sm:text-base"><strong>Email:</strong> bmontero@milytics.io</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
