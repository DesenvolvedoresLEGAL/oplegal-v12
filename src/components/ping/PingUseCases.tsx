
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Server, Globe, Database, Cloud } from 'lucide-react';

const PingUseCases = () => {
  const useCases = [
    {
      title: "Data Centers Críticos",
      description: "Monitoramento de servidores, storage e infraestrutura crítica 24/7",
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "Aplicações Web",
      description: "Performance, disponibilidade e experiência do usuário em tempo real",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Bancos de Dados", 
      description: "Otimização de queries, backup automático e integridade de dados",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Infraestrutura Cloud",
      description: "Multi-cloud monitoring com otimização de custos e performance",
      icon: <Cloud className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Casos de Uso Estratégicos"
          subtitle="Ping monitora todos os componentes críticos da sua infraestrutura tecnológica"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-legal mb-4 flex justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold text-legal mb-3">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PingUseCases;
