
import React from "react";
import { Helmet } from "react-helmet-async";
import SmartEventsFAQ from "@/components/seo/SmartEventsFAQ";
import SmartEventsHero from "@/components/smart-events/SmartEventsHero";
import SmartEventsPillars from "@/components/smart-events/SmartEventsPillars";
import BenefitsSection from "@/components/sections/BenefitsSection";
import MaturityModelSection from "@/components/smart-events/MaturityModelSection";
import RoadmapSection from "@/components/smart-events/RoadmapSection";
import ComparativeMetricsSection from "@/components/smart-events/ComparativeMetricsSection";
import UseCasesSection from "@/components/smart-events/UseCasesSection";
import ESGSection from "@/components/smart-events/ESGSection";
import IntegrationsSection from "@/components/smart-events/IntegrationsSection";
import BenchmarksSection from "@/components/smart-events/BenchmarksSection";
import FinalCTASection from "@/components/smart-events/FinalCTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import HowToSchema from "@/components/seo/HowToSchema";

const SmartEventsPage = () => {
  const smartEventsHowToSteps = [
    {
      name: "Avaliação de Maturidade",
      text: "Analisamos o nível atual do seu evento usando nosso framework de maturidade tecnológica, identificando oportunidades e definindo roadmap de transformação digital.",
      image: "https://operadora.legal/images/smart-events-assessment.jpg"
    },
    {
      name: "Design da Experiência",
      text: "Projetamos a experiência completa do evento considerando jornada dos participantes, integração tecnológica e objetivos de negócio específicos.",
      image: "https://operadora.legal/images/smart-events-design.jpg"
    },
    {
      name: "Implementação Tecnológica",
      text: "Implementamos a infraestrutura Smart Events™ com IA, 5G, IoT, drones e sistemas integrados, garantindo experiência fluida e conectada.",
      image: "https://operadora.legal/images/smart-events-implementation.jpg"
    },
    {
      name: "Monitoramento e Otimização",
      text: "Monitoramos KPIs em tempo real e otimizamos continuamente baseado em dados de engagement, satisfação e resultados de negócio.",
      image: "https://operadora.legal/images/smart-events-monitoring.jpg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Events™ - O novo padrão para eventos inteligentes | LEGAL</title>
        <meta name="description" content="Smart Events™ são eventos com infraestrutura tecnológica 100% integrada — IA, 5G, drones, IoT e dados em tempo real. Transforme eventos em experiências 10x mais conectadas, imersivas e lucrativas." />
      </Helmet>

      <HowToSchema
        name="Como Transformar Seu Evento em Smart Events™"
        description="Guia completo para implementar a metodologia Smart Events™ e criar eventos com infraestrutura tecnológica integrada"
        steps={smartEventsHowToSteps}
        totalTime="P6W"
        estimatedCost="A partir de R$ 100.000"
        supply={["Objetivos do evento", "Perfil dos participantes", "Infraestrutura atual"]}
        tool={["Plataforma Smart Events™", "IA integrada", "Dashboard de métricas"]}
      />

      <Breadcrumbs />

      <SmartEventsHero />
      <SmartEventsPillars />
      <BenefitsSection />
      <MaturityModelSection />
      <RoadmapSection />
      <ComparativeMetricsSection />
      <UseCasesSection />
      <ESGSection />
      <IntegrationsSection />
      <BenchmarksSection />
      <FinalCTASection />
      <SmartEventsFAQ />
    </>
  );
};

export default SmartEventsPage;
