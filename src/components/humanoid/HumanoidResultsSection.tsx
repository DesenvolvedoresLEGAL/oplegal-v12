import React from 'react';
import { Clock, Target, TrendingDown, TrendingUp, Smile } from 'lucide-react';

const HumanoidResultsSection = () => {
  const metrics = [
    {
      icon: <Clock className="w-8 h-8" />,
      label: 'Horas poupadas',
      sublabel: 'por mês'
    },
    {
      icon: <Target className="w-8 h-8" />,
      label: 'Ações concluídas',
      sublabel: 'com qualidade'
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      label: 'Custos reduzidos',
      sublabel: 'vs operação humana'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: 'Receita gerada',
      sublabel: 'e perdas evitadas'
    },
    {
      icon: <Smile className="w-8 h-8" />,
      label: 'Satisfação',
      sublabel: 'do time e dos clientes'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-[hsl(242,97%,37%)] to-[hsl(242,86%,58%)] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-2xl">📊</span>
              <span className="text-sm font-bold tracking-wider">RESULTADOS QUE IMPORTAM</span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center space-y-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 hover:border-[hsl(176,98%,51%)]/50 transition-all animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 bg-[hsl(176,98%,51%)]/20 rounded-full text-[hsl(176,98%,51%)]">
                  {metric.icon}
                </div>
                <div>
                  <p className="font-bold text-lg leading-tight">{metric.label}</p>
                  <p className="text-sm text-white/60 mt-1">{metric.sublabel}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Message */}
          <div className="text-center space-y-6 pt-8 animate-fade-up" style={{ animationDelay: '500ms' }}>
            <p className="text-2xl md:text-3xl font-bold">
              O HUMANOID <span className="text-[hsl(176,98%,51%)]">mede o impacto real</span> de cada ação.
            </p>
            <p className="text-xl text-white/80">
              Sem achismo. Com <span className="font-bold text-white">números</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidResultsSection;
