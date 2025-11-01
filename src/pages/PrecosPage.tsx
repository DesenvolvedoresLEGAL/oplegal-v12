import React from "react";
import SEOHead from '@/components/SEOHead';
import OfferSchema from '@/components/seo/OfferSchema';
import WebPageSchema from '@/components/seo/WebPageSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';
import { ArrowDown, Check, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrecosPage = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('speedy-section');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <SEOHead
        title="Planos LEGAL – Conectividade 5G para Eventos e Empresas"
        description="Conheça os planos da LEGAL – Internet 5G ultra-rápida para eventos e negócios. Compare planos e ative agora sua conectividade."
        keywords="planos LEGAL, internet 5G, SPEEDY 5G, preços, eventos, conectividade"
        canonical="https://operadora.legal/precos"
        image="https://operadora.legal/images/precos-legal-2024.jpg"
        type="website"
      />
      
      <OfferSchema 
        name="Planos LEGAL - 5G"
        description="Internet 5G ultra-rápida para eventos e negócios"
        itemOffered={{
          type: "Service",
          name: "SPEEDY 5G",
          description: "Conectividade 5G para eventos e negócios",
          category: "Tecnologia Empresarial"
        }}
        seller={{
          name: "LEGAL",
          type: "Organization",
          url: "https://operadora.legal",
          telephone: "(11) 5194-2223",
          email: "sos@operadora.legal"
        }}
        priceSpecification={{
          price: 150,
          priceCurrency: "BRL"
        }}
        availability="InStock"
        areaServed={["São Paulo", "Brasil"]}
      />
      
      <WebPageSchema
        name="Planos e Preços - LEGAL"
        description="Planos criados para o futuro dos negócios inteligentes"
        url="https://operadora.legal/precos"
        breadcrumb={[
          { name: "Home", url: "https://operadora.legal" },
          { name: "Preços", url: "https://operadora.legal/precos" }
        ]}
      />
      
      <AIKnowledgeProvider />
      <VoiceSearchOptimization />
      <GEOAdvancedOptimization 
        contentDomain="business"
        entityType="service"
        optimizationLevel="advanced"
      />
      <RealUserMonitoring />
      <CoreWebVitalsMonitor enableReporting={true} />
      <AIFeedbackSystem enableRealTimeOptimization={true} />
      <AdvancedFeaturedSnippets 
        pageType="pricing"
        focusKeyword="LEGAL preços planos"
      />
      <SEOCrawlerOptimization />
      
      <Breadcrumbs />

      <Helmet>
        <title>Planos LEGAL – Conectividade 5G para Eventos e Empresas</title>
        <meta name="description" content="Conheça os planos da LEGAL – Internet 5G ultra-rápida para eventos e negócios. Compare planos e ative agora sua conectividade." />
        <meta property="og:title" content="Planos LEGAL – 5G para Empresas" />
        <meta property="og:description" content="Internet 5G ultra-rápida para eventos. Planos a partir de R$ 150/dia." />
      </Helmet>

      {/* SEÇÃO 1 - HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-legal-primary via-legal-secondary to-legal-purple pt-24 pb-16">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Planos criados para o futuro dos negócios inteligentes
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Escolha o plano ideal para sua empresa — de conectividade 5G até automações com Inteligência Artificial.
            </p>
            <Button
              onClick={scrollToPlans}
              size="lg"
              className="bg-legal-cyan text-legal hover:bg-legal-cyan/90 font-bold text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105"
            >
              Começar agora
              <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - SPEEDY 5G™ */}
      <section id="speedy-section" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-legal">
              Planos de Internet 5G para Eventos e Negócios
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Alta velocidade, estabilidade e cobertura para qualquer tipo de evento.
            </p>
          </div>

          {/* Grid de Cards SPEEDY */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {/* SPEEDY LITE */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-50 border-2 border-gray-200 hover:border-legal-purple animate-fade-up">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-black text-legal">Speedy Lite</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Dados/dia:</span>
                    <span className="font-bold text-legal">5 GB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Conexões:</span>
                    <span className="font-bold text-legal">até 3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Área:</span>
                    <span className="font-bold text-legal">até 10 m²</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-3xl font-black text-legal-purple mb-1">R$ 150</div>
                  <div className="text-xs text-gray-500">por diária</div>
                </div>
                <Button asChild className="w-full bg-legal hover:bg-legal/90 text-white font-bold">
                  <Link to="/contato?produto=speedy5g&plano=lite">Contratar</Link>
                </Button>
              </div>
            </Card>

            {/* SPEEDY PLUS */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-50 border-2 border-gray-200 hover:border-legal-purple animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-black text-legal">Speedy Plus</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Dados/dia:</span>
                    <span className="font-bold text-legal">10 GB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Conexões:</span>
                    <span className="font-bold text-legal">4 – 10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Área:</span>
                    <span className="font-bold text-legal">até 20 m²</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-3xl font-black text-legal-purple mb-1">R$ 300</div>
                  <div className="text-xs text-gray-500">por diária</div>
                </div>
                <Button asChild className="w-full bg-legal hover:bg-legal/90 text-white font-bold">
                  <Link to="/contato?produto=speedy5g&plano=plus">Contratar</Link>
                </Button>
              </div>
            </Card>

            {/* SPEEDY PRO */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-50 border-2 border-gray-200 hover:border-legal-purple animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-black text-legal">Speedy Pro</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Dados/dia:</span>
                    <span className="font-bold text-legal">50 GB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Conexões:</span>
                    <span className="font-bold text-legal">11 – 50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Área:</span>
                    <span className="font-bold text-legal">até 50 m²</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-3xl font-black text-legal-purple mb-1">R$ 600</div>
                  <div className="text-xs text-gray-500">por diária</div>
                </div>
                <Button asChild className="w-full bg-legal hover:bg-legal/90 text-white font-bold">
                  <Link to="/contato?produto=speedy5g&plano=pro">Contratar</Link>
                </Button>
              </div>
            </Card>

            {/* SPEEDY ULTRA */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-50 border-2 border-gray-200 hover:border-legal-purple animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-black text-legal">Speedy Ultra</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Dados/dia:</span>
                    <span className="font-bold text-legal">100 GB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Conexões:</span>
                    <span className="font-bold text-legal">51 – 100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Área:</span>
                    <span className="font-bold text-legal">até 100 m²</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-3xl font-black text-legal-purple mb-1">R$ 900</div>
                  <div className="text-xs text-gray-500">por diária</div>
                </div>
                <Button asChild className="w-full bg-legal hover:bg-legal/90 text-white font-bold">
                  <Link to="/contato?produto=speedy5g&plano=ultra">Contratar</Link>
                </Button>
              </div>
            </Card>

            {/* SPEEDY LIVE */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-legal-purple to-legal-cyan border-2 border-legal-purple text-white animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">Transmissões ao vivo</Badge>
                <h3 className="text-2xl font-black">Speedy Live</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Dados/dia:</span>
                    <span className="font-bold">Ilimitado</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Conexões:</span>
                    <span className="font-bold">Sob demanda</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Área:</span>
                    <span className="font-bold">Personalizado</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <div className="text-3xl font-black mb-1">R$ 500</div>
                  <div className="text-xs opacity-90">por hora</div>
                </div>
                <Button asChild className="w-full bg-white text-legal-purple hover:bg-white/90 font-bold">
                  <Link to="/contato?produto=speedy5g&plano=live">Solicitar cotação</Link>
                </Button>
              </div>
            </Card>
          </div>

          {/* Destaque inferior */}
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base text-gray-700">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-legal-purple" />
                <span className="font-medium">+10% desconto para contratos semanais</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-legal-purple" />
                <span className="font-medium">Ativação em até 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-legal-purple" />
                <span className="font-medium">Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4 animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-legal">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-gray-700">
                Tire suas dúvidas sobre os planos da LEGAL.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4 animate-fade-up">
              <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-bold text-legal hover:text-legal-purple">
                  Qual a diferença entre os planos Speedy 5G?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Cada plano Speedy 5G é dimensionado para atender necessidades específicas de eventos e negócios. 
                  O Speedy Lite é ideal para pequenos eventos com até 3 conexões simultâneas, enquanto o Speedy Live 
                  é voltado para transmissões ao vivo com dados ilimitados. A principal diferença está na capacidade 
                  de dados por dia, número de conexões simultâneas e área de cobertura. Entre em contato para 
                  que possamos indicar o plano ideal para sua necessidade.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-bold text-legal hover:text-legal-purple">
                  Posso usar os serviços da LEGAL em eventos fora do Brasil?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Sim! O SPEEDY 5G™ está disponível em todo o território nacional com cobertura garantida. 
                  Para eventos internacionais, consulte nosso time comercial para soluções personalizadas de conectividade 
                  e tecnologia. Nossos produtos baseados em nuvem podem ser acessados de qualquer lugar do mundo, 
                  bastando ter conexão com a internet.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-bold text-legal hover:text-legal-purple">
                  Quais são as formas de pagamento aceitas?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Aceitamos pagamentos via cartão de crédito, boleto bancário, PIX e transferência bancária. 
                  Para contratos Enterprise (Matrix), oferecemos condições especiais de pagamento, 
                  incluindo faturamento mensal/trimestral e descontos para pagamento anual à vista. 
                  Entre em contato com nosso time financeiro para mais detalhes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-bold text-legal hover:text-legal-purple">
                  Como falo com o time de vendas da LEGAL?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Você pode falar com nosso time de vendas através do WhatsApp (11) 5194-2223, 
                  e-mail sos@operadora.legal ou preenchendo o formulário de contato em nossa página. 
                  Nosso time está disponível de segunda a sexta, das 8h às 18h, e responde em até 2 horas úteis. 
                  Para emergências ou suporte urgente, temos canal 24/7 disponível para clientes ativos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 - CTA FINAL */}
      <section className="py-24 bg-gradient-to-br from-[#020cbc] via-[#4d2bfb] to-[#020cbc] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-lg">
              O futuro dos negócios inteligentes começa agora.
              <br />
              <span className="text-[#03f9ff] drop-shadow-[0_0_30px_rgba(3,249,255,0.5)]">
                Conecte-se com a LEGAL.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto font-medium drop-shadow-md">
              Junte-se às empresas que já estão construindo o futuro dos negócios inteligentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#020cbc] hover:bg-[#03f9ff] hover:text-[#020cbc] font-bold text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Link to="/signup">Ativar workspace gratuito</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#020cbc] font-bold text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Link to="/contato?produto=speedy5g">Solicitar cotação Speedy 5G</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrecosPage;
