
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const SonixProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Captura de Áudio",
      description: "Upload ou gravação direta com suporte a múltiplos formatos e fontes de áudio."
    },
    {
      number: "02", 
      title: "Processamento IA",
      description: "Análise avançada com algoritmos de machine learning para transcrição e insights."
    },
    {
      number: "03",
      title: "Análise Inteligente",
      description: "Extração de sentimentos, palavras-chave e padrões comportamentais automaticamente."
    },
    {
      number: "04",
      title: "Entrega de Resultados",
      description: "Relatórios detalhados, dashboards interativos e APIs para integração completa."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Metodologia Sonix"
          subtitle="Processo estruturado em 4 etapas para máxima extração de valor do seu conteúdo de áudio"
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
