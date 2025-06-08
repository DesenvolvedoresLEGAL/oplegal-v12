
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Clock, Target, DollarSign, TrendingUp } from 'lucide-react';

const FitScoreBenefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Redução de 75% no tempo de contratação",
      description: "Processos seletivos mais ágeis e eficientes com automação inteligente"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "95% de precisão em matching de candidatos",
      description: "Algoritmos avançados garantem a escolha dos melhores talentos"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Redução de 60% nos custos de recrutamento",
      description: "Otimização de recursos e eliminação de contratações inadequadas"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Aumento de 40% na retenção de talentos",
      description: "Melhor fit cultural resulta em colaboradores mais engajados"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Resultados Comprovados"
          subtitle="Impacto real nos seus processos de RH e resultados de negócio"
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

export default FitScoreBenefits;
