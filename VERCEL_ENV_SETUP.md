# Configuración de Variables de Entorno para Vercel

## Variables Requeridas

### RESEND_API_KEY
- **Nombre**: `RESEND_API_KEY`
- **Valor**: `re_xxxxxxxxxxxxxxxxx`
- **Descripción**: API key de Resend para envío de correos.
- **Seguridad**: ✅ Solo servidor (NO `VITE_`).

### CONTACT_TO_EMAIL
- **Nombre**: `CONTACT_TO_EMAIL`
- **Valor**: `info@tudominio.com`
- **Descripción**: Correo donde llegarán los formularios.
- **Seguridad**: ✅ Solo servidor (NO `VITE_`).

### CONTACT_FROM_EMAIL
- **Nombre**: `CONTACT_FROM_EMAIL`
- **Valor**: `contacto@tudominio.com`
- **Descripción**: Remitente verificado en Resend.
- **Seguridad**: ✅ Solo servidor (NO `VITE_`).

### HCAPTCHA_SECRET_KEY
- **Nombre**: `HCAPTCHA_SECRET_KEY`
- **Valor**: `tu-secret-de-hcaptcha`
- **Descripción**: Secret de hCaptcha para verificar tokens en `/api/contact`.
- **Seguridad**: ✅ Solo servidor (NO `VITE_`).

### BLOG_API_URL
- **Nombre**: `BLOG_API_URL`
- **Valor**: `https://radar.bmontero.com/api`
- **Descripción**: URL base del API de radar para el proxy del blog (listado y detalle de posts). Usado por las rutas serverless `/api/blog-posts` y `/api/blog-posts/[id]`.
- **Seguridad**: ✅ NO se expone al navegador (solo se usa en el servidor)

## Variables Opcionales (Seguras para el Cliente)

### VITE_HCAPTCHA_SITE_KEY
- **Nombre**: `VITE_HCAPTCHA_SITE_KEY`
- **Valor**: `tu-site-key-de-hcaptcha`
- **Descripción**: Site key pública de hCaptcha para validar captcha en formularios.
- **Seguridad**: ⚠️ Se expone al navegador (es normal en captchas).

### VITE_CONTACT_API_URL
- **Nombre**: `VITE_CONTACT_API_URL`
- **Valor**: `https://tu-dominio.com/api/contact` (opcional)
- **Descripción**: Endpoint explícito para desarrollo/local. Si no está, usa `/api/contact`.
- **Seguridad**: ⚠️ Se expone al navegador.

### VITE_GA_ID
- **Nombre**: `VITE_GA_ID`
- **Valor**: `tu-ga-id-aqui` (ejemplo: `G-XXXXXXXXXX`)
- **Descripción**: ID de Google Analytics
- **Seguridad**: ⚠️ Se expone al navegador (pero es seguro)

### VITE_SITE_URL
- **Nombre**: `VITE_SITE_URL`
- **Valor**: `https://www.bmontero.com` (o tu dominio)
- **Descripción**: URL base del sitio web
- **Seguridad**: ⚠️ Se expone al navegador (pero es seguro)

## Cómo Configurar en Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. Navega a Settings > Environment Variables
3. Agrega cada variable con su nombre y valor correspondiente
4. Asegúrate de que estén habilitadas para Production, Preview y Development

## Notas Importantes de Seguridad

- ⚠️ **Variables con VITE_**: Se exponen al cliente, solo usar para datos públicos
- 🔒 **Variables sin VITE_**: Solo disponibles en el servidor/build time
- 🛡️ **Recomendación**: Solo usar `VITE_` para datos que es seguro que vea el público

## ¿Por qué esta configuración es más segura?

- Solo las variables realmente necesarias para el cliente se exponen
- Mantenemos la funcionalidad sin comprometer la seguridad
