
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HumanoidHero from '@/components/humanoid/HumanoidHero';
import HumanoidFeatures from '@/components/humanoid/HumanoidFeatures';
import HumanoidStats from '@/components/humanoid/HumanoidStats';
import HumanoidBenefits from '@/components/humanoid/HumanoidBenefits';
import HumanoidProcess from '@/components/humanoid/HumanoidProcess';
import HumanoidUseCases from '@/components/humanoid/HumanoidUseCases';
import HumanoidTestimonials from '@/components/humanoid/HumanoidTestimonials';
import HumanoidDemo from '@/components/humanoid/HumanoidDemo';
import HumanoidFAQ from '@/components/humanoid/HumanoidFAQ';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductFAQSchema from '@/components/seo/ProductFAQSchema';
import HowToSchema from '@/components/seo/HowToSchema';
import CaseStudyStructuredData from '@/components/seo/CaseStudyStructuredData';
import TechnicalDocumentationAI from '@/components/seo/TechnicalDocumentationAI';
import MetricsAndBenchmarksAI from '@/components/seo/MetricsAndBenchmarksAI';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import ConversationalAIData from '@/components/seo/ConversationalAIData';
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

const HumanoidPage = () => {
  const humanoidFAQs = [
    {
      question: "Como o Humanoid identifica leads qualificados na internet?",
      answer: "O Humanoid usa IA avançada para rastrear comportamentos digitais, analisar perfis profissionais e identificar sinais de intenção de compra em múltiplas plataformas, com 92% de precisão na qualificação."
    },
    {
      question: "O Humanoid se integra com meu CRM atual?",
      answer: "Sim, o Humanoid possui integração nativa com Salesforce, HubSpot, Pipedrive, RD Station e mais de 50 CRMs via API. Os leads são transferidos automaticamente com dados enriquecidos."
    },
    {
      question: "Qual a diferença entre Humanoid e um SDR humano?",
      answer: "O Humanoid trabalha 24/7, processa milhares de leads simultaneamente, nunca tem dia ruim e custa 80% menos que um SDR tradicional, mantendo qualidade superior na qualificação."
    }
  ];

  const humanoidSteps = [
    {
      name: "Configuração do Avatar",
      text: "Configure seu agente de IA com persona, tom de voz e critérios de qualificação específicos do seu negócio.",
      url: "https://humanoid.operadora.legal/setup"
    },
    {
      name: "Integração com CRM",
      text: "Conecte seu CRM existente e configure fluxos automáticos de transferência e enriquecimento de leads.",
      url: "https://humanoid.operadora.legal/integracoes"
    },
    {
      name: "Treinamento da IA",
      text: "Treine o Humanoid com seus dados históricos de vendas e perfil de cliente ideal (ICP).",
      url: "https://humanoid.operadora.legal/treinamento"
    },
    {
      name: "Ativação e Monitoramento",
      text: "Ative a captação automática e monitore performance em tempo real através do dashboard inteligente.",
      url: "https://humanoid.operadora.legal/dashboard"
    }
  ];

  const humanoidCaseStudies = [
    {
      title: "SaaS B2B - 500% crescimento em leads",
      client: "TechStart Soluções",
      industry: "Software B2B",
      challenge: "Time de vendas sobrecarregado, baixa qualidade de leads e alto CAC",
      solution: "Implementação do Humanoid para captação e qualificação automática 24/7",
      results: ["500% aumento em leads qualificados", "80% redução do CAC", "300% crescimento em pipeline"],
      metrics: { "Leads qualificados": "+500%", "CAC": "-80%", "Conversão": "15%" },
      duration: "6 meses",
      testimonial: {
        text: "O Humanoid transformou nosso funil de vendas. Captamos mais leads qualificados em 1 mês do que em todo o trimestre anterior.",
        author: "Roberto Lima",
        position: "Diretor Comercial - TechStart"
      }
    }
  ];

  const humanoidBenchmarks = [
    { metric: "Qualificação de Leads", industry: "Vendas B2B", average: 65, ourProduct: 92, improvement: 27, unit: "%", description: "Precisão de qualificação vs SDR tradicional" },
    { metric: "Redução de CAC", industry: "Marketing", average: 20, ourProduct: 80, improvement: 60, unit: "%", description: "Queda no custo de aquisição" },
    { metric: "Aumento de Pipeline", industry: "Vendas", average: 90, ourProduct: 300, improvement: 210, unit: "%", description: "Crescimento do pipeline gerado" }
  ];

  const humanoidSpecs = [
    { name: "Leads Processados/Dia", value: "10.000+", description: "Análise simultânea", unit: "leads" },
    { name: "Precisão de Qualificação", value: "92%", description: "Algoritmo proprietário", unit: "%" },
    { name: "Integrações CRM", value: "50+", description: "APIs nativas", unit: "plataformas" },
    { name: "Tempo de Resposta", value: "<30s", description: "Qualificação automática", unit: "segundos" }
  ];

  const humanoidAPIs = [
    { method: "POST", endpoint: "/api/leads", description: "Adicionar novo lead para qualificação", parameters: { email: "string", company: "string", profile: "string" }, response: "Lead ID e score de qualificação" },
    { method: "GET", endpoint: "/api/qualified-leads", description: "Obter leads qualificados", parameters: { date_range: "string", score_min: "number" }, response: "Lista de leads com dados enriquecidos" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Humanoid - Agente de IA para Captação de Leads",
    "serviceType": "AI Lead Generation Service",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "description": "Humanoid: Agente de IA que capta leads e oportunidades na internet, integra com CRM e automatiza processo de SDR com inteligência artificial conversacional.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "category": "AI Lead Generation"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Humanoid",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Captação Inteligente de Leads"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Integração Automática com CRM"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SDR com IA Conversacional"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Humanoid - Agente de IA para Captação de Leads e SDR | LEGAL</title>
        <meta name="description" content="Humanoid: Agente de IA que capta leads na internet, integra com CRM e automatiza SDR com inteligência artificial conversacional. Transforme prospects em oportunidades reais." />
        <meta name="keywords" content="Humanoid, captação de leads, IA, inteligência artificial, CRM, SDR, lead generation, automação de vendas, LEGAL, IA conversacional" />
        <link rel="canonical" href="https://operadora.legal/produtos/humanoid" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <ProductFAQSchema
        productName="Humanoid - IA para Captação de Leads"
        faqs={humanoidFAQs}
        productUrl="https://operadora.legal/produtos/humanoid"
      />
      
      <HowToSchema
        name="Como implementar Humanoid para captação de leads"
        description="Guia completo para automatizar captação e qualificação de leads com IA"
        steps={humanoidSteps}
        totalTime="P6M"
        estimatedCost="A partir de R$ 2.500/mês"
        supply={["Dados históricos de vendas", "CRM ativo", "Perfil de cliente ideal"]}
        tool={["Plataforma Humanoid", "Integrações CRM", "Dashboard de analytics"]}
      />
      
      <CaseStudyStructuredData
        caseStudies={humanoidCaseStudies}
        productName="Humanoid"
        companyName="LEGAL TechCo"
      />
      
      <TechnicalDocumentationAI
        productName="Humanoid"
        version="2.1"
        specifications={humanoidSpecs}
        apiEndpoints={humanoidAPIs}
        integrations={["Salesforce", "HubSpot", "Pipedrive", "RD Station", "ActiveCampaign", "Zendesk"]}
        systemRequirements={["Browser moderno", "CRM configurado", "API keys de integração", "Conexão estável"]}
        securityFeatures={["Criptografia de dados", "LGPD compliance", "OAuth 2.0", "Audit trail completo"]}
        performance={{
          "cpu": "Otimizado para processamento em lote de leads",
          "memory": "Uso eficiente com cache inteligente",
          "network": "APIs otimizadas <30s resposta",
          "storage": "Banco de dados escalável"
        }}
        deployment={["SaaS Cloud", "API Integration", "White Label"]}
        support={{
          sla: "99.9% uptime",
          channels: ["Suporte 24/7", "Onboarding dedicado", "Training personalizado"],
          documentation: "Manual, API docs e playbooks de vendas"
        }}
      />
      
      <MetricsAndBenchmarksAI
        productName="Humanoid"
        benchmarks={humanoidBenchmarks}
        industries={["Software B2B", "Consultoria", "E-commerce", "Serviços Financeiros"]}
        roiCalculator={{ enabled: true, defaultInvestment: 60000, benefitCategories: ["Automação de SDR", "Aumento de pipeline", "Economia de CAC"] }}
      />
      
      <RealUserMonitoring
        enabled={true}
        sampleRate={0.1}
        endpoint="/api/rum/humanoid"
      />
      
      <ConversationalAIData
        productName="Humanoid"
        flows={[
          {
            intent: "lead_qualification",
            patterns: ["qualificar leads", "leads qualificados", "SDR automático", "scoring"],
            responses: [{ text: "Humanoid qualifica leads automaticamente com 92% de precisão, trabalhando 24/7 para sua equipe de vendas.", context: "IA proprietária treinada em sinais de intenção", followUp: ["Ver integrações", "Agendar demo"] }]
          },
          {
            intent: "crm_integration",
            patterns: ["integração CRM", "Salesforce", "HubSpot", "Pipedrive"],
            responses: [{ text: "Integração nativa com 50+ CRMs, transferindo leads enriquecidos automaticamente para seu funil de vendas.", context: "APIs seguras com OAuth 2.0", followUp: ["Ver documentação", "Testar sandbox"] }]
          }
        ]}
        knowledgeBase={{
          concepts: [
            { term: "Lead Scoring", definition: "Pontuação de leads por probabilidade de compra", synonyms: ["Score de lead", "Qualificação"], relatedTerms: ["ICP", "Funil de vendas"] }
          ],
          processes: [
            { name: "Onboarding Humanoid", steps: ["Configurar avatar", "Conectar CRM", "Treinar IA", "Ativar captação"], duration: "2 semanas", requirements: ["API do CRM", "Dados históricos", "Acesso de admin"] }
          ],
          troubleshooting: [
            { issue: "Baixa taxa de resposta", symptoms: ["Poucos retornos", "Conversas travadas"], solutions: ["Ajustar copy", "Rever ICP", "Otimizar horários"], priority: "medium" }
          ]
        }}
        naturalLanguagePatterns={{
          questions: ["Como qualificar leads?", "Integra com meu CRM?"],
          commands: ["Criar pipeline", "Iniciar captação"],
          comparisons: ["Humanoid vs SDR", "IA vs captura manual"],
          benefits: ["Mais leads qualificados", "Menor CAC", "Operação 24/7"]
        }}
      />
      
      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization 
        contentDomain="technology"
        entityType="service"
        optimizationLevel="advanced"
      />
      <CoreWebVitalsMonitor enableReporting={true} />
      <AIFeedbackSystem enableRealTimeOptimization={true} />
      <AdvancedFeaturedSnippets 
        pageType="product"
        focusKeyword="Humanoid captação leads IA"
      />
      <SEOCrawlerOptimization />
      
      <Breadcrumbs />
      
      <main>
        <HumanoidHero />
        <HumanoidFeatures />
        <HumanoidStats />
        <HumanoidBenefits />
        <HumanoidProcess />
        <HumanoidUseCases />
        <HumanoidTestimonials />
        <HumanoidDemo />
        <HumanoidFAQ />
        <CallToAction
          title="Transforme Leads em Oportunidades Reais"
          subtitle="Experimente o poder do Humanoid e automatize sua captação de leads com inteligência artificial que converte prospects em vendas reais."
          buttonText="Começar Teste Gratuito"
          buttonLink="/contato?produto=humanoid"
          secondaryButtonText="Agendar Demonstração"
          secondaryButtonLink="/contato?tipo=demo&produto=humanoid"
          background="gradient"
        />
      </main>
    </>
  );
};

export default HumanoidPage;
