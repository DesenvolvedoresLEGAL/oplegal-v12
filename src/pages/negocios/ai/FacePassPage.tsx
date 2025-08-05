
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductSchema from '@/components/seo/ProductSchema';
import CallToAction from '@/components/CallToAction';
import FacePassHero from '@/components/facepass/FacePassHero';
import FacePassFeatures from '@/components/facepass/FacePassFeatures';
import FacePassStats from '@/components/facepass/FacePassStats';
import FacePassBenefits from '@/components/facepass/FacePassBenefits';
import FacePassProcess from '@/components/facepass/FacePassProcess';
import FacePassUseCases from '@/components/facepass/FacePassUseCases';
import FacePassIntegration from '@/components/facepass/FacePassIntegration';

const FacePassPage = () => {
  return (
    <>
      <Helmet>
        <title>FacePass | Credenciamento Facial com IA - LEGAL</title>
        <meta name="description" content="FacePass: Credenciamento facial avançado com inteligência artificial. 99.9% de precisão, acesso em 2 segundos, segurança máxima e conformidade LGPD." />
        <meta name="keywords" content="FacePass, credenciamento facial, IA eventos, reconhecimento facial, acesso automático, LEGAL AI, biometria eventos" />
        <meta property="og:title" content="FacePass | Credenciamento Facial com IA - LEGAL" />
        <meta property="og:description" content="Revolucione o credenciamento de eventos com FacePass: IA avançada, 99.9% de precisão e acesso instantâneo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://legal.com.br/negocios/ai/facepass" />
        <link rel="canonical" href="https://legal.com.br/negocios/ai/facepass" />
      </Helmet>

      <div className="bg-background text-foreground font-unica">
        <FacePassHero />
        <FacePassFeatures />
        <FacePassStats />
        <FacePassBenefits />
        <FacePassProcess />
        <FacePassUseCases />
        <FacePassIntegration />
        
        <CallToAction
          title="Transforme o Credenciamento dos Seus Eventos"
          subtitle="Experimente o poder do FacePass e veja como a inteligência artificial pode revolucionar a experiência dos seus participantes. Solicite uma demonstração personalizada agora mesmo."
          buttonText="Solicitar Demonstração"
          buttonLink="/contato?produto=facepass"
          secondaryButtonText="Falar com Especialista"
          secondaryButtonLink="/contato?tipo=consultoria&produto=facepass"
          background="gradient"
        />
      </div>
    </>
  );
};

export default FacePassPage;
