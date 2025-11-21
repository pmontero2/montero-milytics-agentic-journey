import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React, { useEffect, useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { 
    Database, 
    Layout, 
    Shield, 
    Zap, 
    BarChart3, 
    FileText, 
    Presentation, 
    TrendingUp,
    Image as ImageIcon,
    Users,
    Globe,
    Calendar,
    Clock,
    UserCheck,
    ClipboardList
} from "lucide-react";
import { ProjectContactForm } from "@/components/ProjectContactForm";
import { ImageGalleryModal } from "@/components/ImageGalleryModal";

// Datos del proyecto ConstructFlow
const constructFlowData = {
    id: "constructflow",
    name: "ConstructFlow",
    badge: "Case Study 2025",
    description: "Plataforma inteligente para la gestión y automatización de procesos constructivos. Control total desde el presupuesto hasta la ejecución.",
    techStack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    features: [
        {
            title: "Gestión Integral",
            description: "Administración centralizada de clientes, obras y presupuestos con análisis de datos en tiempo real.",
            icon: <Shield className="w-6 h-6 text-accent" />,
        },
        {
            title: "Control de Obras",
            description: "Seguimiento geolocalizado y financiero de cada proyecto, desde la planificación hasta la entrega.",
            icon: <Layout className="w-6 h-6 text-accent" />,
        },
        {
            title: "Base de Materiales",
            description: "Sistema inteligente de precios y costos con cálculo automático para presupuestos precisos.",
            icon: <Database className="w-6 h-6 text-accent" />,
        },
        {
            title: "Automatización",
            description: "Generación instantánea de documentos y notificaciones automáticas a todos los involucrados.",
            icon: <Zap className="w-6 h-6 text-accent" />,
        },
    ],
    workflow: [
        { title: "Planificación", text: "Definición de materiales y costos iniciales." },
        { title: "Cotización", text: "Conexión automática con proveedores y ferreterías." },
        { title: "Aprobación", text: "Generación de presupuestos y envío al cliente." },
        { title: "Ejecución", text: "Seguimiento en tiempo real del avance de obra." }
    ],
    galleryImages: [
        { src: "/cvb/vista_principal.png", alt: "Dashboard Principal", title: "Dashboard General" },
        { src: "/cvb/proyectos.png", alt: "Lista de Proyectos", title: "Gestión de Proyectos" },
        { src: "/cvb/proyectos_cliente.png", alt: "Portal Cliente", title: "Proyectos de Cliente" },
        { src: "/cvb/proyectos_detalles.png", alt: "Detalles de Proyecto", title: "Detalle de Obra" },
        { src: "/cvb/proyectos_materiales.png", alt: "Materiales", title: "Gestión de Materiales por Proyecto" },
        { src: "/cvb/cotizacion_1.png", alt: "Cotización", title: "Materiales para Generar Cotización Automática" },
        { src: "/cvb/cotizacion_2.png", alt: "Edición Cotización", title: "Cotización a Ferreterías Automático" },
        { src: "/cvb/inventario_directo.png", alt: "Inventario", title: "Control de Inventario" },
        { src: "/cvb/oficina_1.png", alt: "Oficina", title: "Proyecto de Ejemplo: Dashboard Resumen" },
        { src: "/cvb/proyectos_4.png", alt: "Avance", title: "Generación y Envío Cotización al Cliente" },
        { src: "/cvb/proyectos_generacion_pdf.png", alt: "PDF", title: "Generación de Presupuesto Automático" },
        { src: "/cvb/proyectos_generacion_preview.png", alt: "Preview", title: "Previsualización y Envío de Presupuesto al Cliente" },
    ],
    overviewTitle: "Optimizando la Construcción",
    overviewText: "ConstructFlow elimina la fricción en la gestión de obras. Diseñado para resolver la complejidad operativa, conecta a todos los actores del proyecto en un flujo de trabajo unificado, reduciendo errores y tiempos de respuesta.",
    galleryTitle: "Explora la Plataforma",
    galleryDescription: "Descubre cómo ConstructFlow optimiza cada etapa del proceso constructivo",
    ctaTitle: "Más Allá de la Construcción",
    ctaText: "Este sistema de gestión no se limita solo al sector constructivo. El mismo esquema puede adaptarse a cualquier rubro o empresa que necesite optimizar procesos, gestionar proyectos y automatizar flujos de trabajo.",
    ctaSubtext: "Desde manufactura hasta servicios profesionales, la arquitectura modular de ConstructFlow permite personalizarla según las necesidades específicas de tu negocio.",
    projectDescription: "una solución similar para tu negocio"
};

// Datos del proyecto AutoPPT
const autoPPTData = {
    id: "autoppt",
    name: "AutoPPT",
    badge: "Case Study 2025",
    description: "Sistema que toma métricas de redes sociales y sitios web por canales, y genera automáticamente presentaciones PPT profesionales para enviar a tus clientes.",
    techStack: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Recharts", "html2canvas"],
    features: [
        {
            title: "Ingesta de Datos",
            description: "Recopilación de métricas de múltiples canales: redes sociales (Facebook, Instagram, TikTok, LinkedIn) y sitios web, organizadas por canal.",
            icon: <Database className="w-6 h-6 text-accent" />,
        },
        {
            title: "Procesamiento Inteligente",
            description: "Ingeniería de datos que transforma métricas en formato estructurado, listo para generar presentaciones profesionales automáticamente.",
            icon: <Zap className="w-6 h-6 text-accent" />,
        },
        {
            title: "Generación Automática",
            description: "Creación automática de presentaciones PPT mediante captura de gráficos, generación de imágenes y envío a webhook para Google Slides.",
            icon: <Presentation className="w-6 h-6 text-accent" />,
        },
        {
            title: "Entrega a Clientes",
            description: "Sistema completo que permite generar y enviar presentaciones profesionales a tus clientes de forma automatizada, ahorrando horas de trabajo manual.",
            icon: <FileText className="w-6 h-6 text-accent" />,
        },
    ],
    workflow: [
        { title: "Ingesta de Datos", text: "Registrar métricas de redes sociales y sitios web organizadas por canales y clientes." },
        { title: "Procesamiento", text: "El sistema procesa y estructura los datos automáticamente para la generación de presentaciones." },
        { title: "Generación Automática", text: "Captura de gráficos, creación de imágenes y generación de PPT mediante ingeniería de datos." },
        { title: "Entrega", text: "Presentaciones PPT listas para enviar automáticamente a tus clientes, ahorrando tiempo y esfuerzo." }
    ],
    galleryImages: [
        { src: "/ppt/panel_inicial_!.png", alt: "Panel Inicial", title: "Dashboard Principal - Panel Inicial" },
        { src: "/ppt/ingreso_informacion_canales.png", alt: "Ingreso de Información", title: "Ingreso de Información de Canales" },
        { src: "/ppt/ingreso_informacion_canales_2.png", alt: "Gestión de Canales", title: "Gestión Detallada de Canales" },
        { src: "/ppt/reporte_netricas.png", alt: "Reporte de Métricas", title: "Reporte de Métricas y Análisis" },
        { src: "/ppt/reporte_metricas_presentaciones_pptx_googleslides.png", alt: "Presentaciones", title: "Generación de Presentaciones PPTX en Google Slides" },
    ],
    overviewTitle: "De Datos a Presentaciones Automáticas",
    overviewText: "AutoPPT es una solución de ingeniería de datos que toma métricas de redes sociales y sitios web por canales, y genera automáticamente presentaciones PPT profesionales. El sistema procesa los datos, crea visualizaciones y genera presentaciones listas para enviar a tus clientes, eliminando horas de trabajo manual.",
    galleryTitle: "Explora la Plataforma",
    galleryDescription: "Descubre cómo AutoPPT transforma métricas en presentaciones profesionales automáticamente",
    ctaTitle: "Más Allá de las Métricas",
    ctaText: "La ingeniería detrás de AutoPPT puede adaptarse a cualquier tipo de datos que necesites convertir en presentaciones: análisis de ventas, métricas de marketing, KPIs empresariales, reportes financieros y más.",
    ctaSubtext: "La arquitectura flexible permite personalizar canales, métricas y formatos de presentación según las necesidades específicas de tu negocio o industria.",
    projectDescription: "una solución similar para automatizar tus presentaciones"
};

// Datos del proyecto HealthAdmin
const healthAdminData = {
    id: "healthadmin",
    name: "HealthAdmin",
    badge: "Case Study 2025",
    description: "Sistema de administración de programas de salud nacido de una necesidad real: transformar una planilla de Excel compleja en una interfaz simple que mejore el día a día de quienes gestionan centros de salud.",
    techStack: ["React", "TypeScript", "Supabase", "Vite"],
    features: [
        {
            title: "Gestión de Programas",
            description: "Administración de tareas para programas de salud (PAP, Chile Crece Más, Mamografías, Procesos Asistenciales) con seguimiento de estados y responsables.",
            icon: <ClipboardList className="w-6 h-6 text-accent" />,
        },
        {
            title: "Administración de Boxes",
            description: "Calendario semanal con reserva de horarios por funcionario, organizado por sectores (Naranjo, Amarillo, Verde) para optimizar el uso de espacios.",
            icon: <Calendar className="w-6 h-6 text-accent" />,
        },
        {
            title: "Gestión de Funcionarios",
            description: "Registro completo de funcionarios con RUT, sector, horarios y contacto, facilitando la organización del equipo de salud.",
            icon: <Users className="w-6 h-6 text-accent" />,
        },
        {
            title: "Solución Personalizada",
            description: "Diseñado para resolver un problema específico de forma simple y efectiva, priorizando la usabilidad sobre la complejidad técnica.",
            icon: <UserCheck className="w-6 h-6 text-accent" />,
        },
    ],
    workflow: [
        { title: "Identificación", text: "Detectar un problema real: una planilla de Excel difícil de usar en el día a día." },
        { title: "Diseño Simple", text: "Crear una interfaz intuitiva que simplifique la gestión de programas y boxes de salud." },
        { title: "Implementación", text: "Desarrollar una solución funcional en horas, enfocada en resolver el problema específico." },
        { title: "Impacto Diario", text: "Mejorar la rutina diaria de quienes gestionan programas de salud, haciendo su trabajo más fácil." }
    ],
    galleryImages: [
        { src: "/faryde/inicio_calendario_eventos_reuniones.png", alt: "Dashboard", title: "Panel Principal - Calendario y Eventos" },
        { src: "/faryde/tareas_segun_programa.png", alt: "Programas", title: "Gestión de Tareas por Programa de Salud" },
        { src: "/faryde/administracion_gestion_boxes.png", alt: "Boxes", title: "Administración y Gestión de Boxes" },
        { src: "/faryde/reuniones.png", alt: "Reuniones", title: "Gestión de Reuniones" },
        { src: "/faryde/recursos.png", alt: "Recursos", title: "Gestión de Recursos y Documentos" },
    ],
    overviewTitle: "Tecnología que Resuelve Problemas Reales",
    overviewText: "HealthAdmin nació de una conversación: una planilla de Excel que, aunque funcional, era compleja de usar. En lugar de buscar una solución corporativa masiva, se creó algo simple, directo y efectivo. A veces la mejor tecnología es la que resuelve un problema pequeño para una persona, pero que mejora su día todos los días.",
    galleryTitle: "Explora la Plataforma",
    galleryDescription: "Descubre cómo HealthAdmin simplifica la gestión de programas de salud",
    ctaTitle: "Más Allá de la Salud",
    ctaText: "La filosofía detrás de HealthAdmin puede aplicarse a cualquier sector: identificar un problema real, diseñar una solución simple y enfocada, e implementarla rápidamente. No siempre necesitas escalar a millones de usuarios; a veces basta con resolver el problema de una persona de forma excelente.",
    ctaSubtext: "La arquitectura flexible permite adaptar el sistema a diferentes necesidades administrativas, desde gestión de recursos hasta coordinación de equipos en cualquier industria.",
    projectDescription: "una solución similar para tu organización"
};

type ProjectData = typeof constructFlowData;

interface ProjectContentProps {
    project: ProjectData;
    carouselApi: any;
    setCarouselApi: (api: any) => void;
    current: number;
    setCurrent: (index: number) => void;
    autoplayPlugin: React.MutableRefObject<any>;
    onContactClick: () => void;
    onImageClick?: (index: number) => void;
}

const ProjectContent = ({ 
    project, 
    carouselApi, 
    setCarouselApi, 
    current, 
    setCurrent, 
    autoplayPlugin,
    onContactClick,
    onImageClick
}: ProjectContentProps) => {
    useEffect(() => {
        if (!carouselApi) {
            return;
        }

        setCurrent(carouselApi.selectedScrollSnap());

        const handleSelect = () => {
            setCurrent(carouselApi.selectedScrollSnap());
        };

        carouselApi.on("select", handleSelect);

        return () => {
            carouselApi.off("select", handleSelect);
        };
    }, [carouselApi, setCurrent]);

    
    return (
        <>
            {/* Hero Section */}
            <section className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 px-2 sm:px-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-white/80 text-sm font-medium mb-2 hover:border-accent/50 transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    {project.badge}
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-4 md:mb-8">
                    {project.name === "AutoPPT" ? (
                        <>
                            Auto<span className="text-accent">PPT</span>
                        </>
                    ) : project.name === "HealthAdmin" ? (
                        <>
                            Health<span className="text-accent">Admin</span>
                        </>
                    ) : (
                        <>
                            Construct<span className="text-accent">Flow</span>
                        </>
                    )}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed mt-6 text-justify">
                    {project.description}
                </p>
            </section>

            {/* Overview & Features */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mt-8 md:mt-16">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{project.overviewTitle}</h2>
                        <p className="text-lg text-white/70 leading-relaxed text-justify">
                            {project.overviewText}
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {project.features.map((feature, index) => (
                            <Card key={index} className="bg-zinc-900/20 border-white/5 hover:bg-zinc-900/40 transition-colors duration-300">
                                <CardHeader className="pb-2 p-4 md:p-6">
                                    <div className="mb-2 w-fit p-2 rounded-lg bg-accent/10 text-accent">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-base font-semibold text-white">{feature.title}</CardTitle>
                                </CardHeader>
                                    <CardContent className="p-4 md:p-6 pt-0">
                                        <p className="text-sm text-white/50 leading-relaxed text-justify">{feature.description}</p>
                                    </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="relative h-auto lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 p-4 md:p-8 flex flex-col justify-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6">Flujo de Trabajo Simplificado</h3>
                        <div className="relative pl-8 border-l-2 border-white/10 space-y-8">
                            {project.workflow.map((step, i) => (
                                <div key={i} className="relative">
                                    <span className={`absolute -left-[41px] top-0 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-accent z-10 ${
                                        i === 0 ? 'animate-flow-progress' :
                                        i === 1 ? 'animate-flow-progress-delay-1' :
                                        i === 2 ? 'animate-flow-progress-delay-2' :
                                        'animate-flow-progress-delay-10'
                                    }`}></span>
                                    <h4 className="text-lg font-medium text-white">{step.title}</h4>
                                    <p className="text-white/50 text-justify">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="space-y-8 mt-12 md:mt-20">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{project.galleryTitle}</h2>
                    <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto text-justify">
                        {project.galleryDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-6 max-w-7xl mx-auto px-4">
                    {/* Main Carousel */}
                    <div className="w-full">
                        <Carousel
                            opts={{
                                align: "center",
                                loop: true,
                            }}
                            plugins={[autoplayPlugin.current]}
                            setApi={setCarouselApi}
                            className="w-full"
                        >
                            <CarouselContent>
                                {project.galleryImages.map((image, index) => (
                                    <CarouselItem key={index} className="basis-full">
                                        <div 
                                            className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-accent/50 transition-all duration-500 shadow-2xl aspect-video cursor-pointer lg:cursor-default"
                                            onClick={() => {
                                                if (onImageClick && window.innerWidth < 1024) {
                                                    onImageClick(index);
                                                }
                                            }}
                                        >
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover object-top transform scale-102 transition-transform duration-700 ease-out"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4 md:p-8">
                                                <p className="text-white font-bold text-lg md:text-2xl">{image.title}</p>
                                            </div>
                                            {/* Mobile overlay hint */}
                                            <div className="lg:hidden absolute inset-0 flex items-center justify-center bg-black/0 active:bg-black/10 transition-colors">
                                                <div className="opacity-60 active:opacity-100 transition-opacity bg-black/60 rounded-full p-2.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>

                    {/* Thumbnail Navigation - Desktop: 2 columns */}
                    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-3 lg:overflow-y-auto lg:max-h-[calc(100vh-400px)] lg:content-start">
                        {project.galleryImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    carouselApi?.scrollTo(index);
                                    autoplayPlugin.current?.reset();
                                }}
                                className={`flex-shrink-0 rounded-lg px-3 py-2.5 border-2 transition-all duration-300 hover:border-accent text-left ${current === index ? 'border-accent bg-accent/10 text-white' : 'border-white/10 text-white/60 hover:text-white'
                                    }`}
                            >
                                <p className="text-sm font-medium leading-tight">{image.title}</p>
                            </button>
                        ))}
                    </div>
                    {/* Mobile Thumbnails - Horizontal Scroll */}
                    <div className="flex gap-3 overflow-x-auto pb-2 lg:hidden">
                        {project.galleryImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    carouselApi?.scrollTo(index);
                                    autoplayPlugin.current?.reset();
                                }}
                                className={`flex-shrink-0 rounded-lg px-3 py-2.5 border-2 transition-all duration-300 hover:border-accent text-left min-w-[140px] ${current === index ? 'border-accent bg-accent/10 text-white' : 'border-white/10 text-white/60 hover:text-white'
                                    }`}
                            >
                                <p className="text-sm font-medium leading-tight">{image.title}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center space-y-8 py-16 px-4">
                <div className="max-w-4xl mx-auto space-y-3">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        {project.ctaTitle.includes("Construcción") ? (
                            <>
                                Más Allá de la <span className="text-accent">Construcción</span>
                            </>
                        ) : (
                            <>
                                Más Allá de las <span className="text-accent">Redes Sociales</span>
                            </>
                        )}
                    </h2>
                    <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto text-justify">
                        {project.ctaText}
                    </p>
                    <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto text-justify">
                        {project.ctaSubtext}
                    </p>
                    <button
                        onClick={onContactClick}
                        className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-accent hover:bg-accent/90 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 mt-2 text-base md:text-lg"
                    >
                        Hablemos de tu Proyecto
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<string>("constructflow");
    const [carouselApi, setCarouselApi] = useState<any>();
    const [current, setCurrent] = useState(0);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [imageModalIndex, setImageModalIndex] = useState(0);
    const autoplayPlugin = useRef(
        Autoplay({
            delay: 4000,
        })
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Resetear carousel cuando cambia el proyecto
        setCurrent(0);
        if (carouselApi) {
            carouselApi.scrollTo(0);
        }
    }, [selectedProject, carouselApi]);

    const currentProject = 
        selectedProject === "constructflow" ? constructFlowData :
        selectedProject === "autoppt" ? autoPPTData :
        healthAdminData;

    return (
        <div className="min-h-screen bg-black text-white selection:bg-accent/30">
            <Navbar />

            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 container mx-auto space-y-12 md:space-y-24">
                {/* Project Selector */}
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                        Explora los <span className="text-accent">Proyectos</span>
                    </h2>
                    <Tabs value={selectedProject} onValueChange={setSelectedProject} className="w-full max-w-full md:max-w-4xl">
                        <TabsList className="grid w-full grid-cols-3 bg-zinc-900/50 border border-white/10 gap-2 p-1.5">
                            <TabsTrigger 
                                value="constructflow" 
                                className="data-[state=active]:bg-accent data-[state=active]:text-black data-[state=active]:font-semibold data-[state=inactive]:bg-zinc-800/60 data-[state=inactive]:text-white/90 data-[state=inactive]:border data-[state=inactive]:border-white/20 data-[state=inactive]:hover:bg-zinc-700/80 data-[state=inactive]:hover:border-accent/50 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:scale-105 text-sm md:text-base px-2 py-2 md:px-4 md:py-3 transition-all duration-300 font-medium"
                            >
                                ConstructFlow
                            </TabsTrigger>
                            <TabsTrigger 
                                value="autoppt"
                                className="data-[state=active]:bg-accent data-[state=active]:text-black data-[state=active]:font-semibold data-[state=inactive]:bg-zinc-800/60 data-[state=inactive]:text-white/90 data-[state=inactive]:border data-[state=inactive]:border-white/20 data-[state=inactive]:hover:bg-zinc-700/80 data-[state=inactive]:hover:border-accent/50 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:scale-105 text-sm md:text-base px-2 py-2 md:px-4 md:py-3 transition-all duration-300 font-medium"
                            >
                                AutoPPT
                            </TabsTrigger>
                            <TabsTrigger 
                                value="healthadmin"
                                className="data-[state=active]:bg-accent data-[state=active]:text-black data-[state=active]:font-semibold data-[state=inactive]:bg-zinc-800/60 data-[state=inactive]:text-white/90 data-[state=inactive]:border data-[state=inactive]:border-white/20 data-[state=inactive]:hover:bg-zinc-700/80 data-[state=inactive]:hover:border-accent/50 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:scale-105 text-sm md:text-base px-2 py-2 md:px-4 md:py-3 transition-all duration-300 font-medium"
                            >
                                HealthAdmin
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <Tabs value={selectedProject} onValueChange={setSelectedProject}>
                    <TabsContent value={selectedProject} className="mt-0">
                        <ProjectContent
                            project={currentProject}
                            carouselApi={carouselApi}
                            setCarouselApi={setCarouselApi}
                            current={current}
                            setCurrent={setCurrent}
                            autoplayPlugin={autoplayPlugin}
                            onContactClick={() => setIsContactModalOpen(true)}
                            onImageClick={(index) => {
                                setImageModalIndex(index);
                                setIsImageModalOpen(true);
                            }}
                        />
                    </TabsContent>
                </Tabs>
            </main>

            <Footer />
            <ProjectContactForm
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                projectName={currentProject.name}
                projectDescription={currentProject.projectDescription}
            />
            <ImageGalleryModal
                isOpen={isImageModalOpen}
                onClose={() => setIsImageModalOpen(false)}
                images={currentProject.galleryImages}
                initialIndex={imageModalIndex}
            />
        </div>
    );
};

export default Projects;
