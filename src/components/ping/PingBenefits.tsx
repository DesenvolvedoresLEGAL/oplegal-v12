
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { TrendingDown, Clock, DollarSign, Shield } from 'lucide-react';

const PingBenefits = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Prevenção Proativa de Problemas",
      description: "Detecte e resolva issues antes que afetem usuários finais e operações críticas"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Redução de 75% nos Custos Operacionais",
      description: "Automatização reduz significativamente custos com manutenção e suporte técnico"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "85% Menos Downtime Não Planejado",
      description: "Manutenção preditiva evita paradas inesperadas e garante continuidade operacional"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Resposta 10x Mais Rápida",
      description: "Alertas inteligentes aceleram identificação e resolução de problemas críticos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Resultados Comprovados"
          subtitle="Benefícios reais que transformam a gestão de infraestrutura da sua organização"
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

export default PingBenefits;
