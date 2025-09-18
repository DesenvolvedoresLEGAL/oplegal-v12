
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
    { 
      metric: "Redução de Custos", 
      industry: "Limpeza Predial", 
      average: 30, 
      ourProduct: 70, 
      improvement: 40, 
      unit: "%", 
      description: "Economia comparada à limpeza tradicional com andaimes"
    },
    { 
      metric: "Redução de Tempo", 
      industry: "Manutenção", 
      average: 25, 
      ourProduct: 60, 
      improvement: 35, 
      unit: "%", 
      description: "Tempo de execução vs métodos convencionais"
    },
    { 
      metric: "Eliminação de Riscos", 
      industry: "Segurança do Trabalho", 
      average: 50, 
      ourProduct: 100, 
      improvement: 50, 
      unit: "%", 
      description: "Eliminação total de riscos de trabalho em altura"
    }
  ];

  const brilixSpecs = [
    { name: "Altura Máxima de Operação", value: "120m", description: "Edifícios até 40 andares", unit: "metros" },
    { name: "Autonomia de Voo", value: "45min", description: "Tempo contínuo de operação", unit: "minutos" },
    { name: "Capacidade do Tanque", value: "20L", description: "Solução de limpeza", unit: "litros" },
    { name: "Certificação", value: "ANAC", description: "Homologado para uso comercial", unit: "certificação" }
  ];

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
        version="2.0"
        specifications={brilixSpecs}
        apiEndpoints={[]}
        integrations={["Sistemas de Facilities", "ERPs de Manutenção", "Plataformas de Agendamento"]}
        systemRequirements={["Espaço para decolagem", "Condições climáticas favoráveis", "Autorização ANAC"]}
        securityFeatures={["Operadores certificados", "Sistemas redundantes", "Sensores de obstáculo", "Seguro total"]}
        performance={{
          "Altura máxima": "120m",
          "Autonomia": "45min",
          "Eficiência": "95%"
        }}
        deployment={["Serviço sob demanda", "Contratos mensais", "Manutenção programada"]}
        support={{
          sla: "99.9% disponibilidade",
          channels: ["Suporte técnico 24/7", "WhatsApp", "Email"],
          documentation: "Manual completo e treinamento incluído"
        }}
      />
      
      <MetricsAndBenchmarksAI
        productName="Brilix"
        benchmarks={brilixBenchmarks}
        industries={["Limpeza Predial", "Manutenção", "Segurança do Trabalho"]}
        roiCalculator={{
          enabled: true,
          defaultInvestment: 50000,
          benefitCategories: ["Redução de custos", "Eliminação de riscos", "Aumento de eficiência"]
        }}
      />
      
      <RealUserMonitoring
        enabled={true}
        sampleRate={0.1}
        endpoint="/api/rum/brilix"
      />
      
      <ConversationalAIData
        productName="Brilix"
        flows={[
          {
            intent: "cleaning_safety",
            patterns: ["segurança limpeza", "risco altura", "acidente trabalho", "drone seguro"],
            responses: [
              {
                text: "Brilix elimina 100% dos riscos de trabalho em altura usando drones autônomos certificados ANAC.",
                context: "Segurança é nossa prioridade. Operadores certificados e sistemas redundantes garantem operação segura.",
                followUp: ["Como funciona certificação?", "Quais seguros inclusos?"]
              }
            ]
          },
          {
            intent: "cost_reduction", 
            patterns: ["economia limpeza", "reduzir custos", "custo andaime", "preço limpeza"],
            responses: [
              {
                text: "Oferecemos até 70% de economia comparado à limpeza tradicional, eliminando andaimes e reduzindo tempo.",
                context: "Eficiência operacional traduzida em economia real para sua empresa.",
                followUp: ["Calcular ROI", "Solicitar orçamento"]
              }
            ]
          }
        ]}
        knowledgeBase={{
          concepts: [
            {
              term: "Limpeza com Drone",
              definition: "Uso de aeronaves não tripuladas para limpeza em altura",
              synonyms: ["Drone limpeza", "Limpeza aérea", "Limpeza automatizada"],
              relatedTerms: ["Segurança do trabalho", "Manutenção predial", "Eficiência operacional"]
            }
          ],
          processes: [
            {
              name: "Processo de Limpeza Brilix",
              steps: ["Avaliação do local", "Planejamento de voo", "Execução da limpeza", "Relatório final"],
              duration: "2-4 horas",
              requirements: ["Espaço para decolagem", "Condições climáticas favoráveis", "Autorização ANAC"]
            }
          ],
          troubleshooting: [
            {
              issue: "Condições climáticas desfavoráveis",
              symptoms: ["Vento forte", "Chuva", "Baixa visibilidade"],
              solutions: ["Reagendamento automático", "Monitoramento meteorológico", "Backup de equipamentos"],
              priority: "high"
            }
          ]
        }}
        naturalLanguagePatterns={{
          questions: [
            "Como funciona a limpeza com drone?",
            "É seguro usar drones para limpeza em altura?"
          ],
          commands: [
            "Quero um orçamento Brilix",
            "Agendar avaliação técnica"
          ],
          comparisons: [
            "Brilix vs limpeza tradicional",
            "Drone vs andaime"
          ],
          benefits: [
            "Redução de custos",
            "Eliminação de riscos",
            "Execução mais rápida"
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
