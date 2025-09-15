import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { 
  TrendingDown, 
  Users, 
  Zap
} from 'lucide-react';

const GalaxiaFeatures = () => {
  const painPoints = [
    {
      icon: <TrendingDown className="w-12 h-12" />,
      title: "Ineficiência operacional",
      description: "Transformamos processos lentos em fluxos ágeis e automáticos.",
      details: [
        "Automação de workflows repetitivos",
        "Otimização de recursos existentes", 
        "Redução de tempo de execução",
        "Integração com sistemas atuais"
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Times inflados",
      description: "Automatizamos tarefas repetitivas para liberar pessoas para o que importa.",
      details: [
        "IA conversacional para atendimento",
        "Automação de documentação",
        "Processamento inteligente de dados",
        "Copilotos para produtividade"
      ]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Dificuldade em adotar novas tecnologias",
      description: "Implementamos IA sem burocracia, integrada ao que você já usa.",
      details: [
        "Integração nativa com sistemas existentes",
        "Setup rápido e sem complicações",
        "Treinamento da equipe incluído",
        "Suporte contínuo especializado"
      ]
    }
  ];

  return (
    <section id="principais-dores" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Principais Dores que Resolvemos"
          subtitle="Identificamos e eliminamos os gargalos que impedem sua empresa de crescer"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((pain, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-legal-primary/10 to-legal-secondary/10 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-legal-primary">
                  {pain.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-legal-primary mb-3 font-haas">
                {pain.title}
              </h3>
              <p className="text-gray-600 mb-4 font-haas">
                {pain.description}
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                {pain.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-legal-tertiary rounded-full mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalaxiaFeatures;