import React from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import HumanoidHomeHero from "@/components/sections/HumanoidHomeHero";
import SmartEventsSection from "@/components/sections/SmartEventsSection";
import WhyLegalSection from "@/components/sections/WhyLegalSection";
import ProductsSection from "@/components/sections/ProductsSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import CallToAction from "@/components/CallToAction";
import ChatbotButton from "@/components/ChatbotButton";
import NewsletterExitPopup from "@/components/NewsletterExitPopup";
import FeaturedPosts from "@/components/tectec/FeaturedPosts";
import PreloadResources from "@/components/PreloadResources";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import SEODatasetManager from "@/components/seo/SEODatasetManager";

const Index = () => {
  useScrollAnimations();
  
  return (
    <>
      {/* Performance Components */}
      <PerformanceOptimizer />
      <PreloadResources />
      
      {/* Centralized SEO Dataset Control - DISABLED BY DEFAULT */}
      {/* <SEODatasetManager /> */}
      
      
      <main itemScope itemType="https://schema.org/WebPage">
        <HumanoidHomeHero />
        <SmartEventsSection />
        <WhyLegalSection />
        <SuccessStoriesSection />
        <ProductsSection />
        <FeaturedPosts />
        <CallToAction 
          title="Pronto para Revolucionar seus Eventos?"
          subtitle="Transforme seus eventos com Smart Events™ e nossa tecnologia de ponta"
          buttonText="Fale Conosco"
          buttonLink="/contato"
          secondaryButtonText="Ver Produtos"
          secondaryButtonLink="/negocios"
          background="gradient"
        />
      </main>
      
      <ChatbotButton />
      <NewsletterExitPopup />
    </>
  );
};

export default Index;
