import React, { useState, useCallback, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mic, AudioLines, FileAudio, Play, Pause, Download } from 'lucide-react';
import { toast } from 'sonner';

interface AudioTranscription {
  id: string;
  audioUrl: string;
  transcript: AudioSegment[];
  summary: string;
  speakers: SpeakerInfo[];
  language: string;
  duration: string;
  confidence: number;
}

interface AudioSegment {
  startTime: string;
  endTime: string;
  text: string;
  speaker: string;
  confidence: number;
}

interface SpeakerInfo {
  id: string;
  name: string;
  segments: number;
}

interface AudioTranscriberProps {
  audioUrl?: string;
  onTranscriptionComplete?: (transcription: AudioTranscription) => void;
}

const AudioTranscriber: React.FC<AudioTranscriberProps> = ({
  audioUrl,
  onTranscriptionComplete
}) => {
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcription, setTranscription] = useState<AudioTranscription | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [recording, setRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(blob);
        setRecordedAudio(audioUrl);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setRecording(true);
      toast.success('Gravação iniciada!');
    } catch (error) {
      console.error('Erro ao iniciar gravação:', error);
      toast.error('Erro ao acessar microfone');
    }
  }, []);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
      toast.success('Gravação finalizada!');
    }
  }, [recording]);

  const transcribeAudio = useCallback(async () => {
    const targetAudio = recordedAudio || audioUrl;
    if (!targetAudio) return;

    setIsTranscribing(true);
    setProgress(0);

    try {
      // Simular progresso de transcrição
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 10;
        });
      }, 300);

      // Simular análise de áudio
      await new Promise(resolve => setTimeout(resolve, 3000));
      clearInterval(progressInterval);
      setProgress(100);

      const mockTranscription: AudioTranscription = {
        id: 'audio-' + Date.now(),
        audioUrl: targetAudio,
        transcript: [
          {
            startTime: "00:00:00",
            endTime: "00:00:10",
            text: "Olá, bem-vindos ao podcast da LEGAL TechCo.",
            speaker: "Apresentador",
            confidence: 0.96
          },
          {
            startTime: "00:00:10",
            endTime: "00:00:25",
            text: "Hoje vamos falar sobre como a tecnologia está transformando o setor de eventos.",
            speaker: "Apresentador", 
            confidence: 0.94
          },
          {
            startTime: "00:00:25",
            endTime: "00:00:40",
            text: "Com nossa plataforma Smart Events, conseguimos aumentar o engajamento em 300%.",
            speaker: "Convidado",
            confidence: 0.91
          },
          {
            startTime: "00:00:40",
            endTime: "00:00:55",
            text: "Isso é impressionante! Como vocês conseguiram esses resultados?",
            speaker: "Apresentador",
            confidence: 0.93
          }
        ],
        summary: "Discussão sobre transformação digital no setor de eventos, apresentando resultados da plataforma Smart Events da LEGAL TechCo e como a tecnologia pode aumentar significativamente o engajamento.",
        speakers: [
          { id: "sp1", name: "Apresentador", segments: 2 },
          { id: "sp2", name: "Convidado", segments: 1 }
        ],
        language: "pt-BR",
        duration: "00:55:00",
        confidence: 0.94
      };

      setTranscription(mockTranscription);
      onTranscriptionComplete?.(mockTranscription);
      toast.success('Transcrição concluída!');

    } catch (error) {
      console.error('Erro na transcrição:', error);
      toast.error('Erro ao transcrever áudio');
    } finally {
      setIsTranscribing(false);
      setProgress(0);
    }
  }, [recordedAudio, audioUrl, onTranscriptionComplete]);

  const togglePlayback = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const downloadTranscript = useCallback(() => {
    if (!transcription) return;

    const content = [
      `Transcrição de Áudio - ${new Date().toLocaleDateString()}`,
      `Duração: ${transcription.duration}`,
      `Idioma: ${transcription.language}`,
      `Confiança: ${Math.round(transcription.confidence * 100)}%`,
      '',
      'RESUMO:',
      transcription.summary,
      '',
      'TRANSCRIÇÃO:',
      ...transcription.transcript.map(segment => 
        `[${segment.startTime} - ${segment.endTime}] ${segment.speaker}: ${segment.text}`
      )
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transcricao-audio-${transcription.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Transcrição baixada!');
  }, [transcription]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AudioLines className="w-5 h-5 text-primary" />
          Transcritor de Áudio AI
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Audio Input Section */}
        <div className="space-y-4">
          {!audioUrl && !recordedAudio && (
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center space-y-4">
              <FileAudio className="w-12 h-12 mx-auto text-muted-foreground" />
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Nenhum áudio carregado. Grave um áudio ou forneça uma URL.
                </p>
                <Button
                  onClick={recording ? stopRecording : startRecording}
                  variant={recording ? "destructive" : "default"}
                  className="mx-auto"
                >
                  <Mic className={`w-4 h-4 mr-2 ${recording ? 'animate-pulse' : ''}`} />
                  {recording ? 'Parar Gravação' : 'Gravar Áudio'}
                </Button>
              </div>
            </div>
          )}

          {/* Audio Player */}
          {(audioUrl || recordedAudio) && (
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={togglePlayback}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </Button>
                
                <div className="flex-1">
                  <audio
                    ref={audioRef}
                    src={recordedAudio || audioUrl}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    className="w-full"
                    controls
                  />
                </div>
              </div>

              <Button
                onClick={transcribeAudio}
                disabled={isTranscribing}
                className="w-full"
              >
                {isTranscribing ? (
                  <>
                    <AudioLines className="w-4 h-4 mr-2 animate-pulse" />
                    Transcrevendo... {Math.round(progress)}%
                  </>
                ) : (
                  <>
                    <AudioLines className="w-4 h-4 mr-2" />
                    Transcrever Áudio AI
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
                    Processando áudio e identificando falantes...
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Transcription Results */}
        {transcription && (
          <div className="space-y-4">
            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Informações</h4>
                <div className="space-y-1">
                  <Badge variant="secondary">Duração: {transcription.duration}</Badge>
                  <Badge variant="secondary">Idioma: {transcription.language}</Badge>
                  <Badge variant="secondary">
                    Confiança: {Math.round(transcription.confidence * 100)}%
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Falantes</h4>
                <div className="space-y-1">
                  {transcription.speakers.map(speaker => (
                    <Badge key={speaker.id} variant="outline">
                      {speaker.name} ({speaker.segments} seg.)
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Resumo:</h4>
              <p className="text-sm text-muted-foreground bg-muted p-3 rounded">
                {transcription.summary}
              </p>
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
                        <Badge variant="secondary" className="text-xs px-1">
                          {segment.speaker}
                        </Badge>
                        <span>Conf: {Math.round(segment.confidence * 100)}%</span>
                      </div>
                      <p className="text-sm">{segment.text}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AudioTranscriber;