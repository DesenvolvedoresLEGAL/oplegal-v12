import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Mail, Building2, Send, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import SEOHead from '@/components/SEOHead';

const DemoPage = () => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação de email corporativo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('demo_requests')
        .insert([
          {
            email: email.trim(),
            company_name: companyName.trim() || null
          }
        ]);

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato em breve para agendar sua demonstração.",
      });
    } catch (error: any) {
      console.error('Error submitting demo request:', error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Solicitar Demonstração - LEGAL | Veja o Humanoid em Ação"
        description="Agende uma demonstração personalizada do Humanoid e descubra como nossa plataforma pode transformar seu negócio com inteligência artificial."
        canonical="/demo"
      />
      
      <section className="relative min-h-screen flex items-center justify-center bg-legal-black text-white overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-legal to-legal-black opacity-80"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        {/* Floating elements */}
        <div className="absolute w-64 h-64 rounded-full bg-legal-green blur-[100px] top-20 -left-20 opacity-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-legal blur-[120px] bottom-0 right-0 opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="container mx-auto px-4 z-10 py-24">
          {!isSuccess ? (
            <div className="max-w-2xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-12 animate-fade-in">
                <div className="inline-block bg-legal-green bg-opacity-20 text-legal-green px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  Veja o Humanoid em ação
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
                  Solicitar Demonstração
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 text-gray-300">
                  Agende uma demonstração personalizada e descubra como o Humanoid pode transformar seu negócio
                </p>
              </div>

              {/* Form Card */}
              <Card className="p-8 backdrop-blur-sm bg-legal/10 border-legal/20 shadow-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email Corporativo *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-legal/30 bg-legal-black/50 text-white placeholder:text-gray-500 focus:border-legal focus:ring-2 focus:ring-legal/20 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-white">
                      Nome da Empresa *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        id="company"
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Sua empresa"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-legal/30 bg-legal-black/50 text-white placeholder:text-gray-500 focus:border-legal focus:ring-2 focus:ring-legal/20 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-legal hover:bg-legal/90 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Solicitar Demonstração
                      </>
                    )}
                  </button>
                </form>
              </Card>

              {/* Client Logos Placeholder */}
              <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <p className="text-sm text-gray-400 mb-6">
                  Empresas que confiam no Humanoid
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                  <div className="w-32 h-12 bg-legal/20 rounded"></div>
                  <div className="w-32 h-12 bg-legal/20 rounded"></div>
                  <div className="w-32 h-12 bg-legal/20 rounded"></div>
                  <div className="w-32 h-12 bg-legal/20 rounded"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center animate-fade-in">
              <div className="w-20 h-20 bg-legal-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-legal-green" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solicitação Enviada com Sucesso!
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Entraremos em contato em até 24 horas para agendar sua demonstração.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-legal-green hover:text-legal-green/80 font-medium"
              >
                Enviar outra solicitação
              </button>
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-400 mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoPage;
