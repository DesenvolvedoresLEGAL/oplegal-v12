import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Lock, User, Mail } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { z } from 'zod';

const signInSchema = z.object({
  email: z.string().email('Email inválido').max(255, 'Email muito longo'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

const signUpSchema = z.object({
  email: z.string().email('Email inválido').max(255, 'Email muito longo'),
  password: z.string()
    .min(12, 'Senha deve ter no mínimo 12 caracteres')
    .regex(/[A-Z]/, 'Senha deve conter ao menos uma letra maiúscula')
    .regex(/[a-z]/, 'Senha deve conter ao menos uma letra minúscula')
    .regex(/[0-9]/, 'Senha deve conter ao menos um número')
    .regex(/[^A-Za-z0-9]/, 'Senha deve conter ao menos um caractere especial'),
  fullName: z.string()
    .min(2, 'Nome muito curto')
    .max(100, 'Nome muito longo')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras'),
});

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const validation = signInSchema.safeParse({ email, password });
      
      if (!validation.success) {
        setError(validation.error.errors[0].message);
        setLoading(false);
        return;
      }

      const { error } = await signIn(email, password);
      
      if (error) {
        setError('Credenciais inválidas. Verifique seu email e senha.');
      }
    } catch (err) {
      setError('Erro ao fazer login. Tente novamente.');
    }
    
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const validation = signUpSchema.safeParse({ email, password, fullName });
      
      if (!validation.success) {
        setError(validation.error.errors[0].message);
        setLoading(false);
        return;
      }

      const { error } = await signUp(email, password, fullName);
      
      if (error) {
        if (error.message?.includes('already registered')) {
          setError('Este email já está cadastrado.');
        } else {
          setError('Erro ao criar conta. Tente novamente.');
        }
      } else {
        setSuccess('Conta criada com sucesso! Verifique seu email para confirmar a conta.');
        setEmail('');
        setPassword('');
        setFullName('');
      }
    } catch (err) {
      setError('Erro ao criar conta. Tente novamente.');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-legal-gray to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-legal-primary to-legal-secondary rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-legal-primary">
              LEGAL Labs
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Área Restrita - Acesso Seguro
            </p>
          </div>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Entrar</TabsTrigger>
              <TabsTrigger value="signup">Cadastrar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                  <Input
                    id="signin-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                    required
                    disabled={loading}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signin-password" className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Senha
                  </Label>
                  <Input
                    id="signin-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    required
                    disabled={loading}
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-legal-primary hover:bg-legal-secondary"
                  disabled={loading}
                >
                  {loading ? 'Entrando...' : 'Entrar'}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nome Completo
                  </Label>
                  <Input
                    id="signup-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Digite seu nome completo"
                    required
                    disabled={loading}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                    required
                    disabled={loading}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Senha
                  </Label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mínimo 12 caracteres, com maiúsculas, minúsculas, números e especiais"
                    required
                    minLength={12}
                    disabled={loading}
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {success && (
                  <Alert>
                    <AlertDescription>{success}</AlertDescription>
                  </Alert>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-legal-primary hover:bg-legal-secondary"
                  disabled={loading}
                >
                  {loading ? 'Criando conta...' : 'Criar Conta'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              🔐 <strong>Sistema de Autenticação Seguro</strong><br />
              Acesso protegido com Supabase Auth
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;