
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Building2, Mic, GraduationCap, Music, Users, Briefcase } from 'lucide-react';

const EventrixUseCases = () => {
  const useCases = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Eventos Corporativos",
      description: "Conferências, seminários, workshops e convenções empresariais com gestão completa de participantes e análise de ROI.",
      benefits: ["Networking inteligente", "Lead scoring automático", "Análise de engajamento"]
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Congressos e Conferências",
      description: "Eventos acadêmicos e profissionais de grande escala com múltiplas trilhas, palestrantes e atividades paralelas.",
      benefits: ["Gestão de múltiplas trilhas", "Credenciamento automático", "Certificação digital"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Eventos Educacionais",
      description: "Cursos, treinamentos, workshops e eventos de capacitação com acompanhamento de aprendizagem e certificação.",
      benefits: ["Tracking de progresso", "Avaliações integradas", "Gamificação educacional"]
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Festivais e Entretenimento",
      description: "Shows, festivais, eventos culturais e de entretenimento com gestão de público e experiência imersiva.",
      benefits: ["Controle de acesso", "Experiência personalizada", "Monetização inteligente"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Eventos de Networking",
      description: "Encontros profissionais, meetups e eventos focados em conexões e relacionamento entre participantes.",
      benefits: ["Matching automático", "Agenda de reuniões", "Follow-up inteligente"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Feiras e Exposições",
      description: "Feiras comerciais, exposições e eventos B2B com gestão de expositores, visitantes e geração de leads.",
      benefits: ["Gestão de expositores", "Lead qualification", "Análise de performance"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso Especializados"
          subtitle="Conheça as aplicações do Eventrix em diferentes tipos de eventos e segmentos"
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
                <h4 className="font-semibold text-legal mb-2">Recursos específicos:</h4>
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

export default EventrixUseCases;
