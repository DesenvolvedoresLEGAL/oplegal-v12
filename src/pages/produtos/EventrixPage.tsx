
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
    { 
      metric: "Engajamento de Participantes", 
      industry: "Eventos Corporativos", 
      average: 45, 
      ourProduct: 85, 
      improvement: 40, 
      unit: "%", 
      description: "Participação ativa vs eventos tradicionais"
    },
    { 
      metric: "Satisfação (NPS)", 
      industry: "Eventos", 
      average: 45, 
      ourProduct: 89, 
      improvement: 44, 
      unit: "pontos", 
      description: "Net Promoter Score superior"
    },
    { 
      metric: "ROI do Evento", 
      industry: "Marketing de Eventos", 
      average: 120, 
      ourProduct: 340, 
      improvement: 220, 
      unit: "%", 
      description: "Retorno sobre investimento"
    }
  ];

  const eventrixSpecs = [
    { name: "Capacidade de Participantes", value: "Ilimitada", description: "Escala automaticamente", unit: "participantes" },
    { name: "Tempo de Resposta IA", value: "<200ms", description: "Recomendações em tempo real", unit: "ms" },
    { name: "Taxa de Uptime", value: "99.9%", description: "Disponibilidade garantida", unit: "%" },
    { name: "Idiomas Suportados", value: "25+", description: "Tradução automática", unit: "idiomas" }
  ];

  const eventrixAPIs = [
    { 
      method: "POST", 
      endpoint: "/api/events", 
      description: "Criar novo evento", 
      parameters: { "name": "string", "date": "ISO date", "type": "string" }, 
      response: "Event ID e configurações" 
    },
    { 
      method: "GET", 
      endpoint: "/api/analytics", 
      description: "Obter métricas em tempo real", 
      parameters: { "event_id": "string", "metric_type": "string" }, 
      response: "Dados de engajamento e participação" 
    }
  ];

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
        version="3.0"
        specifications={eventrixSpecs}
        apiEndpoints={eventrixAPIs}
        integrations={["Salesforce CRM", "HubSpot", "Mailchimp", "Zoom", "Teams", "Slack"]}
        systemRequirements={["Browser moderno", "Conexão estável", "JavaScript habilitado"]}
        securityFeatures={["Criptografia end-to-end", "LGPD compliance", "SSO integrado", "Backup automático"]}
        performance={{
          "cpu": "Processamento IA otimizado para eventos",
          "memory": "Cache inteligente de participantes",
          "network": "APIs <200ms latência",
          "storage": "Big Data para análise preditiva"
        }}
        deployment={["Cloud", "Híbrido", "On-premise"]}
        support={{
          sla: "99.9% uptime garantido",
          channels: ["24/7 Support", "Chat", "Email", "Phone"],
          documentation: "API docs completa + onboarding dedicado"
        }}
      />
      
      <MetricsAndBenchmarksAI
        productName="Eventrix"
        benchmarks={eventrixBenchmarks}
        industries={["Eventos Corporativos", "Eventos", "Marketing de Eventos"]}
        roiCalculator={{
          enabled: true,
          defaultInvestment: 75000,
          benefitCategories: ["Aumento de engajamento", "Melhoria de ROI", "Redução de custos"]
        }}
      />
      
      <RealUserMonitoring
        enabled={true}
        sampleRate={0.1}
        endpoint="/api/rum/eventrix"
      />
      
      <ConversationalAIData
        productName="Eventrix"
        flows={[
          {
            intent: "event_planning",
            patterns: ["planejamento de evento", "organizar evento", "gestão evento", "criar evento"],
            responses: [
              {
                text: "Eventrix automatiza todo o planejamento de eventos com IA, desde análise de público até execução personalizada.",
                context: "Nossa plataforma revoluciona a gestão de eventos com inteligência artificial avançada.",
                followUp: ["Ver demonstração", "Agendar consultoria"]
              }
            ]
          },
          {
            intent: "engagement_boost",
            patterns: ["aumentar engajamento", "participação evento", "networking", "experiência participante"],
            responses: [
              {
                text: "Nossa IA personaliza experiências e conecta participantes relevantes, aumentando engajamento em até 75%.",
                context: "Transformamos eventos em experiências memoráveis através da personalização inteligente.",
                followUp: ["Como funciona personalização?", "Casos de sucesso"]
              }
            ]
          }
        ]}
        knowledgeBase={{
          concepts: [
            {
              term: "Eventos com IA",
              definition: "Gestão de eventos potencializada por inteligência artificial",
              synonyms: ["Smart Events", "Eventos inteligentes", "AI Events"],
              relatedTerms: ["Personalização", "Análise preditiva", "Experiência do participante"]
            }
          ],
          processes: [
            {
              name: "Implementação Eventrix",
              steps: ["Configuração da plataforma", "Integração de dados", "Personalização da IA", "Lançamento e monitoramento"],
              duration: "3 meses",
              requirements: ["Dados dos participantes", "Objetivos do evento", "Sistemas existentes"]
            }
          ],
          troubleshooting: [
            {
              issue: "Baixo engajamento inicial",
              symptoms: ["Pouca participação", "Feedback negativo", "Abandono precoce"],
              solutions: ["Ajuste de algoritmos", "Personalização avançada", "Suporte proativo"],
              priority: "medium" as const
            }
          ]
        }}
        naturalLanguagePatterns={{
          questions: [
            "Como o Eventrix aumenta o engajamento?",
            "Quais integrações o Eventrix possui?"
          ],
          commands: [
            "Quero uma demo do Eventrix",
            "Gerar proposta"
          ],
          comparisons: [
            "Eventrix vs plataformas tradicionais",
            "Eventos com IA vs sem IA"
          ],
          benefits: [
            "Aumento do engajamento",
            "Melhoria do ROI",
            "Automação de processos"
          ]
        }}
      />
      
      <EventSchema
        name="Demonstração Eventrix"
        description="Conheça como a IA pode transformar seus eventos"
        startDate="2024-12-01T14:00:00-03:00"
        endDate="2024-12-01T15:00:00-03:00"
        eventAttendanceMode="OnlineEventAttendanceMode"
        location={{
          name: "Online - Plataforma Eventrix",
          address: {
            streetAddress: "Virtual",
            addressLocality: "São Paulo", 
            addressRegion: "SP",
            postalCode: "01000-000",
            addressCountry: "BR"
          }
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
            url: "https://operadora.legal/contato?produto=eventrix",
            validFrom: "2024-11-01",
            validThrough: "2024-12-31"
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
