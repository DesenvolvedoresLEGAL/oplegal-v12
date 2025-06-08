
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const FitScoreProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Análise de Perfil",
      description: "IA analisa descrição da vaga e define perfil ideal do candidato automaticamente."
    },
    {
      number: "02", 
      title: "Sourcing Inteligente",
      description: "Busca automatizada em múltiplas bases de dados e redes sociais profissionais."
    },
    {
      number: "03",
      title: "Avaliação Preditiva",
      description: "Algoritmos avaliam fit técnico, cultural e comportamental com scoring detalhado."
    },
    {
      number: "04",
      title: "Insights Contínuos",
      description: "Acompanhamento pós-contratação com analytics de performance e engajamento."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Como Funciona"
          subtitle="Processo inteligente e automatizado para otimizar sua estratégia de contratação"
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

export default FitScoreProcess;
