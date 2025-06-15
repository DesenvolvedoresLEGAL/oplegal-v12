
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Search, FileText, Eye, Zap, AlertTriangle } from 'lucide-react';

const NeurahackFeatures = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Testes de Penetração Automatizados",
      description: "IA executa pentests completos simulando ataques reais para identificar vulnerabilidades críticas"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Análise Preditiva de Ameaças",
      description: "Machine learning identifica padrões de ataque e prevê vulnerabilidades antes que sejam exploradas"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Relatórios Executivos Detalhados",
      description: "Documentação completa com riscos, impactos e recomendações priorizadas por criticidade"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Monitoramento Contínuo 24/7",
      description: "Vigilância constante da superfície de ataque com alertas em tempo real sobre novas ameaças"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Resposta Automatizada a Incidentes",
      description: "Sistema de resposta rápida que isola ameaças e minimiza impactos automaticamente"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Compliance e Auditoria",
      description: "Conformidade com LGPD, ISO 27001, SOX e outras regulamentações de segurança"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Segurança Cibernética Inteligente"
          subtitle="Recursos avançados que transformam ethical hacking em proteção proativa contra ameaças digitais"
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

export default NeurahackFeatures;
