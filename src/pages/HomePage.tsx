
import React from "react";
import HomePageSEO from "@/components/seo/HomePageSEO";
import HeroSection from "@/components/sections/HeroSection";
import WhyLegalSection from "@/components/sections/WhyLegalSection";
import ProductsSection from "@/components/sections/ProductsSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import FeaturedPosts from "@/components/tectec/FeaturedPosts";
import CallToAction from "@/components/CallToAction";
import ChatbotButton from "@/components/ChatbotButton";
import NewsletterExitPopup from "@/components/NewsletterExitPopup";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const HomePage = () => {
  useScrollAnimations();

  return (
    <>
      <HomePageSEO />
      
      <main role="main">
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
        
        <ChatbotButton />
        <NewsletterExitPopup />
      </main>
    </>
  );
};

export default HomePage;
