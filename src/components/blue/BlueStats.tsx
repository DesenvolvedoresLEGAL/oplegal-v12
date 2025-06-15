
import React from 'react';

const BlueStats = () => {
  const stats = [
    { number: "95%", label: "Precisão IA", description: "Taxa de acerto em previsões" },
    { number: "10x", label: "Mais Rápido", description: "Que soluções tradicionais" },
    { number: "500+", label: "Empresas", description: "Confiam no Blue" },
    { number: "99.9%", label: "Uptime", description: "Disponibilidade garantida" }
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

export default BlueStats;
