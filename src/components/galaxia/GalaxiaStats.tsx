import React from 'react';

const GalaxiaStats = () => {
  const stats = [
    { number: "50%", label: "Redução de Custos", description: "Em infraestrutura de IA" },
    { number: "99.9%", label: "Uptime", description: "Disponibilidade garantida" },
    { number: "10x", label: "Escalabilidade", description: "Crescimento automático" },
    { number: "24/7", label: "Suporte", description: "Atendimento especializado" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <article key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-legal mb-2">{stat.number}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalaxiaStats;