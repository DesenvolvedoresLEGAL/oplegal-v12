
import React from 'react';
import { Card } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Network, Gauge, Signal, Shield } from 'lucide-react';

const TechnicalAdvantages = () => {
  const technicalAdvantages = [
    {
      title: 'Redundância Total',
      description: 'Múltiplos links e equipamentos de backup',
      icon: <Network className="w-6 h-6" />
    },
    {
      title: 'Monitoramento Proativo',
      description: 'NOC 24/7 com alertas automatizados',
      icon: <Gauge className="w-6 h-6" />
    },
    {
      title: 'Escalabilidade Dinâmica',
      description: 'Ajuste de capacidade em tempo real',
      icon: <Signal className="w-6 h-6" />
    },
    {
      title: 'Segurança Multicamada',
      description: 'Firewall, VPN e criptografia avançada',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Vantagens Tecnológicas"
          subtitle="Infraestrutura robusta e monitoramento avançado garantem performance superior em todos os eventos."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalAdvantages.map((advantage, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-legal to-legal-purple text-white rounded-full flex items-center justify-center">
                {advantage.icon}
              </div>
              <h3 className="text-lg font-bold text-legal mb-2">{advantage.title}</h3>
              <p className="text-gray-600 text-sm">{advantage.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalAdvantages;
