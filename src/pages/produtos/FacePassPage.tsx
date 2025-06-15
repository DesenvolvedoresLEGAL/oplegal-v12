
import React from 'react';
import { Helmet } from 'react-helmet-async';
import FacePassHero from '@/components/facepass/FacePassHero';
import FacePassFeatures from '@/components/facepass/FacePassFeatures';
import FacePassStats from '@/components/facepass/FacePassStats';
import FacePassBenefits from '@/components/facepass/FacePassBenefits';
import FacePassUseCases from '@/components/facepass/FacePassUseCases';
import FacePassTestimonials from '@/components/facepass/FacePassTestimonials';
import FacePassDemo from '@/components/facepass/FacePassDemo';
import FacePassFAQ from '@/components/facepass/FacePassFAQ';
import CallToAction from '@/components/CallToAction';

const FacePassPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "FacePass - Credenciamento Facial com IA",
    "serviceType": "Event Management Service",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "description": "FacePass: Sistema de credenciamento facial com inteligência artificial. 99.9% de precisão, acesso em 2 segundos e segurança máxima para eventos de qualquer escala.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "category": "Event Technology"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços FacePass",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reconhecimento Facial para Eventos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Credenciamento Automático"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Analytics de Acesso"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>FacePass - Credenciamento Facial com IA | LEGAL</title>
        <meta name="description" content="FacePass: Sistema avançado de credenciamento facial com inteligência artificial. 99.9% de precisão, acesso instantâneo e segurança máxima para eventos de qualquer escala." />
        <meta name="keywords" content="FacePass, credenciamento facial, IA eventos, reconhecimento facial, acesso automático, LEGAL, biometria eventos, tecnologia eventos" />
        <link rel="canonical" href="https://operadora.legal/produtos/facepass" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <FacePassHero />
        <FacePassFeatures />
        <FacePassStats />
        <FacePassBenefits />
        <FacePassUseCases />
        <FacePassTestimonials />
        <FacePassDemo />
        <FacePassFAQ />
        <CallToAction
          title="Revolucione o Credenciamento dos Seus Eventos"
          subtitle="Experimente o poder do FacePass e transforme a experiência de acesso dos seus participantes com inteligência artificial de última geração."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=facepass"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?tipo=consultoria&produto=facepass"
          background="gradient"
        />
      </main>
    </>
  );
};

export default FacePassPage;
