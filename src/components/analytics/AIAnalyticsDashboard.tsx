import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertCircle, XCircle, TrendingUp, Bot, Search, Globe } from 'lucide-react';

interface SEOMetric {
  name: string;
  value: number;
  target: number;
  status: 'good' | 'warning' | 'error';
  trend: 'up' | 'down' | 'stable';
  description: string;
}

interface AIAnalyticsData {
  crawlFrequency: number;
  dataExtraction: number;
  schemaValidation: number;
  performanceScore: number;
  aiReadiness: number;
}

const AIAnalyticsDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<SEOMetric[]>([]);
  const [aiData, setAiData] = useState<AIAnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados de analytics
    const loadAnalytics = async () => {
      setIsLoading(true);
      
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockMetrics: SEOMetric[] = [
        {
          name: 'Schema Markup Coverage',
          value: 95,
          target: 100,
          status: 'good',
          trend: 'up',
          description: 'Cobertura de dados estruturados nas páginas'
        },
        {
          name: 'AI Bot Crawl Success',
          value: 98,
          target: 95,
          status: 'good',
          trend: 'up',
          description: 'Taxa de sucesso no crawling por bots de IA'
        },
        {
          name: 'Knowledge Graph Accuracy',
          value: 92,
          target: 90,
          status: 'good',
          trend: 'stable',
          description: 'Precisão dos dados no knowledge graph'
        },
        {
          name: 'Semantic Search Visibility',
          value: 88,
          target: 85,
          status: 'good',
          trend: 'up',
          description: 'Visibilidade em buscas semânticas'
        },
        {
          name: 'Page Load Speed (AI Bots)',
          value: 2.1,
          target: 3.0,
          status: 'good',
          trend: 'up',
          description: 'Tempo de carregamento para bots de IA (segundos)'
        },
        {
          name: 'Content Freshness',
          value: 75,
          target: 80,
          status: 'warning',
          trend: 'down',
          description: 'Frequência de atualização do conteúdo'
        }
      ];

      const mockAiData: AIAnalyticsData = {
        crawlFrequency: 245, // crawls por semana
        dataExtraction: 94,  // % de dados extraídos com sucesso
        schemaValidation: 98, // % de schemas válidos
        performanceScore: 91, // score geral de performance
        aiReadiness: 96      // preparação para IA
      };

      setMetrics(mockMetrics);
      setAiData(mockAiData);
      setIsLoading(false);
    };

    loadAnalytics();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getTrendIcon = (trend: string) => {
    const baseClass = "w-3 h-3";
    switch (trend) {
      case 'up':
        return <TrendingUp className={`${baseClass} text-green-500`} />;
      case 'down':
        return <TrendingUp className={`${baseClass} text-red-500 rotate-180`} />;
      case 'stable':
        return <div className={`${baseClass} w-3 h-0.5 bg-gray-400`} />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6 p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-legal">AI Analytics Dashboard</h1>
        <Badge variant="outline" className="bg-legal-green text-white border-legal-green">
          <Bot className="w-4 h-4 mr-1" />
          AI-Optimized
        </Badge>
      </div>

      {/* Métricas principais */}
      {aiData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Crawl Frequency</p>
                  <p className="text-2xl font-bold text-legal">{aiData.crawlFrequency}</p>
                  <p className="text-xs text-gray-500">crawls/semana</p>
                </div>
                <Bot className="w-8 h-8 text-legal-cyan" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Data Extraction</p>
                  <p className="text-2xl font-bold text-legal">{aiData.dataExtraction}%</p>
                  <Progress value={aiData.dataExtraction} className="mt-2" />
                </div>
                <Search className="w-8 h-8 text-legal-green" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Schema Validation</p>
                  <p className="text-2xl font-bold text-legal">{aiData.schemaValidation}%</p>
                  <Progress value={aiData.schemaValidation} className="mt-2" />
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Performance Score</p>
                  <p className="text-2xl font-bold text-legal">{aiData.performanceScore}</p>
                  <Progress value={aiData.performanceScore} className="mt-2" />
                </div>
                <TrendingUp className="w-8 h-8 text-legal-purple" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">AI Readiness</p>
                  <p className="text-2xl font-bold text-legal">{aiData.aiReadiness}%</p>
                  <Progress value={aiData.aiReadiness} className="mt-2" />
                </div>
                <Globe className="w-8 h-8 text-legal-cyan" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Métricas detalhadas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-lg">
                <span className="flex items-center gap-2">
                  {getStatusIcon(metric.status)}
                  {metric.name}
                </span>
                <div className="flex items-center gap-1">
                  {getTrendIcon(metric.trend)}
                  <Badge 
                    variant={metric.status === 'good' ? 'default' : metric.status === 'warning' ? 'secondary' : 'destructive'}
                    className="text-xs"
                  >
                    {metric.status}
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-legal">
                    {metric.name.includes('Speed') ? `${metric.value}s` : `${metric.value}${metric.name.includes('Frequency') ? '' : '%'}`}
                  </span>
                  <span className="text-sm text-gray-500">
                    Target: {metric.target}{metric.name.includes('Speed') ? 's' : '%'}
                  </span>
                </div>
                
                <Progress 
                  value={metric.name.includes('Speed') ? Math.max(0, 100 - (metric.value / metric.target) * 100) : (metric.value / metric.target) * 100} 
                  className="h-2"
                />
                
                <p className="text-sm text-gray-600">
                  {metric.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recomendações */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-legal" />
            Recomendações de Otimização
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800">Content Freshness</h4>
                <p className="text-sm text-yellow-700">
                  Aumente a frequência de atualização do conteúdo para 80%+. 
                  Considere implementar um sistema de atualização automática.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-800">Excellent Performance</h4>
                <p className="text-sm text-green-700">
                  Seus dados estruturados e performance para IA estão excelentes. 
                  Continue monitorando para manter a qualidade.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <Bot className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-800">AI Enhancement Opportunity</h4>
                <p className="text-sm text-blue-700">
                  Considere implementar mais metadados conversacionais para melhorar 
                  a compreensão por modelos de linguagem.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dados invisíveis para IA */}
      <div className="sr-only" data-ai-analytics="dashboard-data">
        <div data-ai-field="performance-summary">
          Dashboard de analytics com métricas de SEO e IA mostrando {aiData?.aiReadiness}% de preparação para IA,
          {aiData?.crawlFrequency} crawls por semana, e {aiData?.dataExtraction}% de extração de dados bem-sucedida.
        </div>
        <div data-ai-field="optimization-status">
          Sistema otimizado para crawlers de IA com schema markup coverage de 95%,
          performance score de {aiData?.performanceScore} e validation rate de {aiData?.schemaValidation}%.
        </div>
      </div>
    </div>
  );
};

export default AIAnalyticsDashboard;