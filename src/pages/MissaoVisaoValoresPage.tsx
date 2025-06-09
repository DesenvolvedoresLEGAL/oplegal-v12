
import React from 'react';
import { Helmet } from 'react-helmet-async';
import MissaoVisaoValoresHero from '@/components/missao-visao-valores/MissaoVisaoValoresHero';
import ManifestoSection from '@/components/missao-visao-valores/ManifestoSection';
import BhagSection from '@/components/missao-visao-valores/BhagSection';
import MissaoSection from '@/components/missao-visao-valores/MissaoSection';
import VisaoSection from '@/components/missao-visao-valores/VisaoSection';
import ValoresFrameworkSection from '@/components/missao-visao-valores/ValoresFrameworkSection';
import PrincipiosSection from '@/components/missao-visao-valores/PrincipiosSection';
import ComoAgimosSection from '@/components/missao-visao-valores/ComoAgimosSection';
import CallToAction from '@/components/CallToAction';

const MissaoVisaoValoresPage = () => {
  return (
    <>
      <Helmet>
        <title>Missão, Visão e Valores | LEGAL</title>
        <meta name="description" content="Conheça nossa missão, visão e valores. Somos mais que uma empresa de tecnologia. Somos visionários, executores, criadores de valor e cultivadores de alma." />
        <meta name="keywords" content="missão, visão, valores, LEGAL, cultura, manifesto, VERA, princípios" />
      </Helmet>
      
      <main className="bg-background text-foreground font-unica">
        <MissaoVisaoValoresHero />
        <ManifestoSection />
        <BhagSection />
        <MissaoSection />
        <VisaoSection />
        <ValoresFrameworkSection />
        <PrincipiosSection />
        <ComoAgimosSection />
        <CallToAction
          title="Venha Fazer Parte da Nossa História"
          subtitle="Junte-se a nós nessa jornada de transformação e inovação. Conecte-se com nossa missão e ajude a construir o futuro da tecnologia no Brasil."
          buttonText="Ver Vagas Abertas"
          buttonLink="/vagas"
          secondaryButtonText="Conhecer o Time"
          secondaryButtonLink="/time"
          background="gradient"
        />
      </main>
    </>
  );
};

export default MissaoVisaoValoresPage;
