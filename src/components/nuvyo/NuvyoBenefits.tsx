
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Zap, Shield, Star, DollarSign, Clock, Users, Award } from 'lucide-react';

const NuvyoBenefits = () => {
  const benefits = [
    {
      icon: <Eye className="w-12 h-12 text-white" />,
      title: "Perspectiva Única",
      description: "Ângulos impossíveis de capturar com equipamentos tradicionais, criando conteúdo visual impactante e diferenciado.",
      gradient: "from-legal to-legal-purple"
    },
    {
      icon: <Zap className="w-12 h-12 text-white" />,
      title: "Agilidade na Execução",
      description: "Setup rápido e mobilidade total permitem capturar momentos únicos sem interrupções ou limitações de espaço.",
      gradient: "from-legal-purple to-legal-cyan"
    },
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      title: "Segurança Garantida",
      description: "Operação 100% segura com pilotos certificados, seguros completos e cumprimento de todas as regulamentações.",
      gradient: "from-legal-cyan to-legal"
    },
    {
      icon: <Star className="w-12 h-12 text-white" />,
      title: "Qualidade Cinematográfica",
      description: "Equipamentos profissionais e pós-produção especializada garantem resultados de nível cinematográfico.",
      gradient: "from-legal to-legal-purple"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-white" />,
      title: "Custo-Benefício",
      description: "Alternativa mais econômica que helicópteros ou gruas, oferecendo qualidade superior a preços acessíveis.",
      gradient: "from-legal-purple to-legal-cyan"
    },
    {
      icon: <Clock className="w-12 h-12 text-white" />,
      title: "Entrega Rápida",
      description: "Processo otimizado permite entregas em até 24h para projetos urgentes, sem comprometer a qualidade.",
      gradient: "from-legal-cyan to-legal"
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Suporte Especializado",
      description: "Equipe técnica experiente acompanha todo o processo, desde o planejamento até a entrega final.",
      gradient: "from-legal to-legal-purple"
    },
    {
      icon: <Award className="w-12 h-12 text-white" />,
      title: "Resultados Premiados",
      description: "Portfólio reconhecido nacionalmente com trabalhos premiados em festivais e concursos audiovisuais.",
      gradient: "from-legal-purple to-legal-cyan"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Por Que Escolher o Nuvyo?"
          subtitle="Vantagens exclusivas que fazem a diferença na qualidade e impacto do seu conteúdo visual"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-r ${benefit.gradient} p-6 text-center group-hover:scale-105 transition-transform`}>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuvyoBenefits;
