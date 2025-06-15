
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { TrendingUp, Clock, Users, Target } from 'lucide-react';

const SonixBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "80% Mais Produtividade em Reuniões",
      description: "Elimine a necessidade de anotações manuais e foque no que realmente importa durante conversas"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Economia de 15 Horas Semanais",
      description: "Automatize transcrições e análises que antes tomavam horas da sua equipe"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Melhoria de 60% no Atendimento",
      description: "Análise de sentimentos em tempo real para otimizar experiência do cliente"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "95% Mais Insights Estratégicos",
      description: "Identifique padrões e oportunidades que passavam despercebidos em conversas"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Resultados Transformadores"
          subtitle="Benefícios reais que revolucionam como sua empresa lida com conteúdo de áudio"
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

export default SonixBenefits;
