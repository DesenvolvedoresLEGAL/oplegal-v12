
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bot, Zap, Users } from 'lucide-react';

const HumanoidHero = () => {
  return (
    <section className="py-24 md:py-32 text-center bg-gradient-to-br from-legal to-legal-purple text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <Bot className="absolute top-10 left-10 w-32 h-32 text-white/10 animate-pulse" />
        <Zap className="absolute bottom-10 right-10 w-24 h-24 text-white/10 animate-pulse animation-delay-500" />
        <Users className="absolute top-1/3 right-20 w-28 h-28 text-white/10 animate-ping" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <header>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Bot className="w-12 h-12 text-legal-cyan" />
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider" style={{ letterSpacing: '0.05em' }}>
              Humanoid
            </h1>
          </div>
          <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8">
            <strong className="font-bold text-legal-cyan">Robótica Inteligente com IA</strong> que revoluciona 
            eventos e negócios. Interação natural, automação avançada e experiências memoráveis com tecnologia humanóide de última geração.
          </p>
        </header>
        <nav className="flex flex-col sm:flex-row justify-center gap-4" role="navigation">
          <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
            <Link to="/contato?produto=humanoid">Solicitar Demonstração</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
            <Link to="/negocios/ai">Ver Todos os Produtos AI</Link>
          </Button>
        </nav>
      </div>
    </section>
  );
};

export default HumanoidHero;
