
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Database, MessageSquare, Phone, Target, Bot } from 'lucide-react';

const HumanoidFeatures = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Captação Inteligente",
      description: "IA rastreia a internet 24/7 identificando leads qualificados baseados no seu segmento e preferências"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Integração CRM Automática",
      description: "Leads captados são automaticamente inseridos no seu CRM com dados enriquecidos e scoring"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "SDR via WhatsApp",
      description: "Qualificação inteligente de leads via Ping com conversas personalizadas e humanizadas"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Ligações com IA",
      description: "IA conversacional realiza ligações de qualificação com naturalidade e eficiência"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Segmentação Avançada",
      description: "Filtros inteligentes por segmento, localização, tamanho da empresa e comportamento"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Aprendizado Contínuo",
      description: "Machine Learning otimiza constantemente a captação baseado nos seus melhores clientes"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Captação e Qualificação Completa"
          subtitle="Recursos que transformam prospecção manual em uma máquina automatizada de geração de oportunidades"
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

export default HumanoidFeatures;
