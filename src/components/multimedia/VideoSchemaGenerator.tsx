import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Video, Code, Copy, Check, Download } from 'lucide-react';
import { toast } from 'sonner';

interface VideoSchemaData {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl?: string;
  embedUrl?: string;
  transcript?: string;
  chapters?: VideoChapter[];
}

interface VideoChapter {
  name: string;
  startOffset: number;
  url: string;
}

interface VideoSchemaGeneratorProps {
  videoData?: Partial<VideoSchemaData>;
  onSchemaGenerated?: (schema: object) => void;
}

const VideoSchemaGenerator: React.FC<VideoSchemaGeneratorProps> = ({
  videoData = {},
  onSchemaGenerated
}) => {
  const [formData, setFormData] = useState<VideoSchemaData>({
    name: videoData.name || '',
    description: videoData.description || '',
    thumbnailUrl: videoData.thumbnailUrl || '',
    uploadDate: videoData.uploadDate || new Date().toISOString().split('T')[0],
    duration: videoData.duration || '',
    contentUrl: videoData.contentUrl || '',
    embedUrl: videoData.embedUrl || '',
    transcript: videoData.transcript || '',
    chapters: videoData.chapters || []
  });
  
  const [generatedSchema, setGeneratedSchema] = useState<object | null>(null);
  const [copied, setCopied] = useState(false);

  const generateSchema = useCallback(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": formData.name,
      "description": formData.description,
      "thumbnailUrl": formData.thumbnailUrl,
      "uploadDate": formData.uploadDate + "T00:00:00Z",
      "duration": convertToISO8601Duration(formData.duration),
      "contentUrl": formData.contentUrl,
      "embedUrl": formData.embedUrl,
      "transcript": formData.transcript,
      "publisher": {
        "@type": "Organization",
        "name": "LEGAL TechCo",
        "logo": {
          "@type": "ImageObject",
          "url": "https://operadora.legal/images/legal-logo.png"
        }
      },
      "author": {
        "@type": "Organization",
        "name": "LEGAL TechCo"
      },
      "inLanguage": "pt-BR",
      "isAccessibleForFree": true,
      "keywords": extractKeywords(formData.description),
      "hasPart": formData.chapters?.map(chapter => ({
        "@type": "Clip",
        "name": chapter.name,
        "startOffset": chapter.startOffset,
        "url": chapter.url
      })) || [],
      "potentialAction": {
        "@type": "SeekToAction",
        "target": formData.embedUrl ? `${formData.embedUrl}?t={seek_to_second_number}` : undefined
      },
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/WatchAction",
        "userInteractionCount": "0"
      }
    };

    // Remove campos vazios
    Object.keys(schema).forEach(key => {
      if (schema[key as keyof typeof schema] === '' || schema[key as keyof typeof schema] === undefined) {
        delete schema[key as keyof typeof schema];
      }
    });

    setGeneratedSchema(schema);
    onSchemaGenerated?.(schema);
    toast.success('Schema de vídeo gerado!');
  }, [formData, onSchemaGenerated]);

  const convertToISO8601Duration = (duration: string): string => {
    // Converter formato MM:SS ou HH:MM:SS para ISO 8601 (PT#M#S)
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

  const extractKeywords = (text: string): string[] => {
    const commonKeywords = ['LEGAL TechCo', 'Smart Events', 'tecnologia', 'eventos', 'inovação'];
    const textWords = text.toLowerCase().split(/\s+/)
      .filter(word => word.length > 3)
      .slice(0, 10);
    
    return [...commonKeywords, ...textWords];
  };

  const copySchema = useCallback(async () => {
    if (!generatedSchema) return;
    
    try {
      await navigator.clipboard.writeText(JSON.stringify(generatedSchema, null, 2));
      setCopied(true);
      toast.success('Schema copiado para a área de transferência!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Erro ao copiar schema');
    }
  }, [generatedSchema]);

  const downloadSchema = useCallback(() => {
    if (!generatedSchema) return;
    
    const blob = new Blob([JSON.stringify(generatedSchema, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `video-schema-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Schema baixado!');
  }, [generatedSchema]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="w-5 h-5 text-primary" />
          Gerador de Schema de Vídeo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium mb-1 block">Título do Vídeo *</label>
              <Input
                placeholder="Ex: Apresentação LEGAL TechCo 2024"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Duração *</label>
              <Input
                placeholder="Ex: 10:30 ou 01:10:30"
                value={formData.duration}
                onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">URL da Thumbnail *</label>
              <Input
                placeholder="https://exemplo.com/thumbnail.jpg"
                value={formData.thumbnailUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, thumbnailUrl: e.target.value }))}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Data de Upload</label>
              <Input
                type="date"
                value={formData.uploadDate}
                onChange={(e) => setFormData(prev => ({ ...prev, uploadDate: e.target.value }))}
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium mb-1 block">URL do Vídeo</label>
              <Input
                placeholder="https://exemplo.com/video.mp4"
                value={formData.contentUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, contentUrl: e.target.value }))}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">URL de Embed</label>
              <Input
                placeholder="https://youtube.com/embed/..."
                value={formData.embedUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, embedUrl: e.target.value }))}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Descrição *</label>
              <Textarea
                placeholder="Descreva o conteúdo do vídeo..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
              />
            </div>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Transcrição (Opcional)</label>
          <Textarea
            placeholder="Transcrição completa do vídeo..."
            value={formData.transcript}
            onChange={(e) => setFormData(prev => ({ ...prev, transcript: e.target.value }))}
            rows={3}
          />
        </div>
        
        <Button 
          onClick={generateSchema} 
          className="w-full"
          disabled={!formData.name || !formData.description || !formData.thumbnailUrl}
        >
          <Video className="w-4 h-4 mr-2" />
          Gerar Schema JSON-LD
        </Button>
        
        {generatedSchema && (
          <div className="space-y-4">
            <Separator />
            
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Schema Gerado</h4>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={copySchema}
                >
                  {copied ? (
                    <Check className="w-3 h-3 mr-2" />
                  ) : (
                    <Copy className="w-3 h-3 mr-2" />
                  )}
                  {copied ? 'Copiado!' : 'Copiar'}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={downloadSchema}
                >
                  <Download className="w-3 h-3 mr-2" />
                  Baixar
                </Button>
              </div>
            </div>
            
            <ScrollArea className="h-64 w-full border rounded p-3">
              <pre className="text-xs">
                <code>{JSON.stringify(generatedSchema, null, 2)}</code>
              </pre>
            </ScrollArea>
            
            <div className="grid grid-cols-3 gap-2">
              <Badge variant="secondary">Schema.org ✓</Badge>
              <Badge variant="secondary">JSON-LD ✓</Badge>
              <Badge variant="secondary">SEO Ready ✓</Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoSchemaGenerator;