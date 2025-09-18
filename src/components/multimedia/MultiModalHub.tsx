import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Image, 
  Video, 
  AudioLines, 
  FileText, 
  Settings, 
  Zap, 
  TrendingUp,
  CheckCircle 
} from 'lucide-react';

import ImageOptimizer from './ImageOptimizer';
import SmartAltTextGenerator from './SmartAltTextGenerator';
import VideoTranscriber from './VideoTranscriber';
import VideoChapterizer from './VideoChapterizer';
import VideoSchemaGenerator from './VideoSchemaGenerator';
import AudioTranscriber from './AudioTranscriber';
import PodcastOptimizer from './PodcastOptimizer';
import InteractiveWidgetHub from '../interactive/InteractiveWidgetHub';

interface MultiModalHubProps {
  initialTab?: string;
  onOptimizationComplete?: (results: OptimizationResults) => void;
}

interface OptimizationResults {
  images: number;
  videos: number;
  audio: number;
  interactive: number;
  totalSeoScore: number;
}

const MultiModalHub: React.FC<MultiModalHubProps> = ({
  initialTab = 'images',
  onOptimizationComplete
}) => {
  const [optimizationResults, setOptimizationResults] = useState<OptimizationResults>({
    images: 0,
    videos: 0,
    audio: 0,
    interactive: 0,
    totalSeoScore: 0
  });

  const [activeOptimizations, setActiveOptimizations] = useState<string[]>([]);

  const tabs = [
    {
      id: 'images',
      label: 'Imagens',
      icon: <Image className="w-4 h-4" />,
      count: optimizationResults.images,
      description: 'Otimize imagens para SEO e performance'
    },
    {
      id: 'videos',
      label: 'Vídeos',
      icon: <Video className="w-4 h-4" />,
      count: optimizationResults.videos,
      description: 'Transcrição, capítulos e schema de vídeos'
    },
    {
      id: 'audio',
      label: 'Áudio',
      icon: <AudioLines className="w-4 h-4" />,
      count: optimizationResults.audio,
      description: 'Transcrição e otimização de podcasts'
    },
    {
      id: 'interactive',
      label: 'Interativo',
      icon: <Settings className="w-4 h-4" />,
      count: optimizationResults.interactive,
      description: 'Calculadoras e ferramentas interativas'
    }
  ];

  const handleOptimizationUpdate = (type: keyof OptimizationResults, increment: number = 1) => {
    setOptimizationResults(prev => {
      const updated = {
        ...prev,
        [type]: prev[type] + increment
      };
      
      // Calcular score total
      const total = updated.images + updated.videos + updated.audio + updated.interactive;
      updated.totalSeoScore = Math.min(total * 15, 100); // Max 100
      
      onOptimizationComplete?.(updated);
      return updated;
    });
  };

  const addActiveOptimization = (optimization: string) => {
    setActiveOptimizations(prev => {
      if (!prev.includes(optimization)) {
        return [...prev, optimization];
      }
      return prev;
    });
  };

  return (
    <div className="w-full space-y-6">
      {/* Hub Header with Stats */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Central Multi-modal GEO LEGAL
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {optimizationResults.images}
              </div>
              <div className="text-sm text-muted-foreground">Imagens</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {optimizationResults.videos}
              </div>
              <div className="text-sm text-muted-foreground">Vídeos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {optimizationResults.audio}
              </div>
              <div className="text-sm text-muted-foreground">Áudio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {optimizationResults.interactive}
              </div>
              <div className="text-sm text-muted-foreground">Ferramentas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">
                {optimizationResults.totalSeoScore}
              </div>
              <div className="text-sm text-muted-foreground">Score SEO</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {activeOptimizations.map((opt, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                <CheckCircle className="w-3 h-3 mr-1" />
                {opt}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue={initialTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {tabs.map(tab => (
            <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              {tab.count > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {tab.count}
                </Badge>
              )}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Images Tab */}
        <TabsContent value="images" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ImageOptimizer
              onOptimizationComplete={() => {
                handleOptimizationUpdate('images');
                addActiveOptimization('Imagem Otimizada');
              }}
            />
            <SmartAltTextGenerator
              imageUrl="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"
              targetKeywords={['eventos', 'tecnologia', 'LEGAL TechCo']}
              onAltTextGenerated={() => {
                handleOptimizationUpdate('images');
                addActiveOptimization('Alt Text Gerado');
              }}
            />
          </div>
          
          <Card className="bg-muted/50">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Benefícios da Otimização de Imagens
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <Badge variant="outline" className="mb-2">Performance</Badge>
                  <p className="text-muted-foreground">Carregamento 70% mais rápido com WebP/AVIF</p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">SEO</Badge>
                  <p className="text-muted-foreground">Alt text otimizado para buscadores</p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">Acessibilidade</Badge>
                  <p className="text-muted-foreground">Conformidade com WCAG 2.1</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Videos Tab */}
        <TabsContent value="videos" className="space-y-6">
          <div className="space-y-6">
            <VideoTranscriber
              onTranscriptionComplete={() => {
                handleOptimizationUpdate('videos');
                addActiveOptimization('Vídeo Transcrito');
              }}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <VideoChapterizer
                onChaptersUpdate={() => {
                  handleOptimizationUpdate('videos');
                  addActiveOptimization('Capítulos Criados');
                }}
              />
              <VideoSchemaGenerator
                onSchemaGenerated={() => {
                  handleOptimizationUpdate('videos');
                  addActiveOptimization('Schema Gerado');
                }}
              />
            </div>
          </div>
        </TabsContent>

        {/* Audio Tab */}
        <TabsContent value="audio" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AudioTranscriber
              onTranscriptionComplete={() => {
                handleOptimizationUpdate('audio');
                addActiveOptimization('Áudio Transcrito');
              }}
            />
            <PodcastOptimizer
              onOptimizationComplete={() => {
                handleOptimizationUpdate('audio');
                addActiveOptimization('Podcast Otimizado');
              }}
            />
          </div>
        </TabsContent>

        {/* Interactive Tab */}
        <TabsContent value="interactive" className="space-y-6">
          <InteractiveWidgetHub
            onWidgetChange={() => {
              handleOptimizationUpdate('interactive');
              addActiveOptimization('Ferramenta Utilizada');
            }}
          />
        </TabsContent>
      </Tabs>

      {/* Summary Card */}
      {optimizationResults.totalSeoScore > 0 && (
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-semibold">Otimização Multi-modal Ativa</span>
              </div>
              <Badge variant="default" className="bg-green-500">
                Score: {optimizationResults.totalSeoScore}/100
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Seu conteúdo está sendo otimizado para máxima visibilidade em buscadores e IA.
              Continue adicionando e otimizando conteúdo para melhorar ainda mais o score.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MultiModalHub;