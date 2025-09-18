import React, { useState, useCallback } from "react";
import SEOHead from '@/components/SEOHead';
import WebPageSchema from '@/components/seo/WebPageSchema';
import BreadcrumbsSchema from '@/components/seo/BreadcrumbsSchema';
import SoftwareApplicationSchema from '@/components/seo/SoftwareApplicationSchema';
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
import SorteioBanner from '@/components/sorteio/SorteioBanner';

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
  const [clientLogo, setClientLogo] = useState<string | null>(null);

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

  const handleLogoUpload = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setClientLogo(dataUrl);
      toast({
        title: 'Logomarca aplicada',
        description: 'A logomarca do cliente foi adicionada ao banner.'
      });
    };
    reader.onerror = () => {
      toast({
        title: 'Falha ao carregar logomarca',
        description: 'Tente novamente com um arquivo de imagem válido.',
        variant: 'destructive',
      });
    };
    reader.readAsDataURL(file);
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
    <>
      <SEOHead
        title="Sorteio Online Gratuito | Ferramenta LEGAL para Sorteios Justos"
        description="Ferramenta gratuita de sorteio online da LEGAL. Realize sorteios justos e transparentes com histórico completo. Ideal para eventos, promoções e campanhas."
        keywords="sorteio online, sorteio gratuito, ferramenta sorteio, sorteio justo, random, sorteio transparente, LEGAL"
        url="https://operadora.legal/sorteio"
        image="https://operadora.legal/images/sorteio-og.jpg"
        type="website"
      />
      <WebPageSchema
        name="Sorteio Online LEGAL"
        description="Ferramenta gratuita para realizar sorteios online de forma justa e transparente"
        url="https://operadora.legal/sorteio"
        mainEntity={{
          type: "WebApplication",
          name: "Sorteio Online",
          description: "Aplicação web para sorteios justos e transparentes"
        }}
      />
      <BreadcrumbsSchema />
      <SoftwareApplicationSchema
        name="Sorteio Online LEGAL"
        description="Ferramenta web gratuita para realizar sorteios de forma justa e transparente com histórico completo"
        url="https://operadora.legal/sorteio"
        applicationCategory="Utility"
        operatingSystem="Web"
        offers={{
          price: "0",
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock"
        }}
        features={[
          "Sorteios justos e aleatórios",
          "Histórico completo de sorteios",
          "Interface intuitiva",
          "Gratuito para uso",
          "Sem limite de participantes"
        ]}
      />
    <div className="min-h-screen bg-gradient-to-br from-legal-gray via-background to-legal-gray px-4 pt-24 md:pt-28 pb-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <SorteioBanner
          title="Sorteio Ao Vivo"
          subtitle="Sistema de sorteio transparente e seguro"
          logoSrc={clientLogo}
          onLogoChange={(file) => handleLogoUpload(file)}
        />

        {/* Upload Section */}
        <Card className="w-full border-legal/20 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-legal/5 to-legal-purple/5">
            <CardTitle className="flex items-center gap-3 text-legal-black font-haas text-xl">
              <Upload className="w-6 h-6 text-legal" />
              Upload de Participantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="border-2 border-dashed border-legal/30 rounded-xl p-8 text-center hover:border-legal-purple/50 transition-all duration-300 bg-gradient-to-br from-legal-cyan/5 to-legal-purple/5">
              <Input
                type="file"
                accept=".csv,.xlsx,.xls,.pdf"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) processFile(file);
                }}
                className="w-full border-legal/20 focus:border-legal-purple font-haas"
                disabled={loading}
              />
              <p className="text-legal-black/60 font-haas mt-3">
                Aceita arquivos CSV, XLSX ou PDF com coluna "Nome" obrigatória
              </p>
            </div>
            
            {loading && (
              <div className="space-y-3">
                <Progress value={uploadProgress} className="w-full h-3" />
                <p className="text-center text-legal-black/60 font-haas">
                  Processando arquivo...
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Participants List */}
        {participants.length > 0 && (
          <Card className="w-full border-legal/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-legal-purple/5 to-legal-cyan/5">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-legal-black font-haas text-xl">
                  <Users className="w-6 h-6 text-legal-purple" />
                  Lista de Participantes
                </div>
                <Badge className="bg-legal-cyan text-legal-black text-lg px-4 py-2 font-haas font-bold">
                  {participants.length} participantes
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="max-h-60 overflow-y-auto border border-legal/20 rounded-xl">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-legal/5">
                      <TableHead className="font-haas font-bold text-legal">Nome</TableHead>
                      <TableHead className="font-haas font-bold text-legal">E-mail</TableHead>
                      <TableHead className="font-haas font-bold text-legal">WhatsApp</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {participants.map((participant, index) => (
                      <TableRow key={index} className="hover:bg-legal/5">
                        <TableCell className="font-haas font-medium text-legal-black">{participant.nome}</TableCell>
                        <TableCell className="font-haas text-legal-black/70">{participant.email || '-'}</TableCell>
                        <TableCell className="font-haas text-legal-black/70">{participant.whatsapp || '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="flex gap-3 mt-6">
                <Button onClick={downloadCSV} className="bg-legal hover:bg-legal-purple text-white font-haas font-bold">
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Lista (CSV)
                </Button>
                {winnersHistory.length > 0 && (
                  <Button onClick={clearHistory} variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white font-haas font-bold">
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
          <Card className="w-full border-legal/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-legal-cyan/5 to-legal/5">
              <CardTitle className="flex items-center gap-3 text-legal-black font-haas text-xl">
                <Trophy className="w-6 h-6 text-legal-cyan" />
                Sorteio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
              <div className="text-center">
                <Button
                  onClick={drawWinner}
                  size="lg"
                  className="text-2xl px-12 py-8 bg-gradient-to-r from-legal via-legal-purple to-legal-cyan hover:from-legal/90 hover:via-legal-purple/90 hover:to-legal-cyan/90 text-white font-haas font-bold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
                  disabled={isDrawing}
                >
                  <Shuffle className="w-8 h-8 mr-3" />
                  {isDrawing ? "Sorteando..." : "Sortear Vencedor"}
                </Button>
              </div>

              {sorteioResult && (
                <div className="text-center space-y-6 p-8 bg-gradient-to-br from-legal-cyan/10 via-legal-purple/10 to-legal/10 rounded-2xl border-2 border-legal-cyan/30 shadow-xl">
                  <div className="space-y-4">
                    <h3 className="text-4xl font-haas font-bold bg-gradient-to-r from-legal via-legal-purple to-legal-cyan bg-clip-text text-transparent">
                      🏆 VENCEDOR(A)!
                    </h3>
                    <p className="text-5xl font-haas font-bold text-legal-black">{sorteioResult.winner.nome}</p>
                    
                    {sorteioResult.winner.email && (
                      <p className="text-legal-black/70 font-haas text-lg">
                        📧 {maskContact(sorteioResult.winner.email, 'email')}
                      </p>
                    )}
                    
                    {sorteioResult.winner.whatsapp && (
                      <p className="text-legal-black/70 font-haas text-lg">
                        📱 {maskContact(sorteioResult.winner.whatsapp, 'whatsapp')}
                      </p>
                    )}
                    
                    <p className="text-legal-black/60 font-haas">
                      Sorteado em: {new Date(sorteioResult.timestamp).toLocaleString('pt-BR')}
                    </p>
                  </div>

                  <div className="flex gap-4 justify-center flex-wrap">
                    <Button onClick={drawWinner} className="bg-legal-purple hover:bg-legal text-white font-haas font-bold px-6 py-3">
                      <Shuffle className="w-5 h-5 mr-2" />
                      Sortear Novamente
                    </Button>
                    <Button onClick={downloadPDF} className="bg-legal-cyan hover:bg-legal text-legal-black font-haas font-bold px-6 py-3">
                      <Download className="w-5 h-5 mr-2" />
                      Baixar Comprovante (PDF)
                    </Button>
                  </div>
                </div>
              )}

              {winnersHistory.length > 0 && (
                <div className="mt-8">
                  <h4 className="font-haas font-bold text-legal-black text-lg mb-4">Histórico de Vencedores:</h4>
                  <div className="flex flex-wrap gap-3">
                    {winnersHistory.map((winner, index) => (
                      <Badge key={index} className="bg-legal-purple/20 text-legal-purple border border-legal-purple/30 font-haas font-medium px-3 py-1">
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
    </>
  );
};