
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Users, Target, TrendingUp, Lightbulb } from 'lucide-react';

const LinkAIUseCases = () => {
  const useCases = [
    {
      title: "Conferences B2B",
      description: "Networking direcionado entre executivos, vendedores e tomadores de decisão",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Feiras de Negócios",
      description: "Conecta expositores com visitantes qualificados baseado em interesses específicos",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Eventos de Investimento", 
      description: "Facilita encontros entre startups, investidores e aceleradoras com afinidade setorial",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Congressos Acadêmicos",
      description: "Promove colaborações entre pesquisadores de áreas complementares",
      icon: <Lightbulb className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso Estratégicos"
          subtitle="LinkAI se adapta a diferentes tipos de eventos e objetivos de networking"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-legal mb-4 flex justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold text-legal mb-3">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkAIUseCases;
