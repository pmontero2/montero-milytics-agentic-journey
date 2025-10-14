# 📱 Configuración de Redes Sociales

## 🎯 Objetivo de la Configuración

Optimizar el compartir de la página web en todas las redes sociales principales para maximizar el engagement y generar más tráfico cualificado hacia el sitio.

## 📊 Plataformas Configuradas

### 1. Facebook / Meta
```html
<!-- Open Graph para Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Brian Montero — Empresas Agénticas, IA y Automatización" />
<meta property="og:description" content="Agentes de IA para más leads, mejor conversión y respuestas 24/7. Pilotos en semanas con KPIs medibles." />
<meta property="og:image" content="https://brianmontero.com/src/assets/logo-bmontero.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Brian Montero - Especialista en IA y Automatización" />
<meta property="og:url" content="https://brianmontero.com" />
<meta property="og:site_name" content="Brian Montero - Milytics" />
<meta property="og:locale" content="es_ES" />
```

**Características específicas**:
- **Tipo**: Website
- **Imagen**: 1200x630px (ratio 1.91:1)
- **Idioma**: Español (España)
- **Validación**: Facebook Debugger

### 2. Twitter / X
```html
<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Brian Montero — Empresas Agénticas, IA y Automatización" />
<meta name="twitter:description" content="Agentes de IA para más leads, mejor conversión y respuestas 24/7. Pilotos en semanas con KPIs medibles." />
<meta name="twitter:image" content="https://brianmontero.com/src/assets/logo-bmontero.png" />
<meta name="twitter:image:alt" content="Brian Montero - Especialista en IA y Automatización" />
<meta name="twitter:site" content="@brianmontero" />
<meta name="twitter:creator" content="@brianmontero" />
```

**Características específicas**:
- **Tipo**: Summary Large Image
- **Imagen**: 1200x630px
- **Handle**: @brianmontero (actualizar por el real)
- **Validación**: Twitter Card Validator

### 3. LinkedIn
```html
<!-- LinkedIn usa Open Graph estándar -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Brian Montero — Empresas Agénticas, IA y Automatización" />
<meta property="og:description" content="Agentes de IA para más leads, mejor conversión y respuestas 24/7. Pilotos en semanas con KPIs medibles." />
<meta property="og:image" content="https://brianmontero.com/src/assets/logo-bmontero.png" />
<meta property="og:url" content="https://brianmontero.com" />
```

**Características específicas**:
- **Usa**: Open Graph estándar
- **Audiencia**: Profesional/B2B
- **Validación**: LinkedIn Post Inspector

### 4. WhatsApp
```html
<!-- Optimización específica para WhatsApp -->
<meta property="og:image:secure_url" content="https://brianmontero.com/src/assets/logo-bmontero.png" />
<meta property="og:image:type" content="image/png" />
<meta name="theme-color" content="#000000" />
<meta name="format-detection" content="telephone=no" />
```

**Características específicas**:
- **Imagen segura**: HTTPS obligatorio
- **Tipo**: PNG especificado
- **Color tema**: Negro (#000000)
- **Sin detección**: Teléfono deshabilitado

### 5. Telegram
```html
<!-- Telegram usa Open Graph estándar -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Brian Montero — Empresas Agénticas, IA y Automatización" />
<meta property="og:description" content="Agentes de IA para más leads, mejor conversión y respuestas 24/7. Pilotos en semanas con KPIs medibles." />
<meta property="og:image" content="https://brianmontero.com/src/assets/logo-bmontero.png" />
```

**Características específicas**:
- **Usa**: Open Graph estándar
- **Imagen**: 1200x630px recomendado
- **Validación**: Compartir en Telegram

## 🖼️ Especificaciones de Imágenes

### Dimensiones Recomendadas
- **Facebook**: 1200x630px (1.91:1)
- **Twitter**: 1200x630px (summary_large_image)
- **LinkedIn**: 1200x627px (1.91:1)
- **WhatsApp**: 1200x630px
- **Telegram**: 1200x630px

### Formatos Soportados
- **PNG**: Transparencia, mejor calidad
- **JPG**: Menor tamaño, sin transparencia
- **WebP**: Moderno, mejor compresión

### Optimización de Imágenes
```css
/* CSS para imágenes responsive */
.og-image {
  width: 1200px;
  height: 630px;
  object-fit: cover;
  border-radius: 8px;
}
```

## 🔧 Herramientas de Validación

### 1. Facebook Debugger
- **URL**: https://developers.facebook.com/tools/debug/
- **Función**: Validar Open Graph tags
- **Uso**: Pegar URL y hacer "Debug"
- **Actualización**: Forzar actualización de cache

### 2. Twitter Card Validator
- **URL**: https://cards-dev.twitter.com/validator
- **Función**: Validar Twitter Cards
- **Uso**: Pegar URL y validar
- **Resultado**: Preview de cómo se verá

### 3. LinkedIn Post Inspector
- **URL**: https://www.linkedin.com/post-inspector/
- **Función**: Validar Open Graph para LinkedIn
- **Uso**: Pegar URL y inspeccionar
- **Resultado**: Preview profesional

### 4. WhatsApp Web
- **Función**: Probar compartir en WhatsApp
- **Uso**: Compartir URL en chat
- **Resultado**: Ver preview real

## 📊 Métricas de Rendimiento

### KPIs de Redes Sociales
- **CTR**: Click-through rate >2%
- **Engagement**: Likes, comentarios, compartir
- **Alcance**: Personas que ven el contenido
- **Conversiones**: Visitas que generan leads

### Herramientas de Monitoreo
- **Facebook Insights**: Métricas de Facebook
- **Twitter Analytics**: Métricas de Twitter
- **LinkedIn Analytics**: Métricas de LinkedIn
- **Google Analytics**: Tráfico desde redes sociales

## 🚀 Estrategia de Contenido Social

### Tipos de Contenido
1. **Artículos técnicos**: Sobre IA y automatización
2. **Casos de éxito**: Testimonios de clientes
3. **Tips prácticos**: Consejos de automatización
4. **Noticias del sector**: Tendencias en IA
5. **Contenido personal**: Sobre Brian Montero

### Frecuencia de Publicación
- **LinkedIn**: 3-5 posts por semana
- **Twitter**: 1-2 tweets por día
- **Facebook**: 2-3 posts por semana
- **WhatsApp**: Compartir contenido relevante

### Hashtags Recomendados
- **#IA** - Inteligencia Artificial
- **#Automatización** - Automatización empresarial
- **#EmpresasAgénticas** - Marca personal
- **#BrianMontero** - Personal branding
- **#Milytics** - Empresa
- **#Chatbots** - Chatbots empresariales
- **#Leads** - Generación de leads

## 🔄 Mantenimiento y Actualizaciones

### Checklist Semanal
- [ ] Verificar que todas las URLs funcionen
- [ ] Comprobar imágenes en todas las plataformas
- [ ] Revisar métricas de compartir
- [ ] Actualizar contenido si es necesario

### Checklist Mensual
- [ ] Analizar métricas de redes sociales
- [ ] Optimizar imágenes según rendimiento
- [ ] Actualizar handles de redes sociales
- [ ] Revisar estrategia de contenido

### Actualizaciones Pendientes
- [ ] Cambiar `@brianmontero` por handle real
- [ ] Actualizar URLs con dominio real
- [ ] Crear imagen OG personalizada
- [ ] Agregar perfiles reales en Schema

## 🧪 Testing y Optimización

### A/B Testing
- **Títulos**: Probar diferentes títulos
- **Descripciones**: Variar descripciones
- **Imágenes**: Probar diferentes imágenes
- **Horarios**: Optimizar horarios de publicación

### Métricas a Optimizar
- **CTR**: Mejorar títulos y descripciones
- **Engagement**: Crear contenido más interactivo
- **Conversiones**: Optimizar landing pages
- **Alcance**: Usar hashtags relevantes

## 📱 Configuración Móvil

### Optimización Móvil
- **Responsive**: Diseño adaptable
- **Touch-friendly**: Botones accesibles
- **Velocidad**: Carga rápida en móviles
- **UX**: Experiencia de usuario optimizada

### Redes Sociales Móviles
- **WhatsApp**: Optimizado para móviles
- **Instagram**: Stories y posts
- **TikTok**: Contenido de video (futuro)
- **YouTube**: Videos explicativos (futuro)

## 🚨 Troubleshooting

### Problemas Comunes

#### Imagen no aparece
- **Causa**: URL relativa o imagen no accesible
- **Solución**: Usar URL absoluta HTTPS

#### Metadatos no se actualizan
- **Causa**: Cache de redes sociales
- **Solución**: Usar debugger para forzar actualización

#### Preview incorrecto
- **Causa**: Metadatos malformados
- **Solución**: Validar con herramientas oficiales

#### Baja engagement
- **Causa**: Contenido no relevante
- **Solución**: Crear contenido más atractivo

---

**Última actualización**: Enero 2025  
**Responsable**: Brian Montero  
**Próxima revisión**: Febrero 2025
