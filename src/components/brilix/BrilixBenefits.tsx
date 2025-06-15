
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Clock, TrendingDown, Shield, Users, Leaf, Star } from 'lucide-react';

const BrilixBenefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Redução de 80% no tempo de limpeza",
      description: "Operação 5x mais rápida que métodos tradicionais, com maior cobertura e precisão na limpeza de grandes estruturas."
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Economia de 70% nos custos operacionais",
      description: "Elimina necessidade de andaimes, equipamentos de segurança complexos e reduz drasticamente os custos com mão de obra especializada."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero riscos de acidentes em altura",
      description: "Operação 100% remota elimina completamente os riscos de trabalho em altura, garantindo segurança total dos operadores."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Redução de 90% da equipe necessária",
      description: "Um operador controla múltiplos drones simultaneamente, otimizando recursos humanos e aumentando a produtividade."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Solução 100% sustentável",
      description: "Uso eficiente de água, detergentes biodegradáveis e operação elétrica reduzem o impacto ambiental em até 60%."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Qualidade de limpeza superior",
      description: "Inspeção visual inteligente e controle de pressão variável garantem resultado profissional em todos os tipos de superfície."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Benefícios Comprovados"
          subtitle="Veja como o Brilix transforma operações de limpeza e entrega resultados superiores"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-legal-purple mt-1 bg-legal-purple/10 p-3 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-legal mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrilixBenefits;
