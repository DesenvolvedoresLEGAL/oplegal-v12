
import React from 'react';

const LinkAIStats = () => {
  const stats = [
    { number: "95%", label: "Match Quality", description: "Taxa de aprovação das conexões" },
    { number: "3x", label: "Mais Conexões", description: "Que networking tradicional" },
    { number: "24h", label: "Acompanhamento", description: "Pós-evento automático" },
    { number: "89%", label: "Conversão", description: "Conexões em oportunidades" }
  ];

  return (
    <section className="py-16 bg-white">
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

export default LinkAIStats;
