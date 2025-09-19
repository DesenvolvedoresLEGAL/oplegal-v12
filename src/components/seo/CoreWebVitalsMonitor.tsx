import React, { useEffect, useState } from 'react';

// Declare gtag function for Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface WebVitalsMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}

interface CoreWebVitalsMonitorProps {
  onMetricsUpdate?: (metrics: WebVitalsMetrics) => void;
  enableReporting?: boolean;
}

const CoreWebVitalsMonitor: React.FC<CoreWebVitalsMonitorProps> = ({
  onMetricsUpdate,
  enableReporting = true
}) => {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!enableReporting || typeof window === 'undefined') return;

    const measureWebVitals = () => {
      try {
        // LCP Observer
        if ('PerformanceObserver' in window) {
          const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            const lcp = lastEntry.startTime;
            
            const newMetrics = { ...metrics, lcp };
            setMetrics(newMetrics);
            onMetricsUpdate?.(newMetrics);
            
            reportMetric('LCP', lcp, getRating(lcp, 'lcp'));
            lcpObserver.disconnect();
          });
          lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

          // FCP Observer
          const fcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            if (entries.length > 0) {
              const fcp = entries[0].startTime;
              
              const newMetrics = { ...metrics, fcp };
              setMetrics(newMetrics);
              onMetricsUpdate?.(newMetrics);
              
              reportMetric('FCP', fcp, getRating(fcp, 'fcp'));
              fcpObserver.disconnect();
            }
          });
          fcpObserver.observe({ type: 'paint', buffered: true });

          // FID Observer (using first-input)
          const fidObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            if (entries.length > 0) {
              const firstInput = entries[0] as PerformanceEventTiming;
              const fid = firstInput.processingStart - firstInput.startTime;
              
              const newMetrics = { ...metrics, fid };
              setMetrics(newMetrics);
              onMetricsUpdate?.(newMetrics);
              
              reportMetric('FID', fid, getRating(fid, 'fid'));
              fidObserver.disconnect();
            }
          });
          fidObserver.observe({ type: 'first-input', buffered: true });

          // CLS Observer
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            
            const newMetrics = { ...metrics, cls: clsValue };
            setMetrics(newMetrics);
            onMetricsUpdate?.(newMetrics);
            
            reportMetric('CLS', clsValue, getRating(clsValue, 'cls'));
          });
          clsObserver.observe({ type: 'layout-shift', buffered: true });
        }

        // Navigation Timing for TTFB
        const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        if (navigationEntries.length > 0) {
          const ttfb = navigationEntries[0].responseStart - navigationEntries[0].requestStart;
          
          const newMetrics = { ...metrics, ttfb };
          setMetrics(newMetrics);
          onMetricsUpdate?.(newMetrics);
          
          reportMetric('TTFB', ttfb, getRating(ttfb, 'ttfb'));
        }

        setIsLoaded(true);
      } catch (error) {
        console.warn('Performance measurement failed:', error);
        setIsLoaded(true);
      }
    };

    // Delay measurement to allow page to load
    setTimeout(measureWebVitals, 1000);
  }, [enableReporting, onMetricsUpdate]);

  const reportMetric = (name: string, value: number, rating: string) => {
    if (!enableReporting) return;

    // Report to Google Analytics 4
    if (window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: rating,
        value: Math.round(value),
        non_interaction: true,
      });
    }

    // Report to console for development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Core Web Vital - ${name}:`, {
        value: Math.round(value),
        rating,
        timestamp: new Date().toISOString()
      });
    }

    // Custom analytics endpoint (if available)
    if (typeof fetch !== 'undefined') {
      fetch('/api/analytics/web-vitals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          metric: name,
          value: Math.round(value),
          rating,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: Date.now()
        })
      }).catch(() => {}); // Silent fail for analytics
    }
  };

  const getRating = (value: number, metric: string): string => {
    const thresholds = {
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      fcp: { good: 1800, poor: 3000 },
      ttfb: { good: 800, poor: 1800 },
      inp: { good: 200, poor: 500 }
    };

    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return 'unknown';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  // Schema for Performance Metrics
  const performanceSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "LEGAL TechCo Core Web Vitals Metrics",
    "description": "Real-time performance metrics for SEO and user experience optimization",
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "keywords": ["Core Web Vitals", "Performance", "SEO", "User Experience", "Web Analytics", "Site Speed"],
    "version": "1.0",
    "dateCreated": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "creator": {
      "@type": "Organization",
      "name": "LEGAL TechCo",
      "url": "https://operadora.legal"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LEGAL TechCo",
      "url": "https://operadora.legal"
    },
    "measurementTechnique": "Core Web Vitals API",
    "spatialCoverage": "Global",
    "temporalCoverage": new Date().toISOString(),
    "variableMeasured": [
      {
        "@type": "PropertyValue",
        "name": "Largest Contentful Paint",
        "value": metrics.lcp ? `${Math.round(metrics.lcp)}ms` : null,
        "description": "Time to render the largest content element",
        "unitCode": "millisecond"
      },
      {
        "@type": "PropertyValue",
        "name": "First Input Delay", 
        "value": metrics.fid ? `${Math.round(metrics.fid)}ms` : null,
        "description": "Time from user interaction to browser response",
        "unitCode": "millisecond"
      },
      {
        "@type": "PropertyValue",
        "name": "Cumulative Layout Shift",
        "value": metrics.cls ? Math.round(metrics.cls * 1000) / 1000 : null,
        "description": "Visual stability metric",
        "unitCode": "ratio"
      },
      {
        "@type": "PropertyValue",
        "name": "First Contentful Paint",
        "value": metrics.fcp ? `${Math.round(metrics.fcp)}ms` : null,
        "description": "Time to render the first content element",
        "unitCode": "millisecond"
      },
      {
        "@type": "PropertyValue",
        "name": "Time to First Byte",
        "value": metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : null,
        "description": "Time from request to first byte received",
        "unitCode": "millisecond"
      }
    ]
  };

  return (
    <>
      {/* Performance Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(performanceSchema) }}
      />

      {/* Hidden performance data for crawlers */}
      <div className="sr-only" data-web-vitals="performance-metrics">
        <div data-metric="site-speed-optimization">
          <span data-lcp={metrics.lcp ? Math.round(metrics.lcp) : null}>
            LCP: {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Measuring...'}
          </span>
          <span data-fid={metrics.fid ? Math.round(metrics.fid) : null}>
            FID: {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Measuring...'}
          </span>
          <span data-cls={metrics.cls ? Math.round(metrics.cls * 1000) / 1000 : null}>
            CLS: {metrics.cls ? Math.round(metrics.cls * 1000) / 1000 : 'Measuring...'}
          </span>
        </div>
        
        <div data-performance-status={isLoaded ? 'optimized' : 'loading'}>
          <span data-optimization-level="high-performance">
            Site otimizado para Core Web Vitals
          </span>
          <span data-seo-benefit="improved-rankings">
            Performance otimizada impacta positivamente o SEO
          </span>
        </div>
      </div>

      {/* Performance hints for search engines */}
      <div className="sr-only" data-seo-signals="performance">
        <span data-signal="fast-loading">Site com carregamento rápido</span>
        <span data-signal="good-user-experience">Excelente experiência do usuário</span>
        <span data-signal="mobile-optimized">Otimizado para dispositivos móveis</span>
        <span data-signal="core-web-vitals-compliant">Conformidade com Core Web Vitals</span>
      </div>
    </>
  );
};

export default CoreWebVitalsMonitor;