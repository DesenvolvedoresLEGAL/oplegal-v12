import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown,
  Search, 
  Globe, 
  Target,
  Brain,
  Zap,
  Eye,
  MousePointer,
  Activity,
  BarChart3,
  RefreshCw,
  Download,
  Settings,
  CheckCircle,
  AlertTriangle,
  Clock,
  Users,
  Sparkles
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';

interface SEOMetrics {
  organic_traffic: {
    current: number;
    previous: number;
    growth: number;
    target: number;
  };
  keyword_rankings: {
    top_3: number;
    top_10: number;
    top_100: number;
    total_keywords: number;
    average_position: number;
  };
  technical_seo: {
    core_web_vitals: number;
    mobile_friendly: number;
    page_speed: number;
    crawl_errors: number;
    sitemap_coverage: number;
  };
  content_performance: {
    indexed_pages: number;
    featured_snippets: number;
    rich_results: number;
    click_through_rate: number;
    bounce_rate: number;
  };
  backlinks: {
    total: number;
    referring_domains: number;
    domain_authority: number;
    new_links: number;
    lost_links: number;
  };
}

interface KeywordPerformance {
  keyword: string;
  position: number;
  previous_position: number;
  search_volume: number;
  difficulty: number;
  traffic: number;
  url: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

interface SEOOpportunity {
  id: string;
  type: 'keyword' | 'technical' | 'content' | 'link_building';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
  confidence: number;
  estimated_traffic: number;
  priority: number;
  pages_affected: string[];
  keywords: string[];
}

interface CompetitorInsight {
  competitor: string;
  domain_authority: number;
  organic_keywords: number;
  estimated_traffic: number;
  content_gaps: string[];
  backlink_opportunities: number;
  threat_level: 'high' | 'medium' | 'low';
}

const SEOPerformance: React.FC = () => {
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [topKeywords, setTopKeywords] = useState<KeywordPerformance[]>([]);
  const [opportunities, setOpportunities] = useState<SEOOpportunity[]>([]);
  const [competitors, setCompetitors] = useState<CompetitorInsight[]>([]);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [dateRange, setDateRange] = useState('30d');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateMetrics = (): SEOMetrics => ({
      organic_traffic: {
        current: 34580,
        previous: 28940,
        growth: 19.5,
        target: 50000
      },
      keyword_rankings: {
        top_3: 47,
        top_10: 156,
        top_100: 892,
        total_keywords: 2340,
        average_position: 18.7
      },
      technical_seo: {
        core_web_vitals: 89,
        mobile_friendly: 96,
        page_speed: 87,
        crawl_errors: 3,
        sitemap_coverage: 94
      },
      content_performance: {
        indexed_pages: 247,
        featured_snippets: 12,
        rich_results: 34,
        click_through_rate: 5.2,
        bounce_rate: 34.7
      },
      backlinks: {
        total: 1247,
        referring_domains: 189,
        domain_authority: 67,
        new_links: 23,
        lost_links: 5
      }
    });

    const generateKeywords = (): KeywordPerformance[] => [
      {
        keyword: 'automação empresarial',
        position: 3,
        previous_position: 5,
        search_volume: 2400,
        difficulty: 45,
        traffic: 1234,
        url: '/produtos/galaxia',
        trend: 'up',
        change: 2
      },
      {
        keyword: 'gestão de eventos',
        position: 2,
        previous_position: 2,
        search_volume: 1800,
        difficulty: 38,
        traffic: 890,
        url: '/smart-events',
        trend: 'stable',
        change: 0
      },
      {
        keyword: 'inteligência artificial negócios',
        position: 7,
        previous_position: 12,
        search_volume: 3200,
        difficulty: 62,
        traffic: 567,
        url: '/negocios/ai',
        trend: 'up',
        change: 5
      },
      {
        keyword: 'legal techco',
        position: 1,
        previous_position: 1,
        search_volume: 890,
        difficulty: 15,
        traffic: 456,
        url: '/',
        trend: 'stable',
        change: 0
      },
      {
        keyword: 'smart events tecnologia',
        position: 8,
        previous_position: 6,
        search_volume: 1200,
        difficulty: 41,
        traffic: 234,
        url: '/smart-events',
        trend: 'down',
        change: -2
      }
    ];

    const generateOpportunities = (): SEOOpportunity[] => [
      {
        id: 'featured-snippets',
        type: 'content',
        title: 'Oportunidades Featured Snippets',
        description: '23 keywords em posição 2-5 com potencial para featured snippets',
        impact: 'high',
        effort: 'medium',
        confidence: 87,
        estimated_traffic: 2400,
        priority: 95,
        pages_affected: ['/universo/tectec', '/smart-events', '/produtos'],
        keywords: ['como implementar automação', 'o que é smart events', 'guia gestão eventos']
      },
      {
        id: 'technical-optimization',
        type: 'technical',
        title: 'Otimização Core Web Vitals',
        description: 'Melhoria de LCP e CLS pode aumentar rankings em até 15%',
        impact: 'medium',
        effort: 'low',
        confidence: 92,
        estimated_traffic: 1800,
        priority: 88,
        pages_affected: ['/produtos/galaxia', '/produtos/eventrix'],
        keywords: []
      },
      {
        id: 'content-expansion',
        type: 'content',
        title: 'Expansão de Conteúdo IA',
        description: 'Criar cluster de conteúdo sobre IA empresarial para capturar 12K searches/mês',
        impact: 'high',
        effort: 'high',
        confidence: 79,
        estimated_traffic: 5200,
        priority: 82,
        pages_affected: ['/universo/tectec'],
        keywords: ['ia para empresas', 'automação inteligente', 'machine learning negócios']
      },
      {
        id: 'link-building',
        type: 'link_building',
        title: 'Link Building Setorial',
        description: 'Oportunidades em sites de tecnologia e negócios com DA 50+',
        impact: 'medium',
        effort: 'medium',
        confidence: 85,
        estimated_traffic: 1200,
        priority: 75,
        pages_affected: ['domain-wide'],
        keywords: []
      }
    ];

    const generateCompetitors = (): CompetitorInsight[] => [
      {
        competitor: 'techcompetitor.com',
        domain_authority: 72,
        organic_keywords: 3450,
        estimated_traffic: 89000,
        content_gaps: ['IA conversacional', 'Automação RPA', 'Integração sistemas'],
        backlink_opportunities: 23,
        threat_level: 'high'
      },
      {
        competitor: 'eventsolution.com',
        domain_authority: 58,
        organic_keywords: 1890,
        estimated_traffic: 45000,
        content_gaps: ['Eventos híbridos', 'Analytics eventos', 'ROI eventos'],
        backlink_opportunities: 15,
        threat_level: 'medium'
      },
      {
        competitor: 'businessautomation.com',
        domain_authority: 61,
        organic_keywords: 2340,
        estimated_traffic: 67000,
        content_gaps: ['Workflow automation', 'Process mining', 'Digital transformation'],
        backlink_opportunities: 18,
        threat_level: 'medium'
      }
    ];

    setTimeout(() => {
      setMetrics(generateMetrics());
      setTopKeywords(generateKeywords());
      setOpportunities(generateOpportunities());
      setCompetitors(generateCompetitors());
      setIsLoading(false);
    }, 1200);
  }, [dateRange]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-success" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-destructive" />;
      default: return <Activity className="h-4 w-4 text-muted-foreground" />;
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

  const getThreatColor = (level: string) => {
    switch (level) {
      case 'high': return 'destructive';
      case 'medium': return 'destructive';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('pt-BR').format(value);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead 
          title="Performance SEO - LEGAL TechCo"
          description="Dashboard completo de performance SEO com métricas, rankings, oportunidades e análise competitiva"
          keywords="performance seo, rankings google, análise seo, métricas orgânicas, otimização seo"
        />
        <div className="container mx-auto p-6">
          <div className="animate-pulse space-y-6">
            {[...Array(8)].map((_, i) => (
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
        title="Performance SEO - LEGAL TechCo"
        description="Dashboard completo de performance SEO com métricas detalhadas, rankings de palavras-chave, oportunidades de otimização e análise competitiva baseada em IA"
        keywords="performance seo, rankings google, análise seo, métricas orgânicas, otimização seo, dashboard seo, monitoramento seo"
      />

      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Performance SEO</h1>
            <p className="text-muted-foreground">
              Dashboard completo com métricas, oportunidades e análise competitiva
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={dateRange === '7d' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setDateRange('7d')}
            >
              7 dias
            </Button>
            <Button
              variant={dateRange === '30d' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setDateRange('30d')}
            >
              30 dias
            </Button>
            <Button
              variant={dateRange === '90d' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setDateRange('90d')}
            >
              90 dias
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Relatório
            </Button>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Atualizar
            </Button>
          </div>
        </div>

        {/* Key SEO Metrics */}
        {metrics && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Tráfego Orgânico</h3>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  {formatNumber(metrics.organic_traffic.current)}
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm text-success font-medium">
                    +{metrics.organic_traffic.growth}%
                  </span>
                </div>
                <Progress 
                  value={(metrics.organic_traffic.current / metrics.organic_traffic.target) * 100} 
                  className="h-2" 
                />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Search className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Rankings</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Top 3</span>
                  <span className="font-bold text-success">{metrics.keyword_rankings.top_3}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Top 10</span>
                  <span className="font-bold text-primary">{metrics.keyword_rankings.top_10}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Top 100</span>
                  <span className="font-bold text-foreground">{metrics.keyword_rankings.top_100}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Posição média: {metrics.keyword_rankings.average_position}
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Core Web Vitals</h3>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-success">
                  {metrics.technical_seo.core_web_vitals}%
                </div>
                <Progress value={metrics.technical_seo.core_web_vitals} className="h-2" />
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-muted-foreground">Mobile: {metrics.technical_seo.mobile_friendly}%</div>
                  <div className="text-muted-foreground">Speed: {metrics.technical_seo.page_speed}%</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Visibilidade</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Featured Snippets</span>
                  <span className="font-bold text-success">{metrics.content_performance.featured_snippets}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Rich Results</span>
                  <span className="font-bold text-primary">{metrics.content_performance.rich_results}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">CTR</span>
                  <span className="font-bold text-foreground">{metrics.content_performance.click_through_rate}%</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Autoridade</h3>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  {metrics.backlinks.domain_authority}
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-muted-foreground">Backlinks</div>
                    <div className="font-bold">{formatNumber(metrics.backlinks.total)}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Domínios</div>
                    <div className="font-bold">{metrics.backlinks.referring_domains}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-success">+{metrics.backlinks.new_links}</span>
                  <span className="text-destructive">-{metrics.backlinks.lost_links}</span>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 border-b">
          <Button
            variant={selectedTab === 'overview' ? 'default' : 'ghost'}
            onClick={() => setSelectedTab('overview')}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Overview
          </Button>
          <Button
            variant={selectedTab === 'keywords' ? 'default' : 'ghost'}
            onClick={() => setSelectedTab('keywords')}
          >
            <Search className="h-4 w-4 mr-2" />
            Keywords
          </Button>
          <Button
            variant={selectedTab === 'opportunities' ? 'default' : 'ghost'}
            onClick={() => setSelectedTab('opportunities')}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Oportunidades
          </Button>
          <Button
            variant={selectedTab === 'competitors' ? 'default' : 'ghost'}
            onClick={() => setSelectedTab('competitors')}
          >
            <Users className="h-4 w-4 mr-2" />
            Competidores
          </Button>
        </div>

        {selectedTab === 'overview' && (
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Distribuição de Rankings</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Posição 1-3</span>
                    <span className="font-medium">{metrics?.keyword_rankings.top_3}</span>
                  </div>
                  <Progress value={(metrics?.keyword_rankings.top_3 || 0) / (metrics?.keyword_rankings.total_keywords || 1) * 100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Posição 4-10</span>
                    <span className="font-medium">{(metrics?.keyword_rankings.top_10 || 0) - (metrics?.keyword_rankings.top_3 || 0)}</span>
                  </div>
                  <Progress value={((metrics?.keyword_rankings.top_10 || 0) - (metrics?.keyword_rankings.top_3 || 0)) / (metrics?.keyword_rankings.total_keywords || 1) * 100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Posição 11-100</span>
                    <span className="font-medium">{(metrics?.keyword_rankings.top_100 || 0) - (metrics?.keyword_rankings.top_10 || 0)}</span>
                  </div>
                  <Progress value={((metrics?.keyword_rankings.top_100 || 0) - (metrics?.keyword_rankings.top_10 || 0)) / (metrics?.keyword_rankings.total_keywords || 1) * 100} className="h-2" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Performance Técnica</h3>
              <div className="space-y-4">
                {metrics && Object.entries(metrics.technical_seo).map(([key, value]) => {
                  if (key === 'crawl_errors') return null;
                  const label = {
                    core_web_vitals: 'Core Web Vitals',
                    mobile_friendly: 'Mobile Friendly',
                    page_speed: 'Page Speed',
                    sitemap_coverage: 'Sitemap Coverage'
                  }[key] || key;
                  
                  return (
                    <div key={key}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{label}</span>
                        <span className="font-medium">{value}%</span>
                      </div>
                      <Progress value={typeof value === 'number' ? value : 0} className="h-2" />
                    </div>
                  );
                })}
                
                {metrics.technical_seo.crawl_errors > 0 && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                      <span className="text-sm font-medium text-destructive">
                        {metrics.technical_seo.crawl_errors} erros de crawl detectados
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        )}

        {selectedTab === 'keywords' && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Top Keywords Performance</h3>
            <div className="space-y-4">
              {topKeywords.map((keyword, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{keyword.keyword}</h4>
                      <div className="text-sm text-muted-foreground">{keyword.url}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">#{keyword.position}</div>
                        <div className="text-xs text-muted-foreground">Posição</div>
                      </div>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(keyword.trend)}
                        <span className={`text-sm font-medium ${
                          keyword.trend === 'up' ? 'text-success' : 
                          keyword.trend === 'down' ? 'text-destructive' : 
                          'text-muted-foreground'
                        }`}>
                          {keyword.change !== 0 && (keyword.change > 0 ? '+' : '')}{keyword.change}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Volume:</span>
                      <div className="font-medium">{formatNumber(keyword.search_volume)}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Dificuldade:</span>
                      <div className="font-medium">{keyword.difficulty}%</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Tráfego:</span>
                      <div className="font-medium text-success">{formatNumber(keyword.traffic)}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Posição Anterior:</span>
                      <div className="font-medium">#{keyword.previous_position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {selectedTab === 'opportunities' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Oportunidades de SEO baseadas em IA
            </h3>
            {opportunities.map((opportunity) => (
              <Card key={opportunity.id} className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{opportunity.title}</h4>
                      <Badge variant={getImpactColor(opportunity.impact)}>
                        {opportunity.impact} impacto
                      </Badge>
                      <Badge variant="outline">
                        {opportunity.confidence}% confiança
                      </Badge>
                      <Badge variant="secondary">
                        Prioridade: {opportunity.priority}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      {opportunity.description}
                    </p>
                    
                    <div className="grid gap-4 md:grid-cols-3 mb-4">
                      <div className="bg-success/10 rounded-lg p-3">
                        <div className="text-sm text-success font-medium">Tráfego Estimado</div>
                        <div className="text-lg font-bold text-success">
                          +{formatNumber(opportunity.estimated_traffic)}
                        </div>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-3">
                        <div className="text-sm text-primary font-medium">Esforço Necessário</div>
                        <div className="text-lg font-bold text-primary">
                          {opportunity.effort}
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <div className="text-sm text-muted-foreground font-medium">Páginas Afetadas</div>
                        <div className="text-lg font-bold text-foreground">
                          {opportunity.pages_affected.length}
                        </div>
                      </div>
                    </div>

                    {opportunity.keywords.length > 0 && (
                      <div className="mb-3">
                        <p className="text-sm font-medium text-foreground mb-2">Keywords Alvo:</p>
                        <div className="flex flex-wrap gap-2">
                          {opportunity.keywords.map((keyword, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Páginas Afetadas:</p>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.pages_affected.map((page, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {page}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button size="sm">
                      <Zap className="h-4 w-4 mr-2" />
                      Implementar
                    </Button>
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {selectedTab === 'competitors' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Análise Competitiva</h3>
            {competitors.map((competitor, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <h4 className="font-semibold text-foreground text-lg">{competitor.competitor}</h4>
                      <Badge variant={getThreatColor(competitor.threat_level)}>
                        Ameaça {competitor.threat_level}
                      </Badge>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{competitor.domain_authority}</div>
                        <div className="text-xs text-muted-foreground">Domain Authority</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">{formatNumber(competitor.organic_keywords)}</div>
                        <div className="text-xs text-muted-foreground">Keywords Orgânicas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-success">{formatNumber(competitor.estimated_traffic)}</div>
                        <div className="text-xs text-muted-foreground">Tráfego Estimado</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{competitor.backlink_opportunities}</div>
                        <div className="text-xs text-muted-foreground">Oportunidades Link</div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Content Gaps Identificados:</p>
                      <div className="flex flex-wrap gap-2">
                        {competitor.content_gaps.map((gap, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {gap}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button size="sm">
                      Analisar Estratégia
                    </Button>
                    <Button variant="outline" size="sm">
                      Ver Keywords
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Hidden SEO Data */}
        <div className="sr-only" data-seo-insights="seo-performance-dashboard">
          <div data-performance-category="organic-search-optimization">
            <span data-metric="seo-performance-tracking">Monitoramento completo de performance SEO</span>
            <span data-metric="keyword-ranking-analysis">Análise detalhada de rankings de palavras-chave</span>
          </div>
          <div data-performance-category="technical-seo">
            <span data-metric="core-web-vitals-monitoring">Monitoramento de Core Web Vitals</span>
            <span data-metric="technical-optimization">Otimização técnica de SEO</span>
          </div>
          <div data-performance-category="competitive-analysis">
            <span data-metric="competitor-seo-analysis">Análise competitiva de SEO</span>
            <span data-metric="market-opportunity-identification">Identificação de oportunidades de mercado</span>
          </div>
        </div>
      </div>

      {/* SEO Performance Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Performance SEO Dashboard - LEGAL TechCo",
            "description": "Dashboard completo de performance SEO com métricas detalhadas, rankings e análise competitiva",
            "provider": {
              "@type": "Organization",
              "name": "LEGAL TechCo"
            },
            "about": {
              "@type": "Service",
              "name": "SEO Performance Analysis",
              "serviceType": "Search Engine Optimization"
            }
          })
        }}
      />
    </div>
  );
};

export default SEOPerformance;