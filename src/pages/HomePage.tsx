
import React from "react";
import HomePageSEO from "@/components/seo/HomePageSEO";
import PreloadResources from "@/components/PreloadResources";
import SmartEventsSection from "@/components/sections/SmartEventsSection";
import WhyLegalSection from "@/components/sections/WhyLegalSection";
import ProductsSection from "@/components/sections/ProductsSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import FeaturedPosts from "@/components/tectec/FeaturedPosts";
import CallToAction from "@/components/CallToAction";
import ChatbotButton from "@/components/ChatbotButton";
import NewsletterExitPopup from "@/components/NewsletterExitPopup";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import CoreWebVitalsMonitor from "@/components/seo/CoreWebVitalsMonitor";
import AdvancedFeaturedSnippets from "@/components/seo/AdvancedFeaturedSnippets";
import GEOAdvancedOptimization from "@/components/seo/GEOAdvancedOptimization";
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

const HomePage = () => {
  useScrollAnimations();

  return (
    <>
      <HomePageSEO />
      <PerformanceOptimizer />
      <AIKnowledgeProvider />
      <GEOAdvancedOptimization 
        contentDomain="technology"
        entityType="company"
        optimizationLevel="advanced"
      />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor enableReporting={true} />
      <AIFeedbackSystem enableRealTimeOptimization={true} />
      <AdvancedFeaturedSnippets 
        pageType="homepage"
        focusKeyword="LEGAL tecnologia eventos"
      />
      <SEOCrawlerOptimization />
      
      <main role="main" className="layout-stable">
        {/* Smart Events Section - H2 */}
        <SmartEventsSection />
        
        {/* Por que LEGAL - Credibilidade e Números */}
        <WhyLegalSection />
        
        {/* Casos de Sucesso - H2 */}
        <SuccessStoriesSection />
        
        {/* Nossos Produtos - H2 */}
        <ProductsSection titleOverride="Soluções Completas para Eventos Inteligentes" />
        
        {/* Latest Blog Posts */}
        <FeaturedPosts />
        
        {/* CTA Final */}
        <CallToAction
          title="Transforme seu próximo evento em um Smart Event™"
          subtitle="Junte-se a mais de 3.000 eventos que já experimentaram o futuro. Solicite uma demonstração personalizada e descubra como aumentar seu ROI em até 22%."
          buttonText="Solicitar Demonstração Gratuita"
          buttonLink="/contato?demo=smart-events"
          secondaryButtonText="Ver Casos de Sucesso"
          secondaryButtonLink="/universo/historias"
          background="gradient"
        />
        
        <CoreWebVitalsMonitor enableReporting={true} />
        
        <ChatbotButton />
        <NewsletterExitPopup />
        <PerformanceOptimizer />
      </main>
    </>
  );
};

export default HomePage;
