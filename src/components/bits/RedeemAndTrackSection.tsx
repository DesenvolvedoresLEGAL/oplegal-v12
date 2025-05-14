
import React from 'react';
import { MessageCircle, LayoutDashboard, BellRing } from 'lucide-react';

const RedeemAndTrackSection = () => {
  return (
    <section className="py-16 md:py-24 bg-bits-darkGray text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-bits-cyan mb-12 font-space">Como Resgatar & Acompanhar Seus BITS</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <MessageCircle size={56} className="mx-auto mb-4 text-bits-cyan" />
            <h3 className="text-xl font-bold text-white mb-2">Via WhatsApp</h3>
            <p className="text-gray-300">Consulte saldo, resgate prêmios e tire dúvidas diretamente pelo WhatsApp com nosso assistente BITS.</p>
          </div>
          <div className="p-6">
            <LayoutDashboard size={56} className="mx-auto mb-4 text-bits-cyan" />
            <h3 className="text-xl font-bold text-white mb-2">Dashboard (Em Breve)</h3>
            <p className="text-gray-300">Em breve, um painel completo para você gerenciar seus BITS, histórico e recompensas online.</p>
          </div>
          <div className="p-6">
            <BellRing size={56} className="mx-auto mb-4 text-bits-cyan" />
            <h3 className="text-xl font-bold text-white mb-2">Notificações e Validade</h3>
            <p className="text-gray-300">Mantenha-se atualizado com notificações sobre seus pontos. Seus BITS têm validade de 24 meses.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedeemAndTrackSection;
