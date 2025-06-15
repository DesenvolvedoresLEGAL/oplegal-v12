
import React from "react";
import SEOHead from "@/components/SEOHead";
import createHomePageSchema from "./HomePageSchema";

const HomePageSEO = () => {
  const homePageSchema = createHomePageSchema();

  return (
    <SEOHead
      title="Smart Events™ - Eventos Inteligentes com IA e Credenciamento Facial | LEGAL"
      description="LEGAL é a maior TECHCO do Brasil, criadora do Smart Events™. Transforme seus eventos com IA, credenciamento facial FacePass™, conectividade 5G AERO e ROI comprovado. 3.000+ eventos realizados, NPS 90."
      keywords="Smart Events, eventos inteligentes, credenciamento facial, FacePass, IA eventos, conectividade 5G, AERO drones, networking inteligente, ROI eventos, tecnologia eventos, biometria facial, WiFi eventos, automação eventos, análise dados eventos, LEGAL TechCo"
      url="https://operadora.legal"
      type="website"
      image="https://operadora.legal/images/smart-events-hero-2024.jpg"
      schemaData={homePageSchema}
      preconnect={[
        "https://fonts.googleapis.com",
        "https://images.unsplash.com",
        "https://www.youtube.com"
      ]}
      prefetch={[
        "/smart-events",
        "/contato",
        "/produtos/facepass"
      ]}
    />
  );
};

export default HomePageSEO;
