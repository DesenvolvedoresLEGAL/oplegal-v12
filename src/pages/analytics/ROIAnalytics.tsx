import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown,
  DollarSign, 
  Target, 
  BarChart3,
  PieChart,
  Calculator,
  Brain,
  Zap,
  Clock,
  Users,
  Globe,
  RefreshCw,
  Download,
  Settings,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Activity,
  Sparkles
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';

interface ROIMetrics {
  seo: {
    investment: number;
    revenue: number;
    roi_percentage: number;
    organic_traffic_value: number;
    keyword_ranking_value: number;
    conversion_value: number;
    period: string;
  };
  content_marketing: {
    investment: number;
    revenue: number;
    roi_percentage: number;
    leads_generated: number;
    engagement_value: number;
    brand_awareness_value: number;
  };
  paid_advertising: {
    investment: number;
    revenue: number;
    roi_percentage: number;
    cpa: number;
    ltv: number;
    roas: number;
  };
  overall: {
    total_investment: number;
    total_revenue: number;
    overall_roi: number;
    profit_margin: number;
    payback_period: number;
  };
}

interface ROIBreakdown {
  id: string;
  category: string;
  subcategory: string;
  investment: number;
  revenue: number;
  roi: number;
  attribution: 'direct' | 'assisted' | 'indirect';
  time_to_value: number;
  confidence: number;
  trend: 'up' | 'down' | 'stable';
}

interface ROIForecast {
  period: string;
  predicted_investment: number;
  predicted_revenue: number;
  predicted_roi: number;
  confidence: number;
  factors: string[];
  scenarios: {
    optimistic: { roi: number; probability: number };
    realistic: { roi: number; probability: number };
    pessimistic: { roi: number; probability: number };
  };
}

interface Attribution {
  channel: string;
  touchpoints: number;
  first_touch: number;
  last_touch: number;
  linear: number;
  time_decay: number;
  position_based: number;
  ai_attribution: number;
}

const ROIAnalytics: React.FC = () => {
  const [metrics, setMetrics] = useState<ROIMetrics | null>(null);
  const [breakdown, setBreakdown] = useState<ROIBreakdown[]>([]);
  const [forecasts, setForecasts] = useState<ROIForecast[]>([]);
  const [attribution, setAttribution] = useState<Attribution[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedView, setSelectedView] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateMetrics = (): ROIMetrics => ({
      seo: {
        investment: 45000,
        revenue: 234000,
        roi_percentage: 420,
        organic_traffic_value: 89000,
        keyword_ranking_value: 67000,
        conversion_value: 78000,
        period: selectedPeriod
      },
      content_marketing: {
        investment: 32000,
        revenue: 145000,
        roi_percentage: 353,
        leads_generated: 567,
        engagement_value: 45000,
        brand_awareness_value: 23000
      },
      paid_advertising: {
        investment: 78000,
        revenue: 289000,
        roi_percentage: 270,
        cpa: 245,
        ltv: 4500,
        roas: 3.7
      },
      overall: {
        total_investment: 155000,
        total_revenue: 668000,
        overall_roi: 331,
        profit_margin: 76.8,
        payback_period: 3.2
      }
    });

    const generateBreakdown = (): ROIBreakdown[] => [
      {
        id: 'seo-organic',
        category: 'SEO',
        subcategory: 'Tráfego Orgânico',
        investment: 15000,
        revenue: 89000,
        roi: 493,
        attribution: 'direct',
        time_to_value: 90,
        confidence: 94,
        trend: 'up'
      },
      {
        id: 'seo-rankings',
        category: 'SEO',
        subcategory: 'Rankings Keywords',
        investment: 20000,
        revenue: 67000,
        roi: 235,
        attribution: 'assisted',
        time_to_value: 120,
        confidence: 87,
        trend: 'up'
      },
      {
        id: 'content-blog',
        category: 'Content Marketing',
        subcategory: 'Blog/Artigos',
        investment: 18000,
        revenue: 78000,
        roi: 333,
        attribution: 'indirect',
        time_to_value: 60,
        confidence: 91,
        trend: 'up'
      },
      {
        id: 'content-social',
        category: 'Content Marketing',
        subcategory: 'Social Media',
        investment: 14000,
        revenue: 67000,
        roi: 379,
        attribution: 'assisted',
        time_to_value: 45,
        confidence: 83,
        trend: 'stable'
      },
      {
        id: 'paid-google',
        category: 'Paid Advertising',
        subcategory: 'Google Ads',
        investment: 45000,
        revenue: 178000,
        roi: 296,
        attribution: 'direct',
        time_to_value: 7,
        confidence: 96,
        trend: 'up'
      },
      {
        id: 'paid-linkedin',
        category: 'Paid Advertising',
        subcategory: 'LinkedIn Ads',
        investment: 33000,
        revenue: 111000,
        roi: 236,
        attribution: 'direct',
        time_to_value: 14,
        confidence: 89,
        trend: 'down'
      }
    ];

    const generateForecasts = (): ROIForecast[] => [
      {
        period: 'Próximo Mês',
        predicted_investment: 52000,
        predicted_revenue: 245000,
        predicted_roi: 371,
        confidence: 87,
        factors: ['Sazonalidade positiva', 'Campanhas otimizadas', 'Novos produtos'],
        scenarios: {
          optimistic: { roi: 420, probability: 25 },
          realistic: { roi: 371, probability: 50 },
          pessimistic: { roi: 310, probability: 25 }
        }
      },
      {
        period: 'Próximo Trimestre',
        predicted_investment: 165000,
        predicted_revenue: 789000,
        predicted_roi: 378,
        confidence: 82,
        factors: ['Expansão de mercado', 'Melhorias técnicas', 'Parcerias estratégicas'],
        scenarios: {
          optimistic: { roi: 445, probability: 30 },
          realistic: { roi: 378, probability: 40 },
          pessimistic: { roi: 320, probability: 30 }
        }
      },
      {
        period: 'Próximo Ano',
        predicted_investment: 680000,
        predicted_revenue: 2890000,
        predicted_roi: 325,
        confidence: 75,
        factors: ['Crescimento orgânico', 'IA avançada', 'Mercado internacional'],
        scenarios: {
          optimistic: { roi: 410, probability: 35 },
          realistic: { roi: 325, probability: 35 },
          pessimistic: { roi: 260, probability: 30 }
        }
      }
    ];

    const generateAttribution = (): Attribution[] => [
      {
        channel: 'SEO Orgânico',
        touchpoints: 3.2,
        first_touch: 35,
        last_touch: 28,
        linear: 31,
        time_decay: 33,
        position_based: 32,
        ai_attribution: 36
      },
      {
        channel: 'Google Ads',
        touchpoints: 2.1,
        first_touch: 25,
        last_touch: 35,
        linear: 28,
        time_decay: 30,
        position_based: 29,
        ai_attribution: 27
      },
      {
        channel: 'LinkedIn',
        touchpoints: 1.8,
        first_touch: 18,
        last_touch: 15,
        linear: 17,
        time_decay: 16,
        position_based: 17,
        ai_attribution: 19
      },
      {
        channel: 'Content Marketing',
        touchpoints: 2.7,
        first_touch: 12,
        last_touch: 8,
        linear: 14,
        time_decay: 11,
        position_based: 12,
        ai_attribution: 15
      },
      {
        channel: 'Direct',
        touchpoints: 1.0,
        first_touch: 10,
        last_touch: 14,
        linear: 10,
        time_decay: 10,
        position_based: 10,
        ai_attribution: 3
      }
    ];

    setTimeout(() => {
      setMetrics(generateMetrics());
      setBreakdown(generateBreakdown());
      setForecasts(generateForecasts());
      setAttribution(generateAttribution());
      setIsLoading(false);
    }, 1100);
  }, [selectedPeriod]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-success" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-destructive" />;
      default: return <Activity className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getAttributionColor = (value: number) => {
    if (value >= 30) return 'text-success';
    if (value >= 20) return 'text-primary';
    if (value >= 10) return 'text-foreground';
    return 'text-muted-foreground';
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
          title="ROI Analytics - LEGAL TechCo"
          description="Análise completa de ROI com métricas detalhadas, projeções e atribuição de canais"
          keywords="roi analytics, retorno investimento, métricas roi, análise financeira, performance marketing"
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
        title="ROI Analytics - LEGAL TechCo"
        description="Dashboard completo de análise de ROI com métricas detalhadas, projeções inteligentes e análise de atribuição multi-canal baseada em IA"
        keywords="roi analytics, retorno investimento, métricas roi, análise financeira, performance marketing, atribuição multicanal, roi seo"
      />

      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">ROI Analytics</h1>
            <p className="text-muted-foreground">
              Análise completa de retorno sobre investimento com IA avançada
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

        {/* Overview Cards */}
        {metrics && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-6 w-6 text-success" />
                <h3 className="text-lg font-semibold text-foreground">ROI SEO</h3>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-success">
                  {metrics.seo.roi_percentage}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Investimento: {formatCurrency(metrics.seo.investment)}
                </div>
                <div className="text-sm text-success">
                  Receita: {formatCurrency(metrics.seo.revenue)}
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <PieChart className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">ROI Content</h3>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  {metrics.content_marketing.roi_percentage}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Investimento: {formatCurrency(metrics.content_marketing.investment)}
                </div>
                <div className="text-sm text-success">
                  Receita: {formatCurrency(metrics.content_marketing.revenue)}
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">ROI Paid</h3>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  {metrics.paid_advertising.roi_percentage}%
                </div>
                <div className="text-sm text-muted-foreground">
                  ROAS: {metrics.paid_advertising.roas}x
                </div>
                <div className="text-sm text-success">
                  CPA: {formatCurrency(metrics.paid_advertising.cpa)}
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="h-6 w-6 text-success" />
                <h3 className="text-lg font-semibold text-foreground">ROI Geral</h3>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-success">
                  {metrics.overall.overall_roi}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Payback: {metrics.overall.payback_period} meses
                </div>
                <div className="text-sm text-success">
                  Margem: {metrics.overall.profit_margin}%
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex gap-2 border-b">
          <Button
            variant={selectedView === 'overview' ? 'default' : 'ghost'}
            onClick={() => setSelectedView('overview')}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Overview
          </Button>
          <Button
            variant={selectedView === 'breakdown' ? 'default' : 'ghost'}
            onClick={() => setSelectedView('breakdown')}
          >
            <Calculator className="h-4 w-4 mr-2" />
            Breakdown
          </Button>
          <Button
            variant={selectedView === 'attribution' ? 'default' : 'ghost'}
            onClick={() => setSelectedView('attribution')}
          >
            <Activity className="h-4 w-4 mr-2" />
            Atribuição
          </Button>
          <Button
            variant={selectedView === 'forecast' ? 'default' : 'ghost'}
            onClick={() => setSelectedView('forecast')}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Previsões
          </Button>
        </div>

        {/* Overview Tab */}
        {selectedView === 'overview' && metrics && (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Investimento vs Receita</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Investimento Total</span>
                    <span className="font-bold text-destructive">
                      {formatCurrency(metrics.overall.total_investment)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Receita Total</span>
                    <span className="font-bold text-success">
                      {formatCurrency(metrics.overall.total_revenue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Lucro Líquido</span>
                    <span className="font-bold text-success">
                      {formatCurrency(metrics.overall.total_revenue - metrics.overall.total_investment)}
                    </span>
                  </div>
                  <Progress 
                    value={(metrics.overall.total_revenue / (metrics.overall.total_investment * 2)) * 100} 
                    className="h-3"
                  />
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Performance por Canal</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">SEO</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-success">{metrics.seo.roi_percentage}%</span>
                      <TrendingUp className="h-4 w-4 text-success" />
                    </div>
                  </div>
                  <Progress value={metrics.seo.roi_percentage / 5} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Content Marketing</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">{metrics.content_marketing.roi_percentage}%</span>
                      <TrendingUp className="h-4 w-4 text-success" />
                    </div>
                  </div>
                  <Progress value={metrics.content_marketing.roi_percentage / 5} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Paid Advertising</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground">{metrics.paid_advertising.roi_percentage}%</span>
                      <Activity className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <Progress value={metrics.paid_advertising.roi_percentage / 5} className="h-2" />
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Breakdown Tab */}
        {selectedView === 'breakdown' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Breakdown Detalhado por Canal
            </h3>
            <div className="grid gap-4">
              {breakdown.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-foreground">
                          {item.category} - {item.subcategory}
                        </h4>
                        <Badge variant={item.attribution === 'direct' ? 'default' : 'secondary'}>
                          {item.attribution}
                        </Badge>
                        <Badge variant="outline">{item.confidence}% confiança</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {getTrendIcon(item.trend)}
                      <div className="text-right">
                        <div className="text-2xl font-bold text-success">{item.roi}%</div>
                        <div className="text-xs text-muted-foreground">ROI</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-4 mb-4">
                    <div className="bg-destructive/10 rounded-lg p-3">
                      <div className="text-sm text-destructive font-medium">Investimento</div>
                      <div className="text-lg font-bold text-destructive">
                        {formatCurrency(item.investment)}
                      </div>
                    </div>
                    <div className="bg-success/10 rounded-lg p-3">
                      <div className="text-sm text-success font-medium">Receita</div>
                      <div className="text-lg font-bold text-success">
                        {formatCurrency(item.revenue)}
                      </div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-3">
                      <div className="text-sm text-primary font-medium">Time to Value</div>
                      <div className="text-lg font-bold text-primary">{item.time_to_value} dias</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="text-sm text-muted-foreground font-medium">Lucro</div>
                      <div className="text-lg font-bold text-foreground">
                        {formatCurrency(item.revenue - item.investment)}
                      </div>
                    </div>
                  </div>

                  <Progress value={Math.min(item.roi / 5, 100)} className="h-2" />
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Attribution Tab */}
        {selectedView === 'attribution' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Modelos de Atribuição Multi-Canal
            </h3>
            <Card className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Canal</th>
                      <th className="text-center py-3 px-4">Touchpoints</th>
                      <th className="text-center py-3 px-4">First Touch</th>
                      <th className="text-center py-3 px-4">Last Touch</th>
                      <th className="text-center py-3 px-4">Linear</th>
                      <th className="text-center py-3 px-4">Time Decay</th>
                      <th className="text-center py-3 px-4">Position Based</th>
                      <th className="text-center py-3 px-4 bg-primary/10">
                        <Badge variant="default" className="text-xs">IA Attribution</Badge>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {attribution.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-4 font-medium">{item.channel}</td>
                        <td className="text-center py-3 px-4">{item.touchpoints}</td>
                        <td className="text-center py-3 px-4">
                          <span className={getAttributionColor(item.first_touch)}>
                            {item.first_touch}%
                          </span>
                        </td>
                        <td className="text-center py-3 px-4">
                          <span className={getAttributionColor(item.last_touch)}>
                            {item.last_touch}%
                          </span>
                        </td>
                        <td className="text-center py-3 px-4">
                          <span className={getAttributionColor(item.linear)}>
                            {item.linear}%
                          </span>
                        </td>
                        <td className="text-center py-3 px-4">
                          <span className={getAttributionColor(item.time_decay)}>
                            {item.time_decay}%
                          </span>
                        </td>
                        <td className="text-center py-3 px-4">
                          <span className={getAttributionColor(item.position_based)}>
                            {item.position_based}%
                          </span>
                        </td>
                        <td className="text-center py-3 px-4 bg-primary/5">
                          <span className={`font-bold ${getAttributionColor(item.ai_attribution)}`}>
                            {item.ai_attribution}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">IA Attribution Model</span>
                </div>
                <p className="text-sm text-primary">
                  Nosso modelo de IA considera 47 fatores incluindo timing, sequência, qualidade do touchpoint, 
                  contexto do usuário e padrões históricos para atribuição mais precisa.
                </p>
              </div>
            </Card>
          </div>
        )}

        {/* Forecast Tab */}
        {selectedView === 'forecast' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Previsões de ROI baseadas em IA
            </h3>
            {forecasts.map((forecast, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground text-lg">{forecast.period}</h4>
                      <Badge variant="outline">{forecast.confidence}% confiança</Badge>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-3 mb-4">
                      <div className="bg-destructive/10 rounded-lg p-4">
                        <div className="text-sm text-destructive font-medium">Investimento Previsto</div>
                        <div className="text-xl font-bold text-destructive">
                          {formatCurrency(forecast.predicted_investment)}
                        </div>
                      </div>
                      <div className="bg-success/10 rounded-lg p-4">
                        <div className="text-sm text-success font-medium">Receita Prevista</div>
                        <div className="text-xl font-bold text-success">
                          {formatCurrency(forecast.predicted_revenue)}
                        </div>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="text-sm text-primary font-medium">ROI Previsto</div>
                        <div className="text-xl font-bold text-primary">{forecast.predicted_roi}%</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-foreground mb-2">Cenários de ROI:</h5>
                      <div className="grid gap-2 md:grid-cols-3">
                        <div className="flex justify-between items-center p-2 bg-success/10 rounded">
                          <span className="text-sm text-success">Otimista</span>
                          <span className="font-bold text-success">
                            {forecast.scenarios.optimistic.roi}% ({forecast.scenarios.optimistic.probability}%)
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-primary/10 rounded">
                          <span className="text-sm text-primary">Realista</span>
                          <span className="font-bold text-primary">
                            {forecast.scenarios.realistic.roi}% ({forecast.scenarios.realistic.probability}%)
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                          <span className="text-sm text-muted-foreground">Pessimista</span>
                          <span className="font-bold text-foreground">
                            {forecast.scenarios.pessimistic.roi}% ({forecast.scenarios.pessimistic.probability}%)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-2">Fatores de Influência:</h5>
                      <div className="flex flex-wrap gap-2">
                        {forecast.factors.map((factor, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {factor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <Progress value={forecast.confidence} className="h-2 mb-2" />
                <div className="text-xs text-muted-foreground text-center">
                  Confiança da Previsão: {forecast.confidence}%
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Hidden SEO Data */}
        <div className="sr-only" data-seo-insights="roi-analytics-dashboard">
          <div data-analytics-category="roi-analysis">
            <span data-metric="roi-tracking">Análise completa de ROI multi-canal</span>
            <span data-metric="attribution-modeling">Modelagem de atribuição avançada</span>
          </div>
          <div data-analytics-category="financial-performance">
            <span data-metric="investment-analysis">Análise de investimento em marketing digital</span>
            <span data-metric="revenue-optimization">Otimização de receita baseada em dados</span>
          </div>
          <div data-analytics-category="predictive-analytics">
            <span data-metric="roi-forecasting">Previsão de ROI com inteligência artificial</span>
            <span data-metric="performance-prediction">Predição de performance financeira</span>
          </div>
        </div>
      </div>

      {/* ROI Analytics Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ROI Analytics Dashboard - LEGAL TechCo",
            "description": "Dashboard completo de análise de ROI com métricas detalhadas e previsões baseadas em IA",
            "provider": {
              "@type": "Organization",
              "name": "LEGAL TechCo"
            },
            "about": {
              "@type": "Service",
              "name": "ROI Analytics and Attribution",
              "serviceType": "Marketing Analytics"
            }
          })
        }}
      />
    </div>
  );
};

export default ROIAnalytics;