import React from 'react';

interface CollectionItem {
  name: string;
  description: string;
  url: string;
  image?: string;
}

interface CollectionPageSchemaProps {
  name: string;
  description: string;
  url: string;
  mainEntity?: CollectionItem[];
  numberOfItems?: number;
  about?: {
    name: string;
    description: string;
  };
  isPartOf?: {
    name: string;
    url: string;
  };
}

const CollectionPageSchema: React.FC<CollectionPageSchemaProps> = ({
  name,
  description,
  url,
  mainEntity,
  numberOfItems,
  about,
  isPartOf = {
    name: "LEGAL TechCo",
    url: "https://operadora.legal"
  }
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": name,
    "description": description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": isPartOf.name,
      "url": isPartOf.url
    },
    ...(numberOfItems && { "numberOfItems": numberOfItems }),
    ...(about && {
      "about": {
        "@type": "Thing",
        "name": about.name,
        "description": about.description
      }
    }),
    ...(mainEntity && {
      "mainEntity": mainEntity.map(item => ({
        "@type": "Thing",
        "name": item.name,
        "description": item.description,
        "url": item.url,
        ...(item.image && { "image": item.image })
      }))
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default CollectionPageSchema;