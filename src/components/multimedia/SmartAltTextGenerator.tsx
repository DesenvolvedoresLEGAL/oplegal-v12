import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Brain, Sparkles, Target, Copy } from 'lucide-react';
import { toast } from 'sonner';

interface SmartAltTextProps {
  imageUrl: string;
  context?: string;
  targetKeywords?: string[];
  onAltTextGenerated?: (altText: string) => void;
}

interface GeneratedAltText {
  descriptive: string;
  seoOptimized: string;
  accessible: string;
  contextual: string;
}

const SmartAltTextGenerator: React.FC<SmartAltTextProps> = ({
  imageUrl,
  context = '',
  targetKeywords = [],
  onAltTextGenerated
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTexts, setGeneratedTexts] = useState<GeneratedAltText | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>('');

  const generateAltText = useCallback(async () => {
    setIsGenerating(true);
    
    try {
      // Simulação de análise AI da imagem
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const businessContext = "LEGAL TechCo - Soluções em tecnologia para eventos";
      const keywordString = targetKeywords.join(', ');
      
      const generated: GeneratedAltText = {
        descriptive: "Interface moderna de dashboard com gráficos interativos e métricas em tempo real",
        seoOptimized: `Dashboard ${keywordString || 'tecnologia eventos'} - Plataforma LEGAL TechCo para análise de dados e métricas`,
        accessible: "Tela de computador mostrando dashboard com múltiplos gráficos de barras e círculos, números e indicadores visuais para análise de performance",
        contextual: `${businessContext}: ${context || 'Solução tecnológica'} - Interface de usuário com visualização de dados avançada`
      };
      
      setGeneratedTexts(generated);
    } catch (error) {
      console.error('Erro na geração:', error);
      toast.error('Erro ao gerar texto alternativo');
    } finally {
      setIsGenerating(false);
    }
  }, [context, targetKeywords]);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Texto copiado!');
    setSelectedAlt(text);
    onAltTextGenerated?.(text);
  }, [onAltTextGenerated]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          Gerador de Alt Text Inteligente
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Contexto da Imagem:</label>
          <Textarea 
            placeholder="Descreva o contexto onde a imagem será usada..."
            value={context}
            rows={2}
            className="resize-none"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Palavras-chave Alvo:</label>
          <div className="flex gap-2 flex-wrap">
            {targetKeywords.map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>
        
        <Button 
          onClick={generateAltText}
          disabled={isGenerating}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Analisando imagem...
            </>
          ) : (
            <>
              <Brain className="w-4 h-4 mr-2" />
              Gerar Alt Text AI
            </>
          )}
        </Button>
        
        {generatedTexts && (
          <div className="space-y-4">
            <Separator />
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-500" />
                  <span className="font-medium">Descritivo</span>
                  <Badge variant="outline">Recomendado</Badge>
                </div>
                <div className="bg-muted p-3 rounded-lg relative group">
                  <p className="text-sm pr-8">{generatedTexts.descriptive}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => copyToClipboard(generatedTexts.descriptive)}
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">SEO Otimizado</span>
                </div>
                <div className="bg-muted p-3 rounded-lg relative group">
                  <p className="text-sm pr-8">{generatedTexts.seoOptimized}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => copyToClipboard(generatedTexts.seoOptimized)}
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-500" />
                  <span className="font-medium">Acessibilidade</span>
                </div>
                <div className="bg-muted p-3 rounded-lg relative group">
                  <p className="text-sm pr-8">{generatedTexts.accessible}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => copyToClipboard(generatedTexts.accessible)}
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-orange-500" />
                  <span className="font-medium">Contextual</span>
                </div>
                <div className="bg-muted p-3 rounded-lg relative group">
                  <p className="text-sm pr-8">{generatedTexts.contextual}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => copyToClipboard(generatedTexts.contextual)}
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
            
            {selectedAlt && (
              <div className="border-l-4 border-primary bg-primary/5 p-3 rounded">
                <p className="text-sm font-medium text-primary mb-1">Texto Selecionado:</p>
                <p className="text-sm">{selectedAlt}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SmartAltTextGenerator;