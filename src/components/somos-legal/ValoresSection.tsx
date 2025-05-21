
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ValorCard from './ValorCard';
import { Eye,Zap, BarChart2, Users, Brain } from 'lucide-react'; // Exemplos de ícones

const valores = [
  {
    sigla: "V",
    titulo: "Visão Viva",
    descricao: "Clareza estratégica, metas ousadas e liderança com direção.",
    drivers: "Liberdade + Aprendizagem + Liderança",
    icone: Eye,
    corIcone: "text-legal-cyan"
  },
  {
    sigla: "E",
    titulo: "Execução Energizada",
    descricao: "Ritmo diário, foco na entrega e ação com intensidade.",
    drivers: "Energia + Liderança",
    icone: Zap,
    corIcone: "text-legal-purple"
  },
  {
    sigla: "R",
    titulo: "Resultados com Ressonância",
    // A descrição no prompt original tem "Comunicação alinhada, valores vividos na prática, propósito claro."
    // O manifesto da LEGAL tem "Impacto real, métrica viva e celebração de conquistas." Vou usar a do manifesto.
    descricao: "Impacto real, métrica viva e celebração de conquistas.", 
    drivers: "Gratidão + Liderança",
    icone: BarChart2,
    corIcone: "text-legal"
  },
  {
    sigla: "A",
    titulo: "Alinhamento com Alma",
    descricao: "Cultura viva, gente de verdade, conexão e propósito.",
    drivers: "Gratidão + Liberdade",
    icone: Users,
    corIcone: "text-legal-cyan"
  },
  // O prompt mencionou "Layout em grid moderno com 5 colunas", mas o framework V.E.R.A. tem 4 letras.
  // Adicionarei um quinto valor com base no que parece ser um valor implícito na cultura LEGAL.
  // Ou posso deixar com 4 e ajustar o grid. Vou manter 4 por enquanto para seguir V.E.R.A.
];

const ValoresSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="VALORES"
          subtitle="Os pilares da nossa Cultura: Framework V.E.R.A.™"
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valores.map((valor, index) => (
            <ValorCard
              key={index}
              sigla={valor.sigla}
              titulo={valor.titulo}
              descricao={valor.descricao}
              drivers={valor.drivers}
              Icone={valor.icone}
              corIcone={valor.corIcone}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValoresSection;
