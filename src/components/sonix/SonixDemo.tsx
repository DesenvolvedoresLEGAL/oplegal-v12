
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Download, BarChart3 } from 'lucide-react';

const SonixDemo = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Experimente o Sonix em Ação"
          subtitle="Veja como nossa IA transforma áudio em insights valiosos em segundos"
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="aspect-video bg-gradient-to-br from-legal to-legal-purple rounded-lg flex items-center justify-center mb-6">
                <Button size="lg" className="bg-white text-legal hover:bg-gray-100">
                  <Play className="w-6 h-6 mr-2" />
                  Assistir Demo
                </Button>
              </div>
              <h3 className="text-2xl font-bold text-legal mb-4">Demo Interativa</h3>
              <p className="text-gray-600 mb-6">
                Veja como o Sonix processa uma reunião real, gerando transcrições precisas, 
                análise de sentimentos e insights estratégicos em tempo real.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Exemplo
                </Button>
                <Button variant="outline" className="flex-1">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Ver Relatório
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-bold text-legal mb-2">Transcrição Ultra-Precisa</h4>
              <p className="text-gray-600 text-sm">
                99,5% de precisão na conversão de áudio para texto, 
                incluindo identificação de speakers e timestamps.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-bold text-legal mb-2">Análise de Sentimentos</h4>
              <p className="text-gray-600 text-sm">
                Detecção automática de emoções, tom e intenções 
                para insights comportamentais profundos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-bold text-legal mb-2">Insights Estratégicos</h4>
              <p className="text-gray-600 text-sm">
                Palavras-chave, tópicos principais e métricas de 
                engajamento extraídas automaticamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SonixDemo;
