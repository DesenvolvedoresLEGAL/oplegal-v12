
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SonixHero from '@/components/sonix/SonixHero';
import SonixFeatures from '@/components/sonix/SonixFeatures';
import SonixStats from '@/components/sonix/SonixStats';
import SonixBenefits from '@/components/sonix/SonixBenefits';
import SonixProcess from '@/components/sonix/SonixProcess';
import SonixUseCases from '@/components/sonix/SonixUseCases';
import SonixTestimonials from '@/components/sonix/SonixTestimonials';
import SonixDemo from '@/components/sonix/SonixDemo';
import SonixFAQ from '@/components/sonix/SonixFAQ';
import CallToAction from '@/components/CallToAction';

const SonixPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sonix - Delivery Premium com Drones",
    "description": "Sonix: Serviço premium de delivery com drones inteligentes para entregas ultra-rápidas, monitoramento em tempo real e experiência personalizada.",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL",
      "url": "https://legal.com.br",
      "logo": "https://legal.com.br/logo.png"
    },
    "serviceType": ["Delivery Premium", "Entregas com Drone", "Logística Inteligente"],
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "offers": {
      "@type": "Offer",
      "name": "Delivery Premium com Drones",
      "price": "35",
      "priceCurrency": "BRL",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "35",
        "priceCurrency": "BRL",
        "unitText": "por quilômetro"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Sonix - Delivery Premium com Drones | LEGAL</title>
        <meta name="description" content="Sonix: Serviço premium de delivery com drones inteligentes. Entregas ultra-rápidas em até 15 minutos, monitoramento em tempo real e experiência personalizada para clientes VIP." />
        <meta name="keywords" content="delivery premium drone, entrega rápida drone, drone delivery VIP, logística premium, Sonix LEGAL, delivery inteligente" />
        <link rel="canonical" href="https://operadora.legal/produtos/sonix" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <SonixHero />
        <SonixFeatures />
        <SonixStats />
        <SonixBenefits />
        <SonixProcess />
        <SonixUseCases />
        <SonixTestimonials />
        <SonixDemo />
        <SonixFAQ />
        <CallToAction
          title="Experimente o Futuro do Delivery"
          subtitle="Descubra a experiência premium do Sonix. Entregas em até 15 minutos com drones inteligentes e monitoramento em tempo real."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=sonix"
          secondaryButtonText="Ver Preços"
          secondaryButtonLink="#precos"
          background="gradient"
        />
      </main>
    </>
  );
};

export default SonixPage;
