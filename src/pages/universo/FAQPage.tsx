import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import SectionTitle from '@/components/SectionTitle';
import SEOHead from '@/components/SEOHead';
import WebPageSchema from '@/components/seo/WebPageSchema';
import BreadcrumbsSchema from '@/components/seo/BreadcrumbsSchema';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';
const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);
  const toggleItem = (id: number) => {
    setOpenItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };
  const categories = [{
    id: 'all',
    label: 'Todas as Unidades'
  }, {
    id: 'ai',
    label: 'AI - Inteligência Artificial'
  }, {
    id: 'aero',
    label: 'AERO - Drones e Logística'
  }, {
    id: 'alugue',
    label: 'ALUGUE - Equipamentos'
  }, {
    id: 'assinatura',
    label: 'ASSINATURA - Serviços'
  }];
  const faqs = [
    // AI - Inteligência Artificial
    {
      id: 1,
      category: 'ai',
      question: 'O que são as soluções de IA da LEGAL?',
      answer: 'Nossa unidade de negócios AI oferece soluções de inteligência artificial como LinkAI para networking inteligente, MAGICPASS para reconhecimento facial, FitScore para análise de compatibilidade e muito mais. Todas baseadas em machine learning avançado.'
    },
    {
      id: 2,
      category: 'ai',
      question: 'Como o LinkAI funciona em eventos?',
      answer: 'O LinkAI analisa perfis de participantes e sugere conexões personalizadas com 95% de precisão. Utiliza algoritmos de machine learning que consideram objetivos profissionais, interesses e networking preferences para maximizar o valor das conexões.'
    },
    {
      id: 3,
      category: 'ai',
      question: 'O MAGICPASS é seguro e está em compliance?',
      answer: 'Sim! O MAGICPASS utiliza criptografia avançada, é 100% compatível com LGPD, processa dados apenas no Brasil e oferece controle total aos usuários sobre suas informações biométricas. A privacidade é nossa prioridade.'
    },
    {
      id: 4,
      category: 'ai',
      question: 'Como implementar soluções de IA nos meus eventos?',
      answer: 'Nossa equipe técnica faz toda a implementação. O processo inclui análise de necessidades, configuração personalizada, treinamento da equipe e suporte 24/7 durante o evento. Implementação padrão em 2-4 semanas.'
    },

    // AERO - Drones e Logística
    {
      id: 5,
      category: 'aero',
      question: 'Que tipos de serviços a AERO oferece?',
      answer: 'A AERO é nossa divisão de drones e logística que oferece delivery aéreo, lavagem de edifícios com drones, inspeções industriais, mapeamento aéreo e soluções logísticas inovadoras para eventos e empresas.'
    },
    {
      id: 6,
      category: 'aero',
      question: 'Como funciona o AeroDelivery para eventos?',
      answer: 'Nossos drones fazem entregas rápidas e precisas dentro de eventos, transportando desde brindes até equipamentos. Operamos com total segurança, seguindo regulamentações da ANAC e com pilotos certificados.'
    },
    {
      id: 7,
      category: 'aero',
      question: 'A AERO oferece serviços de limpeza predial?',
      answer: 'Sim! O AeroWash revoluciona a limpeza de fachadas com drones especializados. Mais seguro, rápido e eficiente que métodos tradicionais. Ideal para edifícios altos e estruturas de difícil acesso.'
    },
    {
      id: 8,
      category: 'aero',
      question: 'Quais são os requisitos para contratar serviços AERO?',
      answer: 'Fazemos análise prévia do local, verificamos regulamentações locais, definimos zona de voo segura e obtemos autorizações necessárias. Nossa equipe cuida de toda a burocracia e compliance.'
    },

    // ALUGUE - Equipamentos
    {
      id: 9,
      category: 'alugue',
      question: 'Que tipos de equipamentos posso alugar?',
      answer: 'Oferecemos amplo catálogo: equipamentos de som, iluminação, projeção, mobiliário para eventos, dispositivos IoT, câmeras, estruturas modulares, geradores e muito mais. Tudo para seu evento ser perfeito.'
    },
    {
      id: 10,
      category: 'alugue',
      question: 'Como funciona o processo de aluguel?',
      answer: 'Simples: escolha os equipamentos, defina período de locação, receba orçamento personalizado, confirmamos disponibilidade e fazemos entrega/montagem no local. Suporte técnico incluído durante todo o evento.'
    },
    {
      id: 11,
      category: 'alugue',
      question: 'Vocês fazem entrega e montagem?',
      answer: 'Sim! Temos equipe técnica especializada que cuida de toda logística: transporte, montagem, configuração, testes e suporte durante o evento. Também fazemos desmontagem e retirada pós-evento.'
    },
    {
      id: 12,
      category: 'alugue',
      question: 'Qual o prazo mínimo de antecedência para aluguel?',
      answer: 'Recomendamos 15 dias para garantir disponibilidade, mas atendemos demandas urgentes conforme estoque. Para eventos grandes ou equipamentos específicos, sugerimos 30 dias de antecedência.'
    },

    // ASSINATURA - Serviços
    {
      id: 13,
      category: 'assinatura',
      question: 'O que inclui o plano de assinatura LEGAL?',
      answer: 'Nossos planos de assinatura incluem acesso ao portal BLUE, créditos mensais para usar produtos LEGAL, suporte prioritário, desconto em equipamentos, acesso antecipado a novos produtos e muito mais.'
    },
    {
      id: 14,
      category: 'assinatura',
      question: 'Como funcionam os créditos mensais?',
      answer: 'Cada plano inclui créditos que podem ser usados em qualquer produto LEGAL: IA, equipamentos, drones, analytics. Créditos não utilizados acumulam por até 12 meses. Flexibilidade total para suas necessidades.'
    },
    {
      id: 15,
      category: 'assinatura',
      question: 'Posso cancelar minha assinatura a qualquer momento?',
      answer: 'Sim! Não temos fidelidade. Pode cancelar quando quiser através do portal BLUE. Créditos restantes permanecem válidos por 90 dias após cancelamento para você usar.'
    },
    {
      id: 16,
      category: 'assinatura',
      question: 'Existe desconto para assinatura anual?',
      answer: 'Sim! Assinatura anual tem 20% de desconto, créditos extras de bônus e benefícios exclusivos como acesso beta a novos produtos e consultoria estratégica inclusa.'
    }
  ];
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return <>
      <SEOHead
        title="Perguntas Frequentes | LEGAL"
        description="Encontre respostas para as principais dúvidas sobre a LEGAL e seus produtos. Central de ajuda completa com informações detalhadas."
        keywords="FAQ LEGAL, perguntas frequentes, ajuda LEGAL, suporte, dúvidas"
        url="https://operadora.legal/universo/faq"
        type="website"
      />
      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization 
        contentDomain="support"
        entityType="service"
        optimizationLevel="advanced"
      />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor enableReporting={true} />
      <AIFeedbackSystem enableRealTimeOptimization={true} />
      <AdvancedFeaturedSnippets 
        pageType="about"
        focusKeyword="FAQ LEGAL perguntas frequentes"
      />
      <SEOCrawlerOptimization />
      <WebPageSchema
        name="Perguntas Frequentes | LEGAL"
        description="Encontre respostas para as principais dúvidas sobre a LEGAL e seus produtos."
        url="https://operadora.legal/universo/faq"
        breadcrumb={[
          { name: "Universo", url: "https://operadora.legal/universo" },
          { name: "FAQ", url: "https://operadora.legal/universo/faq" }
        ]}
      />
      <FAQPageSchema
        faqs={filteredFAQs.map((faq, index) => ({
          question: faq.question,
          answer: faq.answer,
          dateCreated: "2024-01-01T00:00:00Z",
          upvoteCount: Math.floor(Math.random() * 50) + 10,
          answerCount: 1,
          author: "Equipe LEGAL"
        }))}
        pageUrl="https://operadora.legal/universo/faq"
        name="Perguntas Frequentes | LEGAL"
        description="Encontre respostas para as principais dúvidas sobre a LEGAL e seus produtos. Central de ajuda completa com informações detalhadas sobre AI, AERO, ALUGUE e ASSINATURA."
        author={{
          name: "LEGAL",
          url: "https://operadora.legal"
        }}
        publisher={{
          name: "LEGAL",
          logo: "https://operadora.legal/images/legal-logo.png",
          url: "https://operadora.legal"
        }}
        datePublished="2024-01-01T00:00:00Z"
        dateModified={new Date().toISOString()}
        inLanguage="pt-BR"
      />
      <BreadcrumbsSchema />

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
                <Input type="text" placeholder="Buscar nas perguntas frequentes..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-12 h-12 text-lg border-legal focus:ring-legal" />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => <Button key={category.id} variant={selectedCategory === category.id ? "default" : "outline"} onClick={() => setSelectedCategory(category.id)} className={selectedCategory === category.id ? "bg-legal hover:bg-legal-purple" : "border-legal text-legal hover:bg-legal hover:text-white"} size="sm">
                  {category.label}
                </Button>)}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            {filteredFAQs.length > 0 ? <div className="space-y-4">
                {filteredFAQs.map((faq, index) => <Card key={faq.id} className="overflow-hidden hover:shadow-md transition-shadow" id={`faq-${index + 1}`}>
                    <Collapsible>
                      <CollapsibleTrigger className="w-full" onClick={() => toggleItem(faq.id)}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <h3 className="text-left text-lg font-semibold text-legal pr-4">
                              {faq.question}
                            </h3>
                            {openItems.includes(faq.id) ? <ChevronUp className="w-5 h-5 text-legal flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-legal flex-shrink-0" />}
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
                  </Card>)}
              </div> : <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Nenhuma pergunta encontrada
                </h3>
                <p className="text-gray-500 mb-6">
                  Tente ajustar sua busca ou entre em contato conosco.
                </p>
                <Button onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }} variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
                  Limpar Filtros
                </Button>
              </div>}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto text-center">
            <SectionTitle title="Não Encontrou Sua Resposta?" subtitle="Nossa equipe está pronta para ajudar você" center />
            
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
                  <Button variant="outline" className="border-legal-purple text-legal-purple hover:bg-legal-purple hover:text-white" asChild>
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
                  <Button variant="outline" className="border-legal-green text-legal-green hover:bg-legal-green hover:text-white" asChild>
                    <a href="tel:+5511999999999">(11) 5194-2223</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tutorial Section with Wag */}
        <section 
          className="py-20 px-4 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #4d2bfb 0%, #020cbc 100%)'
          }}
        >
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-unica">
                  Primeiros passos na LEGAL?
                </h2>
                <p className="text-xl text-white/90 mb-4 font-unica">
                  Tutorial passo a passo de como funciona os serviços da LEGAL
                </p>
                <p className="text-lg text-white/80 mb-8 font-unica">
                  Com: Wag Sansevero
                </p>
                <Button 
                  size="lg" 
                  className="bg-legal-green hover:bg-legal-green/90 text-white px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  ASSISTIR AGORA
                </Button>
              </div>
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-legal-green/20 to-transparent rounded-full blur-3xl"></div>
                  <img
                    src="/lovable-uploads/3f2fca6f-dacf-423f-8d06-20257b27a74e.png"
                    alt="Wag Sansevero - Fundador da LEGAL"
                    className="relative z-10 w-full h-auto rounded-full shadow-2xl border-4 border-white/20"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-16 h-16 opacity-10">
              <MessageCircle className="w-full h-full text-white" />
            </div>
            <div className="absolute top-40 right-20 w-12 h-12 opacity-10">
              <Phone className="w-full h-full text-white" />
            </div>
            <div className="absolute bottom-20 left-20 w-20 h-20 opacity-10">
              <Mail className="w-full h-full text-white" />
            </div>
            <div className="absolute bottom-40 right-10 w-14 h-14 opacity-10">
              <Search className="w-full h-full text-white" />
            </div>
          </div>
        </section>
      </div>
    </>;
};
export default FAQPage;