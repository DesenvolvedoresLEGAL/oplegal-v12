import React from 'react';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  url?: string;
  publisher?: {
    name: string;
    logo: string;
  };
  wordCount?: number;
  keywords?: string[];
}

const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  author = "LEGAL TechCo",
  datePublished,
  dateModified,
  image,
  url,
  publisher = {
    name: "LEGAL TechCo",
    logo: "https://operadora.legal/logo.png"
  },
  wordCount,
  keywords = []
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": publisher.name,
      "logo": {
        "@type": "ImageObject",
        "url": publisher.logo
      }
    },
    ...(datePublished && { "datePublished": datePublished }),
    ...(dateModified && { "dateModified": dateModified }),
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image,
        "width": 1200,
        "height": 630
      }
    }),
    ...(url && { "url": url }),
    ...(wordCount && { "wordCount": wordCount }),
    ...(keywords.length > 0 && { "keywords": keywords.join(", ") }),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url || "https://operadora.legal"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default ArticleSchema;