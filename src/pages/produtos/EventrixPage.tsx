
import React from 'react';
import { Helmet } from 'react-helmet-async';
import EventrixHero from '@/components/eventrix/EventrixHero';
import EventrixFeatures from '@/components/eventrix/EventrixFeatures';
import EventrixStats from '@/components/eventrix/EventrixStats';
import EventrixBenefits from '@/components/eventrix/EventrixBenefits';
import EventrixUseCases from '@/components/eventrix/EventrixUseCases';
import EventrixTestimonials from '@/components/eventrix/EventrixTestimonials';
import EventrixDemo from '@/components/eventrix/EventrixDemo';
import EventrixFAQ from '@/components/eventrix/EventrixFAQ';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductFAQSchema from '@/components/seo/ProductFAQSchema';
import HowToSchema from '@/components/seo/HowToSchema';
import CaseStudyStructuredData from '@/components/seo/CaseStudyStructuredData';
import TechnicalDocumentationAI from '@/components/seo/TechnicalDocumentationAI';
import MetricsAndBenchmarksAI from '@/components/seo/MetricsAndBenchmarksAI';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import ConversationalAIData from '@/components/seo/ConversationalAIData';
import EventSchema from '@/components/seo/EventSchema';

const EventrixPage = () => {
  const eventrixFAQs = [
    {
      question: "Como a IA do Eventrix personaliza a experiência dos participantes?",
      answer: "O Eventrix analisa dados comportamentais, preferências e interações para criar jornadas personalizadas, sugerir conteúdos relevantes e conectar participantes com interesses similares, aumentando o engajamento em 75%."
    },
    {
      question: "Quais tipos de eventos podem usar o Eventrix?",
      answer: "Eventrix é ideal para eventos corporativos, conferências, webinars, feiras, workshops, congressos médicos e qualquer evento que busque maximizar engajamento e ROI através da inteligência artificial."
    },
    {
      question: "Como funciona a análise preditiva para eventos?",
      answer: "Nossa IA analisa dados históricos, tendências do mercado e comportamento dos participantes para prever demanda, otimizar recursos, identificar potenciais problemas e sugerir melhorias com 95% de precisão."
    }
  ];

  const eventrixSteps = [
    {
      name: "Configuração da Plataforma",
      text: "Configure sua conta Eventrix, importe dados do evento e defina objetivos específicos de engajamento e ROI.",
      url: "https://eventrix.operadora.legal/setup"
    },
    {
      name: "Integração de Dados",
      text: "Conecte sistemas existentes (CRM, ERP, plataformas de marketing) para análise completa dos participantes.",
      url: "https://eventrix.operadora.legal/integracoes"
    },
    {
      name: "Personalização da IA",
      text: "Configure algoritmos de personalização baseados no perfil do seu público e objetivos do evento.",
      url: "https://eventrix.operadora.legal/personalizacao"
    },
    {
      name: "Lançamento e Monitoramento",
      text: "Ative a plataforma e monitore métricas em tempo real com insights acionáveis da IA.",
      url: "https://eventrix.operadora.legal/analytics"
    }
  ];

  const eventrixCaseStudies = [
    {
      title: "Conferência Tech 2024 - 5000 participantes",
      client: "TechCorp Brasil",
      industry: "Tecnologia",
      challenge: "Baixo engajamento em eventos virtuais e híbridos, dificuldade de networking qualificado",
      solution: "Implementação do Eventrix com matchmaking IA, gamificação e personalização de conteúdo",
      results: ["75% aumento no engajamento", "90% satisfação dos participantes", "300% mais conexões de networking"],
      metrics: { "Participação ativa": "85%", "NPS": "89", "ROI": "340%" },
      duration: "3 meses",
      testimonial: {
        text: "O Eventrix transformou completamente nossa experiência de eventos. A IA conseguiu personalizar a jornada de cada participante de forma impressionante.",
        author: "Carlos Silva",
        position: "Diretor de Eventos - TechCorp"
      }
    }
  ];

  const eventrixBenchmarks = [
    { metric: "Engajamento de Participantes", value: 85, unit: "%", industry: "Eventos Corporativos", comparison: "+65% vs tradicional" },
    { metric: "Satisfação (NPS)", value: 89, unit: "pontos", industry: "Eventos", comparison: "+45 pontos vs média" },
    { metric: "ROI do Evento", value: 340, unit: "%", industry: "Marketing de Eventos", comparison: "+200% vs eventos tradicionais" },
    { metric: "Conexões de Networking", value: 300, unit: "%", industry: "Networking B2B", comparison: "+250% mais conexões qualificadas" }
  ];

  const eventrixSpecs = [
    { name: "Capacidade de Participantes", value: "Ilimitada", description: "Escala automaticamente", unit: "participantes" },
    { name: "Tempo de Resposta IA", value: "<200ms", description: "Recomendações em tempo real", unit: "ms" },
    { name: "Taxa de Uptime", value: "99.9%", description: "Disponibilidade garantida", unit: "%" },
    { name: "Idiomas Suportados", value: "25+", description: "Tradução automática", unit: "idiomas" }
  ];

  const eventrixAPIs = [
    { method: "POST", endpoint: "/api/events", description: "Criar novo evento", parameters: ["name", "date", "type"], response: "Event ID e configurações" },
    { method: "GET", endpoint: "/api/analytics", description: "Obter métricas em tempo real", parameters: ["event_id", "metric_type"], response: "Dados de engajamento e participação" }
  ];

const EventrixPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Eventrix - Plataforma de Gestão de Eventos com IA",
    "serviceType": "Event Management Service",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "description": "Plataforma completa de gestão de eventos com inteligência artificial. Automação de processos, análise preditiva e experiência personalizada para eventos corporativos, festivais e conferências.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "category": "Event Management"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Eventrix",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gestão de Eventos Corporativos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automação de Processos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Análise Preditiva com IA"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Eventrix - Plataforma de Gestão de Eventos com IA | LEGAL</title>
        <meta name="description" content="Eventrix: Plataforma completa de gestão de eventos com inteligência artificial. Automação de processos, análise preditiva e experiência personalizada para eventos de qualquer escala." />
        <meta name="keywords" content="gestão de eventos, eventos corporativos, IA para eventos, automação eventos, plataforma eventos, análise preditiva, experiência personalizada, LEGAL Eventrix" />
        <link rel="canonical" href="https://operadora.legal/produtos/eventrix" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <ProductFAQSchema
        productName="Eventrix - Gestão de Eventos com IA"
        faqs={eventrixFAQs}
        productUrl="https://operadora.legal/produtos/eventrix"
      />
      
      <HowToSchema
        name="Como implementar Eventrix para eventos corporativos"
        description="Guia completo para implementar gestão de eventos com IA usando Eventrix"
        steps={eventrixSteps}
        totalTime="P3M"
        estimatedCost="A partir de R$ 15.000"
        supply={["Dados dos participantes", "Objetivos do evento", "Sistemas existentes"]}
        tool={["Plataforma Eventrix", "APIs de integração", "Dashboard de analytics"]}
      />
      
      <CaseStudyStructuredData
        caseStudies={eventrixCaseStudies}
        productName="Eventrix"
        companyName="LEGAL TechCo"
      />
      
      <TechnicalDocumentationAI
        productName="Eventrix"
        category="Event Management Platform"
        description="Plataforma de gestão de eventos com IA para personalização e análise preditiva"
        specifications={eventrixSpecs}
        apiEndpoints={eventrixAPIs}
        integrations={["Salesforce CRM", "HubSpot", "Mailchimp", "Zoom", "Teams", "Slack"]}
        systemRequirements={["Browser moderno", "Conexão estável", "JavaScript habilitado"]}
        securityFeatures={["Criptografia end-to-end", "LGPD compliance", "SSO integrado", "Backup automático"]}
        performanceMetrics={[
          { metric: "Latência API", value: "<200ms" },
          { metric: "Disponibilidade", value: "99.9%" },
          { metric: "Capacidade", value: "Ilimitada" }
        ]}
        deploymentOptions={["Cloud", "Híbrido", "On-premise"]}
        supportOptions={["24/7 Support", "Onboarding dedicado", "Training", "Documentação"]}
      />
      
      <MetricsAndBenchmarksAI
        productName="Eventrix"
        benchmarks={eventrixBenchmarks}
        industries={["Tecnologia", "Saúde", "Educação", "Varejo"]}
        enableROICalculator={true}
      />
      
      <RealUserMonitoring
        enabled={true}
        sampleRate={0.1}
        endpoint="/api/rum/eventrix"
      />
      
      <ConversationalAIData
        productName="Eventrix"
        category="Gestão de Eventos"
        primaryKeywords={["gestão de eventos", "eventos com IA", "plataforma de eventos"]}
        conversationalFlows={[
          {
            intent: "event_planning",
            keywords: ["planejamento de evento", "organizar evento", "gestão evento"],
            response: "Eventrix automatiza todo o planejamento de eventos com IA, desde análise de público até execução personalizada."
          },
          {
            intent: "engagement_boost",
            keywords: ["aumentar engajamento", "participação evento", "networking"],
            response: "Nossa IA personaliza experiências e conecta participantes relevantes, aumentando engajamento em até 75%."
          }
        ]}
        useCases={[
          "Eventos corporativos com alta participação",
          "Conferências com networking qualificado",
          "Webinars com engajamento personalizado"
        ]}
        benefits={[
          "75% mais engajamento dos participantes",
          "Análise preditiva com 95% de precisão",
          "ROI 340% superior a eventos tradicionais"
        ]}
        pricing={{
          plans: [
            { name: "Starter", price: "R$ 2.500/mês", features: ["Até 500 participantes", "IA básica", "Suporte email"] },
            { name: "Professional", price: "R$ 8.500/mês", features: ["Até 5.000 participantes", "IA avançada", "Suporte 24/7"] },
            { name: "Enterprise", price: "Sob consulta", features: ["Participantes ilimitados", "IA personalizada", "Success Manager"] }
          ]
        }}
      />
      
      <EventSchema
        eventName="Demonstração Eventrix"
        eventDescription="Conheça como a IA pode transformar seus eventos"
        startDate="2024-12-01T14:00:00-03:00"
        endDate="2024-12-01T15:00:00-03:00"
        eventMode="online"
        location={{
          type: "virtual",
          url: "https://eventrix.operadora.legal/demo"
        }}
        organizer={{
          name: "LEGAL TechCo",
          url: "https://operadora.legal"
        }}
        offers={[
          {
            name: "Demonstração Gratuita",
            price: 0,
            currency: "BRL",
            availability: "InStock",
            url: "https://operadora.legal/contato?produto=eventrix"
          }
        ]}
      />
      
      <Breadcrumbs />
      
      <main>
        <EventrixHero />
        <EventrixFeatures />
        <EventrixStats />
        <EventrixBenefits />
        <EventrixUseCases />
        <EventrixTestimonials />
        <EventrixDemo />
        <EventrixFAQ />
        <CallToAction
          title="Transforme seus Eventos com IA"
          subtitle="Descubra como a inteligência artificial pode revolucionar a gestão dos seus eventos. Solicite uma demonstração personalizada."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=eventrix"
          secondaryButtonText="Ver Demo ao Vivo"
          secondaryButtonLink="#demo"
          background="gradient"
        />
      </main>
    </>
  );
};

export default EventrixPage;
