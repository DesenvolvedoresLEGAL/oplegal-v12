
import React from 'react';
import { Card } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Clock, Shield, Award, TrendingUp, CheckCircle } from 'lucide-react';

const DetailedBenefits = () => {
  const detailedBenefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Implementação Express',
      description: 'Instalação e configuração completa em até 24 horas',
      details: 'Nossa equipe especializada realiza site survey, instalação de equipamentos, configuração de rede e testes de performance em tempo recorde. Processo otimizado para eventos com cronogramas apertados.',
      keyPoints: [
        'Site survey gratuito em até 48h',
        'Instalação noturna para não interferir no evento',
        'Testes de stress antes do início do evento',
        'Documentação técnica completa entregue'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Suporte Técnico 24/7',
      description: 'Equipe técnica especializada disponível durante todo o evento',
      details: 'Monitoramento proativo com NOC dedicado, suporte on-site durante o evento e resposta a incidentes em menos de 15 minutos. Garantimos uptime superior a 99.9%.',
      keyPoints: [
        'NOC (Network Operations Center) dedicado',
        'Técnicos on-site durante todo o evento',
        'Tempo de resposta < 15 minutos',
        'Ferramentas de monitoramento em tempo real'
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Equipamentos de Ponta',
      description: 'Sempre as tecnologias mais recentes e confiáveis do mercado',
      details: 'Investimos continuamente em equipamentos de marcas líderes mundiais. Todo nosso inventário é renovado anualmente, garantindo performance máxima e compatibilidade com as últimas tecnologias.',
      keyPoints: [
        'Equipamentos renovados anualmente',
        'Marcas líderes: Cisco, Huawei, HP, Dell',
        'Certificações internacionais de qualidade',
        'Backup de equipamentos sempre disponível'
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'ROI Otimizado',
      description: 'Máximo retorno com investimento mínimo em infraestrutura',
      details: 'Evite custos de aquisição, manutenção e obsolescência. Nossa locação de internet temporária oferece tecnologia de ponta com previsibilidade de custos e flexibilidade total.',
      keyPoints: [
        'Sem investimento inicial em equipamentos',
        'Custos previsíveis e transparentes',
        'Escalabilidade conforme demanda',
        'Manutenção e atualizações incluídas'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Diferenciais LEGAL ALUGUE"
          subtitle="Por que somos a escolha preferida para locação de equipamentos de TI e soluções de conectividade temporária no Brasil."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedBenefits.map((benefit, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-legal">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-legal">{benefit.title}</h3>
                  <p className="text-legal-purple font-medium">{benefit.description}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {benefit.details}
              </p>
              
              <div>
                <h4 className="font-bold text-legal mb-3">Pontos-chave:</h4>
                <ul className="space-y-2">
                  {benefit.keyPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                      {point}
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

export default DetailedBenefits;
