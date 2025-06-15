
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const LinkAIProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Cadastro Inteligente",
      description: "Participantes preenchem perfil detalhado com objetivos, interesses e disponibilidade para networking."
    },
    {
      number: "02", 
      title: "Análise Comportamental",
      description: "IA processa dados do perfil, histórico de conexões e comportamento no evento para criar persona única."
    },
    {
      number: "03",
      title: "Matchmaking Preciso",
      description: "Algoritmo identifica e sugere conexões com maior potencial de gerar valor mútuo e resultados."
    },
    {
      number: "04",
      title: "Facilitação Ativa",
      description: "Sistema facilita o primeiro contato, agenda reuniões e acompanha o desenvolvimento das conexões."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Como Funciona o LinkAI"
          subtitle="Processo inteligente em 4 etapas para networking de alto impacto"
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

export default LinkAIProcess;
