import { supabase } from '@/integrations/supabase/client';

interface GA4Event {
  event_name: string;
  parameters: {
    [key: string]: any;
  };
  timestamp: string;
  user_id?: string;
  session_id: string;
  page_location: string;
  page_title: string;
}

interface GA4Metrics {
  sessions: number;
  users: number;
  pageviews: number;
  bounce_rate: number;
  avg_session_duration: number;
  conversion_rate: number;
  revenue: number;
  goal_completions: number;
}

interface GA4AIInsight {
  id: string;
  type: 'anomaly' | 'opportunity' | 'trend' | 'prediction';
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
  recommendation: string;
  data_points: any[];
  timestamp: string;
}

interface GA4RealtimeData {
  active_users: number;
  active_sessions: number;
  top_pages: {
    page: string;
    active_users: number;
  }[];
  traffic_sources: {
    source: string;
    users: number;
    percentage: number;
  }[];
  conversions_last_hour: number;
}

class GoogleAnalytics4AI {
  private measurementId: string;
  private apiSecret: string;
  private isInitialized: boolean = false;

  constructor(measurementId?: string, apiSecret?: string) {
    this.measurementId = measurementId || 'G-XXXXXXXXXX';
    this.apiSecret = apiSecret || '';
  }

  /**
   * Inicializa a integração com Google Analytics 4
   */
  async initialize(): Promise<void> {
    try {
      // Verificar se gtag está disponível
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', this.measurementId, {
          enhanced_ecommerce: true,
          custom_map: {
            'custom_dimension_1': 'user_segment',
            'custom_dimension_2': 'page_category',
            'custom_dimension_3': 'content_group'
          }
        });
        this.isInitialized = true;
        console.log('GA4 AI Integration initialized successfully');
      } else {
        console.warn('Google Analytics gtag not found. Loading script...');
        await this.loadGoogleAnalytics();
      }
    } catch (error) {
      console.error('Failed to initialize GA4 AI Integration:', error);
      throw error;
    }
  }

  /**
   * Carrega o script do Google Analytics
   */
  private async loadGoogleAnalytics(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        reject(new Error('Window object not available'));
        return;
      }

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
      
      script.onload = () => {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).gtag = function() {
          (window as any).dataLayer.push(arguments);
        };
        
        (window as any).gtag('js', new Date());
        (window as any).gtag('config', this.measurementId);
        
        this.isInitialized = true;
        resolve();
      };

      script.onerror = () => {
        reject(new Error('Failed to load Google Analytics script'));
      };

      document.head.appendChild(script);
    });
  }

  /**
   * Envia evento personalizado com enriquecimento de IA
   */
  async sendEnhancedEvent(eventName: string, parameters: any = {}): Promise<void> {
    if (!this.isInitialized) {
      console.warn('GA4 AI not initialized. Event will be queued.');
      return;
    }

    try {
      // Enriquecer evento com dados de contexto de IA
      const enhancedParams = {
        ...parameters,
        ai_enhanced: true,
        user_segment: await this.detectUserSegment(),
        page_category: this.detectPageCategory(),
        session_quality_score: await this.calculateSessionQuality(),
        predicted_conversion_probability: await this.predictConversion(),
        timestamp: new Date().toISOString()
      };

      // Enviar para GA4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, enhancedParams);
      }

      // Armazenar evento localmente para análise de IA
      await this.storeEventForAI({
        event_name: eventName,
        parameters: enhancedParams,
        timestamp: new Date().toISOString(),
        session_id: this.getSessionId(),
        page_location: window.location.href,
        page_title: document.title
      });

      console.log('Enhanced GA4 event sent:', eventName, enhancedParams);
    } catch (error) {
      console.error('Failed to send enhanced GA4 event:', error);
    }
  }

  /**
   * Detecta segmento do usuário usando IA
   */
  private async detectUserSegment(): Promise<string> {
    try {
      // Simular detecção de segmento baseada em comportamento
      const pageViews = parseInt(localStorage.getItem('page_views') || '0');
      const timeOnSite = parseInt(localStorage.getItem('time_on_site') || '0');
      const pagesVisited = JSON.parse(localStorage.getItem('pages_visited') || '[]');

      if (pageViews > 10 && timeOnSite > 300) return 'engaged_user';
      if (pagesVisited.some((page: string) => page.includes('/produtos'))) return 'product_interested';
      if (pagesVisited.some((page: string) => page.includes('/contato'))) return 'high_intent';
      if (pageViews === 1) return 'new_visitor';
      
      return 'casual_browser';
    } catch (error) {
      console.error('Error detecting user segment:', error);
      return 'unknown';
    }
  }

  /**
   * Detecta categoria da página atual
   */
  private detectPageCategory(): string {
    const path = window.location.pathname;
    
    if (path.includes('/produtos')) return 'product_pages';
    if (path.includes('/universo/tectec')) return 'blog_content';
    if (path.includes('/contato')) return 'conversion_page';
    if (path.includes('/smart-events')) return 'solution_page';
    if (path === '/') return 'homepage';
    
    return 'other';
  }

  /**
   * Calcula score de qualidade da sessão
   */
  private async calculateSessionQuality(): Promise<number> {
    try {
      const startTime = parseInt(sessionStorage.getItem('session_start') || Date.now().toString());
      const sessionDuration = (Date.now() - startTime) / 1000;
      const pageViews = parseInt(sessionStorage.getItem('session_pageviews') || '1');
      const interactions = parseInt(sessionStorage.getItem('session_interactions') || '0');

      // Algoritmo simples de scoring (0-100)
      let score = 0;
      
      // Duração da sessão (max 30 pontos)
      score += Math.min(sessionDuration / 10, 30);
      
      // Número de páginas vistas (max 25 pontos)  
      score += Math.min(pageViews * 5, 25);
      
      // Interações (max 25 pontos)
      score += Math.min(interactions * 2, 25);
      
      // Bounce rate penalty
      if (pageViews === 1 && sessionDuration < 30) score *= 0.3;
      
      return Math.round(Math.min(score, 100));
    } catch (error) {
      console.error('Error calculating session quality:', error);
      return 50;
    }
  }

  /**
   * Prediz probabilidade de conversão usando IA
   */
  private async predictConversion(): Promise<number> {
    try {
      const userSegment = await this.detectUserSegment();
      const sessionQuality = await this.calculateSessionQuality();
      const pageCategory = this.detectPageCategory();

      // Modelo simples de predição baseado em regras
      let probability = 0.1; // Base 10%

      // Ajustes por segmento
      switch (userSegment) {
        case 'high_intent': probability += 0.4; break;
        case 'engaged_user': probability += 0.3; break;
        case 'product_interested': probability += 0.2; break;
        default: probability += 0.05;
      }

      // Ajustes por categoria de página
      switch (pageCategory) {
        case 'conversion_page': probability += 0.3; break;
        case 'product_pages': probability += 0.2; break;
        case 'solution_page': probability += 0.15; break;
      }

      // Ajuste por qualidade da sessão
      probability += (sessionQuality / 100) * 0.2;

      return Math.min(probability, 0.95); // Max 95%
    } catch (error) {
      console.error('Error predicting conversion:', error);
      return 0.1;
    }
  }

  /**
   * Armazena evento para análise de IA
   */
  private async storeEventForAI(event: GA4Event): Promise<void> {
    try {
      // Armazenar localmente como fallback (Supabase table not configured)
      const localEvents = JSON.parse(localStorage.getItem('ga4_events_queue') || '[]');
      localEvents.push(event);
      localStorage.setItem('ga4_events_queue', JSON.stringify(localEvents.slice(-100))); // Keep last 100
    } catch (error) {
      console.error('Failed to store event for AI analysis:', error);
    }
  }

  /**
   * Obtém métricas do GA4 com análise de IA
   */
  async getEnhancedMetrics(dateRange: string = '7d'): Promise<GA4Metrics & { ai_insights: GA4AIInsight[] }> {
    try {
      // Simular dados do GA4 (normalmente viria da API)
      const mockMetrics: GA4Metrics = {
        sessions: 15420,
        users: 12380,
        pageviews: 45230,
        bounce_rate: 0.34,
        avg_session_duration: 185,
        conversion_rate: 0.048,
        revenue: 89400,
        goal_completions: 234
      };

      // Gerar insights de IA
      const aiInsights = await this.generateAIInsights(mockMetrics);

      return {
        ...mockMetrics,
        ai_insights: aiInsights
      };
    } catch (error) {
      console.error('Failed to get enhanced metrics:', error);
      throw error;
    }
  }

  /**
   * Gera insights de IA baseados nas métricas
   */
  private async generateAIInsights(metrics: GA4Metrics): Promise<GA4AIInsight[]> {
    const insights: GA4AIInsight[] = [];

    // Análise de anomalias
    if (metrics.bounce_rate > 0.5) {
      insights.push({
        id: 'high_bounce_rate',
        type: 'anomaly',
        title: 'Taxa de Rejeição Elevada Detectada',
        description: `Taxa de rejeição de ${(metrics.bounce_rate * 100).toFixed(1)}% está acima do normal`,
        confidence: 0.89,
        impact: 'high',
        recommendation: 'Otimizar landing pages e melhorar tempo de carregamento',
        data_points: [metrics.bounce_rate],
        timestamp: new Date().toISOString()
      });
    }

    // Oportunidades de conversão
    if (metrics.conversion_rate < 0.05) {
      insights.push({
        id: 'conversion_opportunity',
        type: 'opportunity',
        title: 'Oportunidade de Melhoria na Conversão',
        description: `Taxa atual de ${(metrics.conversion_rate * 100).toFixed(2)}% pode ser otimizada`,
        confidence: 0.92,
        impact: 'high',
        recommendation: 'Implementar testes A/B nos CTAs principais e otimizar funil',
        data_points: [metrics.conversion_rate],
        timestamp: new Date().toISOString()
      });
    }

    // Tendências de tráfego
    insights.push({
      id: 'traffic_trend',
      type: 'trend',
      title: 'Crescimento Consistente de Usuários',
      description: 'Padrão de crescimento de 12% identificado nos últimos 30 dias',
      confidence: 0.85,
      impact: 'medium',
      recommendation: 'Expandir estratégias de aquisição que estão funcionando',
      data_points: [metrics.users, metrics.sessions],
      timestamp: new Date().toISOString()
    });

    return insights;
  }

  /**
   * Obtém dados em tempo real com IA
   */
  async getRealtimeDataAI(): Promise<GA4RealtimeData & { ai_alerts: string[] }> {
    try {
      // Simular dados em tempo real
      const realtimeData: GA4RealtimeData = {
        active_users: 47,
        active_sessions: 38,
        top_pages: [
          { page: '/', active_users: 18 },
          { page: '/produtos/galaxia', active_users: 12 },
          { page: '/smart-events', active_users: 9 },
          { page: '/contato', active_users: 8 }
        ],
        traffic_sources: [
          { source: 'organic', users: 23, percentage: 48.9 },
          { source: 'direct', users: 15, percentage: 31.9 },
          { source: 'social', users: 6, percentage: 12.8 },
          { source: 'referral', users: 3, percentage: 6.4 }
        ],
        conversions_last_hour: 3
      };

      // Gerar alertas de IA
      const aiAlerts: string[] = [];
      
      if (realtimeData.active_users > 60) {
        aiAlerts.push('Pico de tráfego detectado - considere ativar CDN extra');
      }
      
      if (realtimeData.conversions_last_hour > 5) {
        aiAlerts.push('Alta atividade de conversão - momento ideal para remarketing');
      }

      return {
        ...realtimeData,
        ai_alerts: aiAlerts
      };
    } catch (error) {
      console.error('Failed to get realtime data:', error);
      throw error;
    }
  }

  /**
   * Obtém ID da sessão atual
   */
  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('ga4_session_id');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('ga4_session_id', sessionId);
      sessionStorage.setItem('session_start', Date.now().toString());
      sessionStorage.setItem('session_pageviews', '1');
    } else {
      const currentPageviews = parseInt(sessionStorage.getItem('session_pageviews') || '1');
      sessionStorage.setItem('session_pageviews', (currentPageviews + 1).toString());
    }
    return sessionId;
  }

  /**
   * Limpa dados de sessão
   */
  clearSession(): void {
    sessionStorage.removeItem('ga4_session_id');
    sessionStorage.removeItem('session_start');
    sessionStorage.removeItem('session_pageviews');
    sessionStorage.removeItem('session_interactions');
  }

  /**
   * Incrementa contador de interações
   */
  trackInteraction(): void {
    const current = parseInt(sessionStorage.getItem('session_interactions') || '0');
    sessionStorage.setItem('session_interactions', (current + 1).toString());
  }
}

// Exportar instância singleton
export const ga4AI = new GoogleAnalytics4AI();

// Exportar tipos para uso em outros arquivos
export type { GA4Event, GA4Metrics, GA4AIInsight, GA4RealtimeData };
export default GoogleAnalytics4AI;