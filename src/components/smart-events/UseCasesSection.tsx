
import React from 'react';
import Card from '@/components/Card';
import SectionTitle from '@/components/SectionTitle';

const UseCasesSection = () => {
  const useCases = [
    {
      title: "Congressos e Fóruns",
      description: "Credenciamento facial, matchmaking inteligente e engajamento por IA em tempo real.",
      benefits: ["Experiência sem atrito", "Networking qualificado", "Conteúdo personalizado"]
    },
    {
      title: "Feiras e Exposições",
      description: "Mapeamento de fluxo, análise de leads e medição precisa de ROI para expositores.",
      benefits: ["Geração de leads qualificados", "Dashboard para expositores", "Análise em tempo real"]
    },
    {
      title: "Lançamentos e Ativações",
      description: "Experiências imersivas com RA/RV, drones para delivery e engajamento digital amplificado.",
      benefits: ["Experiências memoráveis", "Ativações digitais", "Alcance expandido"]
    },
    {
      title: "Convenções Internas",
      description: "Votação segura, feedback em tempo real e análise comportamental para decisões estratégicas.",
      benefits: ["Tomada de decisão ágil", "Participação amplificada", "Análise de engajamento"]
    }
  ];

  return (
    <section className="py-20 bg-legal-gray" id="casos">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso"
          subtitle="Como as tecnologias Smart Events™ se aplicam a diferentes tipos de eventos."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              title={useCase.title}
              subtitle={useCase.description}
              className="h-full"
            >
              <div className="mt-4">
                <p className="font-medium text-legal mb-2">Principais benefícios:</p>
                <ul className="styled-list">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
