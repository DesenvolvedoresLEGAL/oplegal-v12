import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterExitPopup = () => {
  console.log('NewsletterExitPopup component rendered');
  
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { toast } = useToast();

  // Função para testar o popup
  const testPopup = () => {
    console.log('Teste do popup acionado');
    setIsOpen(true);
  };

  useEffect(() => {
    console.log('NewsletterExitPopup useEffect inicializado');
    
    // Para debug, vamos forçar o popup aparecer após 3 segundos
    const debugTimer = setTimeout(() => {
      console.log('Debug timer - forçando popup');
      setIsOpen(true);
    }, 3000);
    
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('newsletter-popup-shown');
    if (popupShown) {
      console.log('Popup já foi mostrado nesta sessão');
      clearTimeout(debugTimer);
      setHasShown(true);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let fallbackTimer: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      console.log('Mouse leave detectado:', e.clientY, e.movementY);
      // Detecção mais permissiva - mouse saindo pela parte superior ou movimento rápido para cima
      if ((e.clientY <= 50 || (e.movementY && e.movementY < -5)) && !hasShown) {
        console.log('Condições atendidas, mostrando popup');
        timeoutId = setTimeout(() => {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem('newsletter-popup-shown', 'true');
        }, 100);
      }
    };

    const handleMouseEnter = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    // Trigger alternativo: após 15 segundos se ainda estiver na página
    fallbackTimer = setTimeout(() => {
      console.log('Fallback timer acionado');
      if (!hasShown) {
        console.log('Mostrando popup via fallback');
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('newsletter-popup-shown', 'true');
      }
    }, 15000);

    console.log('Adicionando event listeners');
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      console.log('Removendo event listeners');
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
      }
      if (debugTimer) {
        clearTimeout(debugTimer);
      }
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Call Mailchimp API through Supabase Edge Function
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          source: 'exit-intent-popup'
        }),
      });

      if (response.ok) {
        toast({
          title: "Sucesso! 🎉",
          description: "Você foi cadastrado em nossa newsletter! Em breve receberá nossos conteúdos exclusivos.",
        });
        setIsOpen(false);
        setEmail('');
        setName('');
      } else {
        throw new Error('Erro no cadastro');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Erro no cadastro",
        description: "Houve um problema ao cadastrar seu email. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Botão de teste temporário - remover em produção */}
      <button 
        onClick={testPopup}
        className="fixed bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg z-50 text-sm"
      >
        Testar Newsletter
      </button>
      
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg max-w-[95vw] max-h-[90vh] overflow-y-auto border-legal-blue relative"
        style={{
          backgroundImage: `url('/lovable-uploads/e0a457bd-2c75-494f-bfb2-09582ac2b2a4.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
        <div className="relative z-10">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-20"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fechar</span>
        </button>
        
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-legal-blue to-legal-purple bg-clip-text text-transparent">
            Fala comigo humanoide,
          </DialogTitle>
          <DialogDescription className="text-gray-700 text-sm sm:text-base">
            Cadastre-se em nossa newsletter e fique conectado com os mais variados temas de tecnologia e inovação.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Seu primeiro nome</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu primeiro nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-legal-blue/20 focus:border-legal-blue"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Seu melhor e-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-legal-blue/20 focus:border-legal-blue"
              required
            />
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 hover:opacity-90"
              style={{ backgroundColor: '#020CBC' }}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Cadastrando...
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Cadastrar na Newsletter
                </>
              )}
            </Button>
          </div>
        </form>

        <div className="text-center pt-2">
          <p className="text-xs text-gray-600">
            Seus dados estão seguros. Não compartilhamos com terceiros.
          </p>
        </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default NewsletterExitPopup;