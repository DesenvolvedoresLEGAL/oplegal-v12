
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const FacePassProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Cadastro Prévio",
      description: "Participantes fazem upload de foto através de formulário seguro ou app do evento."
    },
    {
      number: "02", 
      title: "Processamento IA",
      description: "Nossa IA processa e cria perfis biométricos únicos com algoritmos avançados."
    },
    {
      number: "03",
      title: "Reconhecimento Instantâneo",
      description: "No evento, câmeras identificam e liberam acesso automaticamente em 2 segundos."
    },
    {
      number: "04",
      title: "Monitoramento Contínuo",
      description: "Acompanhamento em tempo real com relatórios e analytics detalhados."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Como Funciona"
          subtitle="Processo simples e seguro em 4 etapas para implementação do FacePass"
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

export default FacePassProcess;
