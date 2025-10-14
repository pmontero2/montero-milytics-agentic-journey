# Brian Montero Landing Page

## Información del Proyecto

Landing page profesional para Brian Montero - Especialista en IA y Automatización Empresarial.

## Tecnologías Utilizadas

Este proyecto está construido con:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Cómo ejecutar el proyecto

### Requisitos
- Node.js & npm instalados - [instalar con nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Pasos para ejecutar

```sh
# Paso 1: Clonar el repositorio
git clone <YOUR_GIT_URL>

# Paso 2: Navegar al directorio del proyecto
cd bzy-landing

# Paso 3: Instalar las dependencias necesarias
npm i

# Paso 4: Iniciar el servidor de desarrollo con recarga automática
npm run dev
```

## Scripts Disponibles

```json
{
  "dev": "vite",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "lint": "eslint .",
  "preview": "vite preview",
  "sitemap": "node scripts/generate-sitemap.js",
  "build:sitemap": "npm run sitemap && npm run build"
}
```

## Cómo desplegar el proyecto

Para desplegar el proyecto, ejecuta:

```sh
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

## Estructura del Proyecto

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

## Contacto

Para más información sobre este proyecto, contacta a Brian Montero.