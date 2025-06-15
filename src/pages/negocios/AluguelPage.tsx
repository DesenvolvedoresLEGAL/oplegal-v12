
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AluguelHero from '@/components/aluguel/AluguelHero';
import MainSolutions from '@/components/aluguel/MainSolutions';
import IndustryUseCases from '@/components/aluguel/IndustryUseCases';
import DetailedBenefits from '@/components/aluguel/DetailedBenefits';
import TechnicalAdvantages from '@/components/aluguel/TechnicalAdvantages';
import AdditionalEquipment from '@/components/aluguel/AdditionalEquipment';
import StatsSection from '@/components/aluguel/StatsSection';
import ProcessSection from '@/components/aluguel/ProcessSection';
import CallToAction from '@/components/CallToAction';

const AluguelPage = () => {
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
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "LEGAL ALUGUE",
            "description": "Locação de equipamentos de conectividade e tecnologia para eventos corporativos",
            "provider": {
              "@type": "Organization",
              "name": "LEGAL",
              "url": "https://legal.com.br"
            },
            "serviceType": "Locação de Equipamentos Tecnológicos",
            "areaServed": {
              "@type": "Country",
              "name": "Brasil"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "BRL"
            }
          })}
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
        <ProcessSection />
        
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
