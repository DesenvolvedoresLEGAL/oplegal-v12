import React from 'react';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType?: string;
  provider?: {
    name: string;
    url: string;
  };
  areaServed?: string[];
  hasOfferCatalog?: {
    name: string;
    itemListElement: Array<{
      name: string;
      description: string;
      url?: string;
    }>;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  priceRange?: string;
  url?: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  description,
  serviceType = "TechnologyService",
  provider = {
    name: "LEGAL TechCo",
    url: "https://operadora.legal"
  },
  areaServed = ["Brasil", "São Paulo", "Rio de Janeiro"],
  hasOfferCatalog,
  aggregateRating,
  priceRange,
  url
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@type": "Organization",
      "name": provider.name,
      "url": provider.url
    },
    "areaServed": areaServed.map(area => ({
      "@type": "Place",
      "name": area
    })),
    ...(hasOfferCatalog && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": hasOfferCatalog.name,
        "itemListElement": hasOfferCatalog.itemListElement.map(item => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": item.name,
            "description": item.description,
            ...(item.url && { "url": item.url })
          }
        }))
      }
    }),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount
      }
    }),
    ...(priceRange && { "priceRange": priceRange }),
    ...(url && { "url": url })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default ServiceSchema;