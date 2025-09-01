
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { 
  Eye, 
  Zap, 
  Shield, 
  BarChart3, 
  Smartphone,
  Settings
} from 'lucide-react';

const MagicPassFeatures = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Reconhecimento Facial Avançado",
      description: "Tecnologia de IA com 99.9% de precisão para identificação facial em tempo real."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Check-in Instantâneo",
      description: "Credenciamento automático em menos de 2 segundos, eliminando filas e atrasos."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Máxima",
      description: "Criptografia de ponta e conformidade com LGPD para proteção total dos dados."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics em Tempo Real",
      description: "Relatórios detalhados de acesso, horários de pico e análise de fluxo de participantes."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Múltiplas Plataformas",
      description: "Integração com dispositivos móveis, tablets e sistemas de controle de acesso."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Configuração Flexível",
      description: "Adaptável a diferentes tipos de evento, desde conferências até festivais de música."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Tecnologia de Ponta"
          subtitle="Recursos avançados de inteligência artificial para credenciamento facial preciso e seguro"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none">
              <CardContent className="p-8 text-center">
                <div className="mb-6 text-legal group-hover:text-legal-purple transition-colors duration-300 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-legal mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagicPassFeatures;
