
import React from 'react';
import { Helmet } from 'react-helmet-async';
import EventrixHero from '@/components/eventrix/EventrixHero';
import EventrixFeatures from '@/components/eventrix/EventrixFeatures';
import EventrixStats from '@/components/eventrix/EventrixStats';
import EventrixBenefits from '@/components/eventrix/EventrixBenefits';
import EventrixUseCases from '@/components/eventrix/EventrixUseCases';
import EventrixTestimonials from '@/components/eventrix/EventrixTestimonials';
import EventrixDemo from '@/components/eventrix/EventrixDemo';
import EventrixFAQ from '@/components/eventrix/EventrixFAQ';
import CallToAction from '@/components/CallToAction';

const EventrixPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Eventrix - Plataforma de Gestão de Eventos com IA",
    "serviceType": "Event Management Service",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "description": "Plataforma completa de gestão de eventos com inteligência artificial. Automação de processos, análise preditiva e experiência personalizada para eventos corporativos, festivais e conferências.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "category": "Event Management"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Eventrix",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gestão de Eventos Corporativos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automação de Processos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Análise Preditiva com IA"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Eventrix - Plataforma de Gestão de Eventos com IA | LEGAL</title>
        <meta name="description" content="Eventrix: Plataforma completa de gestão de eventos com inteligência artificial. Automação de processos, análise preditiva e experiência personalizada para eventos de qualquer escala." />
        <meta name="keywords" content="gestão de eventos, eventos corporativos, IA para eventos, automação eventos, plataforma eventos, análise preditiva, experiência personalizada, LEGAL Eventrix" />
        <link rel="canonical" href="https://operadora.legal/produtos/eventrix" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <EventrixHero />
        <EventrixFeatures />
        <EventrixStats />
        <EventrixBenefits />
        <EventrixUseCases />
        <EventrixTestimonials />
        <EventrixDemo />
        <EventrixFAQ />
        <CallToAction
          title="Transforme seus Eventos com IA"
          subtitle="Descubra como a inteligência artificial pode revolucionar a gestão dos seus eventos. Solicite uma demonstração personalizada."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=eventrix"
          secondaryButtonText="Ver Demo ao Vivo"
          secondaryButtonLink="#demo"
          background="gradient"
        />
      </main>
    </>
  );
};

export default EventrixPage;
