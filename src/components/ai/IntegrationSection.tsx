
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';
import { Brain, Settings, BarChart } from 'lucide-react';

const IntegrationSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-legal-purple/10 to-legal-cyan/10" aria-labelledby="integration-heading">
      <div className="container mx-auto px-4 text-center">
        <header>
          <SectionTitle 
            title="Integração Total com SmartEvents"
            subtitle="Todos os produtos LEGAL AI trabalham em harmonia na plataforma SmartEvents, criando um ecossistema tecnológico sem precedentes no mercado brasileiro."
            center
          />
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <article className="bg-white rounded-xl p-6 shadow-lg">
            <Brain className="w-12 h-12 text-legal mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-xl font-bold text-legal mb-3">IA Unificada</h3>
            <p className="text-gray-600">Todos os produtos compartilham dados e aprendizados para resultados superiores e insights mais precisos.</p>
          </article>
          <article className="bg-white rounded-xl p-6 shadow-lg">
            <Settings className="w-12 h-12 text-legal-purple mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-xl font-bold text-legal-purple mb-3">Gestão Centralizada</h3>
            <p className="text-gray-600">Um único dashboard intuitivo para controlar todo o ecossistema de IA com eficiência máxima.</p>
          </article>
          <article className="bg-white rounded-xl p-6 shadow-lg">
            <BarChart className="w-12 h-12 text-legal-cyan mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-xl font-bold text-legal-cyan mb-3">Analytics Integrados</h3>
            <p className="text-gray-600">Insights cruzados de todos os produtos para decisões empresariais mais inteligentes e estratégicas.</p>
          </article>
        </div>
        <Button asChild size="lg" className="bg-legal-purple hover:bg-legal-purple/90 text-white">
          <Link to="/smart-events" title="Descubra o poder da plataforma SmartEvents">Descubra o Poder do SmartEvents</Link>
        </Button>
      </div>
    </section>
  );
};

export default IntegrationSection;
