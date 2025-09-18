interface SearchConsoleCredentials {
  client_id: string;
  client_secret: string;
  refresh_token: string;
  access_token?: string;
}

interface SearchQuery {
  keys?: string[];
  query: string;
  page?: string;
  country?: string;
  device?: 'DESKTOP' | 'MOBILE' | 'TABLET';
  searchType?: 'WEB' | 'IMAGE' | 'VIDEO';
}

interface SearchAnalyticsRow {
  keys?: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface SearchConsoleMetrics {
  total_clicks: number;
  total_impressions: number;
  avg_ctr: number;
  avg_position: number;
  rows: SearchAnalyticsRow[];
}

interface URLInspectionResult {
  inspectionResult: {
    indexStatusResult: {
      verdict: 'PASS' | 'FAIL' | 'NEUTRAL';
      coverageState: string;
      robotsTxtState: string;
      indexingState: string;
      lastCrawlTime: string;
    };
    mobileFriendlyResult: {
      verdict: 'MOBILE_FRIENDLY' | 'NOT_MOBILE_FRIENDLY';
      mobileFriendlyIssues: string[];
    };
    richResultsResult: {
      verdict: 'PASS' | 'FAIL' | 'NEUTRAL';
      detectedItems: Array<{
        richResultType: string;
        items: number;
      }>;
    };
  };
}

interface SitemapStatus {
  path: string;
  lastSubmitted: string;
  isPending: boolean;
  isSitemapsIndex: boolean;
  type: 'SITEMAP' | 'RSS_FEED';
  errors: number;
  warnings: number;
}

interface SearchConsoleAIInsight {
  id: string;
  type: 'keyword_opportunity' | 'technical_issue' | 'content_gap' | 'performance_decline';
  title: string;
  description: string;
  confidence: number;
  impact: 'high' | 'medium' | 'low';
  recommendation: string;
  affected_pages: string[];
  keywords: string[];
  estimated_traffic_gain: number;
  priority: number;
}

class SearchConsoleAPI {
  private credentials: SearchConsoleCredentials | null = null;
  private siteUrl: string = '';
  private baseUrl = 'https://searchconsole.googleapis.com/v1';

  constructor(siteUrl?: string) {
    this.siteUrl = siteUrl || 'https://legal.eng.br/';
  }

  /**
   * Inicializa a API com credenciais
   */
  async initialize(credentials: SearchConsoleCredentials): Promise<void> {
    this.credentials = credentials;
    await this.refreshAccessToken();
    console.log('Search Console API initialized');
  }

  /**
   * Renova o access token usando refresh token
   */
  private async refreshAccessToken(): Promise<void> {
    if (!this.credentials) throw new Error('Credentials not set');

    try {
      const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: this.credentials.client_id,
          client_secret: this.credentials.client_secret,
          refresh_token: this.credentials.refresh_token,
          grant_type: 'refresh_token'
        })
      });

      const data = await response.json();
      if (data.access_token) {
        this.credentials.access_token = data.access_token;
      }
    } catch (error) {
      console.error('Failed to refresh access token:', error);
      throw error;
    }
  }

  /**
   * Executa query na Search Console com enriquecimento de IA
   */
  async querySearchAnalytics(
    startDate: string,
    endDate: string,
    dimensions: string[] = ['query'],
    filters: SearchQuery[] = []
  ): Promise<SearchConsoleMetrics & { ai_insights: SearchConsoleAIInsight[] }> {
    try {
      if (!this.credentials?.access_token) {
        await this.refreshAccessToken();
      }

      const requestBody = {
        startDate,
        endDate,
        dimensions,
        rowLimit: 1000,
        startRow: 0,
        dimensionFilterGroups: filters.length > 0 ? [{
          filters: filters.map(f => ({
            dimension: 'query',
            operator: 'contains',
            expression: f.query
          }))
        }] : undefined
      };

      // Simular resposta (normalmente faria chamada real para API)
      const mockResponse = await this.simulateSearchConsoleResponse(requestBody);
      
      // Gerar insights de IA
      const aiInsights = await this.generateSearchConsoleAI(mockResponse);

      return {
        ...mockResponse,
        ai_insights: aiInsights
      };
    } catch (error) {
      console.error('Failed to query Search Analytics:', error);
      throw error;
    }
  }

  /**
   * Simula resposta da Search Console (para demo)
   */
  private async simulateSearchConsoleResponse(requestBody: any): Promise<SearchConsoleMetrics> {
    // Mock data baseado em padrões reais
    const mockData: SearchConsoleMetrics = {
      total_clicks: 4567,
      total_impressions: 89234,
      avg_ctr: 0.051,
      avg_position: 18.7,
      rows: [
        {
          keys: ['automação empresarial'],
          clicks: 234,
          impressions: 3456,
          ctr: 0.067,
          position: 8.2
        },
        {
          keys: ['gestão de eventos'],
          clicks: 189,
          impressions: 2890,
          ctr: 0.065,
          position: 12.4
        },
        {
          keys: ['inteligência artificial negócios'],
          clicks: 156,
          impressions: 1967,
          ctr: 0.079,
          position: 6.8
        },
        {
          keys: ['smart events tecnologia'],
          clicks: 134,
          impressions: 1678,
          ctr: 0.080,
          position: 11.3
        },
        {
          keys: ['soluções empresariais'],
          clicks: 112,
          impressions: 2345,
          ctr: 0.048,
          position: 15.7
        },
        {
          keys: ['legal techco'],
          clicks: 89,
          impressions: 890,
          ctr: 0.100,
          position: 3.2
        }
      ]
    };

    return mockData;
  }

  /**
   * Gera insights de IA baseados nos dados da Search Console
   */
  private async generateSearchConsoleAI(metrics: SearchConsoleMetrics): Promise<SearchConsoleAIInsight[]> {
    const insights: SearchConsoleAIInsight[] = [];

    // Analisar oportunidades de keywords
    const highImpressionLowCTR = metrics.rows.filter(row => 
      row.impressions > 1000 && row.ctr < 0.03
    );

    if (highImpressionLowCTR.length > 0) {
      insights.push({
        id: 'low_ctr_opportunity',
        type: 'keyword_opportunity',
        title: 'Oportunidade de CTR - Keywords com Alta Impressão',
        description: `${highImpressionLowCTR.length} keywords com alto volume de impressões mas CTR baixo`,
        confidence: 0.89,
        impact: 'high',
        recommendation: 'Otimizar title tags e meta descriptions para melhorar CTR',
        affected_pages: ['/produtos', '/smart-events', '/'],
        keywords: highImpressionLowCTR.map(row => row.keys?.[0] || '').filter(Boolean),
        estimated_traffic_gain: highImpressionLowCTR.reduce((sum, row) => 
          sum + (row.impressions * 0.02), 0), // Estimate 2% CTR improvement
        priority: 95
      });
    }

    // Analisar posições próximas da primeira página
    const nearFirstPage = metrics.rows.filter(row => 
      row.position > 10 && row.position <= 15 && row.impressions > 500
    );

    if (nearFirstPage.length > 0) {
      insights.push({
        id: 'first_page_opportunity',
        type: 'keyword_opportunity',
        title: 'Oportunidade Primeira Página',
        description: `${nearFirstPage.length} keywords próximas da primeira página do Google`,
        confidence: 0.82,
        impact: 'high',
        recommendation: 'Focar em otimização de conteúdo e link building para essas keywords',
        affected_pages: ['/universo/tectec', '/produtos/galaxia'],
        keywords: nearFirstPage.map(row => row.keys?.[0] || '').filter(Boolean),
        estimated_traffic_gain: nearFirstPage.reduce((sum, row) => 
          sum + (row.impressions * 0.15), 0), // Estimate 15% traffic gain from first page
        priority: 88
      });
    }

    // Analisar declínio de performance
    if (metrics.avg_position > 20) {
      insights.push({
        id: 'position_decline',
        type: 'performance_decline',
        title: 'Declínio na Posição Média Detectado',
        description: `Posição média de ${metrics.avg_position.toFixed(1)} indica possível problema técnico`,
        confidence: 0.75,
        impact: 'medium',
        recommendation: 'Verificar Core Web Vitals, velocidade do site e problemas de indexação',
        affected_pages: ['site-wide'],
        keywords: [],
        estimated_traffic_gain: 0,
        priority: 70
      });
    }

    // Analisar gaps de conteúdo
    const lowImpressionHighPosition = metrics.rows.filter(row => 
      row.position <= 5 && row.impressions < 100
    );

    if (lowImpressionHighPosition.length > 0) {
      insights.push({
        id: 'content_gap',
        type: 'content_gap',
        title: 'Gap de Conteúdo - Keywords Bem Posicionadas',
        description: 'Keywords bem posicionadas mas com baixo volume podem indicar nichos inexplorados',
        confidence: 0.71,
        impact: 'medium',
        recommendation: 'Expandir conteúdo relacionado a essas keywords para capturar mais tráfego',
        affected_pages: ['/universo/tectec'],
        keywords: lowImpressionHighPosition.map(row => row.keys?.[0] || '').filter(Boolean),
        estimated_traffic_gain: 500,
        priority: 60
      });
    }

    return insights.sort((a, b) => b.priority - a.priority);
  }

  /**
   * Inspeciona URL específica
   */
  async inspectURL(url: string): Promise<URLInspectionResult> {
    try {
      if (!this.credentials?.access_token) {
        await this.refreshAccessToken();
      }

      // Simular inspeção de URL (normalmente faria chamada real)
      const mockResult: URLInspectionResult = {
        inspectionResult: {
          indexStatusResult: {
            verdict: 'PASS',
            coverageState: 'Indexed',
            robotsTxtState: 'ALLOWED',
            indexingState: 'INDEXING_ALLOWED',
            lastCrawlTime: new Date().toISOString()
          },
          mobileFriendlyResult: {
            verdict: 'MOBILE_FRIENDLY',
            mobileFriendlyIssues: []
          },
          richResultsResult: {
            verdict: 'PASS',
            detectedItems: [
              {
                richResultType: 'Article',
                items: 1
              },
              {
                richResultType: 'Organization',
                items: 1
              }
            ]
          }
        }
      };

      return mockResult;
    } catch (error) {
      console.error('Failed to inspect URL:', error);
      throw error;
    }
  }

  /**
   * Obtém status dos sitemaps
   */
  async getSitemaps(): Promise<SitemapStatus[]> {
    try {
      if (!this.credentials?.access_token) {
        await this.refreshAccessToken();
      }

      // Simular dados de sitemap
      const mockSitemaps: SitemapStatus[] = [
        {
          path: '/sitemap.xml',
          lastSubmitted: '2024-01-15T10:30:00Z',
          isPending: false,
          isSitemapsIndex: true,
          type: 'SITEMAP',
          errors: 0,
          warnings: 2
        },
        {
          path: '/blog-sitemap.xml',
          lastSubmitted: '2024-01-14T15:20:00Z',
          isPending: false,
          isSitemapsIndex: false,
          type: 'SITEMAP',
          errors: 0,
          warnings: 0
        }
      ];

      return mockSitemaps;
    } catch (error) {
      console.error('Failed to get sitemaps:', error);
      throw error;
    }
  }

  /**
   * Submete sitemap
   */
  async submitSitemap(sitemapUrl: string): Promise<boolean> {
    try {
      if (!this.credentials?.access_token) {
        await this.refreshAccessToken();
      }

      const response = await fetch(
        `${this.baseUrl}/sites/${encodeURIComponent(this.siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${this.credentials.access_token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.ok;
    } catch (error) {
      console.error('Failed to submit sitemap:', error);
      return false;
    }
  }

  /**
   * Obtém dados de Core Web Vitals
   */
  async getCoreWebVitals(): Promise<{
    mobile: { good: number; needs_improvement: number; poor: number };
    desktop: { good: number; needs_improvement: number; poor: number };
  }> {
    try {
      // Simular dados de Core Web Vitals
      return {
        mobile: {
          good: 78,
          needs_improvement: 15,
          poor: 7
        },
        desktop: {
          good: 92,
          needs_improvement: 6,
          poor: 2
        }
      };
    } catch (error) {
      console.error('Failed to get Core Web Vitals:', error);
      throw error;
    }
  }

  /**
   * Obtém keywords com maior potencial baseado em IA
   */
  async getKeywordOpportunities(): Promise<{
    keyword: string;
    current_position: number;
    potential_position: number;
    current_traffic: number;
    potential_traffic: number;
    difficulty: number;
    opportunity_score: number;
  }[]> {
    try {
      // Simular análise de oportunidades
      return [
        {
          keyword: 'automação empresarial ia',
          current_position: 12.5,
          potential_position: 5.2,
          current_traffic: 145,
          potential_traffic: 890,
          difficulty: 45,
          opportunity_score: 87
        },
        {
          keyword: 'gestão eventos inteligente',
          current_position: 8.9,
          potential_position: 3.1,
          current_traffic: 234,
          potential_traffic: 1200,
          difficulty: 38,
          opportunity_score: 92
        },
        {
          keyword: 'smart events plataforma',
          current_position: 15.7,
          potential_position: 7.3,
          current_traffic: 89,
          potential_traffic: 456,
          difficulty: 42,
          opportunity_score: 76
        }
      ].sort((a, b) => b.opportunity_score - a.opportunity_score);
    } catch (error) {
      console.error('Failed to get keyword opportunities:', error);
      throw error;
    }
  }
}

// Exportar instância
export const searchConsoleAPI = new SearchConsoleAPI();

// Exportar tipos
export type { 
  SearchQuery, 
  SearchAnalyticsRow, 
  SearchConsoleMetrics, 
  URLInspectionResult,
  SitemapStatus,
  SearchConsoleAIInsight
};

export default SearchConsoleAPI;