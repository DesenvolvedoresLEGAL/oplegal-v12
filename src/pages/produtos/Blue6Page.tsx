
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Blue6Hero from '@/components/blue6/Blue6Hero';
import Blue6Features from '@/components/blue6/Blue6Features';
import Blue6Stats from '@/components/blue6/Blue6Stats';
import Blue6Benefits from '@/components/blue6/Blue6Benefits';
import Blue6UseCases from '@/components/blue6/Blue6UseCases';
import Blue6Testimonials from '@/components/blue6/Blue6Testimonials';
import Blue6Demo from '@/components/blue6/Blue6Demo';
import Blue6FAQ from '@/components/blue6/Blue6FAQ';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductFAQSchema from '@/components/seo/ProductFAQSchema';
import CaseStudyStructuredData from '@/components/seo/CaseStudyStructuredData';
import TechnicalDocumentationAI from '@/components/seo/TechnicalDocumentationAI';
import MetricsAndBenchmarksAI from '@/components/seo/MetricsAndBenchmarksAI';
import ConversationalAIData from '@/components/seo/ConversationalAIData';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';

const Blue6Page = () => {
  // Phase 2 Enhanced SEO Data
  const blue6FAQs = [
    {
      question: "O que é o Blue6 e como ele funciona?",
      answer: "Blue6 é um hotspot WiFi inteligente que oferece conectividade de alta performance com gestão centralizada, análise de uso em tempo real e segurança WPA3 avançada."
    },
    {
      question: "Quantos usuários o Blue6 suporta simultaneamente?",
      answer: "O Blue6 suporta mais de 100 usuários simultâneos com performance otimizada e distribuição inteligente de banda."
    },
    {
      question: "Como é feita a instalação do Blue6?",
      answer: "A instalação é simples e rápida, realizada em até 1 hora por nossa equipe técnica especializada, com configuração personalizada."
    }
  ];

  const blue6CaseStudies = [
    {
      title: "Transformação Digital em Grande Evento Corporativo",
      client: "Empresa Fortune 500",
      industry: "Corporate",
      challenge: "Conectividade instável para 500+ participantes em evento híbrido",
      solution: "Implementação Blue6 com gestão centralizada e analytics em tempo real",
      results: ["100% uptime durante evento", "Redução 90% reclamações conectividade", "Aumento 300% satisfação participantes"],
      metrics: { uptime: "100%", users_connected: 500, satisfaction_improvement: "300%" },
      duration: "2 dias de implementação",
      testimonial: {
        text: "Blue6 revolucionou nossos eventos. Conectividade perfeita e insights valiosos.",
        author: "Maria Silva",
        position: "Diretora de Eventos"
      }
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Blue6 - Hotspot WiFi Inteligente",
    "applicationCategory": "NetworkingApplication",
    "operatingSystem": "Hardware-based",
    "description": "Hotspot WiFi inteligente com tecnologia avançada para conectividade segura e de alta performance. Solução completa para eventos, empresas e espaços públicos.",
    "offers": {
      "@type": "Offer",
      "category": "Hardware + Software"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "featureList": [
      "Hotspot WiFi de Alta Performance",
      "Gestão Centralizada de Rede",
      "Análise de Uso em Tempo Real",
      "Captive Portal Personalizado",
      "Segurança Avançada WPA3"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Blue6 - Hotspot WiFi Inteligente para Eventos e Empresas | LEGAL</title>
        <meta name="description" content="Blue6: Hotspot WiFi inteligente com gestão centralizada, análise de uso, captive portal personalizado e segurança avançada. Conectividade de alta performance para eventos e empresas." />
        <meta name="keywords" content="hotspot wifi, wifi eventos, conectividade empresarial, gestão de rede, captive portal, wifi inteligente, análise de uso wifi, segurança wifi, LEGAL Blue6" />
        <link rel="canonical" href="https://operadora.legal/produtos/blue6" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main>
        <Breadcrumbs 
          items={[
            { label: 'Produtos', href: '/produtos' },
            { label: 'Blue6', href: '/produtos/blue6' }
          ]} 
        />
        <Blue6Hero />
        <Blue6Features />
        <Blue6Stats />
        <Blue6Benefits />
        <Blue6UseCases />
        <Blue6Testimonials />
        <Blue6Demo />
        <Blue6FAQ />
        
        {/* Phase 2 Enhanced SEO Components */}
        <ProductFAQSchema 
          productName="Blue6" 
          faqs={blue6FAQs}
          productUrl="https://operadora.legal/produtos/blue6"
        />
        <CaseStudyStructuredData 
          caseStudies={blue6CaseStudies}
          productName="Blue6"
        />
        <RealUserMonitoring enabled={true} />
        
        <CallToAction
          title="Revolucione sua Conectividade WiFi"
          subtitle="Implemente uma solução WiFi inteligente e de alta performance com o Blue6. Solicite uma demonstração personalizada."
          buttonText="Demonstração Gratuita"
          buttonLink="/contato?produto=blue6"
          secondaryButtonText="Configurar Blue6™"
          secondaryButtonLink="https://blue6.operadora.legal"
          background="gradient"
        />
      </main>
    </>
  );
};

export default Blue6Page;
