
import React from 'react';

const NuvyoStats = () => {
  const stats = [
    { number: "4K/8K", label: "Qualidade", description: "Resolução cinematográfica profissional" },
    { number: "500+", label: "Projetos", description: "Eventos e produções realizadas" },
    { number: "98%", label: "Satisfação", description: "Clientes aprovam nosso trabalho" },
    { number: "24h", label: "Entrega", description: "Opção de entrega expressa" }
  ];

  return (
    <section className="py-16 bg-white border-b">
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

export default NuvyoStats;
