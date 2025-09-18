import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Video, BookOpen, Plus, Edit3, Trash2, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface VideoChapter {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  description: string;
  keywords: string[];
  thumbnail?: string;
}

interface VideoChapterizerProps {
  videoUrl?: string;
  videoDuration?: string;
  existingChapters?: VideoChapter[];
  onChaptersUpdate?: (chapters: VideoChapter[]) => void;
}

const VideoChapterizer: React.FC<VideoChapterizerProps> = ({
  videoUrl,
  videoDuration = "01:00:00",
  existingChapters = [],
  onChaptersUpdate
}) => {
  const [chapters, setChapters] = useState<VideoChapter[]>(existingChapters);
  const [isGenerating, setIsGenerating] = useState(false);
  const [editingChapter, setEditingChapter] = useState<string | null>(null);
  const [newChapter, setNewChapter] = useState<Partial<VideoChapter>>({});

  const generateAutoChapters = useCallback(async () => {
    setIsGenerating(true);
    
    try {
      // Simular análise AI do vídeo
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const autoChapters: VideoChapter[] = [
        {
          id: 'ch1',
          title: 'Introdução à LEGAL TechCo',
          startTime: '00:00:00',
          endTime: '00:02:30',
          description: 'Apresentação da empresa e overview das soluções tecnológicas para eventos',
          keywords: ['LEGAL TechCo', 'apresentação', 'tecnologia', 'eventos'],
          thumbnail: '/placeholder-thumbnail.jpg'
        },
        {
          id: 'ch2', 
          title: 'Smart Events Platform',
          startTime: '00:02:30',
          endTime: '00:08:15',
          description: 'Demonstração detalhada da plataforma Smart Events e suas funcionalidades',
          keywords: ['Smart Events', 'plataforma', 'funcionalidades', 'demo'],
          thumbnail: '/placeholder-thumbnail.jpg'
        },
        {
          id: 'ch3',
          title: 'Cases de Sucesso',
          startTime: '00:08:15',
          endTime: '00:12:45',
          description: 'Apresentação de cases reais de clientes e resultados obtidos',
          keywords: ['cases', 'clientes', 'resultados', 'sucesso'],
          thumbnail: '/placeholder-thumbnail.jpg'
        },
        {
          id: 'ch4',
          title: 'Inteligência Artificial nos Eventos',
          startTime: '00:12:45',
          endTime: '00:18:00',
          description: 'Como a IA revoluciona a experiência em eventos e análise de dados',
          keywords: ['IA', 'inteligência artificial', 'análise', 'dados'],
          thumbnail: '/placeholder-thumbnail.jpg'
        },
        {
          id: 'ch5',
          title: 'Próximos Passos',
          startTime: '00:18:00',
          endTime: '00:20:00',
          description: 'Call to action e informações de contato para demonstração personalizada',
          keywords: ['contato', 'demonstração', 'call to action'],
          thumbnail: '/placeholder-thumbnail.jpg'
        }
      ];
      
      setChapters(autoChapters);
      onChaptersUpdate?.(autoChapters);
      toast.success('Capítulos gerados automaticamente!');
      
    } catch (error) {
      console.error('Erro na geração de capítulos:', error);
      toast.error('Erro ao gerar capítulos');
    } finally {
      setIsGenerating(false);
    }
  }, [onChaptersUpdate]);

  const addChapter = useCallback(() => {
    if (!newChapter.title || !newChapter.startTime) {
      toast.error('Título e tempo inicial são obrigatórios');
      return;
    }
    
    const chapter: VideoChapter = {
      id: 'ch' + Date.now(),
      title: newChapter.title,
      startTime: newChapter.startTime,
      endTime: newChapter.endTime || '00:00:00',
      description: newChapter.description || '',
      keywords: newChapter.keywords || [],
      thumbnail: newChapter.thumbnail
    };
    
    const updatedChapters = [...chapters, chapter].sort((a, b) => 
      a.startTime.localeCompare(b.startTime)
    );
    
    setChapters(updatedChapters);
    setNewChapter({});
    onChaptersUpdate?.(updatedChapters);
    toast.success('Capítulo adicionado!');
  }, [newChapter, chapters, onChaptersUpdate]);

  const deleteChapter = useCallback((chapterId: string) => {
    const updatedChapters = chapters.filter(ch => ch.id !== chapterId);
    setChapters(updatedChapters);
    onChaptersUpdate?.(updatedChapters);
    toast.success('Capítulo removido!');
  }, [chapters, onChaptersUpdate]);

  const formatTime = (timeString: string): string => {
    return timeString || '00:00:00';
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          Capítulos de Vídeo AI
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {videoUrl && (
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
            <video 
              src={videoUrl} 
              controls 
              className="max-w-full max-h-full"
              preload="metadata"
            />
          </div>
        )}
        
        <div className="flex gap-2">
          <Button 
            onClick={generateAutoChapters}
            disabled={isGenerating}
            className="flex-1"
          >
            {isGenerating ? (
              <>
                <Video className="w-4 h-4 mr-2 animate-pulse" />
                Analisando...
              </>
            ) : (
              <>
                <BookOpen className="w-4 h-4 mr-2" />
                Gerar Capítulos AI
              </>
            )}
          </Button>
        </div>
        
        {chapters.length > 0 && (
          <div className="space-y-4">
            <Separator />
            
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Capítulos do Vídeo ({chapters.length})</h4>
              <Badge variant="secondary">
                <Clock className="w-3 h-3 mr-1" />
                {videoDuration}
              </Badge>
            </div>
            
            <ScrollArea className="h-64 w-full">
              <div className="space-y-3 pr-4">
                {chapters.map((chapter, index) => (
                  <div key={chapter.id} className="border rounded-lg p-3 space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {index + 1}
                          </Badge>
                          <span className="font-medium">{chapter.title}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{formatTime(chapter.startTime)}</span>
                          {chapter.endTime && (
                            <>
                              <span>-</span>
                              <span>{formatTime(chapter.endTime)}</span>
                            </>
                          )}
                        </div>
                        
                        {chapter.description && (
                          <p className="text-sm text-muted-foreground">
                            {chapter.description}
                          </p>
                        )}
                        
                        {chapter.keywords.length > 0 && (
                          <div className="flex gap-1 flex-wrap">
                            {chapter.keywords.map((keyword, kIndex) => (
                              <Badge key={kIndex} variant="secondary" className="text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1 ml-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setEditingChapter(chapter.id)}
                        >
                          <Edit3 className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => deleteChapter(chapter.id)}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
        
        <div className="space-y-4">
          <Separator />
          
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Adicionar Capítulo Manual
            </h4>
            
            <div className="grid grid-cols-2 gap-2">
              <Input
                placeholder="Título do capítulo"
                value={newChapter.title || ''}
                onChange={(e) => setNewChapter(prev => ({ ...prev, title: e.target.value }))}
              />
              <Input
                placeholder="Tempo inicial (00:00:00)"
                value={newChapter.startTime || ''}
                onChange={(e) => setNewChapter(prev => ({ ...prev, startTime: e.target.value }))}
              />
            </div>
            
            <Textarea
              placeholder="Descrição do capítulo (opcional)"
              value={newChapter.description || ''}
              onChange={(e) => setNewChapter(prev => ({ ...prev, description: e.target.value }))}
              rows={2}
            />
            
            <Button onClick={addChapter} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Capítulo
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoChapterizer;