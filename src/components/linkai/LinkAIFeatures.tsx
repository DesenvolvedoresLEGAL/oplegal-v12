
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Network, MessageSquare, Calendar, BarChart3, Target } from 'lucide-react';

const LinkAIFeatures = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Avançada de Matchmaking",
      description: "Algoritmos de machine learning que analisam interesses, objetivos e comportamentos para conexões precisas"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking Inteligente",
      description: "Sugestões personalizadas baseadas em perfis profissionais, setor de atuação e objetivos de negócio"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Chat Integrado",
      description: "Sistema de mensagens nativo com tradução automática e quebra-gelos sugeridos pela IA"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Agendamento Automático",
      description: "IA que sugere e agenda reuniões baseadas na disponibilidade e compatibilidade dos participantes"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics de Conexões",
      description: "Relatórios detalhados sobre qualidade das conexões, ROI de networking e oportunidades geradas"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Matchmaking por Objetivos",
      description: "Conexões direcionadas para vendas, parcerias, investimentos, recrutamento ou conhecimento"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Inteligência Artificial para Networking"
          subtitle="Tecnologia avançada que transforma conexões casuais em oportunidades estratégicas de negócio"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-legal mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-legal mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkAIFeatures;
