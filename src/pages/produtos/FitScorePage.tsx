
import React from 'react';
import { Helmet } from 'react-helmet-async';
import FitScoreHero from '@/components/fitscore/FitScoreHero';
import FitScoreFeatures from '@/components/fitscore/FitScoreFeatures';
import FitScoreStats from '@/components/fitscore/FitScoreStats';
import FitScoreBenefits from '@/components/fitscore/FitScoreBenefits';
import FitScoreProcess from '@/components/fitscore/FitScoreProcess';
import FitScoreUseCases from '@/components/fitscore/FitScoreUseCases';
import FitScoreTestimonials from '@/components/fitscore/FitScoreTestimonials';
import FitScoreDemo from '@/components/fitscore/FitScoreDemo';
import FitScoreFAQ from '@/components/fitscore/FitScoreFAQ';
import CallToAction from '@/components/CallToAction';

const FitScorePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "FitScore - Copiloto de Contratação com IA",
    "serviceType": "HR Technology Service",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "description": "FitScore: Copiloto de contratação e People Analytics com inteligência artificial. Revolucione seus processos de RH com análise preditiva e matching inteligente de candidatos.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "category": "HR Technology"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços FitScore",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Análise Preditiva de Candidatos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sourcing Inteligente"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "People Analytics Avançado"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>FitScore - Copiloto de Contratação com IA | LEGAL</title>
        <meta name="description" content="FitScore: Copiloto de contratação e People Analytics com IA. Revolucione seus processos de RH com análise preditiva, matching inteligente e insights profundos para decisões assertivas." />
        <meta name="keywords" content="FitScore, RH, recrutamento, IA, inteligência artificial, people analytics, contratação, LEGAL, copiloto contratação, matching candidatos" />
        <link rel="canonical" href="https://operadora.legal/produtos/fitscore" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <FitScoreHero />
        <FitScoreFeatures />
        <FitScoreStats />
        <FitScoreBenefits />
        <FitScoreProcess />
        <FitScoreUseCases />
        <FitScoreTestimonials />
        <FitScoreDemo />
        <FitScoreFAQ />
        <CallToAction
          title="Transforme Seus Processos de Contratação"
          subtitle="Experimente o poder do FitScore e revolucione sua estratégia de RH com inteligência artificial de última geração para decisões mais assertivas."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=fitscore"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?tipo=consultoria&produto=fitscore"
          background="gradient"
        />
      </main>
    </>
  );
};

export default FitScorePage;
