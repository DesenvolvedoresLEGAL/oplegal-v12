
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { TrendingUp, Clock, DollarSign, Zap } from 'lucide-react';

const Speedy5GBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "500% Mais Produtividade",
      description: "Velocidade extrema acelera uploads, downloads e colaboração em tempo real"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Redução de 90% no Tempo de Transferência",
      description: "Arquivos grandes, backups e sincronizações acontecem em segundos, não horas"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Economia de 40% em Infraestrutura",
      description: "Substitui múltiplas conexões por uma solução única de alta performance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Inovação Acelerada",
      description: "IoT, AR/VR e aplicações avançadas funcionam sem limitações de conectividade"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Resultados Revolucionários"
          subtitle="Benefícios reais que transformam como sua empresa se conecta ao mundo digital"
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

export default Speedy5GBenefits;
