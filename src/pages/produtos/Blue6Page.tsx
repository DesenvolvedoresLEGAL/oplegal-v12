
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Blue6Hero from '@/components/blue6/Blue6Hero';
import Blue6Features from '@/components/blue6/Blue6Features';
import Blue6Stats from '@/components/blue6/Blue6Stats';
import Blue6Benefits from '@/components/blue6/Blue6Benefits';
import Blue6UseCases from '@/components/blue6/Blue6UseCases';
import Blue6Testimonials from '@/components/blue6/Blue6Testimonials';
import Blue6Demo from '@/components/blue6/Blue6Demo';
import Blue6FAQ from '@/components/blue6/Blue6FAQ';
import CallToAction from '@/components/CallToAction';

const Blue6Page = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Blue6 - Hotspot WiFi Inteligente",
    "applicationCategory": "NetworkingApplication",
    "operatingSystem": "Hardware-based",
    "description": "Hotspot WiFi inteligente com tecnologia avançada para conectividade segura e de alta performance. Solução completa para eventos, empresas e espaços públicos.",
    "offers": {
      "@type": "Offer",
      "category": "Hardware + Software"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "featureList": [
      "Hotspot WiFi de Alta Performance",
      "Gestão Centralizada de Rede",
      "Análise de Uso em Tempo Real",
      "Captive Portal Personalizado",
      "Segurança Avançada WPA3"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Blue6 - Hotspot WiFi Inteligente para Eventos e Empresas | LEGAL</title>
        <meta name="description" content="Blue6: Hotspot WiFi inteligente com gestão centralizada, análise de uso, captive portal personalizado e segurança avançada. Conectividade de alta performance para eventos e empresas." />
        <meta name="keywords" content="hotspot wifi, wifi eventos, conectividade empresarial, gestão de rede, captive portal, wifi inteligente, análise de uso wifi, segurança wifi, LEGAL Blue6" />
        <link rel="canonical" href="https://operadora.legal/produtos/blue6" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <Blue6Hero />
        <Blue6Features />
        <Blue6Stats />
        <Blue6Benefits />
        <Blue6UseCases />
        <Blue6Testimonials />
        <Blue6Demo />
        <Blue6FAQ />
        <CallToAction
          title="Revolucione sua Conectividade WiFi"
          subtitle="Implemente uma solução WiFi inteligente e de alta performance com o Blue6. Solicite uma demonstração personalizada."
          buttonText="Demonstração Gratuita"
          buttonLink="/contato?produto=blue6"
          secondaryButtonText="Configurar Blue6™"
          secondaryButtonLink="https://blue6.operadora.legal"
          background="gradient"
        />
      </main>
    </>
  );
};

export default Blue6Page;
