import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const GalaxiaProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Análise de Necessidades",
      description: "Consultoria especializada para mapear requisitos e definir arquitetura ideal."
    },
    {
      number: "02", 
      title: "Configuração Personalizada",
      description: "Setup da infraestrutura cloud dedicada com recursos otimizados."
    },
    {
      number: "03",
      title: "Implementação e Testes",
      description: "Deploy dos modelos de IA e validação completa dos sistemas."
    },
    {
      number: "04",
      title: "Monitoramento Contínuo",
      description: "Acompanhamento 24/7 com otimizações automáticas e suporte especializado."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Como Implementamos"
          subtitle="Processo estruturado em 4 etapas para garantir sucesso na implementação"
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

export default GalaxiaProcess;