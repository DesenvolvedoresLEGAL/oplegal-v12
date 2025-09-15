import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Building, ShoppingCart, Heart, Factory } from 'lucide-react';

const GalaxiaUseCases = () => {
  const useCases = [
    {
      title: "Grandes Corporações",
      description: "Infraestrutura de IA para processos complexos e alta demanda",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "E-commerce",
      description: "Recomendações personalizadas e otimização de conversão",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Saúde e Medicina", 
      description: "Análise de dados médicos e diagnósticos assistidos por IA",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Indústria 4.0",
      description: "Automação inteligente e manutenção preditiva",
      icon: <Factory className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Setores Atendidos"
          subtitle="GalaxIA se adapta às necessidades específicas de cada indústria"
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

export default GalaxiaUseCases;