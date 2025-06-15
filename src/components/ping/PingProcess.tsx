
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const PingProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Configuração Automática",
      description: "Conecte WhatsApp Business, redes sociais e canais existentes em poucos cliques com setup guiado."
    },
    {
      number: "02", 
      title: "Treinamento da IA",
      description: "Nossa IA aprende sobre seu negócio, produtos e tom de voz para atendimento personalizado."
    },
    {
      number: "03",
      title: "Central Unificada",
      description: "Todos os canais convergem em uma interface única onde IA e agentes trabalham em harmonia."
    },
    {
      number: "04",
      title: "Insights Contínuos",
      description: "Dashboard integrado ao Blue fornece KPIs, métricas e insights para otimização constante."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Como Funciona o Ping"
          subtitle="Processo simplificado em 4 etapas para implementação rápida e resultados imediatos"
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
