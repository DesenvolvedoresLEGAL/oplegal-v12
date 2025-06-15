
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';
import { PlayCircle, Calendar, Users } from 'lucide-react';

const LinkAIDemo = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-legal/10 to-legal-purple/10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Veja LinkAI em Ação"
          subtitle="Solicite uma demonstração personalizada e descubra como revolucionar o networking dos seus eventos"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-legal mb-4">
                  Demonstração Interativa
                </h3>
                <p className="text-gray-600 mb-6">
                  Veja como nossa IA analisa perfis, identifica afinidades e sugere conexões estratégicas em tempo real.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <PlayCircle className="w-5 h-5 text-legal-cyan" />
                    <span className="text-gray-700">Simulação de matchmaking ao vivo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-legal-cyan" />
                    <span className="text-gray-700">Demonstração de agendamento automático</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-legal-cyan" />
                    <span className="text-gray-700">Analytics de networking em tempo real</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-legal hover:bg-legal/90">
                    <Link to="/contato?produto=linkai&tipo=demo">
                      Agendar Demonstração
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contato?produto=linkai">
                      Falar com Especialista
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-legal to-legal-purple rounded-xl p-8 text-white text-center">
                <PlayCircle className="w-16 h-16 mx-auto mb-4 text-legal-cyan" />
                <h4 className="text-xl font-bold mb-2">Demo Disponível</h4>
                <p className="text-legal-cyan mb-4">
                  45 minutos de demonstração completa
                </p>
                <p className="text-sm opacity-90">
                  Inclui simulação com dados reais e Q&A personalizado para seu caso de uso específico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkAIDemo;
