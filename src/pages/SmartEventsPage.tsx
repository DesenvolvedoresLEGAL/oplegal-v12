
import React from "react";
import { Helmet } from "react-helmet-async";
import SmartEventsFAQ from "@/components/seo/SmartEventsFAQ";
import SmartEventsHero from "@/components/smart-events/SmartEventsHero";
import SmartEventsPillars from "@/components/smart-events/SmartEventsPillars";
import BenefitsSection from "@/components/sections/BenefitsSection";
import MaturityModelSection from "@/components/smart-events/MaturityModelSection";
import RoadmapSection from "@/components/smart-events/RoadmapSection";
import ComparativeMetricsSection from "@/components/smart-events/ComparativeMetricsSection";
import UseCasesSection from "@/components/smart-events/UseCasesSection";
import ESGSection from "@/components/smart-events/ESGSection";
import IntegrationsSection from "@/components/smart-events/IntegrationsSection";
import BenchmarksSection from "@/components/smart-events/BenchmarksSection";
import FinalCTASection from "@/components/smart-events/FinalCTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import HowToSchema from "@/components/seo/HowToSchema";
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import ConversationalAIData from '@/components/seo/ConversationalAIData';
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

const SmartEventsPage = () => {
  const smartEventsHowToSteps = [
    {
      name: "Avaliação de Maturidade",
      text: "Analisamos o nível atual do seu evento usando nosso framework de maturidade tecnológica, identificando oportunidades e definindo roadmap de transformação digital.",
      image: "https://operadora.legal/images/smart-events-assessment.jpg"
    },
    {
      name: "Design da Experiência",
      text: "Projetamos a experiência completa do evento considerando jornada dos participantes, integração tecnológica e objetivos de negócio específicos.",
      image: "https://operadora.legal/images/smart-events-design.jpg"
    },
    {
      name: "Implementação Tecnológica",
      text: "Implementamos a infraestrutura Smart Events™ com IA, 5G, IoT, drones e sistemas integrados, garantindo experiência fluida e conectada.",
      image: "https://operadora.legal/images/smart-events-implementation.jpg"
    },
    {
      name: "Monitoramento e Otimização",
      text: "Monitoramos KPIs em tempo real e otimizamos continuamente baseado em dados de engagement, satisfação e resultados de negócio.",
      image: "https://operadora.legal/images/smart-events-monitoring.jpg"
    }
  ];

  const conversationalFlows = [
    {
      intent: "smart_events_implementation",
      patterns: ["como implementar smart events", "transformar evento inteligente", "iot em eventos"],
      responses: ["Smart Events™ integra IoT, IA e analytics para criar experiências personalizadas e sustentáveis"],
      context: "implementation_guide"
    },
    {
      intent: "roi_benefits",
      patterns: ["roi smart events", "benefícios eventos inteligentes", "retorno investimento"],
      responses: ["Smart Events™ pode aumentar ROI em até 300% através de otimização de recursos e personalização"],
      context: "business_value"
    }
  ];

  const knowledgeBase = [
    {
      topic: "Smart Events Technology",
      concepts: ["IoT Sensors", "Real-time Analytics", "AI Personalization", "Sustainability Metrics"],
      relationships: ["Technology enables Experience", "Data drives Decisions", "Intelligence creates Value"]
    }
  ];

  const naturalLanguagePatterns = [
    {
      question: "O que são Smart Events?",
      answer: "Smart Events™ são eventos que utilizam IoT, IA e análise de dados para criar experiências personalizadas, sustentáveis e mensuráveis",
      keywords: ["smart events", "eventos inteligentes", "iot", "inteligência artificial"],
      intent: "definition"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Events™ - O novo padrão para eventos inteligentes | LEGAL</title>
        <meta name="description" content="Smart Events™ são eventos com infraestrutura tecnológica 100% integrada — IA, 5G, drones, IoT e dados em tempo real. Transforme eventos em experiências 10x mais conectadas, imersivas e lucrativas." />
      </Helmet>

      {/* Phase 2 SEO Components */}
      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor 
        onMetricsUpdate={(metric) => console.log('Smart Events metric:', metric)}
        enableReporting={true}
      />
      <AIFeedbackSystem />
      <AdvancedFeaturedSnippets 
        pageType="product"
        focusKeyword="smart events"
        location="brasil"
      />
      <SEOCrawlerOptimization />

      <HowToSchema
        name="Como Transformar Seu Evento em Smart Events™"
        description="Guia completo para implementar a metodologia Smart Events™ e criar eventos com infraestrutura tecnológica integrada"
        steps={smartEventsHowToSteps}
        totalTime="P6W"
        estimatedCost="A partir de R$ 100.000"
        supply={["Objetivos do evento", "Perfil dos participantes", "Infraestrutura atual"]}
        tool={["Plataforma Smart Events™", "IA integrada", "Dashboard de métricas"]}
      />

      <Breadcrumbs />

      <SmartEventsHero />
      <SmartEventsPillars />
      <BenefitsSection />
      <MaturityModelSection />
      <RoadmapSection />
      <ComparativeMetricsSection />
      <UseCasesSection />
      <ESGSection />
      <IntegrationsSection />
      <BenchmarksSection />
      <FinalCTASection />
      <SmartEventsFAQ />
    </>
  );
};

export default SmartEventsPage;
