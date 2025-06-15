
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const NeurahackProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Mapeamento de Ativos",
      description: "IA identifica e cataloga todos os ativos digitais, aplicações e pontos de entrada da organização."
    },
    {
      number: "02", 
      title: "Análise de Vulnerabilidades",
      description: "Execução automatizada de testes de penetração e varredura completa de segurança."
    },
    {
      number: "03",
      title: "Priorização de Riscos",
      description: "Machine learning classifica vulnerabilidades por criticidade e impacto no negócio."
    },
    {
      number: "04",
      title: "Monitoramento Contínuo",
      description: "Vigilância 24/7 com alertas automáticos e resposta a incidentes em tempo real."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Metodologia Neurahack"
          subtitle="Processo estruturado em 4 etapas para proteção completa da sua infraestrutura digital"
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

export default NeurahackProcess;
