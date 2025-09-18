import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Users,
  DollarSign,
  Globe,
  Target,
  Activity,
  Zap,
  TestTube,
  LogOut,
  ExternalLink,
  Sparkles
} from 'lucide-react';

const LabsPage = () => {
  const { logout } = useAuth();

  const labsTools = [
    {
      title: 'Dashboard Executivo',
      description: 'Visão estratégica completa com métricas de performance e KPIs empresariais',
      icon: <BarChart3 className="w-8 h-8 text-legal-primary" />,
      link: '/universo/labs/executive',
      color: 'from-legal-primary to-legal-secondary',
      status: 'active'
    },
    {
      title: 'Analytics de ROI',
      description: 'Análise avançada de retorno sobre investimento com insights de IA',
      icon: <DollarSign className="w-8 h-8 text-legal-primary" />,
      link: '/universo/labs/roi',
      color: 'from-legal-secondary to-legal-tertiary',
      status: 'active'
    },
    {
      title: 'Performance SEO',
      description: 'Monitoramento completo de SEO com métricas de Core Web Vitals',
      icon: <TrendingUp className="w-8 h-8 text-legal-primary" />,
      link: '/universo/labs/seo',
      color: 'from-legal-tertiary to-legal-primary',
      status: 'active'
    },
    {
      title: 'Dashboard de IA',
      description: 'Análise de comportamento com machine learning e insights preditivos',
      icon: <Brain className="w-8 h-8 text-legal-primary" />,
      link: '/universo/labs/ai-dashboard',
      color: 'from-legal-primary to-legal-tertiary',
      status: 'beta'
    },
    {
      title: 'Comportamento de Usuários',
      description: 'Análise detalhada de padrões de comportamento e jornada do usuário',
      icon: <Users className="w-8 h-8 text-legal-primary" />,
      link: '/universo/labs/user-behavior',
      color: 'from-legal-secondary to-legal-primary',
      status: 'beta'
    },
    {
      title: 'Performance Insights',
      description: 'Insights avançados de performance com recomendações automatizadas',
      icon: <Activity className="w-8 h-8 text-legal-primary" />,
      link: '/universo/labs/performance-insights',
      color: 'from-legal-tertiary to-legal-secondary',
      status: 'experimental'
    },
    {
      title: 'Funil de Conversão IA',
      description: 'Análise inteligente do funil de vendas com otimizações automáticas',
      icon: <Target className="w-8 h-8 text-legal-primary" />,
      link: '/universo/labs/conversion-funnel',
      color: 'from-legal-primary to-legal-secondary',
      status: 'experimental'
    },
    {
      title: 'Analytics Globais',
      description: 'Visão consolidada de todos os produtos e mercados da LEGAL',
      icon: <Globe className="w-8 h-8 text-legal-primary" />,
      link: '/universo/labs/global-analytics',
      color: 'from-legal-secondary to-legal-tertiary',
      status: 'coming-soon'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500 text-white">Ativo</Badge>;
      case 'beta':
        return <Badge className="bg-yellow-500 text-white">Beta</Badge>;
      case 'experimental':
        return <Badge className="bg-orange-500 text-white">Experimental</Badge>;
      case 'coming-soon':
        return <Badge variant="outline">Em Breve</Badge>;
      default:
        return <Badge variant="outline">Beta</Badge>;
    }
  };

  return (
    <>
      <SEOHead
        title="LEGAL Labs - Ferramentas Experimentais | Acesso Restrito"
        description="Área restrita com ferramentas experimentais de analytics, BI e insights avançados para equipe interna da LEGAL"
        keywords="labs legal, ferramentas experimentais, analytics interno, business intelligence, beta tools"
      />

      <div className="min-h-screen bg-gradient-to-br from-legal-gray to-background">
        {/* Header */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-start mb-8">
              <div>
              <div className="flex items-center gap-3 mb-4">
                <TestTube className="w-8 h-8 text-legal-primary" />
                <span className="inline-block px-4 py-2 bg-legal-primary bg-opacity-10 text-legal-primary rounded-full text-sm font-medium">
                    ACESSO RESTRITO
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-legal-primary mb-6 font-haas">
                  LEGAL Labs
                  <span className="text-legal-secondary block">Ferramentas Experimentais</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl font-haas">
                  Ferramentas avançadas de analytics, BI e insights com IA para equipe interna da LEGAL. 
                  Ambiente de testes e desenvolvimento de novos recursos.
                </p>
              </div>
              
              <Button
                onClick={logout}
                variant="outline"
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sair
              </Button>
            </div>

            {/* Warning Banner */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-4 mb-8">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-yellow-600" />
                <div>
                  <h3 className="font-semibold text-yellow-800">Ambiente Experimental</h3>
                  <p className="text-sm text-yellow-700">
                    Estas ferramentas estão em desenvolvimento e podem conter dados simulados. 
                    Use apenas para testes internos e validação de conceitos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {labsTools.map((tool, index) => (
                <Card 
                  key={tool.title}
                  className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${tool.color}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      {tool.icon}
                      {getStatusBadge(tool.status)}
                    </div>
                    <CardTitle className="text-lg font-bold text-legal-primary group-hover:text-legal-secondary transition-colors">
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                      {tool.description}
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-legal-primary text-legal-primary hover:bg-legal-primary hover:text-white transition-all"
                      disabled={tool.status === 'coming-soon'}
                    >
                      {tool.status === 'coming-soon' ? (
                        <div className="flex items-center justify-center">
                          Em Breve
                          <Zap className="ml-2 w-4 h-4" />
                        </div>
                      ) : (
                        <Link to={tool.link} className="flex items-center justify-center">
                          Explorar
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Link>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <section className="py-16 px-4 bg-gradient-to-r from-legal-primary to-legal-secondary">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Desenvolvido pela Equipe LEGAL
              </h3>
              <p className="text-white/80 mb-6">
                Estas ferramentas representam o futuro dos analytics e BI da LEGAL. 
                Seu feedback é essencial para o desenvolvimento final dos produtos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  className="bg-white text-legal-primary border-white hover:bg-legal-gray"
                  asChild
                >
                  <Link to="/contato">
                    Enviar Feedback
                  </Link>
                </Button>
                <Button 
                  className="bg-legal-tertiary hover:bg-legal-tertiary/90 text-legal-black"
                  asChild
                >
                  <Link to="/universo">
                    Voltar ao Universo
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LabsPage;