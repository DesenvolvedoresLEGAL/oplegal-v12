
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
        category="Omnichannel Customer Service Platform"
        description="Plataforma omnichannel de atendimento com IA e integração WhatsApp META"
        specifications={[
          { name: "Canais Suportados", value: "10+", description: "WhatsApp, Instagram, Facebook, etc", unit: "canais" },
          { name: "Tempo de Resposta IA", value: "<3s", description: "Respostas automáticas", unit: "segundos" },
          { name: "Disponibilidade", value: "99.9%", description: "Uptime garantido", unit: "%" },
          { name: "Integrações", value: "20+", description: "CRMs e ERPs", unit: "sistemas" }
        ]}
        apiEndpoints={[
          { method: "POST", endpoint: "/api/messages", description: "Enviar mensagem omnichannel", parameters: ["channel", "recipient", "message"], response: "Message ID e status" },
          { method: "GET", endpoint: "/api/conversations", description: "Listar conversas", parameters: ["channel", "status", "agent"], response: "Lista de conversas ativas" }
        ]}
        integrations={["WhatsApp Business API", "Instagram Graph API", "Facebook Messenger", "Telegram Bot", "Zendesk", "Freshdesk"]}
        systemRequirements={["Browser moderno", "Conexão estável", "Contas das redes sociais", "Permissões de administrador"]}
        securityFeatures={["Criptografia end-to-end", "LGPD compliance", "Backup automático", "Logs de auditoria"]}
        performanceMetrics={[
          { metric: "Tempo resposta", value: "<3s" },
          { metric: "Disponibilidade", value: "99.9%" },
          { metric: "Canais", value: "10+" }
        ]}
        deploymentOptions={["Cloud SaaS", "Integração API", "White Label"]}
        supportOptions={["Suporte 24/7", "Onboarding dedicado", "Treinamento equipe", "Success Manager"]}
      />
      
      <MetricsAndBenchmarksAI
        productName="Ping"
        benchmarks={[
          { metric: "Redução Tempo Resposta", value: 90, unit: "%", industry: "Atendimento", comparison: "vs atendimento fragmentado" },
          { metric: "Satisfação do Cliente", value: 85, unit: "%", industry: "Customer Service", comparison: "NPS superior" },
          { metric: "Aumento Conversões", value: 300, unit: "%", industry: "E-commerce", comparison: "vs atendimento tradicional" },
          { metric: "Produtividade Equipe", value: 200, unit: "%", industry: "Operações", comparison: "vs múltiplas plataformas" }
        ]}
        industries={["E-commerce", "Serviços", "Saúde", "Educação"]}
        enableROICalculator={true}
      />
      
      <RealUserMonitoring
        enabled={true}
        sampleRate={0.1}
        endpoint="/api/rum/ping"
      />
      
      <ConversationalAIData
        productName="Ping"
        category="Atendimento Omnichannel"
        primaryKeywords={["atendimento omnichannel", "WhatsApp Business", "IA atendimento"]}
        conversationalFlows={[
          {
            intent: "whatsapp_integration",
            keywords: ["WhatsApp Business", "META integração", "WhatsApp atendimento"],
            response: "Ping possui integração oficial META para WhatsApp Business, permitindo automação completa e gestão centralizada."
          },
          {
            intent: "ai_automation",
            keywords: ["IA atendimento", "chatbot inteligente", "automação resposta"],
            response: "Nossa IA resolve questões simples automaticamente e transfere casos complexos para humanos, otimizando o atendimento."
          }
        ]}
        useCases={[
          "Unificação de atendimento em redes sociais",
          "Automação de respostas frequentes",
          "Gestão centralizada de conversas"
        ]}
        benefits={[
          "90% redução no tempo de resposta",
          "85% de satisfação do cliente",
          "300% aumento em conversões"
        ]}
        pricing={{
          plans: [
            { name: "Starter", price: "R$ 299/mês", features: ["3 canais", "IA básica", "5 usuários", "Suporte email"] },
            { name: "Business", price: "R$ 899/mês", features: ["Canais ilimitados", "IA avançada", "20 usuários", "Suporte priority"] },
            { name: "Enterprise", price: "Sob consulta", features: ["Customização completa", "IA proprietária", "Usuários ilimitados", "Success Manager"] }
          ]
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
