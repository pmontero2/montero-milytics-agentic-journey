import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export const PrivacyPolicy = () => {
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
                Política de Privacidad
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-foreground/70">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-foreground/80 space-y-6 sm:space-y-8">
              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">1. Información que Recopilamos</h2>
                <p className="text-sm sm:text-base">
                  Recopilamos información que nos proporcionas directamente, como cuando:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Te registras para recibir nuestros servicios</li>
                  <li>Completas formularios de contacto</li>
                  <li>Te comunicas con nosotros por correo electrónico</li>
                  <li>Participas en encuestas o consultas</li>
                </ul>
                <p className="text-sm sm:text-base">
                  Esta información puede incluir tu nombre, dirección de correo electrónico, 
                  número de teléfono, información de la empresa y cualquier otra información 
                  que elijas proporcionar.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">2. Cómo Utilizamos tu Información</h2>
                <p className="text-sm sm:text-base">Utilizamos la información recopilada para:</p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Proporcionar y mejorar nuestros servicios de consultoría en IA</li>
                  <li>Responder a tus consultas y comunicarnos contigo</li>
                  <li>Enviar información relevante sobre nuestros servicios</li>
                  <li>Personalizar tu experiencia con nuestros servicios</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">3. Compartir Información</h2>
                <p className="text-sm sm:text-base">
                  No vendemos, alquilamos ni compartimos tu información personal con terceros, 
                  excepto en las siguientes circunstancias:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Con tu consentimiento explícito</li>
                  <li>Para cumplir con obligaciones legales</li>
                  <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                  <li>En caso de fusión, adquisición o venta de activos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">4. Seguridad de los Datos</h2>
                <p className="text-sm sm:text-base">
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para 
                  proteger tu información personal contra acceso no autorizado, alteración, 
                  divulgación o destrucción.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">5. Tus Derechos</h2>
                <p className="text-sm sm:text-base">Tienes derecho a:</p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar información inexacta</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Limitar el procesamiento de tus datos</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">6. Cookies y Tecnologías Similares</h2>
                <p className="text-sm sm:text-base">
                  Utilizamos cookies y tecnologías similares para mejorar tu experiencia 
                  en nuestro sitio web, analizar el tráfico y personalizar el contenido.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">7. Retención de Datos</h2>
                <p className="text-sm sm:text-base">
                  Conservamos tu información personal solo durante el tiempo necesario 
                  para cumplir con los propósitos descritos en esta política, a menos 
                  que la ley requiera un período de retención más largo.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">8. Cambios a esta Política</h2>
                <p className="text-sm sm:text-base">
                  Podemos actualizar esta Política de Privacidad ocasionalmente. 
                  Te notificaremos sobre cambios significativos publicando la nueva 
                  política en esta página y actualizando la fecha de "última actualización".
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 sm:mb-4">9. Contacto</h2>
                <p className="text-sm sm:text-base">
                  Si tienes preguntas sobre esta Política de Privacidad o sobre cómo 
                  manejamos tu información personal, puedes contactarnos en:
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

export default PrivacyPolicy;
