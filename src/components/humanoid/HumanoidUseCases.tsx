
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Building, Users, Mic, ShoppingBag } from 'lucide-react';

const HumanoidUseCases = () => {
  const useCases = [
    {
      title: "Eventos Corporativos",
      description: "Recepção VIP, apresentações interativas e networking facilitado",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Feiras e Exposições",
      description: "Guia inteligente, informações de produtos e assistência personalizada",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Congressos e Seminários", 
      description: "Moderação de sessões, Q&A interativo e suporte técnico",
      icon: <Mic className="w-6 h-6" />
    },
    {
      title: "Varejo e Showrooms",
      description: "Consultoria de vendas, demonstrações de produtos e atendimento premium",
      icon: <ShoppingBag className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso"
          subtitle="Humanoid se adapta a diferentes segmentos e necessidades de negócio"
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

export default HumanoidUseCases;
