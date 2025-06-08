
import React from 'react';

const FitScoreStats = () => {
  const stats = [
    { number: "95%", label: "Precisão", description: "Taxa de acerto em previsões" },
    { number: "75%", label: "Redução de Tempo", description: "No processo de contratação" },
    { number: "10K+", label: "Candidatos", description: "Analisados mensalmente" },
    { number: "85%", label: "Retenção", description: "De talentos contratados" }
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

export default FitScoreStats;
