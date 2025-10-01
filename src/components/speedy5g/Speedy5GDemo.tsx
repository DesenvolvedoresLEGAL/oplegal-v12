
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';
import { Play, Zap, Signal } from 'lucide-react';

const Speedy5GDemo = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Experimente o Speedy"
          subtitle="Veja na prática como nossa conectividade 5G revoluciona sua operação"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Signal className="w-8 h-8 text-legal-purple" />
                  <h3 className="text-2xl font-bold text-legal">Teste de Velocidade</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Faça um teste gratuito de 30 dias e comprove a diferença. Velocidade de até 10Gbps, 
                  latência ultra-baixa e instalação profissional sem custo.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-legal-cyan" />
                    <span className="text-sm">Teste gratuito por 30 dias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-legal-cyan" />
                    <span className="text-sm">Instalação profissional incluída</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-legal-cyan" />
                    <span className="text-sm">Suporte técnico 24/7</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-legal hover:bg-legal/90 text-white">
                    <Link to="/contato?produto=speedy5g&tipo=teste">Solicitar Teste Gratuito</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contato?produto=speedy5g">Falar com Especialista</Link>
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-legal to-legal-purple rounded-xl p-8 text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 text-legal-cyan" />
                  <h4 className="text-xl font-bold mb-2">Demo Interativa</h4>
                  <p className="text-sm opacity-90 mb-4">
                    Veja nosso dashboard de monitoramento em tempo real
                  </p>
                  <Button asChild variant="outline" className="border-white text-legal hover:bg-white hover:text-legal/80">
                    <Link to="/contato?produto=speedy5g&tipo=demo">Ver Demonstração</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speedy5GDemo;
