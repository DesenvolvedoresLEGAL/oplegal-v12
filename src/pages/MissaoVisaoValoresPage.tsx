
import React from 'react';
import SEOHead from '@/components/SEOHead';
import MissaoVisaoValoresHero from '@/components/missao-visao-valores/MissaoVisaoValoresHero';
import ManifestoSection from '@/components/missao-visao-valores/ManifestoSection';
import BhagSection from '@/components/missao-visao-valores/BhagSection';
import NossaMetaSection from '@/components/somos-legal/NossaMetaSection';
import MissaoSection from '@/components/missao-visao-valores/MissaoSection';
import VisaoSection from '@/components/missao-visao-valores/VisaoSection';
import ValoresFrameworkSection from '@/components/missao-visao-valores/ValoresFrameworkSection';
import PrincipiosSection from '@/components/missao-visao-valores/PrincipiosSection';
import ComoAgimosSection from '@/components/missao-visao-valores/ComoAgimosSection';
import NossaHistoriaSection from '@/components/somos-legal/NossaHistoriaSection';
import CallToAction from '@/components/CallToAction';
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

const MissaoVisaoValoresPage = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "LEGAL",
      "description": "Somos mais que uma empresa de tecnologia. Somos visionários, executores, criadores de valor e cultivadores de alma.",
      "foundingDate": "2010",
      "url": "https://operadora.legal",
      "mission": "Impulsionar e transformar eventos e negócios através da tecnologia",
      "vision": "Ser a maior e melhor TechCo do Brasil até 2034",
      "values": [
        "Visão Viva - Clareza estratégica e liderança com direção",
        "Execução Energizada - Ritmo diário e foco na entrega", 
        "Resultados com Ressonância - Impacto real e métrica viva",
        "Alinhamento com Alma - Cultura viva e conexão"
      ],
      "knowsAbout": [
        "Smart Events",
        "Inteligência Artificial",
        "Credenciamento Facial",
        "Conectividade 5G",
        "Eventos Corporativos"
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Missão, Visão e Valores | Manifesto LEGAL e Nossa História"
        description="Conheça nossa missão, visão, valores e história. Somos mais que uma empresa de tecnologia. Somos visionários, executores, criadores de valor e cultivadores de alma. Nossa meta: conectar 1 milhão até 2030."
        keywords="missão, visão, valores, LEGAL, cultura, manifesto, VERA, princípios, história LEGAL, BHAG, meta 2030"
        url="https://operadora.legal/missao-visao-valores"
        type="website"
        schemaData={pageSchema}
      />
      
      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization 
        contentDomain="business"
        entityType="organization"
        optimizationLevel="advanced"
      />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor enableReporting={true} />
      <AIFeedbackSystem enableRealTimeOptimization={true} />
      <AdvancedFeaturedSnippets 
        pageType="organization"
        focusKeyword="LEGAL missão visão valores"
      />
      <SEOCrawlerOptimization />
      
      <main className="bg-background text-foreground font-unica">
        <MissaoVisaoValoresHero />
        <ManifestoSection />
        <BhagSection />
        <NossaMetaSection />
        <MissaoSection />
        <VisaoSection />
        <ValoresFrameworkSection />
        <PrincipiosSection />
        <ComoAgimosSection />
        <NossaHistoriaSection />
        <CallToAction
          title="Venha Fazer Parte da Nossa História"
          subtitle="Junte-se a nós nessa jornada de transformação e inovação. Conecte-se com nossa missão e ajude a construir o futuro da tecnologia no Brasil."
          buttonText="Ver Vagas Abertas"
          buttonLink="/vagas"
          secondaryButtonText="Conhecer o Time"
          secondaryButtonLink="/time"
          background="gradient"
        />
      </main>
    </>
  );
};

export default MissaoVisaoValoresPage;
