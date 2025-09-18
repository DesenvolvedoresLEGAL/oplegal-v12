import React from 'react';
import { Helmet } from 'react-helmet-async';
import GalaxiaHero from '@/components/galaxia/GalaxiaHero';
import GalaxiaAbout from '@/components/galaxia/GalaxiaAbout';
import GalaxiaFeatures from '@/components/galaxia/GalaxiaFeatures';
import GalaxiaBenefits from '@/components/galaxia/GalaxiaBenefits';
import GalaxiaDifferentials from '@/components/galaxia/GalaxiaDifferentials';
import GalaxiaTestimonialsEnhanced from '@/components/galaxia/GalaxiaTestimonialsEnhanced';
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

const GalaxiaPage = () => {
  const galaxiaFAQs = [
    {
      question: "O que diferencia GalaxIA de outras soluções de IA?",
      answer: "GalaxIA oferece infraestrutura dedicada com clusters GPU NVIDIA A100/H100, APIs REST/GraphQL personalizadas, modelos LLM (GPT, BERT), Computer Vision (YOLO, ResNet) e fine-tuning proprietário. Diferente de soluções genéricas, cada implementação é arquitetada especificamente para suas necessidades de negócio."
    },
    {
      question: "Qual o tempo de implementação?",
      answer: "O tempo varia conforme a complexidade do projeto, mas tipicamente entre 4-12 semanas. Isso inclui análise de requisitos, configuração da infraestrutura, desenvolvimento de APIs personalizadas e treinamento dos modelos."
    },
    {
      question: "Como funciona a escalabilidade automática?",
      answer: "Nossa infraestrutura monitora constantemente a demanda e ajusta recursos automaticamente. Isso garante performance otimizada durante picos de uso e redução de custos durante períodos de baixa demanda."
    }
  ];

  const galaxiaHowToSteps = [
    {
      name: "Análise de Necessidades",
      text: "Nossa equipe de arquitetos de soluções analisa seus processos atuais, identifica gargalos e define os requisitos técnicos para sua infraestrutura de IA personalizada.",
      image: "https://operadora.legal/images/galaxia-analysis.jpg"
    },
    {
      name: "Design da Arquitetura",
      text: "Projetamos uma arquitetura customizada com clusters GPU dedicados, APIs personalizadas e modelos de IA específicos para suas necessidades de negócio.",
      image: "https://operadora.legal/images/galaxia-design.jpg"
    },
    {
      name: "Implementação e Treinamento",
      text: "Desenvolvemos e implementamos a solução, incluindo fine-tuning dos modelos com seus dados proprietários e integração com sistemas existentes.",
      image: "https://operadora.legal/images/galaxia-implementation.jpg"
    },
    {
      name: "Monitoramento e Otimização",
      text: "Ativamos o monitoramento 24/7 e realizamos otimizações contínuas baseadas em performance e feedback dos usuários finais.",
      image: "https://operadora.legal/images/galaxia-monitoring.jpg"
    }
  ];

  const conversationalFlows = [
    {
      intent: "galaxia_capabilities",
      patterns: ["o que galaxia faz", "recursos plataforma galaxia", "funcionalidades ia eventos"],
      responses: ["GALAXIA™ automatiza gestão de eventos com IA, otimiza recursos, personaliza experiências e aumenta ROI em até 400%"],
      context: "product_capabilities"
    },
    {
      intent: "implementation_timeline",
      patterns: ["prazo implementação galaxia", "tempo setup plataforma", "quando posso usar galaxia"],
      responses: ["GALAXIA™ é implementado em 15-30 dias com migração completa, treinamento e suporte dedicado"],
      context: "implementation_process"
    }
  ];

  const knowledgeBase = [
    {
      topic: "AI Event Management",
      concepts: ["Machine Learning", "Predictive Analytics", "Process Automation", "Resource Optimization"],
      relationships: ["AI enables Automation", "Data drives Predictions", "Intelligence optimizes Resources"]
    }
  ];

  const naturalLanguagePatterns = [
    {
      question: "O que é GALAXIA?",
      answer: "GALAXIA™ é uma plataforma de gestão de eventos alimentada por IA que automatiza processos e otimiza resultados",
      keywords: ["galaxia", "plataforma eventos", "inteligência artificial", "gestão automatizada"],
      intent: "product_overview"
    }
  ];

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

      {/* Phase 2 SEO Components */}
      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor 
        onMetricsUpdate={(metric) => console.log('Galaxia metric:', metric)}
        enableReporting={true}
      />
      <AIFeedbackSystem />
      <AdvancedFeaturedSnippets 
        pageType="product"
        focusKeyword="galaxia plataforma eventos ia"
        location="brasil"
      />
      <SEOCrawlerOptimization />
      
      <ProductFAQSchema
        productName="GalaxIA™ - Inteligência Artificial sob medida"
        faqs={galaxiaFAQs}
        productUrl="https://operadora.legal/produtos/galaxia"
      />
      
      <HowToSchema
        name="Como Implementar GalaxIA™ na Sua Empresa"
        description="Guia completo para implementar infraestrutura de IA personalizada com GalaxIA™ em ambientes empresariais"
        steps={galaxiaHowToSteps}
        totalTime="P4W"
        estimatedCost="A partir de R$ 50.000"
        supply={["Dados empresariais", "Definição de processos", "Requisitos de integração"]}
        tool={["Clusters GPU dedicados", "APIs personalizadas", "Dashboard administrativo"]}
      />
      
      <Breadcrumbs />
      
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