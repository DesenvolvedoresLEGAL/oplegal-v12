import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Wifi, Shield, BarChart3, ExternalLink } from 'lucide-react';
const Blue6Hero = () => {
  return <section className="py-24 md:py-32 bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <Wifi className="absolute top-10 left-10 w-32 h-32 text-white/10 animate-pulse" />
        <Shield className="absolute bottom-10 right-10 w-24 h-24 text-white/10 animate-pulse animation-delay-500" />
        <BarChart3 className="absolute top-1/3 right-20 w-28 h-28 text-white/10 animate-ping" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <header>
            <div className="flex items-center gap-3 mb-6">
              <Wifi className="w-12 h-12 text-legal-cyan" />
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider">BLUE6</h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-legal-cyan">
              Hotspot WiFi Inteligente
            </h2>
            
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Conectividade WiFi de <strong>alta performance</strong> com gestão centralizada e análise avançada de uso. 
              Captive portal personalizado, segurança WPA3 e <strong>controle total da sua rede</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="/contato?produto=blue6">Solicitar Demonstração</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-legal hover:bg-white hover:text-legal/80">
                <a href="https://blue6.operadora.legal" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Configurar Blue6™
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-legal-green rounded-full"></div>
                <span>Instalação em 1h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-legal-green rounded-full"></div>
                <span>Suporte 24/7/365</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-legal-green rounded-full"></div>
                <span>+100 usuários simultâneos</span>
              </div>
            </div>
          </header>
          
          <div className="lg:text-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-left">Por que escolher o Blue6?</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-legal-cyan" />
                  <span>WiFi 6 de alta velocidade</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-legal-cyan" />
                  <span>Segurança WPA3 avançada</span>
                </li>
                <li className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-legal-cyan" />
                  <span>Analytics e controle em tempo real</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Blue6Hero;