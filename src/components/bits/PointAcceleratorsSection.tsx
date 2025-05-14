
import React from 'react';
import { Zap, Gift, Users, Star } from 'lucide-react';

const accelerators = [
  { icon: Zap, title: "Campanhas Promocionais", description: "Fique de olho em nossas campanhas sazonais para ganhar BITS em dobro ou triplo!" },
  { icon: Gift, title: "Aniversário BITS", description: "Clientes BITS ganham pontos extras no seu aniversário e no aniversário do programa." },
  { icon: Users, title: "Indicações Estratégicas", description: "Indique grandes contas ou parceiros e veja seus BITS multiplicarem." },
  { icon: Star, title: "Feedback Premiado", description: "Participe de pesquisas de satisfação e ajude a LEGAL a melhorar, ganhando BITS por isso." },
];

const PointAcceleratorsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-legal-purple mb-12">Aceleradores de Pontos BITS™</h2> {/* Cor e font-space atualizados */}
        <div className="grid md:grid-cols-2 gap-8">
          {accelerators.map((accel, index) => (
            <div key={index} className="flex items-start p-6 bg-bits-lightGray rounded-lg shadow-md border-l-4 border-legal-purple"> {/* Cor da borda atualizada */}
              <accel.icon size={40} className="mr-4 text-legal-purple flex-shrink-0 mt-1" /> {/* Cor do ícone atualizada */}
              <div>
                <h3 className="text-xl font-bold text-legal-purple mb-1">{accel.title}</h3> {/* Cor do título atualizada */}
                <p className="text-gray-700">{accel.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointAcceleratorsSection;
