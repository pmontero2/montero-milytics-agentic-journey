import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  noindex?: boolean;
  /** "article" para entradas de blog (mejor SEO y preview en redes) */
  type?: "website" | "article";
}

export const SEO = ({ 
  title = "Brian Montero — Especialista en IA y Automatización Empresarial",
  description = "Ingeniero especializado en IA y automatización. Transformo procesos empresariales mediante agentes de IA, automatización y soluciones inteligentes.",
  canonical,
  ogImage = "https://www.bmontero.com/assets/logo-bmontero-FltwS1tl.png",
  keywords = "IA, inteligencia artificial, agentes IA, automatización, Brian Montero, ingeniero telemático, transformación digital",
  noindex = false,
  type = "website"
}: SEOProps) => {
  const baseUrl = "https://www.bmontero.com";
  const canonicalUrl = canonical || baseUrl;
  const fullTitle = title.includes("Brian Montero") ? title : `${title} | Brian Montero`;
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow";
  const metaDescription = description.slice(0, 160);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Brian Montero" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@brianmontero" />
      <meta name="twitter:creator" content="@brianmontero" />
      
      {/* Robots */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
    </Helmet>
  );
};

