import React from 'react';
import { Lock, ShieldCheck, Server } from 'lucide-react';

const HumanoidSecurityFeatures = () => {
  const features = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "LGPD by design",
      body: "Privacidade e consentimento em cada ação. Conformidade total com a LGPD."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "RBAC",
      body: "Acessos controlados por área e perfil. Segurança granular em cada camada."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Auditoria total",
      body: "Cada execução registrada. Rastreabilidade completa de todas as operações."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Custos em tempo real",
      body: "Transparência total no uso da IA. Saiba exatamente quanto cada operação custa."
    }
  ];

  return (
    <section className="py-32 bg-white text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-legal-purple/20 backdrop-blur-sm rounded-full border border-legal-purple/30">
              <span className="text-2xl">🔒</span>
              <span className="text-sm font-bold tracking-wider text-legal-purple">SEGURANÇA E GOVERNANÇA</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-legal-purple/50 shadow-sm transition-all group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-legal-purple mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-haas text-xl font-bold mb-3 text-legal">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Message */}
          <div className="text-center pt-8 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <p className="text-xl md:text-2xl font-bold text-legal">
              Sua inteligência é sua.
            </p>
            <p className="text-lg text-gray-700 mt-2">
              Segura, isolada e sob <span className="text-legal-purple font-semibold">total controle</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidSecurityFeatures;
