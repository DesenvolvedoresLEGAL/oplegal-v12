
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, Zap, Settings } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-legal-black text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-legal to-legal-black opacity-80"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIHN0cm9rZT0iIzE5MTk3MDIwIiBmaWxsPSJub25lIiAvPjxwYXRoIGQ9Ik0gNjAgMCBMIDYwIDYwIiBzdHJva2U9IiMxOTE5NzAyMCIgZmlsbD0ibm9uZSIgLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-20"></div>

      {/* Floating elements with AI theme */}
      <div className="absolute w-64 h-64 rounded-full bg-legal-cyan blur-[100px] top-20 -left-20 opacity-20 animate-pulse"></div>
      <div className="absolute w-96 h-96 rounded-full bg-legal-purple blur-[120px] bottom-0 right-0 opacity-20 animate-pulse" style={{
        animationDelay: "1s"
      }}></div>

      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="text-center max-w-5xl mx-auto">
          <header>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6" style={{ letterSpacing: '0.05em' }}>
              LEGAL AI
            </h1>
            <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-8">
              <strong className="font-bold text-legal-cyan">Ecossistema Completo de Inteligência Artificial</strong> para revolucionar eventos corporativos e negócios. 
              8 produtos transversais integrados para máxima eficiência e resultados exponenciais.
            </p>
          </header>
          <nav className="flex flex-col sm:flex-row justify-center gap-4" role="navigation" aria-label="Ações principais">
            <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
              <Link to="/contato?solution=legal-ai" title="Conheça todas as soluções LEGAL AI">Conheça Todas as Soluções</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
              <Link to="/smart-events" title="Veja a plataforma SmartEvents">Ver SmartEvents</Link>
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
