
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Building2, Code, Users, TrendingUp } from 'lucide-react';

const FitScoreUseCases = () => {
  const useCases = [
    {
      title: "Startups e Scale-ups",
      description: "Contratação rápida e assertiva para crescimento acelerado",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Empresas de Tecnologia",
      description: "Avaliação técnica especializada para desenvolvedores e engenheiros",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Consultorias de RH", 
      description: "Ferramenta white-label para potencializar serviços de recrutamento",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Grandes Corporações",
      description: "People Analytics avançado para gestão estratégica de talentos",
      icon: <Building2 className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso"
          subtitle="FitScore se adapta a diferentes necessidades e segmentos de mercado"
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

export default FitScoreUseCases;
