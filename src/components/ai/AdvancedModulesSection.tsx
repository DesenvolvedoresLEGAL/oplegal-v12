
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

interface AdvancedModule {
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface AdvancedModulesSectionProps {
  modules: AdvancedModule[];
}

const AdvancedModulesSection: React.FC<AdvancedModulesSectionProps> = ({ modules }) => {
  return (
    <section className="py-16" aria-labelledby="advanced-modules-heading">
      <div className="container mx-auto px-4">
        <header>
          <SectionTitle
            title="Módulos Avançados em Desenvolvimento"
            subtitle="O futuro da inteligência artificial empresarial está sendo construído agora. Inovações que definirão o mercado nos próximos anos."
            center
          />
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <article key={index} className="bg-gradient-to-br from-legal/10 to-legal-cyan/10 rounded-xl p-6 text-center border border-legal/20 hover:border-legal-cyan/50 transition-all duration-300">
              <header className="flex justify-center mb-4" aria-hidden="true">
                {module.icon}
              </header>
              <h3 className="text-lg font-bold text-legal mb-3">{module.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{module.description}</p>
              <footer className="text-xs text-legal-cyan font-semibold">EM BREVE</footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedModulesSection;
