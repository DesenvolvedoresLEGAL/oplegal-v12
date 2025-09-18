
import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Wifi, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionTitle from '@/components/SectionTitle';
import SEOHead from '@/components/SEOHead';
import WebPageSchema from '@/components/seo/WebPageSchema';
import BreadcrumbsSchema from '@/components/seo/BreadcrumbsSchema';

const StatusPage = () => {
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simular atualizações em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 30000); // Atualiza a cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      name: 'Smart Events Platform',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '145ms',
      description: 'Plataforma principal para gestão de eventos',
      icon: <Activity className="w-6 h-6" />
    },
    {
      name: 'API LEGAL',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '89ms',
      description: 'Interface de programação para integrações',
      icon: <Server className="w-6 h-6" />
    },
    {
      name: 'BLUE Portal',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '201ms',
      description: 'Portal de clientes e gestão de contas',
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: 'IoT Connectivity',
      status: 'maintenance',
      uptime: '99.92%',
      responseTime: '298ms',
      description: 'Conectividade para dispositivos IoT',
      icon: <Wifi className="w-6 h-6" />
    },
    {
      name: 'IA LEGAL',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '167ms',
      description: 'Serviços de inteligência artificial',
      icon: <Activity className="w-6 h-6" />
    },
    {
      name: 'Payment Gateway',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '134ms',
      description: 'Sistema de pagamentos e transações',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Manutenção Programada - IoT Connectivity',
      status: 'in-progress',
      severity: 'medium',
      startTime: '2024-06-01T02:00:00',
      description: 'Manutenção programada para atualização de infraestrutura IoT. Impacto mínimo esperado.',
      updates: [
        {
          time: '2024-06-01T02:00:00',
          message: 'Iniciada manutenção programada do sistema IoT.'
        },
        {
          time: '2024-06-01T02:30:00',
          message: 'Progresso da manutenção: 45% concluído.'
        }
      ]
    },
    {
      id: 2,
      title: 'Lentidão Temporária - Smart Events Platform',
      status: 'resolved',
      severity: 'low',
      startTime: '2024-05-30T14:20:00',
      endTime: '2024-05-30T15:45:00',
      description: 'Identificada e resolvida lentidão temporária na plataforma principal.',
      updates: [
        {
          time: '2024-05-30T15:45:00',
          message: 'Problema resolvido. Todos os serviços funcionando normalmente.'
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'maintenance':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'outage':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getIncidentStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'investigating':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <SEOHead
        title="Status dos Serviços | LEGAL"
        description="Monitore em tempo real o status de todos os serviços e produtos LEGAL. Informações sobre disponibilidade e manutenções."
        keywords="status LEGAL, monitoramento serviços, disponibilidade LEGAL, tempo real"
        url="https://operadora.legal/universo/status"
        type="website"
      />
      <WebPageSchema
        name="Status dos Serviços | LEGAL"
        description="Monitore em tempo real o status de todos os serviços e produtos LEGAL."
        url="https://operadora.legal/universo/status"
        breadcrumb={[
          { name: "Universo", url: "https://operadora.legal/universo" },
          { name: "Status", url: "https://operadora.legal/universo/status" }
        ]}
      />
      <BreadcrumbsSchema />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-legal-green bg-opacity-10 text-legal-green rounded-full text-sm font-medium mb-4">
              Monitoramento em Tempo Real
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-legal mb-6 font-unica">
              Status dos
              <span className="text-legal-green block">Serviços</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-unica">
              Transparência total sobre a disponibilidade e performance de todos os nossos sistemas.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              Última atualização: {lastUpdate.toLocaleString('pt-BR')}
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <h2 className="text-2xl font-bold text-legal">Todos os Sistemas Operacionais</h2>
                </div>
                <p className="text-gray-600">
                  A maioria dos nossos serviços está funcionando normalmente. Acompanhe abaixo o status detalhado.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <SectionTitle
              title="Status dos Serviços"
              subtitle="Monitoramento detalhado de cada sistema"
              center
            />

            <div className="grid gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-legal bg-opacity-10 flex items-center justify-center mr-4">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-legal">{service.name}</h3>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {getStatusIcon(service.status)}
                        <Badge className={`ml-2 ${getStatusColor(service.status)}`}>
                          {service.status === 'operational' ? 'Operacional' : 
                           service.status === 'maintenance' ? 'Manutenção' : 'Indisponível'}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">Uptime (30 dias)</p>
                        <p className="text-lg font-bold text-legal">{service.uptime}</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">Tempo de Resposta</p>
                        <p className="text-lg font-bold text-legal">{service.responseTime}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Incidents */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <SectionTitle
              title="Incidentes e Manutenções"
              subtitle="Histórico de eventos que podem afetar os serviços"
              center
            />

            <div className="space-y-6">
              {incidents.map((incident) => (
                <Card key={incident.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-legal">{incident.title}</CardTitle>
                      <div className="flex space-x-2">
                        <Badge className={getSeverityColor(incident.severity)}>
                          {incident.severity === 'high' ? 'Alta' : 
                           incident.severity === 'medium' ? 'Média' : 'Baixa'}
                        </Badge>
                        <Badge className={getIncidentStatusColor(incident.status)}>
                          {incident.status === 'resolved' ? 'Resolvido' : 
                           incident.status === 'in-progress' ? 'Em Andamento' : 'Investigando'}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{incident.description}</p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-legal">Atualizações:</h4>
                      {incident.updates.map((update, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500 min-w-[120px]">
                            {new Date(update.time).toLocaleString('pt-BR')}
                          </div>
                          <div className="text-sm text-gray-700">{update.message}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <SectionTitle
              title="Mantenha-se Informado"
              subtitle="Receba notificações sobre status e incidentes"
              center
            />
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Assine nossa página de status para receber notificações automáticas sobre incidentes e manutenções.
                </p>
                <div className="space-y-4">
                  <Badge className="bg-legal-green text-white">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Email
                  </Badge>
                  <Badge className="bg-legal-purple text-white">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    SMS
                  </Badge>
                  <Badge className="bg-legal text-white">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Webhook
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default StatusPage;
