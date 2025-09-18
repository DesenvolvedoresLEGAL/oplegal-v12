import React from "react";
import SEOHead from "@/components/SEOHead";
import PlaudHero from "@/components/plaud/PlaudHero";
import PlaudFeatures from "@/components/plaud/PlaudFeatures";
import PlaudBenefits from "@/components/plaud/PlaudBenefits";
import PlaudUseCases from "@/components/plaud/PlaudUseCases";
import PlaudStats from "@/components/plaud/PlaudStats";
import PlaudDemo from "@/components/plaud/PlaudDemo";
import PlaudTestimonials from "@/components/plaud/PlaudTestimonials";
import PlaudFAQ from "@/components/plaud/PlaudFAQ";
import PlaudPricingSection from "@/components/plaud/PlaudPricingSection";
import CallToAction from "@/components/CallToAction";
import ChatbotButton from "@/components/ChatbotButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductFAQSchema from "@/components/seo/ProductFAQSchema";
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

const PlaudPage = () => {
  const plaudFAQs = [
    {
      question: "Como funciona a gravação de voz do Plaud?",
      answer: "O Plaud utiliza tecnologia avançada de gravação com cancelamento de ruído e processamento de áudio em tempo real. Captura conversas com alta qualidade e as transcreve automaticamente usando IA de processamento de linguagem natural."
    },
    {
      question: "Quantos idiomas o Plaud suporta?",
      answer: "O Plaud suporta mais de 112 idiomas para transcrição e tradução automática, incluindo português brasileiro, inglês, espanhol, francês, alemão, japonês, chinês e muitos outros."
    },
    {
      question: "O Plaud está em conformidade com a LGPD?",
      answer: "Sim, completamente. Todas as gravações são criptografadas localmente no dispositivo e você tem controle total sobre onde e como os dados são armazenados. Oferecemos opções de processamento local para máxima privacidade."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Plaud - Gravação de Voz com IA | LEGAL"
        description="Transforme suas conversas em insights valiosos com Plaud. Gravação inteligente, transcrição automática e resumos em 112 idiomas para máxima produtividade."
        keywords="gravação de voz, IA, transcrição, resumos, produtividade, meetings, Plaud"
        url="https://operadora.legal/produtos/plaud"
        canonical="https://operadora.legal/produtos/plaud"
      />
      
      <ProductFAQSchema
        productName="Plaud - Gravação de Voz com IA"
        faqs={plaudFAQs}
        productUrl="https://operadora.legal/produtos/plaud"
      />
      
      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization 
        contentDomain="technology"
        entityType="product"
        optimizationLevel="advanced"
      />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor enableReporting={true} />
      <AIFeedbackSystem enableRealTimeOptimization={true} />
      <AdvancedFeaturedSnippets 
        pageType="product"
        focusKeyword="Plaud gravação voz IA"
      />
      <SEOCrawlerOptimization />
      
      <Breadcrumbs />
      
      <main role="main">
        <PlaudHero />
        <PlaudFeatures />
        <PlaudBenefits />
        <PlaudUseCases />
        <PlaudStats />
        <PlaudDemo />
        <PlaudTestimonials />
        <PlaudPricingSection />
        <PlaudFAQ />
        
        <CallToAction
          title="Alugue o Plaud para seu próximo evento"
          subtitle="Acesse tecnologia de ponta sem investimento inicial. Locação flexível, suporte completo e entrega rápida para toda sua necessidade."
          buttonText="Solicitar Orçamento de Locação"
          buttonLink="/contato?produto=plaud-locacao"
          secondaryButtonText="Ver Planos de Locação"
          secondaryButtonLink="#planos-locacao"
          background="gradient"
        />
        
        <ChatbotButton />
      </main>
    </>
  );
};

export default PlaudPage;