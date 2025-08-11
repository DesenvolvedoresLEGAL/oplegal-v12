import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { Upload, Users, Trophy, Download, Shuffle, Trash2 } from "lucide-react";
import confetti from "canvas-confetti";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';

interface Participant {
  nome: string;
  email?: string;
  whatsapp?: string;
}

interface SorteioResult {
  winner: Participant;
  timestamp: string;
  totalParticipants: number;
  hash: string;
}

export default function SorteioPage() {
  const { toast } = useToast();
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [sorteioResult, setSorteioResult] = useState<SorteioResult | null>(null);
  const [winnersHistory, setWinnersHistory] = useState<Participant[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const processFile = useCallback(async (file: File) => {
    setLoading(true);
    setUploadProgress(0);
    
    try {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      
      if (fileExtension === 'csv') {
        await processCSV(file);
      } else if (fileExtension === 'xlsx' || fileExtension === 'xls') {
        await processXLSX(file);
      } else if (fileExtension === 'pdf') {
        toast({
          title: "PDF não suportado no momento",
          description: "Por favor, envie CSV ou XLSX",
          variant: "destructive",
        });
        return;
      } else {
        throw new Error("Formato de arquivo não suportado");
      }
    } catch (error) {
      toast({
        title: "Erro ao processar arquivo",
        description: error instanceof Error ? error.message : "Erro desconhecido",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  }, [toast]);

  const processCSV = async (file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const csv = e.target?.result as string;
          const lines = csv.split('\n').filter(line => line.trim());
          const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
          
          const nomeIndex = headers.findIndex(h => h.includes('nome'));
          if (nomeIndex === -1) {
            reject(new Error("Arquivo inválido: coluna Nome obrigatória"));
            return;
          }

          const emailIndex = headers.findIndex(h => h.includes('email'));
          const whatsappIndex = headers.findIndex(h => h.includes('whatsapp') || h.includes('telefone'));

          const newParticipants: Participant[] = [];
          
          for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.trim());
            if (values[nomeIndex]) {
              const participant: Participant = {
                nome: values[nomeIndex],
                email: emailIndex !== -1 ? values[emailIndex] : undefined,
                whatsapp: whatsappIndex !== -1 ? values[whatsappIndex] : undefined,
              };
              newParticipants.push(participant);
            }
          }

          removeDuplicatesAndSetParticipants(newParticipants);
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsText(file);
    });
  };

  const processXLSX = async (file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = e.target?.result as ArrayBuffer;
          const workbook = XLSX.read(data, { type: 'array' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][];

          if (jsonData.length < 2) {
            reject(new Error("Arquivo vazio ou sem dados"));
            return;
          }

          const headers = jsonData[0].map(h => h?.toString().toLowerCase() || '');
          const nomeIndex = headers.findIndex(h => h.includes('nome'));
          
          if (nomeIndex === -1) {
            reject(new Error("Arquivo inválido: coluna Nome obrigatória"));
            return;
          }

          const emailIndex = headers.findIndex(h => h.includes('email'));
          const whatsappIndex = headers.findIndex(h => h.includes('whatsapp') || h.includes('telefone'));

          const newParticipants: Participant[] = [];
          
          for (let i = 1; i < jsonData.length; i++) {
            const row = jsonData[i];
            if (row[nomeIndex]) {
              const participant: Participant = {
                nome: row[nomeIndex].toString(),
                email: emailIndex !== -1 && row[emailIndex] ? row[emailIndex].toString() : undefined,
                whatsapp: whatsappIndex !== -1 && row[whatsappIndex] ? row[whatsappIndex].toString() : undefined,
              };
              newParticipants.push(participant);
            }
          }

          removeDuplicatesAndSetParticipants(newParticipants);
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const removeDuplicatesAndSetParticipants = (newParticipants: Participant[]) => {
    const unique = newParticipants.filter((participant, index, self) => {
      return index === self.findIndex(p => 
        p.nome.toLowerCase() === participant.nome.toLowerCase() ||
        (p.email && participant.email && p.email.toLowerCase() === participant.email.toLowerCase()) ||
        (p.whatsapp && participant.whatsapp && p.whatsapp === participant.whatsapp)
      );
    });

    setParticipants(unique);
    setSorteioResult(null);
    setWinnersHistory([]);
    
    toast({
      title: "Lista carregada com sucesso!",
      description: `${unique.length} participantes válidos (${newParticipants.length - unique.length} duplicatas removidas)`,
    });
  };

  const generateHash = (data: string): string => {
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      const char = data.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
  };

  const drawWinner = async () => {
    if (participants.length < 2) {
      toast({
        title: "Participantes insuficientes",
        description: "É necessário pelo menos 2 participantes para realizar o sorteio",
        variant: "destructive",
      });
      return;
    }

    const availableParticipants = participants.filter(p => 
      !winnersHistory.some(w => w.nome === p.nome)
    );

    if (availableParticipants.length === 0) {
      toast({
        title: "Todos já foram sorteados",
        description: "Limpe o histórico para sortear novamente",
        variant: "destructive",
      });
      return;
    }

    setIsDrawing(true);

    // Animação de suspense
    let animationCount = 0;
    const animationInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * availableParticipants.length);
      setSorteioResult({
        winner: availableParticipants[randomIndex],
        timestamp: new Date().toISOString(),
        totalParticipants: participants.length,
        hash: '',
      });
      animationCount++;
      
      if (animationCount >= 10) {
        clearInterval(animationInterval);
        performActualDraw(availableParticipants);
      }
    }, 100);
  };

  const performActualDraw = (availableParticipants: Participant[]) => {
    // Usar Web Crypto para RNG seguro
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const randomIndex = array[0] % availableParticipants.length;
    
    const winner = availableParticipants[randomIndex];
    const timestamp = new Date().toISOString();
    const participantsString = JSON.stringify(participants);
    const hash = generateHash(participantsString + timestamp);

    const result: SorteioResult = {
      winner,
      timestamp,
      totalParticipants: participants.length,
      hash,
    };

    setSorteioResult(result);
    setWinnersHistory(prev => [...prev, winner]);
    setIsDrawing(false);

    // Confete
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    toast({
      title: "🎉 Temos um vencedor!",
      description: `${winner.nome} foi sorteado(a)!`,
    });
  };

  const maskContact = (contact: string, type: 'email' | 'whatsapp'): string => {
    if (type === 'email') {
      const [local, domain] = contact.split('@');
      return `${local.substring(0, 2)}***@${domain}`;
    } else {
      return `${contact.substring(0, 4)}****${contact.substring(contact.length - 2)}`;
    }
  };

  const downloadPDF = () => {
    if (!sorteioResult) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;

    // Header
    doc.setFontSize(20);
    doc.setTextColor(2, 12, 188);
    doc.text('LEGAL - Comprovante de Sorteio', pageWidth / 2, 30, { align: 'center' });

    // Info do sorteio
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Data/Hora: ${new Date(sorteioResult.timestamp).toLocaleString('pt-BR')}`, 20, 60);
    doc.text(`Total de Participantes: ${sorteioResult.totalParticipants}`, 20, 70);
    doc.text(`Hash de Integridade: ${sorteioResult.hash}`, 20, 80);

    // Vencedor
    doc.setFontSize(16);
    doc.setTextColor(77, 43, 251);
    doc.text('🏆 VENCEDOR:', 20, 110);
    
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(`Nome: ${sorteioResult.winner.nome}`, 20, 130);
    
    if (sorteioResult.winner.email) {
      doc.text(`E-mail: ${maskContact(sorteioResult.winner.email, 'email')}`, 20, 140);
    }
    
    if (sorteioResult.winner.whatsapp) {
      doc.text(`WhatsApp: ${maskContact(sorteioResult.winner.whatsapp, 'whatsapp')}`, 20, 150);
    }

    doc.save(`sorteio-legal-${new Date().getTime()}.pdf`);
  };

  const downloadCSV = () => {
    const csvContent = [
      'Nome,Email,WhatsApp',
      ...participants.map(p => `${p.nome},${p.email || ''},${p.whatsapp || ''}`)
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `participantes-sorteio-${new Date().getTime()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const clearHistory = () => {
    setWinnersHistory([]);
    setSorteioResult(null);
    toast({
      title: "Histórico limpo",
      description: "Todos os participantes podem ser sorteados novamente",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Sorteio LEGAL MVP
          </h1>
          <p className="text-muted-foreground text-lg">
            Sistema de sorteio transparente e seguro
          </p>
        </div>

        {/* Upload Section */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload de Participantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <Input
                type="file"
                accept=".csv,.xlsx,.xls,.pdf"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) processFile(file);
                }}
                className="w-full"
                disabled={loading}
              />
              <p className="text-sm text-muted-foreground mt-2">
                Aceita arquivos CSV, XLSX ou PDF com coluna "Nome" obrigatória
              </p>
            </div>
            
            {loading && (
              <div className="space-y-2">
                <Progress value={uploadProgress} className="w-full" />
                <p className="text-sm text-center text-muted-foreground">
                  Processando arquivo...
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Participants List */}
        {participants.length > 0 && (
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Lista de Participantes
                </div>
                <Badge variant="outline" className="text-lg px-3 py-1">
                  {participants.length} participantes
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-h-60 overflow-y-auto border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>E-mail</TableHead>
                      <TableHead>WhatsApp</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {participants.map((participant, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{participant.nome}</TableCell>
                        <TableCell>{participant.email || '-'}</TableCell>
                        <TableCell>{participant.whatsapp || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button onClick={downloadCSV} variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Lista (CSV)
                </Button>
                {winnersHistory.length > 0 && (
                  <Button onClick={clearHistory} variant="outline" size="sm">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Limpar Histórico
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Sorteio Section */}
        {participants.length >= 2 && (
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Sorteio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Button
                  onClick={drawWinner}
                  size="lg"
                  className="text-xl px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  disabled={isDrawing}
                >
                  <Shuffle className="w-6 h-6 mr-2" />
                  {isDrawing ? "Sorteando..." : "Sortear Vencedor"}
                </Button>
              </div>

              {sorteioResult && (
                <div className="text-center space-y-4 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">🏆 VENCEDOR(A)!</h3>
                    <p className="text-3xl font-bold">{sorteioResult.winner.nome}</p>
                    
                    {sorteioResult.winner.email && (
                      <p className="text-muted-foreground">
                        📧 {maskContact(sorteioResult.winner.email, 'email')}
                      </p>
                    )}
                    
                    {sorteioResult.winner.whatsapp && (
                      <p className="text-muted-foreground">
                        📱 {maskContact(sorteioResult.winner.whatsapp, 'whatsapp')}
                      </p>
                    )}
                    
                    <p className="text-sm text-muted-foreground">
                      Sorteado em: {new Date(sorteioResult.timestamp).toLocaleString('pt-BR')}
                    </p>
                  </div>

                  <div className="flex gap-2 justify-center flex-wrap">
                    <Button onClick={drawWinner} variant="outline">
                      <Shuffle className="w-4 h-4 mr-2" />
                      Sortear Novamente
                    </Button>
                    <Button onClick={downloadPDF} variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Comprovante (PDF)
                    </Button>
                  </div>
                </div>
              )}

              {winnersHistory.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Histórico de Vencedores:</h4>
                  <div className="flex flex-wrap gap-2">
                    {winnersHistory.map((winner, index) => (
                      <Badge key={index} variant="secondary">
                        {winner.nome}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}