
import React from 'react';
import HeroSectionSomosLegal from '@/components/somos-legal/HeroSectionSomosLegal';
import NossaHistoriaSection from '@/components/somos-legal/NossaHistoriaSection';
import NossaMetaSection from '@/components/somos-legal/NossaMetaSection';
import MissaoVisaoSection from '@/components/somos-legal/MissaoVisaoSection';
import ValoresSection from '@/components/somos-legal/ValoresSection';
// Importaremos as outras seções aqui conforme as criamos
// import DepoimentosSomosLegalSection from '@/components/somos-legal/DepoimentosSomosLegalSection';
// import HistoriasSucessoSomosLegalSection from '@/components/somos-legal/HistoriasSucessoSomosLegalSection';
// import SecaoFinalSomosLegal from '@/components/somos-legal/SeaoFinalSomosLegal';
// import CtaSomosLegalSection from '@/components/somos-legal/CtaSomosLegalSection';

const SomosLegalPage = () => {
  return (
    <div className="bg-background text-foreground font-unica">
      <HeroSectionSomosLegal />
      <NossaHistoriaSection />
      <NossaMetaSection />
      <MissaoVisaoSection />
      <ValoresSection />
      {/* <DepoimentosSomosLegalSection /> */}
      {/* <HistoriasSucessoSomosLegalSection /> */}
      {/* <SeaoFinalSomosLegal /> */}
      {/* <CtaSomosLegalSection /> */}
    </div>
  );
};

export default SomosLegalPage;
