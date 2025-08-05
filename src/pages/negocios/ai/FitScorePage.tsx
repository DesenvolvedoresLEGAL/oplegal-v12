
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductSchema from '@/components/seo/ProductSchema';
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
      </Helmet>
      
      <ProductSchema
        productName="FitScore"
        description="Copiloto de contratação e People Analytics com Inteligência Artificial que revoluciona processos de RH através de análise preditiva, matching inteligente de candidatos e redução de 70% no tempo de contratação."
        category="Recursos Humanos e IA"
        applicationCategory="BusinessApplication"
        url="https://operadora.legal/produtos/fitscore"
        features={[
          "Análise preditiva de candidatos",
          "Matching inteligente com IA",
          "People Analytics avançado",
          "Redução de 70% no tempo de contratação",
          "Avaliação de fit cultural",
          "Dashboards em tempo real"
        ]}
        pricing={{
          type: 'subscription',
          currency: 'BRL'
        }}
      />
      
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
