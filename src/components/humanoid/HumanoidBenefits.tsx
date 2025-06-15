
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Sparkles, Clock, TrendingUp, Heart } from 'lucide-react';

const HumanoidBenefits = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Experiência Memorável e Diferenciada",
      description: "Crie momentos únicos que seus participantes jamais esquecerão com interação robótica humanóide"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Atendimento 24/7 sem Interrupções",
      description: "Assistência contínua para participantes com disponibilidade total durante todo o evento"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Aumento de 85% no Engajamento",
      description: "Participantes interagem mais e permanecem por mais tempo em eventos com Humanoid"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Conexão Emocional Autêntica",
      description: "Tecnologia humanóide que gera conexões genuínas e experiências emocionalmente impactantes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Impacto Transformador"
          subtitle="Benefícios reais que revolucionam a experiência em eventos e negócios"
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
