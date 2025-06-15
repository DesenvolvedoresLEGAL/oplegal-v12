
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Clock, TrendingUp, DollarSign, Users } from 'lucide-react';

const HumanoidBenefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Economia de 80% do Tempo",
      description: "Elimine horas de prospecção manual com captação automatizada e qualificação inteligente"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Pipeline 5x Maior",
      description: "Aumente drasticamente seu funil de vendas com captação contínua e qualificada"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "ROI 400% Superior",
      description: "Retorno exponencial comparado a métodos tradicionais de captação e SDR"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Escala Ilimitada",
      description: "Capacidade infinita de captação sem aumentar custos operacionais ou equipe"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Resultados Exponenciais"
          subtitle="Benefícios comprovados que transformam sua estratégia de vendas e aceleram o crescimento"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-legal-purple mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-legal mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanoidBenefits;
