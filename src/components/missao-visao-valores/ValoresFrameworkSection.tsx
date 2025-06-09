
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Eye, Zap, BarChart2, Users } from 'lucide-react';

const ValoresFrameworkSection = () => {
  const valores = [
    {
      sigla: "V",
      titulo: "Visão Viva",
      descricao: "Clareza estratégica, metas ousadas e liderança com direção.",
      drivers: "Liberdade + Aprendizagem",
      icone: Eye,
      corIcone: "text-legal-cyan",
      bgColor: "from-legal-cyan/20 to-legal-cyan/5"
    },
    {
      sigla: "E",
      titulo: "Execução Energizada",
      descricao: "Ritmo diário, foco na entrega e ação com intensidade.",
      drivers: "Energia + Liderança",
      icone: Zap,
      corIcone: "text-legal-purple",
      bgColor: "from-legal-purple/20 to-legal-purple/5"
    },
    {
      sigla: "R",
      titulo: "Resultados com Ressonância",
      descricao: "Impacto real, métrica viva e celebração de conquistas.",
      drivers: "Gratidão + Liderança",
      icone: BarChart2,
      corIcone: "text-legal",
      bgColor: "from-legal/20 to-legal/5"
    },
    {
      sigla: "A",
      titulo: "Alinhamento com Alma",
      descricao: "Cultura viva, gente de verdade, conexão e propósito.",
      drivers: "Gratidão + Liberdade",
      icone: Users,
      corIcone: "text-legal-cyan",
      bgColor: "from-legal-cyan/20 to-legal-cyan/5"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="⚡️ FRAMEWORK V.E.R.A.™"
          subtitle="Os quatro pilares dos nossos valores que guiam cada decisão e ação"
          center
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {valores.map((valor, index) => (
              <div key={index} className="group relative">
                <div className={`bg-gradient-to-br ${valor.bgColor} p-8 rounded-2xl shadow-lg card-hover h-full border-t-4 border-${valor.corIcone.split('-')[1]}`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 bg-white rounded-full shadow-lg ${valor.corIcone}`}>
                      <valor.icone size={32} />
                    </div>
                    <div className="text-6xl font-black text-gray-200 group-hover:text-gray-300 transition-colors">
                      {valor.sigla}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-legal mb-4">{valor.titulo}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{valor.descricao}</p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-legal-purple">
                      <span className="text-gray-600">Drivers Internos:</span><br />
                      {valor.drivers}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-legal to-legal-purple text-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">V.E.R.A.™ em Ação</h3>
              <p className="text-lg opacity-90">
                Cada letra representa um pilar fundamental da nossa cultura,<br />
                trabalhando em harmonia para criar resultados extraordinários.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValoresFrameworkSection;
