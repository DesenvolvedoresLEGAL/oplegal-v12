
import React from 'react';
import { Card } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { ArrowRight, Building, Cog, Star, Users } from 'lucide-react';

const IndustryUseCases = () => {
  const industryUseCases = [
    {
      industry: 'Saúde & Medicina',
      icon: <Building className="w-6 h-6" />,
      description: 'Soluções especializadas para eventos médicos e hospitalares',
      applications: [
        'Congressos médicos com telemedicina',
        'Demonstrações cirúrgicas ao vivo',
        'Credenciamento médico seguro',
        'Streaming de palestras científicas'
      ],
      requirements: 'Baixa latência, alta segurança, compliance LGPD/HIPAA'
    },
    {
      industry: 'Tecnologia & Inovação',
      icon: <Cog className="w-6 h-6" />,
      description: 'Infraestrutura para eventos tech e demonstrações IoT',
      applications: [
        'Hackathons e competições',
        'Demonstrações de IoT e 5G',
        'Realidade virtual e aumentada',
        'Startups e pitch competitions'
      ],
      requirements: 'Ultra-baixa latência, alta largura de banda, IPv6'
    },
    {
      industry: 'Entretenimento & Cultura',
      icon: <Star className="w-6 h-6" />,
      description: 'Conectividade para festivais, shows e eventos culturais',
      applications: [
        'Festivais de música e arte',
        'Transmissões ao vivo de shows',
        'Aplicativos de engajamento',
        'Cashless payments e ingressos digitais'
      ],
      requirements: 'Alta densidade de usuários, QoS para streaming'
    },
    {
      industry: 'Corporativo & B2B',
      icon: <Users className="w-6 h-6" />,
      description: 'Soluções para eventos empresariais e feiras comerciais',
      applications: [
        'Convenções de vendas',
        'Feiras industriais B2B',
        'Workshops e treinamentos',
        'Videoconferências híbridas'
      ],
      requirements: 'Segurança empresarial, gestão de bandwidth'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-legal/5 to-legal-purple/5">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Soluções por Segmento"
          subtitle="Infraestrutura de TI especializada para diferentes tipos de eventos e necessidades específicas de cada setor."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industryUseCases.map((industry, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-legal text-white rounded-lg flex items-center justify-center">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-legal">{industry.industry}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-legal-purple mb-2">Aplicações Específicas:</h4>
                <ul className="space-y-1">
                  {industry.applications.map((app, appIndex) => (
                    <li key={appIndex} className="text-sm text-gray-700 flex items-center">
                      <ArrowRight className="w-3 h-3 text-legal-cyan mr-2" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-legal/5 p-3 rounded-lg">
                <h4 className="font-bold text-legal text-sm mb-1">Requisitos Técnicos:</h4>
                <p className="text-xs text-gray-600">{industry.requirements}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCases;
