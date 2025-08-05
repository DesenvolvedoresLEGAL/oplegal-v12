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
  };
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
  pricing
}) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": applicationCategory ? "SoftwareApplication" : "Service",
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
      "name": "LEGAL"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Empresas e organizadores de eventos"
    }
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

  // Adicionar pricing se fornecido
  const finalSchema = pricing ? {
    ...softwareSchema,
    "offers": {
      "@type": "Offer",
      "price": pricing.price || "0",
      "priceCurrency": pricing.currency || "BRL",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2025-12-31",
      "seller": {
        "@type": "Organization",
        "name": "LEGAL"
      }
    }
  } : softwareSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  );
};

export default ProductSchema;