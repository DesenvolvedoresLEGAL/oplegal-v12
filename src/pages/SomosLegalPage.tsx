
import React from 'react';
import SEOHead from '@/components/SEOHead';
import HeroSectionSomosLegal from '@/components/somos-legal/HeroSectionSomosLegal';
import NossaHistoriaSection from '@/components/somos-legal/NossaHistoriaSection';
import NossaMetaSection from '@/components/somos-legal/NossaMetaSection';
import MissaoVisaoSection from '@/components/somos-legal/MissaoVisaoSection';
import ValoresSection from '@/components/somos-legal/ValoresSection';

const SomosLegalPage = () => {
  const somosLegalSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "LEGAL",
      "description": "Somos mais que uma empresa de tecnologia. Somos visionários, executores, criadores de valor e cultivadores de alma.",
      "foundingDate": "2010",
      "url": "https://operadora.legal",
      "mission": "Impulsionar e transformar eventos e negócios através da tecnologia",
      "vision": "Ser a maior e melhor TechCo do Brasil até 2034",
      "values": [
        "Visão Viva - Clareza estratégica e liderança com direção",
        "Execução Energizada - Ritmo diário e foco na entrega", 
        "Resultados com Ressonância - Impacto real e métrica viva",
        "Alinhamento com Alma - Cultura viva e conexão"
      ],
      "knowsAbout": [
        "Smart Events",
        "Inteligência Artificial",
        "Credenciamento Facial",
        "Conectividade 5G",
        "Eventos Corporativos"
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Somos LEGAL | Quem Somos, Nossa História e Cultura"
        description="Conheça a LEGAL: somos mais que uma empresa de tecnologia. Visionários, executores e criadores de valor que transformam eventos através da tecnologia. Nossa missão, história e cultura."
        keywords="sobre LEGAL, história LEGAL, cultura empresa, TechCo Brasil, missão visão valores, quem somos LEGAL, empresa tecnologia eventos"
        url="https://operadora.legal/somos-legal"
        type="website"
        schemaData={somosLegalSchema}
      />
      
      <div className="bg-background text-foreground font-unica">
        <HeroSectionSomosLegal />
        <NossaHistoriaSection />
        <NossaMetaSection />
        <MissaoVisaoSection />
        <ValoresSection />
      </div>
    </>
  );
};

export default SomosLegalPage;
