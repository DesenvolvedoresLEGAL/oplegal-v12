
import React from 'react';
import { Helmet } from 'react-helmet-async';
import LinkAIHero from '@/components/linkai/LinkAIHero';
import LinkAIFeatures from '@/components/linkai/LinkAIFeatures';
import LinkAIStats from '@/components/linkai/LinkAIStats';
import LinkAIBenefits from '@/components/linkai/LinkAIBenefits';
import LinkAIProcess from '@/components/linkai/LinkAIProcess';
import LinkAIUseCases from '@/components/linkai/LinkAIUseCases';
import LinkAITestimonials from '@/components/linkai/LinkAITestimonials';
import LinkAIDemo from '@/components/linkai/LinkAIDemo';
import LinkAIFAQ from '@/components/linkai/LinkAIFAQ';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductFAQSchema from '@/components/seo/ProductFAQSchema';
import ProductSchema from '@/components/seo/ProductSchema';
import ReviewSchema from '@/components/seo/ReviewSchema';
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

const LinkAIPage = () => {
  const linkAIFAQs = [
    {
      question: "Como o LinkAI faz o matching de pessoas?",
      answer: "O LinkAI analisa perfis profissionais, interesses, objetivos de networking e histórico de interações usando algoritmos de machine learning. A IA identifica pontos de sinergia e oportunidades de valor mútuo para criar conexões de alta qualidade.",
      author: "Especialista em IA LEGAL",
      dateCreated: "2024-01-15T10:00:00Z",
      upvoteCount: 45,
      answerCount: 1
    },
    {
      question: "Qual a taxa de sucesso do matching?",
      answer: "Nossa plataforma possui 95% de satisfação nas conexões realizadas, com 3x mais conexões relevantes comparado ao networking tradicional e ROI 5x superior para organizadores de eventos.",
      author: "Analista de Performance LEGAL",
      dateCreated: "2024-01-20T14:30:00Z",
      upvoteCount: 52,
      answerCount: 1
    },
    {
      question: "LinkAI funciona para que tipos de eventos?",
      answer: "LinkAI é ideal para eventos B2B, conferências corporativas, feiras de negócios, networking empresarial, meetups profissionais e qualquer evento onde networking qualificado é prioritário.",
      author: "Consultor de Soluções LEGAL",
      dateCreated: "2024-02-01T09:15:00Z",
      upvoteCount: 38,
      answerCount: 1
    }
  ];

  const linkAIReviews = [
    {
      author: "Marina Santos, Diretora de Eventos TechConnect",
      rating: 5,
      reviewBody: "LinkAI transformou completamente nossos eventos de networking. As conexões são 10x mais relevantes e nossos participantes relatam ROI real. Implementação rápida e suporte excelente da LEGAL.",
      datePublished: "2024-01-12T00:00:00Z",
      title: "Transformação completa no networking",
      pros: ["Conexões altamente relevantes", "Interface intuitiva", "Análise de ROI", "Suporte excepcional"],
      cons: [],
      wouldRecommend: true
    },
    {
      author: "Eduardo Lima, CEO StartupHub",
      rating: 5,
      reviewBody: "Usamos LinkAI em nosso último evento com 2000 participantes. A taxa de matching foi impressionante: 95% de satisfação. O sistema identifica oportunidades que jamais encontraríamos manualmente.",
      datePublished: "2024-02-08T00:00:00Z",
      title: "95% de satisfação em evento com 2000 pessoas",
      pros: ["Taxa de matching excepcional", "Escalabilidade", "Algoritmos inteligentes", "Resultados mensuráveis"],
      cons: [],
      wouldRecommend: true
    },
    {
      author: "Patricia Oliveira, Organizadora de Eventos B2B",
      rating: 5,
      reviewBody: "LinkAI revolucionou nossos eventos corporativos. Os participantes fazem conexões estratégicas reais, e conseguimos medir o impacto direto no business. É uma ferramenta indispensável.",
      datePublished: "2024-02-25T00:00:00Z",
      title: "Revolução no networking B2B",
      pros: ["Conexões estratégicas", "Impacto mensurável", "Ferramenta indispensável", "Resultados comprovados"],
      cons: [],
      wouldRecommend: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>LinkAI - Matchmaking Inteligente com IA | LEGAL</title>
        <meta name="description" content="LinkAI: Plataforma de matchmaking com IA para networking de alta qualidade. 95% de satisfação, 3x mais conexões relevantes e ROI 5x superior." />
        <meta name="keywords" content="LinkAI, matchmaking IA, networking inteligente, eventos B2B, conexões empresariais, LEGAL" />
        <meta property="og:title" content="LinkAI - Matchmaking Inteligente com IA | LEGAL" />
        <meta property="og:description" content="Transforme networking em eventos com LinkAI: IA que conecta pessoas certas no momento certo para máximo valor." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://legal.com.br/produtos/linkai" />
        <link rel="canonical" href="https://legal.com.br/produtos/linkai" />
      </Helmet>
      
      {/* Enhanced SEO Components */}
      <ProductSchema
        productName="LinkAI - Matchmaking Inteligente com IA"
        description="LinkAI: Plataforma de matchmaking com IA para networking de alta qualidade em eventos. 95% de satisfação, 3x mais conexões relevantes."
        category="Business Software"
        features={["Matchmaking por IA", "Análise de Perfis", "Networking B2B", "ROI Mensurável", "Conexões Inteligentes"]}
        url="https://operadora.legal/produtos/linkai"
        applicationCategory="BusinessApplication"
        operatingSystem="Web-based, Mobile"
        pricing={{
          type: "subscription",
          currency: "BRL",
          priceRange: "R$ 2.000 - R$ 20.000/evento"
        }}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 156,
          bestRating: 5
        }}
        reviews={linkAIReviews}
        manufacturer="LEGAL TechCo"
        brand="LEGAL"
        availability="https://schema.org/InStock"
      />
      
      <ReviewSchema
        productName="LinkAI - Matchmaking Inteligente com IA"
        productUrl="https://operadora.legal/produtos/linkai"
        reviews={linkAIReviews}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 156,
          bestRating: 5,
          worstRating: 1
        }}
        brand="LEGAL"
        manufacturer="LEGAL TechCo"
      />
      
      <ProductFAQSchema
        productName="LinkAI - Matchmaking Inteligente com IA"
        faqs={linkAIFAQs}
        productUrl="https://operadora.legal/produtos/linkai"
        productDescription="Perguntas frequentes sobre LinkAI - plataforma de matchmaking inteligente"
        author={{
          name: "LEGAL TechCo",
          url: "https://operadora.legal"
        }}
        publisher={{
          name: "LEGAL",
          logo: "https://operadora.legal/images/legal-logo.png",
          url: "https://operadora.legal"
        }}
      />
      
      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization 
        contentDomain="technology"
        entityType="service"
        optimizationLevel="advanced"
      />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor enableReporting={true} />
      <AIFeedbackSystem enableRealTimeOptimization={true} />
      <AdvancedFeaturedSnippets 
        pageType="product"
        focusKeyword="LinkAI matchmaking IA"
      />
      <SEOCrawlerOptimization />
      
      <Breadcrumbs />
      
      <main>
        <LinkAIHero />
        <LinkAIFeatures />
        <LinkAIStats />
        <LinkAIBenefits />
        <LinkAIProcess />
        <LinkAIUseCases />
        <LinkAITestimonials />
        <LinkAIDemo />
        <LinkAIFAQ />
        <CallToAction
          title="Pronto para Revolucionar o Networking?"
          subtitle="Implemente LinkAI e transforme seus eventos em experiências de networking extraordinárias"
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=linkai&tipo=demo"
          background="gradient"
        />
      </main>
    </>
  );
};

export default LinkAIPage;
