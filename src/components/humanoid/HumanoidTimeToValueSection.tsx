import React from 'react';
import { Plug, PlayCircle, BarChart3 } from 'lucide-react';

const HumanoidTimeToValueSection = () => {
  const steps = [
    {
      number: '1',
      icon: <Plug className="w-12 h-12" />,
      title: 'Conecte seus sistemas.',
      description: 'Integre em minutos com suas ferramentas existentes'
    },
    {
      number: '2',
      icon: <PlayCircle className="w-12 h-12" />,
      title: 'Ative seus agentes.',
      description: 'Escolha e configure os agentes ideais para seu negócio'
    },
    {
      number: '3',
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Veja resultados em tempo real.',
      description: 'Acompanhe o impacto desde o primeiro dia'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-legal-cyan/20 backdrop-blur-sm rounded-full border border-legal-cyan/30">
              <span className="text-2xl">⚙️</span>
              <span className="text-sm font-bold tracking-wider text-legal-cyan">TIME-TO-VALUE</span>
            </div>
            
            <h2 className="font-haas text-3xl md:text-5xl font-black leading-tight">
              Implantação em <span className="text-legal-cyan">dias</span>, não em meses.
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative text-center space-y-6 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Number */}
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-gradient-to-br from-legal to-legal-purple rounded-full flex items-center justify-center font-haas text-4xl font-black border-4 border-legal-cyan">
                    {step.number}
                  </div>
                  {/* Connector line (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-legal-cyan to-transparent -translate-y-1/2" />
                  )}
                </div>

                {/* Icon */}
                <div className="flex justify-center">
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-2xl text-legal-cyan">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-haas text-xl md:text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center pt-8 animate-fade-up" style={{ animationDelay: '450ms' }}>
            <p className="text-xl md:text-2xl font-bold">
              O HUMANOID entrega valor na <span className="text-legal-cyan">primeira semana</span> de uso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidTimeToValueSection;
