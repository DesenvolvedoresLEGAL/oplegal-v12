
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BrilixHero from '@/components/brilix/BrilixHero';
import BrilixFeatures from '@/components/brilix/BrilixFeatures';
import BrilixStats from '@/components/brilix/BrilixStats';
import BrilixBenefits from '@/components/brilix/BrilixBenefits';
import BrilixUseCases from '@/components/brilix/BrilixUseCases';
import BrilixTestimonials from '@/components/brilix/BrilixTestimonials';
import BrilixDemo from '@/components/brilix/BrilixDemo';
import BrilixFAQ from '@/components/brilix/BrilixFAQ';
import CallToAction from '@/components/CallToAction';

const BrilixPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Brilix - Limpeza em Altura com Drone",
    "serviceType": "Cleaning Service",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "description": "Serviço de limpeza em altura com drones autônomos. Solução segura, eficiente e econômica para fachadas, painéis solares, estruturas industriais e edifícios comerciais.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "category": "Drone Services"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Brilix",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza de Fachadas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza de Painéis Solares"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Inspeção e Limpeza Industrial"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Brilix - Limpeza em Altura com Drone Autônomo | LEGAL</title>
        <meta name="description" content="Brilix: Revolução na limpeza em altura com drones autônomos. Serviço seguro, eficiente e sustentável para fachadas, painéis solares e estruturas industriais. Redução de custos e riscos." />
        <meta name="keywords" content="limpeza com drone, limpeza em altura, drone limpeza, fachada prédio, painéis solares, limpeza industrial, segurança trabalho altura, drone autônomo, LEGAL Brilix" />
        <link rel="canonical" href="https://operadora.legal/produtos/brilix" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <BrilixHero />
        <BrilixFeatures />
        <BrilixStats />
        <BrilixBenefits />
        <BrilixUseCases />
        <BrilixTestimonials />
        <BrilixDemo />
        <BrilixFAQ />
        <CallToAction
          title="Revolucione sua Limpeza em Altura"
          subtitle="Elimine riscos, reduza custos e aumente a eficiência com nossa solução de limpeza com drones. Solicite um orçamento personalizado."
          buttonText="Solicitar Orçamento"
          buttonLink="/contato?produto=brilix"
          secondaryButtonText="Ver Demonstração"
          secondaryButtonLink="#demo"
          background="gradient"
        />
      </main>
    </>
  );
};

export default BrilixPage;
