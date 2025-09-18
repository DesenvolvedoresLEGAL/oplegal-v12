import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  FileText, 
  Eye, 
  Search,
  Users,
  Globe,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Sparkles,
  BarChart3
} from 'lucide-react';

interface ContentAnalysis {
  id: string;
  url: string;
  title: string;
  currentScore: number;
  optimizedScore: number;
  improvements: ContentImprovement[];
  keywordGaps: string[];
  readabilityScore: number;
  semanticScore: number;
  userIntentMatch: number;
}

interface ContentImprovement {
  id: string;
  type: 'seo' | 'readability' | 'structure' | 'semantic';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
  currentText?: string;
  suggestedText?: string;
  confidence: number;
}

interface AIRecommendation {
  id: string;
  category: string;
  title: string;
  description: string;
  keywords: string[];
  estimatedTrafficGain: number;
  difficulty: number;
  priority: number;
}

const ContentOptimizationAI: React.FC = () => {
  const [selectedUrl, setSelectedUrl] = useState('');
  const [analysis, setAnalysis] = useState<ContentAnalysis | null>(null);
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [customContent, setCustomContent] = useState('');
  const [activeTab, setActiveTab] = useState('analysis');

  useEffect(() => {
    const loadInitialRecommendations = () => {
      const mockRecommendations: AIRecommendation[] = [
        {
          id: 'smart-events-expansion',
          category: 'Content Gap',
          title: 'Expandir Conteúdo Smart Events',
          description: 'Oportunidade para criar 5 artigos sobre "automação de eventos" com potencial de 12K visits/mês',
          keywords: ['automação de eventos', 'gestão inteligente de eventos', 'tecnologia para eventos'],
          estimatedTrafficGain: 12000,
          difficulty: 35,
          priority: 95
        },
        {
          id: 'ai-integration-content',
          category: 'Trending Topic',
          title: 'Conteúdo sobre Integração de IA',
          description: 'Criar série sobre "IA aplicada a negócios" baseada no crescimento de 340% em buscas',
          keywords: ['ia para empresas', 'inteligencia artificial negocios', 'automacao com ia'],
          estimatedTrafficGain: 8500,
          difficulty: 42,
          priority: 87
        },
        {
          id: 'b2b-case-studies',
          category: 'Social Proof',
          title: 'Cases de Sucesso B2B',
          description: 'Desenvolver cases detalhados com ROI mensurado para aumentar conversão em 25%',
          keywords: ['case de sucesso tecnologia', 'roi automação empresarial', 'resultados legal techco'],
          estimatedTrafficGain: 4200,
          difficulty: 28,
          priority: 82
        }
      ];
      setRecommendations(mockRecommendations);
    };

    loadInitialRecommendations();
  }, []);

  const analyzeContent = async () => {
    if (!selectedUrl && !customContent) return;

    setIsAnalyzing(true);
    
    // Simular análise IA
    setTimeout(() => {
      const mockAnalysis: ContentAnalysis = {
        id: 'analysis-1',
        url: selectedUrl || 'Conteúdo Personalizado',
        title: selectedUrl ? 'Página Analisada' : 'Análise de Conteúdo Customizado',
        currentScore: 68,
        optimizedScore: 89,
        readabilityScore: 72,
        semanticScore: 84,
        userIntentMatch: 76,
        keywordGaps: [
          'automação empresarial',
          'soluções inteligentes',
          'transformação digital',
          'eficiência operacional'
        ],
        improvements: [
          {
            id: 'title-optimization',
            type: 'seo',
            title: 'Otimizar Title Tag',
            description: 'Title atual não contém keyword principal e excede 60 caracteres',
            impact: 'high',
            effort: 'low',
            currentText: 'LEGAL - Empresa de Tecnologia',
            suggestedText: 'LEGAL TechCo: Soluções de Automação Empresarial | IA & Smart Events',
            confidence: 94
          },
          {
            id: 'semantic-enhancement',
            type: 'semantic',
            title: 'Melhorar Semântica do Conteúdo',
            description: 'Adicionar entidades relacionadas para melhor compreensão da IA',
            impact: 'medium',
            effort: 'medium',
            confidence: 87
          },
          {
            id: 'readability-improvement',
            type: 'readability',
            title: 'Simplificar Linguagem Técnica',
            description: 'Reduzir complexidade para ampliar público-alvo',
            impact: 'medium',
            effort: 'low',
            confidence: 78
          },
          {
            id: 'structure-optimization',
            type: 'structure',
            title: 'Reorganizar Estrutura H1-H6',
            description: 'Hierarquia de headings não segue ordem lógica para SEO',
            impact: 'high',
            effort: 'medium',
            confidence: 91
          }
        ]
      };

      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'seo': return <Search className="h-4 w-4" />;
      case 'readability': return <Eye className="h-4 w-4" />;
      case 'structure': return <FileText className="h-4 w-4" />;
      case 'semantic': return <Brain className="h-4 w-4" />;
      default: return <Target className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 30) return 'text-success';
    if (difficulty <= 60) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Otimização de Conteúdo IA</h2>
          <p className="text-muted-foreground">
            Machine Learning avançado para otimização automática de conteúdo SEO
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={activeTab === 'analysis' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('analysis')}
          >
            <Brain className="h-4 w-4 mr-2" />
            Análise
          </Button>
          <Button
            variant={activeTab === 'recommendations' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('recommendations')}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Recomendações
          </Button>
        </div>
      </div>

      {activeTab === 'analysis' && (
        <>
          {/* Analysis Input */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Análise de Conteúdo</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  URL para Análise
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    className="flex-1 px-3 py-2 border border-input bg-background rounded-md"
                    placeholder="https://legal.eng.br/sua-pagina"
                    value={selectedUrl}
                    onChange={(e) => setSelectedUrl(e.target.value)}
                  />
                  <Button onClick={analyzeContent} disabled={isAnalyzing}>
                    {isAnalyzing ? (
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Brain className="h-4 w-4 mr-2" />
                    )}
                    Analisar
                  </Button>
                </div>
              </div>

              <div className="text-center text-muted-foreground">ou</div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Conteúdo Personalizado
                </label>
                <Textarea
                  placeholder="Cole aqui o conteúdo que deseja otimizar..."
                  value={customContent}
                  onChange={(e) => setCustomContent(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>
            </div>
          </Card>

          {/* Analysis Results */}
          {analysis && (
            <div className="space-y-6">
              {/* Score Overview */}
              <div className="grid gap-4 md:grid-cols-4">
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Score Atual</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {analysis.currentScore}/100
                  </div>
                  <Progress value={analysis.currentScore} className="h-2" />
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-success" />
                    <h3 className="font-semibold">Score Otimizado</h3>
                  </div>
                  <div className="text-3xl font-bold text-success mb-2">
                    {analysis.optimizedScore}/100
                  </div>
                  <Progress value={analysis.optimizedScore} className="h-2" />
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Legibilidade</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {analysis.readabilityScore}/100
                  </div>
                  <Progress value={analysis.readabilityScore} className="h-2" />
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Semântica</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {analysis.semanticScore}/100
                  </div>
                  <Progress value={analysis.semanticScore} className="h-2" />
                </Card>
              </div>

              {/* Improvements */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Melhorias Recomendadas ({analysis.improvements.length})
                </h3>
                <div className="space-y-4">
                  {analysis.improvements.map((improvement) => (
                    <div key={improvement.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          {getTypeIcon(improvement.type)}
                          <h4 className="font-semibold text-foreground">{improvement.title}</h4>
                          <Badge variant={getImpactColor(improvement.impact)}>
                            {improvement.impact}
                          </Badge>
                          <Badge variant="outline">
                            {improvement.confidence}% confiança
                          </Badge>
                        </div>
                        <Button size="sm">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Aplicar
                        </Button>
                      </div>
                      
                      <p className="text-muted-foreground mb-3">
                        {improvement.description}
                      </p>

                      {improvement.currentText && improvement.suggestedText && (
                        <div className="space-y-2">
                          <div className="bg-destructive/10 border-l-4 border-destructive p-3 rounded">
                            <p className="text-sm font-medium text-destructive mb-1">Atual:</p>
                            <p className="text-sm">{improvement.currentText}</p>
                          </div>
                          <div className="bg-success/10 border-l-4 border-success p-3 rounded">
                            <p className="text-sm font-medium text-success mb-1">Sugerido:</p>
                            <p className="text-sm">{improvement.suggestedText}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Keyword Gaps */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  Oportunidades de Keywords
                </h3>
                <div className="grid gap-2 md:grid-cols-2">
                  {analysis.keywordGaps.map((keyword, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-foreground">{keyword}</span>
                      <Badge variant="outline">
                        Potencial Alto
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </>
      )}

      {activeTab === 'recommendations' && (
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Recomendações Estratégicas de IA
            </h3>
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div key={rec.id} className="border border-border rounded-lg p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-foreground">{rec.title}</h4>
                        <Badge variant="outline">{rec.category}</Badge>
                        <Badge 
                          variant={rec.priority >= 90 ? 'destructive' : 
                                  rec.priority >= 80 ? 'secondary' : 'outline'}
                        >
                          Prioridade: {rec.priority}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {rec.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3 mb-4">
                    <div className="bg-success/10 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-success" />
                        <span className="text-sm font-medium text-success">Tráfego Estimado</span>
                      </div>
                      <div className="text-lg font-bold text-success">
                        +{rec.estimatedTrafficGain.toLocaleString()} visits/mês
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Dificuldade</span>
                      </div>
                      <div className={`text-lg font-bold ${getDifficultyColor(rec.difficulty)}`}>
                        {rec.difficulty}/100
                      </div>
                    </div>

                    <div className="bg-primary/10 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Brain className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">IA Score</span>
                      </div>
                      <div className="text-lg font-bold text-primary">
                        {rec.priority}/100
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">Keywords Alvo:</p>
                    <div className="flex flex-wrap gap-2">
                      {rec.keywords.map((keyword, i) => (
                        <Badge key={i} variant="secondary">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm">
                      <Zap className="h-4 w-4 mr-2" />
                      Criar Conteúdo
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Gerar Brief
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Hidden SEO Data */}
      <div className="sr-only" data-seo-insights="content-optimization-ai">
        <div data-optimization-category="ai-content-analysis">
          <span data-metric="machine-learning-seo">Otimização de conteúdo com machine learning avançado</span>
          <span data-metric="semantic-content-optimization">Análise semântica profunda para melhor rankeamento</span>
        </div>
        <div data-optimization-category="automated-improvements">
          <span data-metric="ai-content-recommendations">Recomendações automáticas baseadas em IA</span>
          <span data-metric="content-performance-prediction">Predição de performance de conteúdo</span>
        </div>
      </div>

      {/* Content Optimization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "LEGAL Content Optimization AI",
            "applicationCategory": "SEO Software",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "BRL"
            },
            "featureList": [
              "Análise de conteúdo com IA",
              "Otimização semântica automática", 
              "Recomendações de keywords",
              "Score de otimização em tempo real"
            ],
            "aggregateRating": {
              "@type": "AggregateRating", 
              "ratingValue": "4.9",
              "ratingCount": "200"
            }
          })
        }}
      />
    </div>
  );
};

export default ContentOptimizationAI;