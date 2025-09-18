import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Eye, 
  MousePointer, 
  Clock, 
  Navigation, 
  Smartphone,
  Monitor,
  Tablet,
  MapPin,
  Calendar,
  TrendingUp,
  Brain
} from 'lucide-react';

interface UserSegment {
  id: string;
  name: string;
  users: number;
  percentage: number;
  avgSessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: string[];
  behavioral_pattern: string;
}

interface BehaviorInsight {
  id: string;
  title: string;
  description: string;
  segment: string;
  impact: 'high' | 'medium' | 'low';
  actionable: string;
  confidence: number;
}

interface DeviceAnalytics {
  device: string;
  users: number;
  percentage: number;
  avgSessionTime: number;
  bounceRate: number;
  icon: React.ReactNode;
}

const UserBehaviorAnalysis: React.FC = () => {
  const [segments, setSegments] = useState<UserSegment[]>([]);
  const [insights, setInsights] = useState<BehaviorInsight[]>([]);
  const [deviceData, setDeviceData] = useState<DeviceAnalytics[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  useEffect(() => {
    const generateSegments = (): UserSegment[] => [
      {
        id: 'new-visitors',
        name: 'Novos Visitantes',
        users: 12450,
        percentage: 68,
        avgSessionDuration: 145,
        bounceRate: 42,
        conversionRate: 2.1,
        topPages: ['/produtos/galaxia', '/smart-events', '/'],
        behavioral_pattern: 'Exploração inicial focada em produtos principais'
      },
      {
        id: 'returning-users',
        name: 'Usuários Recorrentes',
        users: 4200,
        percentage: 23,
        avgSessionDuration: 320,
        bounceRate: 18,
        conversionRate: 8.7,
        topPages: ['/negocios', '/contato', '/produtos/eventrix'],
        behavioral_pattern: 'Foco em soluções B2B e contato comercial'
      },
      {
        id: 'power-users',
        name: 'Power Users',
        users: 890,
        percentage: 5,
        avgSessionDuration: 580,
        bounceRate: 8,
        conversionRate: 15.3,
        topPages: ['/universo/tectec', '/smart-events', '/negocios/ai'],
        behavioral_pattern: 'Interesse profundo em conteúdo técnico e inovação'
      },
      {
        id: 'mobile-first',
        name: 'Mobile-First Users',
        users: 720,
        percentage: 4,
        avgSessionDuration: 95,
        bounceRate: 55,
        conversionRate: 1.8,
        topPages: ['/', '/produtos/fitscore', '/bits'],
        behavioral_pattern: 'Navegação rápida, interesse em produtos consumer'
      }
    ];

    const generateInsights = (): BehaviorInsight[] => [
      {
        id: 'mobile-optimization',
        title: 'Oportunidade Mobile Crítica',
        description: 'Usuários mobile mostram 45% mais interesse em produtos FitScore e Bits, mas têm alta taxa de abandono na página de contato',
        segment: 'mobile-first',
        impact: 'high',
        actionable: 'Implementar formulário simplificado para mobile e CTAs específicos',
        confidence: 87
      },
      {
        id: 'content-depth',
        title: 'Padrão de Consumo de Conteúdo',
        description: 'Power users consomem 3x mais conteúdo técnico e têm 40% mais probabilidade de conversion em soluções enterprise',
        segment: 'power-users',
        impact: 'medium',
        actionable: 'Criar jornada personalizada com conteúdo técnico avançado',
        confidence: 92
      },
      {
        id: 'funnel-optimization',
        title: 'Gargalo no Funil de Conversão',
        description: 'Novos visitantes abandonam em 65% na transição produtos→contato. Tempo ideal identificado: 2min30s',
        segment: 'new-visitors',
        impact: 'high',
        actionable: 'Implementar progressive disclosure e social proof estratégico',
        confidence: 79
      }
    ];

    const generateDeviceData = (): DeviceAnalytics[] => [
      {
        device: 'Desktop',
        users: 9850,
        percentage: 54,
        avgSessionTime: 285,
        bounceRate: 28,
        icon: <Monitor className="h-5 w-5" />
      },
      {
        device: 'Mobile',
        users: 6420,
        percentage: 35,
        avgSessionTime: 125,
        bounceRate: 48,
        icon: <Smartphone className="h-5 w-5" />
      },
      {
        device: 'Tablet',
        users: 1990,
        percentage: 11,
        avgSessionTime: 195,
        bounceRate: 35,
        icon: <Tablet className="h-5 w-5" />
      }
    ];

    setTimeout(() => {
      setSegments(generateSegments());
      setInsights(generateInsights());
      setDeviceData(generateDeviceData());
      setIsLoading(false);
    }, 1200);
  }, [selectedTimeframe]);

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
          <h2 className="text-2xl font-bold text-foreground">Análise Comportamental</h2>
          <p className="text-muted-foreground">
            IA avançada para compreensão profunda do comportamento dos usuários
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={selectedTimeframe === '7d' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedTimeframe('7d')}
          >
            7 dias
          </Button>
          <Button
            variant={selectedTimeframe === '30d' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedTimeframe('30d')}
          >
            30 dias
          </Button>
          <Button
            variant={selectedTimeframe === '90d' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedTimeframe('90d')}
          >
            90 dias
          </Button>
        </div>
      </div>

      {/* AI Insights */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          Insights Comportamentais de IA
        </h3>
        <div className="grid gap-4">
          {insights.map((insight) => (
            <Card key={insight.id} className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">{insight.title}</h4>
                    <Badge variant={insight.impact === 'high' ? 'destructive' : 'secondary'}>
                      {insight.impact}
                    </Badge>
                    <Badge variant="outline">
                      Segmento: {insight.segment}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">{insight.description}</p>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm font-medium text-foreground">
                      💡 Ação Recomendada: {insight.actionable}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Progress value={insight.confidence} className="flex-1 h-2" />
                      <span className="text-xs text-muted-foreground">{insight.confidence}% confiança</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* User Segments */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Segmentação Inteligente
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {segments.map((segment) => (
            <Card key={segment.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">{segment.name}</h4>
                <Badge variant="outline">{segment.percentage}% dos usuários</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">
                    {segment.users.toLocaleString()}
                  </span>
                  <div className="text-right text-sm text-muted-foreground">
                    usuários únicos
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-foreground">
                      {segment.avgSessionDuration}s
                    </div>
                    <div className="text-xs text-muted-foreground">Duração Média</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground">
                      {segment.bounceRate}%
                    </div>
                    <div className="text-xs text-muted-foreground">Taxa Rejeição</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-success">
                      {segment.conversionRate}%
                    </div>
                    <div className="text-xs text-muted-foreground">Conversão</div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-2">Padrão Comportamental:</p>
                  <p className="text-sm text-foreground">{segment.behavioral_pattern}</p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-2">Páginas Mais Visitadas:</p>
                  <div className="flex flex-wrap gap-1">
                    {segment.topPages.map((page, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {page}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Device Analytics */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Monitor className="h-5 w-5 text-primary" />
          Analytics por Dispositivo
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {deviceData.map((device) => (
            <Card key={device.device} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {device.icon}
                  <h4 className="font-semibold text-foreground">{device.device}</h4>
                </div>
                <Badge variant="outline">{device.percentage}%</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">
                    {device.users.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">usuários</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Tempo Médio</span>
                    <span className="text-sm font-medium">{device.avgSessionTime}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Taxa de Rejeição</span>
                    <span className="text-sm font-medium">{device.bounceRate}%</span>
                  </div>
                </div>

                <Progress value={100 - device.bounceRate} className="h-2" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Hidden SEO Data */}
      <div className="sr-only" data-seo-insights="user-behavior-analysis">
        <div data-analysis-category="user-segmentation">
          <span data-metric="intelligent-user-profiling">Segmentação inteligente de usuários para SEO personalizado</span>
          <span data-metric="behavioral-pattern-analysis">Análise de padrões comportamentais para otimização de conteúdo</span>
        </div>
        <div data-analysis-category="conversion-optimization">
          <span data-metric="behavior-driven-cro">Otimização de conversão baseada em comportamento do usuário</span>
          <span data-metric="personalized-user-journey">Jornadas personalizadas para diferentes segmentos</span>
        </div>
        <div data-analysis-category="content-strategy">
          <span data-metric="content-engagement-patterns">Padrões de engajamento para estratégia de conteúdo</span>
          <span data-metric="user-intent-optimization">Otimização baseada na intenção real do usuário</span>
        </div>
      </div>

      {/* Behavior Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "LEGAL User Behavior Analytics",
            "description": "Análise comportamental avançada de usuários para otimização de experiência e SEO",
            "creator": {
              "@type": "Organization",
              "name": "LEGAL TechCo"
            },
            "dateCreated": new Date().toISOString(),
            "measurementTechnique": "AI-Powered Behavior Analysis",
            "variableMeasured": [
              {
                "@type": "PropertyValue",
                "name": "User Segmentation Accuracy",
                "value": "94%",
                "description": "Precisão na segmentação automática de usuários"
              },
              {
                "@type": "PropertyValue", 
                "name": "Behavioral Pattern Recognition",
                "value": "89%",
                "description": "Taxa de reconhecimento de padrões comportamentais"
              }
            ]
          })
        }}
      />
    </div>
  );
};

export default UserBehaviorAnalysis;