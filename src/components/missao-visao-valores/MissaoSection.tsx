
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Rocket, Users, TrendingUp, Zap } from 'lucide-react';

const MissaoSection = () => {
  const impactAreas = [
    {
      icon: Users,
      title: "Nos Clientes",
      description: "Liberdade, agilidade e potência digital",
      color: "text-legal-cyan"
    },
    {
      icon: TrendingUp,
      title: "No Mercado",
      description: "Referência em qualidade e inovação",
      color: "text-legal"
    },
    {
      icon: Zap,
      title: "No Time",
      description: "Desenvolvimento pessoal + performance exponencial",
      color: "text-legal-purple"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="🧭 NOSSA MISSÃO"
          subtitle="O propósito que nos move todos os dias"
          center
        />
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-legal to-legal-purple text-white rounded-2xl shadow-2xl mb-8">
            <Rocket size={48} className="mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Impulsionar e transformar eventos e negócios através da tecnologia
            </h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-legal mb-12">📌 Nosso Impacto:</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border-t-4 border-legal card-hover">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
                    <area.icon size={40} className={area.color} />
                  </div>
                  <h4 className="text-xl font-bold text-legal mb-4">{area.title}</h4>
                  <p className="text-gray-700 text-lg">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissaoSection;
