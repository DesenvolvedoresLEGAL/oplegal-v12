import { useState, useCallback, useEffect } from 'react';

interface ImageOptimizationOptions {
  enableWebP?: boolean;
  enableAVIF?: boolean;
  quality?: number;
  lazyLoad?: boolean;
  generateAltText?: boolean;
}

interface OptimizedImage {
  original: string;
  webp?: string;
  avif?: string;
  altText: string;
  isOptimized: boolean;
  seoScore: number;
}

interface UseImageOptimizationReturn {
  optimizedImages: Map<string, OptimizedImage>;
  optimizeImage: (url: string, altText?: string, options?: ImageOptimizationOptions) => Promise<OptimizedImage>;
  getOptimizedSrc: (url: string) => string;
  isOptimizing: boolean;
  optimizationQueue: string[];
}

const useImageOptimization = (): UseImageOptimizationReturn => {
  const [optimizedImages, setOptimizedImages] = useState<Map<string, OptimizedImage>>(new Map());
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationQueue, setOptimizationQueue] = useState<string[]>([]);

  const generateWebPUrl = useCallback((originalUrl: string): string => {
    // Em produção, isso seria conectado a um serviço de otimização
    return originalUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }, []);

  const generateAVIFUrl = useCallback((originalUrl: string): string => {
    return originalUrl.replace(/\.(jpg|jpeg|png)$/i, '.avif');
  }, []);

  const generateSmartAltText = useCallback(async (url: string, context?: string): Promise<string> => {
    // Simulação de geração de alt text por IA
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const baseAlt = context || 'Imagem da plataforma LEGAL TechCo';
    const enhancedAlt = `${baseAlt} - Solução tecnológica para eventos e negócios`;
    
    return enhancedAlt;
  }, []);

  const calculateSEOScore = useCallback((image: OptimizedImage): number => {
    let score = 0;
    
    // Alt text presente e descritivo
    if (image.altText && image.altText.length > 10) score += 30;
    
    // Formatos modernos disponíveis
    if (image.webp) score += 25;
    if (image.avif) score += 25;
    
    // Otimização geral
    if (image.isOptimized) score += 20;
    
    return Math.min(score, 100);
  }, []);

  const optimizeImage = useCallback(async (
    url: string, 
    altText?: string, 
    options: ImageOptimizationOptions = {}
  ): Promise<OptimizedImage> => {
    setIsOptimizing(true);
    setOptimizationQueue(prev => [...prev, url]);
    
    try {
      const {
        enableWebP = true,
        enableAVIF = true,
        generateAltText = true
      } = options;

      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 1000));

      const optimizedAltText = generateAltText && !altText 
        ? await generateSmartAltText(url)
        : altText || 'Imagem LEGAL TechCo';

      const optimizedImage: OptimizedImage = {
        original: url,
        webp: enableWebP ? generateWebPUrl(url) : undefined,
        avif: enableAVIF ? generateAVIFUrl(url) : undefined,
        altText: optimizedAltText,
        isOptimized: true,
        seoScore: 0
      };

      optimizedImage.seoScore = calculateSEOScore(optimizedImage);

      setOptimizedImages(prev => new Map(prev).set(url, optimizedImage));
      
      return optimizedImage;
    } catch (error) {
      console.error('Erro na otimização da imagem:', error);
      throw error;
    } finally {
      setIsOptimizing(false);
      setOptimizationQueue(prev => prev.filter(queuedUrl => queuedUrl !== url));
    }
  }, [generateSmartAltText, generateWebPUrl, generateAVIFUrl, calculateSEOScore]);

  const getOptimizedSrc = useCallback((url: string): string => {
    const optimized = optimizedImages.get(url);
    
    if (!optimized) return url;
    
    // Preferir AVIF, depois WebP, depois original
    if (optimized.avif && supportsAVIF()) return optimized.avif;
    if (optimized.webp && supportsWebP()) return optimized.webp;
    
    return optimized.original;
  }, [optimizedImages]);

  // Detectar suporte a formatos modernos
  const supportsWebP = useCallback((): boolean => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }, []);

  const supportsAVIF = useCallback((): boolean => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  }, []);

  // Auto-otimizar imagens detectadas na página
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            const images = element.querySelectorAll('img[src]:not([data-optimized])');
            
            images.forEach((img) => {
              const src = (img as HTMLImageElement).src;
              if (src && !optimizedImages.has(src)) {
                // Marcar como detectada para evitar reprocessamento
                img.setAttribute('data-optimized', 'detecting');
                
                // Otimizar automaticamente em background
                optimizeImage(src, (img as HTMLImageElement).alt)
                  .then(() => {
                    img.setAttribute('data-optimized', 'true');
                  })
                  .catch(() => {
                    img.setAttribute('data-optimized', 'error');
                  });
              }
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [optimizeImage, optimizedImages]);

  return {
    optimizedImages,
    optimizeImage,
    getOptimizedSrc,
    isOptimizing,
    optimizationQueue
  };
};

export default useImageOptimization;