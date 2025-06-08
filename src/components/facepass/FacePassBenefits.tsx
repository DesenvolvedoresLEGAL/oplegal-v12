
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Clock, Users, Shield, BarChart3 } from 'lucide-react';

const FacePassBenefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Redução de 90% no tempo de credenciamento",
      description: "Elimine filas e agilize o acesso aos eventos"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experiência do participante aprimorada",
      description: "Acesso rápido e sem contato físico"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança anti-fraude garantida",
      description: "Impossibilidade de falsificação ou transferência de credenciais"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Dados precisos de participação",
      description: "Métricas exatas para análise de ROI e engajamento"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Benefícios Comprovados"
          subtitle="Resultados reais que transformam a experiência de credenciamento em eventos"
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

export default FacePassBenefits;
