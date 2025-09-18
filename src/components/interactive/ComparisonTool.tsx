import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Check, X, ArrowRight, Zap } from 'lucide-react';

interface ComparisonFeature {
  name: string;
  traditional: boolean | string;
  smartEvents: boolean | string;
  description?: string;
}

interface ComparisonCategory {
  title: string;
  features: ComparisonFeature[];
}

interface ComparisonToolProps {
  comparisonType?: 'traditional-vs-smart' | 'competitors' | 'plans';
  onSelectionMade?: (selection: string) => void;
}

const ComparisonTool: React.FC<ComparisonToolProps> = ({
  comparisonType = 'traditional-vs-smart',
  onSelectionMade
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const traditionalVsSmartData: ComparisonCategory[] = [
    {
      title: 'Gestão de Participantes',
      features: [
        {
          name: 'Check-in Manual',
          traditional: true,
          smartEvents: false,
          description: 'Processo demorado e propenso a erros'
        },
        {
          name: 'Check-in Facial Automático',
          traditional: false,
          smartEvents: true,
          description: 'Reconhecimento facial em tempo real'
        },
        {
          name: 'Credenciamento Inteligente',
          traditional: false,
          smartEvents: true,
          description: 'Processamento automático de credenciais'
        },
        {
          name: 'Filas de Espera',
          traditional: true,
          smartEvents: false,
          description: 'Eliminadas com tecnologia Smart Events'
        }
      ]
    },
    {
      title: 'Análise e Dados',
      features: [
        {
          name: 'Relatórios Manuais',
          traditional: true,
          smartEvents: false,
          description: 'Dados limitados e processamento lento'
        },
        {
          name: 'Analytics em Tempo Real',
          traditional: false,
          smartEvents: true,
          description: 'Dashboards ao vivo com insights instantâneos'
        },
        {
          name: 'IA Preditiva',
          traditional: false,
          smartEvents: true,
          description: 'Previsões de comportamento e otimizações'
        },
        {
          name: 'Integração Multi-plataforma',
          traditional: false,
          smartEvents: true,
          description: 'Dados unificados de todas as fontes'
        }
      ]
    },
    {
      title: 'Experiência do Participante',
      features: [
        {
          name: 'App Personalizado',
          traditional: 'Limitado',
          smartEvents: 'Avançado',
          description: 'Funcionalidades inteligentes e personalizadas'
        },
        {
          name: 'Networking Assistido por IA',
          traditional: false,
          smartEvents: true,
          description: 'Conexões relevantes sugeridas automaticamente'
        },
        {
          name: 'Gamificação',
          traditional: false,
          smartEvents: true,
          description: 'Sistema de pontos e engajamento'
        },
        {
          name: 'Suporte 24/7 Automatizado',
          traditional: false,
          smartEvents: true,
          description: 'Chatbot inteligente e suporte humano'
        }
      ]
    },
    {
      title: 'Custos e Eficiência',
      features: [
        {
          name: 'Equipe Grande',
          traditional: true,
          smartEvents: false,
          description: 'Redução de até 60% na equipe operacional'
        },
        {
          name: 'Automação de Processos',
          traditional: 'Mínima',
          smartEvents: 'Máxima',
          description: '90% dos processos automatizados'
        },
        {
          name: 'ROI Médio',
          traditional: '150%',
          smartEvents: '400%',
          description: 'Retorno sobre investimento comprovado'
        },
        {
          name: 'Tempo de Setup',
          traditional: '2-4 semanas',
          smartEvents: '2-3 dias',
          description: 'Implementação ultrarrápida'
        }
      ]
    }
  ];

  const renderFeatureValue = (value: boolean | string, isSmartEvents: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className={`w-5 h-5 ${isSmartEvents ? 'text-primary' : 'text-green-500'}`} />
      ) : (
        <X className="w-5 h-5 text-red-500" />
      );
    }
    return (
      <Badge variant={isSmartEvents ? 'default' : 'secondary'} className="text-sm">
        {value}
      </Badge>
    );
  };

  const handleSelection = (option: string) => {
    setSelectedOption(option);
    onSelectionMade?.(option);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowRight className="w-5 h-5 text-primary" />
          Comparativo: Tradicional vs Smart Events
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Header da Comparação */}
        <div className="grid grid-cols-3 gap-4">
          <div></div> {/* Coluna vazia para os nomes das features */}
          <div className="text-center">
            <div className="bg-muted rounded-lg p-4">
              <h3 className="font-semibold text-muted-foreground">Eventos Tradicionais</h3>
              <p className="text-sm text-muted-foreground mt-1">Métodos convencionais</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <h3 className="font-semibold text-primary">Smart Events LEGAL</h3>
              <p className="text-sm text-primary/80 mt-1">Tecnologia avançada</p>
            </div>
          </div>
        </div>

        {/* Categorias e Features */}
        {traditionalVsSmartData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <h4 className="font-semibold text-lg">{category.title}</h4>
            </div>
            
            <div className="space-y-3">
              {category.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="grid grid-cols-3 gap-4 items-center py-2 hover:bg-muted/50 rounded-lg px-2 transition-colors">
                  <div className="space-y-1">
                    <div className="font-medium text-sm">{feature.name}</div>
                    {feature.description && (
                      <div className="text-xs text-muted-foreground">{feature.description}</div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    {renderFeatureValue(feature.traditional, false)}
                  </div>
                  
                  <div className="text-center">
                    {renderFeatureValue(feature.smartEvents, true)}
                  </div>
                </div>
              ))}
            </div>
            
            {categoryIndex < traditionalVsSmartData.length - 1 && <Separator />}
          </div>
        ))}

        {/* Resumo e CTA */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6 space-y-4">
          <div className="text-center space-y-2">
            <h4 className="font-semibold text-lg text-primary">Vantagem Smart Events</h4>
            <p className="text-sm text-muted-foreground">
              Nossa tecnologia oferece vantagens significativas em todas as áreas:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">60%</div>
              <div className="text-xs text-muted-foreground">Redução de Custos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">300%</div>
              <div className="text-xs text-muted-foreground">Mais Engajamento</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">90%</div>
              <div className="text-xs text-muted-foreground">Automação</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">400%</div>
              <div className="text-xs text-muted-foreground">ROI Médio</div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button
              onClick={() => handleSelection('smart-events')}
              className="flex-1 md:flex-none"
              variant={selectedOption === 'smart-events' ? 'default' : 'outline'}
            >
              <Zap className="w-4 h-4 mr-2" />
              Escolher Smart Events
            </Button>
            
            <Button
              onClick={() => handleSelection('demo')}
              variant="outline"
              className="flex-1 md:flex-none"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Solicitar Demo
            </Button>
          </div>
        </div>

        {selectedOption && (
          <div className="border-l-4 border-primary bg-primary/5 p-4 rounded">
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-4 h-4 text-primary" />
              <span className="font-medium text-primary">Excelente escolha!</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {selectedOption === 'smart-events' 
                ? 'Você optou pela tecnologia mais avançada em eventos. Nossa equipe entrará em contato para apresentar uma proposta personalizada.'
                : 'Vamos agendar uma demonstração personalizada para mostrar como o Smart Events pode transformar seus eventos.'
              }
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ComparisonTool;