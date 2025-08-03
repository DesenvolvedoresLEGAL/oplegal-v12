import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterExitPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('newsletter-popup-shown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        // Add small delay to avoid accidental triggers
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

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (timeoutId) {
        clearTimeout(timeoutId);
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
      const response = await fetch('https://mvkawsgrjnbdufdgzwwd.supabase.co/functions/v1/newsletter-signup', {
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-legal-blue">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fechar</span>
        </button>
        
        <DialogHeader className="text-center pb-4">
          <div className="mx-auto mb-4">
            <img 
              src="/lovable-uploads/e0a457bd-2c75-494f-bfb2-09582ac2b2a4.png" 
              alt="Senhora tricotando com cabos de rede" 
              className="w-36 h-36 object-cover rounded-full mx-auto border-4 border-legal-blue/20"
            />
          </div>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-legal-blue to-legal-purple bg-clip-text text-transparent">
            Fala comigo humanoide,
          </DialogTitle>
          <DialogDescription className="text-gray-600">
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
          <p className="text-xs text-gray-500">
            Seus dados estão seguros. Não compartilhamos com terceiros.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterExitPopup;