
import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap, MessageCircle } from 'lucide-react';

const BitsHeroSection = () => {
  const whatsAppUrl = `https://wa.me/551151942223?text=${encodeURIComponent("Olá! Quero ativar minha conta BITS™.")}`;

  return (
    <section className="relative py-20 md:py-32 text-white overflow-hidden bg-bits-darkGray">
      {/* Background Elements - Simple gradient and shapes for now */}
      <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at top right, #4d2bfb, transparent 60%), radial-gradient(circle at bottom left, #03f9ff, transparent 60%)'}}></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <Zap size={64} className="mx-auto mb-6 text-legal-cyan animate-pulse-glow" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight"> {/* Removido font-space */}
          Sua conexão agora vale <span className="text-legal-cyan">pontos</span>, <span className="text-legal-purple">upgrades</span> e um lugar entre os <span className="text-legal-cyan">melhores</span> do Brasil.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Bem-vindo ao BITS™, o programa de fidelidade da LEGAL que transforma cada interação em recompensas incríveis.
        </p>
        <Button
          size="lg"
          className="bg-legal-cyan text-legal-black hover:bg-legal-cyan/90 font-bold text-lg px-10 py-6 animate-pulse-glow"
          asChild
        >
          <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={24} className="mr-3" />
            Ativar minha conta BITS agora
          </a>
        </Button>
      </div>
    </section>
  );
};

export default BitsHeroSection;
