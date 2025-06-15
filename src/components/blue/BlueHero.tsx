
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart3, Brain, TrendingUp, ExternalLink } from 'lucide-react';

const BlueHero = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <BarChart3 className="absolute top-10 left-10 w-32 h-32 text-white/10 animate-pulse" />
        <Brain className="absolute bottom-10 right-10 w-24 h-24 text-white/10 animate-pulse animation-delay-500" />
        <TrendingUp className="absolute top-1/3 right-20 w-28 h-28 text-white/10 animate-ping" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <header>
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-12 h-12 text-legal-cyan" />
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider">Blue</h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-legal-cyan">
              Plataforma de BI com Inteligência Artificial
            </h2>
            
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Transforme dados complexos em <strong>insights acionáveis</strong> com nossa plataforma de Business Intelligence powered by AI. 
              Dashboards interativos, análise preditiva e relatórios automatizados para <strong>decisões estratégicas certeiras</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
                <Link to="/contato?produto=blue">Demonstração Gratuita</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
                <a href="https://blue.operadora.legal" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Acesso Blue™
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-legal-green rounded-full"></div>
                <span>Setup em 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-legal-green rounded-full"></div>
                <span>Suporte 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-legal-green rounded-full"></div>
                <span>ROI em 30 dias</span>
              </div>
            </div>
          </header>
          
          <div className="lg:text-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Por que escolher Blue?</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-legal-cyan" />
                  <span>IA nativa para análise preditiva</span>
                </li>
                <li className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-legal-cyan" />
                  <span>Dashboards dinâmicos e interativos</span>
                </li>
                <li className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-legal-cyan" />
                  <span>Relatórios automatizados inteligentes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueHero;
