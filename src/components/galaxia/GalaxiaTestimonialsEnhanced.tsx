import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Scale, Users, TrendingUp } from 'lucide-react';

const GalaxiaTestimonialsEnhanced = () => {

  return (
    <section className="py-20 bg-legal-gray">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Do caos à eficiência: um escritório de advocacia transformado"
          subtitle="Case de Sucesso Real com a GalaxIA™"
          center
        />
        
        <div className="max-w-6xl mx-auto">
          {/* Storytelling Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Antes */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-red-100 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Scale className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-4 font-haas">ANTES</h3>
              <p className="text-gray-700 font-haas">
                <strong>6 advogados</strong> criando petições manualmente, gastando 
                <strong> 8 horas por dia</strong> em tarefas repetitivas
              </p>
              <div className="mt-4 text-sm text-red-500">
                • Processos manuais lentos<br/>
                • Alto custo operacional<br/>
                • Equipe sobrecarregada
              </div>
            </div>

            {/* Depois */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-legal-tertiary/20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-legal-primary" />
              </div>
              <h3 className="text-xl font-bold text-legal-primary mb-4 font-haas">DEPOIS DA GALAXIA™</h3>
              <p className="text-gray-700 font-haas">
                <strong>1 advogado apenas</strong> revisando petições geradas por IA em 
                <strong> 30 minutos</strong>
              </p>
              <div className="mt-4 text-sm text-legal-primary">
                • IA gera petições automaticamente<br/>
                • Processo 90% mais rápido<br/>
                • Qualidade garantida
              </div>
            </div>

            {/* Resultado */}
            <div className="text-center p-8 bg-gradient-to-br from-legal-primary to-legal-secondary text-white rounded-xl shadow-lg">
              <div className="bg-white/20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-haas">RESULTADO</h3>
              <p className="font-haas mb-4">
                <strong className="text-legal-tertiary">83% de redução</strong> de equipe em tarefas repetitivas
              </p>
              <div className="text-sm">
                • Tempo ganho para casos estratégicos<br/>
                • Redução de custos operacionais<br/>
                • Aumento da margem de lucro
              </div>
            </div>
          </div>

          {/* Métricas de Impacto */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-legal-primary text-center mb-8 font-haas">
              Impacto Mensurável em 90 Dias
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-legal-primary">83%</div>
                <div className="text-sm text-gray-600">Redução de Equipe</div>
              </div>
              <div>
                <div className="text-3xl font-black text-legal-primary">90%</div>
                <div className="text-sm text-gray-600">Menos Tempo</div>
              </div>
              <div>
                <div className="text-3xl font-black text-legal-primary">R$ 2M</div>
                <div className="text-sm text-gray-600">Economia Anual</div>
              </div>
              <div>
                <div className="text-3xl font-black text-legal-primary">100%</div>
                <div className="text-sm text-gray-600">Qualidade Mantida</div>
              </div>
            </div>
          </div>

          {/* Quote do Cliente */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-legal-primary/5 to-legal-secondary/5 rounded-xl">
            <blockquote className="text-xl italic text-gray-700 mb-6 font-haas">
              "A GalaxIA™ não só automatizou nossos processos, ela transformou completamente nossa operação. 
              Agora nossos advogados focam no que realmente importa: a estratégia e relacionamento com clientes."
            </blockquote>
            <cite className="text-legal-primary font-semibold font-haas">
              — Dr. Carlos Andrade, Sócio-Fundador do Escritório Andrade & Associados
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalaxiaTestimonialsEnhanced;