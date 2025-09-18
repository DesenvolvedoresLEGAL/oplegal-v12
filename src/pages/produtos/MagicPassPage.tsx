
import React from 'react';
import { Helmet } from 'react-helmet-async';
import MagicPassHero from '@/components/facepass/MagicPassHero';
import MagicPassFeatures from '@/components/facepass/MagicPassFeatures';
import MagicPassStats from '@/components/facepass/MagicPassStats';
import MagicPassBenefits from '@/components/facepass/MagicPassBenefits';
import MagicPassUseCases from '@/components/facepass/MagicPassUseCases';
import MagicPassTestimonials from '@/components/facepass/MagicPassTestimonials';
import MagicPassDemo from '@/components/facepass/MagicPassDemo';
import MagicPassFAQ from '@/components/facepass/MagicPassFAQ';
import CallToAction from '@/components/CallToAction';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductFAQSchema from '@/components/seo/ProductFAQSchema';
import HowToSchema from '@/components/seo/HowToSchema';
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import ConversationalAIData from '@/components/seo/ConversationalAIData';
import NaturalLanguageOptimization from '@/components/optimization/NaturalLanguageOptimization';
import FeaturedSnippetsOptimization from '@/components/optimization/FeaturedSnippetsOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import TechnicalDocumentationAI from '@/components/seo/TechnicalDocumentationAI';
import MetricsAndBenchmarksAI from '@/components/seo/MetricsAndBenchmarksAI';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';

const MagicPassPage = () => {
  const magicPassFAQs = [
    {
      question: "Como funciona o reconhecimento facial do MagicPass?",
      answer: "O MagicPass utiliza algoritmos avançados de inteligência artificial para criar um perfil biométrico único de cada participante a partir de uma foto. Durante o evento, câmeras capturam a imagem e comparam com o banco de dados em tempo real, liberando o acesso automaticamente."
    },
    {
      question: "Qual é a precisão do sistema?",
      answer: "Nosso sistema possui 99.9% de precisão no reconhecimento facial, com taxa de falsos positivos menor que 0.1%. Utilizamos tecnologia de deep learning treinada com milhões de imagens para garantir a máxima confiabilidade."
    },
    {
      question: "O MagicPass está em conformidade com a LGPD?",
      answer: "Sim, 100%. Todos os dados biométricos são criptografados e armazenados seguindo as diretrizes da LGPD. Os participantes têm controle total sobre seus dados, podendo solicitar exclusão a qualquer momento."
    }
  ];

  const magicPassHowToSteps = [
    {
      name: "Configuração Inicial",
      text: "Configure o sistema MagicPass através do painel administrativo, definindo parâmetros de segurança, áreas de acesso e integração com sistemas existentes.",
      image: "https://operadora.legal/images/magicpass-config.jpg"
    },
    {
      name: "Cadastro de Participantes",
      text: "Os participantes fazem upload de suas fotos através do formulário web ou aplicativo do evento. Nossa IA processa as imagens e cria os perfis biométricos automaticamente.",
      image: "https://operadora.legal/images/magicpass-signup.jpg"
    },
    {
      name: "Implementação das Câmeras",
      text: "Instale e configure as câmeras nos pontos de acesso. Nosso time técnico oferece suporte completo durante a instalação e calibração dos equipamentos.",
      image: "https://operadora.legal/images/magicpass-cameras.jpg"
    },
    {
      name: "Ativação e Monitoramento",
      text: "Ative o sistema e monitore os acessos em tempo real através do dashboard. Receba alertas e relatórios detalhados sobre o fluxo de participantes.",
      image: "https://operadora.legal/images/magicpass-monitoring.jpg"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "MagicPass - Credenciamento Facial com IA",
    "serviceType": "Event Management Service",
    "provider": {
      "@type": "Organization",
      "name": "LEGAL"
    },
    "description": "MagicPass: Sistema de credenciamento facial com inteligência artificial. 99.9% de precisão, acesso em 2 segundos e segurança máxima para eventos de qualquer escala.",
    "areaServed": "Brasil",
    "offers": {
      "@type": "Offer",
      "category": "Event Technology"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços MagicPass",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reconhecimento Facial para Eventos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Credenciamento Automático"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Analytics de Acesso"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>MagicPass - Credenciamento Facial com IA | LEGAL</title>
        <meta name="description" content="MagicPass: Sistema avançado de credenciamento facial com inteligência artificial. 99.9% de precisão, acesso instantâneo e segurança máxima para eventos de qualquer escala." />
        <meta name="keywords" content="MagicPass, credenciamento facial, IA eventos, reconhecimento facial, acesso automático, LEGAL, biometria eventos, tecnologia eventos" />
        <link rel="canonical" href="https://operadora.legal/produtos/magicpass" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Phase 2 SEO Components */}
      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor 
        onMetricsUpdate={(metric) => console.log('MagicPass metric:', metric)}
        enableReporting={true}
      />
      <AIFeedbackSystem />
      <AdvancedFeaturedSnippets 
        pageType="product"
        focusKeyword="magicpass reconhecimento facial"
        location="brasil"
      />
      <SEOCrawlerOptimization />
      
      <ProductFAQSchema
        productName="MagicPass - Credenciamento Facial com IA"
        faqs={magicPassFAQs}
        productUrl="https://operadora.legal/produtos/magicpass"
      />
      
      <HowToSchema
        name="Como Implementar o MagicPass em Seu Evento"
        description="Guia completo para implementar credenciamento facial com IA do MagicPass em eventos de qualquer escala"
        steps={magicPassHowToSteps}
        totalTime="PT48H"
        estimatedCost="A partir de R$ 15.000"
        supply={["Fotos dos participantes", "Lista de credenciados", "Definição de áreas de acesso"]}
        tool={["Câmeras MagicPass", "Dashboard administrativo", "Aplicativo do evento"]}
      />
      
      <Breadcrumbs />
      
      <main>
        <MagicPassHero />
        <MagicPassFeatures />
        <MagicPassStats />
        <MagicPassBenefits />
        <MagicPassUseCases />
        <MagicPassTestimonials />
        <MagicPassDemo />
        <MagicPassFAQ />
        <CallToAction
          title="Revolucione o Credenciamento dos Seus Eventos"
          subtitle="Experimente o poder do MagicPass e transforme a experiência de acesso dos seus participantes com inteligência artificial de última geração."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=magicpass"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?tipo=consultoria&produto=magicpass"
          background="gradient"
        />
      </main>
    </>
  );
};

export default MagicPassPage;
