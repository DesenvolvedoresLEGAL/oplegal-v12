import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Bot, Zap, Users, Brain } from 'lucide-react';

const GalaxiaBenefits = () => {
  const deliverables = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Agentes Conversacionais e Operacionais",
      description: "Bots inteligentes que conversam e agem",
      features: [
        "Atendimento ao cliente 24/7",
        "Processamento de linguagem natural",
        "Integração com sistemas internos",
        "Aprendizado contínuo"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automações",
      description: "Fluxos de trabalho 100% automatizados",
      features: [
        "Processos sem intervenção humana",
        "Workflows inteligentes",
        "Integração entre sistemas",
        "Monitoramento em tempo real"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Copilotos Internos",
      description: "Assistentes que aumentam a produtividade da sua equipe",
      features: [
        "Assistentes personalizados",
        "Análise de documentos",
        "Sugestões inteligentes", 
        "Aumento da produtividade"
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning sob medida",
      description: "Modelos preditivos e analíticos para o seu negócio",
      features: [
        "Previsões personalizadas",
        "Análise preditiva avançada",
        "Insights acionáveis",
        "Otimização contínua"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-legal-primary/5 to-legal-secondary/5">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="O que Entregamos"
          subtitle="Soluções sob medida que transformam processos e geram resultados reais"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deliverables.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-legal-primary/10 to-legal-secondary/10 rounded-full p-4 flex-shrink-0">
                  <div className="text-legal-primary">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-legal-primary mb-2 font-haas">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-haas">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-legal-tertiary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalaxiaBenefits;