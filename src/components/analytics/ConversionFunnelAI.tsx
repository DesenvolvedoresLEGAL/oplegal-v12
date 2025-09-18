import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Filter, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Target, 
  Brain, 
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowRight,
  Zap,
  Eye,
  MousePointer,
  CreditCard,
  Mail
} from 'lucide-react';

interface FunnelStep {
  id: string;
  name: string;
  stage: string;
  users: number;
  conversionRate: number;
  dropoffRate: number;
  avgTimeSpent: number;
  topExitPages: string[];
  aiRecommendations: string[];
  priority: 'high' | 'medium' | 'low';
}

interface ConversionInsight {
  id: string;
  title: string;
  description: string;
  step: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
  estimatedLift: number;
  confidence: number;
  actionable: string;
}

interface FunnelMetrics {
  totalUsers: number;
  overallConversionRate: number;
  averageTimeToConvert: number;
  revenueImpact: number;
  topBarriers: string[];
}

const ConversionFunnelAI: React.FC = () => {
  const [funnelSteps, setFunnelSteps] = useState<FunnelStep[]>([]);
  const [insights, setInsights] = useState<ConversionInsight[]>([]);
  const [metrics, setMetrics] = useState<FunnelMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFunnel, setSelectedFunnel] = useState('main');

  useEffect(() => {
    const generateFunnelData = (): FunnelStep[] => [
      {
        id: 'awareness',
        name: 'Descoberta/Awareness',
        stage: 'TOFU',
        users: 18450,
        conversionRate: 100,
        dropoffRate: 0,
        avgTimeSpent: 85,
        topExitPages: ['/', '/produtos', '/smart-events'],
        aiRecommendations: [
          'Implementar exit-intent popup com lead magnet',
          'Otimizar meta descriptions para maior CTR',
          'Adicionar social proof na homepage'
        ],
        priority: 'medium'
      },
      {
        id: 'interest',
        name: 'Interesse/Exploração',
        stage: 'TOFU',
        users: 12320,
        conversionRate: 66.8,
        dropoffRate: 33.2,
        avgTimeSpent: 185,
        topExitPages: ['/produtos/galaxia', '/negocios', '/universo/tectec'],
        aiRecommendations: [
          'Adicionar vídeos explicativos nos produtos',
          'Implementar chat interativo',
          'Criar comparativo de soluções'
        ],
        priority: 'high'
      },
      {
        id: 'consideration',
        name: 'Consideração/Avaliação',
        stage: 'MOFU',
        users: 6890,
        conversionRate: 55.9,
        dropoffRate: 44.1,
        avgTimeSpent: 320,
        topExitPages: ['/contato', '/precos', '/negocios/ai'],
        aiRecommendations: [
          'Simplificar formulário de contato',
          'Adicionar calculadora de ROI',
          'Implementar agendamento automático'
        ],
        priority: 'high'
      },
      {
        id: 'intent',
        name: 'Intenção de Compra',
        stage: 'BOFU',
        users: 2450,
        conversionRate: 35.5,
        dropoffRate: 64.5,
        avgTimeSpent: 180,
        topExitPages: ['/contato', '/candidatura'],
        aiRecommendations: [
          'Implementar urgency triggers',
          'Adicionar testimonials específicos',
          'Oferecer trial gratuito'
        ],
        priority: 'high'
      },
      {
        id: 'conversion',
        name: 'Conversão',
        stage: 'BOFU',
        users: 892,
        conversionRate: 36.4,
        dropoffRate: 63.6,
        avgTimeSpent: 95,
        topExitPages: [],
        aiRecommendations: [
          'Otimizar processo de onboarding',
          'Implementar follow-up automatizado',
          'Criar programa de referência'
        ],
        priority: 'medium'
      }
    ];

    const generateInsights = (): ConversionInsight[] => [
      {
        id: 'consideration-bottleneck',
        title: 'Gargalo Crítico na Consideração',
        description: 'Identificado drop-off de 44% entre interesse e consideração. Usuários abandonam ao tentar contato.',
        step: 'consideration',
        impact: 'high',
        effort: 'medium',
        estimatedLift: 28,
        confidence: 87,
        actionable: 'Implementar formulário progressivo e chat em tempo real'
      },
      {
        id: 'intent-friction',
        title: 'Friction na Intenção de Compra',
        description: '64% dos usuários com alta intenção não convertem. Falta de informações sobre pricing e ROI.',
        step: 'intent',
        impact: 'high',
        effort: 'low',
        estimatedLift: 35,
        confidence: 91,
        actionable: 'Adicionar calculadora de ROI e pricing transparente'
      },
      {
        id: 'mobile-optimization',
        title: 'Oportunidade Mobile Inexplorada',
        description: 'Conversão mobile é 40% menor que desktop, mas representa 35% do tráfego.',
        step: 'interest',
        impact: 'medium',
        effort: 'medium',
        estimatedLift: 18,
        confidence: 79,
        actionable: 'Otimizar experiência mobile e implementar Progressive Web App'
      }
    ];

    const generateMetrics = (): FunnelMetrics => ({
      totalUsers: 18450,
      overallConversionRate: 4.8,
      averageTimeToConvert: 12.5,
      revenueImpact: 890000,
      topBarriers: [
        'Formulário de contato complexo',
        'Falta de informações de pricing',
        'Ausência de social proof específico',
        'Processo de onboarding confuso'
      ]
    });

    setTimeout(() => {
      setFunnelSteps(generateFunnelData());
      setInsights(generateInsights());
      setMetrics(generateMetrics());
      setIsLoading(false);
    }, 1100);
  }, [selectedFunnel]);

  const getStepIcon = (stepId: string) => {
    switch (stepId) {
      case 'awareness': return <Eye className="h-5 w-5" />;
      case 'interest': return <MousePointer className="h-5 w-5" />;
      case 'consideration': return <Brain className="h-5 w-5" />;
      case 'intent': return <Target className="h-5 w-5" />;
      case 'conversion': return <CreditCard className="h-5 w-5" />;
      default: return <Filter className="h-5 w-5" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  const getImpactEffortBadge = (impact: string, effort: string) => {
    if (impact === 'high' && effort === 'low') return 'Ganho Rápido';
    if (impact === 'high' && effort === 'medium') return 'Projeto Importante';
    if (impact === 'medium' && effort === 'low') return 'Melhoria Fácil';
    return 'Avaliação Necessária';
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-24 bg-muted rounded-lg" />
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
          <h2 className="text-2xl font-bold text-foreground">Funil de Conversão IA</h2>
          <p className="text-muted-foreground">
            Análise inteligente e otimização automática do funil de vendas
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={selectedFunnel === 'main' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFunnel('main')}
          >
            Funil Principal
          </Button>
          <Button
            variant={selectedFunnel === 'b2b' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFunnel('b2b')}
          >
            B2B Enterprise
          </Button>
          <Button
            variant={selectedFunnel === 'product' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedFunnel('product')}
          >
            Produtos
          </Button>
        </div>
      </div>

      {/* Overall Metrics */}
      {metrics && (
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Total de Usuários</h3>
            </div>
            <div className="text-3xl font-bold text-foreground">
              {metrics.totalUsers.toLocaleString()}
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5 text-success" />
              <h3 className="font-semibold text-foreground">Taxa de Conversão</h3>
            </div>
            <div className="text-3xl font-bold text-success">
              {metrics.overallConversionRate}%
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Tempo p/ Converter</h3>
            </div>
            <div className="text-3xl font-bold text-foreground">
              {metrics.averageTimeToConvert} dias
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-success" />
              <h3 className="font-semibold text-foreground">Impacto Receita</h3>
            </div>
            <div className="text-3xl font-bold text-success">
              R$ {(metrics.revenueImpact / 1000).toFixed(0)}K
            </div>
          </Card>
        </div>
      )}

      {/* AI Insights */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          Insights de Otimização IA
        </h3>
        <div className="grid gap-4">
          {insights.map((insight) => (
            <Card key={insight.id} className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">{insight.title}</h4>
                    <Badge variant={insight.impact === 'high' ? 'destructive' : 'secondary'}>
                      {getImpactEffortBadge(insight.impact, insight.effort)}
                    </Badge>
                    <Badge variant="outline">
                      +{insight.estimatedLift}% conversão
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">{insight.description}</p>
                  <div className="bg-muted/50 rounded-lg p-3 mb-3">
                    <p className="text-sm font-medium text-foreground">
                      🎯 Ação: {insight.actionable}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Confiança:</span>
                      <Progress value={insight.confidence} className="w-20 h-2" />
                      <span className="text-xs font-medium">{insight.confidence}%</span>
                    </div>
                    <Badge variant="outline">
                      Etapa: {insight.step}
                    </Badge>
                  </div>
                </div>
                <Button size="sm">
                  <Zap className="h-4 w-4 mr-2" />
                  Implementar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Funnel Steps */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          Etapas do Funil
        </h3>
        <div className="space-y-4">
          {funnelSteps.map((step, index) => (
            <Card key={step.id} className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Step Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      {getStepIcon(step.id)}
                      <h4 className="font-semibold text-foreground">{step.name}</h4>
                    </div>
                    <Badge variant="outline">{step.stage}</Badge>
                    <Badge variant={getPriorityColor(step.priority)}>
                      {step.priority}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">
                        {step.users.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">Usuários</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">
                        {step.conversionRate.toFixed(1)}%
                      </div>
                      <div className="text-xs text-muted-foreground">Taxa Conv.</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-destructive">
                        {step.dropoffRate.toFixed(1)}%
                      </div>
                      <div className="text-xs text-muted-foreground">Drop-off</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">
                        {step.avgTimeSpent}s
                      </div>
                      <div className="text-xs text-muted-foreground">Tempo Médio</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <Progress value={step.conversionRate} className="h-3" />
                  </div>

                  {/* AI Recommendations */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-foreground mb-2">
                      🤖 Recomendações IA:
                    </h5>
                    <div className="space-y-1">
                      {step.aiRecommendations.map((rec, i) => (
                        <div key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 mt-0.5 text-success shrink-0" />
                          {rec}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Exit Pages */}
                  {step.topExitPages.length > 0 && (
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-2">
                        Principais Páginas de Saída:
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {step.topExitPages.map((page, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {page}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Arrow to next step */}
                {index < funnelSteps.length - 1 && (
                  <div className="flex lg:flex-col items-center justify-center lg:justify-start">
                    <ArrowRight className="h-6 w-6 text-muted-foreground transform lg:rotate-90" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Top Barriers */}
      {metrics && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Principais Barreiras Identificadas
          </h3>
          <div className="grid gap-3 md:grid-cols-2">
            {metrics.topBarriers.map((barrier, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-center w-6 h-6 bg-destructive/10 text-destructive rounded-full text-sm font-bold">
                  {index + 1}
                </div>
                <span className="text-foreground">{barrier}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Hidden SEO Data */}
      <div className="sr-only" data-seo-insights="conversion-funnel-optimization">
        <div data-optimization-category="conversion-rate-optimization">
          <span data-metric="ai-powered-funnel-analysis">Análise de funil de conversão otimizada por IA</span>
          <span data-metric="automated-cro-recommendations">Recomendações automatizadas para CRO</span>
        </div>
        <div data-optimization-category="user-journey-optimization">
          <span data-metric="intelligent-funnel-optimization">Otimização inteligente da jornada do usuário</span>
          <span data-metric="conversion-barrier-identification">Identificação automática de barreiras de conversão</span>
        </div>
      </div>

      {/* Funnel Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "LEGAL Conversion Funnel AI Analytics",
            "description": "Sistema avançado de análise e otimização de funil de conversão com inteligência artificial",
            "creator": {
              "@type": "Organization", 
              "name": "LEGAL TechCo"
            },
            "measurementTechnique": "AI-Powered Conversion Analysis",
            "variableMeasured": [
              {
                "@type": "PropertyValue",
                "name": "Conversion Rate Optimization",
                "value": `${metrics?.overallConversionRate}%`,
                "description": "Taxa de conversão otimizada por IA"
              },
              {
                "@type": "PropertyValue",
                "name": "Funnel Performance Score",
                "value": "94/100",
                "description": "Score de performance do funil"
              }
            ]
          })
        }}
      />
    </div>
  );
};

export default ConversionFunnelAI;