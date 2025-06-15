
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  MapPin, 
  Shield, 
  Smartphone, 
  Eye, 
  Thermometer,
  Clock,
  Package
} from 'lucide-react';

const SonixFeatures = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Entrega Ultra-Rápida",
      description: "Entregas em até 15 minutos com drones autônomos de alta velocidade e navegação inteligente.",
      benefits: ["Velocidade máxima 80km/h", "Rotas otimizadas por IA", "Decolagem em 30 segundos"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Rastreamento em Tempo Real",
      description: "Acompanhe sua entrega do momento da coleta até a chegada com precisão GPS centimétrica.",
      benefits: ["GPS de alta precisão", "Notificações automáticas", "ETA dinâmico"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Máxima",
      description: "Protocolos de segurança avançados, seguros contra terceiros e operação certificada ANAC.",
      benefits: ["Certificação ANAC", "Seguro total", "Protocolos militares"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Inteligente",
      description: "Interface premium com IA que aprende suas preferências e otimiza automaticamente suas entregas.",
      benefits: ["IA personalizada", "Interface premium", "Histórico completo"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visão Computacional",
      description: "Drones equipados com câmeras 4K e IA para navegação autônoma e detecção de obstáculos.",
      benefits: ["Câmeras 4K", "IA de navegação", "Detecção automática"]
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Controle de Temperatura",
      description: "Compartimentos climatizados para medicamentos, alimentos e produtos sensíveis à temperatura.",
      benefits: ["Controle térmico", "Produtos sensíveis", "Qualidade garantida"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Tecnologia de Última Geração"
          subtitle="Recursos avançados que tornam o Sonix o serviço de delivery com drones mais sofisticado do mercado"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-legal/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-legal text-white rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-black text-legal">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-legal-cyan rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SonixFeatures;
