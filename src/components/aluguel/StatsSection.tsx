
import React from 'react';

const StatsSection = () => {
  const stats = [
    { 
      number: '5000+', 
      label: 'Eventos Conectados', 
      description: 'Mais de 5 mil eventos com conectividade garantida em todo o Brasil',
      ariaLabel: 'Mais de cinco mil eventos conectados com sucesso'
    },
    { 
      number: '99.9%', 
      label: 'Uptime Garantido', 
      description: 'Disponibilidade de rede com SLA premium e compensação por indisponibilidade',
      ariaLabel: 'Noventa e nove vírgula nove por cento de uptime garantido'
    },
    { 
      number: '24h', 
      label: 'Suporte Especializado', 
      description: 'Equipe técnica certificada disponível 24 horas por dia durante eventos',
      ariaLabel: 'Suporte técnico disponível vinte e quatro horas por dia'
    },
    { 
      number: '1M+', 
      label: 'Dispositivos Conectados', 
      description: 'Mais de 1 milhão de dispositivos já conectados com sucesso às nossas redes',
      ariaLabel: 'Mais de um milhão de dispositivos conectados'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-legal/5 to-legal-cyan/5" aria-labelledby="stats-title">
      <div className="container mx-auto px-4">
        <h2 id="stats-title" className="sr-only">Estatísticas de Performance da LEGAL</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <article key={index} className="text-center">
              <div 
                className="text-4xl md:text-5xl font-black text-legal mb-2 will-change-transform" 
                aria-label={stat.ariaLabel}
              >
                {stat.number}
              </div>
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
