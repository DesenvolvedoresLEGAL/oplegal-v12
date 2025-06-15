
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Smartphone, MapPin, Package } from 'lucide-react';

const SonixDemo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-legal to-legal-purple text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Veja o Sonix em Ação"
          subtitle="Demonstração completa da experiência premium de delivery com drones"
          center
          className="text-white"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Smartphone className="w-8 h-8 text-legal-cyan mr-3" />
                <h3 className="text-2xl font-bold">App Premium</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Interface intuitiva com IA que aprende suas preferências e otimiza automaticamente suas entregas.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-legal-cyan mr-3" />
                <h3 className="text-2xl font-bold">Rastreamento Real</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Acompanhe seu drone em tempo real com precisão GPS centimétrica e notificações automáticas.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Package className="w-8 h-8 text-legal-cyan mr-3" />
                <h3 className="text-2xl font-bold">Entrega Inteligente</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Chegada precisa no local exato com confirmação automática e experiência premium.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-legal-cyan rounded-full flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Demo Interativa</h3>
              <p className="text-gray-200 mb-6">
                Experimente nosso simulador e veja como seria sua primeira entrega com o Sonix.
              </p>
              <div className="space-y-4">
                <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold w-full">
                  <Link to="/contato?demo=sonix">
                    Agendar Demonstração
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal w-full">
                  <Link to="#precos">
                    Ver Preços
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SonixDemo;
