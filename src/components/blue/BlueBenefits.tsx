
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Clock, TrendingUp, DollarSign, Users, Target, Zap } from 'lucide-react';

const BlueBenefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Redução de 80% no tempo de análise",
      description: "Automatize relatórios e dashboards que antes levavam horas para serem criados manualmente."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Aumento de 45% na assertividade das decisões",
      description: "Decisões baseadas em dados precisos e análises preditivas aumentam a taxa de sucesso."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "ROI médio de 300% em 6 meses",
      description: "Economia em processos, redução de custos e melhores oportunidades de negócio."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Democratização dos dados",
      description: "Toda equipe acessa insights relevantes sem depender do time de TI ou analistas."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Identificação de oportunidades ocultas",
      description: "IA descobre padrões e tendências que passariam despercebidos na análise manual."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Agilidade na tomada de decisão",
      description: "Alertas inteligentes e dashboards em tempo real aceleram a resposta a mudanças do mercado."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Benefícios Comprovados"
          subtitle="Veja como o Blue transforma a gestão de dados e impulsiona resultados concretos"
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

export default BlueBenefits;
