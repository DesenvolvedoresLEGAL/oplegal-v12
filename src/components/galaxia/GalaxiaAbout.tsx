import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const GalaxiaAbout = () => {
  return (
    <section className="py-20 bg-legal-gray">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="IA feita para o seu negócio, não para todos."
          center
        />
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Na LEGAL acreditamos que Inteligência Artificial não deve ser plugada de forma genérica.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Com a <strong className="text-legal-primary">GalaxIA™</strong>, mergulhamos nos seus processos, pessoas e dores reais, criando 
            <strong className="text-legal-secondary"> agentes de IA</strong>, <strong className="text-legal-secondary">automações</strong> e 
            <strong className="text-legal-secondary"> copilotos</strong> que eliminam gargalos, reduzem custos e aumentam a eficiência.
          </p>
          
          <p className="text-xl font-semibold text-legal-primary">
            É artesanal, sob medida e estratégico — como deve ser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalaxiaAbout;