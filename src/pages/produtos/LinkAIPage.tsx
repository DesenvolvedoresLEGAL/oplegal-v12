
import React from 'react';
import { Helmet } from 'react-helmet-async';
import LinkAIHero from '@/components/linkai/LinkAIHero';
import LinkAIFeatures from '@/components/linkai/LinkAIFeatures';
import LinkAIStats from '@/components/linkai/LinkAIStats';
import LinkAIBenefits from '@/components/linkai/LinkAIBenefits';
import LinkAIProcess from '@/components/linkai/LinkAIProcess';
import LinkAIUseCases from '@/components/linkai/LinkAIUseCases';
import LinkAITestimonials from '@/components/linkai/LinkAITestimonials';
import LinkAIDemo from '@/components/linkai/LinkAIDemo';
import LinkAIFAQ from '@/components/linkai/LinkAIFAQ';

const LinkAIPage = () => {
  return (
    <>
      <Helmet>
        <title>LinkAI - Matchmaking Inteligente com IA | LEGAL</title>
        <meta name="description" content="LinkAI: Plataforma de matchmaking com IA para networking de alta qualidade. 95% de satisfação, 3x mais conexões relevantes e ROI 5x superior." />
        <meta name="keywords" content="LinkAI, matchmaking IA, networking inteligente, eventos B2B, conexões empresariais, LEGAL" />
        <meta property="og:title" content="LinkAI - Matchmaking Inteligente com IA | LEGAL" />
        <meta property="og:description" content="Transforme networking em eventos com LinkAI: IA que conecta pessoas certas no momento certo para máximo valor." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://legal.com.br/produtos/linkai" />
        <link rel="canonical" href="https://legal.com.br/produtos/linkai" />
      </Helmet>
      
      <main>
        <LinkAIHero />
        <LinkAIFeatures />
        <LinkAIStats />
        <LinkAIBenefits />
        <LinkAIProcess />
        <LinkAIUseCases />
        <LinkAITestimonials />
        <LinkAIDemo />
        <LinkAIFAQ />
      </main>
    </>
  );
};

export default LinkAIPage;
