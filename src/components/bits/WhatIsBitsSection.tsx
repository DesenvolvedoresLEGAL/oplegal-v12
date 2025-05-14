
import React from 'react';
import { Gift, Star, Users } from 'lucide-react';

const WhatIsBitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-bits-purple mb-6 font-space">O que é o BITS™?</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          BITS™ é o programa de fidelidade exclusivo da LEGAL, desenhado para recompensar sua paixão por tecnologia e inovação. Cada interação com nossos serviços — desde alugar um equipamento até utilizar nossas soluções de IA — acumula BITS que abrem portas para um universo de vantagens.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 border border-bits-cyan/30 rounded-lg shadow-lg bg-gradient-to-br from-bits-lightGray to-white">
            <Gift size={48} className="mx-auto mb-4 text-bits-cyan" />
            <h3 className="text-xl font-bold text-bits-purple mb-2">Pontos que Valem Ouro</h3>
            <p className="text-gray-600">Acumule BITS e troque por descontos, produtos e serviços exclusivos.</p>
          </div>
          <div className="p-6 border border-bits-cyan/30 rounded-lg shadow-lg bg-gradient-to-br from-bits-lightGray to-white">
            <Star size={48} className="mx-auto mb-4 text-bits-cyan" />
            <h3 className="text-xl font-bold text-bits-purple mb-2">Upgrades Exclusivos</h3>
            <p className="text-gray-600">Suba de nível e tenha acesso a benefícios VIP e experiências únicas.</p>
          </div>
          <div className="p-6 border border-bits-cyan/30 rounded-lg shadow-lg bg-gradient-to-br from-bits-lightGray to-white">
            <Users size={48} className="mx-auto mb-4 text-bits-cyan" />
            <h3 className="text-xl font-bold text-bits-purple mb-2">Comunidade VIP</h3>
            <p className="text-gray-600">Faça parte de um grupo seleto com acesso antecipado a novidades e eventos.</p>
          </div>
        </div>
        <p className="text-2xl font-semibold text-bits-purple italic">
          “Mais do que pontos, um <span className="text-bits-cyan">passaporte</span> para o futuro.”
        </p>
      </div>
    </section>
  );
};

export default WhatIsBitsSection;
