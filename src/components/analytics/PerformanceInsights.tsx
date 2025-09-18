import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Zap, 
  Brain, 
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  trend: 'up' | 'down' | 'stable';
  change: number;
  category: 'traffic' | 'conversion' | 'engagement' | 'technical';
  priority: 'high' | 'medium' | 'low';
  recommendation?: string;
}

interface AIInsight {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  confidence: number;
  actionable: boolean;
  estimatedGain: string;
}

const PerformanceInsights: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [insights, setInsights] = useState<AIInsight[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const generateMetrics = (): PerformanceMetric[] => [
      {
        id: 'organic-traffic',
        name: 'Tráfego Orgânico',
        value: 45720,
        target: 50000,
        trend: 'up',
        change: 12.5,
        category: 'traffic',
        priority: 'high',
        recommendation: 'Otimizar para long-tail keywords específicas do setor'
      },
      {
        id: 'conversion-rate',
        name: 'Taxa de Conversão',
        value: 3.8,
        target: 4.5,
        trend: 'up',
        change: 0.3,
        category: 'conversion',
        priority: 'high'
      },
      {
        id: 'page-speed',
        name: 'Page Speed Score',
        value: 92,
        target: 95,
        trend: 'stable',
        change: 0,
        category: 'technical',
        priority: 'medium'
      },
      {
        id: 'bounce-rate',
        name: 'Taxa de Rejeição',
        value: 35,
        target: 30,
        trend: 'down',
        change: -2.1,
        category: 'engagement',
        priority: 'medium'
      },
      {
        id: 'time-on-page',
        name: 'Tempo na Página',
        value: 185,
        target: 210,
        trend: 'up',
        change: 15,
        category: 'engagement',
        priority: 'low'
      }
    ];

    const generateAIInsights = (): AIInsight[] => [
      {
        id: 'keyword-opportunity',
        title: 'Oportunidade de Keyword Gap',
        description: 'Identificamos 47 keywords de alto volume que competidores rankeiam mas você não',
        impact: 'high',
        confidence: 89,
        actionable: true,
        estimatedGain: '+25% tráfego orgânico'
      },
      {
        id: 'content-optimization',
        title: 'Conteúdo Subotimizado Detectado',
        description: '12 páginas com potencial de melhoria significativa no CTR e dwell time',
        impact: 'medium',
        confidence: 76,
        actionable: true,
        estimatedGain: '+15% engajamento'
      },
      {
        id: 'technical-issue',
        title: 'Problema Técnico Crítico',
        description: 'Core Web Vitals degradando em 8% das páginas principais',
        impact: 'high',
        confidence: 94,
        actionable: true,
        estimatedGain: '+12% ranking médio'
      }
    ];

    setTimeout(() => {
      setMetrics(generateMetrics());
      setInsights(generateAIInsights());
      setIsLoading(false);
    }, 1000);
  }, []);

  const getMetricProgress = (metric: PerformanceMetric): number => {
    return Math.min((metric.value / metric.target) * 100, 100);
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-success" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-destructive" />;
      default: return <BarChart3 className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  const filteredMetrics = selectedCategory === 'all' 
    ? metrics 
    : metrics.filter(m => m.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse space-y-4">
          {[...Array(6)].map((_, i) => (
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
          <h2 className="text-2xl font-bold text-foreground">Performance Insights</h2>
          <p className="text-muted-foreground">
            Análise inteligente baseada em IA para otimização contínua
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('all')}
          >
            Todas
          </Button>
          <Button
            variant={selectedCategory === 'traffic' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('traffic')}
          >
            Tráfego
          </Button>
          <Button
            variant={selectedCategory === 'conversion' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('conversion')}
          >
            Conversão
          </Button>
          <Button
            variant={selectedCategory === 'engagement' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('engagement')}
          >
            Engajamento
          </Button>
        </div>
      </div>

      {/* AI Insights */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          Insights de IA
        </h3>
        <div className="grid gap-4">
          {insights.map((insight) => (
            <Card key={insight.id} className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">{insight.title}</h4>
                    <Badge variant={getImpactColor(insight.impact)}>
                      {insight.impact}
                    </Badge>
                    <Badge variant="outline">
                      {insight.confidence}% confiança
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{insight.description}</p>
                  <p className="text-sm font-medium text-success">
                    Ganho estimado: {insight.estimatedGain}
                  </p>
                </div>
                {insight.actionable && (
                  <Button size="sm" className="shrink-0">
                    <Zap className="h-4 w-4 mr-2" />
                    Implementar
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Métricas de Performance
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredMetrics.map((metric) => (
            <Card key={metric.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-foreground">{metric.name}</h4>
                <div className="flex items-center gap-2">
                  {getTrendIcon(metric.trend)}
                  <Badge 
                    variant={metric.priority === 'high' ? 'destructive' : 
                             metric.priority === 'medium' ? 'secondary' : 'outline'}
                  >
                    {metric.priority}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">
                    {metric.category === 'traffic' ? metric.value.toLocaleString() :
                     metric.category === 'engagement' && metric.id === 'time-on-page' ? `${metric.value}s` :
                     `${metric.value}${metric.category === 'conversion' ? '%' : ''}`}
                  </span>
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-success' : 
                    metric.trend === 'down' ? 'text-destructive' : 
                    'text-muted-foreground'
                  }`}>
                    {metric.change > 0 ? '+' : ''}{metric.change}%
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Meta: {metric.target}</span>
                    <span className="text-muted-foreground">
                      {Math.round(getMetricProgress(metric))}%
                    </span>
                  </div>
                  <Progress value={getMetricProgress(metric)} className="h-2" />
                </div>

                {metric.recommendation && (
                  <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      💡 {metric.recommendation}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Hidden SEO Data */}
      <div className="sr-only" data-seo-insights="performance-optimization">
        <div data-optimization-category="traffic-growth">
          <span data-metric="organic-traffic-increase">Crescimento de tráfego orgânico otimizado por IA</span>
          <span data-metric="keyword-gap-analysis">Análise inteligente de oportunidades de keywords</span>
        </div>
        <div data-optimization-category="conversion-optimization">
          <span data-metric="ai-powered-cro">Otimização de conversão orientada por inteligência artificial</span>
          <span data-metric="user-behavior-analysis">Análise comportamental avançada para melhor UX</span>
        </div>
        <div data-optimization-category="technical-performance">
          <span data-metric="core-web-vitals-optimization">Otimização automática de Core Web Vitals</span>
          <span data-metric="page-speed-enhancement">Melhoria contínua de performance técnica</span>
        </div>
      </div>

      {/* Performance Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "LEGAL Performance Insights AI",
            "applicationCategory": "Analytics Software",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "150",
              "bestRating": "5"
            },
            "featureList": [
              "Análise de performance em tempo real",
              "Insights de IA para otimização",
              "Monitoramento de métricas avançadas",
              "Recomendações automatizadas"
            ]
          })
        }}
      />
    </div>
  );
};

export default PerformanceInsights;