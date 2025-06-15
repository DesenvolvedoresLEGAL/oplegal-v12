
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NeuraFitHero from '@/components/neurafit/NeuraFitHero';
import NeuraFitFeatures from '@/components/neurafit/NeuraFitFeatures';
import NeuraFitStats from '@/components/neurafit/NeuraFitStats';
import NeuraFitBenefits from '@/components/neurafit/NeuraFitBenefits';
import NeuraFitProcess from '@/components/neurafit/NeuraFitProcess';
import NeuraFitUseCases from '@/components/neurafit/NeuraFitUseCases';
import NeuraFitTestimonials from '@/components/neurafit/NeuraFitTestimonials';
import NeuraFitDemo from '@/components/neurafit/NeuraFitDemo';
import NeuraFitFAQ from '@/components/neurafit/NeuraFitFAQ';
import CallToAction from '@/components/CallToAction';

const NeuraFitPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "NeuraFit - Plataforma de Desenvolvimento Cognitivo e Espiritual",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web-based, iOS, Android",
    "description": "Aplicativo gamificado de desenvolvimento cognitivo, emocional e espiritual que integra neurociência, psicologia cognitiva e práticas contemplativas.",
    "offers": {
      "@type": "Offer",
      "category": "Educational Service"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "featureList": [
      "Jogos de Neurociência",
      "Exercícios de PNL",
      "Práticas Contemplativas",
      "Gamificação Avançada",
      "Mentoria com Especialistas"
    ]
  };

  return (
    <>
      <Helmet>
        <title>NeuraFit - Musculação para o Cérebro | Desenvolvimento Cognitivo e Espiritual | LEGAL</title>
        <meta name="description" content="NeuraFit: Plataforma gamificada de desenvolvimento cognitivo, emocional e espiritual. Integra neurociência, PNL e práticas contemplativas com gamificação estilo Duolingo." />
        <meta name="keywords" content="desenvolvimento cognitivo, neurociência, gamificação, PNL, espiritualidade, física quântica, musculação cerebral, LEGAL NeuraFit" />
        <link rel="canonical" href="https://operadora.legal/produtos/neurafit" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <NeuraFitHero />
        <NeuraFitFeatures />
        <NeuraFitStats />
        <NeuraFitBenefits />
        <NeuraFitProcess />
        <NeuraFitUseCases />
        <NeuraFitTestimonials />
        <NeuraFitDemo />
        <NeuraFitFAQ />
        <CallToAction
          title="Desenvolva seu Potencial Cognitivo"
          subtitle="Inicie sua jornada de desenvolvimento cerebral com NeuraFit. Transforme sua mente através da neurociência gamificada."
          buttonText="Começar Gratuitamente"
          buttonLink="/contato?produto=neurafit"
          secondaryButtonText="Ver Demonstração"
          secondaryButtonLink="#demo"
          background="gradient"
        />
      </main>
    </>
  );
};

export default NeuraFitPage;
