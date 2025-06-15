
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const NeuraFitProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Avaliação Inicial",
      description: "Diagnóstico completo do perfil cognitivo, emocional e espiritual através de testes científicos."
    },
    {
      number: "02", 
      title: "Plano Personalizado",
      description: "IA cria jornada customizada com jogos, exercícios e práticas adaptadas ao seu perfil único."
    },
    {
      number: "03",
      title: "Prática Gamificada",
      description: "Exercícios diários em formato de jogo com sistema de níveis, conquistas e recompensas."
    },
    {
      number: "04",
      title: "Evolução Contínua",
      description: "Acompanhamento do progresso com mentoria especializada e ajustes automáticos no plano."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Jornada de Transformação"
          subtitle="Metodologia científica em 4 etapas para desenvolvimento integral de suas capacidades"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-legal text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-legal mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeuraFitProcess;
