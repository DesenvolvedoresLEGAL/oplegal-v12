
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
    "@type": "SoftwareApplication",
    "name": "Sonix - Plataforma de Áudio IA Inteligente",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web-based",
    "description": "Sonix: Plataforma de processamento de áudio com inteligência artificial para transcrição, análise de sentimentos, tradução automática e insights de áudio avançados.",
    "offers": {
      "@type": "Offer",
      "category": "SaaS"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "featureList": [
      "Transcrição de Áudio com IA",
      "Análise de Sentimentos",
      "Tradução Automática",
      "Insights de Áudio Avançados",
      "Processamento em Tempo Real"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Sonix - Plataforma de Áudio IA Inteligente | LEGAL</title>
        <meta name="description" content="Sonix: Plataforma de processamento de áudio com IA para transcrição automática, análise de sentimentos, tradução e insights avançados. Transforme áudio em conhecimento estratégico." />
        <meta name="keywords" content="transcrição áudio, análise sentimentos, tradução automática, processamento áudio IA, insights áudio, speech to text, LEGAL Sonix" />
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
          title="Transforme Áudio em Insights Estratégicos"
          subtitle="Descubra o poder do processamento de áudio com IA. Solicite uma demonstração personalizada do Sonix e veja como transformar conversas em conhecimento."
          buttonText="Demonstração Gratuita"
          buttonLink="/contato?produto=sonix"
          secondaryButtonText="Acesso Sonix™"
          secondaryButtonLink="https://sonix.operadora.legal"
          background="gradient"
        />
      </main>
    </>
  );
};

export default SonixPage;
