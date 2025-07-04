
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Play, Calendar } from 'lucide-react';

const BrilixDemo = () => {
  return (
    <section className="py-20 bg-white" id="demo">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Veja o Brilix em Ação"
          subtitle="Assista como nossos drones executam limpeza profissional em altura com total segurança e eficiência"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-legal to-legal-purple rounded-2xl p-8 text-white text-center">
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <Play className="w-20 h-20 mx-auto text-white/80 hover:text-white transition-colors cursor-pointer" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Demo ao Vivo - 5 minutos</h3>
              <p className="text-lg mb-6 text-white/90">
                Veja uma operação real de limpeza de fachada com análise de eficiência, controle de segurança e resultados impressionantes
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-legal hover:bg-white/90">
                  <Play className="mr-2 h-5 w-5" />
                  Assistir Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-legal hover:bg-white hover:text-legal/80">
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar Visita Técnica
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-legal mb-2">Análise</div>
              <p className="text-gray-600">Avaliação técnica do local em 24h</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-legal mb-2">Execução</div>
              <p className="text-gray-600">Operação completa em até 3 dias</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-legal mb-2">Relatório</div>
              <p className="text-gray-600">Documentação completa + fotos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrilixDemo;
