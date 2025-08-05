
const createHomePageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "LEGAL - Smart Events™",
  "url": "https://operadora.legal",
  "description": "A maior TECHCO do Brasil criadora do Smart Events™. Transforme eventos com IA, credenciamento facial, conectividade 5G e ROI comprovado.",
  "keywords": "Smart Events, eventos inteligentes, credenciamento facial, FacePass, conectividade 5G, IA eventos, ROI eventos, AERO drones, networking inteligente",
  
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://operadora.legal/busca?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  
  "mainEntity": {
    "@type": "Organization",
    "name": "LEGAL",
    "alternateName": "LEGAL TechCo",
    "description": "A maior TECHCO do Brasil, criadora e líder em Smart Events™ - eventos inteligentes com tecnologia de ponta",
    "foundingDate": "2010",
    "url": "https://operadora.legal",
    "logo": "https://operadora.legal/images/legal-logo.png",
    "image": "https://operadora.legal/images/legal-smart-events-hero.jpg",
    
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+55-11-99999-9999",
        "contactType": "Atendimento comercial",
        "availableLanguage": ["Portuguese", "pt-BR"],
        "areaServed": "BR",
        "hoursAvailable": "Mo-Fr 08:00-18:00"
      },
      {
        "@type": "ContactPoint",
        "email": "contato@operadora.legal",
        "contactType": "Suporte técnico",
        "availableLanguage": ["Portuguese", "pt-BR"],
        "areaServed": "BR"
      }
    ],
    
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "SP",
      "addressLocality": "São Paulo"
    },
    
    "sameAs": [
      "https://linkedin.com/company/legal-techco",
      "https://instagram.com/legal_tech",
      "https://youtube.com/@legal-techco"
    ],
    
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Soluções Smart Events™ e Conectividade",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Events™",
            "description": "Plataforma completa para eventos inteligentes com IA, credenciamento facial, conectividade 5G e análises em tempo real",
            "category": "Tecnologia para Eventos",
            "audience": {
              "@type": "Audience",
              "audienceType": "Organizadores de eventos, empresas, produtoras"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "FacePass™ - Credenciamento Facial",
            "description": "Sistema de credenciamento com reconhecimento facial que elimina filas e melhora a experiência do participante",
            "category": "Biometria e Segurança"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AERO - Conectividade Premium",
            "description": "Soluções de conectividade 5G, WiFi de alta densidade e serviços com drones para eventos",
            "category": "Conectividade e Infraestrutura"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LinkAI™ - Networking Inteligente", 
            "description": "Matchmaking com inteligência artificial para conexões relevantes e networking eficiente",
            "category": "Inteligência Artificial"
          }
        }
      ]
    },
    
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "850",
      "bestRating": "5"
    },
    
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "Hospital Sírio-Libanês"
        },
        "reviewBody": "A implementação do Smart Events™ transformou nosso congresso médico anual, aumentando o engajamento em 40% e reduzindo custos operacionais em 30%."
      }
    ]
  }
});

export default createHomePageSchema;
