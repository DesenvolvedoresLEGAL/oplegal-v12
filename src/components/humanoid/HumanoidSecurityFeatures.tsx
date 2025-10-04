import React from 'react';
import { Lock, ShieldCheck, Server } from 'lucide-react';

const HumanoidSecurityFeatures = () => {
  const features = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Criptografia ponta a ponta",
      body: "Todos os dados trafegam com criptografia AES-256 e chaves únicas por cliente."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Conformidade LGPD",
      body: "O HUMANOID segue rigorosamente os padrões da LGPD e oferece controle granular de permissões (RBAC)."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infraestrutura em nuvem",
      body: "Hospedagem em provedores globais de alta disponibilidade com 99,99% de uptime."
    }
  ];

  return (
    <section className="py-24 bg-humanoid-dark text-humanoid-light">
      <div className="container mx-auto px-4">
        <h2 className="font-haas text-3xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Segurança de nível corporativo.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-humanoid-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-humanoid-accent/20 hover:border-humanoid-accent/50 transition-all animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-humanoid-highlight mb-4">
                {feature.icon}
              </div>
              <h3 className="font-haas text-xl font-bold mb-3 text-humanoid-light">
                {feature.title}
              </h3>
              <p className="text-base text-humanoid-light/70 leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanoidSecurityFeatures;
