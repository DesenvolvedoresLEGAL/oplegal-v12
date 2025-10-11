import React from 'react';
import { Database, Brain, Bot, LineChart } from 'lucide-react';

const HumanoidLayersSection = () => {
  const layers = [
    {
      number: '1',
      emoji: '🔍',
      icon: <Database className="w-10 h-10" />,
      title: 'ENTENDE',
      subtitle: 'Estruturador de Dados Inteligente',
      description: 'O HUMANOID coleta, organiza e entende todas as informações da sua empresa. Ele conecta CRM, ERP, planilhas, WhatsApp, e-mails e APIs — limpando o caos e transformando tudo em dados com sentido e contexto.',
      highlight: 'É como dar consciência aos seus sistemas.'
    },
    {
      number: '2',
      emoji: '🧠',
      icon: <Brain className="w-10 h-10" />,
      title: 'DECIDE',
      subtitle: 'Camada de Inteligência e Correlação',
      description: 'Com os dados estruturados, o HUMANOID aprende padrões e entende relações. Ele identifica gargalos, detecta oportunidades e recomenda ações.',
      highlight: 'Ele não apenas organiza informações. Ele entende o que elas significam.'
    },
    {
      number: '3',
      emoji: '⚡',
      icon: <Bot className="w-10 h-10" />,
      title: 'AGE',
      subtitle: 'Orquestração de Agentes Produtivos',
      description: 'O HUMANOID orquestra agentes inteligentes que executam tarefas automaticamente:',
      bullets: [
        'Ligam para leads e agendam reuniões',
        'Credenciam pessoas em eventos',
        'Enviam mensagens no WhatsApp',
        'Atualizam sistemas e planilhas',
        'Geram relatórios e cobranças'
      ],
      highlight: 'Enquanto seu time pensa, o HUMANOID executa.'
    },
    {
      number: '4',
      emoji: '📊',
      icon: <LineChart className="w-10 h-10" />,
      title: 'MEDE',
      subtitle: 'Governança e ROI',
      description: 'Cada ação é auditada, medida e registrada. Você sabe quanto tempo economizou, quanto custou e quanto retornou.',
      highlight: 'Finalmente, uma IA com responsabilidade financeira.'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-[hsl(242,97%,37%)]/30 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="font-haas text-3xl md:text-5xl font-black leading-tight">
              <span className="text-[hsl(176,98%,51%)]">AS 4 CAMADAS</span> DO HUMANOID
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Como funciona o sistema nervoso central da sua empresa
            </p>
          </div>

          {/* Layers Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {layers.map((layer, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[hsl(176,98%,51%)]/50 transition-all group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[hsl(242,97%,37%)] to-[hsl(242,86%,58%)] rounded-full flex items-center justify-center font-bold text-2xl border-4 border-gray-900">
                  {layer.number}
                </div>

                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[hsl(176,98%,51%)]/20 rounded-xl text-[hsl(176,98%,51%)] group-hover:scale-110 transition-transform">
                    {layer.icon}
                  </div>
                  <div>
                    <h3 className="font-haas text-2xl font-bold text-[hsl(176,98%,51%)]">
                      {layer.title}
                    </h3>
                    <p className="text-sm text-white/60 font-semibold">
                      {layer.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 leading-relaxed mb-4">
                  {layer.description}
                </p>

                {/* Bullets if exist */}
                {layer.bullets && (
                  <ul className="space-y-2 mb-4 ml-4">
                    {layer.bullets.map((bullet, i) => (
                      <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                        <span className="text-[hsl(176,98%,51%)] mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Highlight */}
                <p className="text-[hsl(176,98%,51%)] font-bold italic mt-6 border-l-4 border-[hsl(176,98%,51%)] pl-4">
                  {layer.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidLayersSection;
