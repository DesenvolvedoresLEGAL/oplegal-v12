import React from 'react';
import { Helmet } from 'react-helmet-async';
import GalaxiaHero from '@/components/galaxia/GalaxiaHero';
import GalaxiaFeatures from '@/components/galaxia/GalaxiaFeatures';
import GalaxiaStats from '@/components/galaxia/GalaxiaStats';
import GalaxiaBenefits from '@/components/galaxia/GalaxiaBenefits';
import GalaxiaProcess from '@/components/galaxia/GalaxiaProcess';
import GalaxiaUseCases from '@/components/galaxia/GalaxiaUseCases';
import GalaxiaPricing from '@/components/galaxia/GalaxiaPricing';
import GalaxiaTestimonialsEnhanced from '@/components/galaxia/GalaxiaTestimonialsEnhanced';
import GalaxiaDemo from '@/components/galaxia/GalaxiaDemo';
import GalaxiaFAQ from '@/components/galaxia/GalaxiaFAQ';
import CallToAction from '@/components/CallToAction';

const GalaxiaPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GalaxIA - Infraestrutura de IA Personalizada",
    "serviceType": "Cloud Infrastructure Service",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "description": "GalaxIA: Infraestrutura de IA personalizada com nuvens dedicadas, modelos de IA sob demanda e integração corporativa. Clusters GPU NVIDIA A100/H100 com 99.9% uptime.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "category": "Enterprise AI Infrastructure"
    },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços GalaxIA",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Infraestrutura Cloud Dedicada",
              "description": "Clusters GPU NVIDIA A100/H100 com redundância geográfica"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "BRL",
              "price": "0.50",
              "billingIncrement": "P1H"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "APIs Personalizadas",
              "description": "REST/GraphQL com conectores SAP, Salesforce, Oracle"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Modelos de IA Sob Demanda",
              "description": "LLMs, Computer Vision, Modelos Generativos com fine-tuning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Segurança Empresarial", 
              "description": "ISO 27001, SOC 2, LGPD/GDPR compliance"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5"
      },
      "serviceOutput": [
        "Redução de 50% nos custos operacionais",
        "99.9% de uptime garantido", 
        "Escalabilidade automática 10x",
        "Suporte 24/7 especializado"
      ]
  };

  return (
    <>
      <Helmet>
        <title>GalaxIA - Infraestrutura de IA Personalizada | Nuvens Dedicadas LEGAL</title>
        <meta name="description" content="GalaxIA: Infraestrutura de IA personalizada com nuvens dedicadas, modelos de IA sob demanda e integração corporativa. Clusters GPU de última geração com 99.9% uptime garantido." />
        <meta name="keywords" content="GalaxIA, infraestrutura de IA personalizada, nuvens dedicadas, modelos de IA sob demanda, integração corporativa, clusters GPU, LEGAL, inteligência artificial empresarial" />
        <link rel="canonical" href="https://operadora.legal/produtos/galaxia" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <GalaxiaHero />
        <GalaxiaFeatures />
        <GalaxiaStats />
        <GalaxiaBenefits />
        <GalaxiaProcess />
        <GalaxiaUseCases />
        <GalaxiaPricing />
        <GalaxiaTestimonialsEnhanced />
        <GalaxiaDemo />
        <GalaxiaFAQ />
          <CallToAction
            title="Transforme Sua Empresa com GalaxIA"
            subtitle="Fale com um Arquiteto de Soluções para esclarecer dúvidas técnicas complexas e descobrir como nossa infraestrutura de IA personalizada pode gerar resultados mensuráveis."
            buttonText="Falar com Arquiteto"
            buttonLink="/contato?produto=galaxia&especialista=arquiteto"
            secondaryButtonText="Agendar Demo Técnica"
            secondaryButtonLink="/contato?tipo=demo&produto=galaxia"
            background="gradient"
          />
      </main>
    </>
  );
};

export default GalaxiaPage;