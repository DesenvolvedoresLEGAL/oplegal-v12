
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { TrendingUp, Clock, Users, Target, BarChart3, Zap } from 'lucide-react';

const EventrixBenefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "85% mais engajamento dos participantes",
      description: "IA personaliza a experiência de cada participante, aumentando significativamente o nível de engajamento e satisfação geral do evento."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "60% redução no tempo de planejamento",
      description: "Automação inteligente de processos operacionais libera sua equipe para focar em estratégia e criatividade na concepção do evento."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Networking 10x mais eficiente",
      description: "Algoritmos conectam automaticamente participantes com interesses similares, maximizando oportunidades de negócio e relacionamento."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "ROI 300% superior",
      description: "Análise preditiva otimiza investimentos, reduz custos operacionais e maximiza resultados através de insights baseados em dados."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Decisões baseadas em dados reais",
      description: "Dashboard completo com métricas avançadas fornece insights acionáveis para otimização contínua dos seus eventos."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Experiência personalizada para cada perfil",
      description: "Cada participante recebe recomendações únicas de conteúdo, networking e atividades baseadas em seu comportamento e preferências."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Benefícios Comprovados"
          subtitle="Veja como o Eventrix transforma eventos e entrega resultados mensuráveis"
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

export default EventrixBenefits;
