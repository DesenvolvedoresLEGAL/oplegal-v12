import { useState, useCallback, useEffect } from 'react';

interface MediaAsset {
  id: string;
  type: 'image' | 'video' | 'audio';
  url: string;
  title?: string;
  optimized: boolean;
  seoScore: number;
  metadata: MediaMetadata;
}

interface MediaMetadata {
  altText?: string;
  transcript?: string;
  chapters?: any[];
  keywords?: string[];
  duration?: string;
  fileSize?: number;
  format?: string;
}

interface OptimizationTask {
  id: string;
  assetId: string;
  type: 'image-optimization' | 'alt-text-generation' | 'video-transcription' | 'audio-transcription' | 'schema-generation';
  status: 'pending' | 'processing' | 'completed' | 'error';
  progress: number;
  result?: any;
}

interface UseMultiModalOptimizationReturn {
  assets: MediaAsset[];
  tasks: OptimizationTask[];
  isProcessing: boolean;
  overallScore: number;
  addAsset: (asset: Omit<MediaAsset, 'id' | 'optimized' | 'seoScore'>) => string;
  optimizeAsset: (assetId: string, optimizationType: string) => Promise<void>;
  generateAltText: (imageUrl: string, context?: string) => Promise<string>;
  transcribeMedia: (mediaUrl: string, type: 'video' | 'audio') => Promise<string>;
  generateSchema: (asset: MediaAsset) => Promise<object>;
  getOptimizationSuggestions: (assetId: string) => string[];
  batchOptimize: (assetIds: string[]) => Promise<void>;
}

const useMultiModalOptimization = (): UseMultiModalOptimizationReturn => {
  const [assets, setAssets] = useState<MediaAsset[]>([]);
  const [tasks, setTasks] = useState<OptimizationTask[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Calcular score geral
  const overallScore = assets.length > 0 
    ? Math.round(assets.reduce((sum, asset) => sum + asset.seoScore, 0) / assets.length)
    : 0;

  const addAsset = useCallback((asset: Omit<MediaAsset, 'id' | 'optimized' | 'seoScore'>): string => {
    const id = 'asset_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    const newAsset: MediaAsset = {
      ...asset,
      id,
      optimized: false,
      seoScore: calculateBaseSeoScore(asset)
    };

    setAssets(prev => [...prev, newAsset]);
    return id;
  }, []);

  const calculateBaseSeoScore = (asset: Omit<MediaAsset, 'id' | 'optimized' | 'seoScore'>): number => {
    let score = 20; // Base score
    
    if (asset.title && asset.title.length > 0) score += 20;
    if (asset.metadata.altText && asset.metadata.altText.length > 10) score += 30;
    if (asset.metadata.keywords && asset.metadata.keywords.length > 0) score += 20;
    
    return Math.min(score, 100);
  };

  const createTask = useCallback((assetId: string, type: OptimizationTask['type']): string => {
    const taskId = 'task_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    const task: OptimizationTask = {
      id: taskId,
      assetId,
      type,
      status: 'pending',
      progress: 0
    };

    setTasks(prev => [...prev, task]);
    return taskId;
  }, []);

  const updateTask = useCallback((taskId: string, updates: Partial<OptimizationTask>) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    ));
  }, []);

  const optimizeAsset = useCallback(async (assetId: string, optimizationType: string) => {
    const asset = assets.find(a => a.id === assetId);
    if (!asset) return;

    setIsProcessing(true);
    const taskId = createTask(assetId, optimizationType as OptimizationTask['type']);

    try {
      updateTask(taskId, { status: 'processing', progress: 10 });

      // Simular processamento com progresso
      for (let i = 20; i <= 90; i += 20) {
        await new Promise(resolve => setTimeout(resolve, 500));
        updateTask(taskId, { progress: i });
      }

      let result: any = {};
      let newSeoScore = asset.seoScore;

      switch (optimizationType) {
        case 'image-optimization':
          result = {
            webpUrl: asset.url.replace(/\.(jpg|jpeg|png)$/i, '.webp'),
            avifUrl: asset.url.replace(/\.(jpg|jpeg|png)$/i, '.avif'),
            compressionRatio: 0.7,
            sizeReduction: '45%'
          };
          newSeoScore = Math.min(asset.seoScore + 25, 100);
          break;

        case 'alt-text-generation':
          result = {
            altText: `${asset.title || 'Imagem'} - Solução LEGAL TechCo para eventos inteligentes`,
            confidence: 0.94,
            keywords: ['LEGAL TechCo', 'eventos', 'tecnologia']
          };
          newSeoScore = Math.min(asset.seoScore + 30, 100);
          break;

        case 'video-transcription':
        case 'audio-transcription':
          result = {
            transcript: `Transcrição automática do ${asset.type} sobre soluções LEGAL TechCo...`,
            language: 'pt-BR',
            confidence: 0.92,
            summary: 'Conteúdo sobre tecnologia e inovação em eventos'
          };
          newSeoScore = Math.min(asset.seoScore + 35, 100);
          break;

        case 'schema-generation':
          result = generateSchemaForAsset(asset);
          newSeoScore = Math.min(asset.seoScore + 20, 100);
          break;
      }

      // Atualizar asset com resultados
      setAssets(prev => prev.map(a => 
        a.id === assetId 
          ? { 
              ...a, 
              optimized: true, 
              seoScore: newSeoScore,
              metadata: { ...a.metadata, ...result }
            }
          : a
      ));

      updateTask(taskId, { 
        status: 'completed', 
        progress: 100, 
        result 
      });

    } catch (error) {
      updateTask(taskId, { 
        status: 'error', 
        progress: 0, 
        result: { error: error instanceof Error ? error.message : 'Erro desconhecido' }
      });
    } finally {
      setIsProcessing(false);
    }
  }, [assets, createTask, updateTask]);

  const generateAltText = useCallback(async (imageUrl: string, context?: string): Promise<string> => {
    // Simular geração de alt text por IA
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const baseText = context || 'Imagem da plataforma LEGAL TechCo';
    return `${baseText} - Tecnologia avançada para eventos inteligentes e gestão automatizada`;
  }, []);

  const transcribeMedia = useCallback(async (mediaUrl: string, type: 'video' | 'audio'): Promise<string> => {
    // Simular transcrição
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return `Transcrição automática do ${type}: Bem-vindos à LEGAL TechCo, onde transformamos eventos através da tecnologia avançada. Nossa plataforma Smart Events oferece soluções completas...`;
  }, []);

  const generateSchema = useCallback(async (asset: MediaAsset): Promise<object> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const baseSchema = {
      "@context": "https://schema.org",
      "author": {
        "@type": "Organization",
        "name": "LEGAL TechCo"
      },
      "publisher": {
        "@type": "Organization", 
        "name": "LEGAL TechCo"
      }
    };

    switch (asset.type) {
      case 'image':
        return {
          ...baseSchema,
          "@type": "ImageObject",
          "contentUrl": asset.url,
          "description": asset.metadata.altText,
          "name": asset.title
        };

      case 'video':
        return {
          ...baseSchema,
          "@type": "VideoObject",
          "contentUrl": asset.url,
          "name": asset.title,
          "description": asset.metadata.transcript?.substring(0, 200),
          "duration": asset.metadata.duration,
          "transcript": asset.metadata.transcript
        };

      case 'audio':
        return {
          ...baseSchema,
          "@type": "AudioObject",
          "contentUrl": asset.url,
          "name": asset.title,
          "description": asset.metadata.transcript?.substring(0, 200),
          "duration": asset.metadata.duration,
          "transcript": asset.metadata.transcript
        };

      default:
        return baseSchema;
    }
  }, []);

  const generateSchemaForAsset = (asset: MediaAsset): object => {
    // Versão síncrona para uso interno
    const baseSchema = {
      "@context": "https://schema.org",
      "author": { "@type": "Organization", "name": "LEGAL TechCo" }
    };

    switch (asset.type) {
      case 'image':
        return { ...baseSchema, "@type": "ImageObject", "contentUrl": asset.url };
      case 'video':
        return { ...baseSchema, "@type": "VideoObject", "contentUrl": asset.url };
      case 'audio':
        return { ...baseSchema, "@type": "AudioObject", "contentUrl": asset.url };
      default:
        return baseSchema;
    }
  };

  const getOptimizationSuggestions = useCallback((assetId: string): string[] => {
    const asset = assets.find(a => a.id === assetId);
    if (!asset) return [];

    const suggestions: string[] = [];

    if (!asset.metadata.altText && asset.type === 'image') {
      suggestions.push('Adicionar texto alternativo (Alt Text)');
    }

    if (!asset.metadata.transcript && (asset.type === 'video' || asset.type === 'audio')) {
      suggestions.push('Gerar transcrição automática');
    }

    if (!asset.metadata.keywords || asset.metadata.keywords.length === 0) {
      suggestions.push('Adicionar palavras-chave relevantes');
    }

    if (!asset.title || asset.title.length < 10) {
      suggestions.push('Melhorar título descritivo');
    }

    if (asset.seoScore < 80) {
      suggestions.push('Otimizar para melhor performance SEO');
    }

    return suggestions;
  }, [assets]);

  const batchOptimize = useCallback(async (assetIds: string[]) => {
    setIsProcessing(true);
    
    try {
      for (const assetId of assetIds) {
        const asset = assets.find(a => a.id === assetId);
        if (!asset) continue;

        // Determinar otimizações necessárias
        const suggestions = getOptimizationSuggestions(assetId);
        
        for (const suggestion of suggestions) {
          let optimizationType = 'image-optimization';
          
          if (suggestion.includes('Alt Text')) optimizationType = 'alt-text-generation';
          else if (suggestion.includes('transcrição')) optimizationType = asset.type === 'video' ? 'video-transcription' : 'audio-transcription';
          else if (suggestion.includes('schema')) optimizationType = 'schema-generation';

          await optimizeAsset(assetId, optimizationType);
        }
      }
    } finally {
      setIsProcessing(false);
    }
  }, [assets, getOptimizationSuggestions, optimizeAsset]);

  // Cleanup de tasks antigas
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks(prev => prev.filter(task => {
        const taskAge = Date.now() - parseInt(task.id.split('_')[1]);
        return taskAge < 300000; // Manter por 5 minutos
      }));
    }, 60000); // Verificar a cada minuto

    return () => clearInterval(interval);
  }, []);

  return {
    assets,
    tasks,
    isProcessing,
    overallScore,
    addAsset,
    optimizeAsset,
    generateAltText,
    transcribeMedia,
    generateSchema,
    getOptimizationSuggestions,
    batchOptimize
  };
};

export default useMultiModalOptimization;