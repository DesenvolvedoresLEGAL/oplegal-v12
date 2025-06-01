
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, ChevronDown, ChevronUp, MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import SectionTitle from '@/components/SectionTitle';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const categories = [
    { id: 'all', label: 'Todas as Categorias' },
    { id: 'smart-events', label: 'Smart Events' },
    { id: 'billing', label: 'Faturamento' },
    { id: 'technical', label: 'Técnicas' },
    { id: 'api', label: 'API e Integrações' },
    { id: 'account', label: 'Conta e Acesso' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'smart-events',
      question: 'O que é o Smart Events™ da LEGAL?',
      answer: 'O Smart Events™ é nossa plataforma revolucionária que transforma eventos tradicionais em experiências inteligentes e conectadas. Utilizamos IoT, IA e análise de dados em tempo real para otimizar gestão, segurança e engajamento em eventos de todos os tipos e tamanhos.'
    },
    {
      id: 2,
      category: 'smart-events',
      question: 'Quais tipos de eventos podem usar o Smart Events™?',
      answer: 'Nossa plataforma é versátil e atende desde pequenas reuniões corporativas até grandes festivais e conferências. Funcionamos com eventos presenciais, híbridos e virtuais, incluindo: conferências, shows, feiras, casamentos, eventos corporativos, festivais e muito mais.'
    },
    {
      id: 3,
      category: 'billing',
      question: 'Como funciona o modelo de cobrança da LEGAL?',
      answer: 'Oferecemos diferentes planos flexíveis baseados no número de participantes e recursos utilizados. Temos opções de pagamento mensal, anual e por evento. Entre em contato com nossa equipe comercial para um plano personalizado às suas necessidades.'
    },
    {
      id: 4,
      category: 'billing',
      question: 'Existe período de teste gratuito?',
      answer: 'Sim! Oferecemos um trial de 30 dias com acesso completo à plataforma para até 100 participantes. Você pode testar todas as funcionalidades sem compromisso. Basta se cadastrar em nosso portal BLUE.'
    },
    {
      id: 5,
      category: 'technical',
      question: 'Que tipos de dispositivos IoT são compatíveis?',
      answer: 'Nossa plataforma é compatível com uma ampla gama de dispositivos IoT, incluindo: sensores de presença, câmeras inteligentes, dispositivos de áudio, sensores ambientais (temperatura, umidade), dispositivos de acesso (catracas, RFID), e muito mais. Também oferecemos nossos próprios dispositivos otimizados.'
    },
    {
      id: 6,
      category: 'technical',
      question: 'Como funciona a segurança dos dados?',
      answer: 'A segurança é nossa prioridade máxima. Utilizamos criptografia de ponta a ponta, compliance com LGPD, servidores seguros no Brasil, backups automáticos e monitoramento 24/7. Todos os dados são processados em território nacional seguindo as melhores práticas de segurança.'
    },
    {
      id: 7,
      category: 'api',
      question: 'A LEGAL oferece APIs para integração?',
      answer: 'Sim! Temos uma API robusta e bem documentada que permite integração com sistemas existentes como CRM, ERP, plataformas de pagamento e outras ferramentas. Nossa API REST é fácil de implementar e conta com suporte técnico dedicado.'
    },
    {
      id: 8,
      category: 'api',
      question: 'Como posso acessar a documentação da API?',
      answer: 'A documentação completa da API está disponível em nosso portal para desenvolvedores. Você encontrará exemplos de código, guias de integração, referência de endpoints e sandbox para testes. Acesse através do portal BLUE ou entre em contato com nosso suporte técnico.'
    },
    {
      id: 9,
      category: 'account',
      question: 'Como criar uma conta no portal BLUE?',
      answer: 'É simples! Acesse blue.operadora.legal, clique em "Criar Conta" e preencha seus dados. Você receberá um email de confirmação e poderá começar a usar nossa plataforma imediatamente. O processo leva menos de 5 minutos.'
    },
    {
      id: 10,
      category: 'account',
      question: 'Esqueci minha senha, como recuperar?',
      answer: 'Na tela de login do portal BLUE, clique em "Esqueci minha senha", digite seu email cadastrado e siga as instruções que serão enviadas. O processo é seguro e você receberá um link temporário para redefinir sua senha.'
    },
    {
      id: 11,
      category: 'smart-events',
      question: 'Qual o tempo de implementação do Smart Events™?',
      answer: 'O tempo varia conforme a complexidade do evento. Para eventos básicos, a implementação pode ser feita em 24-48 horas. Eventos mais complexos com múltiplos dispositivos IoT podem levar de 1-2 semanas. Nossa equipe faz um cronograma detalhado para cada projeto.'
    },
    {
      id: 12,
      category: 'technical',
      question: 'O que acontece se a internet falhar durante o evento?',
      answer: 'Nossa plataforma tem redundância e sistemas offline. Os dispositivos continuam coletando dados localmente e sincronizam quando a conexão é restabelecida. Temos também parcerias com provedores de internet para backup de conectividade em eventos críticos.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>FAQ LEGAL | Perguntas Frequentes e Suporte</title>
        <meta name="description" content="Encontre respostas para as principais dúvidas sobre Smart Events™, API, faturamento e serviços da LEGAL. Suporte completo e documentação." />
        <meta property="og:title" content="FAQ LEGAL | Perguntas e Respostas" />
        <meta property="og:description" content="Central de ajuda com respostas detalhadas sobre produtos e serviços LEGAL. Suporte técnico e comercial." />
        <meta property="og:url" content="https://operadora.legal/universo/faq" />
        <meta name="keywords" content="LEGAL FAQ, perguntas frequentes, suporte LEGAL, ajuda Smart Events, documentação API" />
        <link rel="canonical" href="https://operadora.legal/universo/faq" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-legal-green bg-opacity-10 text-legal-green rounded-full text-sm font-medium mb-4">
              Central de Ajuda
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-legal mb-6 font-unica">
              Perguntas
              <span className="text-legal-green block">Frequentes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-unica">
              Encontre respostas rápidas para as principais dúvidas sobre nossos produtos e serviços.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar nas perguntas frequentes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg border-legal focus:ring-legal"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-legal hover:bg-legal-purple" : "border-legal text-legal hover:bg-legal hover:text-white"}
                  size="sm"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <Card key={faq.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <Collapsible>
                      <CollapsibleTrigger 
                        className="w-full"
                        onClick={() => toggleItem(faq.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <h3 className="text-left text-lg font-semibold text-legal pr-4">
                              {faq.question}
                            </h3>
                            {openItems.includes(faq.id) ? (
                              <ChevronUp className="w-5 h-5 text-legal flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-legal flex-shrink-0" />
                            )}
                          </div>
                        </CardContent>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0 pb-6 px-6">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Nenhuma pergunta encontrada
                </h3>
                <p className="text-gray-500 mb-6">
                  Tente ajustar sua busca ou entre em contato conosco.
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  variant="outline"
                  className="border-legal text-legal hover:bg-legal hover:text-white"
                >
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto text-center">
            <SectionTitle
              title="Não Encontrou Sua Resposta?"
              subtitle="Nossa equipe está pronta para ajudar você"
              center
            />
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-legal bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-legal" />
                  </div>
                  <h3 className="text-lg font-bold text-legal mb-2">Chat Online</h3>
                  <p className="text-gray-600 mb-4">
                    Fale conosco em tempo real através do nosso chat.
                  </p>
                  <Button className="bg-legal hover:bg-legal-purple text-white">
                    Iniciar Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-legal-purple bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-legal-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-legal mb-2">Email</h3>
                  <p className="text-gray-600 mb-4">
                    Envie sua dúvida por email e receba resposta em até 24h.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-legal-purple text-legal-purple hover:bg-legal-purple hover:text-white"
                    asChild
                  >
                    <a href="mailto:suporte@operadora.legal">
                      Enviar Email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-legal-green bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-legal-green" />
                  </div>
                  <h3 className="text-lg font-bold text-legal mb-2">Telefone</h3>
                  <p className="text-gray-600 mb-4">
                    Ligue para nossa central de atendimento.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-legal-green text-legal-green hover:bg-legal-green hover:text-white"
                    asChild
                  >
                    <a href="tel:+5511999999999">
                      (11) 9999-9999
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;
