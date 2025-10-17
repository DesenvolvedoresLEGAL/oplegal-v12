import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import SEOHead from '@/components/SEOHead';

const DemoPage = () => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

      setIsSubmitted(true);
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
        title="Solicite uma Demo do Humanoid | LEGAL"
        description="Veja como o Humanoid pode se tornar o 1º Sistema Operacional de IA da sua empresa. Agende uma demonstração personalizada."
        canonical="https://legal.inf.br/demo"
      />
      
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        {/* Geometric Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-secondary/10 transform rotate-12 translate-x-1/4 -translate-y-1/4 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/20 to-primary/10 transform -rotate-12 -translate-x-1/4 translate-y-1/4 rounded-full blur-3xl" />
          
          {/* Geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-primary/20 transform rotate-45" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-secondary/20 transform -rotate-12" />
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent/10 transform rotate-45 blur-sm" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 flex items-center justify-center min-h-screen">
          <div className="max-w-2xl w-full text-center">
            {!isSubmitted ? (
              <>
                {/* Hero Content */}
                <div className="mb-12">
                  <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 font-haas">
                    Veja o Humanoid em ação
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground font-haas">
                    Adoraríamos mostrar como o Humanoid pode se tornar o 
                    <span className="text-primary font-bold"> 1º Sistema Operacional de IA </span>
                    da sua empresa
                  </p>
                </div>

                {/* Form Card */}
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 shadow-2xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Email corporativo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-14 text-lg px-6 bg-background"
                        disabled={isSubmitting}
                      />
                      <Input
                        type="text"
                        placeholder="Nome da empresa (opcional)"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="h-14 text-lg px-6 bg-background"
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-lg font-bold group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Solicitar demonstração'}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <p className="text-sm text-muted-foreground mt-4">
                      Ao enviar este formulário, você concorda com nossa{' '}
                      <a href="/privacidade" className="text-primary hover:underline">
                        política de privacidade
                      </a>
                    </p>
                  </form>
                </div>

                {/* Social Proof */}
                <div className="mt-12 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground font-haas">
                    Confiado por <span className="font-bold text-foreground">500+</span> empresas inovadoras
                  </p>
                </div>
              </>
            ) : (
              // Success State
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 shadow-2xl">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-foreground font-haas">
                    Solicitação enviada!
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-md">
                    Nossa equipe entrará em contato em breve para agendar uma demonstração personalizada do Humanoid.
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/'}
                    size="lg"
                    variant="outline"
                    className="mt-4"
                  >
                    Voltar para o início
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="relative z-10 border-t border-border/50 bg-card/30 backdrop-blur-sm py-12">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground mb-8 font-haas uppercase tracking-wider">
              Empresas que já transformaram seus negócios com a LEGAL
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              {/* Placeholder para logos - substituir com logos reais */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-32 h-16 bg-muted/50 rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;
