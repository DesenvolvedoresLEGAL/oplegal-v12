
import React from 'react';
import { Card } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    { 
      step: '01', 
      title: 'Análise Técnica', 
      description: 'Site survey detalhado, dimensionamento de capacidade e análise de requisitos específicos',
      details: ['Mapeamento do local', 'Cálculo de usuários simultâneos', 'Análise de interferências', 'Definição de SLAs']
    },
    { 
      step: '02', 
      title: 'Planejamento Avançado', 
      description: 'Projeto técnico completo, cronograma detalhado e aprovisionamento de recursos',
      details: ['Projeto de rede', 'Timeline de instalação', 'Plano de contingência', 'Testes de aceitação']
    },
    { 
      step: '03', 
      title: 'Instalação Express', 
      description: 'Montagem profissional, configuração otimizada e testes rigorosos em até 24h',
      details: ['Instalação física', 'Configuração de equipamentos', 'Testes de performance', 'Documentação técnica']
    },
    { 
      step: '04', 
      title: 'Suporte Premium', 
      description: 'Monitoramento 24/7, suporte on-site e manutenção proativa durante todo o evento',
      details: ['NOC dedicado', 'Técnicos on-site', 'Monitoramento proativo', 'Suporte 24/7']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nosso Processo Especializado"
          subtitle="Do planejamento à desmontagem, cuidamos de toda a infraestrutura tecnológica com metodologia comprovada e equipe certificada."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((process, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-legal to-legal-purple text-white rounded-full flex items-center justify-center text-xl font-bold">
                {process.step}
              </div>
              <h3 className="text-xl font-bold text-legal mb-2">{process.title}</h3>
              <p className="text-gray-600 mb-4">{process.description}</p>
              <div className="text-left">
                <ul className="space-y-1">
                  {process.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-xs text-gray-500 flex items-center">
                      <CheckCircle className="w-3 h-3 text-legal-cyan mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
