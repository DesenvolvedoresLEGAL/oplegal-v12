
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';
import { Brain, Users, BarChart3 } from 'lucide-react';

const MagicPassIntegration = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-legal/10 to-legal-purple/10">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle 
          title="Integração Total com LEGAL AI"
          subtitle="MagicPass faz parte do ecossistema LEGAL AI, potencializando seus resultados com outras soluções inteligentes"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <article className="bg-white rounded-xl p-6 shadow-lg">
            <Brain className="w-12 h-12 text-legal mx-auto mb-4" />
            <h3 className="text-xl font-bold text-legal mb-3">Eventrix Integrado</h3>
            <p className="text-gray-600">Combine credenciamento facial com gestão completa de eventos em uma única plataforma.</p>
          </article>
          <article className="bg-white rounded-xl p-6 shadow-lg">
            <Users className="w-12 h-12 text-legal-purple mx-auto mb-4" />
            <h3 className="text-xl font-bold text-legal-purple mb-3">LinkAI Networking</h3>
            <p className="text-gray-600">Identificação automática para sugestões de networking personalizadas entre participantes.</p>
          </article>
          <article className="bg-white rounded-xl p-6 shadow-lg">
            <BarChart3 className="w-12 h-12 text-legal-cyan mx-auto mb-4" />
            <h3 className="text-xl font-bold text-legal-cyan mb-3">Blue Analytics</h3>
            <p className="text-gray-600">Dados de acesso integrados com business intelligence para insights profundos.</p>
          </article>
        </div>
        <Button asChild size="lg" className="bg-legal-purple hover:bg-legal-purple/90 text-white">
          <Link to="/negocios/ai">Conheça Todo o Ecossistema LEGAL AI</Link>
        </Button>
      </div>
    </section>
  );
};

export default MagicPassIntegration;
