
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PingHero from '@/components/ping/PingHero';
import PingFeatures from '@/components/ping/PingFeatures';
import PingStats from '@/components/ping/PingStats';
import PingBenefits from '@/components/ping/PingBenefits';
import PingProcess from '@/components/ping/PingProcess';
import PingUseCases from '@/components/ping/PingUseCases';
import PingTestimonials from '@/components/ping/PingTestimonials';
import PingDemo from '@/components/ping/PingDemo';
import PingFAQ from '@/components/ping/PingFAQ';
import CallToAction from '@/components/CallToAction';

const PingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Ping - Plataforma Omnichannel de Atendimento com IA",
    "applicationCategory": "CustomerServiceApplication",
    "operatingSystem": "Web-based",
    "description": "Ping: Plataforma omnichannel de atendimento ao cliente com automação IA. Integração WhatsApp via META, redes sociais unificadas e insights com dashboard inteligente.",
    "offers": {
      "@type": "Offer",
      "category": "SaaS"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "featureList": [
      "Atendimento Omnichannel",
      "Automação com IA",
      "Integração WhatsApp META",
      "Dashboard de KPIs",
      "Atendimento Humanizado + IA"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ping - Atendimento Omnichannel com IA | LEGAL</title>
        <meta name="description" content="Ping: Plataforma omnichannel de atendimento ao cliente com automação IA. Integração WhatsApp via META, todas as redes sociais em um só lugar, dashboard de insights e atendimento humanizado + IA." />
        <meta name="keywords" content="atendimento omnichannel, automação IA atendimento, WhatsApp Business META, central atendimento, redes sociais unificadas, dashboard KPIs, LEGAL Ping" />
        <link rel="canonical" href="https://operadora.legal/produtos/ping" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <PingHero />
        <PingFeatures />
        <PingStats />
        <PingBenefits />
        <PingProcess />
        <PingUseCases />
        <PingTestimonials />
        <PingDemo />
        <PingFAQ />
        <CallToAction
          title="Transforme seu Atendimento ao Cliente"
          subtitle="Unifique todas as suas conversas em uma plataforma inteligente. WhatsApp, redes sociais e IA trabalhando juntos para a experiência perfeita."
          buttonText="Demonstração Gratuita"
          buttonLink="/contato?produto=ping"
          secondaryButtonText="Acessar Ping™"
          secondaryButtonLink="https://ping.operadora.legal"
          background="gradient"
        />
      </main>
    </>
  );
};

export default PingPage;
