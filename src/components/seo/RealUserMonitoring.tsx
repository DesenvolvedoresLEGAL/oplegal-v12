import { useEffect, useState } from 'react';

interface RUMMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToFirstByte: number;
  domContentLoaded: number;
  windowLoad: number;
  navigationTiming: PerformanceNavigationTiming | null;
  userAgent: string;
  connectionType: string;
  deviceMemory: number;
  hardwareConcurrency: number;
}

interface RealUserMonitoringProps {
  enabled?: boolean;
  sampleRate?: number;
  endpoint?: string;
  onMetricsCollected?: (metrics: RUMMetrics) => void;
}

const RealUserMonitoring: React.FC<RealUserMonitoringProps> = ({
  enabled = true,
  sampleRate = 0.1, // 10% sampling
  endpoint = '/api/analytics/rum',
  onMetricsCollected
}) => {
  const [metrics, setMetrics] = useState<Partial<RUMMetrics>>({});

  useEffect(() => {
    if (!enabled || Math.random() > sampleRate) return;

    let metricsData: Partial<RUMMetrics> = {
      userAgent: navigator.userAgent,
      connectionType: (navigator as any).connection?.effectiveType || 'unknown',
      deviceMemory: (navigator as any).deviceMemory || 0,
      hardwareConcurrency: navigator.hardwareConcurrency || 0
    };

    // Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metricsData.firstContentfulPaint = entry.startTime;
            }
            break;
          
          case 'largest-contentful-paint':
            metricsData.largestContentfulPaint = entry.startTime;
            break;
          
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              metricsData.cumulativeLayoutShift = 
                (metricsData.cumulativeLayoutShift || 0) + (entry as any).value;
            }
            break;
          
          case 'first-input':
            metricsData.firstInputDelay = (entry as any).processingStart - entry.startTime;
            break;
        }
      });
    });

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift', 'first-input'] });
    } catch (e) {
      console.warn('Performance Observer not fully supported');
    }

    // Navigation Timing
    const measureNavigationTiming = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        metricsData.navigationTiming = navigation;
        metricsData.timeToFirstByte = navigation.responseStart - navigation.requestStart;
        metricsData.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
        metricsData.windowLoad = navigation.loadEventEnd - navigation.fetchStart;
        metricsData.pageLoadTime = navigation.loadEventEnd - navigation.fetchStart;
      }
    };

    // Wait for page load to measure complete metrics
    if (document.readyState === 'complete') {
      measureNavigationTiming();
    } else {
      window.addEventListener('load', measureNavigationTiming);
    }

    // Collect metrics after 5 seconds to ensure all data is available
    const metricsTimer = setTimeout(() => {
      measureNavigationTiming();
      
      const finalMetrics = metricsData as RUMMetrics;
      setMetrics(finalMetrics);
      
      // Call callback if provided
      if (onMetricsCollected) {
        onMetricsCollected(finalMetrics);
      }

      // Send to analytics endpoint
      sendMetrics(finalMetrics);
      
      // Send performance data for structured data
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_timing', {
          name: window.location.pathname,
          value: Math.round(finalMetrics.pageLoadTime || 0)
        });
      }
    }, 5000);

    return () => {
      observer.disconnect();
      clearTimeout(metricsTimer);
      window.removeEventListener('load', measureNavigationTiming);
    };
  }, [enabled, sampleRate, endpoint, onMetricsCollected]);

  const sendMetrics = async (metricsData: RUMMetrics) => {
    try {
      const payload = {
        ...metricsData,
        timestamp: Date.now(),
        url: window.location.href,
        referrer: document.referrer,
        screenResolution: `${screen.width}x${screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`,
        sessionId: getSessionId()
      };

      // Use beacon API for reliability
      if (navigator.sendBeacon) {
        navigator.sendBeacon(endpoint, JSON.stringify(payload));
      } else {
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(console.warn);
      }
    } catch (error) {
      console.warn('Failed to send RUM metrics:', error);
    }
  };

  const getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('rum_session_id');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('rum_session_id', sessionId);
    }
    return sessionId;
  };

  const getRating = (metric: string, value: number): string => {
    const thresholds: Record<string, [number, number]> = {
      firstContentfulPaint: [1800, 3000],
      largestContentfulPaint: [2500, 4000],
      firstInputDelay: [100, 300],
      cumulativeLayoutShift: [0.1, 0.25],
      timeToFirstByte: [800, 1800]
    };

    const [good, poor] = thresholds[metric] || [0, 0];
    if (value <= good) return 'good';
    if (value <= poor) return 'needs-improvement';
    return 'poor';
  };

  // Performance Schema for search engines
  const performanceSchema = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "name": "Real User Monitoring Data",
    "description": "Performance metrics collected from real users",
    "mainEntity": {
      "@type": "DataSet",
      "name": "Core Web Vitals",
      "description": "Real user performance metrics",
      "distribution": Object.entries(metrics).map(([key, value]) => ({
        "@type": "DataDownload",
        "name": key,
        "contentSize": value,
        "encodingFormat": "application/json"
      }))
    }
  };

  if (!enabled) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(performanceSchema) }}
      />
      
      {/* Hidden performance data for crawlers */}
      <div className="sr-only" aria-hidden="true">
        <section itemScope itemType="https://schema.org/WebPageElement">
          <h2 itemProp="name">Performance Metrics (Real User Monitoring)</h2>
          <div itemProp="description">
            Dados coletados de usuários reais para otimização contínua da experiência
          </div>
          
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} itemScope itemType="https://schema.org/PropertyValue">
              <span itemProp="name">{key}</span>
              <span itemProp="value">{typeof value === 'object' ? JSON.stringify(value) : String(value)}</span>
              {typeof value === 'number' && (
                <span itemProp="additionalProperty">
                  Rating: {getRating(key, value)}
                </span>
              )}
            </div>
          ))}
          
          <div itemProp="about">
            <p>
              Monitoramento em tempo real de Core Web Vitals: LCP, FID, CLS, FCP, TTFB.
              Dados coletados com amostragem de {sampleRate * 100}% para otimização contínua.
            </p>
            <p>
              Métricas enviadas via Beacon API para máxima confiabilidade.
              Session tracking para análise de jornada do usuário.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RealUserMonitoring;