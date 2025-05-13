
import React, { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import CallToAction from "@/components/CallToAction";
import ChatbotButton from "@/components/ChatbotButton";
import WhyLegalSection from "@/components/sections/WhyLegalSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";

const HomePage = () => {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom > 0;
        
        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };

    // Add listener and trigger once for initial items in viewport
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <HeroSection />
      <WhyLegalSection />
      <ProductsSection titleOverride="Faça mais negócios com a LEGAL" />
      <SuccessStoriesSection />
      
      <CallToAction
        title="Pronto para transformar seus eventos?"
        subtitle="Entre em contato agora e descubra como implementar o Smart Events™ em seu próximo evento."
        buttonText="Solicitar proposta"
        buttonLink="/contato"
        secondaryButtonText="Ver pacotes"
        secondaryButtonLink="/ofertas"
        background="gradient"
      />
      
      <ChatbotButton />
    </main>
  );
};

export default HomePage;
