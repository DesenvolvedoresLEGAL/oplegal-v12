
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Users, Camera, BarChart3, Zap } from 'lucide-react';

const MagicPassUseCases = () => {
  const useCases = [
    {
      title: "Conferências Corporativas",
      description: "Credenciamento VIP para executivos e palestrantes principais",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Festivais e Shows",
      description: "Controle de acesso para diferentes áreas e setores do evento",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "Feiras e Exposições", 
      description: "Identificação de visitantes e expositores com perfis diferenciados",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Eventos Esportivos",
      description: "Acesso rápido para torcedores em estádios e arenas",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso"
          subtitle="MagicPass se adapta a diferentes tipos de eventos e necessidades"
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

export default MagicPassUseCases;
