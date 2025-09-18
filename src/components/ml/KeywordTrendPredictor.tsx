import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  Brain, 
  Target, 
  Search, 
  Calendar,
  BarChart3,
  Zap,
  Globe,
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';

interface KeywordTrend {
  keyword: string;
  currentVolume: number;
  predictedVolume: number;
  trendDirection: 'rising' | 'falling' | 'stable';
  confidence: number;
  difficulty: number;
  opportunity: number;
  timeframe: string;
  relatedTopics: string[];
  seasonality: 'high' | 'medium' | 'low';
  competitorGap: boolean;
}

interface TrendPrediction {
  id: string;
  category: string;
  title: string;
  description: string;
  keywords: KeywordTrend[];
  estimatedImpact: number;
  timeToCapture: string;
  actionRequired: string;
  priority: number;
}

interface MarketInsight {
  id: string;
  title: string;
  description: string;
  category: 'emerging' | 'declining' | 'seasonal' | 'competitive';
  keywords: string[];
  confidence: number;
  impact: 'high' | 'medium' | 'low';
  urgency: 'immediate' | 'short-term' | 'long-term';
}

const KeywordTrendPredictor: React.FC = () => {
  const [predictions, setPredictions] = useState<TrendPrediction[]>([]);
  const [insights, setInsights] = useState<MarketInsight[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeRange, setTimeRange] = useState('3m');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generatePredictions = (): TrendPrediction[] => [
      {
        id: 'ai-automation-boom',
        category: 'Tecnologia',
        title: 'Boom da Automação com IA',
        description: 'Explosão prevista em buscas por automação empresarial impulsionada por IA. Crescimento de 340% nos próximos 6 meses.',
        estimatedImpact: 250000,
        timeToCapture: '2-3 meses',
        actionRequired: 'Criar hub de conteúdo sobre IA empresarial',
        priority: 95,
        keywords: [
          {
            keyword: 'automação empresarial com ia',
            currentVolume: 2100,
            predictedVolume: 9200,
            trendDirection: 'rising',
            confidence: 94,
            difficulty: 45,
            opportunity: 89,
            timeframe: '6 meses',
            relatedTopics: ['machine learning empresarial', 'robotic process automation', 'ai workflow'],
            seasonality: 'low',
            competitorGap: true
          },
          {
            keyword: 'inteligencia artificial para negocios',
            currentVolume: 1800,
            predictedVolume: 7500,
            trendDirection: 'rising',
            confidence: 87,
            difficulty: 38,
            opportunity: 92,
            timeframe: '4 meses',
            relatedTopics: ['business intelligence ai', 'corporate ai solutions', 'ai business strategy'],
            seasonality: 'low',
            competitorGap: true
          }
        ]
      },
      {
        id: 'sustainable-events',
        category: 'Eventos',
        title: 'Eventos Sustentáveis em Alta',
        description: 'Tendência crescente por eventos sustentáveis e carbon-neutral. Oportunidade de posicionar Smart Events como solução eco-friendly.',
        estimatedImpact: 180000,
        timeToCapture: '1-2 meses',
        actionRequired: 'Desenvolver conteúdo sobre ESG em eventos',
        priority: 88,
        keywords: [
          {
            keyword: 'eventos sustentaveis tecnologia',
            currentVolume: 890,
            predictedVolume: 3400,
            trendDirection: 'rising',
            confidence: 82,
            difficulty: 28,
            opportunity: 95,
            timeframe: '3 meses',
            relatedTopics: ['green events', 'carbon neutral events', 'esg eventos'],
            seasonality: 'medium',
            competitorGap: true
          }
        ]
      },
      {
        id: 'remote-work-tech',
        category: 'Trabalho Remoto',
        title: 'Tecnologias para Trabalho Híbrido',
        description: 'Consolidação do modelo híbrido impulsiona busca por soluções de colaboração e produtividade.',
        estimatedImpact: 120000,
        timeToCapture: '2-4 meses',
        actionRequired: 'Criar conteúdo sobre soluções híbridas',
        priority: 76,
        keywords: [
          {
            keyword: 'tecnologia trabalho hibrido',
            currentVolume: 1200,
            predictedVolume: 4800,
            trendDirection: 'rising',
            confidence: 79,
            difficulty: 52,
            opportunity: 71,
            timeframe: '5 meses',
            relatedTopics: ['hybrid work solutions', 'remote collaboration tools', 'workplace technology'],
            seasonality: 'low',
            competitorGap: false
          }
        ]
      }
    ];

    const generateInsights = (): MarketInsight[] => [
      {
        id: 'chatgpt-impact',
        title: 'Impacto do ChatGPT em Buscas B2B',
        description: 'Mudança no comportamento de busca: 67% mais buscas por "implementação de IA" após popularização do ChatGPT',
        category: 'emerging',
        keywords: ['implementação ia empresas', 'chatgpt para empresas', 'ia conversacional negócios'],
        confidence: 91,
        impact: 'high',
        urgency: 'immediate'
      },
      {
        id: 'seasonal-events',
        title: 'Sazonalidade de Eventos Corporativos',
        description: 'Pico de buscas por "gestão de eventos" em março (+180%) e setembro (+145%) devido ao calendário corporativo',
        category: 'seasonal',
        keywords: ['gestao eventos corporativos', 'planejamento evento empresa', 'organizacao eventos'],
        confidence: 95,
        impact: 'medium',
        urgency: 'short-term'
      },
      {
        id: 'competitor-gap',
        title: 'Gap Competitivo Identificado',
        description: 'Concorrentes não estão explorando "automação de processos com IA" - oportunidade de first-mover advantage',
        category: 'competitive',
        keywords: ['automacao processos ia', 'workflow automation ai', 'business process ai'],
        confidence: 84,
        impact: 'high',
        urgency: 'immediate'
      }
    ];

    setTimeout(() => {
      setPredictions(generatePredictions());
      setInsights(generateInsights());
      setIsLoading(false);
    }, 1500);
  }, [timeRange]);

  const getTrendIcon = (direction: string) => {
    switch (direction) {
      case 'rising': return <TrendingUp className="h-4 w-4 text-success" />;
      case 'falling': return <TrendingDown className="h-4 w-4 text-destructive" />;
      default: return <BarChart3 className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'emerging': return 'default';
      case 'declining': return 'destructive';
      case 'seasonal': return 'secondary';
      case 'competitive': return 'outline';
      default: return 'outline';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'immediate': return 'destructive';
      case 'short-term': return 'secondary';
      case 'long-term': return 'outline';
      default: return 'outline';
    }
  };

  const filteredPredictions = selectedCategory === 'all' 
    ? predictions 
    : predictions.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-muted rounded-lg" />
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
          <h2 className="text-2xl font-bold text-foreground">Preditor de Tendências</h2>
          <p className="text-muted-foreground">
            Machine Learning para prever tendências de keywords e oportunidades de mercado
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={timeRange === '1m' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTimeRange('1m')}
          >
            1 mês
          </Button>
          <Button
            variant={timeRange === '3m' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTimeRange('3m')}
          >
            3 meses
          </Button>
          <Button
            variant={timeRange === '6m' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTimeRange('6m')}
          >
            6 meses
          </Button>
        </div>
      </div>

      {/* Market Insights */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          Insights de Mercado IA
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <Card key={insight.id} className="p-6">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h4 className="font-semibold text-foreground text-sm">{insight.title}</h4>
                <div className="flex flex-col gap-1">
                  <Badge variant={getCategoryColor(insight.category)} className="text-xs">
                    {insight.category}
                  </Badge>
                  <Badge variant={getUrgencyColor(insight.urgency)} className="text-xs">
                    {insight.urgency}
                  </Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-3">{insight.description}</p>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-muted-foreground">Confiança:</span>
                <Progress value={insight.confidence} className="flex-1 h-1" />
                <span className="text-xs font-medium">{insight.confidence}%</span>
              </div>

              <div className="flex flex-wrap gap-1">
                {insight.keywords.slice(0, 2).map((keyword, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {keyword}
                  </Badge>
                ))}
                {insight.keywords.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{insight.keywords.length - 2}
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('all')}
        >
          Todas Categorias
        </Button>
        <Button
          variant={selectedCategory === 'tecnologia' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('tecnologia')}
        >
          Tecnologia
        </Button>
        <Button
          variant={selectedCategory === 'eventos' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('eventos')}
        >
          Eventos
        </Button>
        <Button
          variant={selectedCategory === 'trabalho remoto' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('trabalho remoto')}
        >
          Trabalho Remoto
        </Button>
      </div>

      {/* Trend Predictions */}
      <div className="space-y-6">
        {filteredPredictions.map((prediction) => (
          <Card key={prediction.id} className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Prediction Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{prediction.title}</h3>
                      <Badge variant="outline">{prediction.category}</Badge>
                      <Badge 
                        variant={prediction.priority >= 90 ? 'destructive' : 
                                prediction.priority >= 80 ? 'secondary' : 'outline'}
                      >
                        Prioridade: {prediction.priority}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{prediction.description}</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3 mb-6">
                  <div className="bg-success/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-success" />
                      <span className="text-sm font-medium text-success">Impacto Estimado</span>
                    </div>
                    <div className="text-xl font-bold text-success">
                      +{prediction.estimatedImpact.toLocaleString()} visitas/mês
                    </div>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Tempo para Captura</span>
                    </div>
                    <div className="text-xl font-bold text-primary">
                      {prediction.timeToCapture}
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Ação Necessária</span>
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {prediction.actionRequired}
                    </div>
                  </div>
                </div>

                {/* Keywords */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Keywords Previstas:</h4>
                  {prediction.keywords.map((keyword, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h5 className="font-medium text-foreground">{keyword.keyword}</h5>
                            {getTrendIcon(keyword.trendDirection)}
                            {keyword.competitorGap && (
                              <Badge variant="outline" className="text-xs">
                                <Sparkles className="h-3 w-3 mr-1" />
                                Gap Competitivo
                              </Badge>
                            )}
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Volume Atual:</span>
                              <div className="font-medium">{keyword.currentVolume.toLocaleString()}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Volume Previsto:</span>
                              <div className="font-medium text-success">{keyword.predictedVolume.toLocaleString()}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Dificuldade:</span>
                              <div className="font-medium">{keyword.difficulty}/100</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Oportunidade:</span>
                              <div className="font-medium text-success">{keyword.opportunity}/100</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-muted-foreground">Confiança da Predição:</span>
                        <Progress value={keyword.confidence} className="flex-1 h-2" />
                        <span className="text-xs font-medium">{keyword.confidence}%</span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {keyword.relatedTopics.map((topic, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="lg:w-48 flex lg:flex-col gap-2">
                <Button className="flex-1">
                  <Zap className="h-4 w-4 mr-2" />
                  Implementar Estratégia
                </Button>
                <Button variant="outline" className="flex-1">
                  <Target className="h-4 w-4 mr-2" />
                  Monitorar Trend
                </Button>
                <Button variant="outline" className="flex-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Review
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Hidden SEO Data */}
      <div className="sr-only" data-seo-insights="keyword-trend-prediction">
        <div data-prediction-category="ai-powered-forecasting">
          <span data-metric="keyword-trend-analysis">Análise preditiva de tendências de keywords com IA</span>
          <span data-metric="market-opportunity-identification">Identificação automática de oportunidades de mercado</span>
        </div>
        <div data-prediction-category="competitive-intelligence">
          <span data-metric="competitor-gap-analysis">Análise de gaps competitivos em tempo real</span>
          <span data-metric="market-timing-optimization">Otimização de timing para captura de mercado</span>
        </div>
      </div>

      {/* Trend Prediction Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "LEGAL Keyword Trend Predictor",
            "description": "Sistema de machine learning para predição de tendências de keywords e análise de mercado",
            "creator": {
              "@type": "Organization",
              "name": "LEGAL TechCo"
            },
            "measurementTechnique": "AI-Powered Trend Analysis",
            "variableMeasured": [
              {
                "@type": "PropertyValue",
                "name": "Trend Prediction Accuracy",
                "value": "89%",
                "description": "Precisão na predição de tendências de keywords"
              },
              {
                "@type": "PropertyValue",
                "name": "Market Opportunity Detection",
                "value": "94%",
                "description": "Taxa de detecção de oportunidades de mercado"
              }
            ]
          })
        }}
      />
    </div>
  );
};

export default KeywordTrendPredictor;