
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Activity } from 'lucide-react';

const PingDemo = () => {
  return (
    <section className="py-20 bg-gray-50" id="demo">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Veja o Ping em Ação"
          subtitle="Assista uma demonstração completa de como nossa IA monitora e otimiza infraestrutura em tempo real"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-legal to-legal-purple rounded-2xl p-8 text-white text-center">
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <Activity className="w-20 h-20 mx-auto text-legal-cyan hover:text-white transition-colors cursor-pointer" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Demo Interativa - 10 minutos</h3>
              <p className="text-lg mb-6 text-white/90">
                Veja como o Ping detecta anomalias, prediz falhas e otimiza performance: 
                desde alertas inteligentes até dashboards em tempo real com análise preditiva completa
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-legal-cyan text-legal hover:bg-legal-cyan/90">
                  <Play className="mr-2 h-5 w-5" />
                  Assistir Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
                  <Calendar className="mr-2 h-4 w-4" />
                  Teste Gratuito
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-legal mb-2">Setup Rápido</div>
              <p className="text-gray-600">Configuração automática em menos de 1 hora</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-legal mb-2">IA Preditiva</div>
              <p className="text-gray-600">Análise avançada com Machine Learning</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-legal mb-2">Suporte 24/7</div>
              <p className="text-gray-600">Acompanhamento especializado contínuo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PingDemo;
