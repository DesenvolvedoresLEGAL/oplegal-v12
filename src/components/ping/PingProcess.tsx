
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const PingProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Descoberta de Ativos",
      description: "IA mapeia automaticamente toda infraestrutura, aplicações e dependências críticas."
    },
    {
      number: "02", 
      title: "Configuração Inteligente",
      description: "Setup automático de monitoramento baseado em best practices e padrões da indústria."
    },
    {
      number: "03",
      title: "Aprendizado de Padrões",
      description: "Machine Learning analisa comportamento normal e estabelece baselines dinâmicos."
    },
    {
      number: "04",
      title: "Monitoramento Proativo",
      description: "Vigilância contínua com predição de falhas e otimização automática de performance."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Metodologia Ping"
          subtitle="Processo estruturado em 4 etapas para monitoramento inteligente de infraestrutura"
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

export default PingProcess;
