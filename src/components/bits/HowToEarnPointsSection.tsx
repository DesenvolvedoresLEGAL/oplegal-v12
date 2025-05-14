
import React from 'react';
import { ShoppingCart, UserPlus, CalendarCheck, RadioTower } from 'lucide-react'; // Exemplo de ícones

const earningMethods = [
  { icon: ShoppingCart, title: "Gastos em Serviços", description: "Cada real gasto em aluguel, assinaturas, projetos de IA ou AERO vira BITS." },
  { icon: UserPlus, title: "Indicações Premiadas", description: "Indique amigos e clientes para a LEGAL e ganhe BITS quando eles se tornarem clientes." },
  { icon: CalendarCheck, title: "Participação em Eventos", description: "Engaje em eventos Smart Events™ e pesquisas para acumular mais BITS." },
  { icon: RadioTower, title: "Conexão Digital", description: "Interaja com nossos canais digitais, complete seu perfil e participe de quizzes." },
];

const HowToEarnPointsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-bits-darkGray text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-bits-cyan mb-12 font-space">Como Acumular Pontos BITS™</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {earningMethods.map((method, index) => (
            <div key={index} className="p-6 bg-gray-800/50 rounded-lg shadow-xl border border-bits-cyan/30 hover:border-bits-cyan transition-all duration-300 transform hover:scale-105">
              <method.icon size={48} className="mb-4 text-bits-cyan" />
              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-gray-300">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToEarnPointsSection;
