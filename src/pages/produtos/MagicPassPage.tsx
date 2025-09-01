
import React from 'react';
import { Helmet } from 'react-helmet-async';
import MagicPassHero from '@/components/facepass/MagicPassHero';
import MagicPassFeatures from '@/components/facepass/MagicPassFeatures';
import MagicPassStats from '@/components/facepass/MagicPassStats';
import MagicPassBenefits from '@/components/facepass/MagicPassBenefits';
import MagicPassUseCases from '@/components/facepass/MagicPassUseCases';
import MagicPassTestimonials from '@/components/facepass/MagicPassTestimonials';
import MagicPassDemo from '@/components/facepass/MagicPassDemo';
import MagicPassFAQ from '@/components/facepass/MagicPassFAQ';
import CallToAction from '@/components/CallToAction';

const MagicPassPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "MagicPass - Credenciamento Facial com IA",
    "serviceType": "Event Management Service",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "description": "MagicPass: Sistema de credenciamento facial com inteligência artificial. 99.9% de precisão, acesso em 2 segundos e segurança máxima para eventos de qualquer escala.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "category": "Event Technology"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços MagicPass",
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
        <title>MagicPass - Credenciamento Facial com IA | LEGAL</title>
        <meta name="description" content="MagicPass: Sistema avançado de credenciamento facial com inteligência artificial. 99.9% de precisão, acesso instantâneo e segurança máxima para eventos de qualquer escala." />
        <meta name="keywords" content="MagicPass, credenciamento facial, IA eventos, reconhecimento facial, acesso automático, LEGAL, biometria eventos, tecnologia eventos" />
        <link rel="canonical" href="https://operadora.legal/produtos/magicpass" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <MagicPassHero />
        <MagicPassFeatures />
        <MagicPassStats />
        <MagicPassBenefits />
        <MagicPassUseCases />
        <MagicPassTestimonials />
        <MagicPassDemo />
        <MagicPassFAQ />
        <CallToAction
          title="Revolucione o Credenciamento dos Seus Eventos"
          subtitle="Experimente o poder do MagicPass e transforme a experiência de acesso dos seus participantes com inteligência artificial de última geração."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=magicpass"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?tipo=consultoria&produto=magicpass"
          background="gradient"
        />
      </main>
    </>
  );
};

export default MagicPassPage;
