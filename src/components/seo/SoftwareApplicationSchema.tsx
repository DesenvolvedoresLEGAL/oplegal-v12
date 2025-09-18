import React from 'react';

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem?: string;
  author?: {
    name: string;
    url: string;
  };
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
    bestRating: string;
    worstRating: string;
  };
  features?: string[];
}

const SoftwareApplicationSchema: React.FC<SoftwareApplicationSchemaProps> = ({
  name,
  description,
  url,
  applicationCategory,
  operatingSystem = "Web",
  author = {
    name: "LEGAL",
    url: "https://operadora.legal"
  },
  offers,
  aggregateRating,
  features
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "author": {
      "@type": "Organization",
      "name": author.name,
      "url": author.url
    },
    ...(offers && {
      "offers": {
        "@type": "Offer",
        "price": offers.price,
        "priceCurrency": offers.priceCurrency,
        "availability": offers.availability
      }
    }),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount,
        "bestRating": aggregateRating.bestRating,
        "worstRating": aggregateRating.worstRating
      }
    }),
    ...(features && {
      "featureList": features
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SoftwareApplicationSchema;