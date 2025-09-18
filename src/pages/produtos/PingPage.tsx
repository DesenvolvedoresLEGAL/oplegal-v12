
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PingHero from '@/components/ping/PingHero';
import PingFeatures from '@/components/ping/PingFeatures';
import PingStats from '@/components/ping/PingStats';
import PingBenefits from '@/components/ping/PingBenefits';
import PingProcess from '@/components/ping/PingProcess';
import PingUseCases from '@/components/ping/PingUseCases';
import PingTestimonials from '@/components/ping/PingTestimonials';
import PingDemo from '@/components/ping/PingDemo';
import PingFAQ from '@/components/ping/PingFAQ';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductFAQSchema from '@/components/seo/ProductFAQSchema';
import HowToSchema from '@/components/seo/HowToSchema';
import CaseStudyStructuredData from '@/components/seo/CaseStudyStructuredData';
import TechnicalDocumentationAI from '@/components/seo/TechnicalDocumentationAI';
import MetricsAndBenchmarksAI from '@/components/seo/MetricsAndBenchmarksAI';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import ConversationalAIData from '@/components/seo/ConversationalAIData';

const PingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Ping - Plataforma Omnichannel de Atendimento com IA",
    "applicationCategory": "CustomerServiceApplication",
    "operatingSystem": "Web-based",
    "description": "Ping: Plataforma omnichannel de atendimento ao cliente com automação IA. Integração WhatsApp via META, redes sociais unificadas e insights com dashboard inteligente.",
    "offers": {
      "@type": "Offer",
      "category": "SaaS"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "featureList": [
      "Atendimento Omnichannel",
      "Automação com IA",
      "Integração WhatsApp META",
      "Dashboard de KPIs",
      "Atendimento Humanizado + IA"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ping - Atendimento Omnichannel com IA | LEGAL</title>
        <meta name="description" content="Ping: Plataforma omnichannel de atendimento ao cliente com automação IA. Integração WhatsApp via META, todas as redes sociais em um só lugar, dashboard de insights e atendimento humanizado + IA." />
        <meta name="keywords" content="atendimento omnichannel, automação IA atendimento, WhatsApp Business META, central atendimento, redes sociais unificadas, dashboard KPIs, LEGAL Ping" />
        <link rel="canonical" href="https://operadora.legal/produtos/ping" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <ProductFAQSchema
        productName="Ping - Atendimento Omnichannel com IA"
        faqs={[
          {
            question: "Como o Ping integra WhatsApp Business via META?",
            answer: "Ping possui integração oficial META para WhatsApp Business, permitindo automação completa, chatbots inteligentes e gestão centralizada de todas as conversas empresariais."
          },
          {
            question: "Quais redes sociais o Ping suporta?",
            answer: "Ping unifica WhatsApp, Instagram, Facebook Messenger, Telegram, SMS, email e chat do site em uma única plataforma omnichannel."
          },
          {
            question: "A IA do Ping substitui atendentes humanos?",
            answer: "Não, a IA complementa o atendimento humano. Ela resolve questões simples automaticamente e transfere casos complexos para atendentes, aumentando eficiência e satisfação."
          }
        ]}
        productUrl="https://operadora.legal/produtos/ping"
      />
      
      <HowToSchema
        name="Como implementar Ping para atendimento omnichannel"
        description="Guia completo para unificar atendimento em todas as redes sociais com IA"
        steps={[
          {
            name: "Configuração de Canais",
            text: "Conecte WhatsApp Business, Instagram, Facebook e outras redes sociais na plataforma Ping.",
            url: "https://ping.operadora.legal/setup"
          },
          {
            name: "Treinamento da IA",
            text: "Configure chatbots inteligentes com base de conhecimento da sua empresa e fluxos de atendimento.",
            url: "https://ping.operadora.legal/ia"
          },
          {
            name: "Integração com Equipe",
            text: "Treine sua equipe na plataforma e configure regras de transferência humano-IA.",
            url: "https://ping.operadora.legal/equipe"
          },
          {
            name: "Analytics e Otimização",
            text: "Monitore KPIs de atendimento e otimize fluxos baseado em dados reais.",
            url: "https://ping.operadora.legal/analytics"
          }
        ]}
        totalTime="P1M"
        estimatedCost="A partir de R$ 299/mês"
        supply={["Contas das redes sociais", "Base de conhecimento", "Equipe de atendimento"]}
        tool={["Plataforma Ping", "Integrações META", "Dashboard de KPIs"]}
      />
      
      <CaseStudyStructuredData
        caseStudies={[
          {
            title: "E-commerce 90% redução tempo resposta",
            client: "Loja Virtual Premium",
            industry: "E-commerce",
            challenge: "Atendimento fragmentado em múltiplas redes sociais, tempo de resposta alto",
            solution: "Ping com unificação de canais, IA para respostas automáticas e dashboard único",
            results: ["90% redução tempo resposta", "85% satisfação cliente", "300% aumento conversões"],
            metrics: { "Tempo resposta": "-90%", "Satisfação": "85%", "Conversões": "+300%" },
            duration: "3 meses",
            testimonial: {
              text: "O Ping revolucionou nosso atendimento. Unificamos tudo e nossa equipe ficou 10x mais produtiva.",
              author: "Fernanda Costa",
              position: "Gerente de E-commerce"
            }
          }
        ]}
        productName="Ping"
        companyName="LEGAL TechCo"
      />
      
      <TechnicalDocumentationAI
        productName="Ping"
        version="3.2"
        specifications={[
          { name: "Canais Suportados", value: "10+", description: "WhatsApp, Instagram, Facebook, etc", unit: "canais" },
          { name: "Tempo de Resposta IA", value: "<3s", description: "Respostas automáticas", unit: "segundos" },
          { name: "Disponibilidade", value: "99.9%", description: "Uptime garantido", unit: "%" },
          { name: "Integrações", value: "20+", description: "CRMs e ERPs", unit: "sistemas" }
        ]}
        apiEndpoints={[
          { method: "POST", endpoint: "/api/messages", description: "Enviar mensagem omnichannel", parameters: { channel: "string", recipient: "string", message: "string" }, response: "Message ID e status" },
          { method: "GET", endpoint: "/api/conversations", description: "Listar conversas", parameters: { channel: "string", status: "string", agent: "string" }, response: "Lista de conversas ativas" }
        ]}
        integrations={["WhatsApp Business API", "Instagram Graph API", "Facebook Messenger", "Telegram Bot", "Zendesk", "Freshdesk"]}
        systemRequirements={["Browser moderno", "Conexão estável", "Contas das redes sociais", "Permissões de administrador"]}
        securityFeatures={["Criptografia end-to-end", "LGPD compliance", "Backup automático", "Logs de auditoria"]}
        performance={{ "Tempo resposta": "<3s", "Disponibilidade": "99.9%", "Canais": "10+" }}
        deployment={["Cloud SaaS", "Integração API", "White Label"]}
        support={{ sla: "99.9% uptime", channels: ["Suporte 24/7", "Onboarding dedicado", "Treinamento equipe"], documentation: "API docs e guias de integração META" }}
      />
      
      <MetricsAndBenchmarksAI
        productName="Ping"
        benchmarks={[
          { metric: "Redução Tempo Resposta", industry: "Atendimento", average: 30, ourProduct: 90, improvement: 60, unit: "%", description: "Tempo de resposta reduzido vs fragmentado" },
          { metric: "Satisfação do Cliente", industry: "Customer Service", average: 70, ourProduct: 85, improvement: 15, unit: "%", description: "NPS melhorado" },
          { metric: "Aumento Conversões", industry: "E-commerce", average: 80, ourProduct: 300, improvement: 220, unit: "%", description: "Conversões após unificação" },
          { metric: "Produtividade Equipe", industry: "Operações", average: 50, ourProduct: 200, improvement: 150, unit: "%", description: "Atendimentos por agente" }
        ]}
        industries={["E-commerce", "Serviços", "Saúde", "Educação"]}
        roiCalculator={{ enabled: true, defaultInvestment: 30000, benefitCategories: ["Automação de respostas", "Unificação de canais", "Produtividade"] }}
      />
      
      <RealUserMonitoring
        enabled={true}
        sampleRate={0.1}
        endpoint="/api/rum/ping"
      />
      
      <ConversationalAIData
        productName="Ping"
        flows={[
          { intent: "whatsapp_integration", patterns: ["WhatsApp Business", "META integração", "WhatsApp atendimento"], responses: [{ text: "Integração oficial META para WhatsApp Business com automação completa e gestão centralizada.", context: "Conformidade META e templates aprovados", followUp: ["Ver integrações", "Iniciar onboarding"] }] },
          { intent: "ai_automation", patterns: ["IA atendimento", "chatbot inteligente", "automação resposta"], responses: [{ text: "IA resolve questões simples e transfere casos complexos para humanos, otimizando o atendimento.", context: "Assistente híbrido humano+IA", followUp: ["Criar chatbot", "Medir KPIs"] }] }
        ]}
        knowledgeBase={{
          concepts: [{ term: "Omnichannel", definition: "Unificação de canais de atendimento", synonyms: ["Multicanal integrado"], relatedTerms: ["SLA", "CSAT"] }],
          processes: [{ name: "Setup Ping", steps: ["Conectar canais", "Treinar IA", "Integrar CRM", "Configurar KPIs"], duration: "4 semanas", requirements: ["Contas sociais", "Acesso admin", "Base de conhecimento"] }],
          troubleshooting: [{ issue: "Queda de CSAT", symptoms: ["Demora", "Respostas genéricas"], solutions: ["Ajustar bot", "Rever fluxos", "Treinar equipe"], priority: "medium" }]
        }}
        naturalLanguagePatterns={{
          questions: ["O Ping integra com WhatsApp?", "Quais canais são suportados?"],
          commands: ["Criar bot", "Unificar canais"],
          comparisons: ["Ping vs plataformas tradicionais", "Omnichannel vs multicanal"],
          benefits: ["Resposta mais rápida", "Maior satisfação", "Melhor conversão"]
        }}
      />
      
      <Breadcrumbs />
      
      <main>
        <PingHero />
        <PingFeatures />
        <PingStats />
        <PingBenefits />
        <PingProcess />
        <PingUseCases />
        <PingTestimonials />
        <PingDemo />
        <PingFAQ />
        <CallToAction
          title="Transforme seu Atendimento ao Cliente"
          subtitle="Unifique todas as suas conversas em uma plataforma inteligente. WhatsApp, redes sociais e IA trabalhando juntos para a experiência perfeita."
          buttonText="Demonstração Gratuita"
          buttonLink="/contato?produto=ping"
          secondaryButtonText="Acessar Ping™"
          secondaryButtonLink="https://ping.operadora.legal"
          background="gradient"
        />
      </main>
    </>
  );
};

export default PingPage;
