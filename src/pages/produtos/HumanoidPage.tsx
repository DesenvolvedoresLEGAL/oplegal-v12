import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/Breadcrumbs';

// Componentes da nova estrutura
import HumanoidProductHero from '@/components/humanoid/HumanoidProductHero';
import HumanoidProblemSection from '@/components/humanoid/HumanoidProblemSection';
import HumanoidSolutionSection from '@/components/humanoid/HumanoidSolutionSection';
import HumanoidLayersSection from '@/components/humanoid/HumanoidLayersSection';
import HumanoidUseCases from '@/components/humanoid/HumanoidUseCases';
import HumanoidSecurityFeatures from '@/components/humanoid/HumanoidSecurityFeatures';
import HumanoidResultsSection from '@/components/humanoid/HumanoidResultsSection';
import HumanoidTimeToValueSection from '@/components/humanoid/HumanoidTimeToValueSection';
import HumanoidVisionSection from '@/components/humanoid/HumanoidVisionSection';
import HumanoidCTA from '@/components/humanoid/HumanoidCTA';
import HumanoidFAQ from '@/components/humanoid/HumanoidFAQ';
import HumanoidChatbot from '@/components/humanoid/HumanoidChatbot';

// SEO Components
import ProductFAQSchema from '@/components/seo/ProductFAQSchema';
import HowToSchema from '@/components/seo/HowToSchema';
import CaseStudyStructuredData from '@/components/seo/CaseStudyStructuredData';
import SoftwareApplicationSchema from '@/components/seo/SoftwareApplicationSchema';
import WebPageSchema from '@/components/seo/WebPageSchema';
import ArticleSchema from '@/components/seo/ArticleSchema';

const HumanoidPage = () => {
  const breadcrumbItems = [
    { label: 'Produtos', path: '/produtos' },
    { label: 'Humanoid™', path: '/produtos/humanoid' }
  ];

  return (
    <>
      <Helmet>
        <title>Humanoid™ - Sua empresa acaba de ganhar um cérebro | LEGAL</title>
        <meta name="description" content="O Humanoid é o 1º Sistema Operacional de IA criado para transformar empresas brasileiras em máquinas de execução inteligente. Conecta dados, processos e agentes produtivos com governança e segurança." />
        <meta name="keywords" content="Humanoid, sistema operacional IA, workspace IA, gestão inteligente, IA empresarial, automação inteligente, LEGAL" />
        <meta property="og:title" content="Humanoid™ - Sua empresa acaba de ganhar um cérebro" />
        <meta property="og:description" content="Workspace de IA que conecta dados, processos e agentes produtivos para empresas inteligentes." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://operadora.legal/produtos/humanoid" />
      </Helmet>

      {/* Structured Data for SEO */}
      <SoftwareApplicationSchema
        name="Humanoid™"
        description="Sistema Nervoso Central de IA para empresas que integra dados, processos e agentes produtivos"
        url="https://operadora.legal/produtos/humanoid"
        operatingSystem="Web, iOS, Android"
        applicationCategory="BusinessApplication"
        offers={{
          price: "Sob consulta",
          priceCurrency: "BRL",
          availability: "InStock"
        }}
      />

      <WebPageSchema
        name="Humanoid™ - Sua empresa acaba de ganhar um cérebro"
        description="O 1º Sistema Operacional de IA criado para transformar empresas brasileiras em máquinas de execução inteligente"
        url="https://operadora.legal/produtos/humanoid"
        breadcrumb={[
          { name: "Home", url: "https://operadora.legal" },
          { name: "Produtos", url: "https://operadora.legal/produtos" },
          { name: "Humanoid™", url: "https://operadora.legal/produtos/humanoid" }
        ]}
      />

      <ArticleSchema
        headline="Humanoid™: Sua empresa acaba de ganhar um cérebro"
        description="O 1º Sistema Operacional de IA que transforma empresas brasileiras em máquinas de execução inteligente"
        url="https://operadora.legal/produtos/humanoid"
        datePublished="2025-01-15"
        keywords={["Humanoid", "IA empresarial", "gestão inteligente", "workspace", "automação"]}
      />

      <main>
          <Breadcrumbs items={breadcrumbItems} />

        <HumanoidProductHero
          headline="Sua empresa acaba de ganhar um cérebro."
          subheadline="O Humanoid é o 1º Sistema Operacional de IA criado para transformar empresas brasileiras em máquinas de execução inteligente."
        />

        <HumanoidProblemSection />
        <HumanoidSolutionSection />
        <HumanoidLayersSection />
        <HumanoidUseCases />
        <HumanoidSecurityFeatures />
        <HumanoidResultsSection />
        <HumanoidTimeToValueSection />
        <HumanoidVisionSection />
        
        <HumanoidCTA
          headline="Crie sua conta gratuita agora"
          subheadline="Conecte seus sistemas, ative seus primeiros agentes e veja o Humanoid agir. Transforme sua empresa em um organismo inteligente."
          primaryCTA={{ label: "Ativar workspace gratuito", link: "/signup" }}
          secondaryCTA={{ label: "", link: "" }}
        />

        <HumanoidFAQ />
      </main>

      <HumanoidChatbot />

      <ProductFAQSchema
        productName="Humanoid™"
        faqs={[
          {
            question: "O que é o Humanoid?",
            answer: "O Humanoid é um workspace de IA que conecta dados, processos e agentes produtivos para empresas."
          },
          {
            question: "Como funciona o sistema de créditos?",
            answer: "O Humanoid opera por créditos chamados VOLTS, consumidos por ações, inferências, voz e automações."
          }
        ]}
      />

      <HowToSchema
        name="Como implementar o HUMANOID"
        description="Passo a passo para começar"
        steps={[
          { name: "Criar conta", text: "Crie sua conta gratuita", url: "https://operadora.legal/contato?produto=humanoid" },
          { name: "Conectar sistemas", text: "Integre suas ferramentas", url: "https://operadora.legal/produtos/humanoid" },
          { name: "Ativar agentes", text: "Configure seus agentes", url: "https://operadora.legal/produtos/humanoid" }
        ]}
      />

      <CaseStudyStructuredData
        caseStudies={[]}
        productName="Humanoid™"
        companyName="LEGAL TechCo"
      />
    </>
  );
};

export default HumanoidPage;
