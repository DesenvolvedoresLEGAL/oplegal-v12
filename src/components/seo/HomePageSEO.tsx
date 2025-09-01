
import React from "react";
import SEOHead from "@/components/SEOHead";
import createHomePageSchema from "./HomePageSchema";
import OrganizationSchema from "./OrganizationSchema";

const HomePageSEO = () => {
  const homePageSchema = createHomePageSchema();

  return (
    <>
      <SEOHead
        title="Smart Events™ - Eventos Inteligentes com IA, 5G e Credenciamento Facial no Brasil | LEGAL TechCo"
        description="LEGAL é a maior TECHCO do Brasil criadora do Smart Events™. Transforme eventos corporativos com Inteligência Artificial, credenciamento facial MagicPass™, conectividade 5G FWA, drones AERO e ROI comprovado. +3.000 eventos realizados, NPS 90+, redução de 40% nos custos operacionais."
        url="https://operadora.legal"
        type="website"
        image="https://operadora.legal/images/smart-events-hero-2024.jpg"
        schemaData={homePageSchema}
        canonical="https://operadora.legal"
        preconnect={[
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
          "https://images.unsplash.com",
          "https://www.youtube.com",
          "https://api.whatsapp.com"
        ]}
        prefetch={[
          "/smart-events",
          "/contato",
          "/produtos/magicpass",
          "/negocios/ai",
          "/produtos/eventrix"
        ]}
      />
      <OrganizationSchema />
    </>
  );
};

export default HomePageSEO;
