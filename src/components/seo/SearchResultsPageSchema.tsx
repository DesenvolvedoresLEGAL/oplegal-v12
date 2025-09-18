import React from 'react';

interface SearchResult {
  name: string;
  url: string;
  description: string;
  image?: string;
}

interface SearchResultsPageSchemaProps {
  searchQuery?: string;
  numberOfResults?: number;
  results?: SearchResult[];
  url: string;
  isPartOf?: {
    name: string;
    url: string;
  };
}

const SearchResultsPageSchema: React.FC<SearchResultsPageSchemaProps> = ({
  searchQuery,
  numberOfResults,
  results,
  url,
  isPartOf = {
    name: "LEGAL TechCo",
    url: "https://operadora.legal"
  }
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": isPartOf.name,
      "url": isPartOf.url
    },
    ...(searchQuery && {
      "mainEntity": {
        "@type": "SearchAction",
        "query": searchQuery,
        "result": results ? results.map(result => ({
          "@type": "Thing",
          "name": result.name,
          "url": result.url,
          "description": result.description,
          ...(result.image && { "image": result.image })
        })) : []
      }
    }),
    ...(numberOfResults && { "numberOfItems": numberOfResults })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SearchResultsPageSchema;