# 🤖 Documentación para LLM - Brian Montero Landing

## 📋 Contexto del Proyecto

### Información General
- **Proyecto**: Landing page profesional para Brian Montero
- **Tecnología**: React + TypeScript + Vite + Tailwind CSS
- **Propósito**: Generar leads cualificados para servicios de IA empresarial
- **Audiencia**: Empresas que buscan automatización e IA
- **Idioma**: Español (España)

### Estructura del Proyecto
```
bzy-landing/
├── src/
│   ├── components/          # Componentes React reutilizables
│   ├── pages/              # Páginas principales
│   ├── assets/             # Imágenes y recursos
│   ├── hooks/              # Custom hooks
│   └── lib/                # Utilidades
├── public/                 # Archivos estáticos
├── docs/                   # Documentación
└── dist/                   # Build de producción
```

## 🎯 Objetivos del Sitio

### Primarios
1. **Generar leads cualificados** para servicios de IA
2. **Establecer autoridad** en automatización empresarial
3. **Mostrar casos de éxito** y testimonios
4. **Facilitar contacto** directo con Brian Montero

### Secundarios
1. **Posicionamiento SEO** para términos relacionados con IA
2. **Presencia en redes sociales** con compartir optimizado
3. **Conversión de visitantes** en clientes potenciales
4. **Demostración de expertise** técnico

## 👤 Perfil de Brian Montero

### Información Personal
- **Nombre**: Brian Montero
- **Especialidad**: IA y Automatización Empresarial
- **Empresa**: Milytics
- **Ubicación**: España
- **Idioma**: Español

### Servicios Ofrecidos
1. **Agentes de IA** para empresas
2. **Automatización de procesos** empresariales
3. **Generación de leads** automatizada
4. **Mejora de conversión** con IA
5. **Respuestas 24/7** automatizadas

### Propuesta de Valor
- **Pilotos rápidos**: Implementación en semanas
- **KPIs medibles**: Resultados cuantificables
- **ROI demostrable**: Retorno de inversión claro
- **Experiencia técnica**: Especialización en IA

## 🏗️ Arquitectura Técnica

### Stack Tecnológico
- **Frontend**: React 18 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router
- **State**: React Hooks
- **Deployment**: Static hosting

### Componentes Principales
```typescript
// Páginas principales
- Home.tsx                 // Página principal
- EmpresasAgenticas.tsx   // Servicios empresariales
- SobreMi.tsx            // Perfil personal

// Componentes clave
- HeroHome.tsx           // Hero de página principal
- HeroEmpresas.tsx      // Hero para empresas
- ContactForm.tsx       // Formulario de contacto
- Testimonial.tsx       // Testimonios
- FAQ.tsx              // Preguntas frecuentes
- Navbar.tsx           // Navegación
- Footer.tsx           // Pie de página
```

### Estructura de Datos
```typescript
// Tipos principales
interface Testimonial {
  name: string;
  company: string;
  content: string;
  image?: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

interface FAQ {
  question: string;
  answer: string;
  category: string;
}
```

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: Negro (#000000)
- **Secundario**: Verde neón (#00ff88)
- **Texto**: Blanco (#ffffff)
- **Fondo**: Gradientes oscuros
- **Acentos**: Grises (#1a1a1a)

### Tipografía
- **Principal**: Space Grotesk (Google Fonts)
- **Pesos**: 400, 500, 600, 700
- **Tamaños**: Responsive (16px base)

### Principios de Diseño
1. **Minimalismo**: Diseño limpio y enfocado
2. **Contraste**: Alto contraste para legibilidad
3. **Espaciado**: Generoso uso del espacio en blanco
4. **Jerarquía**: Clara estructura visual
5. **Mobile-first**: Diseño responsive

## 📱 Optimización Móvil

### Responsive Design
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Mobile-first**: Diseño optimizado para móviles
- **Touch-friendly**: Botones y enlaces accesibles
- **Performance**: Carga rápida en móviles

### Componentes Móviles
- **use-mobile.tsx**: Hook para detectar dispositivos móviles
- **use-mobile-form.tsx**: Optimización de formularios móviles
- **FloatingContactForm.tsx**: Formulario flotante para móviles

## 🔍 SEO y Metadatos

### Configuración Actual
- **Meta tags**: Completos para SEO básico
- **Open Graph**: Optimizado para redes sociales
- **Twitter Cards**: Configurado para Twitter
- **WhatsApp**: Optimizado para compartir
- **Schema.org**: Datos estructurados implementados

### Palabras Clave Objetivo
- **Primarias**: Brian Montero, Empresas Agénticas, Agentes de IA
- **Secundarias**: Automatización empresarial, IA para empresas
- **Long-tail**: Agentes de IA para más leads, automatización con IA

### URLs Objetivo
- `https://www.bmontero.com/` - Página principal
- `https://www.bmontero.com/empresas` - Servicios empresariales
- `https://www.bmontero.com/sobre-mi` - Perfil profesional

## 📊 Analytics y Métricas

### KPIs Principales
- **Tráfico orgánico**: +50% en 6 meses
- **Leads generados**: 10+ por mes
- **Tasa de conversión**: >2%
- **Tiempo en página**: >2 minutos

### Herramientas de Monitoreo
- **Google Analytics 4**
- **Google Search Console**
- **Facebook Pixel** (si se implementa)
- **Hotjar** (para UX)

## 🚀 Funcionalidades Implementadas

### Formularios de Contacto
- **ContactForm.tsx**: Formulario principal
- **FloatingContactForm.tsx**: Formulario flotante móvil
- **Validación**: Client-side con React Hook Form
- **Campos**: Nombre, email, empresa, mensaje

### Navegación
- **Navbar.tsx**: Navegación principal
- **ScrollProgress.tsx**: Indicador de progreso de scroll
- **StickyCTA.tsx**: Call-to-action fijo
- **Scroll-to-top**: Botón para volver arriba

### Contenido Dinámico
- **Testimonials**: Testimonios de clientes
- **FAQ**: Preguntas frecuentes
- **Services**: Servicios ofrecidos
- **Case Studies**: Casos de éxito

## 🔧 Configuración de Desarrollo

### Scripts Disponibles
```json
{
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
}
```

### Variables de Entorno
```env
VITE_SITE_URL=https://www.bmontero.com
VITE_CONTACT_API_URL=/api/contact
VITE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Dependencias Principales
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.0",
  "tailwindcss": "^3.3.0",
  "typescript": "^5.0.2",
  "vite": "^4.4.5"
}
```

## 📝 Guías de Desarrollo

### Agregar Nueva Página
1. Crear componente en `src/pages/`
2. Agregar ruta en `App.tsx`
3. Actualizar navegación en `Navbar.tsx`
4. Agregar metadatos específicos
5. Actualizar sitemap

### Agregar Nuevo Componente
1. Crear archivo en `src/components/`
2. Exportar componente
3. Importar donde se necesite
4. Documentar props con TypeScript
5. Agregar tests si es necesario

### Optimización de Imágenes
1. Usar formato WebP cuando sea posible
2. Implementar lazy loading
3. Optimizar tamaños para diferentes dispositivos
4. Agregar alt text descriptivo
5. Comprimir imágenes

## 🐛 Troubleshooting Común

### Problemas de Build
- **Error de TypeScript**: Verificar tipos en componentes
- **Error de Tailwind**: Verificar clases CSS
- **Error de Vite**: Limpiar cache con `npm run build --force`

### Problemas de SEO
- **Metadatos no aparecen**: Verificar URLs absolutas
- **Imágenes no cargan**: Verificar rutas de assets
- **Schema no válido**: Usar validator de Google

### Problemas de Performance
- **Carga lenta**: Optimizar imágenes y código
- **CLS alto**: Verificar dimensiones de imágenes
- **LCP lento**: Optimizar hero section

## 📚 Recursos Adicionales

### Documentación Técnica
- **React**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/
- **Tailwind**: https://tailwindcss.com/
- **Vite**: https://vitejs.dev/

### Herramientas SEO
- **Google Search Console**: https://search.google.com/search-console
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Schema Validator**: https://validator.schema.org/

### Herramientas de Diseño
- **Figma**: Para mockups
- **Canva**: Para imágenes sociales
- **Unsplash**: Para imágenes de stock

---

**Última actualización**: Enero 2025  
**Versión**: 1.0  
**Mantenido por**: Brian Montero
