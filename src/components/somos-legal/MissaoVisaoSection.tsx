
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Rocket, TrendingUp } from 'lucide-react'; // Ícones de exemplo

const MissaoVisaoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Missão */}
          <div className="text-center md:text-left p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-gray-50 border-t-4 border-legal-cyan">
            <div className="flex justify-center md:justify-start mb-4">
              <Rocket size={48} className="text-legal-cyan" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-legal-purple mb-4 uppercase tracking-wide">MISSÃO</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Impulsionar e transformar eventos e negócios por meio da tecnologia.
            </p>
          </div>

          {/* Visão */}
          <div className="text-center md:text-left p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-gray-50 border-t-4 border-legal-purple">
            <div className="flex justify-center md:justify-start mb-4">
              <TrendingUp size={48} className="text-legal-purple" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-legal-cyan mb-4 uppercase tracking-wide">VISÃO</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Ser a maior e melhor TechCo do Brasil até 2034.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissaoVisaoSection;
