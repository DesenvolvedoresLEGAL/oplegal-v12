
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
    "name": "Ping - Monitoramento de Infraestrutura com IA",
    "applicationCategory": "SystemsManagementApplication",
    "operatingSystem": "Web-based",
    "description": "Ping: Plataforma de monitoramento de infraestrutura com inteligência artificial para detecção proativa de problemas, análise preditiva e otimização de performance.",
    "offers": {
      "@type": "Offer",
      "category": "SaaS"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "featureList": [
      "Monitoramento 24/7",
      "Análise Preditiva com IA",
      "Alertas Inteligentes",
      "Dashboard de Performance",
      "Otimização Automática"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ping - Monitoramento de Infraestrutura com IA | LEGAL</title>
        <meta name="description" content="Ping: Plataforma de monitoramento de infraestrutura com IA que detecta problemas antes que aconteçam. Análise preditiva, alertas inteligentes e otimização automática para máxima performance." />
        <meta name="keywords" content="monitoramento infraestrutura, IA monitoramento, análise preditiva, alertas inteligentes, performance otimização, uptime monitoramento, LEGAL Ping" />
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
          title="Transforme seu Monitoramento de Infraestrutura"
          subtitle="Implemente inteligência artificial para detectar problemas antes que afetem seus usuários. Solicite uma demonstração personalizada do Ping."
          buttonText="Demonstração Gratuita"
          buttonLink="/contato?produto=ping"
          secondaryButtonText="Acesso Ping™"
          secondaryButtonLink="https://ping.operadora.legal"
          background="gradient"
        />
      </main>
    </>
  );
};

export default PingPage;
