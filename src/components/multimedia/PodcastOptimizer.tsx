import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mic2, Rss, TrendingUp, Copy, Download, Star } from 'lucide-react';
import { toast } from 'sonner';

interface PodcastEpisode {
  title: string;
  description: string;
  audioUrl: string;
  duration: string;
  publishDate: string;
  tags: string[];
  transcript?: string;
}

interface PodcastOptimization {
  seoTitle: string;
  seoDescription: string;
  optimizedTags: string[];
  rssFeed: object;
  schema: object;
  socialSnippets: {
    twitter: string;
    linkedin: string;
    facebook: string;
  };
  chapters: PodcastChapter[];
  seoScore: number;
}

interface PodcastChapter {
  title: string;
  startTime: string;
  description: string;
}

interface PodcastOptimizerProps {
  episode?: Partial<PodcastEpisode>;
  onOptimizationComplete?: (optimization: PodcastOptimization) => void;
}

const PodcastOptimizer: React.FC<PodcastOptimizerProps> = ({
  episode = {},
  onOptimizationComplete
}) => {
  const [episodeData, setEpisodeData] = useState<PodcastEpisode>({
    title: episode.title || '',
    description: episode.description || '',
    audioUrl: episode.audioUrl || '',
    duration: episode.duration || '',
    publishDate: episode.publishDate || new Date().toISOString().split('T')[0],
    tags: episode.tags || [],
    transcript: episode.transcript || ''
  });

  const [optimization, setOptimization] = useState<PodcastOptimization | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [newTag, setNewTag] = useState('');

  const addTag = useCallback(() => {
    if (newTag.trim() && !episodeData.tags.includes(newTag.trim())) {
      setEpisodeData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  }, [newTag, episodeData.tags]);

  const removeTag = useCallback((tagToRemove: string) => {
    setEpisodeData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  }, []);

  const optimizePodcast = useCallback(async () => {
    if (!episodeData.title || !episodeData.description) {
      toast.error('Título e descrição são obrigatórios');
      return;
    }

    setIsOptimizing(true);

    try {
      // Simular otimização
      await new Promise(resolve => setTimeout(resolve, 2000));

      const optimizedResult: PodcastOptimization = {
        seoTitle: `${episodeData.title} | Podcast LEGAL TechCo - Tecnologia e Inovação em Eventos`,
        seoDescription: `${episodeData.description.substring(0, 120)}... Ouça no podcast da LEGAL TechCo sobre transformação digital e Smart Events.`,
        optimizedTags: [
          ...episodeData.tags,
          'LEGAL TechCo',
          'Smart Events',
          'tecnologia',
          'podcast',
          'inovação',
          'eventos digitais'
        ],
        rssFeed: {
          title: episodeData.title,
          description: episodeData.description,
          enclosure: {
            url: episodeData.audioUrl,
            type: 'audio/mpeg'
          },
          pubDate: new Date(episodeData.publishDate).toUTCString(),
          duration: episodeData.duration,
          keywords: episodeData.tags.join(', ')
        },
        schema: {
          "@context": "https://schema.org",
          "@type": "PodcastEpisode",
          "name": episodeData.title,
          "description": episodeData.description,
          "datePublished": episodeData.publishDate,
          "duration": convertToISO8601Duration(episodeData.duration),
          "associatedMedia": {
            "@type": "MediaObject",
            "contentUrl": episodeData.audioUrl,
            "encodingFormat": "audio/mpeg"
          },
          "partOfSeries": {
            "@type": "PodcastSeries",
            "name": "Podcast LEGAL TechCo",
            "description": "O podcast sobre tecnologia e inovação em eventos"
          },
          "publisher": {
            "@type": "Organization",
            "name": "LEGAL TechCo"
          }
        },
        socialSnippets: {
          twitter: `🎧 Novo episódio do podcast! "${episodeData.title}" - Descubra como a tecnologia está transformando os eventos. #LegalTechCo #SmartEvents #Podcast`,
          linkedin: `Acabamos de lançar um novo episódio do nosso podcast: "${episodeData.title}". ${episodeData.description.substring(0, 100)}... Ouça agora e descubra insights sobre tecnologia e eventos.`,
          facebook: `🎙️ Novo episódio disponível! "${episodeData.title}" - Uma conversa fascinante sobre o futuro dos eventos e como a tecnologia está mudando tudo. Ouça agora no nosso podcast!`
        },
        chapters: [
          {
            title: "Introdução",
            startTime: "00:00:00",
            description: "Apresentação do episódio e convidados"
          },
          {
            title: "Tema Principal",
            startTime: "00:02:30",
            description: "Discussão sobre o tema central do episódio"
          },
          {
            title: "Cases e Exemplos",
            startTime: "00:15:00",
            description: "Exemplos práticos e cases de sucesso"
          },
          {
            title: "Conclusões",
            startTime: "00:25:00",
            description: "Considerações finais e próximos passos"
          }
        ],
        seoScore: 92
      };

      setOptimization(optimizedResult);
      onOptimizationComplete?.(optimizedResult);
      toast.success('Podcast otimizado com sucesso!');

    } catch (error) {
      console.error('Erro na otimização:', error);
      toast.error('Erro ao otimizar podcast');
    } finally {
      setIsOptimizing(false);
    }
  }, [episodeData, onOptimizationComplete]);

  const convertToISO8601Duration = (duration: string): string => {
    if (!duration) return '';
    
    const parts = duration.split(':').map(Number);
    let hours = 0, minutes = 0, seconds = 0;
    
    if (parts.length === 3) {
      [hours, minutes, seconds] = parts;
    } else if (parts.length === 2) {
      [minutes, seconds] = parts;
    }
    
    let isoDuration = 'PT';
    if (hours > 0) isoDuration += `${hours}H`;
    if (minutes > 0) isoDuration += `${minutes}M`;
    if (seconds > 0) isoDuration += `${seconds}S`;
    
    return isoDuration === 'PT' ? 'PT0S' : isoDuration;
  };

  const copyToClipboard = useCallback(async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${type} copiado!`);
    } catch (error) {
      toast.error('Erro ao copiar');
    }
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mic2 className="w-5 h-5 text-primary" />
          Otimizador de Podcast AI
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium mb-1 block">Título do Episódio *</label>
              <Input
                placeholder="Ex: O Futuro dos Eventos Digitais"
                value={episodeData.title}
                onChange={(e) => setEpisodeData(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">URL do Áudio</label>
              <Input
                placeholder="https://exemplo.com/audio.mp3"
                value={episodeData.audioUrl}
                onChange={(e) => setEpisodeData(prev => ({ ...prev, audioUrl: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-medium mb-1 block">Duração</label>
                <Input
                  placeholder="30:45"
                  value={episodeData.duration}
                  onChange={(e) => setEpisodeData(prev => ({ ...prev, duration: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Data</label>
                <Input
                  type="date"
                  value={episodeData.publishDate}
                  onChange={(e) => setEpisodeData(prev => ({ ...prev, publishDate: e.target.value }))}
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium mb-1 block">Descrição *</label>
              <Textarea
                placeholder="Descreva o conteúdo do episódio..."
                value={episodeData.description}
                onChange={(e) => setEpisodeData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Tags</label>
              <div className="flex gap-2 mb-2">
                <Input
                  placeholder="Nova tag..."
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                />
                <Button size="sm" onClick={addTag}>+</Button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {episodeData.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => removeTag(tag)}
                  >
                    {tag} ×
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={optimizePodcast}
          disabled={isOptimizing || !episodeData.title || !episodeData.description}
          className="w-full"
        >
          {isOptimizing ? (
            <>
              <Rss className="w-4 h-4 mr-2 animate-spin" />
              Otimizando...
            </>
          ) : (
            <>
              <TrendingUp className="w-4 h-4 mr-2" />
              Otimizar para SEO e Distribuição
            </>
          )}
        </Button>

        {optimization && (
          <div className="space-y-4">
            <Separator />

            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Otimização Completa</h4>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <Badge variant="default" className="bg-green-500">
                  Score: {optimization.seoScore}/100
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Título SEO</h5>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(optimization.seoTitle, 'Título')}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                  <p className="text-sm bg-muted p-2 rounded">
                    {optimization.seoTitle}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">Descrição SEO</h5>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(optimization.seoDescription, 'Descrição')}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                  <p className="text-sm bg-muted p-2 rounded">
                    {optimization.seoDescription}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="font-medium mb-2">Tags Otimizadas</h5>
                  <div className="flex gap-1 flex-wrap">
                    {optimization.optimizedTags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Capítulos</h5>
                  <ScrollArea className="h-32">
                    <div className="space-y-2">
                      {optimization.chapters.map((chapter, index) => (
                        <div key={index} className="text-xs border rounded p-2">
                          <div className="font-medium">{chapter.startTime} - {chapter.title}</div>
                          <div className="text-muted-foreground">{chapter.description}</div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-medium">Snippets para Redes Sociais</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {Object.entries(optimization.socialSnippets).map(([platform, snippet]) => (
                  <div key={platform} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="capitalize">{platform}</Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(snippet, platform)}
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                    <p className="text-xs bg-muted p-2 rounded">
                      {snippet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Badge variant="secondary">RSS Feed ✓</Badge>
              <Badge variant="secondary">Schema.org ✓</Badge>
              <Badge variant="secondary">Social Ready ✓</Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PodcastOptimizer;