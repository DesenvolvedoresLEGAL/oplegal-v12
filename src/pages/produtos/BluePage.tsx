
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlueHero from '@/components/blue/BlueHero';
import BlueFeatures from '@/components/blue/BlueFeatures';
import BlueStats from '@/components/blue/BlueStats';
import BlueBenefits from '@/components/blue/BlueBenefits';
import BlueUseCases from '@/components/blue/BlueUseCases';
import BlueTestimonials from '@/components/blue/BlueTestimonials';
import BlueDemo from '@/components/blue/BlueDemo';
import BlueFAQ from '@/components/blue/BlueFAQ';
import CallToAction from '@/components/CallToAction';

const BluePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Blue - Plataforma de BI com AI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "description": "Plataforma de Business Intelligence com Inteligência Artificial que transforma dados complexos em insights acionáveis para tomada de decisões estratégicas.",
    "offers": {
      "@type": "Offer",
      "category": "SaaS"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "featureList": [
      "Dashboards Interativos",
      "Análise Preditiva com IA",
      "Relatórios Automatizados",
      "Integração Multi-plataforma",
      "Visualização de Dados Avançada"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Blue - Plataforma de BI com Inteligência Artificial | LEGAL</title>
        <meta name="description" content="Blue: Plataforma de Business Intelligence com IA que transforma dados em insights acionáveis. Dashboards interativos, análise preditiva e relatórios automatizados para decisões estratégicas." />
        <meta name="keywords" content="business intelligence, BI, inteligência artificial, análise de dados, dashboards, relatórios automatizados, insights estratégicos, data analytics, LEGAL Blue" />
        <link rel="canonical" href="https://operadora.legal/produtos/blue" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <BlueHero />
        <BlueFeatures />
        <BlueStats />
        <BlueBenefits />
        <BlueUseCases />
        <BlueTestimonials />
        <BlueDemo />
        <BlueFAQ />
        <CallToAction
          title="Revolucione sua Análise de Dados"
          subtitle="Comece a transformar dados em decisões estratégicas com a plataforma Blue. Solicite uma demonstração personalizada."
          buttonText="Demonstração Gratuita"
          buttonLink="/contato?produto=blue"
          secondaryButtonText="Acesso Blue™"
          secondaryButtonLink="https://blue.operadora.legal"
          background="gradient"
        />
      </main>
    </>
  );
};

export default BluePage;
