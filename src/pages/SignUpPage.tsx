import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { MessageCircle, Brain, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import WebPageSchema from '@/components/seo/WebPageSchema';

const SignUpPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Criar Conta', path: '/signup' }
  ];

  return (
    <>
      <Helmet>
        <title>Criar Conta Humanoid™ | LEGAL</title>
        <meta name="description" content="Seja um dos primeiros a usar o Humanoid, o 1º Sistema Operacional de IA para empresas brasileiras." />
        <link rel="canonical" href="https://operadora.legal/signup" />
      </Helmet>

      <WebPageSchema
        name="Criar Conta Humanoid™"
        description="Seja um dos primeiros a usar o Humanoid, o 1º Sistema Operacional de IA para empresas brasileiras"
        url="https://operadora.legal/signup"
        breadcrumb={[
          { name: "Home", url: "https://operadora.legal" },
          { name: "Criar Conta", url: "https://operadora.legal/signup" }
        ]}
      />

      <main>
        <Breadcrumbs items={breadcrumbItems} />

        <section className="relative min-h-screen flex items-center justify-center bg-legal overflow-hidden pt-32 pb-20">
          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(3,249,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(3,249,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Floating blur circles */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-legal-cyan/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-legal-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-legal-purple/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-16 animate-fade-in">
              {/* Headline */}
              <div className="space-y-6">
                <h1 className="font-haas text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white drop-shadow-2xl">
                  <span className="text-legal-cyan">🧠</span> Sua empresa acaba de ganhar um cérebro
                </h1>
                
                {/* Subheadline */}
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  Estamos terminando de construir o sistema nervoso central do Humanoid. Se quiser ser um dos primeiros, entre em contato:
                </p>
              </div>
              
              {/* Card Central com WhatsApp */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-14 border border-legal-purple/20 hover:border-legal-purple/40 transition-all duration-300 hover:shadow-legal-purple/20 hover:shadow-3xl">
                  <div className="flex flex-col items-center text-center space-y-8">
                    {/* Ícone WhatsApp */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-legal-purple/20 rounded-full blur-xl"></div>
                      <div className="relative w-24 h-24 bg-gradient-to-br from-legal-purple to-legal-cyan/80 rounded-full flex items-center justify-center shadow-xl">
                        <MessageCircle className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    
                    {/* Texto */}
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-black text-legal font-haas">
                        Fale com nossa equipe
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed max-w-lg">
                        Entre em contato via WhatsApp e garanta seu acesso prioritário ao Humanoid™
                      </p>
                    </div>
                    
                    {/* Botão WhatsApp */}
                    <Button
                      asChild
                      size="lg"
                      className="bg-legal-purple hover:bg-legal-purple/90 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    >
                      <a 
                        href="https://wa.me/5511999572394?text=Quero%20ser%20um%20dos%20primeiros%20a%20usar%20o%20Humanoid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <MessageCircle className="w-7 h-7" />
                        Falar no WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignUpPage;
