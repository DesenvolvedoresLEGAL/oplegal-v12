
import React from "react";
import { Helmet } from "react-helmet-async";
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

const SmartEventsPage = () => {
  return (
    <>
      <Helmet>
        <title>Smart Events™ - O novo padrão para eventos inteligentes | LEGAL</title>
        <meta name="description" content="Smart Events™ são eventos com infraestrutura tecnológica 100% integrada — IA, 5G, drones, IoT e dados em tempo real. Transforme eventos em experiências 10x mais conectadas, imersivas e lucrativas." />
      </Helmet>

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
    </>
  );
};

export default SmartEventsPage;
