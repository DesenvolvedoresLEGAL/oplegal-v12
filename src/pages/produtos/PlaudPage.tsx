import React from "react";
import SEOHead from "@/components/SEOHead";
import PlaudHero from "@/components/plaud/PlaudHero";
import PlaudFeatures from "@/components/plaud/PlaudFeatures";
import PlaudBenefits from "@/components/plaud/PlaudBenefits";
import PlaudUseCases from "@/components/plaud/PlaudUseCases";
import PlaudStats from "@/components/plaud/PlaudStats";
import PlaudDemo from "@/components/plaud/PlaudDemo";
import PlaudTestimonials from "@/components/plaud/PlaudTestimonials";
import PlaudFAQ from "@/components/plaud/PlaudFAQ";
import CallToAction from "@/components/CallToAction";
import ChatbotButton from "@/components/ChatbotButton";

const PlaudPage = () => {
  return (
    <>
      <SEOHead 
        title="Plaud - Gravação de Voz com IA | LEGAL"
        description="Transforme suas conversas em insights valiosos com Plaud. Gravação inteligente, transcrição automática e resumos em 112 idiomas para máxima produtividade."
        keywords="gravação de voz, IA, transcrição, resumos, produtividade, meetings, Plaud"
      />
      
      <main role="main">
        <PlaudHero />
        <PlaudFeatures />
        <PlaudBenefits />
        <PlaudUseCases />
        <PlaudStats />
        <PlaudDemo />
        <PlaudTestimonials />
        <PlaudFAQ />
        
        <CallToAction
          title="Revolucione sua produtividade com Plaud"
          subtitle="Grave, transcreva e resuma automaticamente suas conversas mais importantes. Experimente o futuro da tomada de notas inteligente."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=plaud"
          secondaryButtonText="Ver Especificações"
          secondaryButtonLink="#especificacoes"
          background="gradient"
        />
        
        <ChatbotButton />
      </main>
    </>
  );
};

export default PlaudPage;