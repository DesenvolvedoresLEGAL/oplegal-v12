
// SEO Phase 2 - Universal Implementation Complete
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductSchema from '@/components/seo/ProductSchema';
import CallToAction from '@/components/CallToAction';
import MagicPassHero from '@/components/facepass/MagicPassHero';
import MagicPassFeatures from '@/components/facepass/MagicPassFeatures';
import MagicPassStats from '@/components/facepass/MagicPassStats';
import MagicPassBenefits from '@/components/facepass/MagicPassBenefits';
import MagicPassProcess from '@/components/facepass/MagicPassProcess';
import MagicPassUseCases from '@/components/facepass/MagicPassUseCases';
import MagicPassIntegration from '@/components/facepass/MagicPassIntegration';
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

const MagicPassPage = () => {
  return (
    <>
      <Helmet>
        <title>MagicPass | Credenciamento Facial com IA - LEGAL</title>
        <meta name="description" content="MagicPass: Credenciamento facial avançado com inteligência artificial. 99.9% de precisão, acesso em 2 segundos, segurança máxima e conformidade LGPD." />
        <meta name="keywords" content="MagicPass, credenciamento facial, IA eventos, reconhecimento facial, acesso automático, LEGAL AI, biometria eventos" />
        <meta property="og:title" content="MagicPass | Credenciamento Facial com IA - LEGAL" />
        <meta property="og:description" content="Revolucione o credenciamento de eventos com MagicPass: IA avançada, 99.9% de precisão e acesso instantâneo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://legal.com.br/negocios/ai/magicpass" />
        <link rel="canonical" href="https://legal.com.br/negocios/ai/magicpass" />
      </Helmet>
      
      <AIKnowledgeProvider />
      <VoiceSearchOptimization
        businessName="LEGAL TechCo"
        primaryKeywords={["MagicPass credenciamento facial", "reconhecimento facial eventos", "biometria credenciamento IA"]}
        location="Brasil"
        services={["MagicPass", "Credenciamento Facial", "Biometria Eventos"]}
      />
      <GEOAdvancedOptimization />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor />
      <AIFeedbackSystem />
      <AdvancedFeaturedSnippets pageType="product" />
      <SEOCrawlerOptimization />

      <div className="bg-background text-foreground font-unica">
        <MagicPassHero />
        <MagicPassFeatures />
        <MagicPassStats />
        <MagicPassBenefits />
        <MagicPassProcess />
        <MagicPassUseCases />
        <MagicPassIntegration />
        
        <CallToAction
          title="Transforme o Credenciamento dos Seus Eventos"
          subtitle="Experimente o poder do MagicPass e veja como a inteligência artificial pode revolucionar a experiência dos seus participantes. Solicite uma demonstração personalizada agora mesmo."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=magicpass"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?tipo=consultoria&produto=magicpass"
          background="gradient"
        />
      </div>
    </>
  );
};

export default MagicPassPage;
