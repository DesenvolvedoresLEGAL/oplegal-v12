
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Building2, Calendar, GraduationCap, Coffee, Plane, Home } from 'lucide-react';

const Blue6UseCases = () => {
  const useCases = [
    {
      title: "Eventos Corporativos",
      description: "WiFi de alta performance para congressos, feiras e conferências com milhares de participantes simultâneos.",
      icon: <Calendar className="w-6 h-6" />,
      metrics: ["500+ usuários simultâneos", "Captive portal personalizado", "Analytics em tempo real"]
    },
    {
      title: "Escritórios Corporativos",
      description: "Conectividade empresarial segura com controle de acesso, políticas de uso e monitoramento de performance.",
      icon: <Building2 className="w-6 h-6" />,
      metrics: ["Segurança WPA3", "Gestão centralizada", "Controle por departamento"]
    },
    {
      title: "Instituições de Ensino",
      description: "WiFi educacional com controle de conteúdo, limite de tempo por usuário e relatórios de uso detalhados.",
      icon: <GraduationCap className="w-6 h-6" />,
      metrics: ["Filtro de conteúdo", "Controle parental", "Relatórios acadêmicos"]
    },
    {
      title: "Hotéis e Restaurantes",
      description: "WiFi para hóspedes com portal de boas-vindas personalizado e coleta de feedback automatizada.",
      icon: <Coffee className="w-6 h-6" />,
      metrics: ["Portal de boas-vindas", "Coleta de dados", "Experiência premium"]
    },
    {
      title: "Aeroportos e Terminais",
      description: "Conectividade de alta capacidade para áreas de grande fluxo com redundância e disponibilidade 24/7.",
      icon: <Plane className="w-6 h-6" />,
      metrics: ["Alta capacidade", "Redundância total", "Cobertura ampla"]
    },
    {
      title: "Condomínios Residenciais",
      description: "WiFi comunitário para áreas comuns com controle de acesso por morador e gestão simplificada.",
      icon: <Home className="w-6 h-6" />,
      metrics: ["Acesso por morador", "Áreas comuns", "Gestão condominial"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso por Segmento"
          subtitle="Veja como diferentes ambientes usam o Blue6 para conectividade inteligente e segura"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-legal bg-legal/10 p-2 rounded-lg">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-bold text-legal">{useCase.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-legal-purple">Características principais:</h4>
                  <div className="space-y-1">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <span key={metricIndex} className="block bg-legal-green/10 text-legal-green px-2 py-1 rounded text-xs font-semibold">
                        • {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blue6UseCases;
