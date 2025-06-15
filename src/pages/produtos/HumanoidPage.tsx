
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HumanoidHero from '@/components/humanoid/HumanoidHero';
import HumanoidFeatures from '@/components/humanoid/HumanoidFeatures';
import HumanoidStats from '@/components/humanoid/HumanoidStats';
import HumanoidBenefits from '@/components/humanoid/HumanoidBenefits';
import HumanoidProcess from '@/components/humanoid/HumanoidProcess';
import HumanoidUseCases from '@/components/humanoid/HumanoidUseCases';
import HumanoidTestimonials from '@/components/humanoid/HumanoidTestimonials';
import HumanoidDemo from '@/components/humanoid/HumanoidDemo';
import HumanoidFAQ from '@/components/humanoid/HumanoidFAQ';
import CallToAction from '@/components/CallToAction';

const HumanoidPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Humanoid - Agente de IA para Captação de Leads",
    "serviceType": "AI Lead Generation Service",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "description": "Humanoid: Agente de IA que capta leads e oportunidades na internet, integra com CRM e automatiza processo de SDR com inteligência artificial conversacional.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "category": "AI Lead Generation"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Humanoid",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Captação Inteligente de Leads"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Integração Automática com CRM"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SDR com IA Conversacional"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Humanoid - Agente de IA para Captação de Leads e SDR | LEGAL</title>
        <meta name="description" content="Humanoid: Agente de IA que capta leads na internet, integra com CRM e automatiza SDR com inteligência artificial conversacional. Transforme prospects em oportunidades reais." />
        <meta name="keywords" content="Humanoid, captação de leads, IA, inteligência artificial, CRM, SDR, lead generation, automação de vendas, LEGAL, IA conversacional" />
        <link rel="canonical" href="https://operadora.legal/produtos/humanoid" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <HumanoidHero />
        <HumanoidFeatures />
        <HumanoidStats />
        <HumanoidBenefits />
        <HumanoidProcess />
        <HumanoidUseCases />
        <HumanoidTestimonials />
        <HumanoidDemo />
        <HumanoidFAQ />
        <CallToAction
          title="Transforme Leads em Oportunidades Reais"
          subtitle="Experimente o poder do Humanoid e automatize sua captação de leads com inteligência artificial que converte prospects em vendas reais."
          buttonText="Começar Teste Gratuito"
          buttonLink="/contato?produto=humanoid"
          secondaryButtonText="Agendar Demonstração"
          secondaryButtonLink="/contato?tipo=demo&produto=humanoid"
          background="gradient"
        />
      </main>
    </>
  );
};

export default HumanoidPage;
