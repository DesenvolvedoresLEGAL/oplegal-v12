
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { 
  Brain, 
  Search, 
  BarChart3, 
  Target, 
  Users,
  TrendingUp
} from 'lucide-react';

const FitScoreFeatures = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Análise Preditiva de Candidatos",
      description: "IA avançada que avalia fit cultural, técnico e comportamental com 95% de precisão."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Sourcing Inteligente",
      description: "Busca automatizada de talentos em múltiplas bases com critérios personalizados."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Matching Automático",
      description: "Algoritmo que conecta candidatos ideais com vagas específicas em tempo real."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "People Analytics Avançado",
      description: "Dashboards com insights sobre turnover, performance e satisfação dos colaboradores."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Avaliação 360° Automatizada",
      description: "Análise completa de soft skills, hard skills e compatibilidade cultural."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predição de Sucesso",
      description: "Modelo preditivo que calcula probabilidade de sucesso e retenção do candidato."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Tecnologia Revolucionária"
          subtitle="Recursos avançados de IA para transformar seus processos de contratação e gestão de pessoas"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none">
              <CardContent className="p-8 text-center">
                <div className="mb-6 text-legal group-hover:text-legal-purple transition-colors duration-300 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-legal mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FitScoreFeatures;
