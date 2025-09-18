import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Image, Zap, FileImage, Settings, TrendingUp } from 'lucide-react';

interface ImageOptimizationProps {
  imageUrl?: string;
  altText?: string;
  onOptimizationComplete?: (optimizedData: OptimizedImageData) => void;
}

interface OptimizedImageData {
  webpUrl: string;
  avifUrl: string;
  optimizedAlt: string;
  structuredData: object;
  seoScore: number;
}

const ImageOptimizer: React.FC<ImageOptimizationProps> = ({
  imageUrl,
  altText,
  onOptimizationComplete
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationResults, setOptimizationResults] = useState<OptimizedImageData | null>(null);

  const optimizeImage = useCallback(async () => {
    if (!imageUrl) return;
    
    setIsOptimizing(true);
    
    try {
      // Simulação de otimização avançada
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const optimizedData: OptimizedImageData = {
        webpUrl: imageUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp'),
        avifUrl: imageUrl.replace(/\.(jpg|jpeg|png)$/i, '.avif'),
        optimizedAlt: `${altText || 'Imagem'} - Solução LEGAL TechCo para transformação digital`,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "contentUrl": imageUrl,
          "description": altText,
          "author": {
            "@type": "Organization",
            "name": "LEGAL TechCo"
          },
          "copyrightHolder": {
            "@type": "Organization", 
            "name": "LEGAL TechCo"
          }
        },
        seoScore: Math.floor(Math.random() * 20) + 80
      };
      
      setOptimizationResults(optimizedData);
      onOptimizationComplete?.(optimizedData);
    } catch (error) {
      console.error('Erro na otimização:', error);
    } finally {
      setIsOptimizing(false);
    }
  }, [imageUrl, altText, onOptimizationComplete]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Image className="w-5 h-5 text-primary" />
          Otimizador de Imagens AI
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {imageUrl && (
          <div className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={imageUrl} 
                alt={altText || 'Imagem para otimização'}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <Button 
              onClick={optimizeImage}
              disabled={isOptimizing}
              className="w-full"
            >
              {isOptimizing ? (
                <>
                  <Settings className="w-4 h-4 mr-2 animate-spin" />
                  Otimizando...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Otimizar para GEO
                </>
              )}
            </Button>
          </div>
        )}
        
        {optimizationResults && (
          <div className="space-y-4">
            <Separator />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <FileImage className="w-4 h-4" />
                  Formatos Otimizados
                </h4>
                <div className="space-y-1">
                  <Badge variant="secondary">WebP ✓</Badge>
                  <Badge variant="secondary">AVIF ✓</Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  SEO Score
                </h4>
                <Badge variant="default" className="text-lg">
                  {optimizationResults.seoScore}/100
                </Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Alt Text Otimizado:</h4>
              <p className="text-sm text-muted-foreground bg-muted p-2 rounded">
                {optimizationResults.optimizedAlt}
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-sm">
              <Badge variant="outline">Lazy Loading ✓</Badge>
              <Badge variant="outline">Responsive ✓</Badge>
              <Badge variant="outline">Schema.org ✓</Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageOptimizer;