import React from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import HeroSection from "@/components/sections/HeroSection";
import WhyLegalSection from "@/components/sections/WhyLegalSection";
import ProductsSection from "@/components/sections/ProductsSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import CallToAction from "@/components/CallToAction";
import ChatbotButton from "@/components/ChatbotButton";
import NewsletterExitPopup from "@/components/NewsletterExitPopup";
import FeaturedPosts from "@/components/tectec/FeaturedPosts";
import HomePageSEO from "@/components/seo/HomePageSEO";
import PreloadResources from "@/components/PreloadResources";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import TechnicalSEO from "@/components/seo/TechnicalSEO";
import WebPageSchema from "@/components/seo/WebPageSchema";

const Index = () => {
  useScrollAnimations();
  
  return (
    <>
      <HomePageSEO />
      <TechnicalSEO 
        canonical="https://operadora.legal"
        prefetchUrls={[
          "/smart-events",
          "/negocios/ai",
          "/contato"
        ]}
        preloadResources={[
          { href: "/fonts/main.woff2", as: "font", type: "font/woff2" }
        ]}
      />
      <WebPageSchema
        name="LEGAL TechCo - Smart Events™ e Soluções Tecnológicas"
        description="A maior e melhor TechCo do Brasil. Revolucionamos eventos com Smart Events™, IA, conectividade 5G e soluções aéreas inovadoras."
        url="https://operadora.legal"
        mainEntity={{
          type: "Organization",
          name: "LEGAL TechCo",
          description: "Empresa de tecnologia especializada em Smart Events™ e soluções inovadoras"
        }}
        potentialAction={{
          type: "ContactAction",
          target: "https://operadora.legal/contato",
          name: "Entre em Contato"
        }}
      />
      <PreloadResources />
      <PerformanceOptimizer />
      
      <main itemScope itemType="https://schema.org/WebPage">
        <HeroSection />
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
