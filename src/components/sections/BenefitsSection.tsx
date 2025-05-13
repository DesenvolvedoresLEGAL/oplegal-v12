
import React from "react";
import { Users, ShoppingBag, User, DollarSign } from "lucide-react";
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BenefitsSection = () => {
  const stakeholders = [
    {
      icon: <Users size={36} />,
      title: "Organizador",
      metrics: [
        { label: "Aumento de receita por m²", value: "+22%" },
        { label: "RevPAM", value: "Elevado" },
        { label: "EBITDA", value: "Melhorado" }
      ],
      benefits: [
        "Aumento da lucratividade com novos modelos de negócio",
        "Operações otimizadas com menos recursos humanos",
        "Dados precisos para planejamento de futuras edições",
        "Diferenciação competitiva no mercado"
      ]
    },
    {
      icon: <ShoppingBag size={36} />,
      title: "Expositor",
      metrics: [
        { label: "Leads qualificados", value: "+35%" },
        { label: "CPL", value: "Reduzido" },
        { label: "SQL rate", value: "Otimizado" }
      ],
      benefits: [
        "Maior qualidade e conversão de leads",
        "Melhor ROI em participação de eventos",
        "Insights precisos sobre interações no estande",
        "Matching inteligente com visitantes ideais"
      ]
    },
    {
      icon: <User size={36} />,
      title: "Participante",
      metrics: [
        { label: "Tempo em filas", value: "0 min" },
        { label: "Agenda personalizada", value: "100%" },
        { label: "CSAT", value: "≥ 95%" }
      ],
      benefits: [
        "Experiência sem atritos desde o credenciamento",
        "Agenda e recomendações personalizadas via IA",
        "Networking mais eficiente e qualificado",
        "Experiências imersivas e memoráveis"
      ]
    },
    {
      icon: <DollarSign size={36} />,
      title: "Patrocinador",
      metrics: [
        { label: "Métricas em tempo real", value: "100%" },
        { label: "AR impressions", value: "Elevado" },
        { label: "CPM on-site", value: "Otimizado" }
      ],
      benefits: [
        "Visibilidade mensurada com precisão",
        "Novas superfícies de branding via AR",
        "Dados granulares sobre interações",
        "Maior justificativa para investimento"
      ]
    }
  ];

  return (
    <section className="py-20 bg-legal-gray" id="beneficios">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Benefícios e ROI por Stakeholder"
          subtitle="Smart Events™ geram valor tangível e mensurável para todos os envolvidos no ecossistema de eventos."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {stakeholders.map((stakeholder, index) => (
            <Card
              key={index}
              title={stakeholder.title}
              icon={stakeholder.icon}
              className="flex flex-col h-full"
            >
              <div className="grid grid-cols-3 gap-2 mb-6 mt-2">
                {stakeholder.metrics.map((metric, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">{metric.label}</p>
                    <p className="text-legal-green font-bold text-xl">{metric.value}</p>
                  </div>
                ))}
              </div>
              
              <ul className="styled-list mb-6 flex-grow">
                {stakeholder.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            asChild
            className="bg-legal hover:bg-legal/90 text-white px-8 py-6 text-lg h-auto"
          >
            <Link to="/beneficios">
              Ver análise completa de ROI
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
