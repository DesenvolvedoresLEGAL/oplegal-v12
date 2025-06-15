
import React from 'react';

const BrilixStats = () => {
  const stats = [
    { number: "70%", label: "Economia", description: "Redução de custos operacionais" },
    { number: "5x", label: "Velocidade", description: "Mais rápido que métodos tradicionais" },
    { number: "100%", label: "Segurança", description: "Zero acidentes de trabalho" },
    { number: "200m", label: "Alcance", description: "Altura máxima de operação" }
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

export default BrilixStats;
