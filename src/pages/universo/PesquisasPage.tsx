import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, ExternalLink, FileText, TrendingUp, Users, Calendar, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PesquisasPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pesquisas de Mercado e Whitepapers | LEGAL</title>
        <meta name="description" content="Acesse as principais pesquisas de mercado, whitepapers e relatórios setoriais da LEGAL sobre eventos inteligentes, tecnologia e inovação." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-legal-purple via-legal to-legal-cyan">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pesquisas & Whitepapers
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Conheça nossos insights exclusivos sobre o mercado de eventos inteligentes, 
              tendências tecnológicas e transformação digital.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Em Breve: Conteúdo Exclusivo
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Estamos preparando pesquisas exclusivas e whitepapers sobre o futuro dos 
                eventos inteligentes. Cadastre-se para ser o primeiro a ter acesso.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Link to="/universo/pesquisas/mercado" className="block">
                <Card className="text-center hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
                  <CardHeader>
                    <TrendingUp className="w-12 h-12 text-legal mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="group-hover:text-legal transition-colors">Pesquisas de Mercado</CardTitle>
                    <CardDescription>
                      Participe de pesquisas ativas e contribua com dados do setor de eventos
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Card className="text-center">
                <CardHeader>
                  <FileText className="w-12 h-12 text-legal mx-auto mb-4" />
                  <CardTitle>Whitepapers Técnicos</CardTitle>
                  <CardDescription>
                    Guias detalhados sobre implementação de tecnologias em eventos
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-legal mx-auto mb-4" />
                  <CardTitle>Relatórios Setoriais</CardTitle>
                  <CardDescription>
                    Insights sobre diferentes segmentos do mercado de eventos
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quer receber nossas pesquisas em primeira mão?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Cadastre-se em nossa newsletter e seja o primeiro a acessar nossos 
              insights exclusivos sobre o futuro dos eventos inteligentes.
            </p>
            <Button 
              size="lg" 
              className="bg-legal hover:bg-legal-purple px-8 py-3"
              asChild
            >
              <a href="/contato">
                Quero me cadastrar
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default PesquisasPage;