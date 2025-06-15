
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Signal, Shield, Globe, Smartphone, Wifi } from 'lucide-react';

const Speedy5GFeatures = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Velocidade Extrema",
      description: "Até 10Gbps de download e 2Gbps de upload para operações críticas sem limitações"
    },
    {
      icon: <Signal className="w-8 h-8" />,
      title: "Latência Ultra-Baixa",
      description: "Apenas 1ms de latência para aplicações em tempo real e IoT industrial"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cobertura Nacional",
      description: "Rede 5G robusta com cobertura em todo território nacional e backup automático"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Avançada",
      description: "Criptografia 5G nativa com protocolos de segurança empresarial certificados"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Compatibilidade Total",
      description: "Suporte a todos os dispositivos 5G e retrocompatibilidade com 4G/LTE"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Gerenciamento Inteligente",
      description: "Dashboard avançado para monitoramento e otimização automática da rede"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="5G de Nova Geração para Empresas"
          subtitle="Recursos avançados que transformam conectividade em vantagem competitiva"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-legal mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-legal mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speedy5GFeatures;
