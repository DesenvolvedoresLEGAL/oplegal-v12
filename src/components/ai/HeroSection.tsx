
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, Zap, Settings } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <Brain className="absolute top-10 left-10 w-32 h-32 text-white/10 animate-pulse" />
        <Zap className="absolute bottom-10 right-10 w-24 h-24 text-white/10 animate-pulse animation-delay-500" />
        <Settings className="absolute top-1/3 right-20 w-28 h-28 text-white/10 animate-ping" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <header>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 animate-fade-in" style={{ letterSpacing: '0.05em' }}>
            LEGAL AI
          </h1>
          <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8 animate-fade-in animation-delay-300">
            <strong className="font-bold text-legal-cyan">Ecossistema Completo de Inteligência Artificial</strong> para revolucionar eventos corporativos e negócios. 
            8 produtos transversais integrados para máxima eficiência e resultados exponenciais.
          </p>
        </header>
        <nav className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600" role="navigation" aria-label="Ações principais">
          <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
            <Link to="/contato?solution=legal-ai" title="Conheça todas as soluções LEGAL AI">Conheça Todas as Soluções</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
            <Link to="/smart-events" title="Veja a plataforma SmartEvents">Ver SmartEvents</Link>
          </Button>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
