
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const SonixProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Pedido Inteligente",
      description: "Faça seu pedido pelo app premium com IA que sugere produtos e otimiza automaticamente sua entrega."
    },
    {
      number: "02", 
      title: "Preparação Express",
      description: "Nossa equipe especializada prepara seu pedido em instalações de alta tecnologia em tempo recorde."
    },
    {
      number: "03",
      title: "Decolagem Automática",
      description: "Drone autônomo decola automaticamente e navega pela rota mais eficiente usando IA avançada."
    },
    {
      number: "04",
      title: "Entrega Precisa",
      description: "Chegada no local exato com precisão centimétrica e confirmação automática via app."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-legal/5 to-legal-purple/5">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Como Funciona o Sonix"
          subtitle="Processo simplificado em 4 etapas para máxima eficiência e experiência premium"
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

export default SonixProcess;
