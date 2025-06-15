
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const Speedy5GProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Análise de Cobertura",
      description: "Avaliação detalhada da área para garantir sinal 5G otimizado e cobertura completa."
    },
    {
      number: "02", 
      title: "Instalação Profissional",
      description: "Setup completo com equipamentos certificados e configuração otimizada em 2 horas."
    },
    {
      number: "03",
      title: "Configuração Avançada",
      description: "Otimização de parâmetros específicos para suas aplicações e necessidades críticas."
    },
    {
      number: "04",
      title: "Monitoramento 24/7",
      description: "Vigilância contínua da performance com otimização automática e suporte proativo."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Implementação Speedy5G"
          subtitle="Processo estruturado em 4 etapas para máxima performance desde o primeiro dia"
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

export default Speedy5GProcess;
