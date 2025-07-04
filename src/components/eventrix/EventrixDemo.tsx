
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Play, Calendar } from 'lucide-react';

const EventrixDemo = () => {
  return (
    <section className="py-20 bg-white" id="demo">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Veja o Eventrix em Ação"
          subtitle="Assista uma demonstração completa de como nossa IA transforma a gestão de eventos"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-legal to-legal-purple rounded-2xl p-8 text-white text-center">
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <Play className="w-20 h-20 mx-auto text-white/80 hover:text-white transition-colors cursor-pointer" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Demo Interativa - 10 minutos</h3>
              <p className="text-lg mb-6 text-white/90">
                Explore nossa plataforma completa: desde o planejamento até a análise pós-evento, 
                veja como a IA otimiza cada etapa do processo
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-legal hover:bg-white/90">
                  <Play className="mr-2 h-5 w-5" />
                  Assistir Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-legal hover:bg-white hover:text-legal/80">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar Apresentação
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-legal mb-2">Setup</div>
              <p className="text-gray-600">Configuração completa em 24h</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-legal mb-2">Launch</div>
              <p className="text-gray-600">Evento rodando em tempo real</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-legal mb-2">Insights</div>
              <p className="text-gray-600">Relatórios inteligentes + KPIs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventrixDemo;
