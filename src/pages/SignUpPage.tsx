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

        <section className="relative min-h-[90vh] flex items-center justify-center bg-legal overflow-hidden">
          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(3,249,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(3,249,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Floating blur circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-legal-cyan/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-legal-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
              {/* Badge "Em breve" */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30">
                <Sparkles className="w-5 h-5 text-green-400" />
                <span className="text-sm font-bold tracking-wider text-green-400">EM BREVE</span>
              </div>
              
              {/* Headline */}
              <h1 className="font-haas text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
                <span className="text-legal-cyan">🧠</span> Sua empresa acaba de ganhar um cérebro
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
                Estamos terminando de construir o sistema nervoso central do Humanoid. Se quiser ser um dos primeiros, entre em contato:
              </p>
              
              {/* Card Central com WhatsApp */}
              <div className="max-w-2xl mx-auto mt-12">
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-legal-cyan/20">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Ícone WhatsApp */}
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-10 h-10 text-green-500" />
                    </div>
                    
                    {/* Texto */}
                    <div>
                      <h3 className="text-2xl font-bold text-legal mb-3">
                        Fale com nossa equipe
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Entre em contato via WhatsApp e garanta seu acesso prioritário ao Humanoid™
                      </p>
                    </div>
                    
                    {/* Botão WhatsApp */}
                    <Button
                      asChild
                      size="lg"
                      className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-6 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <a 
                        href="https://wa.me/5511999572394?text=Quero%20ser%20um%20dos%20primeiros%20a%20usar%20o%20Humanoid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <MessageCircle className="w-6 h-6" />
                        Falar no WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="pt-12 flex justify-center">
                <div className="w-6 h-10 border-2 border-legal-cyan/50 rounded-full flex items-start justify-center p-2">
                  <div className="w-1.5 h-3 bg-legal-cyan rounded-full animate-bounce" />
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
