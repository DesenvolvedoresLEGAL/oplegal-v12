import React from 'react';

interface ProductSchemaProps {
  productName: string;
  description: string;
  category: string;
  features?: string[];
  url: string;
  image?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  pricing?: {
    type: 'free' | 'subscription' | 'one-time';
    currency?: string;
    price?: string;
    priceRange?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
  };
  reviews?: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished?: string;
  }>;
  manufacturer?: string;
  brand?: string;
  availability?: string;
}

const ProductSchema: React.FC<ProductSchemaProps> = ({
  productName,
  description,
  category,
  features = [],
  url,
  image = "https://operadora.legal/images/product-default.jpg",
  applicationCategory,
  operatingSystem = "Web-based",
  pricing,
  aggregateRating,
  reviews = [],
  manufacturer = "LEGAL TechCo",
  brand = "LEGAL",
  availability = "https://schema.org/InStock"
}) => {
  const currentDate = new Date().toISOString();
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": applicationCategory ? "SoftwareApplication" : "Product",
    "name": productName,
    "description": description,
    "url": url,
    "image": image,
    "provider": {
      "@type": "Organization",
      "name": "LEGAL",
      "url": "https://operadora.legal"
    },
    "category": category,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "manufacturer": {
      "@type": "Organization",
      "name": manufacturer,
      "url": "https://operadora.legal"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Empresas e organizadores de eventos"
    },
    "aggregateRating": aggregateRating ? {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating || 5
    } : {
      "@type": "AggregateRating",
      "ratingValue": 4.8,
      "reviewCount": reviews.length || 15,
      "bestRating": 5
    },
    "review": reviews.length > 0 ? reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished || currentDate
    })) : [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Cliente Empresarial"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": `${productName} revolucionou nossos eventos com tecnologia avançada e resultados mensuráveis.`,
        "datePublished": currentDate
      }
    ]
  };

  // Schema específico para SoftwareApplication
  const softwareSchema = applicationCategory ? {
    ...baseSchema,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "softwareVersion": "2024",
    "featureList": features,
    "installUrl": url,
    "screenshot": image
  } : baseSchema;

  // Adicionar pricing se fornecido, senão usar fallback
  const finalSchema = {
    ...softwareSchema,
    "offers": pricing ? {
      "@type": "Offer",
      "price": pricing.price || "0",
      "priceCurrency": pricing.currency || "BRL",
      "priceRange": pricing.priceRange,
      "availability": availability,
      "validFrom": "2024-01-01",
      "priceValidUntil": "2025-12-31",
      "url": url,
      "seller": {
        "@type": "Organization",
        "name": "LEGAL",
        "url": "https://operadora.legal"
      },
      "offeredBy": {
        "@type": "Organization",
        "name": manufacturer,
        "url": "https://operadora.legal"
      }
    } : {
      "@type": "Offer",
      "availability": availability,
      "price": "0",
      "priceCurrency": "BRL",
      "url": "https://operadora.legal/contato",
      "seller": {
        "@type": "Organization",
        "name": "LEGAL",
        "url": "https://operadora.legal"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  );
};

export default ProductSchema;