
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { ShoppingCart, Headphones, Heart, Building } from 'lucide-react';

const PingUseCases = () => {
  const useCases = [
    {
      title: "E-commerce & Vendas",
      description: "Suporte a vendas, dúvidas sobre produtos, acompanhamento de pedidos e recuperação de carrinho abandonado",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Suporte Técnico",
      description: "Resolução de problemas, tutoriais automatizados, escalação inteligente para especialistas",
      icon: <Headphones className="w-6 h-6" />
    },
    {
      title: "Saúde & Bem-estar", 
      description: "Agendamento de consultas, lembretes de medicação, pré-atendimento e triagem automatizada",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Serviços Corporativos",
      description: "Atendimento B2B, suporte a parceiros, gestão de leads e relacionamento empresarial",
      icon: <Building className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso Estratégicos"
          subtitle="Ping atende diversos segmentos com soluções personalizadas para cada necessidade de negócio"
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

export default PingUseCases;
