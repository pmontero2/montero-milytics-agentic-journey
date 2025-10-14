#!/usr/bin/env node

/**
 * Generador automático de sitemap.xml
 * Ejecutar con: node scripts/generate-sitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración del sitio
const SITE_CONFIG = {
  baseUrl: 'https://www.bmontero.com',
  lastmod: new Date().toISOString().split('T')[0], // YYYY-MM-DD
};

// Páginas del sitio con sus configuraciones
const PAGES = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: '1.0',
    description: 'Página Principal'
  },
  {
    url: '/empresas',
    changefreq: 'weekly',
    priority: '0.9',
    description: 'Empresas Agénticas'
  },
  {
    url: '/sobre-mi',
    changefreq: 'monthly',
    priority: '0.8',
    description: 'Sobre Mí'
  },
  {
    url: '/privacy',
    changefreq: 'yearly',
    priority: '0.3',
    description: 'Política de Privacidad'
  },
  {
    url: '/terms',
    changefreq: 'yearly',
    priority: '0.3',
    description: 'Términos de Servicio'
  }
];

// Generar XML del sitemap
function generateSitemapXML() {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  const xmlFooter = `</urlset>`;

  const urlEntries = PAGES.map(page => {
    return `  <!-- ${page.description} -->
  <url>
    <loc>${SITE_CONFIG.baseUrl}${page.url}</loc>
    <lastmod>${SITE_CONFIG.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n\n');

  return `${xmlHeader}\n\n${urlEntries}\n\n${xmlFooter}`;
}

// Escribir sitemap.xml
function writeSitemap() {
  const sitemapXML = generateSitemapXML();
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  try {
    fs.writeFileSync(sitemapPath, sitemapXML, 'utf8');
    console.log('✅ Sitemap.xml generado exitosamente');
    console.log(`📁 Ubicación: ${sitemapPath}`);
    console.log(`📊 Páginas incluidas: ${PAGES.length}`);
    console.log(`🌐 URL base: ${SITE_CONFIG.baseUrl}`);
  } catch (error) {
    console.error('❌ Error al generar sitemap:', error.message);
    process.exit(1);
  }
}

// Validar configuración
function validateConfig() {
  if (!SITE_CONFIG.baseUrl) {
    console.error('❌ Error: baseUrl no configurado');
    process.exit(1);
  }
  
  if (PAGES.length === 0) {
    console.error('❌ Error: No hay páginas configuradas');
    process.exit(1);
  }
  
  console.log('✅ Configuración validada');
}

// Función principal
function main() {
  console.log('🚀 Generando sitemap.xml...');
  validateConfig();
  writeSitemap();
  console.log('✨ Proceso completado');
}

// Ejecutar función principal
main();

export {
  generateSitemapXML,
  writeSitemap,
  SITE_CONFIG,
  PAGES
};
