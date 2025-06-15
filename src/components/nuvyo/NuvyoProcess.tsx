
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Camera, Edit, Package } from 'lucide-react';

const NuvyoProcess = () => {
  const steps = [
    {
      icon: <Phone className="w-12 h-12 text-white" />,
      title: "Briefing Inicial",
      description: "Conversa detalhada sobre objetivos, locação, cronograma e requisitos específicos do projeto.",
      time: "30 min"
    },
    {
      icon: <MapPin className="w-12 h-12 text-white" />,
      title: "Planejamento de Voo",
      description: "Análise da área, obtenção de autorizações e definição da rota de voo mais eficiente.",
      time: "1-2 dias"
    },
    {
      icon: <Camera className="w-12 h-12 text-white" />,
      title: "Captação",
      description: "Execução do voo com captação de imagens e vídeos seguindo roteiro pré-definido.",
      time: "2-4 horas"
    },
    {
      icon: <Edit className="w-12 h-12 text-white" />,
      title: "Pós-Produção",
      description: "Edição profissional, correção de cor, estabilização e criação do material final.",
      time: "3-5 dias"
    },
    {
      icon: <Package className="w-12 h-12 text-white" />,
      title: "Entrega",
      description: "Disponibilização do material em alta resolução através de plataforma segura.",
      time: "Imediata"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nosso Processo de Trabalho"
          subtitle="Uma metodologia eficiente que garante resultados excepcionais do briefing à entrega final"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-gradient-to-br from-legal to-legal-purple text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-legal-cyan mb-3">{step.time}</p>
                  <p className="text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-legal-cyan transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 w-0 h-0 border-l-4 border-l-legal-cyan border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuvyoProcess;
