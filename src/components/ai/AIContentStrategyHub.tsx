import React, { useState, useEffect, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, TrendingUp, Target } from 'lucide-react';
import DynamicContentGenerator from './DynamicContentGenerator';
import PersonalizedResponseEngine from './PersonalizedResponseEngine';
import PredictiveSearchOptimizer from './PredictiveSearchOptimizer';
import ContextAwareDelivery from './ContextAwareDelivery';

interface AIContentStrategyHubProps {
  domain: string;
  userProfile?: any;
  currentQuery?: string;
  targetMarket?: string;
  onAnalyticsUpdate?: (data: any) => void;
}

const AIContentStrategyHub: React.FC<AIContentStrategyHubProps> = ({
  domain = 'legal.com.br',
  userProfile,
  currentQuery = '',
  targetMarket = 'eventos',
  onAnalyticsUpdate
}) => {
  const [globalMetrics, setGlobalMetrics] = useState({
    overallScore: 0,
    contentRelevance: 0,
    searchOptimization: 0,
    personalization: 0,
    contextDelivery: 0
  });

  const [activeComponents, setActiveComponents] = useState({
    contentGenerator: true,
    responseEngine: true,
    searchOptimizer: true,
    contextDelivery: true
  });

  // Mock data para demonstração
  const mockUserContext = {
    industry: targetMarket,
    companySize: 'medium',
    interests: [targetMarket, 'tecnologia', 'inovação'],
    behavior: {
      pageViews: ['smart-events', 'magicpass', 'fitscore'],
      timeSpent: 245,
      interactions: ['click_cta', 'view_demo', 'download_material']
    },
    location: {
      country: 'BR',
      region: 'SP'
    }
  };

  const mockUserProfile = userProfile || {
    id: 'user_123',
    segment: 'enterprise' as const,
    interests: ['eventos', 'tecnologia', 'automação'],
    previousInteractions: [
      {
        timestamp: new Date('2024-01-15'),
        query: 'Como funciona o Smart Events?',
        response: 'Smart Events é uma plataforma...',
        satisfaction: 4.5,
        context: 'product_inquiry'
      }
    ],
    preferences: {
      communicationStyle: 'formal' as const,
      responseLength: 'detailed' as const,
      preferredTopics: ['smart events', 'gestão', 'automação']
    }
  };

  const mockDeviceContext = {
    type: 'desktop' as const,
    os: 'Windows',
    browser: 'Chrome',
    screenSize: { width: 1920, height: 1080 },
    connection: 'fast' as const,
    battery: 85,
    orientation: 'landscape' as const
  };

  const mockLocationContext = {
    country: 'BR',
    region: 'SP',
    city: 'São Paulo',
    timezone: 'America/Sao_Paulo',
    language: 'pt-BR',
    currency: 'BRL'
  };

  const mockBehaviorContext = {
    visitDuration: 180,
    pageViews: 5,
    interactions: ['scroll', 'click', 'form_view'],
    scrollDepth: 75,
    exitIntent: false,
    engagementLevel: 'high' as const
  };

  // Agregação de métricas de todos os componentes
  const updateGlobalMetrics = useCallback((componentName: string, metrics: any) => {
    setGlobalMetrics(prev => {
      const updated = { ...prev };
      
      switch (componentName) {
        case 'contentGenerator':
          updated.contentRelevance = metrics.relevanceScore || 0;
          break;
        case 'responseEngine':
          updated.personalization = metrics.personalizationScore || 0;
          break;
        case 'searchOptimizer':
          updated.searchOptimization = metrics.averageOpportunityScore || 0;
          break;
        case 'contextDelivery':
          updated.contextDelivery = metrics.contextScore || 0;
          break;
      }

      // Calculate overall score
      updated.overallScore = Math.round(
        (updated.contentRelevance + 
         updated.personalization + 
         updated.searchOptimization + 
         updated.contextDelivery) / 4
      );

      return updated;
    });
  }, []);

  // Handler para dados dos componentes
  const handleComponentData = useCallback((componentName: string, data: any) => {
    if (data.metadata || data.metrics) {
      updateGlobalMetrics(componentName, data.metadata || data);
    }
    
    onAnalyticsUpdate?.({
      component: componentName,
      data,
      timestamp: new Date()
    });
  }, [updateGlobalMetrics, onAnalyticsUpdate]);

  useEffect(() => {
    // Simular métricas iniciais
    setGlobalMetrics({
      overallScore: 87,
      contentRelevance: 92,
      searchOptimization: 85,
      personalization: 89,
      contextDelivery: 83
    });
  }, []);

  return (
    <div className="space-y-6">
      {/* Dashboard Global */}
      <Card className="p-6 bg-gradient-to-r from-legal/10 to-legal-purple/10 border-legal/30">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-legal mb-2">AI-First Content Strategy Hub</h2>
            <p className="text-muted-foreground">
              Sistema integrado de geração, personalização e otimização de conteúdo
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-legal mb-1">{globalMetrics.overallScore}</div>
            <div className="text-sm text-muted-foreground">Score Global</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/50 rounded-lg border border-legal/20">
            <Brain className="w-6 h-6 text-legal mx-auto mb-2" />
            <div className="text-2xl font-bold text-legal">{globalMetrics.contentRelevance}</div>
            <div className="text-xs text-muted-foreground">Relevância</div>
          </div>

          <div className="text-center p-4 bg-white/50 rounded-lg border border-legal-purple/20">
            <Target className="w-6 h-6 text-legal-purple mx-auto mb-2" />
            <div className="text-2xl font-bold text-legal-purple">{globalMetrics.personalization}</div>
            <div className="text-xs text-muted-foreground">Personalização</div>
          </div>

          <div className="text-center p-4 bg-white/50 rounded-lg border border-legal-cyan/20">
            <TrendingUp className="w-6 h-6 text-legal-cyan mx-auto mb-2" />
            <div className="text-2xl font-bold text-legal-cyan">{globalMetrics.searchOptimization}</div>
            <div className="text-xs text-muted-foreground">SEO Preditivo</div>
          </div>

          <div className="text-center p-4 bg-white/50 rounded-lg border border-legal/20">
            <Zap className="w-6 h-6 text-legal mx-auto mb-2" />
            <div className="text-2xl font-bold text-legal">{globalMetrics.contextDelivery}</div>
            <div className="text-xs text-muted-foreground">Contexto</div>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Object.entries(activeComponents).map(([component, isActive]) => (
            <Badge 
              key={component}
              variant={isActive ? "default" : "secondary"}
              className="text-xs"
            >
              {component === 'contentGenerator' && 'Gerador'}
              {component === 'responseEngine' && 'Respostas'}
              {component === 'searchOptimizer' && 'SEO Preditivo'}
              {component === 'contextDelivery' && 'Contexto'}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Componentes Tabs */}
      <Tabs defaultValue="contentGenerator" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger 
            value="contentGenerator"
            className="flex items-center space-x-2"
          >
            <Brain className="w-4 h-4" />
            <span>Gerador</span>
          </TabsTrigger>
          
          <TabsTrigger 
            value="responseEngine"
            className="flex items-center space-x-2"
          >
            <Target className="w-4 h-4" />
            <span>Respostas</span>
          </TabsTrigger>
          
          <TabsTrigger 
            value="searchOptimizer"
            className="flex items-center space-x-2"
          >
            <TrendingUp className="w-4 h-4" />
            <span>SEO Preditivo</span>
          </TabsTrigger>
          
          <TabsTrigger 
            value="contextDelivery"
            className="flex items-center space-x-2"
          >
            <Zap className="w-4 h-4" />
            <span>Contexto</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contentGenerator" className="space-y-6">
          <DynamicContentGenerator
            userContext={mockUserContext}
            pageType="product"
            targetAudience="gestores de evento"
            onContentGenerated={(data) => handleComponentData('contentGenerator', data)}
          />
        </TabsContent>

        <TabsContent value="responseEngine" className="space-y-6">
          <PersonalizedResponseEngine
            userProfile={mockUserProfile}
            currentQuery={currentQuery || "Como o Smart Events pode ajudar minha empresa?"}
            context="product_inquiry"
            onResponseGenerated={(data) => handleComponentData('responseEngine', data)}
          />
        </TabsContent>

        <TabsContent value="searchOptimizer" className="space-y-6">
          <PredictiveSearchOptimizer
            domain={domain}
            targetMarket={targetMarket}
            currentKeywords={['smart events', 'gestão de eventos', 'eventos inteligentes']}
            onInsightsGenerated={(data) => handleComponentData('searchOptimizer', { insights: data })}
          />
        </TabsContent>

        <TabsContent value="contextDelivery" className="space-y-6">
          <ContextAwareDelivery
            deviceContext={mockDeviceContext}
            locationContext={mockLocationContext}
            behaviorContext={mockBehaviorContext}
            currentTime={new Date()}
            onContentDelivered={(data) => handleComponentData('contextDelivery', { content: data })}
          />
        </TabsContent>
      </Tabs>

      {/* Controles Globais */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="border-legal text-legal">
              Fase 3.1 - AI-First Content Strategy
            </Badge>
            <span className="text-sm text-muted-foreground">
              Sistema integrado de IA para conteúdo
            </span>
          </div>

          <div className="flex space-x-2">
            <Button 
              variant="outline"
              size="sm"
              className="border-legal text-legal hover:bg-legal hover:text-white"
            >
              Exportar Métricas
            </Button>
            
            <Button 
              size="sm"
              className="bg-legal hover:bg-legal-purple text-white"
            >
              Configurações
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AIContentStrategyHub;