
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
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductFAQSchema from '@/components/seo/ProductFAQSchema';
import HowToSchema from '@/components/seo/HowToSchema';
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';

import NaturalLanguageOptimization from '@/components/optimization/NaturalLanguageOptimization';
import FeaturedSnippetsOptimization from '@/components/optimization/FeaturedSnippetsOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import TechnicalDocumentationAI from '@/components/seo/TechnicalDocumentationAI';
import MetricsAndBenchmarksAI from '@/components/seo/MetricsAndBenchmarksAI';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

const FitScorePage = () => {
  const fitScoreFAQs = [
    {
      question: "Como o FitScore analisa o fit cultural dos candidatos?",
      answer: "O FitScore utiliza algoritmos de processamento de linguagem natural para analisar respostas, histórico profissional e comportamento digital dos candidatos, comparando com o perfil cultural da empresa definido através de questionários estruturados e dados históricos de colaboradores bem-sucedidos."
    },
    {
      question: "Qual é a precisão do matching de candidatos?",
      answer: "Nosso sistema possui 95% de precisão no matching, baseado em análise de milhares de contratações bem-sucedidas. A IA considera mais de 150 variáveis incluindo skills técnicas, soft skills, experiência e compatibilidade cultural."
    },
    {
      question: "O FitScore está em conformidade com a LGPD?",
      answer: "Sim, 100%. Todos os dados são criptografados e processados seguindo rigorosamente as diretrizes da LGPD. Candidatos têm controle total sobre seus dados e podem solicitar exclusão a qualquer momento."
    }
  ];

  const fitScoreHowToSteps = [
    {
      name: "Configuração do Perfil da Empresa",
      text: "Configure o perfil cultural e os requisitos técnicos da sua empresa através de questionários estruturados e análise dos colaboradores atuais de alta performance.",
      image: "https://operadora.legal/images/fitscore-setup.jpg"
    },
    {
      name: "Integração com ATS",
      text: "Conecte o FitScore com seu sistema de ATS existente através de APIs nativas, mantendo todos os processos atuais funcionando normalmente.",
      image: "https://operadora.legal/images/fitscore-integration.jpg"
    },
    {
      name: "Análise Inteligente de Candidatos",
      text: "A IA analisa automaticamente todos os candidatos usando mais de 150 variáveis, gerando scores de compatibilidade cultural e técnica em tempo real.",
      image: "https://operadora.legal/images/fitscore-analysis.jpg"
    },
    {
      name: "Monitoring e Otimização",
      text: "Monitore métricas de contratação através de dashboards em tempo real e otimize continuamente os critérios baseado no feedback dos resultados.",
      image: "https://operadora.legal/images/fitscore-monitoring.jpg"
    }
  ];

  const conversationalFlows = [
    {
      intent: "fitscore_matchmaking",
      patterns: ["como fitscore conecta pessoas", "matchmaking inteligente eventos", "networking automatico"],
      responses: ["FitScore™ usa IA para analisar perfis e conectar pessoas com maior potencial de networking, aumentando engajamento em 85%"],
      context: "matchmaking_technology"
    },
    {
      intent: "privacy_security",
      patterns: ["fitscore privacidade", "dados seguros matchmaking", "lgpd networking"],
      responses: ["FitScore™ garante máxima privacidade com criptografia avançada e total conformidade com LGPD"],
      context: "privacy_compliance"
    }
  ];

  const knowledgeBase = [
    {
      topic: "AI Matchmaking Technology",
      concepts: ["Machine Learning", "Behavioral Analysis", "Profile Matching", "Network Effects"],
      relationships: ["AI enables Connections", "Data drives Matching", "Intelligence creates Value"]
    }
  ];

  const naturalLanguagePatterns = [
    {
      question: "O que é FitScore?",
      answer: "FitScore™ é uma tecnologia de IA que analisa perfis e conecta participantes com alta compatibilidade em eventos",
      keywords: ["fitscore", "matchmaking eventos", "networking inteligente", "ia conexões"],
      intent: "product_definition"
    }
  ];

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

      {/* Phase 2 SEO Components */}
      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor 
        onMetricsUpdate={(metric) => console.log('FitScore metric:', metric)}
        enableReporting={true}
      />
      <AIFeedbackSystem />
      <AdvancedFeaturedSnippets 
        pageType="product"
        focusKeyword="fitscore matchmaking eventos"
        location="brasil"
      />
      <SEOCrawlerOptimization />
      
      <ProductFAQSchema
        productName="FitScore - Copiloto de Contratação com IA"
        faqs={fitScoreFAQs}
        productUrl="https://operadora.legal/produtos/fitscore"
      />
      
      <HowToSchema
        name="Como Implementar o FitScore no Seu RH"
        description="Guia completo para implementar o copiloto de contratação FitScore e revolucionar seus processos de RH com IA"
        steps={fitScoreHowToSteps}
        totalTime="P3W"
        estimatedCost="A partir de R$ 25.000"
        supply={["Dados de colaboradores atuais", "Histórico de contratações", "Perfil cultural da empresa"]}
        tool={["Dashboard FitScore", "Integração ATS", "Analytics de RH"]}
      />
      
      <Breadcrumbs />
      
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
