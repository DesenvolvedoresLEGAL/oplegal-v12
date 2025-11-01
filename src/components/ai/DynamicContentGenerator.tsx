import React, { useState, useEffect, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Sparkles, Target, Zap } from 'lucide-react';

interface ContentTemplate {
  id: string;
  type: 'product' | 'service' | 'solution' | 'testimonial';
  template: string;
  variables: string[];
  priority: number;
}

interface UserContext {
  industry?: string;
  companySize?: string;
  interests: string[];
  behavior: {
    pageViews: string[];
    timeSpent: number;
    interactions: string[];
  };
  location?: {
    country: string;
    region: string;
  };
}

interface DynamicContentProps {
  userContext: UserContext;
  pageType: string;
  targetAudience: string;
  onContentGenerated?: (content: any) => void;
}

const DynamicContentGenerator: React.FC<DynamicContentProps> = ({
  userContext,
  pageType,
  targetAudience,
  onContentGenerated
}) => {
  const [generatedContent, setGeneratedContent] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [contentMetrics, setContentMetrics] = useState({
    relevanceScore: 0,
    personalizationLevel: 0,
    engagementPrediction: 0
  });

  // Templates de conteúdo pré-definidos para produtos LEGAL
  const contentTemplates: ContentTemplate[] = [
    {
      id: 'smart-events-intro',
      type: 'product',
      template: 'Transforme seus eventos {industry} com Smart Events™. Nossa tecnologia de IA revoluciona a experiência de {audience} através de {features}.',
      variables: ['industry', 'audience', 'features'],
      priority: 1
    },
    {
      id: 'magicpass-security',
      type: 'solution', 
      template: 'MAGICPASS™ oferece segurança facial avançada para {industry}. Elimine filas e melhore a experiência {audience} com reconhecimento biométrico instantâneo.',
      variables: ['industry', 'audience'],
      priority: 2
    },
    {
      id: 'fitscore-hr',
      type: 'service',
      template: 'FitScore™ revoluciona seu RH com IA. Contrate os melhores talentos {industry} através de análise preditiva e matching inteligente para {audience}.',
      variables: ['industry', 'audience'],
      priority: 3
    }
  ];

  // Análise contextual do usuário
  const analyzeUserContext = useCallback(() => {
    const industryMapping = {
      'eventos': ['Smart Events™', 'MAGICPASS™', 'Eventrix'],
      'rh': ['FitScore™', 'NeuraFit'],
      'tecnologia': ['Galaxia', 'Blue6', 'Brilix'],
      'fitness': ['NeuraFit', 'FitScore™', 'Ping']
    };

    const behaviorScore = userContext.behavior.pageViews.length * 0.3 + 
                         userContext.behavior.timeSpent * 0.5 +
                         userContext.behavior.interactions.length * 0.2;

    return {
      primaryInterest: userContext.interests[0] || 'eventos',
      behaviorScore,
      recommendedProducts: industryMapping[userContext.interests[0] as keyof typeof industryMapping] || industryMapping.eventos
    };
  }, [userContext]);

  // Geração de conteúdo dinâmico
  const generateContent = useCallback(async () => {
    setIsGenerating(true);
    
    const analysis = analyzeUserContext();
    
    // Simulação de processamento de IA (em produção seria uma API call)
    await new Promise(resolve => setTimeout(resolve, 1500));

    const selectedTemplate = contentTemplates.find(t => 
      analysis.recommendedProducts.some(product => 
        t.template.toLowerCase().includes(product.toLowerCase())
      )
    ) || contentTemplates[0];

    // Personalização baseada no contexto
    const personalizedContent = {
      id: `generated_${Date.now()}`,
      type: selectedTemplate.type,
      title: generateTitle(analysis),
      content: personalizeTemplate(selectedTemplate, analysis),
      cta: generateCTA(analysis),
      metadata: {
        relevanceScore: Math.min(95, 70 + analysis.behaviorScore * 5),
        personalizationLevel: userContext.interests.length * 20 + 40,
        targetAudience,
        generatedAt: new Date().toISOString()
      }
    };

    setGeneratedContent(personalizedContent);
    setContentMetrics({
      relevanceScore: personalizedContent.metadata.relevanceScore,
      personalizationLevel: personalizedContent.metadata.personalizationLevel,
      engagementPrediction: Math.min(90, personalizedContent.metadata.relevanceScore * 0.9)
    });

    onContentGenerated?.(personalizedContent);
    setIsGenerating(false);
  }, [userContext, targetAudience, onContentGenerated, analyzeUserContext]);

  // Geração de título personalizado
  const generateTitle = (analysis: any) => {
    const titleTemplates = {
      eventos: 'Revolucione Seus Eventos com IA',
      rh: 'Transforme seu RH com Inteligência Artificial',
      tecnologia: 'Acelere sua Transformação Digital',
      fitness: 'Potencialize Performance com IA'
    };
    return titleTemplates[analysis.primaryInterest as keyof typeof titleTemplates] || titleTemplates.eventos;
  };

  // Personalização de template
  const personalizeTemplate = (template: ContentTemplate, analysis: any) => {
    let content = template.template;
    
    const replacements = {
      industry: analysis.primaryInterest,
      audience: targetAudience,
      features: analysis.recommendedProducts.slice(0, 2).join(' e ')
    };

    template.variables.forEach(variable => {
      const replacement = replacements[variable as keyof typeof replacements] || variable;
      content = content.replace(`{${variable}}`, replacement);
    });

    return content;
  };

  // Geração de CTA personalizado
  const generateCTA = (analysis: any) => {
    const ctaTemplates = {
      eventos: 'Descubra Smart Events™',
      rh: 'Explore FitScore™',
      tecnologia: 'Conheça Galaxia',
      fitness: 'Experimente NeuraFit'
    };
    return ctaTemplates[analysis.primaryInterest as keyof typeof ctaTemplates] || 'Fale com Especialista';
  };

  useEffect(() => {
    generateContent();
  }, [generateContent]);

  return (
    <div className="space-y-6">
      {/* Métricas em Tempo Real */}
      <Card className="p-6 bg-gradient-to-r from-legal/5 to-legal-purple/5 border-legal/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-legal">AI Content Generator</h3>
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-legal-purple" />
            <span className="text-sm text-legal-purple font-medium">Ativo</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-4 h-4 text-legal mr-2" />
              <span className="text-sm font-medium">Relevância</span>
            </div>
            <div className="text-2xl font-bold text-legal">{contentMetrics.relevanceScore}%</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="w-4 h-4 text-legal-purple mr-2" />
              <span className="text-sm font-medium">Personalização</span>
            </div>
            <div className="text-2xl font-bold text-legal-purple">{contentMetrics.personalizationLevel}%</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-4 h-4 text-legal-cyan mr-2" />
              <span className="text-sm font-medium">Engajamento</span>
            </div>
            <div className="text-2xl font-bold text-legal-cyan">{contentMetrics.engagementPrediction}%</div>
          </div>
        </div>
      </Card>

      {/* Conteúdo Gerado */}
      {isGenerating ? (
        <Card className="p-8 text-center">
          <div className="loading-animation">
            <Brain className="w-8 h-8 text-legal mx-auto mb-4" />
            <p className="text-legal">Gerando conteúdo personalizado...</p>
          </div>
        </Card>
      ) : generatedContent && (
        <Card className="p-6 border-legal/30">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-legal mb-2">{generatedContent.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{generatedContent.content}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Tipo: {generatedContent.type}</span>
              <span>Audiência: {targetAudience}</span>
              <span>Relevância: {generatedContent.metadata.relevanceScore}%</span>
            </div>

            <Button 
              className="bg-legal hover:bg-legal-purple text-white px-6 py-2"
              onClick={generateContent}
            >
              {generatedContent.cta}
            </Button>
          </div>
        </Card>
      )}

      {/* Controles de Regeneração */}
      <div className="flex justify-center">
        <Button 
          variant="outline" 
          onClick={generateContent}
          disabled={isGenerating}
          className="border-legal text-legal hover:bg-legal hover:text-white"
        >
          {isGenerating ? 'Gerando...' : 'Regenerar Conteúdo'}
        </Button>
      </div>
    </div>
  );
};

export default DynamicContentGenerator;