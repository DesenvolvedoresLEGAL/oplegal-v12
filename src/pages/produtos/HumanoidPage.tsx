import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/Breadcrumbs';

// Novos componentes do Manifesto
import HumanoidManifestoHero from '@/components/humanoid/HumanoidManifestoHero';
import HumanoidTextBlock from '@/components/humanoid/HumanoidTextBlock';
import HumanoidSplit from '@/components/humanoid/HumanoidSplit';
import HumanoidQuote from '@/components/humanoid/HumanoidQuote';
import HumanoidColumns from '@/components/humanoid/HumanoidColumns';
import HumanoidProductHero from '@/components/humanoid/HumanoidProductHero';
import HumanoidModules from '@/components/humanoid/HumanoidModules';
import HumanoidSecurityFeatures from '@/components/humanoid/HumanoidSecurityFeatures';
import HumanoidPricingPreview from '@/components/humanoid/HumanoidPricingPreview';
import HumanoidCTA from '@/components/humanoid/HumanoidCTA';

// Componentes mantidos para SEO
import HumanoidFAQ from '@/components/humanoid/HumanoidFAQ';

// SEO Components
import ProductFAQSchema from '@/components/seo/ProductFAQSchema';
import HowToSchema from '@/components/seo/HowToSchema';
import CaseStudyStructuredData from '@/components/seo/CaseStudyStructuredData';
import SoftwareApplicationSchema from '@/components/seo/SoftwareApplicationSchema';
import WebPageSchema from '@/components/seo/WebPageSchema';
import ArticleSchema from '@/components/seo/ArticleSchema';

const HumanoidPage = () => {
  // Pilares do manifesto
  const manifestoPillars = [
    {
      headline: "PLANEJAMENTO VIVO",
      body: "Transforme metas em ações inteligentes. Cada decisão aprendendo com a anterior."
    },
    {
      headline: "GESTÃO AUTOMÁTICA",
      body: "Relatórios, alertas e insights operando como um cérebro organizacional."
    },
    {
      headline: "CULTURA CONECTADA",
      body: "Unifique times, dados e emoções num único espaço de consciência empresarial."
    }
  ];

  // Benefícios do produto
  const productBenefits = [
    {
      headline: "🔮 Clareza em tempo real",
      body: "Veja tudo o que acontece na empresa em um só painel — do comercial ao financeiro."
    },
    {
      headline: "⚙️ Automação inteligente",
      body: "Fluxos que se autoajustam e tomam decisões baseadas em dados, não em achismos."
    },
    {
      headline: "🧠 Cultura viva",
      body: "O HUMANOID entende o DNA da sua organização e impulsiona a evolução do time com base em propósito e performance."
    }
  ];

  const breadcrumbItems = [
    { label: 'Produtos', path: '/produtos' },
    { label: 'HUMANOID™', path: '/produtos/humanoid' }
  ];

  return (
    <>
      <Helmet>
        <title>HUMANOID™ - Sistema Nervoso Central de IA para Empresas | LEGAL</title>
        <meta name="description" content="HUMANOID™: O primeiro workspace de IA para CNPJs que integra dados, pessoas e processos em um sistema nervoso corporativo. Planejamento vivo, gestão automática e cultura conectada." />
        <meta name="keywords" content="HUMANOID, workspace IA, sistema nervoso empresarial, gestão inteligente, IA empresarial, Blue, FitScore, LinkAI, MagicPass, Eventrix, LEGAL" />
        <meta property="og:title" content="HUMANOID™ - Sistema Nervoso Central de IA para Empresas" />
        <meta property="og:description" content="O primeiro workspace que integra dados, pessoas e processos em um sistema nervoso corporativo com IA." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://operadora.legal/produtos/humanoid" />
      </Helmet>

      {/* Structured Data for SEO */}
      <SoftwareApplicationSchema
        name="HUMANOID™"
        description="Sistema Nervoso Central de IA para empresas que integra dados, pessoas e processos"
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
        description="O primeiro workspace de IA para CNPJs que integra dados, pessoas e processos em um sistema nervoso corporativo"
        url="https://operadora.legal/produtos/humanoid"
        breadcrumb={[
          { name: "Home", url: "https://operadora.legal" },
          { name: "Produtos", url: "https://operadora.legal/produtos" },
          { name: "HUMANOID™", url: "https://operadora.legal/produtos/humanoid" }
        ]}
      />

      <ArticleSchema
        headline="HUMANOID™: O Manifesto da Nova Gestão Empresarial"
        description="Como o HUMANOID transforma empresas em organismos vivos e inteligentes através da IA"
        url="https://operadora.legal/produtos/humanoid"
        datePublished="2025-01-15"
        keywords={["HUMANOID", "IA empresarial", "gestão inteligente", "workspace", "sistema nervoso corporativo"]}
      />

      <main className="bg-humanoid-dark">
        <Breadcrumbs items={breadcrumbItems} />

        {/* ===== PARTE 1: MANIFESTO ===== */}
        
        {/* Hero Manifesto */}
        <HumanoidManifestoHero />

        {/* Problema: Empresas quebram por falta de consciência */}
        <HumanoidTextBlock
          headline="Empresas não quebram por falta de talento."
          body="Quebram por falta de consciência. Falta de gestão. Falta de planejamento. Falta de autoconhecimento organizacional."
          layout="centered-narrow"
          animation="fade-up"
        />

        {/* Contexto histórico */}
        <HumanoidTextBlock
          headline="Durante décadas, líderes e times lutaram contra os mesmos inimigos invisíveis:"
          body="Desorganização. Retrabalho. Decisões tardias. Falta de inteligência emocional para conduzir o próprio negócio. As planilhas ficaram mais bonitas, os sistemas mais caros, mas o problema essencial continuou: as empresas ainda não pensam por si."
          layout="wide"
          animation="slide-up"
        />

        {/* Split - E se empresas pudessem pensar? */}
        <HumanoidSplit
          image="/lovable-uploads/409a6cff-65e1-4ae6-afc3-41bc8ba21267.png"
          headline="E se as empresas pudessem pensar, aprender e se adaptar sozinhas?"
          body="Foi assim que nasceu o HUMANOID — o primeiro Sistema Nervoso Central de IA para empresas. Uma ponte entre inteligência humana e inteligência artificial, criada para transformar gestão, cultura e performance em uma única sinfonia."
          animation="parallax"
        />

        {/* Não é um software */}
        <HumanoidTextBlock
          headline="O HUMANOID não é um software."
          body="É uma nova forma de liderar. Assim como a Lovable transformou a barreira do código em ponte, o HUMANOID transforma a barreira da gestão em consciência. Agora, qualquer empresa pode operar com clareza, propósito e inteligência em tempo real."
          layout="centered-narrow"
          animation="fade-up"
        />

        {/* Quote Manifesto */}
        <HumanoidQuote
          quote="O que antes era privilégio das grandes corporações, agora é poder de todos."
          author="Manifesto HUMANOID™"
          animation="reveal"
        />

        {/* Pilares (3 colunas) */}
        <HumanoidColumns
          columns={manifestoPillars}
          animation="fade-in"
        />

        {/* Visão */}
        <HumanoidTextBlock
          headline="Nossa visão é simples e inegociável:"
          body="Tornar a inteligência empresarial acessível, emocional e exponencial. Não basta usar IA para automatizar — é preciso usá-la para evoluir."
          layout="centered"
          animation="slide-up"
        />

        {/* ===== PARTE 2: PRODUTO ===== */}

        {/* Hero Produto */}
        <HumanoidProductHero
          headline="O Sistema Nervoso Central de IA para empresas."
          subheadline="O HUMANOID™ integra dados, pessoas e processos em um único espaço de consciência empresarial."
        />

        {/* Ponte entre caos e clareza */}
        <HumanoidTextBlock
          headline="A ponte entre o caos e a clareza."
          body="Enquanto a maioria das empresas luta para conectar seus dados e pessoas, o HUMANOID cria uma camada neural que aprende, prediz e atua — permitindo que a sua empresa pense e aja com a inteligência de uma organização viva."
          layout="centered"
          animation="slide-up"
        />

        {/* Split - Workspace */}
        <HumanoidSplit
          image="/lovable-uploads/220ece05-0c66-4a13-9776-2fc0ba324a1f.png"
          headline="Um workspace. Múltiplos cérebros especializados."
          body="O HUMANOID é composto por módulos interconectados — cada um um agente inteligente responsável por uma parte do cérebro da sua empresa."
          imagePosition="right"
          animation="fade-in"
        />

        {/* Módulos (Feature Grid) */}
        <HumanoidModules headline="Os módulos que formam o seu sistema nervoso corporativo." />

        {/* IA que entende */}
        <HumanoidTextBlock
          headline="A IA que entende a sua empresa antes mesmo de você perguntar."
          body="O HUMANOID observa, aprende e antecipa. Ele cruza informações de vendas, operações, finanças e pessoas, criando previsões e recomendações práticas — um copiloto corporativo que nunca dorme."
          layout="centered"
          animation="fade-in"
        />

        {/* O que faz por você (3 colunas) */}
        <HumanoidColumns
          headline="O que o HUMANOID faz por você:"
          columns={productBenefits}
          animation="fade-up"
        />

        {/* Quote Produto */}
        <HumanoidQuote
          quote="As empresas do futuro não serão comandadas apenas por líderes. Serão guiadas por sistemas conscientes."
          author="Manifesto HUMANOID™"
          animation="reveal"
        />

        {/* Integrações (Split) */}
        <HumanoidSplit
          headline="Integra-se ao que você já usa."
          body="Google, Microsoft, Slack, WhatsApp, CRM, ERP e muito mais. O HUMANOID se conecta a dezenas de ferramentas via API e se torna o seu painel unificado de comando."
          image="/lovable-uploads/37354c92-0e52-4334-b1df-6e0df95df322.png"
          animation="fade-in"
        />

        {/* Segurança */}
        <HumanoidSecurityFeatures />

        {/* Pricing Preview */}
        <HumanoidPricingPreview />

        {/* FAQ (mantido para SEO) */}
        <HumanoidFAQ />

        {/* CTA Final */}
        <HumanoidCTA
          headline="Sua empresa pronta para pensar com IA."
          subheadline="Crie sua conta gratuita em minutos e descubra o poder do HUMANOID."
          primaryCTA={{ label: "Criar conta", link: "/contato?produto=humanoid" }}
          secondaryCTA={{ label: "Agendar demonstração", link: "/contato" }}
        />
      </main>

      {/* SEO Schemas */}
      <ProductFAQSchema
        productName="HUMANOID™"
        faqs={[
          {
            question: "O que é o HUMANOID?",
            answer: "O HUMANOID é o primeiro Sistema Nervoso Central de IA para empresas, que integra dados, pessoas e processos em um workspace inteligente."
          },
          {
            question: "Como o HUMANOID ajuda minha empresa?",
            answer: "O HUMANOID oferece planejamento vivo, gestão automática e cultura conectada através de módulos especializados de IA que aprendem e se adaptam ao seu negócio."
          },
          {
            question: "Quais módulos compõem o HUMANOID?",
            answer: "O HUMANOID é composto por Blue (BI), Humanoid Auto (execução), FitScore (cultura), LinkAI (conexões), MagicPass (reconhecimento facial) e Eventrix (eventos)."
          }
        ]}
      />

      <HowToSchema
        name="Como implementar o HUMANOID na sua empresa"
        description="Passo a passo para começar a usar o sistema nervoso de IA"
        steps={[
          {
            name: "Criar conta",
            text: "Crie sua conta gratuita no HUMANOID em minutos",
            url: "https://operadora.legal/contato?produto=humanoid"
          },
          {
            name: "Conectar ferramentas",
            text: "Integre o HUMANOID com suas ferramentas existentes (Google, Microsoft, CRM, ERP)",
            url: "https://operadora.legal/produtos/humanoid"
          },
          {
            name: "Ativar módulos",
            text: "Escolha e ative os módulos que fazem sentido para seu negócio",
            url: "https://operadora.legal/produtos/humanoid"
          },
          {
            name: "Treinar a IA",
            text: "Deixe o HUMANOID aprender sobre sua empresa e começar a gerar insights",
            url: "https://operadora.legal/produtos/humanoid"
          }
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
