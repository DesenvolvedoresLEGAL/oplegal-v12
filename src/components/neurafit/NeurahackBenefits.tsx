
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { TrendingDown, DollarSign, Shield, Clock } from 'lucide-react';

const NeurahackBenefits = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Proteção Proativa Contra Ameaças",
      description: "Identifique e corrija vulnerabilidades antes que criminosos as explorem, mantendo sua empresa segura"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Redução de 70% nos Custos de Segurança",
      description: "Automatização inteligente diminui drasticamente custos com consultorias e ferramentas de segurança"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "90% Menos Incidentes de Segurança",
      description: "Prevenção eficaz através de detecção precoce e resposta automatizada a ameaças"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Conformidade Regulatória Garantida",
      description: "Atendimento automático a LGPD, ISO 27001 e outras normas com documentação completa"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Resultados Mensuráveis"
          subtitle="Benefícios reais que transformam a postura de segurança da sua organização"
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

export default NeurahackBenefits;
