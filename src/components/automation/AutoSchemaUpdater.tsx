import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  CheckCircle, 
  AlertTriangle, 
  RefreshCw, 
  Brain, 
  Zap,
  Search,
  Globe,
  FileText,
  Target,
  TrendingUp,
  Clock,
  Settings,
  Play,
  Pause,
  Eye
} from 'lucide-react';

interface SchemaUpdate {
  id: string;
  type: 'article' | 'product' | 'faq' | 'breadcrumb' | 'organization' | 'website';
  status: 'pending' | 'applied' | 'failed' | 'reviewing';
  priority: 'high' | 'medium' | 'low';
  page: string;
  currentSchema?: string;
  suggestedSchema: string;
  aiReasoning: string;
  confidence: number;
  seoImpact: number;
  lastUpdated: string;
  autoApprove: boolean;
}

interface AutomationRule {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  trigger: string;
  action: string;
  conditions: string[];
  lastTriggered?: string;
  successRate: number;
}

interface SchemaMetrics {
  totalPages: number;
  pagesWithSchema: number;
  coverage: number;
  validationErrors: number;
  avgRichResults: number;
  lastScan: string;
}

const AutoSchemaUpdater: React.FC = () => {
  const [updates, setUpdates] = useState<SchemaUpdate[]>([]);
  const [rules, setRules] = useState<AutomationRule[]>([]);
  const [metrics, setMetrics] = useState<SchemaMetrics | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedTab, setSelectedTab] = useState('updates');

  useEffect(() => {
    const generateUpdates = (): SchemaUpdate[] => [
      {
        id: 'schema-update-1',
        type: 'article',
        status: 'pending',
        priority: 'high',
        page: '/universo/tectec/ai-no-futuro-dos-negocios',
        suggestedSchema: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "IA no Futuro dos Negócios: Tendências 2024",
          "author": {
            "@type": "Organization",
            "name": "LEGAL TechCo"
          },
          "datePublished": "2024-01-15T10:00:00Z",
          "dateModified": "2024-01-15T10:00:00Z",
          "publisher": {
            "@type": "Organization",
            "name": "LEGAL TechCo",
            "logo": {
              "@type": "ImageObject",
              "url": "https://legal.eng.br/logo.png"
            }
          },
          "mainEntityOfPage": "/universo/tectec/ai-no-futuro-dos-negocios"
        }, null, 2),
        aiReasoning: 'Página de artigo sem schema Article detectada. Adição melhoraria rich snippets e CTR em 15-25%',
        confidence: 94,
        seoImpact: 85,
        lastUpdated: '2024-01-15T14:30:00Z',
        autoApprove: false
      },
      {
        id: 'schema-update-2',
        type: 'product',
        status: 'applied',
        priority: 'high',
        page: '/produtos/galaxia',
        currentSchema: '{"@type": "Product", "name": "Galaxia"}',
        suggestedSchema: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Galaxia - Gestão Inteligente de Eventos",
          "description": "Plataforma completa para automatizar e otimizar a gestão de eventos corporativos",
          "brand": {
            "@type": "Brand",
            "name": "LEGAL TechCo"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "LEGAL TechCo"
          },
          "category": "Event Management Software",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "BRL"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127"
          }
        }, null, 2),
        aiReasoning: 'Schema Product expandido com ratings, ofertas e detalhes. Aplicado com sucesso.',
        confidence: 98,
        seoImpact: 92,
        lastUpdated: '2024-01-14T16:20:00Z',
        autoApprove: true
      },
      {
        id: 'schema-update-3',
        type: 'faq',
        status: 'reviewing',
        priority: 'medium',
        page: '/smart-events',
        suggestedSchema: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "O que são Smart Events?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Smart Events são eventos inteligentes que utilizam tecnologia avançada..."
              }
            }
          ]
        }, null, 2),
        aiReasoning: 'Seção FAQ detectada sem schema. Recomendado para rich snippets FAQ.',
        confidence: 87,
        seoImpact: 76,
        lastUpdated: '2024-01-15T12:15:00Z',
        autoApprove: false
      }
    ];

    const generateRules = (): AutomationRule[] => [
      {
        id: 'rule-1',
        name: 'Auto Article Schema',
        description: 'Detecta páginas de blog e aplica schema Article automaticamente',
        enabled: true,
        trigger: 'Nova página em /universo/tectec/',
        action: 'Aplicar Article Schema',
        conditions: [
          'Página contém data de publicação',
          'Página tem estrutura de artigo',
          'Confiança > 90%'
        ],
        lastTriggered: '2024-01-15T10:30:00Z',
        successRate: 96
      },
      {
        id: 'rule-2',
        name: 'Product Schema Enhancement',
        description: 'Monitora páginas de produtos e enriquece schema existente',
        enabled: true,
        trigger: 'Atualização em /produtos/',
        action: 'Enriquecer Product Schema',
        conditions: [
          'Schema Product já existe',
          'Novos dados disponíveis',
          'Impacto SEO > 70%'
        ],
        lastTriggered: '2024-01-14T16:20:00Z',
        successRate: 94
      },
      {
        id: 'rule-3',
        name: 'FAQ Schema Detection',
        description: 'Identifica seções FAQ e sugere schema apropriado',
        enabled: false,
        trigger: 'Detecção de seção FAQ',
        action: 'Sugerir FAQ Schema',
        conditions: [
          'Padrão pergunta-resposta detectado',
          'Mínimo 3 perguntas',
          'Confiança > 80%'
        ],
        successRate: 89
      }
    ];

    const generateMetrics = (): SchemaMetrics => ({
      totalPages: 247,
      pagesWithSchema: 189,
      coverage: 76.5,
      validationErrors: 3,
      avgRichResults: 4.2,
      lastScan: '2024-01-15T14:30:00Z'
    });

    setTimeout(() => {
      setUpdates(generateUpdates());
      setRules(generateRules());
      setMetrics(generateMetrics());
    }, 800);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'applied': return 'secondary';
      case 'pending': return 'default';
      case 'failed': return 'destructive';
      case 'reviewing': return 'outline';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'applied': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'failed': return <AlertTriangle className="h-4 w-4" />;
      case 'reviewing': return <Eye className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      // Simular novas atualizações encontradas
    }, 3000);
  };

  const handleApplyUpdate = (updateId: string) => {
    setUpdates(prev => 
      prev.map(update => 
        update.id === updateId 
          ? { ...update, status: 'applied' as const }
          : update
      )
    );
  };

  const handleToggleRule = (ruleId: string) => {
    setRules(prev =>
      prev.map(rule =>
        rule.id === ruleId
          ? { ...rule, enabled: !rule.enabled }
          : rule
      )
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Auto Schema Updater</h2>
          <p className="text-muted-foreground">
            Automação inteligente para manutenção e otimização de Structured Data
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleScan} disabled={isScanning}>
            {isScanning ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Search className="h-4 w-4 mr-2" />
            )}
            {isScanning ? 'Escaneando...' : 'Escanear Site'}
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configurações
          </Button>
        </div>
      </div>

      {/* Metrics Overview */}
      {metrics && (
        <div className="grid gap-4 md:grid-cols-5">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Total de Páginas</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{metrics.totalPages}</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Code className="h-4 w-4 text-success" />
              <span className="text-sm font-medium">Com Schema</span>
            </div>
            <div className="text-2xl font-bold text-success">{metrics.pagesWithSchema}</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Cobertura</span>
            </div>
            <div className="text-2xl font-bold text-primary">{metrics.coverage}%</div>
            <Progress value={metrics.coverage} className="h-2 mt-2" />
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <span className="text-sm font-medium">Erros</span>
            </div>
            <div className="text-2xl font-bold text-destructive">{metrics.validationErrors}</div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-success" />
              <span className="text-sm font-medium">Rich Results</span>
            </div>
            <div className="text-2xl font-bold text-success">{metrics.avgRichResults}</div>
          </Card>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2">
        <Button
          variant={selectedTab === 'updates' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedTab('updates')}
        >
          <Code className="h-4 w-4 mr-2" />
          Atualizações Pendentes
        </Button>
        <Button
          variant={selectedTab === 'rules' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedTab('rules')}
        >
          <Brain className="h-4 w-4 mr-2" />
          Regras de Automação
        </Button>
      </div>

      {selectedTab === 'updates' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Atualizações de Schema Detectadas</h3>
          {updates.map((update) => (
            <Card key={update.id} className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-foreground">{update.page}</h4>
                        <Badge variant={getStatusColor(update.status)}>
                          {getStatusIcon(update.status)}
                          <span className="ml-1">{update.status}</span>
                        </Badge>
                        <Badge variant="outline">{update.type}</Badge>
                        <Badge variant={update.priority === 'high' ? 'destructive' : 'secondary'}>
                          {update.priority}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* AI Reasoning */}
                  <div className="bg-primary/10 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Análise IA:</span>
                    </div>
                    <p className="text-sm text-primary">{update.aiReasoning}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted/50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Confiança IA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={update.confidence} className="flex-1 h-2" />
                        <span className="text-sm font-bold">{update.confidence}%</span>
                      </div>
                    </div>

                    <div className="bg-success/10 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-success" />
                        <span className="text-sm font-medium text-success">Impacto SEO</span>
                      </div>
                      <div className="text-lg font-bold text-success">{update.seoImpact}/100</div>
                    </div>
                  </div>

                  {/* Schema Preview */}
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h5 className="text-sm font-semibold mb-2">Schema Sugerido:</h5>
                    <pre className="text-xs text-muted-foreground overflow-x-auto whitespace-pre-wrap">
                      {update.suggestedSchema.substring(0, 300)}...
                    </pre>
                  </div>
                </div>

                {/* Actions */}
                <div className="lg:w-48 flex lg:flex-col gap-2">
                  {update.status === 'pending' && (
                    <>
                      <Button 
                        className="flex-1"
                        onClick={() => handleApplyUpdate(update.id)}
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Aplicar
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        Revisar
                      </Button>
                    </>
                  )}
                  
                  {update.status === 'reviewing' && (
                    <>
                      <Button className="flex-1">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Aprovar
                      </Button>
                      <Button variant="destructive" className="flex-1">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Rejeitar
                      </Button>
                    </>
                  )}

                  <Button variant="outline" className="flex-1">
                    <Code className="h-4 w-4 mr-2" />
                    Ver Código
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {selectedTab === 'rules' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Regras de Automação</h3>
          {rules.map((rule) => (
            <Card key={rule.id} className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">{rule.name}</h4>
                    <Badge variant={rule.enabled ? 'secondary' : 'outline'}>
                      {rule.enabled ? 'Ativa' : 'Inativa'}
                    </Badge>
                    <Badge variant="outline">{rule.successRate}% sucesso</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">{rule.description}</p>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Trigger:</p>
                      <p className="text-sm text-muted-foreground">{rule.trigger}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Ação:</p>
                      <p className="text-sm text-muted-foreground">{rule.action}</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-medium text-foreground mb-2">Condições:</p>
                    <div className="space-y-1">
                      {rule.conditions.map((condition, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-success" />
                          <span className="text-muted-foreground">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {rule.lastTriggered && (
                    <div className="mt-3">
                      <p className="text-xs text-muted-foreground">
                        Última execução: {new Date(rule.lastTriggered).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    variant={rule.enabled ? 'outline' : 'default'}
                    size="sm"
                    onClick={() => handleToggleRule(rule.id)}
                  >
                    {rule.enabled ? (
                      <Pause className="h-4 w-4 mr-2" />
                    ) : (
                      <Play className="h-4 w-4 mr-2" />
                    )}
                    {rule.enabled ? 'Pausar' : 'Ativar'}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Editar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Hidden SEO Data */}
      <div className="sr-only" data-seo-insights="auto-schema-updater">
        <div data-automation-category="structured-data-optimization">
          <span data-metric="automated-schema-management">Gerenciamento automático de dados estruturados</span>
          <span data-metric="ai-schema-recommendations">Recomendações inteligentes de schema markup</span>
        </div>
        <div data-automation-category="seo-automation">
          <span data-metric="continuous-schema-optimization">Otimização contínua de structured data</span>
          <span data-metric="rich-snippets-enhancement">Melhoria automática de rich snippets</span>
        </div>
      </div>

      {/* Auto Schema Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "LEGAL Auto Schema Updater",
            "applicationCategory": "SEO Automation Software",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "BRL"
            },
            "featureList": [
              "Detecção automática de oportunidades de schema",
              "Aplicação inteligente de structured data",
              "Monitoramento contínuo de validação",
              "Automação baseada em regras customizáveis"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "95"
            }
          })
        }}
      />
    </div>
  );
};

export default AutoSchemaUpdater;