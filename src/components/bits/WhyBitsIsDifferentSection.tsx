
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Award, MessageCircle } from 'lucide-react';

const differentiators = [
  { icon: Zap, text: "Entrega rápida de recompensas e benefícios." },
  { icon: Award, text: "Gamificação envolvente com níveis e desafios constantes." },
  { icon: CheckCircle, text: "Multicanalidade: acumule e resgate em todas as unidades LEGAL." },
  { icon: MessageCircle, text: "Atendimento e suporte dedicados via WhatsApp." },
];

const WhyBitsIsDifferentSection = () => {
  const whatsAppUrl = `https://wa.me/551151942223?text=${encodeURIComponent("Olá! Quero ativar minha conta BITS™.")}`;
  return (
    <section className="py-16 md:py-24 bg-bits-darkGray text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-legal-cyan mb-12">Por que o BITS™ é Diferente?</h2> {/* Cor e font-space atualizados */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 max-w-3xl mx-auto mb-12 text-left">
          {differentiators.map((item, index) => (
            <div key={index} className="flex items-center">
              <item.icon size={24} className="mr-3 text-legal-cyan flex-shrink-0" />
              <p className="text-gray-300 text-lg">{item.text}</p>
            </div>
          ))}
        </div>
        <Button
          size="lg"
          className="bg-legal-cyan text-legal-black hover:bg-legal-cyan/90 font-bold text-lg px-10 py-6 animate-pulse-glow" /* Cores atualizadas */
          asChild
        >
          <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={24} className="mr-3" />
            Ativar minha conta BITS™ agora
          </a>
        </Button>
      </div>
    </section>
  );
};

export default WhyBitsIsDifferentSection;
