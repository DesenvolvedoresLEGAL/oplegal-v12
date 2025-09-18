import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Video, FileText, Clock, Languages, Download } from 'lucide-react';
import { toast } from 'sonner';

interface VideoTranscriberProps {
  videoUrl?: string;
  videoId?: string;
  onTranscriptionComplete?: (transcription: VideoTranscription) => void;
}

interface VideoTranscription {
  id: string;
  videoUrl: string;
  transcript: TranscriptSegment[];
  summary: string;
  keywords: string[];
  duration: string;
  language: string;
  chapters: VideoChapter[];
}

interface TranscriptSegment {
  startTime: string;
  endTime: string;
  text: string;
  confidence: number;
}

interface VideoChapter {
  title: string;
  startTime: string;
  description: string;
}

const VideoTranscriber: React.FC<VideoTranscriberProps> = ({
  videoUrl,
  videoId,
  onTranscriptionComplete
}) => {
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcription, setTranscription] = useState<VideoTranscription | null>(null);
  const [progress, setProgress] = useState(0);

  const startTranscription = useCallback(async () => {
    if (!videoUrl && !videoId) return;
    
    setIsTranscribing(true);
    setProgress(0);
    
    try {
      // Simular progresso de transcrição
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 15;
        });
      }, 500);
      
      // Simular transcrição
      await new Promise(resolve => setTimeout(resolve, 3000));
      clearInterval(progressInterval);
      setProgress(100);
      
      const mockTranscription: VideoTranscription = {
        id: videoId || 'video-' + Date.now(),
        videoUrl: videoUrl || '',
        transcript: [
          {
            startTime: "00:00:00",
            endTime: "00:00:15",
            text: "Bem-vindos à LEGAL TechCo, onde transformamos eventos através da tecnologia.",
            confidence: 0.95
          },
          {
            startTime: "00:00:15",
            endTime: "00:00:30",
            text: "Nossa plataforma Smart Events oferece soluções completas para gestão de eventos.",
            confidence: 0.92
          },
          {
            startTime: "00:00:30",
            endTime: "00:00:45",
            text: "Com inteligência artificial e análise de dados em tempo real, revolucionamos a experiência.",
            confidence: 0.88
          },
          {
            startTime: "00:00:45",
            endTime: "00:01:00",
            text: "Conectamos pessoas, negócios e tecnologia de forma inovadora e eficiente.",
            confidence: 0.94
          }
        ],
        summary: "Apresentação da LEGAL TechCo e suas soluções tecnológicas para eventos, destacando o uso de inteligência artificial e análise de dados para criar experiências inovadoras.",
        keywords: ["LEGAL TechCo", "Smart Events", "tecnologia", "eventos", "inteligência artificial", "dados", "inovação"],
        duration: "01:00:00",
        language: "pt-BR",
        chapters: [
          {
            title: "Introdução à LEGAL TechCo",
            startTime: "00:00:00",
            description: "Apresentação da empresa e missão"
          },
          {
            title: "Soluções Smart Events",
            startTime: "00:00:15",
            description: "Visão geral da plataforma e recursos"
          },
          {
            title: "Tecnologia e Inovação",
            startTime: "00:00:30",
            description: "IA e análise de dados em eventos"
          }
        ]
      };
      
      setTranscription(mockTranscription);
      onTranscriptionComplete?.(mockTranscription);
      toast.success('Transcrição concluída com sucesso!');
      
    } catch (error) {
      console.error('Erro na transcrição:', error);
      toast.error('Erro ao transcrever vídeo');
    } finally {
      setIsTranscribing(false);
      setProgress(0);
    }
  }, [videoUrl, videoId, onTranscriptionComplete]);

  const downloadTranscript = useCallback(() => {
    if (!transcription) return;
    
    const content = transcription.transcript
      .map(segment => `[${segment.startTime} - ${segment.endTime}] ${segment.text}`)
      .join('\n\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transcricao-${transcription.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Transcrição baixada!');
  }, [transcription]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Video className="w-5 h-5 text-primary" />
          Transcritor de Vídeo AI
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {(videoUrl || videoId) && (
          <div className="space-y-4">
            {videoUrl && (
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <video 
                  src={videoUrl} 
                  controls 
                  className="max-w-full max-h-full rounded"
                  preload="metadata"
                />
              </div>
            )}
            
            <Button 
              onClick={startTranscription}
              disabled={isTranscribing}
              className="w-full"
            >
              {isTranscribing ? (
                <>
                  <FileText className="w-4 h-4 mr-2 animate-pulse" />
                  Transcrevendo... {Math.round(progress)}%
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4 mr-2" />
                  Iniciar Transcrição AI
                </>
              )}
            </Button>
            
            {isTranscribing && (
              <div className="space-y-2">
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Processando áudio e extraindo texto...
                </p>
              </div>
            )}
          </div>
        )}
        
        {transcription && (
          <div className="space-y-4">
            <Separator />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Duração</span>
                </div>
                <Badge variant="secondary">{transcription.duration}</Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4" />
                  <span className="font-medium">Idioma</span>
                </div>
                <Badge variant="secondary">{transcription.language}</Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Resumo:</h4>
              <p className="text-sm text-muted-foreground bg-muted p-3 rounded">
                {transcription.summary}
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Palavras-chave:</h4>
              <div className="flex gap-2 flex-wrap">
                {transcription.keywords.map((keyword, index) => (
                  <Badge key={index} variant="outline">{keyword}</Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Transcrição Completa:</h4>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={downloadTranscript}
                >
                  <Download className="w-3 h-3 mr-2" />
                  Baixar
                </Button>
              </div>
              
              <ScrollArea className="h-48 w-full border rounded p-3">
                <div className="space-y-3">
                  {transcription.transcript.map((segment, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Badge variant="outline" className="text-xs px-1">
                          {segment.startTime}
                        </Badge>
                        <span>Confiança: {Math.round(segment.confidence * 100)}%</span>
                      </div>
                      <p className="text-sm">{segment.text}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Capítulos:</h4>
              <div className="space-y-2">
                {transcription.chapters.map((chapter, index) => (
                  <div key={index} className="border rounded p-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {chapter.startTime}
                      </Badge>
                      <span className="font-medium text-sm">{chapter.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{chapter.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoTranscriber;