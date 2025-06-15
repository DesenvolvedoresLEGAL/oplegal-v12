import React, { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/sections/HeroSection";
import WhyLegalSection from "@/components/sections/WhyLegalSection";
import ProductsSection from "@/components/sections/ProductsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import MovimentoSmartEventsSection from "@/components/sections/MovimentoSmartEventsSection";
import PillarsSection from "@/components/sections/PillarsSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import VideoSection from "@/components/sections/VideoSection";
import FAQSection from "@/components/sections/FAQSection";
import CallToAction from "@/components/CallToAction";
import ChatbotButton from "@/components/ChatbotButton";

const HomePage = () => {
  useEffect(() => {
    // Scroll animations handler
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

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LEGAL - Smart Events™",
    "url": "https://operadora.legal",
    "description": "A maior TECHCO do Brasil criadora do Smart Events™. Transforme eventos com IA, credenciamento facial, conectividade 5G e ROI comprovado.",
    "keywords": "Smart Events, eventos inteligentes, credenciamento facial, FacePass, conectividade 5G, IA eventos, ROI eventos, AERO drones, networking inteligente",
    
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://operadora.legal/busca?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    
    "mainEntity": {
      "@type": "Organization",
      "name": "LEGAL",
      "alternateName": "LEGAL TechCo",
      "description": "A maior TECHCO do Brasil, criadora e líder em Smart Events™ - eventos inteligentes com tecnologia de ponta",
      "foundingDate": "2010",
      "url": "https://operadora.legal",
      "logo": "https://operadora.legal/images/legal-logo.png",
      "image": "https://operadora.legal/images/legal-smart-events-hero.jpg",
      
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-11-99999-9999",
        "contactType": "Atendimento comercial",
        "availableLanguage": "Portuguese",
        "areaServed": "BR"
      },
      
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR",
        "addressRegion": "SP"
      },
      
      "sameAs": [
        "https://linkedin.com/company/legal-techco",
        "https://instagram.com/legal_tech",
        "https://youtube.com/@legal-techco"
      ],
      
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Soluções Smart Events™ e Conectividade",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Smart Events™",
              "description": "Plataforma completa para eventos inteligentes com IA, credenciamento facial, conectividade 5G e análises em tempo real",
              "category": "Tecnologia para Eventos",
              "audience": {
                "@type": "Audience",
                "audienceType": "Organizadores de eventos, empresas, produtoras"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "FacePass™ - Credenciamento Facial",
              "description": "Sistema de credenciamento com reconhecimento facial que elimina filas e melhora a experiência do participante",
              "category": "Biometria e Segurança"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AERO - Conectividade Premium",
              "description": "Soluções de conectividade 5G, WiFi de alta densidade e serviços com drones para eventos",
              "category": "Conectividade e Infraestrutura"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "LinkAI™ - Networking Inteligente", 
              "description": "Matchmaking com inteligência artificial para conexões relevantes e networking eficiente",
              "category": "Inteligência Artificial"
            }
          }
        ]
      },
      
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "850",
        "bestRating": "5"
      },
      
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Organization",
            "name": "Hospital Sírio-Libanês"
          },
          "reviewBody": "A implementação do Smart Events™ transformou nosso congresso médico anual, aumentando o engajamento em 40% e reduzindo custos operacionais em 30%."
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Smart Events™ - Eventos Inteligentes com IA e Credenciamento Facial | LEGAL"
        description="LEGAL é a maior TECHCO do Brasil, criadora do Smart Events™. Transforme seus eventos com IA, credenciamento facial FacePass™, conectividade 5G AERO e ROI comprovado. 3.000+ eventos realizados, NPS 90."
        keywords="Smart Events, eventos inteligentes, credenciamento facial, FacePass, IA eventos, conectividade 5G, AERO drones, networking inteligente, ROI eventos, tecnologia eventos, biometria facial, WiFi eventos, automação eventos, análise dados eventos, LEGAL TechCo"
        url="https://operadora.legal"
        type="website"
        image="https://operadora.legal/images/smart-events-hero-2024.jpg"
        schemaData={homePageSchema}
        preconnect={[
          "https://fonts.googleapis.com",
          "https://images.unsplash.com",
          "https://www.youtube.com"
        ]}
        prefetch={[
          "/smart-events",
          "/contato",
          "/produtos/facepass"
        ]}
      />
      
      <main role="main">
        {/* Hero Section - H1 Principal */}
        <HeroSection />
        
        {/* Por que LEGAL - Credibilidade e Números */}
        <WhyLegalSection />
        
        {/* Nossos Produtos - H2 */}
        <ProductsSection titleOverride="Soluções Completas para Eventos Inteligentes" />
        
        {/* Benefícios por Stakeholder - H2 */}
        <BenefitsSection />
        
        {/* Movimento SmartEvents™ - H2 */}
        <MovimentoSmartEventsSection />
        
        {/* Pilares Smart Events - H2 */}
        <PillarsSection />
        
        {/* Implementação - H2 */}
        <RoadmapSection />
        
        {/* Vídeo Demonstração - H2 */}
        <VideoSection />
        
        {/* Casos de Sucesso - H2 */}
        <SuccessStoriesSection />
        
        {/* FAQ - H2 */}
        <FAQSection />
        
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
      </main>
    </>
  );
};

export default HomePage;
