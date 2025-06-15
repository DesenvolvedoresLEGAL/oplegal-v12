
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, Brain, Bell, BarChart3, Shield, Zap } from 'lucide-react';

const PingFeatures = () => {
  const features = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Monitoramento 24/7",
      description: "Vigilância contínua de servidores, aplicações, rede e infraestrutura crítica"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Preditiva",
      description: "Machine Learning que aprende padrões e prediz falhas antes que aconteçam"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Alertas Inteligentes",
      description: "Notificações contextuais que reduzem ruído e focam no que realmente importa"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Dashboards Avançados",
      description: "Visualizações em tempo real com métricas personalizáveis e insights acionáveis"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Detecção de Anomalias",
      description: "Identificação automática de comportamentos anômalos e ameaças de segurança"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Otimização Automática",
      description: "Ajustes inteligentes de performance baseados em análise de dados históricos"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Monitoramento Inteligente de Nova Geração"
          subtitle="Recursos avançados que transformam dados de infraestrutura em insights estratégicos"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-legal mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-legal mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PingFeatures;
