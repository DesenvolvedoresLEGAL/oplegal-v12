
import React from 'react';
import { Helmet } from 'react-helmet-async';
import FitScoreHero from '@/components/fitscore/FitScoreHero';
import FitScoreFeatures from '@/components/fitscore/FitScoreFeatures';
import FitScoreStats from '@/components/fitscore/FitScoreStats';
import FitScoreBenefits from '@/components/fitscore/FitScoreBenefits';
import FitScoreProcess from '@/components/fitscore/FitScoreProcess';
import FitScoreUseCases from '@/components/fitscore/FitScoreUseCases';
import FitScoreIntegration from '@/components/fitscore/FitScoreIntegration';

const FitScorePage = () => {
  return (
    <>
      <Helmet>
        <title>FitScore - Copiloto de Contratação com IA | LEGAL</title>
        <meta name="description" content="FitScore: Copiloto de contratação e People Analytics com Inteligência Artificial. Revolucione seus processos de RH com análise preditiva e matching inteligente de candidatos." />
        <meta name="keywords" content="FitScore, RH, recrutamento, IA, inteligência artificial, people analytics, contratação, LEGAL" />
      </Helmet>
      
      <main>
        <FitScoreHero />
        <FitScoreFeatures />
        <FitScoreStats />
        <FitScoreBenefits />
        <FitScoreProcess />
        <FitScoreUseCases />
        <FitScoreIntegration />
      </main>
    </>
  );
};

export default FitScorePage;
