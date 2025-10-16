
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';

const BhagSection = () => {
  const whyCards = [
    {
      icon: TrendingUp,
      title: "Muda o Setor",
      description: "Porque cria um novo paradigma no mercado de eventos e tecnologia"
    },
    {
      icon: Target,
      title: "Cria Novo Mercado",
      description: "Porque estabelece novas categorias e oportunidades de negócio"
    },
    {
      icon: Zap,
      title: "Exige Inovação",
      description: "Porque demanda constante evolução e criatividade"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-legal-cyan/10 to-legal-purple/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="BHAG - Big Hairy Audacious Goal"
          subtitle="Nossa meta audaciosa que define nosso futuro"
          center
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-8 bg-legal text-white rounded-3xl mb-8 shadow-2xl">
              <Users size={64} className="mr-4" />
              <div className="text-left">
                <div className="text-4xl md:text-6xl font-black">1.000.000</div>
                <div className="text-xl md:text-2xl">conexões até 2030</div>
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-legal mb-4">
              Conectar 1.000.000 pessoas, negócios e coisas no Brasil até 2030
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {whyCards.map((card, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center card-hover">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-legal-cyan/20 rounded-full mb-6">
                  <card.icon size={32} className="text-legal" />
                </div>
                <h3 className="text-xl font-bold text-legal mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-legal mb-6 text-center">Como Vamos Chegar Lá?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-legal-cyan font-bold text-lg mb-2">🔥 Cultura Viva</div>
                <p className="text-gray-600">Mantendo nossa essência vibrante</p>
              </div>
              <div>
                <div className="text-legal-purple font-bold text-lg mb-2">⚡ Execução Energizada</div>
                <p className="text-gray-600">Com velocidade e intensidade</p>
              </div>
              <div>
                <div className="text-legal font-bold text-lg mb-2">🚀 Produtos LEGALmente Incríveis</div>
                <p className="text-gray-600">Inovação que marca época</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BhagSection;
