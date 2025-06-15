
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
    "name": "Humanoid - Robótica Inteligente com IA",
    "serviceType": "Robotics Technology Service",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "description": "Humanoid: Robótica inteligente com IA para eventos e negócios. Interação natural, automação avançada e experiências memoráveis com tecnologia humanóide de última geração.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "category": "Robotics Technology"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Humanoid",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interação Humanóide Inteligente"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automação Robótica para Eventos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Assistência Robótica Personalizada"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Humanoid - Robótica Inteligente com IA | LEGAL</title>
        <meta name="description" content="Humanoid: Robótica inteligente com IA para eventos e negócios. Interação natural, automação avançada e experiências memoráveis com tecnologia humanóide revolucionária." />
        <meta name="keywords" content="Humanoid, robótica, IA, inteligência artificial, eventos, automação, robô humanóide, LEGAL, interação natural, assistência robótica" />
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
          title="Revolucione Seus Eventos com Robótica Inteligente"
          subtitle="Experimente o poder do Humanoid e transforme a experiência dos seus participantes com tecnologia robótica de última geração e interação humanóide natural."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=humanoid"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?tipo=consultoria&produto=humanoid"
          background="gradient"
        />
      </main>
    </>
  );
};

export default HumanoidPage;
