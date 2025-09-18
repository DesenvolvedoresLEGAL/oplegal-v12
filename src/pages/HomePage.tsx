
import React from "react";
import HomePageSEO from "@/components/seo/HomePageSEO";
import PreloadResources from "@/components/PreloadResources";
import HeroSection from "@/components/sections/HeroSection";
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
import IndustrySpecificSEO from "@/components/seo/IndustrySpecificSEO";
import AdvancedFeaturedSnippets from "@/components/seo/AdvancedFeaturedSnippets";
import GEOAdvancedOptimization from "@/components/seo/GEOAdvancedOptimization";

const HomePage = () => {
  useScrollAnimations();

  return (
    <>
      <HomePageSEO />
      <PreloadResources />
      
      <main role="main" className="layout-stable">
        {/* Hero Section - H1 Principal */}
        <HeroSection />
        
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
        <IndustrySpecificSEO 
          industries={["Tecnologia", "Corporativo", "Educação", "Entretenimento"]}
          primarySolutions={["Smart Events™", "MAGICPASS™", "FitScore™", "GALAXIA™"]}
          useCase="eventos-corporativos"
        />
        <AdvancedFeaturedSnippets 
          pageType="homepage"
          focusKeyword="Smart Events"
          location="Brasil"
        />
        <GEOAdvancedOptimization 
          contentDomain="smart_events"
          entityType="company"
          optimizationLevel="advanced"
        />
        
        <ChatbotButton />
        <NewsletterExitPopup />
        <PerformanceOptimizer />
      </main>
    </>
  );
};

export default HomePage;
