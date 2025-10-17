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
import HumanoidPricingSection from '@/components/humanoid/HumanoidPricingSection';
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
        title="Planos LEGAL – Conectividade 5G e Inteligência Artificial para Empresas"
        description="Conheça os planos da LEGAL – Internet 5G para eventos e HUMANOID™, o 1º Sistema Operacional de IA para empresas brasileiras. Compare planos e ative agora o seu workspace inteligente."
        keywords="planos LEGAL, internet 5G, HUMANOID, IA para empresas, SPEEDY 5G, preços"
        canonical="https://operadora.legal/precos"
        image="https://operadora.legal/images/precos-legal-2024.jpg"
        type="website"
      />
      
      <OfferSchema 
        name="Planos LEGAL - 5G e IA"
        description="Internet 5G ultra-rápida e Sistema Operacional de IA para empresas"
        itemOffered={{
          type: "Service",
          name: "SPEEDY 5G e HUMANOID",
          description: "Conectividade 5G e IA para eventos e negócios",
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
        <title>Planos LEGAL – Conectividade 5G e Inteligência Artificial para Empresas</title>
        <meta name="description" content="Conheça os planos da LEGAL – Internet 5G para eventos e HUMANOID™, o 1º Sistema Operacional de IA para empresas brasileiras. Compare planos e ative agora o seu workspace inteligente." />
        <meta property="og:title" content="Planos LEGAL – 5G + IA para Empresas" />
        <meta property="og:description" content="Internet 5G ultra-rápida e Sistema Operacional de IA. Planos a partir de R$ 150/dia." />
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

      {/* SEÇÃO 3 - HUMANOID™ */}
      <HumanoidPricingSection />

      {/* SEÇÃO 4 - COMPARATIVO RESUMIDO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-legal">
              Compare os planos HUMANOID™
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Encontre o plano perfeito para o tamanho e necessidades da sua empresa.
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse animate-fade-up">
              <thead>
                <tr className="bg-legal-purple text-white">
                  <th className="p-4 text-left font-black text-lg">Recurso</th>
                  <th className="p-4 text-center font-black text-lg">Origin</th>
                  <th className="p-4 text-center font-black text-lg">Fusion</th>
                  <th className="p-4 text-center font-black text-lg bg-legal">Scale</th>
                  <th className="p-4 text-center font-black text-lg">Matrix</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Energia (VOLTS/mês)</td>
                  <td className="p-4 text-center text-gray-700">Base</td>
                  <td className="p-4 text-center text-gray-700">Média</td>
                  <td className="p-4 text-center text-legal font-bold">Alta</td>
                  <td className="p-4 text-center text-gray-700">Custom</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Rollover</td>
                  <td className="p-4 text-center text-gray-700">20%</td>
                  <td className="p-4 text-center text-gray-700">20%</td>
                  <td className="p-4 text-center text-legal font-bold">20%</td>
                  <td className="p-4 text-center text-gray-700">Custom</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Nº de Sandboxes</td>
                  <td className="p-4 text-center text-gray-700">3</td>
                  <td className="p-4 text-center text-gray-700">6</td>
                  <td className="p-4 text-center text-legal font-bold">10</td>
                  <td className="p-4 text-center text-gray-700">Ilimitado</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Nível de Suporte</td>
                  <td className="p-4 text-center text-gray-700">8×5</td>
                  <td className="p-4 text-center text-gray-700">Prioridade 8×5</td>
                  <td className="p-4 text-center text-legal font-bold">Prioridade 12×5</td>
                  <td className="p-4 text-center text-gray-700">24×7 Dedicado</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">APIs / Conectores</td>
                  <td className="p-4 text-center text-gray-700">Webhooks básicos</td>
                  <td className="p-4 text-center text-gray-700">API parcial</td>
                  <td className="p-4 text-center text-legal font-bold">API completa</td>
                  <td className="p-4 text-center text-gray-700">API + VPC privada</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">SSO/SAML</td>
                  <td className="p-4 text-center text-gray-400">—</td>
                  <td className="p-4 text-center text-gray-400">—</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-legal inline" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-legal inline" /></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">White-label</td>
                  <td className="p-4 text-center text-gray-400">—</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-legal inline" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-legal inline" /></td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 text-legal inline" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 - FAQ */}
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
                  Como funcionam os VOLTS™?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  VOLTS™ são unidades de energia que alimentam seus agentes de IA no HUMANOID™. 
                  Cada execução de agente consome uma quantidade específica de VOLTS, dependendo da complexidade 
                  da tarefa. Você pode acompanhar o consumo em tempo real no dashboard e fazer top-ups sempre que necessário. 
                  Com rollover de 20%, os VOLTS não utilizados são acumulados para o próximo mês.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-bold text-legal hover:text-legal-purple">
                  Posso usar os serviços da LEGAL em eventos fora do Brasil?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Sim! O SPEEDY 5G™ está disponível em todo o território nacional com cobertura garantida. 
                  Para eventos internacionais, consulte nosso time comercial para soluções personalizadas. 
                  Já o HUMANOID™ é 100% cloud e pode ser acessado de qualquer lugar do mundo, 
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              O futuro das empresas não será humano ou artificial.
              <br />
              <span className="bg-gradient-to-r from-[#03f9ff] to-[#03f9ff] bg-clip-text text-transparent">
                Será HUMANOID.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto font-medium">
              Junte-se às empresas que já estão construindo o futuro dos negócios inteligentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#020cbc] hover:bg-[#03f9ff] hover:text-[#020cbc] font-bold text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Link to="/produtos/humanoid">Ativar workspace gratuito</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#020cbc] font-bold text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105"
              >
                <Link to="/produtos/speedy5g">Solicitar cotação Speedy 5G</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrecosPage;
