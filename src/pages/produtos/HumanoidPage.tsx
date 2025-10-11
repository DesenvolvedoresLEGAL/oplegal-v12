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
import HumanoidPricingPreview from '@/components/humanoid/HumanoidPricingPreview';
import HumanoidTimeToValueSection from '@/components/humanoid/HumanoidTimeToValueSection';
import HumanoidVisionSection from '@/components/humanoid/HumanoidVisionSection';
import HumanoidCTA from '@/components/humanoid/HumanoidCTA';
import HumanoidFAQ from '@/components/humanoid/HumanoidFAQ';

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
    { label: 'HUMANOID™', path: '/produtos/humanoid' }
  ];

  return (
    <>
      <Helmet>
        <title>HUMANOID™ - Sistema Nervoso Central de IA para Empresas | LEGAL</title>
        <meta name="description" content="HUMANOID™: Workspace de IA que conecta dados, processos e agentes produtivos. Entenda, decida e aja automaticamente com governança, segurança e ROI mensurável." />
        <meta name="keywords" content="HUMANOID, workspace IA, sistema nervoso empresarial, gestão inteligente, IA empresarial, automação inteligente, LEGAL" />
        <meta property="og:title" content="HUMANOID™ - Sistema Nervoso Central de IA para Empresas" />
        <meta property="og:description" content="Workspace de IA que conecta dados, processos e agentes produtivos para empresas inteligentes." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://operadora.legal/produtos/humanoid" />
      </Helmet>

      {/* Structured Data for SEO */}
      <SoftwareApplicationSchema
        name="HUMANOID™"
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
        name="HUMANOID™ - Sistema Nervoso Central de IA"
        description="Workspace de IA que conecta dados, processos e agentes produtivos"
        url="https://operadora.legal/produtos/humanoid"
        breadcrumb={[
          { name: "Home", url: "https://operadora.legal" },
          { name: "Produtos", url: "https://operadora.legal/produtos" },
          { name: "HUMANOID™", url: "https://operadora.legal/produtos/humanoid" }
        ]}
      />

      <ArticleSchema
        headline="HUMANOID™: O Sistema Nervoso Central da Sua Empresa"
        description="Como o HUMANOID transforma empresas em organismos inteligentes através da IA"
        url="https://operadora.legal/produtos/humanoid"
        datePublished="2025-01-15"
        keywords={["HUMANOID", "IA empresarial", "gestão inteligente", "workspace", "automação"]}
      />

      <main className="bg-gray-900">
        <Breadcrumbs items={breadcrumbItems} />

        <HumanoidProductHero
          headline="O Sistema Nervoso Central da Sua Empresa"
          subheadline="Um workspace de Inteligência Artificial que conecta dados, processos e agentes produtivos para entender, decidir e agir no seu negócio — com governança, segurança e ROI mensurável."
        />

        <HumanoidProblemSection />
        <HumanoidSolutionSection />
        <HumanoidLayersSection />
        <HumanoidUseCases />
        <HumanoidSecurityFeatures />
        <HumanoidResultsSection />
        <HumanoidPricingPreview />
        <HumanoidTimeToValueSection />
        <HumanoidVisionSection />
        
        <HumanoidCTA
          headline="Crie sua conta gratuita agora"
          subheadline="Conecte seus sistemas, ative seus primeiros agentes e veja o HUMANOID agir. Transforme sua empresa em um organismo inteligente."
          primaryCTA={{ label: "Ativar workspace gratuito", link: "/contato?produto=humanoid" }}
          secondaryCTA={{ label: "", link: "" }}
        />

        <HumanoidFAQ />
      </main>

      <ProductFAQSchema
        productName="HUMANOID™"
        faqs={[
          {
            question: "O que é o HUMANOID?",
            answer: "O HUMANOID é um workspace de IA que conecta dados, processos e agentes produtivos para empresas."
          },
          {
            question: "Como funciona o sistema de créditos?",
            answer: "O HUMANOID opera por créditos chamados VOLTS, consumidos por ações, inferências, voz e automações."
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
        productName="HUMANOID™"
        companyName="LEGAL TechCo"
      />
    </>
  );
};

export default HumanoidPage;
