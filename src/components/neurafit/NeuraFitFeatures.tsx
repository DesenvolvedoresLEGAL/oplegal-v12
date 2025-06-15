
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Gamepad2, Users, Target, Sparkles, TrendingUp } from 'lucide-react';

const NeuraFitFeatures = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Jogos de Neurociência",
      description: "Exercícios gamificados baseados em pesquisas científicas para fortalecer diferentes áreas cerebrais"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Práticas de PNL",
      description: "Técnicas de Programação Neurolinguística para reprogramar padrões mentais e comportamentais"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Física Quântica Aplicada",
      description: "Conceitos quânticos traduzidos em exercícios práticos para expandir a consciência"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Gamificação Avançada",
      description: "Sistema de níveis, conquistas e recompensas inspirado no Duolingo para manter o engajamento"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentoria de Especialistas",
      description: "Conselhos personalizados de mentores reconhecidos em neurociência, psicologia e espiritualidade"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Progresso Personalizado",
      description: "Acompanhamento detalhado do desenvolvimento cognitivo com métricas e relatórios evolutivos"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Desenvolvimento Cognitivo Gamificado"
          subtitle="Recursos inovadores que transformam o aprendizado em uma jornada envolvente de crescimento pessoal"
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

export default NeuraFitFeatures;
