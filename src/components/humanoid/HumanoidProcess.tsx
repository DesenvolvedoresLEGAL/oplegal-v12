
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const HumanoidProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "Configuração Inteligente",
      description: "Definimos ICP, segmentos-alvo e critérios de qualificação personalizados para seu negócio."
    },
    {
      number: "02", 
      title: "Captação Automática",
      description: "IA rastreia internet 24/7 identificando leads qualificados e os insere no CRM automaticamente."
    },
    {
      number: "03",
      title: "Qualificação SDR",
      description: "Leads são qualificados via WhatsApp (Ping) e ligações com IA conversacional natural."
    },
    {
      number: "04",
      title: "Entrega de Oportunidades",
      description: "Leads qualificados são entregues para seu time de vendas com contexto completo."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Como Funciona o Humanoid"
          subtitle="Processo automatizado de captação, qualificação e entrega de oportunidades qualificadas"
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

export default HumanoidProcess;
