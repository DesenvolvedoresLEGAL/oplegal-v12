
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const HumanoidProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Configuração Personalizada",
      description: "Definimos perfil, personalidade e funções específicas do Humanoid para seu evento."
    },
    {
      number: "02", 
      title: "Treinamento IA Especializado",
      description: "Ajustamos a IA com conhecimento específico sobre seu evento, marca e audiência."
    },
    {
      number: "03",
      title: "Implementação e Testes",
      description: "Instalação no local com testes completos de funcionamento e interação."
    },
    {
      number: "04",
      title: "Operação e Monitoramento",
      description: "Acompanhamento em tempo real com suporte técnico especializado durante todo o evento."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Como Implementamos"
          subtitle="Processo estruturado em 4 etapas para integração perfeita do Humanoid"
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

export default HumanoidProcess;
