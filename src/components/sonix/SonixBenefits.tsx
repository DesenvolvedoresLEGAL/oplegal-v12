
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Clock, DollarSign, Leaf, Star, Shield, Zap } from 'lucide-react';

const SonixBenefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "80% Mais Rápido",
      description: "Entregas em até 15 minutos comparado aos 60-90 minutos do delivery tradicional"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Custo-Benefício Premium",
      description: "Valor competitivo para um serviço premium com tecnologia de ponta"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustentabilidade Total",
      description: "Zero emissão de carbono com drones 100% elétricos e operação eco-friendly"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Experiência Premium",
      description: "Atendimento VIP com interface personalizada e suporte dedicado"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Garantida",
      description: "Protocolos militares de segurança e seguro completo contra qualquer eventualidade"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tecnologia IA",
      description: "Inteligência artificial que aprende e otimiza suas entregas automaticamente"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Por Que Escolher o Sonix?"
          subtitle="Benefícios exclusivos que tornam cada entrega uma experiência excepcional"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group bg-gradient-to-br from-legal/5 to-legal-purple/5 p-8 rounded-xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-legal text-white rounded-full flex items-center justify-center group-hover:bg-legal-purple transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-legal mb-3 group-hover:text-legal-purple transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SonixBenefits;
