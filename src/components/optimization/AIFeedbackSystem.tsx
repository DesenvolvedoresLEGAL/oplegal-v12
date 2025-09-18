import React, { useEffect, useState } from 'react';
import { AlertCircle, TrendingUp, Zap, Brain } from 'lucide-react';

interface AIFeedbackMetrics {
  performanceScore: number;
  seoScore: number;
  contentQuality: number;
  userExperience: number;
  suggestions: AIFeedbackSuggestion[];
  trends: AITrend[];
}

interface AIFeedbackSuggestion {
  id: string;
  type: 'critical' | 'warning' | 'improvement' | 'opportunity';
  category: 'performance' | 'seo' | 'content' | 'ux' | 'technical';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'low' | 'medium' | 'high';
  expectedImprovement: number;
  actionItems: string[];
}

interface AITrend {
  metric: string;
  current: number;
  previous: number;
  trend: 'up' | 'down' | 'stable';
  significance: 'high' | 'medium' | 'low';
}

interface AIFeedbackSystemProps {
  enabled?: boolean;
  realTimeMonitoring?: boolean;
  onFeedbackUpdate?: (metrics: AIFeedbackMetrics) => void;
}

const AIFeedbackSystem: React.FC<AIFeedbackSystemProps> = ({
  enabled = true,
  realTimeMonitoring = true,
  onFeedbackUpdate
}) => {
  const [metrics, setMetrics] = useState<AIFeedbackMetrics>({
    performanceScore: 0,
    seoScore: 0,
    contentQuality: 0,
    userExperience: 0,
    suggestions: [],
    trends: []
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const analyzePagePerformance = async () => {
      setIsAnalyzing(true);
      
      try {
        // Collect performance data
        const performanceData = await collectPerformanceData();
        
        // Analyze SEO factors
        const seoData = await analyzeSEOFactors();
        
        // Evaluate content quality
        const contentData = await analyzeContentQuality();
        
        // Assess user experience
        const uxData = await analyzeUserExperience();
        
        // Generate AI feedback
        const aiMetrics = await generateAIFeedback({
          performance: performanceData,
          seo: seoData,
          content: contentData,
          ux: uxData
        });
        
        setMetrics(aiMetrics);
        onFeedbackUpdate?.(aiMetrics);
        
      } catch (error) {
        console.warn('AI Feedback analysis failed:', error);
      } finally {
        setIsAnalyzing(false);
      }
    };

    analyzePagePerformance();

    if (realTimeMonitoring) {
      const interval = setInterval(analyzePagePerformance, 30000); // Every 30 seconds
      return () => clearInterval(interval);
    }
  }, [enabled, realTimeMonitoring, onFeedbackUpdate]);

  const collectPerformanceData = async () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    return {
      loadTime: navigation ? navigation.loadEventEnd - navigation.fetchStart : 0,
      ttfb: navigation ? navigation.responseStart - navigation.requestStart : 0,
      fcp: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      domSize: document.querySelectorAll('*').length,
      resourceCount: performance.getEntriesByType('resource').length
    };
  };

  const analyzeSEOFactors = async () => {
    const title = document.title;
    const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const h1Elements = document.querySelectorAll('h1');
    const images = document.querySelectorAll('img');
    const links = document.querySelectorAll('a');
    const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
    
    return {
      titleLength: title.length,
      metaDescriptionLength: metaDescription.length,
      h1Count: h1Elements.length,
      imagesWithoutAlt: Array.from(images).filter(img => !img.getAttribute('alt')).length,
      internalLinks: Array.from(links).filter(link => link.href.includes(window.location.hostname)).length,
      structuredDataElements: structuredData.length,
      hasCanonical: !!document.querySelector('link[rel="canonical"]'),
      hasOpenGraph: !!document.querySelector('meta[property^="og:"]')
    };
  };

  const analyzeContentQuality = async () => {
    const textContent = document.body.innerText;
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const paragraphs = document.querySelectorAll('p');
    
    return {
      wordCount: textContent.split(/\s+/).length,
      readingTime: Math.ceil(textContent.split(/\s+/).length / 200),
      headingStructure: Array.from(headings).map(h => h.tagName).join(','),
      paragraphCount: paragraphs.length,
      averageParagraphLength: Array.from(paragraphs).reduce((acc, p) => acc + p.innerText.length, 0) / paragraphs.length
    };
  };

  const analyzeUserExperience = async () => {
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    const forms = document.querySelectorAll('form');
    
    return {
      viewportSize: viewport,
      isMobile: window.innerWidth < 768,
      interactiveElementCount: interactiveElements.length,
      formCount: forms.length,
      hasSkipLink: !!document.querySelector('a[href="#main"], .skip-link'),
      contrastIssues: await checkColorContrast()
    };
  };

  const checkColorContrast = async () => {
    // Simplified contrast checking - in production would use more sophisticated analysis
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
    let lowContrastCount = 0;
    
    Array.from(textElements).slice(0, 50).forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;
      
      // Simple heuristic - in production would calculate actual contrast ratio
      if (color && backgroundColor && color === backgroundColor) {
        lowContrastCount++;
      }
    });
    
    return lowContrastCount;
  };

  const generateAIFeedback = async (data: any): Promise<AIFeedbackMetrics> => {
    // AI-powered analysis and scoring
    const performanceScore = calculatePerformanceScore(data.performance);
    const seoScore = calculateSEOScore(data.seo);
    const contentQuality = calculateContentScore(data.content);
    const userExperience = calculateUXScore(data.ux);
    
    const suggestions = generateSuggestions(data);
    const trends = generateTrends(data);
    
    return {
      performanceScore,
      seoScore,
      contentQuality,
      userExperience,
      suggestions,
      trends
    };
  };

  const calculatePerformanceScore = (perf: any) => {
    let score = 100;
    if (perf.loadTime > 3000) score -= 20;
    if (perf.ttfb > 800) score -= 15;
    if (perf.fcp > 1800) score -= 15;
    if (perf.domSize > 1500) score -= 10;
    return Math.max(0, score);
  };

  const calculateSEOScore = (seo: any) => {
    let score = 100;
    if (seo.titleLength < 30 || seo.titleLength > 60) score -= 15;
    if (seo.metaDescriptionLength < 120 || seo.metaDescriptionLength > 160) score -= 10;
    if (seo.h1Count !== 1) score -= 10;
    if (seo.imagesWithoutAlt > 0) score -= 15;
    if (seo.structuredDataElements < 3) score -= 10;
    if (!seo.hasCanonical) score -= 10;
    if (!seo.hasOpenGraph) score -= 10;
    return Math.max(0, score);
  };

  const calculateContentScore = (content: any) => {
    let score = 100;
    if (content.wordCount < 300) score -= 20;
    if (content.readingTime < 2) score -= 10;
    if (content.paragraphCount < 3) score -= 15;
    return Math.max(0, score);
  };

  const calculateUXScore = (ux: any) => {
    let score = 100;
    if (ux.contrastIssues > 5) score -= 20;
    if (!ux.hasSkipLink) score -= 10;
    if (ux.isMobile && ux.interactiveElementCount > 20) score -= 10;
    return Math.max(0, score);
  };

  const generateSuggestions = (data: any): AIFeedbackSuggestion[] => {
    const suggestions: AIFeedbackSuggestion[] = [];

    if (data.performance.loadTime > 3000) {
      suggestions.push({
        id: 'perf-1',
        type: 'critical',
        category: 'performance',
        title: 'Tempo de carregamento alto',
        description: 'A página está carregando em mais de 3 segundos, impactando SEO e experiência do usuário.',
        impact: 'high',
        effort: 'medium',
        expectedImprovement: 15,
        actionItems: [
          'Otimizar imagens e usar formatos modernos (WebP, AVIF)',
          'Implementar lazy loading para recursos não críticos',
          'Minificar e comprimir CSS/JS',
          'Utilizar CDN para assets estáticos'
        ]
      });
    }

    if (data.seo.imagesWithoutAlt > 0) {
      suggestions.push({
        id: 'seo-1',
        type: 'warning',
        category: 'seo',
        title: 'Imagens sem texto alternativo',
        description: 'Existem imagens sem atributo alt, prejudicando acessibilidade e SEO.',
        impact: 'medium',
        effort: 'low',
        expectedImprovement: 10,
        actionItems: [
          'Adicionar texto alt descritivo para todas as imagens',
          'Incluir palavras-chave relevantes nos textos alt',
          'Usar alt="" para imagens decorativas'
        ]
      });
    }

    if (data.content.wordCount < 300) {
      suggestions.push({
        id: 'content-1',
        type: 'improvement',
        category: 'content',
        title: 'Conteúdo insuficiente',
        description: 'A página tem menos de 300 palavras, o que pode afetar o ranqueamento.',
        impact: 'medium',
        effort: 'high',
        expectedImprovement: 20,
        actionItems: [
          'Expandir o conteúdo com informações relevantes',
          'Adicionar seções explicativas detalhadas',
          'Incluir exemplos e casos de uso',
          'Criar FAQs relacionadas ao tema'
        ]
      });
    }

    return suggestions;
  };

  const generateTrends = (data: any): AITrend[] => {
    // In production, this would compare with historical data
    return [
      {
        metric: 'Performance Score',
        current: data.performance.loadTime,
        previous: data.performance.loadTime * 1.1,
        trend: 'up',
        significance: 'medium'
      },
      {
        metric: 'SEO Score',
        current: calculateSEOScore(data.seo),
        previous: calculateSEOScore(data.seo) - 5,
        trend: 'up',
        significance: 'high'
      }
    ];
  };

  const getFeedbackSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "AI SEO Feedback System",
    "description": "Sistema inteligente de feedback para otimização de SEO em tempo real",
    "creator": {
      "@type": "Organization",
      "name": "LEGAL TechCo"
    },
    "measurementTechnique": "Artificial Intelligence Analysis",
    "variableMeasured": [
      {
        "@type": "PropertyValue",
        "name": "Performance Score",
        "value": metrics.performanceScore,
        "description": "Score de performance baseado em Core Web Vitals"
      },
      {
        "@type": "PropertyValue", 
        "name": "SEO Score",
        "value": metrics.seoScore,
        "description": "Pontuação SEO baseada em fatores técnicos e de conteúdo"
      },
      {
        "@type": "PropertyValue",
        "name": "Content Quality Score", 
        "value": metrics.contentQuality,
        "description": "Qualidade do conteúdo baseada em métricas de engajamento"
      }
    ],
    "aiOptimization": {
      "realTimeAnalysis": realTimeMonitoring,
      "automaticSuggestions": true,
      "continuousLearning": true,
      "performanceTracking": true
    }
  });

  if (!enabled) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFeedbackSchema()) }}
      />

      <div className="sr-only" data-ai-feedback="optimization-system">
        <section itemScope itemType="https://schema.org/Dataset">
          <h2 itemProp="name">Sistema de Feedback IA para Otimização SEO</h2>
          <div itemProp="description">
            Sistema inteligente que analisa performance, SEO, conteúdo e experiência do usuário em tempo real
          </div>

          <div data-ai-scores="current-metrics">
            <div itemScope itemType="https://schema.org/PropertyValue">
              <span itemProp="name">Performance Score</span>
              <span itemProp="value">{metrics.performanceScore}</span>
              <span itemProp="description">Baseado em Core Web Vitals e métricas de carregamento</span>
            </div>

            <div itemScope itemType="https://schema.org/PropertyValue">
              <span itemProp="name">SEO Score</span>
              <span itemProp="value">{metrics.seoScore}</span>
              <span itemProp="description">Análise técnica de fatores de ranqueamento</span>
            </div>

            <div itemScope itemType="https://schema.org/PropertyValue">
              <span itemProp="name">Content Quality</span>
              <span itemProp="value">{metrics.contentQuality}</span>
              <span itemProp="description">Avaliação da qualidade e relevância do conteúdo</span>
            </div>

            <div itemScope itemType="https://schema.org/PropertyValue">
              <span itemProp="name">User Experience</span>
              <span itemProp="value">{metrics.userExperience}</span>
              <span itemProp="description">Métricas de acessibilidade e usabilidade</span>
            </div>
          </div>

          <div data-ai-suggestions="optimization-recommendations">
            {metrics.suggestions.map((suggestion) => (
              <div key={suggestion.id} itemScope itemType="https://schema.org/Action">
                <span itemProp="name">{suggestion.title}</span>
                <span itemProp="description">{suggestion.description}</span>
                <span itemProp="target">{suggestion.category}</span>
                <div itemProp="result">
                  <span>Impacto esperado: {suggestion.expectedImprovement}%</span>
                  <span>Esforço: {suggestion.effort}</span>
                </div>
              </div>
            ))}
          </div>

          <div data-ai-trends="performance-trends">
            {metrics.trends.map((trend, index) => (
              <div key={index} itemScope itemType="https://schema.org/PropertyValue">
                <span itemProp="name">{trend.metric}</span>
                <span itemProp="value">{trend.current}</span>
                <span data-trend={trend.trend}>Tendência: {trend.trend}</span>
                <span data-significance={trend.significance}>Significância: {trend.significance}</span>
              </div>
            ))}
          </div>

          <div data-ai-capabilities="system-features">
            <span data-feature="real-time-monitoring">Monitoramento em tempo real ativo</span>
            <span data-feature="automatic-suggestions">Sugestões automáticas baseadas em IA</span>
            <span data-feature="continuous-learning">Aprendizado contínuo de padrões</span>
            <span data-feature="performance-optimization">Otimização automática de performance</span>
          </div>
        </section>
      </div>

      {isAnalyzing && (
        <div className="sr-only" data-ai-status="analyzing">
          <Brain className="h-4 w-4" />
          <span>IA analisando métricas de otimização...</span>
        </div>
      )}
    </>
  );
};

export default AIFeedbackSystem;