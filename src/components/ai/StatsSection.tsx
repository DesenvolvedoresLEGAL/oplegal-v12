
import React from 'react';

interface Stat {
  number: string;
  label: string;
  description: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <section className="py-16 bg-white" aria-labelledby="stats-heading">
      <div className="container mx-auto px-4">
        <h2 id="stats-heading" className="sr-only">Estatísticas e resultados LEGAL AI</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <article key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-legal mb-2" aria-label={`${stat.number} ${stat.label}`}>{stat.number}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
