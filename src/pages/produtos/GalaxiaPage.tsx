import React from 'react';
import { Helmet } from 'react-helmet-async';
import GalaxiaHero from '@/components/galaxia/GalaxiaHero';
import GalaxiaAbout from '@/components/galaxia/GalaxiaAbout';
import GalaxiaFeatures from '@/components/galaxia/GalaxiaFeatures';
import GalaxiaBenefits from '@/components/galaxia/GalaxiaBenefits';
import GalaxiaDifferentials from '@/components/galaxia/GalaxiaDifferentials';
import GalaxiaTestimonialsEnhanced from '@/components/galaxia/GalaxiaTestimonialsEnhanced';
import CallToAction from '@/components/CallToAction';

const GalaxiaPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GalaxIA™ - Inteligência Artificial sob medida para empresas",
    "serviceType": "AI Consulting and Development Service",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "description": "GalaxIA™: Infraestrutura artesanal de IA sob medida que cria agentes conversacionais, automações e copilotos para eliminar gargalos e reduzir custos operacionais.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "category": "Enterprise AI Solutions"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Soluções GalaxIA™",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agentes Conversacionais e Operacionais",
            "description": "Bots inteligentes que conversam e agem automaticamente"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Automações Empresariais",
            "description": "Fluxos de trabalho 100% automatizados integrados aos sistemas atuais"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Copilotos Internos",
            "description": "Assistentes de IA que aumentam produtividade das equipes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Machine Learning Personalizado", 
            "description": "Modelos preditivos e analíticos desenvolvidos para necessidades específicas"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "87",
      "bestRating": "5"
    },
    "serviceOutput": [
      "83% de redução em tarefas repetitivas",
      "Integração nativa com sistemas existentes", 
      "Setup rápido e suporte contínuo",
      "ROI comprovado em 90 dias"
    ]
  };

  return (
    <>
      <Helmet>
        <title>GalaxIA™ - Inteligência Artificial sob medida para empresas | LEGAL</title>
        <meta name="description" content="GalaxIA™: Infraestrutura artesanal de IA sob medida que cria agentes conversacionais, automações e copilotos para eliminar gargalos operacionais e reduzir custos em até 83%." />
        <meta name="keywords" content="GalaxIA, IA sob medida, agentes conversacionais, automações empresariais, copilotos IA, machine learning personalizado, LEGAL, inteligência artificial empresarial" />
        <link rel="canonical" href="https://operadora.legal/produtos/galaxia" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <GalaxiaHero />
        <GalaxiaAbout />
        <GalaxiaFeatures />
        <GalaxiaBenefits />
        <GalaxiaDifferentials />
        <GalaxiaTestimonialsEnhanced />
        <CallToAction
          title="Pronto para criar sua GalaxIA™?"
          subtitle="Vamos entender suas dores e construir juntos a IA que vai transformar o seu negócio."
          buttonText="Agendar uma conversa agora"
          buttonLink="/contato?produto=galaxia&tipo=conversa"
          background="gradient"
        />
      </main>
    </>
  );
};

export default GalaxiaPage;