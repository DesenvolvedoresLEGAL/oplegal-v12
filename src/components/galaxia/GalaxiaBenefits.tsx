import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { TrendingDown, Zap, Shield, BarChart3 } from 'lucide-react';

const GalaxiaBenefits = () => {
  const benefits = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Redução de 50% nos custos operacionais",
      description: "Otimização de recursos e infraestrutura compartilhada"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Escalabilidade automática",
      description: "Recursos ajustados conforme demanda em tempo real"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança empresarial garantida",
      description: "Conformidade total com regulamentações e padrões de segurança"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "ROI mensurável e transparente",
      description: "Métricas claras de performance e retorno sobre investimento"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Vantagens Competitivas"
          subtitle="Transforme sua operação com infraestrutura de IA de classe mundial"
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

export default GalaxiaBenefits;