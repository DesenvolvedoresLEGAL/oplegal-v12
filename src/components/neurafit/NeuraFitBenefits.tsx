
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Brain, Heart, Zap, Shield } from 'lucide-react';

const NeuraFitBenefits = () => {
  const benefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Fortalecimento Cognitivo Científico",
      description: "Melhore memória, foco, criatividade e tomada de decisões através de exercícios baseados em neurociência"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Desenvolvimento Emocional Profundo",
      description: "Aprenda a regular emoções, desenvolver empatia e construir relacionamentos mais saudáveis"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Expansão da Consciência",
      description: "Integre conceitos de física quântica e espiritualidade para ampliar sua percepção da realidade"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Resiliência Mental Duradoura",
      description: "Construa uma mente resiliente capaz de lidar com desafios e transformar obstáculos em oportunidades"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Transformação Integral do Ser"
          subtitle="Benefícios comprovados que impactam todas as dimensões da sua existência"
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

export default NeuraFitBenefits;
