
import React from 'react';
import { Button } from '@/components/ui/button';
import { Ticket, Briefcase, Crown, Rocket } from 'lucide-react'; // Example Icons

const rewardsData = [
  { points: "1.000 - 4.999 BITS", benefits: ["Descontos progressivos", "Acesso a conteúdos exclusivos"], icon: Ticket },
  { points: "5.000 - 29.999 BITS", benefits: ["Brindes LEGAL", "Upgrade de equipamentos", "Suporte prioritário"], icon: Briefcase },
  { points: "30.000 - 99.999 BITS", benefits: ["Consultoria especializada", "Convites para eventos parceiros"], icon: Crown },
  { points: "100.000+ BITS", benefits: ["Acesso vitalício a lançamentos", "Convites VIP para eventos LEGAL", "Co-criação de soluções"], icon: Rocket },
];

const BitsRewardsSection = () => {
  const whatsAppUrl = `https://wa.me/551151942223?text=${encodeURIComponent("Olá! Gostaria de saber quantos pontos BITS™ eu já tenho.")}`;
  return (
    <section className="py-16 md:py-24 bg-bits-darkGray text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-bits-cyan mb-12 font-space">Recompensas BITS™</h2>
        <div className="space-y-8">
          {rewardsData.map((reward, index) => (
            <div key={index} className="p-6 bg-gray-800/70 rounded-lg shadow-xl border border-bits-cyan/40 flex flex-col md:flex-row items-center">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <reward.icon size={60} className="text-bits-cyan" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{reward.points}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {reward.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-bits-cyan text-bits-darkGray hover:bg-bits-cyan/90 font-bold text-lg px-10 py-6"
            asChild
          >
             <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
              Veja quantos pontos você já tem
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BitsRewardsSection;
