
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Building2, ShoppingCart, Heart, GraduationCap, Factory, Briefcase } from 'lucide-react';

const BlueUseCases = () => {
  const useCases = [
    {
      title: "Varejo e E-commerce",
      description: "Análise de comportamento do cliente, otimização de estoque, previsão de demanda e performance de campanhas.",
      icon: <ShoppingCart className="w-6 h-6" />,
      metrics: ["↑35% vendas", "↓20% estoque parado", "↑50% conversão"]
    },
    {
      title: "Serviços Financeiros",
      description: "Análise de risco, detecção de fraudes, compliance regulatório e performance de investimentos.",
      icon: <Building2 className="w-6 h-6" />,
      metrics: ["↓60% fraudes", "↑25% aprovações", "100% compliance"]
    },
    {
      title: "Saúde",
      description: "Monitoramento de indicadores clínicos, gestão de recursos hospitalares e análise epidemiológica.",
      icon: <Heart className="w-6 h-6" />,
      metrics: ["↑40% eficiência", "↓30% custos", "↑95% satisfação"]
    },
    {
      title: "Educação",
      description: "Análise de performance acadêmica, predição de evasão escolar e otimização de recursos educacionais.",
      icon: <GraduationCap className="w-6 h-6" />,
      metrics: ["↓25% evasão", "↑30% aprovação", "↑85% engajamento"]
    },
    {
      title: "Indústria",
      description: "Manutenção preditiva, otimização de processos produtivos e controle de qualidade automatizado.",
      icon: <Factory className="w-6 h-6" />,
      metrics: ["↓40% paradas", "↑20% produção", "↓50% defeitos"]
    },
    {
      title: "Serviços Corporativos",
      description: "Análise de performance de equipes, otimização de recursos humanos e previsão de turnover.",
      icon: <Briefcase className="w-6 h-6" />,
      metrics: ["↓30% turnover", "↑45% produtividade", "↑90% retenção"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso por Segmento"
          subtitle="Veja como diferentes indústrias usam o Blue para transformar dados em vantagem competitiva"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-legal bg-legal/10 p-2 rounded-lg">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-bold text-legal">{useCase.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-legal-purple">Resultados típicos:</h4>
                  <div className="flex flex-wrap gap-2">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <span key={metricIndex} className="bg-legal-green/10 text-legal-green px-2 py-1 rounded-full text-xs font-semibold">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlueUseCases;
