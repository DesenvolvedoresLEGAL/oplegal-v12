
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wifi, 
  Shield, 
  BarChart3, 
  Settings, 
  Users, 
  Smartphone,
  Globe,
  Lock,
  Zap
} from 'lucide-react';

const Blue6Features = () => {
  const features = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "WiFi 6 de Alta Performance",
      description: "Tecnologia WiFi 6 (802.11ax) com velocidades de até 1.2 Gbps e suporte para centenas de dispositivos simultâneos."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança WPA3 Avançada",
      description: "Protocolo de segurança WPA3 mais robusto, criptografia individual por dispositivo e proteção contra ataques de força bruta."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics em Tempo Real",
      description: "Dashboard completo com métricas de uso, dispositivos conectados, consumo de dados e mapas de calor de conectividade."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Gestão Centralizada",
      description: "Controle múltiplos pontos de acesso através de uma interface web única com configuração remota e monitoramento."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Captive Portal Personalizado",
      description: "Portal de autenticação customizável com sua marca, coleta de dados de usuários e integração com sistemas de CRM."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Controle de Usuários",
      description: "Gestão granular de perfis de usuário, limite de tempo de acesso, controle de banda e políticas de uso diferenciadas."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Mobile de Gestão",
      description: "Aplicativo iOS e Android para monitoramento remoto, configuração rápida e suporte técnico em qualquer lugar."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Firewall Integrado",
      description: "Sistema de firewall robusto com filtragem de conteúdo, bloqueio de sites maliciosos e controle de aplicações."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Auto-Configuração Inteligente",
      description: "Sistema de configuração automática que otimiza canais, potência e largura de banda baseado no ambiente."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Funcionalidades Avançadas"
          subtitle="Descubra como o Blue6 oferece conectividade WiFi inteligente e segura para qualquer ambiente"
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

export default Blue6Features;
