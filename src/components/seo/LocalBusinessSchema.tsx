import React from 'react';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
  url?: string;
  openingHours?: string[];
  priceRange?: string;
  areaServed?: string[];
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name = "LEGAL TechCo",
  description = "A maior TechCo do Brasil especializada em Smart Events™, IA, credenciamento facial e soluções tecnológicas para eventos corporativos.",
  address = {
    streetAddress: "Rua da Tecnologia, 1000",
    addressLocality: "São Paulo",
    addressRegion: "SP", 
    postalCode: "01000-000",
    addressCountry: "BR"
  },
  telephone = "+55-11-99999-9999",
  email = "contato@operadora.legal",
  url = "https://operadora.legal",
  openingHours = ["Mo-Fr 09:00-18:00"],
  priceRange = "$$$",
  areaServed = ["São Paulo", "Rio de Janeiro", "Brasília", "Brasil"]
}) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#organization`,
    "name": name,
    "description": description,
    "url": url,
    "telephone": telephone,
    "email": email,
    "priceRange": priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5505,
      "longitude": -46.6333
    },
    "openingHoursSpecification": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.split(' ')[0],
      "opens": hours.split(' ')[1]?.split('-')[0],
      "closes": hours.split(' ')[1]?.split('-')[1]
    })),
    "areaServed": areaServed.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "knowsAbout": [
      "Smart Events™",
      "Credenciamento Facial",
      "Inteligência Artificial",
      "Eventos Corporativos",
      "Conectividade 5G",
      "Drones para Eventos",
      "Tecnologia para Eventos"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/legal-techco",
      "https://www.instagram.com/legal.techco",
      "https://www.youtube.com/c/legaltechco"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": `${url}/images/legal-logo.png`,
      "width": 300,
      "height": 100
    },
    "image": {
      "@type": "ImageObject", 
      "url": `${url}/images/legal-office.jpg`,
      "width": 1200,
      "height": 630
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
};

export default LocalBusinessSchema;