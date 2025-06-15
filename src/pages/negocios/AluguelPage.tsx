import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import AluguelHero from '@/components/aluguel/AluguelHero';
import MainSolutions from '@/components/aluguel/MainSolutions';

// Lazy load components that are not critical for above-the-fold
const IndustryUseCases = lazy(() => import('@/components/aluguel/IndustryUseCases'));
const DetailedBenefits = lazy(() => import('@/components/aluguel/DetailedBenefits'));
const TechnicalAdvantages = lazy(() => import('@/components/aluguel/TechnicalAdvantages'));
const AdditionalEquipment = lazy(() => import('@/components/aluguel/AdditionalEquipment'));
const StatsSection = lazy(() => import('@/components/aluguel/StatsSection'));
const TestimonialsSection = lazy(() => import('@/components/aluguel/TestimonialsSection'));
const ProcessSection = lazy(() => import('@/components/aluguel/ProcessSection'));
const FAQSection = lazy(() => import('@/components/aluguel/FAQSection'));
const CallToAction = lazy(() => import('@/components/CallToAction'));

// Loading component optimized
const SectionLoader = () => (
  <div className="py-16 flex justify-center items-center">
    <div className="w-8 h-8 border-2 border-legal border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AluguelPage = () => {
  // Schema Markup for Organization, Service, and Product
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LEGAL",
    "url": "https://legal.com.br",
    "logo": "https://legal.com.br/images/legal-logo.webp",
    "description": "Aluguel de Internet Para Eventos e Negócios. Locação de Internet 5G e Tecnologia",
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
        <title>LEGAL ALUGUE | Locação de Conectividade e Tecnologia para Eventos e Negócios</title>
        <meta
          name="description"
          content="Alugue conectividade e tecnologia premium para eventos corporativos com a LEGAL. Equipamentos de ponta, instalação rápida e suporte 24/7 para o sucesso do seu evento."
        />
        <meta name="keywords" content="aluguel de internet para eventos, locação de internet temporária, soluções de rede para eventos, infraestrutura de TI para feiras, Wi-Fi para congressos, equipamentos de TI para aluguel, locação conectividade, aluguel roteador 5G, WiFi 6 eventos" />
        <meta property="og:title" content="LEGAL ALUGUE | Locação de Conectividade e Tecnologia para Eventos" />
        <meta property="og:description" content="Aluguel de equipamentos premium para eventos: 5G, WiFi 6, notebooks, switches e mais. Instalação em 24h e suporte técnico especializado." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://legal.com.br/negocios/alugue" />
        <meta property="og:image" content="https://legal.com.br/images/legal-alugue-og.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="LEGAL ALUGUE - Locação de equipamentos para eventos corporativos" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LEGAL ALUGUE | Locação de Conectividade para Eventos" />
        <meta name="twitter:description" content="Equipamentos premium para eventos: 5G, WiFi 6, infraestrutura completa com suporte 24/7." />
        <meta name="twitter:image" content="https://legal.com.br/images/legal-alugue-twitter.webp" />
        <link rel="canonical" href="https://legal.com.br/negocios/alugue" />
        <link rel="preload" href="/fonts/neue-haas-unica.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script type="application/ld+json">
          {JSON.stringify(combinedSchema)}
        </script>
      </Helmet>

      <div className="bg-background text-foreground font-unica">
        {/* Above-the-fold content loads immediately */}
        <AluguelHero />
        <MainSolutions />
        
        {/* Below-the-fold content loads lazily */}
        <Suspense fallback={<SectionLoader />}>
          <IndustryUseCases />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <DetailedBenefits />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <TechnicalAdvantages />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AdditionalEquipment />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <StatsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ProcessSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <CallToAction
            title="Pronto para Conectar seu Evento?"
            subtitle="Nossa equipe especializada está pronta para dimensionar a solução perfeita para seu evento. Oferecemos orçamento detalhado, site survey gratuito e consultoria técnica especializada."
            buttonText="Solicitar Orçamento Personalizado"
            buttonLink="/contato?solution=legal-alugue"
            secondaryButtonText="Ver Outros Negócios"
            secondaryButtonLink="/negocios"
            background="gradient"
          />
        </Suspense>
      </div>
    </>
  );
};

export default AluguelPage;
