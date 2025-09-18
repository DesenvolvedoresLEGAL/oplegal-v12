
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
    { metric: "Qualidade de Imagem", value: 8, unit: "K", industry: "Produção Audiovisual", comparison: "vs 4K padrão mercado" },
    { metric: "Satisfação do Cliente", value: 98, unit: "%", industry: "Serviços", comparison: "NPS superior" },
    { metric: "Prazo de Entrega", value: 48, unit: "horas", industry: "Produção", comparison: "vs 7 dias mercado" },
    { metric: "Custo vs Tradicional", value: 60, unit: "%", industry: "Audiovisual", comparison: "economia vs helicóptero" }
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
        category="Drone Photography Service"
        description="Serviços profissionais de filmagem e fotografia aérea com drones certificados"
        specifications={nuvyoSpecs}
        apiEndpoints={[]}
        integrations={["Adobe Premiere", "DaVinci Resolve", "Final Cut Pro", "Plataformas de entrega"]}
        systemRequirements={["Condições climáticas favoráveis", "Autorização ANAC quando necessário", "Acesso ao local"]}
        securityFeatures={["Pilotos certificados", "Seguro de equipamentos", "Backup de dados", "Entrega segura"]}
        performanceMetrics={[
          { metric: "Qualidade máxima", value: "8K" },
          { metric: "Autonomia", value: "40min" },
          { metric: "Satisfação", value: "98%" }
        ]}
        deploymentOptions={["Serviço sob demanda", "Contratos mensais", "Pacotes de eventos"]}
        supportOptions={["Suporte técnico", "Edição profissional", "Entrega rápida", "Revisões ilimitadas"]}
      />
      
      <MetricsAndBenchmarksAI
        productName="Nuvyo"
        benchmarks={nuvyoBenchmarks}
        industries={["Eventos", "Marketing", "Imobiliário", "Turismo"]}
        enableROICalculator={true}
      />
      
      <RealUserMonitoring
        enabled={true}
        sampleRate={0.1}
        endpoint="/api/rum/nuvyo"
      />
      
      <ConversationalAIData
        productName="Nuvyo"
        category="Filmagem com Drones"
        primaryKeywords={["filmagem drone", "fotografia aérea", "vídeo drone"]}
        conversationalFlows={[
          {
            intent: "drone_filming",
            keywords: ["filmagem drone", "vídeo aéreo", "drone profissional"],
            response: "Nuvyo oferece filmagem profissional 8K com drones certificados, qualidade cinematográfica para eventos e marketing."
          },
          {
            intent: "cost_comparison",
            keywords: ["preço filmagem", "custo drone", "orçamento"],
            response: "60% mais econômico que helicóptero tradicional, com qualidade superior e flexibilidade total de ângulos."
          }
        ]}
        useCases={[
          "Filmagem de casamentos e eventos especiais",
          "Conteúdo para marketing e redes sociais",
          "Documentários e produções cinematográficas"
        ]}
        benefits={[
          "Qualidade cinematográfica 8K",
          "60% economia vs métodos tradicionais",
          "Entrega em 48-72h"
        ]}
        pricing={{
          plans: [
            { name: "Básico", price: "R$ 850", features: ["2h filmagem", "Edição simples", "Entrega 72h"] },
            { name: "Premium", price: "R$ 2.500", features: ["Dia completo", "Edição avançada", "Entrega 48h"] },
            { name: "Cinematográfico", price: "R$ 8.500", features: ["Múltiplos dias", "Pós-produção completa", "Equipe dedicada"] }
          ]
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
