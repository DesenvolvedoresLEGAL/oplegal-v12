
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Zap, 
  Shield, 
  Eye, 
  Droplets, 
  Wind, 
  Gauge,
  MapPin,
  Battery,
  Wifi
} from 'lucide-react';

const BrilixFeatures = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Drones Autônomos Avançados",
      description: "Tecnologia de voo autônomo com sensores de obstáculo, GPS de precisão e estabilização inteligente para operação segura em qualquer altura."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Total em Altura",
      description: "Elimina completamente os riscos de trabalho em altura. Operação remota com redundância de sistemas e protocolos de segurança certificados."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Sistema de Limpeza Pressurizada",
      description: "Jatos de água pressurizada com controle de pressão variável, detergentes ecológicos e sistema de filtragem para máxima eficiência."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Inspeção Visual Inteligente",
      description: "Câmeras 4K com zoom ótico, análise de imagem por IA para detectar sujeira, danos estruturais e pontos que precisam de atenção especial."
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Resistência Climática",
      description: "Operação segura com ventos de até 40 km/h, sistemas anti-chuva e sensores meteorológicos para condições ideais de trabalho."
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Monitoramento em Tempo Real",
      description: "Dashboard completo com telemetria do drone, progresso da limpeza, consumo de água e relatórios detalhados de cada operação."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Mapeamento 3D Preciso",
      description: "Criação automática de rotas otimizadas baseadas em modelagem 3D da estrutura, garantindo cobertura completa e eficiente."
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Autonomia Estendida",
      description: "Baterias de longa duração com sistema de troca rápida, permitindo operação contínua por até 8 horas sem interrupções."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Controle Remoto Avançado",
      description: "Interface de controle intuitiva via tablet/smartphone com conexão 5G, permitindo monitoramento e ajustes em tempo real."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Tecnologia de Ponta"
          subtitle="Descubra como nossos drones revolucionam a limpeza em altura com inovação e segurança máxima"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-legal mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-legal mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrilixFeatures;
