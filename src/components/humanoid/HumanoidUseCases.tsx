
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Building, ShoppingCart, Heart, Briefcase } from 'lucide-react';

const HumanoidUseCases = () => {
  const useCases = [
    {
      title: "Tecnologia & SaaS",
      description: "Captação de empresas buscando soluções digitais, qualificação de budget e timing de decisão",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "E-commerce & Varejo",
      description: "Identificação de lojistas, marketplaces e empreendedores digitais prontos para escalar",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Serviços Profissionais", 
      description: "Captação de escritórios, consultorias e prestadores de serviços especializados",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Saúde & Bem-estar",
      description: "Prospecção de clínicas, laboratórios e profissionais da saúde em expansão",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Segmentos Atendidos"
          subtitle="Humanoid se adapta a diferentes mercados e nichos para captação especializada"
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
