
import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap, MessageCircle } from 'lucide-react';

const BitsHeroSection = () => {
  const whatsAppUrl = `https://wa.me/551151942223?text=${encodeURIComponent("Olá! Quero ativar minha conta BITS™.")}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-legal-black text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-legal to-legal-black opacity-80"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIHN0cm9rZT0iIzE5MTk3MDIwIiBmaWxsPSJub25lIiAvPjxwYXRoIGQ9Ik0gNjAgMCBMIDYwIDYwIiBzdHJva2U9IiMxOTE5NzAyMCIgZmlsbD0ibm9uZSIgLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-20"></div>

      {/* Floating elements */}
      <div className="absolute w-64 h-64 rounded-full bg-legal-cyan blur-[100px] top-20 -left-20 opacity-20 animate-pulse"></div>
      <div className="absolute w-96 h-96 rounded-full bg-legal-purple blur-[120px] bottom-0 right-0 opacity-20 animate-pulse" style={{
        animationDelay: "1s"
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center py-24">
        <Zap size={64} className="mx-auto mb-6 text-legal-cyan animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Sua conexão agora vale <span className="text-legal-cyan">pontos</span>, <span className="text-legal-purple">upgrades</span> e um lugar entre os <span className="text-legal-cyan">melhores</span> do Brasil.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Bem-vindo ao BITS™, o programa de fidelidade da LEGAL que transforma cada interação em recompensas incríveis.
        </p>
        <Button
          size="lg"
          className="bg-legal-cyan text-legal-black hover:bg-legal-cyan/90 font-bold text-lg px-10 py-6"
          asChild
        >
          <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={24} className="mr-3" />
            Ativar minha conta BITS agora
          </a>
        </Button>
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

export default BitsHeroSection;
