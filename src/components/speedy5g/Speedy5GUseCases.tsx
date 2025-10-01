
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Building, Gamepad2, Video, Cpu } from 'lucide-react';

const Speedy5GUseCases = () => {
  const useCases = [
    {
      title: "Empresas Corporativas",
      description: "Escritórios com alta demanda de dados, videoconferências 4K e colaboração em nuvem",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Gaming e E-sports",
      description: "Competições profissionais com latência zero e streaming de alta qualidade",
      icon: <Gamepad2 className="w-6 h-6" />
    },
    {
      title: "Produção Audiovisual", 
      description: "Upload de vídeos 4K/8K, streaming ao vivo e edição colaborativa em tempo real",
      icon: <Video className="w-6 h-6" />
    },
    {
      title: "IoT Industrial",
      description: "Automação industrial, robótica avançada e monitoramento crítico em tempo real",
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso Estratégicos"
          subtitle="Speedy potencializa operações que exigem conectividade de classe mundial"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-legal mb-4 flex justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold text-legal mb-3">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speedy5GUseCases;
