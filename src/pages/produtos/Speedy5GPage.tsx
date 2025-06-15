
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Speedy5GHero from '@/components/speedy5g/Speedy5GHero';
import Speedy5GFeatures from '@/components/speedy5g/Speedy5GFeatures';
import Speedy5GStats from '@/components/speedy5g/Speedy5GStats';
import Speedy5GBenefits from '@/components/speedy5g/Speedy5GBenefits';
import Speedy5GProcess from '@/components/speedy5g/Speedy5GProcess';
import Speedy5GUseCases from '@/components/speedy5g/Speedy5GUseCases';
import Speedy5GTestimonials from '@/components/speedy5g/Speedy5GTestimonials';
import Speedy5GDemo from '@/components/speedy5g/Speedy5GDemo';
import Speedy5GFAQ from '@/components/speedy5g/Speedy5GFAQ';

const Speedy5GPage = () => {
  return (
    <>
      <Helmet>
        <title>Speedy5G - Conectividade 5G Ultra-Rápida | LEGAL</title>
        <meta name="description" content="Speedy5G: Solução de conectividade 5G empresarial de alta performance. Velocidade de até 10Gbps, latência ultra-baixa e cobertura nacional para transformar sua operação." />
        <meta name="keywords" content="Speedy5G, 5G empresarial, conectividade alta velocidade, internet 5G, LEGAL, baixa latência" />
        <meta property="og:title" content="Speedy5G - Conectividade 5G Ultra-Rápida | LEGAL" />
        <meta property="og:description" content="Transforme sua conectividade com Speedy5G: velocidade extrema, latência mínima e infraestrutura robusta." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://legal.com.br/produtos/speedy5g" />
        <link rel="canonical" href="https://legal.com.br/produtos/speedy5g" />
      </Helmet>
      
      <main>
        <Speedy5GHero />
        <Speedy5GFeatures />
        <Speedy5GStats />
        <Speedy5GBenefits />
        <Speedy5GProcess />
        <Speedy5GUseCases />
        <Speedy5GTestimonials />
        <Speedy5GDemo />
        <Speedy5GFAQ />
      </main>
    </>
  );
};

export default Speedy5GPage;
