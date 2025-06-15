
import React from 'react';

const NeuraFitStats = () => {
  const stats = [
    { number: "95%", label: "Melhoria Cognitiva", description: "Usuários relatam aumento na capacidade de foco" },
    { number: "87%", label: "Redução Ansiedade", description: "Diminuição nos níveis de estresse e ansiedade" },
    { number: "92%", label: "Engajamento Diário", description: "Taxa de uso consistente da plataforma" },
    { number: "21dias", label: "Formação Hábitos", description: "Tempo médio para criar novos hábitos mentais" }
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

export default NeuraFitStats;
