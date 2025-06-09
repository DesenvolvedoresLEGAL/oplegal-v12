
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Shield, Unlock, CheckCircle, TrendingUp, Heart } from 'lucide-react';

const PrincipiosSection = () => {
  const principios = [
    {
      icon: Shield,
      title: "Transparência radical acima de tudo",
      color: "text-legal-cyan"
    },
    {
      icon: Unlock,
      title: "Disciplina é igual a liberdade",
      color: "text-legal"
    },
    {
      icon: CheckCircle,
      title: "Feito é melhor que perfeito – desde que LEGAL",
      color: "text-legal-purple"
    },
    {
      icon: TrendingUp,
      title: "Se não for exponencial, repense",
      color: "text-legal-cyan"
    },
    {
      icon: Heart,
      title: "Somos todos responsáveis por manter a cultura viva",
      color: "text-legal"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="📐 NOSSOS PRINCÍPIOS"
          subtitle="As regras fundamentais que orientam nossa conduta e decisões"
          center
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {principios.map((principio, index) => (
              <div key={index} className="group bg-white p-8 rounded-xl shadow-lg card-hover border-l-8 border-legal">
                <div className="flex items-center">
                  <div className={`p-4 bg-gray-50 rounded-full mr-6 group-hover:bg-legal-cyan/10 transition-colors`}>
                    <principio.icon size={32} className={`${principio.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-legal group-hover:text-legal-purple transition-colors">
                    {principio.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipiosSection;
