import React from 'react';
import { Helmet } from 'react-helmet-async';

interface TechnicalSEOProps {
  canonical?: string;
  alternateLanguages?: Array<{
    hrefLang: string;
    href: string;
  }>;
  noIndex?: boolean;
  noFollow?: boolean;
  prefetchUrls?: string[];
  preloadResources?: Array<{
    href: string;
    as: string;
    type?: string;
  }>;
}

const TechnicalSEO: React.FC<TechnicalSEOProps> = ({
  canonical,
  alternateLanguages = [],
  noIndex = false,
  noFollow = false,
  prefetchUrls = [],
  preloadResources = []
}) => {
  return (
    <Helmet>
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots directives */}
      <meta 
        name="robots" 
        content={`${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'},max-image-preview:large,max-snippet:-1,max-video-preview:-1`} 
      />
      
      {/* AI-specific bot instructions */}
      <meta name="googlebot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="bingbot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="slurp" content="index,follow" />
      
      {/* Alternate language versions */}
      {alternateLanguages.map((alt, index) => (
        <link key={index} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
      ))}
      
      {/* Resource hints for performance */}
      {prefetchUrls.map((url, index) => (
        <link key={index} rel="prefetch" href={url} />
      ))}
      
      {preloadResources.map((resource, index) => (
        <link 
          key={index} 
          rel="preload" 
          href={resource.href} 
          as={resource.as}
          {...(resource.type && { type: resource.type })}
        />
      ))}
      
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      
      {/* AI crawl optimization */}
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Content Security Policy for AI safety */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      
      {/* Structured data for AI understanding */}
      <meta name="format-detection" content="telephone=yes,date=yes,address=yes,email=yes,url=yes" />
    </Helmet>
  );
};

export default TechnicalSEO;