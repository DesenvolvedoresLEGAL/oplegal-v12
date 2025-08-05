import React from 'react';

const OrganizationSchema: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LEGAL",
    "legalName": "LEGAL Tecnologia Ltda",
    "alternateName": ["LEGAL TechCo", "LEGAL Tech", "Operadora LEGAL"],
    "description": "A maior TECHCO do Brasil, criadora e líder em Smart Events™ - eventos inteligentes com tecnologia de ponta. Especializados em IA, credenciamento facial, conectividade 5G e soluções para eventos corporativos.",
    "foundingDate": "2010",
    "url": "https://operadora.legal",
    "logo": {
      "@type": "ImageObject",
      "url": "https://operadora.legal/images/legal-logo.png",
      "width": 300,
      "height": 100
    },
    "image": [
      "https://operadora.legal/images/legal-smart-events-hero.jpg",
      "https://operadora.legal/images/legal-office.jpg",
      "https://operadora.legal/images/legal-team.jpg"
    ],
    
    // Certificações e credenciais
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Certificação ISO 27001",
        "recognizedBy": {
          "@type": "Organization",
          "name": "ISO - International Organization for Standardization"
        }
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "Certificação Anatel",
        "recognizedBy": {
          "@type": "Organization",
          "name": "ANATEL - Agência Nacional de Telecomunicações"
        }
      }
    ],

    // Prêmios e reconhecimentos
    "award": [
      "Melhor TechCo do Brasil 2024",
      "Inovação em Eventos Corporativos 2023",
      "Top 10 Startups de IA no Brasil 2023"
    ],

    // Informações de contato expandidas
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+55-11-3000-0000",
        "contactType": "Atendimento comercial",
        "availableLanguage": ["Portuguese", "English"],
        "areaServed": "BR",
        "hoursAvailable": [
          "Mo-Fr 08:00-18:00",
          "Sa 09:00-13:00"
        ],
        "email": "comercial@operadora.legal"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+55-11-3000-0001",
        "contactType": "Suporte técnico",
        "availableLanguage": ["Portuguese"],
        "areaServed": "BR",
        "hoursAvailable": "Mo-Su 00:00-23:59",
        "email": "suporte@operadora.legal"
      },
      {
        "@type": "ContactPoint",
        "email": "imprensa@operadora.legal",
        "contactType": "Imprensa e comunicação",
        "availableLanguage": ["Portuguese", "English"],
        "areaServed": "BR"
      }
    ],
    
    // Endereço completo
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Paulista, 1000",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01310-100",
      "addressCountry": "BR"
    },

    // Redes sociais e presença online
    "sameAs": [
      "https://linkedin.com/company/legal-techco",
      "https://instagram.com/legal_tech",
      "https://youtube.com/@legal-techco",
      "https://twitter.com/legal_tech",
      "https://facebook.com/legal.techco"
    ],

    // Informações financeiras e operacionais
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 50,
      "maxValue": 200
    },
    
    // Áreas de atuação
    "knowsAbout": [
      "Smart Events",
      "Inteligência Artificial",
      "Credenciamento Facial",
      "Conectividade 5G",
      "Drones para Eventos",
      "IoT",
      "Biometria",
      "Networking Inteligente",
      "Automação de Eventos",
      "ROI em Eventos"
    ],

    // Catálogo de ofertas expandido
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Soluções Smart Events™ e Conectividade",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Events™ - Plataforma Completa",
            "description": "Plataforma completa para eventos inteligentes com IA, credenciamento facial, conectividade 5G, drones e análises em tempo real. ROI comprovado de +40% em eficiência operacional.",
            "category": "Tecnologia para Eventos",
            "provider": {
              "@type": "Organization",
              "name": "LEGAL"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Organizadores de eventos, empresas Fortune 500, produtoras de eventos"
            },
            "areaServed": "BR"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "BRL",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "unitText": "evento"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "FacePass™ - Credenciamento Facial",
            "description": "Sistema de credenciamento com reconhecimento facial biométrico que elimina filas, reduz fraudes e melhora 300% a velocidade de entrada em eventos.",
            "category": "Biometria e Segurança",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": "Web-based, iOS, Android"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "AERO - Conectividade Premium 5G",
            "description": "Soluções de conectividade 5G FWA, WiFi de alta densidade e serviços com drones para eventos de qualquer escala.",
            "category": "Conectividade e Infraestrutura"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "LinkAI™ - Networking Inteligente",
            "description": "Matchmaking com inteligência artificial para conexões relevantes, aumentando em 250% a efetividade do networking em eventos.",
            "category": "Inteligência Artificial",
            "applicationCategory": "BusinessApplication"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Eventrix™ - Gestão Inteligente",
            "description": "Plataforma de gestão de eventos com IA para automação, análise preditiva e otimização de resultados.",
            "category": "Gestão de Eventos",
            "applicationCategory": "BusinessApplication"
          }
        }
      ]
    },
    
    // Avaliações agregadas
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    
    // Estatísticas de negócio
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Eventos realizados",
        "value": "3000+"
      },
      {
        "@type": "PropertyValue", 
        "name": "NPS Score",
        "value": "90+"
      },
      {
        "@type": "PropertyValue",
        "name": "Redução média de custos",
        "value": "40%"
      },
      {
        "@type": "PropertyValue",
        "name": "Aumento de engajamento",
        "value": "300%"
      }
    ],

    // Reviews destacadas
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "Hospital Sírio-Libanês"
        },
        "reviewBody": "A implementação do Smart Events™ transformou nosso congresso médico anual. Aumento de 40% no engajamento dos participantes e redução de 30% nos custos operacionais. O credenciamento facial FacePass™ eliminou completamente as filas de entrada.",
        "datePublished": "2024-03-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating", 
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "Banco Itaú"
        },
        "reviewBody": "O LinkAI™ revolucionou nossos eventos corporativos. O networking inteligente gerou 250% mais conexões qualificadas entre participantes. ROI excepcional.",
        "datePublished": "2024-02-20"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
};

export default OrganizationSchema;