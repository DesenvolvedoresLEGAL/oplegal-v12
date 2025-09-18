
import React from 'react';
import SEOHead from '@/components/SEOHead';
import ProductSchema from '@/components/seo/ProductSchema';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
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
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

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

  const faqData = [
    {
      question: "Como funciona a gamificação no NeuraFit?",
      answer: "O NeuraFit utiliza elementos de gamificação similares ao Duolingo, com níveis, conquistas, streaks diárias, rankings e recompensas virtuais que mantêm a motivação constante no desenvolvimento cognitivo."
    },
    {
      question: "Quais áreas do desenvolvimento o NeuraFit abrange?",
      answer: "A plataforma abrange desenvolvimento cognitivo (memória, atenção, raciocínio), emocional (inteligência emocional, autoconhecimento) e espiritual (práticas contemplativas, mindfulness, conceitos quânticos)."
    },
    {
      question: "Preciso ter conhecimento prévio em neurociência?",
      answer: "Não! O NeuraFit é projetado para todos os níveis. Começamos com exercícios básicos e gradualmente introduzimos conceitos mais avançados, sempre de forma didática e aplicável."
    },
    {
      question: "Quanto tempo devo dedicar diariamente?",
      answer: "Recomendamos de 15 a 30 minutos diários. A plataforma foi desenvolvida para sessões curtas e eficazes, respeitando a plasticidade cerebral e evitando sobrecarga cognitiva."
    },
    {
      question: "Como são os exercícios de PNL na plataforma?",
      answer: "Os exercícios de PNL incluem técnicas de ancoragem, reestruturação de crenças, visualizações guiadas e padrões de linguagem, todos adaptados para formato interativo e gamificado."
    }
  ];

  return (
    <>
      <SEOHead
        title="NeuraFit™ - Musculação para o Cérebro | Desenvolvimento Cognitivo | LEGAL"
        description="NeuraFit: Plataforma gamificada de desenvolvimento cognitivo, emocional e espiritual. Integra neurociência, PNL e práticas contemplativas com gamificação estilo Duolingo."
        keywords="desenvolvimento cognitivo, neurociência, gamificação, PNL, espiritualidade, física quântica, musculação cerebral, LEGAL NeuraFit"
        canonical="https://operadora.legal/produtos/neurafit"
        image="https://operadora.legal/images/neurafit-hero-2024.jpg"
        type="product"
      />
      
      <ProductSchema
        productName="NeuraFit™"
        description="Plataforma gamificada de desenvolvimento cognitivo, emocional e espiritual"
        category="Aplicativo Educacional"
        features={["Jogos de Neurociência", "Exercícios de PNL", "Práticas Contemplativas", "Gamificação Avançada", "Mentoria Especializada"]}
        url="https://operadora.legal/produtos/neurafit"
        applicationCategory="EducationalApplication"
        pricing={{
          type: "subscription",
          currency: "BRL",
          price: "99"
        }}
      />
      
      <FAQPageSchema faqs={faqData} pageUrl="https://operadora.legal/produtos/neurafit" />
      
      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization 
        contentDomain="technology"
        entityType="product"
        optimizationLevel="advanced"
      />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor enableReporting={true} />
      <AIFeedbackSystem enableRealTimeOptimization={true} />
      <AdvancedFeaturedSnippets 
        pageType="product"
        focusKeyword="NeuraFit desenvolvimento cognitivo"
      />
      <SEOCrawlerOptimization />
      
      <Breadcrumbs />
      
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
