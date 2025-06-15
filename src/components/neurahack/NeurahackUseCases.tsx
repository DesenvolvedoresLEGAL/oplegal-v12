
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Building, CreditCard, Hospital, Gavel } from 'lucide-react';

const NeurahackUseCases = () => {
  const useCases = [
    {
      title: "Instituições Financeiras",
      description: "Proteção de sistemas bancários, compliance PCI-DSS e prevenção de fraudes",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      title: "Empresas de Tecnologia",
      description: "Segurança de aplicações, proteção de propriedade intelectual e dados de clientes",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Setor de Saúde", 
      description: "Conformidade HIPAA, proteção de dados médicos e sistemas hospitalares",
      icon: <Hospital className="w-6 h-6" />
    },
    {
      title: "Setor Público",
      description: "Segurança de infraestrutura crítica, proteção de dados cidadãos e compliance LGPD",
      icon: <Gavel className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Setores Estratégicos"
          subtitle="Neurahack atende organizações que necessitam do mais alto nível de segurança digital"
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

export default NeurahackUseCases;
