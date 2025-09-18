
import React from 'react';
import SEOHead from '@/components/SEOHead';
import ProductSchema from '@/components/seo/ProductSchema';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import SonixHero from '@/components/sonix/SonixHero';
import SonixFeatures from '@/components/sonix/SonixFeatures';
import SonixStats from '@/components/sonix/SonixStats';
import SonixBenefits from '@/components/sonix/SonixBenefits';
import SonixProcess from '@/components/sonix/SonixProcess';
import SonixUseCases from '@/components/sonix/SonixUseCases';
import SonixTestimonials from '@/components/sonix/SonixTestimonials';
import SonixDemo from '@/components/sonix/SonixDemo';
import SonixFAQ from '@/components/sonix/SonixFAQ';
import CallToAction from '@/components/CallToAction';

const SonixPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sonix - Delivery Premium com Drones",
    "description": "Sonix: Serviço premium de delivery com drones inteligentes para entregas ultra-rápidas, monitoramento em tempo real e experiência personalizada.",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL",
      "url": "https://legal.com.br",
      "logo": "https://legal.com.br/logo.png"
    },
    "serviceType": ["Delivery Premium", "Entregas com Drone", "Logística Inteligente"],
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "offers": {
      "@type": "Offer",
      "name": "Delivery Premium com Drones",
      "price": "35",
      "priceCurrency": "BRL",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "35",
        "priceCurrency": "BRL",
        "unitText": "por quilômetro"
      }
    }
  };

  const faqData = [
    {
      question: "Qual é o tempo de entrega do Sonix?",
      answer: "O Sonix oferece entregas ultra-rápidas em até 15 minutos para distâncias de até 5km, garantindo agilidade sem precedentes no mercado de delivery premium."
    },
    {
      question: "Como funciona o monitoramento em tempo real?",
      answer: "Através do nosso app, você acompanha todo o trajeto do drone em tempo real, recebe notificações de status e pode comunicar-se diretamente com nossa central de operações."
    },
    {
      question: "Quais tipos de produtos podem ser entregues?",
      answer: "Produtos até 2kg, incluindo medicamentos, documentos, eletrônicos pequenos, cosméticos, acessórios e itens de conveniência. Todos os produtos são transportados em compartimento climatizado e seguro."
    },
    {
      question: "Qual é a área de cobertura do serviço?",
      answer: "Atualmente operamos na região metropolitana de São Paulo, com planos de expansão para outras capitais brasileiras ao longo de 2024."
    },
    {
      question: "Como garantir a segurança dos produtos?",
      answer: "Nossos drones possuem compartimentos lacrados, sistema anti-queda, rastreamento GPS, câmeras de segurança e seguro total da carga transportada."
    }
  ];

  return (
    <>
      <SEOHead
        title="Sonix™ - Delivery Premium com Drones Inteligentes | LEGAL"
        description="Sonix: Serviço premium de delivery com drones inteligentes. Entregas ultra-rápidas em até 15 minutos, monitoramento em tempo real e experiência personalizada para clientes VIP."
        keywords="delivery premium drone, entrega rápida drone, drone delivery VIP, logística premium, Sonix LEGAL, delivery inteligente"
        canonical="https://operadora.legal/produtos/sonix"
        image="https://operadora.legal/images/sonix-hero-2024.jpg"
        type="product"
      />
      
      <ProductSchema
        productName="Sonix™"
        description="Serviço premium de delivery com drones inteligentes para entregas ultra-rápidas"
        category="Serviços de Delivery"
        features={["Entrega em 15 minutos", "Monitoramento em tempo real", "Compartimento climatizado", "Cobertura 5km"]}
        url="https://operadora.legal/produtos/sonix"
        applicationCategory="TransportationApplication"
        pricing={{
          type: "one-time",
          currency: "BRL",
          price: "35"
        }}
      />
      
      <FAQPageSchema faqs={faqData} pageUrl="https://operadora.legal/produtos/sonix" />
      
      <Breadcrumbs />
      
      <main>
        <SonixHero />
        <SonixFeatures />
        <SonixStats />
        <SonixBenefits />
        <SonixProcess />
        <SonixUseCases />
        <SonixTestimonials />
        <SonixDemo />
        <SonixFAQ />
        <CallToAction
          title="Experimente o Futuro do Delivery"
          subtitle="Descubra a experiência premium do Sonix. Entregas em até 15 minutos com drones inteligentes e monitoramento em tempo real."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=sonix"
          secondaryButtonText="Ver Preços"
          secondaryButtonLink="#precos"
          background="gradient"
        />
      </main>
    </>
  );
};

export default SonixPage;
