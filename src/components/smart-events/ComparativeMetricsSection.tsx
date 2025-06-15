
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';

const ComparativeMetricsSection = () => {
  const comparativeMetrics = [
    {
      metric: "Tempo em filas",
      traditional: "45+ minutos",
      smart: "0 minutos",
      improvement: "100%"
    },
    {
      metric: "Leads qualificados",
      traditional: "20% do total",
      smart: "55% do total",
      improvement: "+35%"
    },
    {
      metric: "Engajamento",
      traditional: "22% dos conteúdos",
      smart: "67% dos conteúdos",
      improvement: "+45%"
    },
    {
      metric: "Custo operacional",
      traditional: "Base 100%",
      smart: "Redução de 30%",
      improvement: "-30%"
    },
    {
      metric: "Satisfação (CSAT)",
      traditional: "72%",
      smart: "95%+",
      improvement: "+23%"
    }
  ];

  return (
    <section className="py-20 bg-legal text-white" id="comparativo">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Tradicional vs Smart Event™"
          subtitle="Compare os resultados e descubra como os Smart Events™ superam eventos tradicionais em métricas-chave."
          center
          light
        />

        <div className="max-w-4xl mx-auto mt-12 bg-legal-black bg-opacity-30 rounded-xl p-6">
          <div className="grid grid-cols-4 gap-4 font-semibold border-b border-white/20 pb-4 mb-6">
            <div>Métrica</div>
            <div>Evento Tradicional</div>
            <div>Smart Event™</div>
            <div>Melhoria</div>
          </div>

          {comparativeMetrics.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-4 gap-4 py-4 ${
                index < comparativeMetrics.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div className="font-medium">{item.metric}</div>
              <div className="text-gray-300">{item.traditional}</div>
              <div className="text-legal-cyan font-medium">{item.smart}</div>
              <div className="text-legal-cyan font-bold">{item.improvement}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl mb-6">
            Os Smart Events™ proporcionam ROI mensurável para todos os stakeholders do ecossistema.
          </p>
          <Button 
            asChild
            className="bg-white text-legal hover:bg-white/90"
          >
            <Link to="/beneficios">
              Ver análise completa de ROI por stakeholder
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparativeMetricsSection;
