
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Building2, Sun, Factory, ShoppingBag, Plane, Zap } from 'lucide-react';

const BrilixUseCases = () => {
  const useCases = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Edifícios Comerciais e Residenciais",
      description: "Limpeza de fachadas, janelas e estruturas externas de prédios comerciais, condomínios e torres residenciais com total segurança.",
      benefits: ["Sem interdição de áreas", "Operação silenciosa", "Acesso a locais complexos"]
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Painéis Solares e Energia Renovável",
      description: "Manutenção preventiva de placas fotovoltaicas, aumentando eficiência energética e prolongando vida útil dos equipamentos.",
      benefits: ["Aumento de 25% na eficiência", "Manutenção sem desmontagem", "Inspeção térmica incluída"]
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Indústrias e Plantas Industriais",
      description: "Limpeza de estruturas industriais, tanques, silos e equipamentos em grande altura com precisão e segurança absoluta.",
      benefits: ["Sem parada de produção", "Acesso a áreas confinadas", "Relatório de inspeção"]
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Shopping Centers e Grandes Superfícies",
      description: "Manutenção de coberturas, fachadas e estruturas de vidro de shopping centers, hipermercados e centros comerciais.",
      benefits: ["Operação durante funcionamento", "Limpeza de grandes áreas", "Flexibilidade de horários"]
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Aeroportos e Infraestrutura Crítica",
      description: "Limpeza especializada de hangares, terminais aeroportuários e estruturas de infraestrutura crítica nacional.",
      benefits: ["Certificação ANAC", "Protocolos de segurança", "Operação 24/7"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Linhas de Transmissão e Torres",
      description: "Inspeção e limpeza de torres de transmissão, estruturas de telecomunicações e infraestrutura elétrica.",
      benefits: ["Alta precisão", "Sem interrupção do serviço", "Segurança elétrica"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso Especializados"
          subtitle="Conheça as aplicações do Brilix em diferentes setores e tipos de estrutura"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-legal-purple bg-legal-purple/10 p-3 rounded-lg">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-legal mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                </div>
              </div>
              
              <div className="ml-16">
                <h4 className="font-semibold text-legal mb-2">Benefícios específicos:</h4>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-legal-cyan rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrilixUseCases;
