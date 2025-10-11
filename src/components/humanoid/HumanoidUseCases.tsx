
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';

const HumanoidUseCases = () => {
  const useCases = [
    {
      emoji: "🎪",
      title: "Eventos (Smart Events)",
      description: "Agentes cuidam do credenciamento com reconhecimento facial, atendimento no WhatsApp e pós-evento automático.",
      results: [
        "Check-in 5x mais rápido",
        "Relatórios prontos em minutos",
        "Zero fila, zero estresse"
      ]
    },
    {
      emoji: "⚖️",
      title: "Jurídico",
      description: "Agentes geram petições, triagens e cobranças automáticas.",
      results: [
        "3x mais produtividade por advogado",
        "Redução drástica de erros e atrasos",
        "Compliance garantido"
      ]
    },
    {
      emoji: "💬",
      title: "Comercial B2B",
      description: "SDRs de IA ligam, qualificam leads e atualizam o CRM automaticamente.",
      results: [
        "+60% em reuniões marcadas",
        "-70% no custo de aquisição",
        "Equipes focadas em fechamento"
      ]
    }
  ];

  return (
    <section className="py-32 bg-legal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-legal-purple/20 backdrop-blur-sm rounded-full border border-legal-purple/30">
            <span className="text-2xl">💼</span>
            <span className="text-sm font-bold tracking-wider text-white">CASOS DE USO</span>
          </div>
          <h2 className="font-haas text-3xl md:text-5xl font-black">
            HUMANOID em <span className="text-white">ação</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-legal-purple/50 transition-all group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-6">
                {/* Emoji */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{useCase.emoji}</span>
                </div>
                
                {/* Title */}
                <h3 className="font-haas text-2xl font-bold">
                  {useCase.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 leading-relaxed">
                  {useCase.description}
                </p>
                
                {/* Results */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  {useCase.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-legal-purple mt-0.5 flex-shrink-0">✅</span>
                      <span className="text-white/80 text-sm font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanoidUseCases;
