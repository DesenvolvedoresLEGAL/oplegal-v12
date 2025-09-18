import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Users, 
  DollarSign,
  Brain,
  Zap,
  Globe,
  Clock,
  Activity,
  BarChart3,
  PieChart,
  Calendar,
  RefreshCw,
  Download,
  Settings,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';

interface ExecutiveMetrics {
  revenue: {
    current: number;
    previous: number;
    target: number;
    growth: number;
  };
  leads: {
    current: number;
    previous: number;
    target: number;
    growth: number;
    quality_score: number;
  };
  traffic: {
    current: number;
    previous: number;
    organic_percentage: number;
    growth: number;
  };
  conversion: {
    rate: number;
    previous_rate: number;
    target: number;
    improvement: number;
  };
  customer_satisfaction: {
    score: number;
    previous: number;
    nps: number;
  };
  roi: {
    marketing: number;
    seo: number;
    content: number;
    overall: number;
  };
}

interface KPI {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  category: 'revenue' | 'growth' | 'efficiency' | 'satisfaction';
}

interface Alert {
  id: string;
  type: 'opportunity' | 'warning' | 'critical' | 'info';
  title: string;
  description: string;
  impact: string;
  action: string;
  priority: number;
  timestamp: string;
}

interface Forecast {
  period: string;
  revenue: number;
  confidence: number;
  factors: string[];
}

const ExecutiveDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<ExecutiveMetrics | null>(null);
  const [kpis, setKPIs] = useState<KPI[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [forecasts, setForecasts] = useState<Forecast[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateMetrics = (): ExecutiveMetrics => ({
      revenue: {
        current: 890000,
        previous: 750000,
        target: 1000000,
        growth: 18.7
      },
      leads: {
        current: 1247,
        previous: 1089,
        target: 1500,
        growth: 14.5,
        quality_score: 87
      },
      traffic: {
        current: 45230,
        previous: 38940,
        organic_percentage: 68.5,
        growth: 16.1
      },
      conversion: {
        rate: 4.8,
        previous_rate: 4.2,
        target: 5.5,
        improvement: 14.3
      },
      customer_satisfaction: {
        score: 91,
        previous: 88,
        nps: 73
      },
      roi: {
        marketing: 420,
        seo: 680,
        content: 340,
        overall: 480
      }
    });

    const generateKPIs = (): KPI[] => [
      {
        id: 'monthly_revenue',
        name: 'Receita Mensal',
        value: 890000,
        target: 1000000,
        unit: 'BRL',
        trend: 'up',
        change: 18.7,
        status: 'good',
        category: 'revenue'
      },
      {
        id: 'lead_generation',
        name: 'Leads Qualificados',
        value: 1247,
        target: 1500,
        unit: 'leads',
        trend: 'up',
        change: 14.5,
        status: 'good',
        category: 'growth'
      },
      {
        id: 'conversion_rate',
        name: 'Taxa de Conversão',
        value: 4.8,
        target: 5.5,
        unit: '%',
        trend: 'up',
        change: 14.3,
        status: 'warning',
        category: 'efficiency'
      },
      {
        id: 'customer_acquisition_cost',
        name: 'CAC',
        value: 245,
        target: 200,
        unit: 'BRL',
        trend: 'down',
        change: -8.2,
        status: 'warning',
        category: 'efficiency'
      },
      {
        id: 'lifetime_value',
        name: 'LTV',
        value: 12400,
        target: 15000,
        unit: 'BRL',
        trend: 'up',
        change: 22.5,
        status: 'excellent',
        category: 'revenue'
      },
      {
        id: 'nps_score',
        name: 'Net Promoter Score',
        value: 73,
        target: 80,
        unit: 'pontos',
        trend: 'up',
        change: 5.8,
        status: 'good',
        category: 'satisfaction'
      }
    ];

    const generateAlerts = (): Alert[] => [
      {
        id: 'revenue_opportunity',
        type: 'opportunity',
        title: 'Oportunidade de Revenue +25%',
        description: 'IA identificou 3 novos segmentos B2B com alta probabilidade de conversão',
        impact: 'R$ 225K potencial adicional',
        action: 'Expandir campanha para segmentos identificados',
        priority: 95,
        timestamp: '2024-01-15T14:30:00Z'
      },
      {
        id: 'conversion_decline',
        type: 'warning',
        title: 'Declínio na Conversão Mobile',
        description: 'Taxa de conversão mobile caiu 12% nos últimos 7 dias',
        impact: 'Perda estimada de R$ 45K/mês',
        action: 'Otimizar experiência mobile urgentemente',
        priority: 85,
        timestamp: '2024-01-15T12:15:00Z'
      },
      {
        id: 'competitor_threat',
        type: 'critical',
        title: 'Ameaça Competitiva Detectada',
        description: 'Concorrente aumentou investimento em palavras-chave principais em 340%',
        impact: 'Possível perda de 15% share of voice',
        action: 'Revisar estratégia de licitação e conteúdo',
        priority: 90,
        timestamp: '2024-01-15T10:45:00Z'
      }
    ];

    const generateForecasts = (): Forecast[] => [
      {
        period: 'Q1 2024',
        revenue: 2800000,
        confidence: 87,
        factors: ['Sazonalidade positiva', 'Expansão de produtos', 'Otimização de conversão']
      },
      {
        period: 'Q2 2024',
        revenue: 3200000,
        confidence: 82,
        factors: ['Lançamento Smart Events 2.0', 'Campanha B2B', 'Parcerias estratégicas']
      },
      {
        period: 'Q3 2024',
        revenue: 3600000,
        confidence: 75,
        factors: ['Mercado internacional', 'IA avançada', 'Automação completa']
      }
    ];

    setTimeout(() => {
      setMetrics(generateMetrics());
      setKPIs(generateKPIs());
      setAlerts(generateAlerts());
      setForecasts(generateForecasts());
      setIsLoading(false);
    }, 1000);
  }, [selectedPeriod]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'secondary';
      case 'good': return 'secondary';
      case 'warning': return 'destructive';
      case 'critical': return 'destructive';
      default: return 'outline';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'opportunity': return 'default';
      case 'warning': return 'destructive';
      case 'critical': return 'destructive';
      case 'info': return 'secondary';
      default: return 'outline';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-success" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-destructive" />;
      default: return <Activity className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('pt-BR').format(value);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead 
          title="Dashboard Executivo - LEGAL TechCo"
          description="Dashboard executivo com métricas de performance, KPIs e insights de IA para tomada de decisão estratégica"
          keywords="dashboard executivo, métricas empresariais, kpis, analytics, business intelligence"
        />
        <div className="container mx-auto p-6">
          <div className="animate-pulse space-y-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-32 bg-muted rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Dashboard Executivo - LEGAL TechCo"
        description="Dashboard executivo completo com métricas de performance, KPIs e insights de IA para tomada de decisão estratégica em tempo real"
        keywords="dashboard executivo, métricas empresariais, kpis, business intelligence, analytics executivo, performance empresarial"
      />

      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard Executivo</h1>
            <p className="text-muted-foreground">
              Visão estratégica completa com insights de IA para tomada de decisão
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={selectedPeriod === '7d' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod('7d')}
            >
              7 dias
            </Button>
            <Button
              variant={selectedPeriod === '30d' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod('30d')}
            >
              30 dias
            </Button>
            <Button
              variant={selectedPeriod === '90d' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod('90d')}
            >
              90 dias
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Atualizar
            </Button>
          </div>
        </div>

        {/* Key Metrics Overview */}
        {metrics && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="h-6 w-6 text-success" />
                <h3 className="text-lg font-semibold text-foreground">Receita</h3>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-success">
                  {formatCurrency(metrics.revenue.current)}
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm text-success font-medium">
                    +{metrics.revenue.growth}% vs período anterior
                  </span>
                </div>
                <Progress 
                  value={(metrics.revenue.current / metrics.revenue.target) * 100} 
                  className="h-2" 
                />
                <div className="text-xs text-muted-foreground">
                  Meta: {formatCurrency(metrics.revenue.target)}
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Leads</h3>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  {formatNumber(metrics.leads.current)}
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm text-success font-medium">
                    +{metrics.leads.growth}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Qualidade</span>
                  <Badge variant="secondary">{metrics.leads.quality_score}/100</Badge>
                </div>
                <Progress 
                  value={metrics.leads.quality_score} 
                  className="h-2" 
                />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Tráfego</h3>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  {formatNumber(metrics.traffic.current)}
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm text-success font-medium">
                    +{metrics.traffic.growth}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Orgânico</span>
                  <span className="font-medium">{metrics.traffic.organic_percentage}%</span>
                </div>
                <Progress 
                  value={metrics.traffic.organic_percentage} 
                  className="h-2" 
                />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Conversão</h3>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  {metrics.conversion.rate}%
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm text-success font-medium">
                    +{metrics.conversion.improvement}%
                  </span>
                </div>
                <Progress 
                  value={(metrics.conversion.rate / metrics.conversion.target) * 100} 
                  className="h-2" 
                />
                <div className="text-xs text-muted-foreground">
                  Meta: {metrics.conversion.target}%
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Alerts Section */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Alertas Inteligentes
            </h3>
            <Badge variant="outline">{alerts.length} alertas ativos</Badge>
          </div>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="border border-border rounded-lg p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{alert.title}</h4>
                      <Badge variant={getAlertColor(alert.type)}>
                        {alert.type}
                      </Badge>
                      <Badge variant="outline">
                        Prioridade: {alert.priority}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      {alert.description}
                    </p>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="bg-destructive/10 rounded-lg p-3">
                        <span className="text-sm font-medium text-destructive">Impacto:</span>
                        <div className="text-sm text-destructive">{alert.impact}</div>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-3">
                        <span className="text-sm font-medium text-primary">Ação:</span>
                        <div className="text-sm text-primary">{alert.action}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm">
                      <Zap className="h-4 w-4 mr-2" />
                      Resolver
                    </Button>
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* KPIs Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {kpis.map((kpi) => (
            <Card key={kpi.id} className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-foreground">{kpi.name}</h4>
                <Badge variant={getStatusColor(kpi.status)}>
                  {kpi.status}
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-foreground">
                    {kpi.unit === 'BRL' ? formatCurrency(kpi.value) : 
                     `${formatNumber(kpi.value)}${kpi.unit === '%' ? '%' : ''}`}
                  </div>
                  <div className="flex items-center gap-1">
                    {getTrendIcon(kpi.trend)}
                    <span className={`text-sm font-medium ${
                      kpi.trend === 'up' ? 'text-success' : 'text-destructive'
                    }`}>
                      {kpi.change > 0 ? '+' : ''}{kpi.change}%
                    </span>
                  </div>
                </div>
                
                <Progress 
                  value={Math.min((kpi.value / kpi.target) * 100, 100)} 
                  className="h-2" 
                />
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Meta: {kpi.unit === 'BRL' ? formatCurrency(kpi.target) : kpi.target}</span>
                  <span>{Math.round((kpi.value / kpi.target) * 100)}%</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* ROI Section */}
        {metrics && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Retorno sobre Investimento (ROI)
            </h3>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="bg-success/10 rounded-lg p-4">
                <div className="text-sm font-medium text-success mb-1">ROI SEO</div>
                <div className="text-2xl font-bold text-success">{metrics.roi.seo}%</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="text-sm font-medium text-primary mb-1">ROI Marketing</div>
                <div className="text-2xl font-bold text-primary">{metrics.roi.marketing}%</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="text-sm font-medium text-muted-foreground mb-1">ROI Conteúdo</div>
                <div className="text-2xl font-bold text-foreground">{metrics.roi.content}%</div>
              </div>
              <div className="bg-gradient-to-r from-primary/20 to-success/20 rounded-lg p-4">
                <div className="text-sm font-medium text-foreground mb-1">ROI Geral</div>
                <div className="text-2xl font-bold text-foreground">{metrics.roi.overall}%</div>
              </div>
            </div>
          </Card>
        )}

        {/* Forecasts */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Previsões IA - Revenue
          </h3>
          <div className="space-y-4">
            {forecasts.map((forecast, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{forecast.period}</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{forecast.confidence}% confiança</Badge>
                    <div className="text-lg font-bold text-success">
                      {formatCurrency(forecast.revenue)}
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Fatores de Influência:</p>
                  <div className="flex flex-wrap gap-2">
                    {forecast.factors.map((factor, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {factor}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Progress value={forecast.confidence} className="h-2 mt-3" />
              </div>
            ))}
          </div>
        </Card>

        {/* Hidden SEO Data */}
        <div className="sr-only" data-seo-insights="executive-dashboard">
          <div data-dashboard-category="executive-analytics">
            <span data-metric="executive-kpi-tracking">Dashboard executivo com KPIs estratégicos</span>
            <span data-metric="ai-powered-insights">Insights executivos baseados em IA</span>
          </div>
          <div data-dashboard-category="business-intelligence">
            <span data-metric="revenue-forecasting">Previsão de receita com inteligência artificial</span>
            <span data-metric="performance-optimization">Otimização de performance empresarial</span>
          </div>
        </div>
      </div>

      {/* Executive Dashboard Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Dashboard Executivo LEGAL TechCo",
            "description": "Dashboard executivo completo com métricas de performance, KPIs e insights de IA para tomada de decisão estratégica",
            "provider": {
              "@type": "Organization",
              "name": "LEGAL TechCo"
            },
            "about": {
              "@type": "Service",
              "name": "Business Intelligence Dashboard",
              "serviceType": "Executive Analytics"
            }
          })
        }}
      />
    </div>
  );
};

export default ExecutiveDashboard;