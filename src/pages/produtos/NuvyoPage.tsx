
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NuvyoHero from '@/components/nuvyo/NuvyoHero';
import NuvyoFeatures from '@/components/nuvyo/NuvyoFeatures';
import NuvyoStats from '@/components/nuvyo/NuvyoStats';
import NuvyoBenefits from '@/components/nuvyo/NuvyoBenefits';
import NuvyoProcess from '@/components/nuvyo/NuvyoProcess';
import NuvyoUseCases from '@/components/nuvyo/NuvyoUseCases';
import NuvyoTestimonials from '@/components/nuvyo/NuvyoTestimonials';
import NuvyoDemo from '@/components/nuvyo/NuvyoDemo';
import NuvyoFAQ from '@/components/nuvyo/NuvyoFAQ';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductFAQSchema from '@/components/seo/ProductFAQSchema';
import HowToSchema from '@/components/seo/HowToSchema';
import CaseStudyStructuredData from '@/components/seo/CaseStudyStructuredData';
import TechnicalDocumentationAI from '@/components/seo/TechnicalDocumentationAI';
import MetricsAndBenchmarksAI from '@/components/seo/MetricsAndBenchmarksAI';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import ConversationalAIData from '@/components/seo/ConversationalAIData';

const NuvyoPage = () => {
  const nuvyoFAQs = [
    {
      question: "Quais equipamentos de filmagem o Nuvyo utiliza?",
      answer: "Utilizamos drones profissionais com câmeras 4K/8K, estabilizadores gimbal 3 eixos e equipamentos de gravação de áudio profissional. Todos certificados ANAC para filmagem comercial."
    },
    {
      question: "O Nuvyo pode filmar eventos em ambientes fechados?",
      answer: "Sim, nossos drones são adequados para filmagem indoor e outdoor. Utilizamos diferentes modelos conforme o ambiente: micro drones para espaços internos e drones maiores para áreas externas."
    },
    {
      question: "Qual o prazo de entrega dos vídeos?",
      answer: "Entregas em 48-72h para projetos simples e até 2 semanas para produções complexas com edição avançada. Oferecemos também entregas express em 24h com taxa adicional."
    }
  ];

  const nuvyoSteps = [
    {
      name: "Briefing do Projeto",
      text: "Reunião para entender objetivos, local de filmagem, duração e estilo desejado para o vídeo ou sessão fotográfica.",
      url: "https://nuvyo.operadora.legal/briefing"
    },
    {
      name: "Planejamento de Voo",
      text: "Análise técnica do local, condições climáticas, autorizações necessárias e definição de equipamentos.",
      url: "https://nuvyo.operadora.legal/planejamento"
    },
    {
      name: "Produção Audiovisual",
      text: "Execução da filmagem com drones certificados, captura em múltiplos ângulos e qualidade cinematográfica.",
      url: "https://nuvyo.operadora.legal/producao"
    },
    {
      name: "Pós-Produção e Entrega",
      text: "Edição profissional, correção de cores, trilha sonora e entrega nos formatos desejados.",
      url: "https://nuvyo.operadora.legal/pos-producao"
    }
  ];

  const nuvyoCaseStudies = [
    {
      title: "Casamento Premium - Vista Aérea Cinematográfica",
      client: "Buffet Royal Garden",
      industry: "Eventos",
      challenge: "Cliente solicitou filmagem aérea única e cinematográfica para casamento de luxo",
      solution: "Nuvyo com drones 8K, múltiplos ângulos aéreos e edição cinematográfica premium",
      results: ["Satisfação 100% dos noivos", "50 indicações geradas", "Portfólio diferenciado"],
      metrics: { "Qualidade": "8K", "Satisfação": "100%", "Indicações": "50" },
      duration: "1 dia de filmagem",
      testimonial: {
        text: "O Nuvyo capturou nosso casamento de forma mágica. As imagens aéreas ficaram cinematográficas e emocionaram todos os convidados.",
        author: "Marina e João",
        position: "Noivos - Casamento Royal Garden"
      }
    }
  ];

  const nuvyoBenchmarks = [
    { metric: "Qualidade de Imagem", industry: "Produção Audiovisual", average: 4, ourProduct: 8, improvement: 4, unit: "K", description: "Resolução comparada ao padrão de mercado" },
    { metric: "Satisfação do Cliente", industry: "Serviços", average: 75, ourProduct: 98, improvement: 23, unit: "%", description: "NPS de clientes atendidos" },
    { metric: "Prazo de Entrega", industry: "Produção", average: 168, ourProduct: 48, improvement: 120, unit: "horas", description: "Tempo de entrega reduzido" }
  ];

  const nuvyoSpecs = [
    { name: "Resolução Máxima", value: "8K", description: "Ultra alta definição", unit: "pixels" },
    { name: "Estabilização", value: "3 eixos", description: "Gimbal profissional", unit: "eixos" },
    { name: "Autonomia de Voo", value: "40min", description: "Tempo contínuo", unit: "minutos" },
    { name: "Certificação", value: "ANAC", description: "Comercial certificado", unit: "licença" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nuvyo - Filmagem e Fotografia com Drones",
    "description": "Serviços profissionais de filmagem e fotografia aérea com drones para eventos, marketing e produções audiovisuais",
    "serviceType": ["Filmagem com drones", "Fotografia aérea"],
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "850",
      "priceCurrency": "BRL"
    }
  };

  return (
    <>
      <Helmet>
        <title>Nuvyo - Filmagem e Fotografia com Drones | LEGAL</title>
        <meta name="description" content="Serviços profissionais de filmagem e fotografia aérea com drones. Capture momentos únicos com qualidade cinematográfica 4K/8K para eventos, marketing e produções." />
        <meta name="keywords" content="drone filmagem, fotografia aérea, vídeo drone, filmagem eventos, marketing drone, produção audiovisual" />
        
        <meta property="og:title" content="Nuvyo - Filmagem e Fotografia com Drones" />
        <meta property="og:description" content="Transforme sua perspectiva com filmagem e fotografia aérea profissional. Qualidade cinematográfica para eventos, marketing e produções audiovisuais." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=1200&h=630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nuvyo - Filmagem e Fotografia com Drones" />
        <meta name="twitter:description" content="Serviços profissionais de filmagem e fotografia aérea com drones para eventos e marketing." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <ProductFAQSchema
        productName="Nuvyo - Filmagem e Fotografia com Drones"
        faqs={nuvyoFAQs}
        productUrl="https://operadora.legal/produtos/nuvyo"
      />
      
      <HowToSchema
        name="Como contratar filmagem aérea com Nuvyo"
        description="Guia completo para produção audiovisual com drones profissionais"
        steps={nuvyoSteps}
        totalTime="P2W"
        estimatedCost="A partir de R$ 850"
        supply={["Local de filmagem", "Briefing detalhado", "Autorizações necessárias"]}
        tool={["Drones 8K", "Equipamento de edição", "Software de pós-produção"]}
      />
      
      <CaseStudyStructuredData
        caseStudies={nuvyoCaseStudies}
        productName="Nuvyo"
        companyName="LEGAL TechCo"
      />
      
      <TechnicalDocumentationAI
        productName="Nuvyo"
        version="1.4"
        specifications={nuvyoSpecs}
        apiEndpoints={[]}
        integrations={["Adobe Premiere", "DaVinci Resolve", "Final Cut Pro", "Plataformas de entrega"]}
        systemRequirements={["Condições climáticas favoráveis", "Autorização ANAC quando necessário", "Acesso ao local"]}
        securityFeatures={["Pilotos certificados", "Seguro de equipamentos", "Backup de dados", "Entrega segura"]}
        performance={{
          "cpu": "Processamento de vídeo 8K em tempo real",
          "memory": "Armazenamento seguro de footage",
          "network": "Upload rápido para entrega",
          "storage": "Backup automático em nuvem"
        }}
        deployment={["Serviço sob demanda", "Contratos mensais", "Pacotes de eventos"]}
        support={{
          sla: "Atendimento em 24h",
          channels: ["Suporte técnico", "WhatsApp", "Email"],
          documentation: "Guia de filmagem e checklist de pré-produção"
        }}
      />
      
      <MetricsAndBenchmarksAI
        productName="Nuvyo"
        benchmarks={nuvyoBenchmarks}
        industries={["Eventos", "Marketing", "Imobiliário", "Turismo"]}
        roiCalculator={{ enabled: true, defaultInvestment: 20000, benefitCategories: ["Economia de produção", "Agilidade de entrega", "Qualidade de imagem"] }}
      />
      
      <RealUserMonitoring
        enabled={true}
        sampleRate={0.1}
        endpoint="/api/rum/nuvyo"
      />
      
      <ConversationalAIData
        productName="Nuvyo"
        flows={[
          { intent: "drone_filming", patterns: ["filmagem drone", "vídeo aéreo", "drone profissional"], responses: [{ text: "Nuvyo oferece filmagem profissional 8K com drones certificados, qualidade cinematográfica para eventos e marketing.", context: "Equipe certificada e equipamentos premium", followUp: ["Ver portfólio", "Solicitar orçamento"] }] },
          { intent: "cost_comparison", patterns: ["preço filmagem", "custo drone", "orçamento"], responses: [{ text: "60% mais econômico que helicóptero tradicional, com qualidade superior e flexibilidade total de ângulos.", context: "Economia sem comprometer qualidade", followUp: ["Comparar pacotes", "Calcular orçamento"] }] }
        ]}
        knowledgeBase={{
          concepts: [{ term: "Filmagem Aérea", definition: "Captação de imagens com drones", synonyms: ["Vídeo drone", "Aéreo"], relatedTerms: ["Pós-produção", "Estabilização"] }],
          processes: [{ name: "Fluxo de Produção", steps: ["Briefing", "Planejamento", "Captação", "Pós-produção"], duration: "1-2 semanas", requirements: ["Local", "Autorizações", "Briefing"] }],
          troubleshooting: [{ issue: "Clima instável", symptoms: ["Vento", "Chuva"], solutions: ["Reagendar", "Plano B indoor"], priority: "high" }]
        }}
        naturalLanguagePatterns={{
          questions: ["Qual o prazo de entrega?", "Qual a qualidade das imagens?"],
          commands: ["Enviar orçamento", "Agendar captação"],
          comparisons: ["Drone vs helicóptero", "8K vs 4K"],
          benefits: ["Qualidade cinematográfica", "Entrega rápida", "Economia"]
        }}
      />
      
      <Breadcrumbs />

      <main>
        <NuvyoHero />
        <NuvyoStats />
        <NuvyoFeatures />
        <NuvyoBenefits />
        <NuvyoProcess />
        <NuvyoUseCases />
        <NuvyoTestimonials />
        <NuvyoDemo />
        <NuvyoFAQ />
        
        <CallToAction
          title="Pronto para Capturar Imagens Incríveis?"
          subtitle="Entre em contato conosco e descubra como o Nuvyo pode transformar seus projetos com filmagem e fotografia aérea profissional."
          buttonText="Solicitar Orçamento"
          buttonLink="/contato?subject=nuvyo"
          secondaryButtonText="Ver Demonstração"
          secondaryButtonLink="#demo"
          background="gradient"
        />
      </main>
    </>
  );
};

export default NuvyoPage;
