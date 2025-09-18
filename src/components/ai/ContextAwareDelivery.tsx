import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Smartphone, Clock, MapPin, Activity, Wifi, Battery } from 'lucide-react';

interface DeviceContext {
  type: 'mobile' | 'desktop' | 'tablet';
  os: string;
  browser: string;
  screenSize: { width: number; height: number };
  connection: 'fast' | 'medium' | 'slow';
  battery?: number;
  orientation?: 'portrait' | 'landscape';
}

interface LocationContext {
  country: string;
  region: string;
  city: string;
  timezone: string;
  language: string;
  currency: string;
}

interface BehaviorContext {
  visitDuration: number;
  pageViews: number;
  interactions: string[];
  scrollDepth: number;
  exitIntent: boolean;
  engagementLevel: 'low' | 'medium' | 'high';
}

interface ContentVariation {
  id: string;
  type: 'hero' | 'features' | 'cta' | 'testimonials';
  variations: {
    mobile: any;
    desktop: any;
    tablet: any;
  };
  triggers: {
    device?: string[];
    location?: string[];
    behavior?: string[];
    time?: string[];
  };
  priority: number;
}

interface ContextAwareDeliveryProps {
  deviceContext: DeviceContext;
  locationContext: LocationContext;
  behaviorContext: BehaviorContext;
  currentTime: Date;
  onContentDelivered?: (content: any) => void;
}

const ContextAwareDelivery: React.FC<ContextAwareDeliveryProps> = ({
  deviceContext,
  locationContext,
  behaviorContext,
  currentTime,
  onContentDelivered
}) => {
  const [deliveredContent, setDeliveredContent] = useState<any[]>([]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [deliveryMetrics, setDeliveryMetrics] = useState({
    contextScore: 0,
    optimizationLevel: 0,
    expectedEngagement: 0
  });

  // Variações de conteúdo contextuais para produtos LEGAL
  const contentVariations: ContentVariation[] = useMemo(() => [
    {
      id: 'smart-events-hero',
      type: 'hero',
      variations: {
        mobile: {
          title: 'Smart Events™ na Palma da Mão',
          subtitle: 'Gerencie eventos completos pelo celular',
          cta: 'Baixar App',
          image: 'mobile-optimized'
        },
        desktop: {
          title: 'Revolucione Seus Eventos com Smart Events™',
          subtitle: 'Plataforma completa de gestão inteligente de eventos corporativos',
          cta: 'Solicitar Demonstração',
          image: 'hero-desktop'
        },
        tablet: {
          title: 'Smart Events™ para Gestores',
          subtitle: 'Dashboard completo para controle total',
          cta: 'Ver Demo Interativa',
          image: 'tablet-dashboard'
        }
      },
      triggers: {
        device: ['mobile', 'desktop', 'tablet'],
        behavior: ['high_engagement', 'returning_visitor']
      },
      priority: 1
    },
    {
      id: 'magicpass-security',
      type: 'features',
      variations: {
        mobile: {
          title: 'Acesso Seguro e Rápido',
          features: ['Reconhecimento Facial', 'Sem Filas', 'Segurança Total'],
          presentation: 'carousel'
        },
        desktop: {
          title: 'MAGICPASS™ - Segurança Facial Avançada',
          features: ['Biometria de Alta Precisão', 'Compliance LGPD', 'Integração API', 'Analytics Tempo Real'],
          presentation: 'grid'
        },
        tablet: {
          title: 'Controle de Acesso Inteligente',
          features: ['Setup Simples', 'Monitoramento Live', 'Relatórios Detalhados'],
          presentation: 'tabs'
        }
      },
      triggers: {
        device: ['mobile', 'desktop', 'tablet'],
        location: ['BR', 'US', 'EU'],
        behavior: ['security_interest']
      },
      priority: 2
    },
    {
      id: 'fitscore-cta',
      type: 'cta',
      variations: {
        mobile: {
          text: 'Transformar RH Agora',
          style: 'full-width',
          urgency: 'high'
        },
        desktop: {
          text: 'Solicitar Demonstração Personalizada do FitScore™',
          style: 'prominent',
          urgency: 'medium'
        },
        tablet: {
          text: 'Agendar Consultoria RH',
          style: 'centered',
          urgency: 'medium'
        }
      },
      triggers: {
        behavior: ['hr_interest', 'high_engagement'],
        time: ['business_hours']
      },
      priority: 3
    }
  ], []);

  // Análise do contexto atual
  const analyzeContext = useCallback(() => {
    // Score de contexto baseado em múltiplos fatores
    let contextScore = 0;

    // Device context (30%)
    const deviceScore = deviceContext.connection === 'fast' ? 30 :
                       deviceContext.connection === 'medium' ? 20 : 10;
    contextScore += deviceScore;

    // Location context (20%) 
    const locationScore = locationContext.country === 'BR' ? 20 : 15;
    contextScore += locationScore;

    // Behavior context (40%)
    const behaviorScore = behaviorContext.engagementLevel === 'high' ? 40 :
                         behaviorContext.engagementLevel === 'medium' ? 25 : 10;
    contextScore += behaviorScore;

    // Time context (10%)
    const hour = currentTime.getHours();
    const timeScore = (hour >= 9 && hour <= 18) ? 10 : 5; // Business hours
    contextScore += timeScore;

    return {
      total: contextScore,
      device: deviceScore,
      location: locationScore,
      behavior: behaviorScore,
      time: timeScore
    };
  }, [deviceContext, locationContext, behaviorContext, currentTime]);

  // Seleção de conteúdo contextual
  const selectOptimalContent = useCallback((contextAnalysis: any) => {
    const relevantVariations = contentVariations.filter(variation => {
      // Check device triggers
      const deviceMatch = !variation.triggers.device || 
                         variation.triggers.device.includes(deviceContext.type);

      // Check location triggers  
      const locationMatch = !variation.triggers.location || 
                           variation.triggers.location.includes(locationContext.country);

      // Check behavior triggers
      const behaviorMatch = !variation.triggers.behavior || 
                           variation.triggers.behavior.some(trigger => 
                             behaviorContext.engagementLevel === 'high' && trigger === 'high_engagement'
                           );

      // Check time triggers
      const hour = currentTime.getHours();
      const timeMatch = !variation.triggers.time || 
                       (variation.triggers.time.includes('business_hours') && hour >= 9 && hour <= 18);

      return deviceMatch && locationMatch && behaviorMatch && timeMatch;
    });

    // Sort by priority and context relevance
    return relevantVariations
      .sort((a, b) => a.priority - b.priority)
      .map(variation => ({
        ...variation,
        selectedVariation: variation.variations[deviceContext.type],
        contextRelevance: calculateRelevance(variation, contextAnalysis)
      }));
  }, [contentVariations, deviceContext, locationContext, behaviorContext, currentTime]);

  // Cálculo de relevância contextual
  const calculateRelevance = useCallback((variation: ContentVariation, contextAnalysis: any) => {
    let relevance = 50; // Base relevance

    // Device optimization bonus
    if (variation.variations[deviceContext.type]) {
      relevance += 20;
    }

    // Connection speed adjustment
    if (deviceContext.connection === 'slow' && variation.type === 'hero') {
      relevance -= 15; // Prefer lighter content for slow connections
    }

    // Engagement level boost
    if (behaviorContext.engagementLevel === 'high') {
      relevance += 15;
    }

    // Time-based relevance
    const hour = currentTime.getHours();
    if (hour >= 9 && hour <= 18 && variation.type === 'cta') {
      relevance += 10; // Boost CTAs during business hours
    }

    return Math.min(100, Math.max(0, relevance));
  }, [deviceContext, behaviorContext, currentTime]);

  // Delivery de conteúdo otimizado
  const deliverOptimizedContent = useCallback(async () => {
    setIsOptimizing(true);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 800));

    const contextAnalysis = analyzeContext();
    const optimizedContent = selectOptimalContent(contextAnalysis);

    // Calculate delivery metrics
    const avgRelevance = optimizedContent.reduce((acc, content) => 
      acc + content.contextRelevance, 0) / optimizedContent.length;

    const optimizationLevel = Math.round(
      (contextAnalysis.total / 100) * 100
    );

    const expectedEngagement = Math.round(
      avgRelevance * (contextAnalysis.total / 100)
    );

    setDeliveredContent(optimizedContent.slice(0, 5)); // Limit to top 5
    setDeliveryMetrics({
      contextScore: contextAnalysis.total,
      optimizationLevel,
      expectedEngagement
    });

    onContentDelivered?.(optimizedContent);
    setIsOptimizing(false);
  }, [analyzeContext, selectOptimalContent, onContentDelivered]);

  // Auto-delivery baseado em mudanças de contexto
  useEffect(() => {
    deliverOptimizedContent();
  }, [deliverOptimizedContent]);

  return (
    <div className="space-y-6">
      {/* Context Dashboard */}
      <Card className="p-6 bg-gradient-to-r from-legal/5 to-legal-purple/5 border-legal/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-legal">Context-Aware Delivery</h3>
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-legal-cyan" />
            <span className="text-sm text-legal-cyan font-medium">
              {isOptimizing ? 'Otimizando...' : 'Ativo'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="w-4 h-4 text-legal mr-2" />
              <span className="text-sm font-medium">Context Score</span>
            </div>
            <div className="text-2xl font-bold text-legal">{deliveryMetrics.contextScore}</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Smartphone className="w-4 h-4 text-legal-purple mr-2" />
              <span className="text-sm font-medium">Otimização</span>
            </div>
            <div className="text-2xl font-bold text-legal-purple">{deliveryMetrics.optimizationLevel}%</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-4 h-4 text-legal-cyan mr-2" />
              <span className="text-sm font-medium">Eng. Esperado</span>
            </div>
            <div className="text-2xl font-bold text-legal-cyan">{deliveryMetrics.expectedEngagement}%</div>
          </div>
        </div>
      </Card>

      {/* Context Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 border-legal/20">
          <h4 className="text-sm font-semibold text-legal mb-3 flex items-center">
            <Smartphone className="w-4 h-4 mr-2" />
            Device Context
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Tipo:</span>
              <Badge variant="outline">{deviceContext.type}</Badge>
            </div>
            <div className="flex justify-between">
              <span>Conexão:</span>
              <Badge variant={deviceContext.connection === 'fast' ? 'default' : 'secondary'}>
                <Wifi className="w-3 h-3 mr-1" />
                {deviceContext.connection}
              </Badge>
            </div>
            {deviceContext.battery && (
              <div className="flex justify-between">
                <span>Bateria:</span>
                <div className="flex items-center">
                  <Battery className="w-3 h-3 mr-1 text-legal" />
                  <span>{deviceContext.battery}%</span>
                </div>
              </div>
            )}
          </div>
        </Card>

        <Card className="p-4 border-legal-purple/20">
          <h4 className="text-sm font-semibold text-legal-purple mb-3 flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Location Context
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>País:</span>
              <span>{locationContext.country}</span>
            </div>
            <div className="flex justify-between">
              <span>Região:</span>
              <span>{locationContext.region}</span>
            </div>
            <div className="flex justify-between">
              <span>Idioma:</span>
              <span>{locationContext.language}</span>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-legal-cyan/20">
          <h4 className="text-sm font-semibold text-legal-cyan mb-3 flex items-center">
            <Activity className="w-4 h-4 mr-2" />
            Behavior Context
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Engajamento:</span>
              <Badge 
                variant={behaviorContext.engagementLevel === 'high' ? 'default' : 'secondary'}
              >
                {behaviorContext.engagementLevel}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span>Page Views:</span>
              <span>{behaviorContext.pageViews}</span>
            </div>
            <div className="flex justify-between">
              <span>Scroll:</span>
              <span>{behaviorContext.scrollDepth}%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Delivered Content */}
      {isOptimizing ? (
        <Card className="p-8 text-center">
          <div className="loading-animation">
            <Smartphone className="w-8 h-8 text-legal mx-auto mb-4" />
            <p className="text-legal">Otimizando entrega de conteúdo...</p>
          </div>
        </Card>
      ) : (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-legal">Conteúdo Otimizado Entregue:</h3>
          
          {deliveredContent.map((content, index) => (
            <Card key={index} className="p-4 border-legal/30 hover:border-legal/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-legal mb-1">{content.selectedVariation.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {content.selectedVariation.subtitle || 'Conteúdo otimizado para o contexto atual'}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{content.type}</Badge>
                    <Badge variant="secondary">{deviceContext.type}</Badge>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-legal-cyan">{content.contextRelevance}</div>
                  <div className="text-xs text-muted-foreground">Relevância</div>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium">Relevância Contextual</span>
                  <span className="text-xs">{content.contextRelevance}%</span>
                </div>
                <Progress value={content.contextRelevance} className="h-1" />
              </div>

              {content.selectedVariation.cta && (
                <Button 
                  size="sm"
                  className="bg-legal hover:bg-legal-purple text-white"
                >
                  {content.selectedVariation.cta}
                </Button>
              )}
            </Card>
          ))}
        </div>
      )}

      {/* Refresh Control */}
      <div className="flex justify-center">
        <Button 
          onClick={deliverOptimizedContent}
          disabled={isOptimizing}
          className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal-black"
        >
          {isOptimizing ? 'Otimizando...' : 'Atualizar Contexto'}
        </Button>
      </div>
    </div>
  );
};

export default ContextAwareDelivery;