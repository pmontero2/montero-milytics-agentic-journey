# Configuración de Variables de Entorno para Vercel

## Variables Requeridas

### WEBHOOK
- **Nombre**: `WEBHOOK`
- **Valor**: `https://dev.milytics.io/webhook/fd96ed9d-73b8-4e68-88c5-ce1e9b264c8f`
- **Descripción**: URL del webhook para procesar formularios de contacto
- **Seguridad**: ✅ NO se expone al navegador (más seguro)

## Variables Opcionales (Seguras para el Cliente)

### VITE_GA_ID
- **Nombre**: `VITE_GA_ID`
- **Valor**: `G-17Y4S0HQ6Q`
- **Descripción**: ID de Google Analytics
- **Seguridad**: ⚠️ Se expone al navegador (pero es seguro)

### VITE_SITE_URL
- **Nombre**: `VITE_SITE_URL`
- **Valor**: `https://www.bmontero.com`
- **Descripción**: URL base del sitio web
- **Seguridad**: ⚠️ Se expone al navegador (pero es seguro)

## Cómo Configurar en Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. Navega a Settings > Environment Variables
3. Agrega cada variable con su nombre y valor correspondiente
4. Asegúrate de que estén habilitadas para Production, Preview y Development

## Notas Importantes de Seguridad

- ✅ **WEBHOOK**: NO usa prefijo `VITE_` - NO se expone al navegador
- ⚠️ **Variables con VITE_**: Se exponen al cliente, solo usar para datos públicos
- 🔒 **Variables sin VITE_**: Solo disponibles en el servidor/build time
- 🛡️ **Recomendación**: Solo usar `VITE_` para datos que es seguro que vea el público

## ¿Por qué esta configuración es más segura?

- El webhook URL no será visible en el código fuente del navegador
- Solo las variables realmente necesarias para el cliente se exponen
- Mantenemos la funcionalidad sin comprometer la seguridad
