import { useState, useEffect, useCallback, useRef } from 'react';

interface AIMetrics {
  contentRelevance: number;
  personalization: number;
  searchOptimization: number;
  contextDelivery: number;
  overallScore: number;
}

interface AIInsight {
  id: string;
  type: 'content' | 'response' | 'search' | 'context';
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  confidence: number;
  actionRequired: boolean;
  suggestedActions: string[];
  timestamp: Date;
}

interface AIContentStrategyState {
  metrics: AIMetrics;
  insights: AIInsight[];
  isProcessing: boolean;
  lastUpdate: Date | null;
  performance: {
    responseTime: number;
    accuracy: number;
    userSatisfaction: number;
  };
}

interface UseAIContentStrategyOptions {
  domain?: string;
  targetMarket?: string;
  updateInterval?: number;
  enableRealTimeOptimization?: boolean;
}

export const useAIContentStrategy = (options: UseAIContentStrategyOptions = {}) => {
  const {
    domain = 'legal.com.br',
    targetMarket = 'eventos',
    updateInterval = 30000, // 30 seconds
    enableRealTimeOptimization = true
  } = options;

  const [state, setState] = useState<AIContentStrategyState>({
    metrics: {
      contentRelevance: 0,
      personalization: 0,
      searchOptimization: 0,
      contextDelivery: 0,
      overallScore: 0
    },
    insights: [],
    isProcessing: false,
    lastUpdate: null,
    performance: {
      responseTime: 0,
      accuracy: 0,
      userSatisfaction: 0
    }
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const metricsHistory = useRef<AIMetrics[]>([]);

  // Atualização de métricas individuais
  const updateMetric = useCallback((metricType: keyof AIMetrics, value: number) => {
    setState(prev => {
      const newMetrics = { ...prev.metrics, [metricType]: value };
      
      // Recalcular score geral
      if (metricType !== 'overallScore') {
        newMetrics.overallScore = Math.round(
          (newMetrics.contentRelevance + 
           newMetrics.personalization + 
           newMetrics.searchOptimization + 
           newMetrics.contextDelivery) / 4
        );
      }

      // Adicionar ao histórico
      metricsHistory.current.push(newMetrics);
      if (metricsHistory.current.length > 100) {
        metricsHistory.current = metricsHistory.current.slice(-100);
      }

      return {
        ...prev,
        metrics: newMetrics,
        lastUpdate: new Date()
      };
    });
  }, []);

  // Atualização em lote de métricas
  const updateMetrics = useCallback((newMetrics: Partial<AIMetrics>) => {
    setState(prev => {
      const updatedMetrics = { ...prev.metrics, ...newMetrics };
      
      // Recalcular score geral se não foi fornecido
      if (!newMetrics.overallScore) {
        updatedMetrics.overallScore = Math.round(
          (updatedMetrics.contentRelevance + 
           updatedMetrics.personalization + 
           updatedMetrics.searchOptimization + 
           updatedMetrics.contextDelivery) / 4
        );
      }

      return {
        ...prev,
        metrics: updatedMetrics,
        lastUpdate: new Date()
      };
    });
  }, []);

  // Adicionar insight
  const addInsight = useCallback((insight: Omit<AIInsight, 'id' | 'timestamp'>) => {
    const newInsight: AIInsight = {
      ...insight,
      id: `insight_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date()
    };

    setState(prev => ({
      ...prev,
      insights: [newInsight, ...prev.insights].slice(0, 50) // Manter apenas os últimos 50
    }));

    return newInsight.id;
  }, []);

  // Remover insight
  const removeInsight = useCallback((insightId: string) => {
    setState(prev => ({
      ...prev,
      insights: prev.insights.filter(insight => insight.id !== insightId)
    }));
  }, []);

  // Análise de tendências
  const analyzeTrends = useCallback(() => {
    if (metricsHistory.current.length < 5) return null;

    const recent = metricsHistory.current.slice(-10);
    const older = metricsHistory.current.slice(-20, -10);

    const calculateAverage = (metrics: AIMetrics[], key: keyof AIMetrics) => {
      return metrics.reduce((sum, m) => sum + m[key], 0) / metrics.length;
    };

    const trends = {
      contentRelevance: calculateAverage(recent, 'contentRelevance') - calculateAverage(older, 'contentRelevance'),
      personalization: calculateAverage(recent, 'personalization') - calculateAverage(older, 'personalization'),
      searchOptimization: calculateAverage(recent, 'searchOptimization') - calculateAverage(older, 'searchOptimization'),
      contextDelivery: calculateAverage(recent, 'contextDelivery') - calculateAverage(older, 'contextDelivery'),
      overallScore: calculateAverage(recent, 'overallScore') - calculateAverage(older, 'overallScore')
    };

    return trends;
  }, []);

  // Geração automática de insights baseada em métricas
  const generateAutomaticInsights = useCallback(() => {
    const { metrics } = state;
    const trends = analyzeTrends();
    
    if (!trends) return;

    // Insight de baixa relevância de conteúdo
    if (metrics.contentRelevance < 70) {
      addInsight({
        type: 'content',
        title: 'Baixa Relevância de Conteúdo',
        description: 'O conteúdo gerado apresenta baixa relevância para o contexto atual do usuário.',
        impact: 'high',
        confidence: 0.85,
        actionRequired: true,
        suggestedActions: [
          'Revisar templates de conteúdo',
          'Ajustar algoritmos de personalização',
          'Atualizar base de conhecimento'
        ]
      });
    }

    // Insight de tendência negativa
    if (trends.overallScore < -5) {
      addInsight({
        type: 'context',
        title: 'Queda no Performance Geral',
        description: 'Detectada tendência de queda no performance geral do sistema.',
        impact: 'medium',
        confidence: 0.75,
        actionRequired: true,
        suggestedActions: [
          'Analisar logs do sistema',
          'Verificar qualidade dos dados',
          'Recalibrar modelos de IA'
        ]
      });
    }

    // Insight de oportunidade de SEO
    if (metrics.searchOptimization > 85 && trends.searchOptimization > 5) {
      addInsight({
        type: 'search',
        title: 'Oportunidade de SEO Identificada',
        description: 'Alta performance em otimização preditiva com tendência crescente.',
        impact: 'medium',
        confidence: 0.90,
        actionRequired: false,
        suggestedActions: [
          'Expandir palavras-chave otimizadas',
          'Criar mais conteúdo direcionado',
          'Implementar estratégias avançadas'
        ]
      });
    }
  }, [state, analyzeTrends, addInsight]);

  // Processamento em tempo real
  const processRealTimeOptimization = useCallback(async () => {
    if (!enableRealTimeOptimization) return;

    setState(prev => ({ ...prev, isProcessing: true }));

    try {
      // Simular processamento de IA (em produção seria call para APIs)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simular otimizações automáticas
      const optimizations = {
        contentRelevance: Math.min(100, state.metrics.contentRelevance + Math.random() * 5),
        personalization: Math.min(100, state.metrics.personalization + Math.random() * 3),
        searchOptimization: Math.min(100, state.metrics.searchOptimization + Math.random() * 4),
        contextDelivery: Math.min(100, state.metrics.contextDelivery + Math.random() * 3)
      };

      updateMetrics(optimizations);
      generateAutomaticInsights();

      // Atualizar performance
      setState(prev => ({
        ...prev,
        performance: {
          responseTime: 150 + Math.random() * 100,
          accuracy: 85 + Math.random() * 10,
          userSatisfaction: 4.2 + Math.random() * 0.6
        }
      }));

    } catch (error) {
      console.error('Erro na otimização em tempo real:', error);
    } finally {
      setState(prev => ({ ...prev, isProcessing: false }));
    }
  }, [enableRealTimeOptimization, state.metrics, updateMetrics, generateAutomaticInsights]);

  // Exportar dados para análise
  const exportAnalytics = useCallback(() => {
    return {
      currentMetrics: state.metrics,
      insights: state.insights,
      performance: state.performance,
      trends: analyzeTrends(),
      history: metricsHistory.current,
      exportedAt: new Date(),
      domain,
      targetMarket
    };
  }, [state, analyzeTrends, domain, targetMarket]);

  // Reset do sistema
  const reset = useCallback(() => {
    setState({
      metrics: {
        contentRelevance: 0,
        personalization: 0,
        searchOptimization: 0,
        contextDelivery: 0,
        overallScore: 0
      },
      insights: [],
      isProcessing: false,
      lastUpdate: null,
      performance: {
        responseTime: 0,
        accuracy: 0,
        userSatisfaction: 0
      }
    });
    metricsHistory.current = [];
  }, []);

  // Configuração de intervalo automático
  useEffect(() => {
    if (enableRealTimeOptimization && updateInterval > 0) {
      intervalRef.current = setInterval(processRealTimeOptimization, updateInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [processRealTimeOptimization, updateInterval, enableRealTimeOptimization]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    // State
    metrics: state.metrics,
    insights: state.insights,
    isProcessing: state.isProcessing,
    lastUpdate: state.lastUpdate,
    performance: state.performance,
    
    // Actions
    updateMetric,
    updateMetrics,
    addInsight,
    removeInsight,
    
    // Analysis
    analyzeTrends,
    processRealTimeOptimization,
    
    // Utilities
    exportAnalytics,
    reset,
    
    // Computed
    metricsHistory: metricsHistory.current,
    hasRecentData: !!state.lastUpdate && (Date.now() - state.lastUpdate.getTime()) < updateInterval * 2
  };
};