
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Users, Briefcase, Phone, Tv } from 'lucide-react';

const SonixUseCases = () => {
  const useCases = [
    {
      title: "Reuniões Corporativas",
      description: "Transcrição automática e análise de decisões, action items e engajamento da equipe",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Atendimento ao Cliente",
      description: "Análise de sentimentos em tempo real para melhorar experiência e satisfação",
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: "Treinamentos Corporativos", 
      description: "Extração de insights de cursos e workshops para otimização de conteúdo",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Conteúdo Multimídia",
      description: "Legendas automáticas, tradução e análise de engagement para vídeos e podcasts",
      icon: <Tv className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso Estratégicos"
          subtitle="Sonix potencializa diferentes cenários onde o áudio é fonte de conhecimento valioso"
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

export default SonixUseCases;
