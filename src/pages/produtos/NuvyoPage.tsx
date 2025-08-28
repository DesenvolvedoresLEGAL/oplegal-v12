
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NuvyoHero from '@/components/nuvyo/NuvyoHero';
import NuvyoFeatures from '@/components/nuvyo/NuvyoFeatures';
import NuvyoStats from '@/components/nuvyo/NuvyoStats';
import NuvyoBenefits from '@/components/nuvyo/NuvyoBenefits';
import NuvyoProcess from '@/components/nuvyo/NuvyoProcess';
import NuvyoUseCases from '@/components/nuvyo/NuvyoUseCases';
import NuvyoTestimonials from '@/components/nuvyo/NuvyoTestimonials';
import NuvyoDemo from '@/components/nuvyo/NuvyoDemo';
import NuvyoFAQ from '@/components/nuvyo/NuvyoFAQ';
import CallToAction from '@/components/CallToAction';

const NuvyoPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nuvyo - Filmagem e Fotografia com Drones",
    "description": "Serviços profissionais de filmagem e fotografia aérea com drones para eventos, marketing e produções audiovisuais",
    "serviceType": ["Filmagem com drones", "Fotografia aérea"],
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "850",
      "priceCurrency": "BRL"
    }
  };

  return (
    <>
      <Helmet>
        <title>Nuvyo - Filmagem e Fotografia com Drones | LEGAL</title>
        <meta name="description" content="Serviços profissionais de filmagem e fotografia aérea com drones. Capture momentos únicos com qualidade cinematográfica 4K/8K para eventos, marketing e produções." />
        <meta name="keywords" content="drone filmagem, fotografia aérea, vídeo drone, filmagem eventos, marketing drone, produção audiovisual" />
        
        <meta property="og:title" content="Nuvyo - Filmagem e Fotografia com Drones" />
        <meta property="og:description" content="Transforme sua perspectiva com filmagem e fotografia aérea profissional. Qualidade cinematográfica para eventos, marketing e produções audiovisuais." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=1200&h=630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nuvyo - Filmagem e Fotografia com Drones" />
        <meta name="twitter:description" content="Serviços profissionais de filmagem e fotografia aérea com drones para eventos e marketing." />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="bg-background text-foreground font-unica">
        <NuvyoHero />
        <NuvyoStats />
        <NuvyoFeatures />
        <NuvyoBenefits />
        <NuvyoProcess />
        <NuvyoUseCases />
        <NuvyoTestimonials />
        <NuvyoDemo />
        <NuvyoFAQ />
        
        <CallToAction
          title="Pronto para Capturar Imagens Incríveis?"
          subtitle="Entre em contato conosco e descubra como o Nuvyo pode transformar seus projetos com filmagem e fotografia aérea profissional."
          buttonText="Solicitar Orçamento"
          buttonLink="/contato?subject=nuvyo"
          secondaryButtonText="Ver Demonstração"
          secondaryButtonLink="#demo"
          background="gradient"
        />
      </div>
    </>
  );
};

export default NuvyoPage;
