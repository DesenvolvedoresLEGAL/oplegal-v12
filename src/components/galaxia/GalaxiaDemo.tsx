import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Cloud } from 'lucide-react';

const GalaxiaDemo = () => {
  return (
    <section className="py-20 bg-gray-50" id="demo">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Demo Técnica Personalizada - 30 Minutos"
          subtitle="Demonstração ao vivo com seus dados reais, incluindo análise de necessidades, setup personalizado e ambiente de testes por 14 dias"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-legal to-legal-purple rounded-2xl p-8 text-white text-center">
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <Cloud className="w-20 h-20 mx-auto text-legal-cyan hover:text-white transition-colors cursor-pointer" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Demo com Arquiteto de Soluções - 30 minutos</h3>
              <p className="text-lg mb-6 text-white/90">
                Sessão técnica estruturada: Análise de necessidades (10min) + Setup personalizado (10min) + Demonstração ao vivo (10min). 
                Inclui acesso ao ambiente de testes por 14 dias e SLA 99.9% de uptime garantido com suporte 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-legal-cyan text-legal hover:bg-legal-cyan/90">
                  <Play className="mr-2 h-5 w-5" />
                  Solicitar Demo Técnica
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
                  <Calendar className="mr-2 h-4 w-4" />
                  Falar com Arquiteto
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-legal mb-2">Análise (10min)</div>
              <p className="text-gray-600">Mapeamento completo de requisitos e definição de arquitetura</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-legal mb-2">Setup (10min)</div>
              <p className="text-gray-600">Configuração personalizada da infraestrutura cloud dedicada</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-legal mb-2">Demo Ao Vivo (10min)</div>
              <p className="text-gray-600">Apresentação com seus dados reais e acesso de 14 dias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalaxiaDemo;