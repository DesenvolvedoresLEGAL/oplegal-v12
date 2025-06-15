
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { TrendingUp, Heart, Zap, Target } from 'lucide-react';

const LinkAIBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Aumento de 300% em Conexões Relevantes",
      description: "Participantes conectam com pessoas realmente alinhadas aos seus objetivos de negócio"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "95% de Satisfação em Matches",
      description: "Taxa de aprovação das conexões sugeridas pela inteligência artificial"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Redução de 80% no Tempo de Networking",
      description: "IA elimina tentativa e erro, focando apenas em conexões de alto potencial"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "ROI 5x Superior em Eventos",
      description: "Organizadores relatam resultados exponencialmente melhores para participantes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Resultados Comprovados"
          subtitle="Métricas reais que demonstram o impacto transformador do LinkAI em eventos"
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

export default LinkAIBenefits;
