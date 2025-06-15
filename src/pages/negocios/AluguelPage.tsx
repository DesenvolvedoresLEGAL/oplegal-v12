
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AluguelHero from '@/components/aluguel/AluguelHero';
import MainSolutions from '@/components/aluguel/MainSolutions';
import IndustryUseCases from '@/components/aluguel/IndustryUseCases';
import DetailedBenefits from '@/components/aluguel/DetailedBenefits';
import TechnicalAdvantages from '@/components/aluguel/TechnicalAdvantages';
import AdditionalEquipment from '@/components/aluguel/AdditionalEquipment';
import StatsSection from '@/components/aluguel/StatsSection';
import TestimonialsSection from '@/components/aluguel/TestimonialsSection';
import ProcessSection from '@/components/aluguel/ProcessSection';
import FAQSection from '@/components/aluguel/FAQSection';
import CallToAction from '@/components/CallToAction';

const AluguelPage = () => {
  // Schema Markup para Organization, Service e Product
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LEGAL",
    "url": "https://legal.com.br",
    "logo": "https://legal.com.br/images/legal-logo.png",
    "description": "A maior TECHCO do Brasil e inventora do conceito Smart Events™",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-0000-0000",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://linkedin.com/company/legal",
      "https://instagram.com/legal_tech"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LEGAL ALUGUE - Locação de Equipamentos para Eventos",
    "description": "Aluguel de conectividade e tecnologia premium para eventos corporativos com equipamentos de ponta, instalação rápida e suporte 24/7",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL",
      "url": "https://legal.com.br"
    },
    "serviceType": ["Aluguel de Internet para Eventos", "Locação de Internet Temporária", "Soluções de Rede para Eventos", "Infraestrutura de TI para Feiras", "Wi-Fi para Congressos"],
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Equipamentos de TI para Aluguel",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Roteadores 5G",
            "description": "Conectividade móvel de alta velocidade para eventos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Access Points Wi-Fi 6",
            "description": "Pontos de acesso sem fio de última geração"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Switches Gerenciáveis",
            "description": "Equipamentos de rede empresariais"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "BRL",
      "priceRange": "R$ 2500-50000"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Locação de Internet para Eventos",
    "description": "Soluções completas de conectividade temporária para eventos corporativos, congressos, feiras e festivais",
    "brand": {
      "@type": "Brand",
      "name": "LEGAL"
    },
    "category": "Equipamentos de TI",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "2500",
      "highPrice": "50000",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, serviceSchema, productSchema]
  };

  return (
    <>
      <Helmet>
        <title>LEGAL ALUGUE | Locação de Conectividade e Tecnologia para Eventos</title>
        <meta
          name="description"
          content="Alugue conectividade e tecnologia premium para eventos corporativos com a LEGAL. Equipamentos de ponta, instalação rápida e suporte 24/7 para o sucesso do seu evento."
        />
        <meta name="keywords" content="aluguel de internet para eventos, locação de internet temporária, soluções de rede para eventos, infraestrutura de TI para feiras, Wi-Fi para congressos, equipamentos de TI para aluguel, locação conectividade, aluguel roteador 5G, WiFi 6 eventos" />
        <meta property="og:title" content="LEGAL ALUGUE | Locação de Conectividade e Tecnologia para Eventos" />
        <meta property="og:description" content="Aluguel de equipamentos premium para eventos: 5G, WiFi 6, notebooks, switches e mais. Instalação em 24h e suporte técnico especializado." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://legal.com.br/negocios/alugue" />
        <meta property="og:image" content="https://legal.com.br/images/legal-alugue-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LEGAL ALUGUE | Locação de Conectividade para Eventos" />
        <meta name="twitter:description" content="Equipamentos premium para eventos: 5G, WiFi 6, infraestrutura completa com suporte 24/7." />
        <meta name="twitter:image" content="https://legal.com.br/images/legal-alugue-twitter.jpg" />
        <link rel="canonical" href="https://legal.com.br/negocios/alugue" />
        <script type="application/ld+json">
          {JSON.stringify(combinedSchema)}
        </script>
      </Helmet>

      <div className="bg-background text-foreground font-unica">
        <AluguelHero />
        <MainSolutions />
        <IndustryUseCases />
        <DetailedBenefits />
        <TechnicalAdvantages />
        <AdditionalEquipment />
        <StatsSection />
        <TestimonialsSection />
        <ProcessSection />
        <FAQSection />
        
        <CallToAction
          title="Pronto para Conectar seu Evento?"
          subtitle="Nossa equipe especializada está pronta para dimensionar a solução perfeita para seu evento. Oferecemos orçamento detalhado, site survey gratuito e consultoria técnica especializada."
          buttonText="Solicitar Orçamento Personalizado"
          buttonLink="/contato?solution=legal-alugue"
          secondaryButtonText="Ver Outros Negócios"
          secondaryButtonLink="/negocios"
          background="gradient"
        />
      </div>
    </>
  );
};

export default AluguelPage;
