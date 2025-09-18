
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BrilixHero from '@/components/brilix/BrilixHero';
import BrilixFeatures from '@/components/brilix/BrilixFeatures';
import BrilixStats from '@/components/brilix/BrilixStats';
import BrilixBenefits from '@/components/brilix/BrilixBenefits';
import BrilixUseCases from '@/components/brilix/BrilixUseCases';
import BrilixTestimonials from '@/components/brilix/BrilixTestimonials';
import BrilixDemo from '@/components/brilix/BrilixDemo';
import BrilixFAQ from '@/components/brilix/BrilixFAQ';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductFAQSchema from '@/components/seo/ProductFAQSchema';
import HowToSchema from '@/components/seo/HowToSchema';
import CaseStudyStructuredData from '@/components/seo/CaseStudyStructuredData';
import TechnicalDocumentationAI from '@/components/seo/TechnicalDocumentationAI';
import MetricsAndBenchmarksAI from '@/components/seo/MetricsAndBenchmarksAI';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import ConversationalAIData from '@/components/seo/ConversationalAIData';

const BrilixPage = () => {
  const brilixFAQs = [
    {
      question: "Os drones do Brilix são seguros para trabalho em altura?",
      answer: "Sim, nossos drones seguem rigorosas normas de segurança ANAC, possuem sistemas redundantes de voo, sensores de obstáculo e operadores certificados. Reduzem riscos humanos em 100% comparado ao trabalho manual em altura."
    },
    {
      question: "Quais tipos de superfícies o Brilix consegue limpar?",
      answer: "Brilix limpa fachadas de vidro, concreto, metal, painéis solares, estruturas industriais e qualquer superfície em altura. Utilizamos diferentes acessórios e produtos de limpeza conforme o material."
    },
    {
      question: "Qual a economia comparado à limpeza tradicional?",
      answer: "O Brilix oferece até 70% de economia em custos operacionais, elimina riscos de acidentes, reduz tempo de execução em 60% e dispensa andaimes ou equipamentos de acesso em altura."
    }
  ];

  const brilixSteps = [
    {
      name: "Avaliação do Local",
      text: "Inspeção técnica da edificação, análise de altura, tipo de superfície e condições de acesso para planejamento do serviço.",
      url: "https://brilix.operadora.legal/avaliacao"
    },
    {
      name: "Planejamento de Voo",
      text: "Definição de rota do drone, produtos de limpeza adequados e cronograma de execução considerando condições climáticas.",
      url: "https://brilix.operadora.legal/planejamento"
    },
    {
      name: "Execução da Limpeza",
      text: "Operação do drone com equipamento de limpeza especializado, monitoramento em tempo real e controle de qualidade.",
      url: "https://brilix.operadora.legal/execucao"
    },
    {
      name: "Relatório e Manutenção",
      text: "Entrega de relatório com fotos antes/depois, programação de limpezas regulares e manutenção preventiva.",
      url: "https://brilix.operadora.legal/relatorio"
    }
  ];

  const brilixCaseStudies = [
    {
      title: "Shopping Center ABC - 15 andares",
      client: "Grupo Imobiliário XYZ",
      industry: "Varejo",
      challenge: "Limpeza de fachada de vidro de 15 andares com alto risco e custo elevado de andaimes",
      solution: "Implementação do Brilix com drones especializados em limpeza de vidro e sistema de água purificada",
      results: ["70% redução de custos", "Zero acidentes de trabalho", "60% menos tempo de execução"],
      metrics: { "Economia": "70%", "Tempo": "-60%", "Segurança": "100%" },
      duration: "2 dias",
      testimonial: {
        text: "O Brilix revolucionou nossa manutenção predial. Eliminou completamente os riscos e reduziu drasticamente os custos.",
        author: "Ana Costa",
        position: "Gerente de Facilities - Grupo XYZ"
      }
    }
  ];

  const brilixBenchmarks = [
    { metric: "Redução de Custos", value: 70, unit: "%", industry: "Limpeza Predial", comparison: "vs limpeza tradicional" },
    { metric: "Redução de Tempo", value: 60, unit: "%", industry: "Manutenção", comparison: "vs métodos convencionais" },
    { metric: "Eliminação de Riscos", value: 100, unit: "%", industry: "Segurança do Trabalho", comparison: "vs trabalho em altura" },
    { metric: "Eficiência de Limpeza", value: 95, unit: "%", industry: "Serviços", comparison: "qualidade superior" }
  ];

  const brilixSpecs = [
    { name: "Altura Máxima de Operação", value: "120m", description: "Edifícios até 40 andares", unit: "metros" },
    { name: "Autonomia de Voo", value: "45min", description: "Tempo contínuo de operação", unit: "minutos" },
    { name: "Capacidade do Tanque", value: "20L", description: "Solução de limpeza", unit: "litros" },
    { name: "Certificação", value: "ANAC", description: "Homologado para uso comercial", unit: "certificação" }
  ];

const BrilixPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Brilix - Limpeza em Altura com Drone",
    "serviceType": "Cleaning Service",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "description": "Serviço de limpeza em altura com drones autônomos. Solução segura, eficiente e econômica para fachadas, painéis solares, estruturas industriais e edifícios comerciais.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "category": "Drone Services"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Brilix",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza de Fachadas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza de Painéis Solares"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Inspeção e Limpeza Industrial"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Brilix - Limpeza em Altura com Drone Autônomo | LEGAL</title>
        <meta name="description" content="Brilix: Revolução na limpeza em altura com drones autônomos. Serviço seguro, eficiente e sustentável para fachadas, painéis solares e estruturas industriais. Redução de custos e riscos." />
        <meta name="keywords" content="limpeza com drone, limpeza em altura, drone limpeza, fachada prédio, painéis solares, limpeza industrial, segurança trabalho altura, drone autônomo, LEGAL Brilix" />
        <link rel="canonical" href="https://operadora.legal/produtos/brilix" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <ProductFAQSchema
        productName="Brilix - Limpeza em Altura com Drone"
        faqs={brilixFAQs}
        productUrl="https://operadora.legal/produtos/brilix"
      />
      
      <HowToSchema
        name="Como implementar limpeza com drone Brilix"
        description="Guia completo para limpeza segura em altura usando drones autônomos"
        steps={brilixSteps}
        totalTime="P2D"
        estimatedCost="A partir de R$ 3.500"
        supply={["Acesso ao local", "Energia elétrica", "Permissões necessárias"]}
        tool={["Drone Brilix", "Equipamento de limpeza", "Sistema de monitoramento"]}
      />
      
      <CaseStudyStructuredData
        caseStudies={brilixCaseStudies}
        productName="Brilix"
        companyName="LEGAL TechCo"
      />
      
      <TechnicalDocumentationAI
        productName="Brilix"
        category="Drone Cleaning Service"
        description="Serviço de limpeza em altura com drones autônomos certificados"
        specifications={brilixSpecs}
        apiEndpoints={[]}
        integrations={["Sistemas de Facilities", "ERPs de Manutenção", "Plataformas de Agendamento"]}
        systemRequirements={["Espaço para decolagem", "Condições climáticas favoráveis", "Autorização ANAC"]}
        securityFeatures={["Operadores certificados", "Sistemas redundantes", "Sensores de obstáculo", "Seguro total"]}
        performanceMetrics={[
          { metric: "Altura máxima", value: "120m" },
          { metric: "Autonomia", value: "45min" },
          { metric: "Eficiência", value: "95%" }
        ]}
        deploymentOptions={["Serviço sob demanda", "Contratos mensais", "Manutenção programada"]}
        supportOptions={["Suporte técnico 24/7", "Manutenção preventiva", "Treinamento", "Seguro incluído"]}
      />
      
      <MetricsAndBenchmarksAI
        productName="Brilix"
        benchmarks={brilixBenchmarks}
        industries={["Varejo", "Corporativo", "Industrial", "Residencial"]}
        enableROICalculator={true}
      />
      
      <RealUserMonitoring
        enabled={true}
        sampleRate={0.1}
        endpoint="/api/rum/brilix"
      />
      
      <ConversationalAIData
        productName="Brilix"
        category="Limpeza com Drones"
        primaryKeywords={["limpeza com drone", "limpeza em altura", "drone limpeza"]}
        conversationalFlows={[
          {
            intent: "cleaning_safety",
            keywords: ["segurança limpeza", "risco altura", "acidente trabalho"],
            response: "Brilix elimina 100% dos riscos de trabalho em altura usando drones autônomos certificados."
          },
          {
            intent: "cost_reduction",
            keywords: ["economia limpeza", "reduzir custos", "custo andaime"],
            response: "Oferecemos até 70% de economia comparado à limpeza tradicional, eliminando andaimes e reduzindo tempo."
          }
        ]}
        useCases={[
          "Limpeza de fachadas de edifícios comerciais",
          "Manutenção de painéis solares",
          "Limpeza industrial em estruturas altas"
        ]}
        benefits={[
          "70% de redução de custos",
          "100% de eliminação de riscos",
          "60% menos tempo de execução"
        ]}
        pricing={{
          plans: [
            { name: "Serviço Avulso", price: "R$ 250/hora", features: ["Limpeza sob demanda", "Operador certificado", "Seguro incluído"] },
            { name: "Contrato Mensal", price: "R$ 1.500/mês", features: ["2 limpezas/mês", "Manutenção preventiva", "Desconto 30%"] },
            { name: "Contrato Anual", price: "R$ 15.000/ano", features: ["Limpezas ilimitadas", "Prioridade", "Desconto 50%"] }
          ]
        }}
      />
      
      <Breadcrumbs />
      
      <main>
        <BrilixHero />
        <BrilixFeatures />
        <BrilixStats />
        <BrilixBenefits />
        <BrilixUseCases />
        <BrilixTestimonials />
        <BrilixDemo />
        <BrilixFAQ />
        <CallToAction
          title="Revolucione sua Limpeza em Altura"
          subtitle="Elimine riscos, reduza custos e aumente a eficiência com nossa solução de limpeza com drones. Solicite um orçamento personalizado."
          buttonText="Solicitar Orçamento"
          buttonLink="/contato?produto=brilix"
          secondaryButtonText="Ver Demonstração"
          secondaryButtonLink="#demo"
          background="gradient"
        />
      </main>
    </>
  );
};

export default BrilixPage;
