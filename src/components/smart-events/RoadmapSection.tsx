
import React from 'react';
import { CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const RoadmapSection = () => {
  const phases = [
    {
      name: "Foundation",
      period: "0-30 dias",
      title: "Conectividade + credenciamento facial",
      description: "Estabelecemos a base tecnológica com infraestrutura de conectividade robusta e sistema de credenciamento facial que elimina filas.",
      tasks: [
        "Instalação da infraestrutura FWA 5G",
        "Configuração do WiFi de alta densidade",
        "Implementação do FacePass para credenciamento",
        "Treinamento da equipe operacional",
        "Setup dos dashboards básicos"
      ]
    },
    {
      name: "Intelligence",
      period: "30-90 dias",
      title: "Sensores IoT, IA, dashboards em tempo real",
      description: "Expandimos as capacidades com sensores IoT, sistemas de IA para matchmaking e análises avançadas em tempo real.",
      tasks: [
        "Implementação de sensores IoT para mapeamento",
        "Ativação do sistema LinkAI de matchmaking",
        "Configuração dos painéis de BI em tempo real",
        "Integração com sistemas de gestão de eventos",
        "Setup de análises preditivas"
      ]
    },
    {
      name: "Immersive & Autonomous",
      period: "90-180 dias",
      title: "Drones, AR, relatórios preditivos",
      description: "Transformamos o evento com experiências imersivas, serviços autônomos de drones e insights preditivos avançados.",
      tasks: [
        "Integração de drones para delivery e monitoramento",
        "Implementação de experiências em realidade aumentada",
        "Configuração de relatórios preditivos",
        "Automação completa de fluxos operacionais",
        "Mensuração avançada de ROI com FitScore™"
      ]
    }
  ];

  return (
    <section className="py-20 bg-legal-gray" id="roadmap">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Roadmap de Implantação Smart Events™"
          subtitle="Um plano estruturado de 90-180 dias para transformar seu evento em um Smart Event™ completo."
          center
        />

        <div className="max-w-4xl mx-auto mt-12">
          {/* Timeline visualization */}
          <div className="relative flex justify-between mb-12">
            <div className="absolute h-1 bg-gray-200 left-0 right-0 top-1/2 transform -translate-y-1/2"></div>
            
            {phases.map((phase, index) => (
              <div key={index} className="relative flex flex-col items-center z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center 
                  ${index === 0 ? "bg-legal-cyan" : index === 1 ? "bg-legal" : "bg-legal-purple"} 
                  text-white`}>
                  {index + 1}
                </div>
                <p className="mt-2 font-semibold">{phase.name}</p>
                <span className="text-sm text-gray-500">{phase.period}</span>
              </div>
            ))}
          </div>

          {/* Phase details */}
          {phases.map((phase, index) => (
            <div key={index} className="bg-legal-gray p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-2 text-legal flex items-center">
                <span className="text-legal-cyan mr-2">{phase.name}</span>
                {phase.title}
              </h3>
              <p className="text-gray-600 mb-4">{phase.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-center">
                    <CheckCircle className="text-legal-cyan mr-2" size={18} />
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
