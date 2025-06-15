
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, MessageSquare, Brain, Shield, Zap, Users } from 'lucide-react';

const HumanoidFeatures = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Interação Natural",
      description: "Movimentos fluidos e expressões faciais realistas para interação humanóide autêntica"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Conversação Inteligente",
      description: "IA conversacional avançada com processamento de linguagem natural em português"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Aprendizado Contínuo",
      description: "Machine Learning que evolui com cada interação para respostas mais precisas"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Garantida",
      description: "Protocolos de segurança avançados e conformidade total com normas de robótica"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automação Inteligente",
      description: "Execução autônoma de tarefas complexas com precisão e eficiência"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalização Total",
      description: "Configuração adaptável para diferentes eventos, marcas e necessidades específicas"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Tecnologia Humanóide Avançada"
          subtitle="Recursos que transforman a interação entre humanos e robôs em experiências extraordinárias"
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

export default HumanoidFeatures;
