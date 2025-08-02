import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, Users, Target, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface Pesquisa {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  status: 'ativa' | 'em-breve' | 'encerrada';
  dataInicio: string;
  dataFim: string;
  tempoEstimado: string;
  participantes: number;
  metaParticipantes: number;
  linkPesquisa: string;
  recompensa?: string;
  tags: string[];
}

const pesquisas: Pesquisa[] = [
  {
    id: '1',
    titulo: 'Mapeamento Nacional 2025 sobre o uso de IA nas empresas',
    descricao: 'Participe da maior pesquisa sobre adoção de Inteligência Artificial no Brasil. Ajude-nos a mapear como as empresas brasileiras estão utilizando IA e quais são os principais desafios e oportunidades.',
    categoria: 'Inteligência Artificial',
    status: 'ativa',
    dataInicio: '2025-01-15',
    dataFim: '2025-12-31',
    tempoEstimado: '5 min',
    participantes: 0,
    metaParticipantes: 1000,
    linkPesquisa: '/universo/pesquisas/mercado/mapeamento-ia-2025',
    recompensa: 'Relatório executivo gratuito',
    tags: ['IA', 'Empresas', 'Brasil', 'Transformação Digital']
  }
];

const getStatusColor = (status: Pesquisa['status']) => {
  switch (status) {
    case 'ativa':
      return 'bg-green-100 text-green-800';
    case 'em-breve':
      return 'bg-yellow-100 text-yellow-800';
    case 'encerrada':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusLabel = (status: Pesquisa['status']) => {
  switch (status) {
    case 'ativa':
      return 'Ativa';
    case 'em-breve':
      return 'Em Breve';
    case 'encerrada':
      return 'Encerrada';
    default:
      return status;
  }
};

const PesquisasMercadoPage: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateProgress = (participantes: number, meta: number) => {
    return Math.round((participantes / meta) * 100);
  };

  return (
    <>
      <Helmet>
        <title>Pesquisas de Mercado | LEGAL</title>
        <meta name="description" content="Participe das pesquisas de mercado da LEGAL e contribua para o futuro dos eventos inteligentes no Brasil." />
        <meta name="keywords" content="pesquisas de mercado, IA, eventos inteligentes, transformação digital, LEGAL" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/universo" className="hover:text-legal">Universo</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/universo/pesquisas" className="hover:text-legal">Pesquisas</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900">Pesquisas de Mercado</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <section className="py-16 bg-gradient-to-r from-legal-purple via-legal to-legal-cyan">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
              <Link 
                to="/universo/pesquisas" 
                className="text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Pesquisas de Mercado
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Sua opinião importa! Participe das nossas pesquisas e ajude a moldar 
                  o futuro dos eventos inteligentes no Brasil.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pesquisas List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Pesquisas Disponíveis
              </h2>
              <p className="text-gray-600">
                Escolha uma pesquisa e contribua com insights valiosos para o mercado.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {pesquisas.map((pesquisa) => (
                <Card key={pesquisa.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-legal">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={getStatusColor(pesquisa.status)}>
                        {getStatusLabel(pesquisa.status)}
                      </Badge>
                      <Badge variant="outline">{pesquisa.categoria}</Badge>
                    </div>
                    
                    <CardTitle className="text-2xl mb-3">
                      {pesquisa.titulo}
                    </CardTitle>
                    
                    <CardDescription className="text-base leading-relaxed">
                      {pesquisa.descricao}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Meta informações */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-legal" />
                        <div>
                          <p className="text-gray-500">Prazo</p>
                          <p className="font-medium">{formatDate(pesquisa.dataFim)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-legal" />
                        <div>
                          <p className="text-gray-500">Duração</p>
                          <p className="font-medium">{pesquisa.tempoEstimado}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-legal" />
                        <div>
                          <p className="text-gray-500">Participantes</p>
                          <p className="font-medium">{pesquisa.participantes}/{pesquisa.metaParticipantes}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-legal" />
                        <div>
                          <p className="text-gray-500">Progresso</p>
                          <p className="font-medium">{calculateProgress(pesquisa.participantes, pesquisa.metaParticipantes)}%</p>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-legal to-legal-cyan h-2 rounded-full transition-all duration-500"
                        style={{ width: `${calculateProgress(pesquisa.participantes, pesquisa.metaParticipantes)}%` }}
                      />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {pesquisa.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Recompensa */}
                    {pesquisa.recompensa && (
                      <div className="bg-legal/5 border border-legal/20 rounded-lg p-4">
                        <p className="text-sm font-medium text-legal mb-1">🎁 Recompensa</p>
                        <p className="text-sm text-gray-700">{pesquisa.recompensa}</p>
                      </div>
                    )}

                    {/* Ação */}
                    <div className="flex gap-3 pt-4">
                      <Button 
                        asChild 
                        size="lg" 
                        className="bg-legal hover:bg-legal-purple flex-1 md:flex-none"
                        disabled={pesquisa.status !== 'ativa'}
                      >
                        <Link to={pesquisa.linkPesquisa}>
                          {pesquisa.status === 'ativa' ? 'Participar Agora' : 'Indisponível'}
                          {pesquisa.status === 'ativa' && <ExternalLink className="w-4 h-4 ml-2" />}
                        </Link>
                      </Button>
                      
                      <Button variant="outline" size="lg">
                        Mais Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State se não houver pesquisas ativas */}
            {pesquisas.filter(p => p.status === 'ativa').length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-legal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-legal" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nenhuma pesquisa ativa no momento
                </h3>
                <p className="text-gray-600 mb-6">
                  Volte em breve para participar de novas pesquisas.
                </p>
                <Button asChild variant="outline">
                  <Link to="/contato">
                    Notificar-me sobre novas pesquisas
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quer propor uma pesquisa?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Tem algum tema que gostaria de ver pesquisado? Entre em contato 
              conosco e vamos construir juntos o conhecimento do setor.
            </p>
            <Button 
              size="lg" 
              className="bg-legal hover:bg-legal-purple"
              asChild
            >
              <Link to="/contato">
                Propor Pesquisa
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default PesquisasMercadoPage;