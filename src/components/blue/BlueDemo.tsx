
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';

const BlueDemo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Veja o Blue em Ação"
          subtitle="Assista como é simples transformar dados complexos em insights acionáveis"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-legal to-legal-purple rounded-2xl p-8 text-white text-center">
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <Play className="w-20 h-20 mx-auto text-white/80 hover:text-white transition-colors cursor-pointer" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Demo Interativo - 3 minutos</h3>
              <p className="text-lg mb-6 text-white/90">
                Veja como criar um dashboard completo, configurar análises preditivas e gerar insights automaticamente
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-legal hover:bg-white/90">
                  <Play className="mr-2 h-5 w-5" />
                  Assistir Demo
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
                  <a href="https://blue.operadora.legal" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Testar Grátis
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-legal mb-2">Setup</div>
              <p className="text-gray-600">Configuração completa em menos de 24 horas</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-legal mb-2">Treinamento</div>
              <p className="text-gray-600">Equipe capacitada em 2 dias de treinamento</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-legal mb-2">Suporte</div>
              <p className="text-gray-600">Acompanhamento 24/7 nos primeiros 90 dias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueDemo;
