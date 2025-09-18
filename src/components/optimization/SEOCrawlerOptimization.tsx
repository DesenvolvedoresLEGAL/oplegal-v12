import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
}

interface SEOCrawlerOptimizationProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

const SEOCrawlerOptimization: React.FC<SEOCrawlerOptimizationProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Otimizações específicas para crawlers de IA
    optimizeForAICrawlers();
    
    // Monitorar métricas de performance
    measurePerformance();
    
    // Configurar observadores de performance
    setupPerformanceObservers();
    
    return () => {
      // Cleanup
      cleanupOptimizations();
    };
  }, []);

  const optimizeForAICrawlers = () => {
    setIsOptimizing(true);
    
    // 1. Otimizar carregamento de recursos críticos
    preloadCriticalResources();
    
    // 2. Implementar lazy loading inteligente
    implementIntelligentLazyLoading();
    
    // 3. Otimizar estrutura DOM para crawlers
    optimizeDOMStructure();
    
    // 4. Configurar cache headers otimizados
    configureCacheHeaders();
    
    // 5. Implementar service worker para crawlers
    registerCrawlerServiceWorker();
    
    setIsOptimizing(false);
  };

  const preloadCriticalResources = () => {
    // Preload de recursos críticos para IA
    const criticalResources = [
      { href: '/api/ai-data-feed', as: 'fetch', type: 'application/json' },
      { href: '/api/knowledge-base', as: 'fetch', type: 'application/json' },
      { href: '/sitemap.xml', as: 'document' },
      { href: '/robots.txt', as: 'document' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) {
        link.type = resource.type;
      }
      
      // Headers específicos para crawlers de IA
      link.setAttribute('data-ai-priority', 'high');
      link.setAttribute('data-crawler-friendly', 'true');
      
      document.head.appendChild(link);
    });
  };

  const implementIntelligentLazyLoading = () => {
    // Detectar se é um crawler de IA
    const isAICrawler = detectAICrawler();
    
    if (isAICrawler) {
      // Para crawlers de IA, carregar conteúdo importante imediatamente
      const lazyElements = document.querySelectorAll('[data-ai-important="true"]');
      lazyElements.forEach(element => {
        element.removeAttribute('loading');
        element.removeAttribute('data-lazy');
      });
    } else {
      // Para usuários normais, manter lazy loading
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        observer.observe(img);
      });
    }
  };

  const detectAICrawler = (): boolean => {
    const userAgent = navigator.userAgent.toLowerCase();
    const aiCrawlers = [
      'googlebot',
      'bingbot',
      'slurp',
      'facebookexternalhit',
      'twitterbot',
      'linkedinbot',
      'whatsapp',
      'telegram',
      'claude',
      'gpt',
      'openai',
      'anthropic'
    ];
    
    return aiCrawlers.some(crawler => userAgent.includes(crawler));
  };

  const optimizeDOMStructure = () => {
    // Adicionar estrutura semântica para crawlers
    if (!document.querySelector('[itemscope]')) {
      document.body.setAttribute('itemscope', '');
      document.body.setAttribute('itemtype', 'https://schema.org/WebPage');
    }

    // Otimizar headings para hierarquia clara
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
      if (!heading.id) {
        const text = heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || `heading-${index}`;
        heading.id = text;
      }
      
      // Adicionar metadados para IA
      heading.setAttribute('data-ai-heading', 'true');
      heading.setAttribute('data-hierarchy-level', heading.tagName.toLowerCase());
    });

    // Marcar conteúdo principal para IA
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.setAttribute('data-ai-main-content', 'true');
      mainContent.setAttribute('role', 'main');
    }
  };

  const configureCacheHeaders = () => {
    // Configurar meta tags para cache otimizado
    const cacheHeaders = [
      { name: 'Cache-Control', content: 'public, max-age=3600, stale-while-revalidate=86400' },
      { name: 'X-AI-Crawler-Friendly', content: 'true' },
      { name: 'X-Content-Freshness', content: new Date().toISOString() }
    ];

    cacheHeaders.forEach(header => {
      let metaTag = document.querySelector(`meta[name="${header.name}"]`) as HTMLMetaElement;
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = header.name;
        document.head.appendChild(metaTag);
      }
      metaTag.content = header.content;
    });
  };

  const registerCrawlerServiceWorker = async () => {
    if ('serviceWorker' in navigator && !detectAICrawler()) {
      try {
        const registration = await navigator.serviceWorker.register('/sw-crawler-optimizer.js');
        console.log('Crawler optimization service worker registered:', registration);
      } catch (error) {
        console.log('Service worker registration failed:', error);
      }
    }
  };

  const measurePerformance = () => {
    // Usar Performance Observer para métricas Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        setMetrics(prev => ({
          ...prev,
          lcp: lastEntry.startTime
        } as PerformanceMetrics));
      });
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Fallback para navegadores que não suportam
        console.log('LCP observation not supported');
      }

      // First Input Delay
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          setMetrics(prev => ({
            ...prev,
            fid: entry.processingStart - entry.startTime
          } as PerformanceMetrics));
        });
      });
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.log('FID observation not supported');
      }

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({
              ...prev,
              cls: clsValue
            } as PerformanceMetrics));
          }
        });
      });
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.log('CLS observation not supported');
      }
    }

    // Métricas básicas de timing
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      setMetrics(prev => ({
        ...prev,
        fcp: navigation.responseStart - navigation.requestStart,
        ttfb: navigation.responseStart - navigation.requestStart
      } as PerformanceMetrics));
    });
  };

  const setupPerformanceObservers = () => {
    // Observer para mudanças no DOM que possam afetar crawlers
    const domObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              
              // Otimizar novos elementos para IA
              if (element.tagName === 'IMG') {
                element.setAttribute('data-ai-important', 'true');
                
                // Adicionar alt text se não existir
                if (!element.getAttribute('alt')) {
                  element.setAttribute('alt', 'LEGAL TechCo content image');
                }
              }
              
              // Adicionar estrutura semântica a novos headings
              if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(element.tagName)) {
                element.setAttribute('data-ai-heading', 'true');
              }
            }
          });
        }
      });
    });

    domObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  };

  const cleanupOptimizations = () => {
    // Remover observers e listeners
    const preloadLinks = document.querySelectorAll('link[data-crawler-friendly="true"]');
    preloadLinks.forEach(link => link.remove());
  };

  // Notificar métricas para componente pai
  useEffect(() => {
    if (metrics && onMetricsUpdate) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  // Componente invisível - apenas para otimizações
  return (
    <>
      {/* Metadados invisíveis para crawlers de IA */}
      <div className="sr-only" data-ai-optimization="performance-data">
        <span data-ai-field="optimization-status">
          {isOptimizing ? 'Optimizing for AI crawlers' : 'AI crawler optimization complete'}
        </span>
        {metrics && (
          <div data-ai-field="performance-metrics">
            <span data-metric="lcp">{metrics.lcp || 0}ms</span>
            <span data-metric="fid">{metrics.fid || 0}ms</span>
            <span data-metric="cls">{metrics.cls || 0}</span>
            <span data-metric="fcp">{metrics.fcp || 0}ms</span>
            <span data-metric="ttfb">{metrics.ttfb || 0}ms</span>
          </div>
        )}
      </div>
      
      {/* Schema para performance metrics */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPageElement",
            "name": "SEO Crawler Optimization",
            "description": "Performance optimization specifically designed for AI crawlers and search engines",
            "isPartOf": {
              "@type": "WebPage",
              "url": window.location.href
            },
            "additionalProperty": metrics ? [
              {
                "@type": "PropertyValue",
                "name": "Largest Contentful Paint",
                "value": `${metrics.lcp || 0}ms`
              },
              {
                "@type": "PropertyValue", 
                "name": "First Input Delay",
                "value": `${metrics.fid || 0}ms`
              },
              {
                "@type": "PropertyValue",
                "name": "Cumulative Layout Shift", 
                "value": metrics.cls?.toString() || "0"
              }
            ] : []
          })
        }}
      />
    </>
  );
};

export default SEOCrawlerOptimization;