
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NeurahackHero from '@/components/neurahack/NeurahackHero';
import NeurahackFeatures from '@/components/neurahack/NeurahackFeatures';
import NeurahackStats from '@/components/neurahack/NeurahackStats';
import NeurahackBenefits from '@/components/neurahack/NeurahackBenefits';
import NeurahackProcess from '@/components/neurahack/NeurahackProcess';
import NeurahackUseCases from '@/components/neurahack/NeurahackUseCases';
import NeurahackTestimonials from '@/components/neurahack/NeurahackTestimonials';
import NeurahackDemo from '@/components/neurahack/NeurahackDemo';
import NeurahackFAQ from '@/components/neurahack/NeurahackFAQ';
import CallToAction from '@/components/CallToAction';

const NeurahackPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Neurahack - Plataforma de Ethical Hacking com IA",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Web-based",
    "description": "Plataforma de ethical hacking com inteligência artificial para testes de penetração automatizados, análise de vulnerabilidades e segurança cibernética avançada.",
    "offers": {
      "@type": "Offer",
      "category": "Cybersecurity Service"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "featureList": [
      "Testes de Penetração Automatizados",
      "Análise de Vulnerabilidades com IA",
      "Relatórios de Segurança Detalhados",
      "Monitoramento Contínuo",
      "Compliance e Auditoria"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Neurahack - Ethical Hacking e Segurança Cibernética com IA | LEGAL</title>
        <meta name="description" content="Neurahack: Plataforma de ethical hacking com IA para testes de penetração automatizados, análise de vulnerabilidades e segurança cibernética. Proteja sua empresa com tecnologia avançada." />
        <meta name="keywords" content="ethical hacking, teste penetração, segurança cibernética, vulnerabilidades, pentest, inteligência artificial segurança, auditoria segurança, LEGAL Neurahack" />
        <link rel="canonical" href="https://operadora.legal/produtos/neurahack" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <NeurahackHero />
        <NeurahackFeatures />
        <NeurahackStats />
        <NeurahackBenefits />
        <NeurahackProcess />
        <NeurahackUseCases />
        <NeurahackTestimonials />
        <NeurahackDemo />
        <NeurahackFAQ />
        <CallToAction
          title="Fortaleça sua Segurança Digital"
          subtitle="Proteja sua empresa com ethical hacking inteligente. Solicite uma avaliação de segurança personalizada com Neurahack."
          buttonText="Avaliação Gratuita"
          buttonLink="/contato?produto=neurahack"
          secondaryButtonText="Ver Demonstração"
          secondaryButtonLink="#demo"
          background="gradient"
        />
      </main>
    </>
  );
};

export default NeurahackPage;
