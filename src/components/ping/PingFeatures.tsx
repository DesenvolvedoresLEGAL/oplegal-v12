
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Users, BarChart3, Bot, Smartphone, Shield } from 'lucide-react';

const PingFeatures = () => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp Business Oficial",
      description: "Integração certificada com META para atendimento profissional via WhatsApp Business API"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Central Omnichannel",
      description: "Unifique Instagram, Facebook, Telegram, SMS e mais em uma única interface de atendimento"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "IA + Atendimento Humano",
      description: "Chatbots inteligentes com transferência automática para agentes quando necessário"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Dashboard BLUE Integrado",
      description: "KPIs, métricas de performance e insights de atendimento com integração ao Blue Analytics"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Mobile Nativo",
      description: "Atenda seus clientes de qualquer lugar com aplicativo mobile completo para agentes"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Empresarial",
      description: "Criptografia ponta-a-ponta, compliance LGPD e backup automático de conversas"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Atendimento Omnichannel de Nova Geração"
          subtitle="Recursos avançados que transformam a experiência do cliente e otimizam a produtividade da equipe"
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
