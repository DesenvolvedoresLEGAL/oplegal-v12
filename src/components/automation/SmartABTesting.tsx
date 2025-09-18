import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  FlaskConical, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Users, 
  Brain, 
  Zap,
  Eye,
  MousePointer,
  CheckCircle,
  AlertTriangle,
  PlayCircle,
  PauseCircle,
  StopCircle,
  BarChart3,
  Calendar,
  Sparkles
} from 'lucide-react';

interface ABTest {
  id: string;
  name: string;
  status: 'running' | 'completed' | 'paused' | 'draft';
  type: 'headline' | 'cta' | 'layout' | 'content' | 'pricing';
  startDate: string;
  endDate?: string;
  variants: ABVariant[];
  metrics: ABMetrics;
  confidence: number;
  significance: number;
  aiRecommendation: string;
  estimatedLift: number;
  priority: 'high' | 'medium' | 'low';
}

interface ABVariant {
  id: string;
  name: string;
  description: string;
  traffic: number;
  conversions: number;
  conversionRate: number;
  isControl: boolean;
  change?: string;
}

interface ABMetrics {
  totalVisitors: number;
  totalConversions: number;
  duration: number;
  statisticalPower: number;
  expectedRuntime: number;
}

interface AIInsight {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  confidence: number;
  actionable: string;
  testSuggestion?: string;
}

const SmartABTesting: React.FC = () => {
  const [tests, setTests] = useState<ABTest[]>([]);
  const [insights, setInsights] = useState<AIInsight[]>([]);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateTests = (): ABTest[] => [
      {
        id: 'headline-test-1',
        name: 'Homepage Hero Headline',
        status: 'running',
        type: 'headline',
        startDate: '2024-01-15',
        confidence: 89,
        significance: 95,
        priority: 'high',
        aiRecommendation: 'Variante B mostra 23% mais engajamento. Recomendado implementar.',
        estimatedLift: 23,
        variants: [
          {
            id: 'control',
            name: 'Controle (Atual)',
            description: 'LEGAL TechCo - Soluções Empresariais',
            traffic: 2450,
            conversions: 89,
            conversionRate: 3.6,
            isControl: true
          },
          {
            id: 'variant-a',
            name: 'Variante A - Foco IA',
            description: 'LEGAL: Automação Empresarial com IA',
            traffic: 2380,
            conversions: 124,
            conversionRate: 5.2,
            isControl: false,
            change: 'Ênfase em IA e automação'
          },
          {
            id: 'variant-b',
            name: 'Variante B - Benefício',
            description: 'Aumente 300% sua Eficiência com LEGAL',
            traffic: 2420,
            conversions: 147,
            conversionRate: 6.1,
            isControl: false,
            change: 'Foco no benefício quantificado'
          }
        ],
        metrics: {
          totalVisitors: 7250,
          totalConversions: 360,
          duration: 12,
          statisticalPower: 89,
          expectedRuntime: 18
        }
      },
      {
        id: 'cta-test-2',
        name: 'Botão CTA Smart Events',
        status: 'completed',
        type: 'cta',
        startDate: '2024-01-01',
        endDate: '2024-01-14',
        confidence: 96,
        significance: 99,
        priority: 'high',
        aiRecommendation: 'Teste concluído com sucesso. Implementar variante vencedora.',
        estimatedLift: 34,
        variants: [
          {
            id: 'control-cta',
            name: 'Controle',
            description: 'Saiba Mais',
            traffic: 1890,
            conversions: 67,
            conversionRate: 3.5,
            isControl: true
          },
          {
            id: 'variant-cta',
            name: 'Variante Urgência',
            description: 'Transforme Seus Eventos Agora',
            traffic: 1920,
            conversions: 127,
            conversionRate: 6.6,
            isControl: false,
            change: 'Adicionada urgência e benefício específico'
          }
        ],
        metrics: {
          totalVisitors: 3810,
          totalConversions: 194,
          duration: 14,
          statisticalPower: 96,
          expectedRuntime: 14
        }
      },
      {
        id: 'layout-test-3',
        name: 'Layout Página Produtos',
        status: 'paused',
        type: 'layout',
        startDate: '2024-01-20',
        confidence: 65,
        significance: 78,
        priority: 'medium',
        aiRecommendation: 'Teste pausado - necessário mais tempo para significância estatística.',
        estimatedLift: 12,
        variants: [
          {
            id: 'control-layout',
            name: 'Layout Atual',
            description: 'Grid 3 colunas',
            traffic: 890,
            conversions: 23,
            conversionRate: 2.6,
            isControl: true
          },
          {
            id: 'variant-layout',
            name: 'Layout Hero',
            description: 'Produto em destaque + grid',
            traffic: 910,
            conversions: 31,
            conversionRate: 3.4,
            isControl: false,
            change: 'Produto principal em hero section'
          }
        ],
        metrics: {
          totalVisitors: 1800,
          totalConversions: 54,
          duration: 8,
          statisticalPower: 65,
          expectedRuntime: 21
        }
      }
    ];

    const generateInsights = (): AIInsight[] => [
      {
        id: 'seasonal-optimization',
        title: 'Oportunidade Sazonal Detectada',
        description: 'IA identificou padrão: CTAs com urgência performam 40% melhor em Janeiro-Março (planejamento anual corporativo)',
        impact: 'high',
        confidence: 91,
        actionable: 'Implementar CTAs sazonais automáticos baseados no calendário corporativo',
        testSuggestion: 'Teste A/B: CTA genérico vs CTA "Planeje 2024 com LEGAL"'
      },
      {
        id: 'mobile-conversion-gap',
        title: 'Gap de Conversão Mobile Crítico',
        description: 'Conversões mobile são 60% menores que desktop. IA sugere formulários progressivos.',
        impact: 'high',
        confidence: 87,
        actionable: 'Implementar formulário multi-step para mobile',
        testSuggestion: 'Teste A/B: Formulário único vs Progressive form mobile'
      },
      {
        id: 'social-proof-optimization',
        title: 'Social Proof Subutilizado',
        description: 'Páginas com testimonials específicos por setor convertem 25% mais que testimonials genéricos.',
        impact: 'medium',
        confidence: 83,
        actionable: 'Implementar testimonials dinâmicos baseados na origem do tráfego',
        testSuggestion: 'Teste A/B: Testimonial genérico vs Testimonial setorial'
      }
    ];

    setTimeout(() => {
      setTests(generateTests());
      setInsights(generateInsights());
      setIsLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'default';
      case 'completed': return 'secondary';
      case 'paused': return 'outline';
      case 'draft': return 'destructive';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running': return <PlayCircle className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'paused': return <PauseCircle className="h-4 w-4" />;
      case 'draft': return <StopCircle className="h-4 w-4" />;
      default: return <PlayCircle className="h-4 w-4" />;
    }
  };

  const getWinnerVariant = (variants: ABVariant[]) => {
    return variants.reduce((prev, current) => 
      prev.conversionRate > current.conversionRate ? prev : current
    );
  };

  const filteredTests = selectedStatus === 'all' 
    ? tests 
    : tests.filter(test => test.status === selectedStatus);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-40 bg-muted rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Smart A/B Testing IA</h2>
          <p className="text-muted-foreground">
            Testes A/B automatizados com análise inteligente e recomendações de IA
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <FlaskConical className="h-4 w-4 mr-2" />
            Novo Teste
          </Button>
          <Button variant="outline">
            <Brain className="h-4 w-4 mr-2" />
            Sugestões IA
          </Button>
        </div>
      </div>

      {/* AI Insights */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          Insights Automáticos de IA
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <Card key={insight.id} className="p-6">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h4 className="font-semibold text-foreground text-sm">{insight.title}</h4>
                <Badge variant={insight.impact === 'high' ? 'destructive' : 'secondary'}>
                  {insight.impact}
                </Badge>
              </div>
              
              <p className="text-muted-foreground text-sm mb-3">{insight.description}</p>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-muted-foreground">Confiança:</span>
                <Progress value={insight.confidence} className="flex-1 h-1" />
                <span className="text-xs font-medium">{insight.confidence}%</span>
              </div>

              <div className="space-y-2">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Ação Recomendada:</p>
                  <p className="text-xs text-foreground">{insight.actionable}</p>
                </div>
                
                {insight.testSuggestion && (
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="text-xs text-primary font-medium mb-1">💡 Teste Sugerido:</p>
                    <p className="text-xs text-primary">{insight.testSuggestion}</p>
                  </div>
                )}
              </div>

              <Button size="sm" className="w-full mt-3">
                <Zap className="h-3 w-3 mr-2" />
                Criar Teste
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant={selectedStatus === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedStatus('all')}
        >
          Todos
        </Button>
        <Button
          variant={selectedStatus === 'running' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedStatus('running')}
        >
          Em Execução
        </Button>
        <Button
          variant={selectedStatus === 'completed' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedStatus('completed')}
        >
          Concluídos
        </Button>
        <Button
          variant={selectedStatus === 'paused' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedStatus('paused')}
        >
          Pausados
        </Button>
      </div>

      {/* A/B Tests */}
      <div className="space-y-6">
        {filteredTests.map((test) => {
          const winner = getWinnerVariant(test.variants);
          
          return (
            <Card key={test.id} className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Test Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-foreground">{test.name}</h3>
                        <Badge variant={getStatusColor(test.status)}>
                          {getStatusIcon(test.status)}
                          <span className="ml-1">{test.status}</span>
                        </Badge>
                        <Badge variant="outline">{test.type}</Badge>
                        <Badge variant={test.priority === 'high' ? 'destructive' : 'secondary'}>
                          {test.priority}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* AI Recommendation */}
                  <div className="bg-primary/10 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Recomendação IA:</span>
                    </div>
                    <p className="text-sm text-primary">{test.aiRecommendation}</p>
                    {test.estimatedLift > 0 && (
                      <div className="flex items-center gap-2 mt-2">
                        <TrendingUp className="h-3 w-3 text-success" />
                        <span className="text-xs text-success font-medium">
                          +{test.estimatedLift}% lift estimado
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Test Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">
                        {test.metrics.totalVisitors.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">Visitantes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-success">
                        {test.metrics.totalConversions}
                      </div>
                      <div className="text-xs text-muted-foreground">Conversões</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">
                        {test.confidence}%
                      </div>
                      <div className="text-xs text-muted-foreground">Confiança</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">
                        {test.metrics.duration}d
                      </div>
                      <div className="text-xs text-muted-foreground">Duração</div>
                    </div>
                  </div>

                  {/* Variants */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Variantes:</h4>
                    {test.variants.map((variant) => {
                      const isWinner = variant.id === winner.id && test.status === 'completed';
                      
                      return (
                        <div key={variant.id} className={`border rounded-lg p-4 ${
                          isWinner ? 'border-success bg-success/5' : 'border-border'
                        }`}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <h5 className="font-medium text-foreground">{variant.name}</h5>
                              {variant.isControl && (
                                <Badge variant="outline" className="text-xs">Controle</Badge>
                              )}
                              {isWinner && (
                                <Badge variant="secondary" className="text-xs">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Vencedor
                                </Badge>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-foreground">
                                {variant.conversionRate.toFixed(1)}%
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {variant.conversions}/{variant.traffic}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-2">
                            {variant.description}
                          </p>
                          
                          {variant.change && (
                            <p className="text-xs text-primary bg-primary/10 rounded px-2 py-1">
                              ✨ {variant.change}
                            </p>
                          )}
                          
                          <Progress 
                            value={(variant.conversionRate / Math.max(...test.variants.map(v => v.conversionRate))) * 100} 
                            className="h-2 mt-3"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="lg:w-48 flex lg:flex-col gap-2">
                  {test.status === 'running' && (
                    <>
                      <Button variant="outline" className="flex-1">
                        <PauseCircle className="h-4 w-4 mr-2" />
                        Pausar
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <StopCircle className="h-4 w-4 mr-2" />
                        Finalizar
                      </Button>
                    </>
                  )}
                  
                  {test.status === 'completed' && (
                    <Button className="flex-1">
                      <Zap className="h-4 w-4 mr-2" />
                      Implementar
                    </Button>
                  )}
                  
                  {test.status === 'paused' && (
                    <Button className="flex-1">
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Retomar
                    </Button>
                  )}
                  
                  <Button variant="outline" className="flex-1">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Detalhes
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Hidden SEO Data */}
      <div className="sr-only" data-seo-insights="smart-ab-testing">
        <div data-optimization-category="conversion-optimization">
          <span data-metric="ai-powered-ab-testing">Testes A/B automatizados com inteligência artificial</span>
          <span data-metric="smart-conversion-optimization">Otimização de conversão orientada por machine learning</span>
        </div>
        <div data-optimization-category="automated-testing">
          <span data-metric="intelligent-test-recommendations">Recomendações automáticas de testes baseadas em IA</span>
          <span data-metric="statistical-significance-automation">Automação de significância estatística</span>
        </div>
      </div>

      {/* Smart A/B Testing Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "LEGAL Smart A/B Testing",
            "applicationCategory": "Optimization Software",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "BRL"
            },
            "featureList": [
              "Testes A/B automáticos com IA",
              "Análise estatística avançada",
              "Recomendações inteligentes",
              "Otimização de conversão em tempo real"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "180"
            }
          })
        }}
      />
    </div>
  );
};

export default SmartABTesting;