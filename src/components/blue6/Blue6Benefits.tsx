
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Clock, TrendingUp, DollarSign, Users, Target, Zap } from 'lucide-react';

const Blue6Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Instalação rápida em 2 horas",
      description: "Setup completo e configuração otimizada em menos de 2 horas, com testes de performance incluídos."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Aumento de 300% na satisfação dos usuários",
      description: "WiFi estável e rápido melhora significativamente a experiência em eventos e ambientes corporativos."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Economia de 60% em infraestrutura",
      description: "Substitui múltiplos equipamentos por uma solução integrada com menor custo de manutenção."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestão simplificada de usuários",
      description: "Interface intuitiva permite controle total sem necessidade de conhecimento técnico avançado."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Dados valiosos de usuários",
      description: "Captive portal coleta informações estratégicas para marketing e análise de comportamento."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance consistente 24/7",
      description: "Monitoramento automático e otimização contínua garantem conectividade estável sempre."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Benefícios Comprovados"
          subtitle="Veja como o Blue6 transforma a conectividade e entrega resultados concretos"
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

export default Blue6Benefits;
