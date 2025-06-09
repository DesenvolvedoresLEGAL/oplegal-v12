
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schemaData?: object;
  noIndex?: boolean;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = "LEGAL - A maior TECHCO do Brasil e inventora do conceito Smart Events™. Entregamos o novo padrão para eventos inteligentes, conectados e lucrativos.",
  keywords = "LEGAL, Smart Events, eventos inteligentes, credenciamento facial, FacePass, IA eventos, conectividade 5G, AERO drones, TechCo Brasil",
  image = "https://operadora.legal/images/legal-og-default.jpg",
  url,
  type = 'website',
  author = "LEGAL",
  publishedTime,
  modifiedTime,
  schemaData,
  noIndex = false,
  canonical
}) => {
  const siteTitle = "LEGAL - Criadora do Smart Events™";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://operadora.legal');
  const canonicalUrl = canonical || currentUrl;

  // Schema.org base para organização
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LEGAL",
    "url": "https://operadora.legal",
    "logo": "https://operadora.legal/images/legal-logo.png",
    "description": "A maior TECHCO do Brasil e inventora do conceito Smart Events™",
    "foundingDate": "2010",
    "founder": {
      "@type": "Person",
      "name": "Fundadores LEGAL"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://linkedin.com/company/legal",
      "https://instagram.com/legal_tech",
      "https://twitter.com/legal_tech"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-0000-0000",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />
      <meta name="googlebot" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="pt-BR" />
      <meta name="language" content="Portuguese" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="LEGAL" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@legal_tech" />
      <meta name="twitter:creator" content="@legal_tech" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || organizationSchema)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#020cbc" />
      <meta name="msapplication-TileColor" content="#020cbc" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
};

export default SEOHead;
