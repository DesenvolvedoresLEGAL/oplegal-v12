
import React from 'react';
import SEOHead from '@/components/SEOHead';
import ProductSchema from '@/components/seo/ProductSchema';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallToAction from '@/components/CallToAction';
import Speedy5GHero from '@/components/speedy5g/Speedy5GHero';
import Speedy5GFeatures from '@/components/speedy5g/Speedy5GFeatures';
import Speedy5GStats from '@/components/speedy5g/Speedy5GStats';
import Speedy5GBenefits from '@/components/speedy5g/Speedy5GBenefits';
import Speedy5GProcess from '@/components/speedy5g/Speedy5GProcess';
import Speedy5GUseCases from '@/components/speedy5g/Speedy5GUseCases';
import Speedy5GTestimonials from '@/components/speedy5g/Speedy5GTestimonials';
import Speedy5GDemo from '@/components/speedy5g/Speedy5GDemo';
import Speedy5GFAQ from '@/components/speedy5g/Speedy5GFAQ';
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

const Speedy5GPage = () => {
  const faqData = [
    {
      question: "Qual a velocidade real do Speedy5G?",
      answer: "O Speedy5G oferece velocidades de download de até 10Gbps e upload de até 2Gbps, com latência inferior a 5ms, garantindo performance superior para aplicações empresariais críticas."
    },
    {
      question: "Como funciona a tecnologia FWA?",
      answer: "Fixed Wireless Access (FWA) utiliza torres 5G para fornecer internet banda larga sem necessidade de cabeamento físico, oferecendo flexibilidade e rapidez na instalação empresarial."
    },
    {
      question: "Qual é a cobertura do Speedy5G?",
      answer: "Atualmente cobrimos as principais regiões metropolitanas do Brasil, com planos de expansão contínua. Consulte nossa equipe para verificar disponibilidade em sua região."
    },
    {
      question: "O Speedy5G substitui totalmente a fibra óptica?",
      answer: "Para muitas aplicações sim, especialmente onde a fibra não está disponível ou instalação é complexa. O Speedy5G oferece performance comparável com flexibilidade superior."
    },
    {
      question: "Como é o processo de instalação?",
      answer: "A instalação é simples e rápida: análise do local, instalação do equipamento receptor (antena compacta) e configuração da rede. Todo o processo leva de 2 a 4 horas."
    }
  ];

  return (
    <>
      <SEOHead
        title="Speedy5G™ - Conectividade 5G Ultra-Rápida FWA | LEGAL"
        description="Speedy5G: Solução de conectividade 5G empresarial de alta performance. Velocidade de até 10Gbps, latência ultra-baixa e cobertura nacional para transformar sua operação."
        keywords="Speedy5G, 5G empresarial, conectividade alta velocidade, internet 5G, LEGAL, baixa latência, FWA"
        canonical="https://operadora.legal/produtos/speedy5g"
        image="https://operadora.legal/images/speedy5g-hero-2024.jpg"
        type="product"
      />
      
      <ProductSchema
        productName="Speedy5G™"
        description="Solução de conectividade 5G empresarial de alta performance com tecnologia FWA"
        category="Conectividade Empresarial"
        features={["Velocidade até 10Gbps", "Latência < 5ms", "Instalação rápida", "Cobertura nacional"]}
        url="https://operadora.legal/produtos/speedy5g"
        applicationCategory="BusinessApplication"
        pricing={{
          type: "subscription",
          currency: "BRL",
          price: "299-999"
        }}
      />
      
      <FAQPageSchema faqs={faqData} pageUrl="https://operadora.legal/produtos/speedy5g" />
      
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
        focusKeyword="Speedy5G conectividade 5G"
      />
      <SEOCrawlerOptimization />
      
      <Breadcrumbs />
      
      <main>
        <Speedy5GHero />
        <Speedy5GFeatures />
        <Speedy5GStats />
        <Speedy5GBenefits />
        <Speedy5GProcess />
        <Speedy5GUseCases />
        <Speedy5GTestimonials />
        <Speedy5GDemo />
        <Speedy5GFAQ />
        <CallToAction
          title="Acelere seu Negócio com Speedy5G"
          subtitle="Descubra como a conectividade 5G ultra-rápida pode transformar sua operação. Fale com nossos especialistas e receba uma proposta personalizada."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=speedy5g"
          secondaryButtonText="Ver Planos"
          secondaryButtonLink="/precos#speedy5g"
          background="gradient"
        />
      </main>
    </>
  );
};

export default Speedy5GPage;
