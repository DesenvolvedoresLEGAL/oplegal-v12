
import React, { useState } from "react";
import { Calendar, Monitor, Users, Award } from "lucide-react";
import SectionTitle from "../SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RoadmapSection = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      name: "Foundation",
      period: "0-30 dias",
      icon: <Calendar size={24} />,
      title: "Conectividade + credenciamento facial",
      description:
        "Estabelecemos a base tecnológica com infraestrutura de conectividade robusta e sistema de credenciamento facial que elimina filas.",
      tasks: [
        "Instalação da infraestrutura FWA 5G",
        "Configuração do WiFi de alta densidade",
        "Implementação do MagicPass para credenciamento",
        "Treinamento da equipe operacional",
        "Setup dos dashboards básicos"
      ]
    },
    {
      id: 1,
      name: "Intelligence",
      period: "30-90 dias",
      icon: <Monitor size={24} />,
      title: "Sensores IoT, IA, dashboards em tempo real",
      description:
        "Expandimos as capacidades com sensores IoT, sistemas de IA para matchmaking e análises avançadas em tempo real.",
      tasks: [
        "Implementação de sensores IoT para mapeamento",
        "Ativação do sistema LinkAI de matchmaking",
        "Configuração dos painéis de BI em tempo real",
        "Integração com sistemas de gestão de eventos",
        "Setup de análises preditivas"
      ]
    },
    {
      id: 2,
      name: "Immersive & Autonomous",
      period: "90-180 dias",
      icon: <Users size={24} />,
      title: "Drones, AR, relatórios preditivos",
      description:
        "Transformamos o evento com experiências imersivas, serviços autônomos de drones e insights preditivos avançados.",
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
    <section className="py-20 bg-legal text-white" id="implantacao">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Implantação Smart Events™"
          subtitle="Um roadmap estruturado de 90-180 dias para transformar seu evento em um Smart Event™ completo."
          center
          light
        />

        <div className="max-w-4xl mx-auto mt-12">
          {/* Timeline navigator */}
          <div className="flex justify-between items-center mb-12 relative">
            <div className="absolute h-1 bg-gray-700 left-0 right-0 top-1/2 transform -translate-y-1/2 z-0"></div>
            
            {phases.map((phase) => (
              <div 
                key={phase.id}
                className="relative z-10 flex flex-col items-center cursor-pointer"
                onClick={() => setActivePhase(phase.id)}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    activePhase === phase.id ? "bg-legal-green text-white" : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {phase.icon}
                </div>
                <span className="mt-2 font-medium">{phase.name}</span>
                <span className="text-sm text-gray-400">{phase.period}</span>
              </div>
            ))}
          </div>

          {/* Active phase details */}
          <div className="bg-legal-black bg-opacity-30 rounded-xl p-8 transition-all duration-500 animate-fade-in">
            <h3 className="text-2xl font-bold mb-2 flex items-center">
              <span className="text-legal-green mr-2">{phases[activePhase].name}</span>
              {phases[activePhase].title}
            </h3>
            <p className="text-gray-300 mb-6">
              {phases[activePhase].description}
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {phases[activePhase].tasks.map((task, index) => (
                <li key={index} className="flex items-center">
                  <Award className="text-legal-green mr-2" size={16} />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              asChild
              className="bg-legal-green hover:bg-legal-green/90 text-white mt-4"
            >
              <Link to="/implantacao">
                Saiba mais sobre esta fase
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              asChild
              className="bg-white hover:bg-white/90 text-legal px-8 py-6 text-lg h-auto"
            >
              <Link to="/contato">
                Agende um diagnóstico para seu evento
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
