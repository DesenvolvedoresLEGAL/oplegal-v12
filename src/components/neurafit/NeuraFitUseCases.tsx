
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { GraduationCap, Briefcase, Users, Heart } from 'lucide-react';

const NeuraFitUseCases = () => {
  const useCases = [
    {
      title: "Estudantes e Acadêmicos",
      description: "Melhore capacidade de aprendizado, memória e concentração para excelência acadêmica",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Profissionais e Líderes",
      description: "Desenvolva liderança, tomada de decisão e inteligência emocional para sucesso corporativo",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Terapeutas e Coaches", 
      description: "Amplie suas ferramentas de trabalho com técnicas avançadas de desenvolvimento humano",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Buscadores Espirituais",
      description: "Integre ciência e espiritualidade em uma jornada de autoconhecimento e expansão consciencial",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Para Quem é o NeuraFit"
          subtitle="Transformação personalizada para diferentes perfis e objetivos de desenvolvimento"
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

export default NeuraFitUseCases;
