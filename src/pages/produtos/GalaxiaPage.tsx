import React from 'react';
import { Helmet } from 'react-helmet-async';
import GalaxiaHero from '@/components/galaxia/GalaxiaHero';
import GalaxiaFeatures from '@/components/galaxia/GalaxiaFeatures';
import GalaxiaStats from '@/components/galaxia/GalaxiaStats';
import GalaxiaBenefits from '@/components/galaxia/GalaxiaBenefits';
import GalaxiaProcess from '@/components/galaxia/GalaxiaProcess';
import GalaxiaUseCases from '@/components/galaxia/GalaxiaUseCases';
import GalaxiaTestimonials from '@/components/galaxia/GalaxiaTestimonials';
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
    "description": "GalaxIA: Infraestrutura de IA personalizada para empresas. Cloud dedicado, APIs customizadas, modelos sob demanda e escalabilidade automática.",
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
            "name": "Infraestrutura Cloud Dedicada"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "APIs Personalizadas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Modelos de IA Sob Demanda"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>GalaxIA - Infraestrutura de IA Personalizada | LEGAL</title>
        <meta name="description" content="GalaxIA: Infraestrutura de IA personalizada para empresas. Cloud dedicado, APIs customizadas, modelos sob demanda e escalabilidade automática para maximizar resultados." />
        <meta name="keywords" content="GalaxIA, infraestrutura IA, cloud personalizado, APIs customizadas, modelos IA, LEGAL, inteligência artificial empresarial" />
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
        <GalaxiaTestimonials />
        <GalaxiaDemo />
        <GalaxiaFAQ />
        <CallToAction
          title="Transforme Sua Empresa com GalaxIA"
          subtitle="Descubra como nossa infraestrutura de IA personalizada pode revolucionar seus processos empresariais e gerar resultados mensuráveis."
          buttonText="Solicitar Consultoria"
          buttonLink="/contato?produto=galaxia"
          secondaryButtonText="Agendar Demo Técnica"
          secondaryButtonLink="/contato?tipo=demo&produto=galaxia"
          background="gradient"
        />
      </main>
    </>
  );
};

export default GalaxiaPage;