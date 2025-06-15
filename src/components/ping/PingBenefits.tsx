
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const PingBenefits = () => {
  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experiência do Cliente 360°",
      description: "Histórico completo de conversas em todos os canais para atendimento personalizado e contextual"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Redução de 60% nos Custos",
      description: "Automação inteligente reduz significativamente a necessidade de agentes para tarefas repetitivas"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Aumento de 40% na Conversão",
      description: "Respostas rápidas e personalizadas aumentam taxa de fechamento e satisfação do cliente"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Resposta em Menos de 1 Minuto",
      description: "IA responde instantaneamente 24/7, com transferência inteligente para humanos quando necessário"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Resultados Comprovados"
          subtitle="Benefícios reais que transformam o relacionamento com seus clientes e otimizam sua operação"
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
