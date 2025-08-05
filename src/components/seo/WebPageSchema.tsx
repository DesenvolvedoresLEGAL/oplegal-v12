import React from 'react';

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  breadcrumb?: Array<{
    name: string;
    url: string;
  }>;
  mainEntity?: {
    type: string;
    name: string;
    description: string;
  };
  potentialAction?: {
    type: string;
    target: string;
    name: string;
  };
  isPartOf?: {
    name: string;
    url: string;
  };
  datePublished?: string;
  dateModified?: string;
}

const WebPageSchema: React.FC<WebPageSchemaProps> = ({
  name,
  description,
  url,
  breadcrumb,
  mainEntity,
  potentialAction,
  isPartOf = {
    name: "LEGAL TechCo",
    url: "https://operadora.legal"
  },
  datePublished,
  dateModified
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": isPartOf.name,
      "url": isPartOf.url
    },
    ...(breadcrumb && {
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      }
    }),
    ...(mainEntity && {
      "mainEntity": {
        "@type": mainEntity.type,
        "name": mainEntity.name,
        "description": mainEntity.description
      }
    }),
    ...(potentialAction && {
      "potentialAction": {
        "@type": potentialAction.type,
        "target": potentialAction.target,
        "name": potentialAction.name
      }
    }),
    ...(datePublished && { "datePublished": datePublished }),
    ...(dateModified && { "dateModified": dateModified })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default WebPageSchema;