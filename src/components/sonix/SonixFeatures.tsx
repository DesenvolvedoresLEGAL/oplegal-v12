
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Languages, Brain, BarChart3, Clock, Shield } from 'lucide-react';

const SonixFeatures = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Transcrição Ultra-Precisa",
      description: "99,5% de precisão na conversão de áudio para texto com suporte a múltiplos idiomas"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Análise de Sentimentos IA",
      description: "Identifica emoções, tom e intenções em conversas com algoritmos de NLP avançados"
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "Tradução Instantânea",
      description: "Tradução em tempo real para 40+ idiomas com preservação de contexto e nuances"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Insights Inteligentes",
      description: "Dashboards com métricas de engajamento, palavras-chave e padrões comportamentais"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Processamento Tempo Real",
      description: "Análise instantânea de áudio ao vivo com latência inferior a 200ms"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Avançada",
      description: "Criptografia end-to-end e conformidade total com LGPD e regulamentações internacionais"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Tecnologia de Áudio de Nova Geração"
          subtitle="Recursos avançados que transformam qualquer conteúdo de áudio em conhecimento estratégico"
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

export default SonixFeatures;
