
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Bot } from 'lucide-react';

const HumanoidDemo = () => {
  return (
    <section className="py-20 bg-gray-50" id="demo">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Veja o Humanoid Captando Leads"
          subtitle="Demonstração completa de como nossa IA identifica, capta e qualifica leads automaticamente"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-legal to-legal-purple rounded-2xl p-8 text-white text-center">
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <Bot className="w-20 h-20 mx-auto text-legal-cyan hover:text-white transition-colors cursor-pointer" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Demo Ao Vivo - 20 minutos</h3>
              <p className="text-lg mb-6 text-white/90">
                Veja como o Humanoid funciona na prática: desde a captação na internet até a qualificação 
                por WhatsApp e ligações com IA, culminando na entrega de oportunidades qualificadas
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-legal-cyan text-legal hover:bg-legal-cyan/90">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demonstração
                </Button>
                <Button size="lg" variant="outline" className="border-white text-legal hover:bg-white hover:text-legal/80">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar Reunião
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-legal mb-2">Setup 1 Dia</div>
              <p className="text-gray-600">Configuração personalizada e início imediato</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-legal mb-2">CRM Integrado</div>
              <p className="text-gray-600">Leads inseridos automaticamente</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-legal mb-2">SDR Inteligente</div>
              <p className="text-gray-600">Qualificação via WhatsApp e ligações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidDemo;
