
import React, { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
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

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LEGAL",
    "url": "https://operadora.legal",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://operadora.legal/busca?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "LEGAL",
      "description": "A maior TECHCO do Brasil e inventora do conceito Smart Events™",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Soluções Smart Events",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Smart Events™",
              "description": "Plataforma completa para eventos inteligentes com IA, credenciamento facial e networking automatizado",
              "category": "Tecnologia para Eventos"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "FacePass™",
              "description": "Credenciamento facial para eventos com reconhecimento biométrico"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AERO",
              "description": "Soluções de conectividade e drones para eventos"
            }
          }
        ]
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Criadora do Smart Events™ | Eventos Inteligentes e Conectados"
        description="LEGAL - A maior TECHCO do Brasil e inventora do conceito Smart Events™. Transforme seus eventos com IA, credenciamento facial, networking inteligente e conectividade 5G. ROI comprovado."
        keywords="Smart Events, eventos inteligentes, credenciamento facial, FacePass, networking IA, conectividade eventos, ROI eventos, LEGAL TechCo, eventos corporativos"
        url="https://operadora.legal"
        type="website"
        schemaData={homePageSchema}
      />
      
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
    </>
  );
};

export default HomePage;
