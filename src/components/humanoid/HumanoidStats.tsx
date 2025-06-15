
import React from 'react';

const HumanoidStats = () => {
  const stats = [
    { number: "300%", label: "Mais Leads", description: "Aumento na captação qualificada" },
    { number: "75%", label: "Taxa Conversão", description: "De lead qualificado para oportunidade" },
    { number: "24/7", label: "Operação", description: "Captação e qualificação contínua" },
    { number: "95%", label: "Precisão IA", description: "Assertividade na qualificação" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-legal mb-2">{stat.number}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanoidStats;
