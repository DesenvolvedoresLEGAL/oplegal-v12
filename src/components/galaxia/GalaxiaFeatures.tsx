import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { 
  Cloud, 
  Cpu, 
  Shield, 
  BarChart3, 
  Zap,
  Settings
} from 'lucide-react';

const GalaxiaFeatures = () => {
  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Infraestrutura Cloud Dedicada",
      description: "Ambiente cloud exclusivo e escalável para hospedar seus modelos de IA com alta performance."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "APIs Personalizadas",
      description: "Desenvolvimento de APIs sob medida integradas aos seus sistemas existentes."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Modelos de IA Sob Demanda",
      description: "Treinamento e implementação de modelos específicos para suas necessidades de negócio."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Empresarial",
      description: "Criptografia avançada, conformidade LGPD e controles de acesso granulares."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Monitoramento Avançado",
      description: "Dashboard completo com métricas de performance, uso e custos em tempo real."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Integração Empresarial",
      description: "Conectividade nativa com ERP, CRM e outros sistemas corporativos existentes."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Recursos Avançados"
          subtitle="Infraestrutura completa de IA com tecnologia de ponta para maximizar resultados empresariais"
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

export default GalaxiaFeatures;