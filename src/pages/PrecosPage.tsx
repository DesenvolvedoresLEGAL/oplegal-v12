// SEO Phase 2 - Universal Implementation Complete  
import React, { useState } from "react";
import SEOHead from '@/components/SEOHead';
import OfferSchema from '@/components/seo/OfferSchema';
import WebPageSchema from '@/components/seo/WebPageSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Helmet } from "react-helmet-async";
import { Calculator, TrendingUp, Clock, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AIKnowledgeProvider from '@/components/seo/AIKnowledgeProvider';
import VoiceSearchOptimization from '@/components/optimization/VoiceSearchOptimization';
import GEOAdvancedOptimization from '@/components/seo/GEOAdvancedOptimization';
import RealUserMonitoring from '@/components/seo/RealUserMonitoring';
import CoreWebVitalsMonitor from '@/components/seo/CoreWebVitalsMonitor';
import AIFeedbackSystem from '@/components/optimization/AIFeedbackSystem';
import AdvancedFeaturedSnippets from '@/components/seo/AdvancedFeaturedSnippets';
import SEOCrawlerOptimization from '@/components/optimization/SEOCrawlerOptimization';
const PrecosPage = () => {
  const [selectedDays, setSelectedDays] = useState(15);
  const [selectedDemand, setSelectedDemand] = useState(60);
  const [selectedPlan, setSelectedPlan] = useState("SPEEDY PRO");
  const [fidelidade, setFidelidade] = useState("sem");
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const baseRates = {
    "SPEEDY LITE": 150,
    "SPEEDY PLUS": 300,
    "SPEEDY PRO": 600,
    "SPEEDY ULTRA": 900,
    "SPEEDY LIVE": 500
  };
  const getAdvanceFactor = (days: number) => {
    if (days >= 30) return -0.1;
    if (days >= 21) return 0;
    if (days >= 10) return 0.1;
    if (days >= 4) return 0.2;
    return 0.3;
  };
  const getDemandFactor = (demand: number) => {
    if (demand < 50) return 0;
    if (demand <= 75) return 0.1;
    if (demand <= 90) return 0.2;
    return 0.3;
  };
  const calculatePrice = (basePlan: string, days: number, demand: number) => {
    const basePrice = baseRates[basePlan as keyof typeof baseRates];
    const advanceFactor = getAdvanceFactor(days);
    const demandFactor = getDemandFactor(demand);
    return basePrice * (1 + advanceFactor + demandFactor);
  };
  const finalPrice = calculatePrice(selectedPlan, selectedDays, selectedDemand);
  const advanceFactor = getAdvanceFactor(selectedDays);
  const demandFactor = getDemandFactor(selectedDemand);
  const offerData = [
    {
      name: "Internet FWA 5G - Plano Lite",
      description: "Internet ultra-rápida FWA 5G para pequenos eventos e escritórios",
      price: "150",
      currency: "BRL",
      availability: "Em estoque"
    },
    {
      name: "Internet FWA 5G - Plano Pro",
      description: "Internet de alta performance para eventos médios e empresas",
      price: "600",
      currency: "BRL", 
      availability: "Em estoque"
    },
    {
      name: "Drones AERO - Serviços",
      description: "Serviços completos com drones: foto, vídeo, delivery e limpeza",
      price: "800",
      currency: "BRL",
      availability: "Sob demanda"
    }
  ];

  return <>
      <SEOHead
        title="Preços e Planos | Internet 5G, Drones e IA para Eventos | LEGAL"
        description="Conheça os preços transparentes da LEGAL: locação e assinatura de internet FWA 5G, serviços com drones, soluções de IA e mais. Planos a partir de R$ 150/dia."
        keywords="preços LEGAL, internet 5G preços, drones preços, IA eventos preços, locação internet, planos conectividade"
        canonical="https://operadora.legal/precos"
        image="https://operadora.legal/images/precos-legal-2024.jpg"
        type="website"
      />
      
      <OfferSchema 
        name="Soluções Tecnológicas LEGAL"
        description="Internet FWA 5G, drones, IA e equipamentos para eventos e empresas"
        itemOffered={{
          type: "Service",
          name: "Conectividade e Tecnologia para Eventos",
          description: "Soluções completas de internet, drones e IA",
          category: "Tecnologia para Eventos"
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
        name="Preços e Planos - LEGAL"
        description="Preços transparentes para conectividade, drones e soluções de IA para eventos"
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
        <title>Preços | LEGAL - Conectividade, Drones e IA para Eventos</title>
        <meta name="description" content="Conheça os preços de todos nossos produtos e serviços: locação e assinatura de internet FWA 5G, drones, soluções de IA e muito mais." />
        <meta name="keywords" content="preços LEGAL, locação internet FWA 5G, assinatura internet, drones preços, soluções IA preços" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-legal via-legal-purple to-legal-cyan pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nossos <span className="text-legal-cyan">Preços</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transparência total nos preços de conectividade, drones, IA e todos nossos serviços. 
              Encontre a solução ideal para seu negócio.
            </p>
          </div>

          {/* Categorias de Serviços */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center cursor-pointer hover:bg-white/20 transition-all" onClick={() => scrollToSection('locacao-fwa')}>
              <h3 className="text-xl font-bold text-white mb-2">Aluguel de Internet para Eventos</h3>
              <p className="text-white/80 text-sm">Preços dinâmicos por evento</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center cursor-pointer hover:bg-white/20 transition-all" onClick={() => scrollToSection('servicos-drone')}>
              <h3 className="text-xl font-bold text-white mb-2">Serviços Drone</h3>
              <p className="text-white/80 text-sm">Foto, vídeo, limpeza, delivery</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center cursor-pointer hover:bg-white/20 transition-all" onClick={() => scrollToSection('solucoes-ia')}>
              <h3 className="text-xl font-bold text-white mb-2">Soluções IA</h3>
              <p className="text-white/80 text-sm">IA para eventos e negócios</p>
            </Card>
          </div>

          {/* Locação FWA 5G */}
          <Card id="locacao-fwa" className="p-8 mb-12 bg-white/5 backdrop-blur-sm border-white/10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white">Aluguel de Internet</h2>
            </div>
            
            <p className="text-white/90 text-lg mb-8 text-center">
              Escolha a melhor opção de internet para seu evento e garanta mais velocidade, 
              segurança e economia para o seu negócio.
            </p>

            {/* Planos de Locação */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* SPEEDY 5G LITE */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 relative overflow-hidden">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">SPEEDY LITE</h3>
                  <div className="space-y-3 mb-6">
                    <div className="text-white">
                      <div className="font-semibold">QUANTIDADE DE DADOS</div>
                      <div className="text-lg">5GB/dia</div>
                    </div>
                    <div className="text-white">
                      <div className="font-semibold">CONEXÕES SIMULTÂNEAS</div>
                      <div className="text-lg">Até 3</div>
                    </div>
                    <div className="text-white">
                      <div className="font-semibold">TAMANHO DO ESPAÇO</div>
                      <div className="text-lg">Até 10m²</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-legal-cyan mb-4">
                    R$ 150,00
                  </div>
                  <div className="text-white/80 text-sm">Valor da diária</div>
                </div>
              </Card>

              {/* SPEEDY 5G PLUS */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 relative overflow-hidden">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">SPEEDY PLUS</h3>
                  <div className="space-y-3 mb-6">
                    <div className="text-white">
                      <div className="font-semibold">QUANTIDADE DE DADOS</div>
                      <div className="text-lg">10GB/dia</div>
                    </div>
                    <div className="text-white">
                      <div className="font-semibold">CONEXÕES SIMULTÂNEAS</div>
                      <div className="text-lg">4 a 10</div>
                    </div>
                    <div className="text-white">
                      <div className="font-semibold">TAMANHO DO ESPAÇO</div>
                      <div className="text-lg">Até 20m²</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-legal-cyan mb-4">
                    R$ 300,00
                  </div>
                  <div className="text-white/80 text-sm">Valor da diária</div>
                </div>
              </Card>

              {/* SPEEDY 5G PRO */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 relative overflow-hidden">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">SPEEDY PRO</h3>
                  <div className="space-y-3 mb-6">
                    <div className="text-white">
                      <div className="font-semibold">QUANTIDADE DE DADOS</div>
                      <div className="text-lg">50GB/dia</div>
                    </div>
                    <div className="text-white">
                      <div className="font-semibold">CONEXÕES SIMULTÂNEAS</div>
                      <div className="text-lg">11 a 50</div>
                    </div>
                    <div className="text-white">
                      <div className="font-semibold">TAMANHO DO ESPAÇO</div>
                      <div className="text-lg">Até 50m²</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-legal-cyan mb-4">
                    R$ 600,00
                  </div>
                  <div className="text-white/80 text-sm">Valor da diária</div>
                </div>
              </Card>

              {/* SPEEDY 5G ULTRA */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 relative overflow-hidden">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">SPEEDY ULTRA</h3>
                  <div className="space-y-3 mb-6">
                    <div className="text-white">
                      <div className="font-semibold">QUANTIDADE DE DADOS</div>
                      <div className="text-lg">100GB/dia</div>
                    </div>
                    <div className="text-white">
                      <div className="font-semibold">CONEXÕES SIMULTÂNEAS</div>
                      <div className="text-lg">51 a 100</div>
                    </div>
                    <div className="text-white">
                      <div className="font-semibold">TAMANHO DO ESPAÇO</div>
                      <div className="text-lg">Até 100m²</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-legal-cyan mb-4">
                    R$ 900,00
                  </div>
                  <div className="text-white/80 text-sm">Valor da diária</div>
                </div>
              </Card>
            </div>

            {/* SPEEDY 5G LIVE */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 relative overflow-hidden">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">SPEEDY LIVE</h3>
                <div className="space-y-3 mb-6">
                  <div className="text-white">
                    <div className="font-semibold">QUANTIDADE DE DADOS</div>
                    <div className="text-lg">ILIMITADA</div>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">PARA TRANSMISSÕES</div>
                    <div className="text-lg">AO VIVO</div>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">COBERTURA</div>
                    <div className="text-lg">Personalizada</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-legal-cyan mb-4">
                  R$ 500,00
                </div>
                <div className="text-white/80 text-sm">Valor por hora</div>
              </div>
            </Card>

            {/* Simulador de Preços */}
            <div className="bg-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Simulador de Preços</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Antecedência */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    Antecedência: {selectedDays} dias
                  </label>
                  <input type="range" min="0" max="60" value={selectedDays} onChange={e => setSelectedDays(Number(e.target.value))} className="w-full mb-4" />
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-legal-cyan font-medium">
                      {advanceFactor >= 0 ? "+" : ""}{(advanceFactor * 100).toFixed(0)}%
                    </div>
                    <div className="text-white text-sm">
                      {advanceFactor < 0 ? "Desconto por planejamento" : advanceFactor === 0 ? "Preço base" : "Acréscimo por urgência"}
                    </div>
                  </div>
                </div>

                {/* Demanda */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    Ocupação: {selectedDemand}%
                  </label>
                  <input type="range" min="0" max="100" value={selectedDemand} onChange={e => setSelectedDemand(Number(e.target.value))} className="w-full mb-4" />
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-legal-cyan font-medium">
                      +{(demandFactor * 100).toFixed(0)}%
                    </div>
                    <div className="text-white text-sm">
                      {demandFactor === 0 ? "Disponibilidade alta" : "Acréscimo por demanda"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resultado */}
              <div className="bg-legal-cyan/20 rounded-lg p-6 border border-legal-cyan/30">
                <div className="text-center">
                  <div className="text-white text-lg mb-2">Preço Final Estimado (Plano Selecionado)</div>
                  <div className="text-4xl font-bold text-legal-cyan mb-4">
                    R$ {finalPrice.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2
                  })}
                  </div>
                  <div className="text-white/80 text-sm">
                    Baseado no {selectedPlan} • Valor base: R$ {baseRates[selectedPlan as keyof typeof baseRates].toLocaleString('pt-BR')} • 
                    Antecedência: {advanceFactor >= 0 ? "+" : ""}{(advanceFactor * 100).toFixed(0)}% • 
                    Demanda: +{(demandFactor * 100).toFixed(0)}%
                  </div>
                  <Button className="mt-4 bg-legal-cyan text-legal hover:bg-legal-cyan/90">
                    Solicitar Cotação
                  </Button>
                </div>
              </div>
            </div>

            {/* Como Funciona */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 bg-white/10 backdrop-blur-sm border-white/20 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-legal-cyan" />
                  <h3 className="text-lg font-bold text-white">Fator Antecedência</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="text-white text-sm">30+ dias antes</span>
                    <Badge className="bg-green-500 text-white text-xs">-10%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="text-white text-sm">21-29 dias</span>
                    <Badge className="bg-blue-500 text-white text-xs">Base</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="text-white text-sm">10-20 dias</span>
                    <Badge className="bg-yellow-500 text-white text-xs">+10%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="text-white text-sm">4-9 dias</span>
                    <Badge className="bg-orange-500 text-white text-xs">+20%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="text-white text-sm">0-3 dias</span>
                    <Badge className="bg-red-500 text-white text-xs">+30%</Badge>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-sm border-white/20 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-legal-cyan" />
                  <h3 className="text-lg font-bold text-white">Fator Demanda</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="text-white text-sm">&lt; 50% ocupação</span>
                    <Badge className="bg-blue-500 text-white text-xs">Base</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="text-white text-sm">50-75% ocupação</span>
                    <Badge className="bg-yellow-500 text-white text-xs">+10%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="text-white text-sm">76-90% ocupação</span>
                    <Badge className="bg-orange-500 text-white text-xs">+20%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span className="text-white text-sm">&gt; 90% ocupação</span>
                    <Badge className="bg-red-500 text-white text-xs">+30%</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Por que Preços Dinâmicos */}
            <div className="p-6 bg-white/10 backdrop-blur-sm border-white/20 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Por que Preços Dinâmicos?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-legal-cyan mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Previsibilidade</h4>
                  <p className="text-white/80 text-sm">
                    Planeje com antecedência e garanta os melhores preços para seu evento.
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-legal-cyan mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Disponibilidade</h4>
                  <p className="text-white/80 text-sm">
                    Sistema inteligente que garante equipamentos mesmo em alta demanda.
                  </p>
                </div>
                <div className="text-center">
                  <AlertTriangle className="w-8 h-8 text-legal-cyan mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Transparência</h4>
                  <p className="text-white/80 text-sm">
                    Você sabe exatamente como o preço é calculado, sem surpresas.
                  </p>
                </div>
              </div>
            </div>
          </Card>


          {/* Serviços de Drone */}
          <Card id="servicos-drone" className="p-8 mb-12 bg-gray-900/95 backdrop-blur-sm border-gray-700">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">Serviços de Drone</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="group p-6 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">Foto e Filmagem Aérea</h3>
                      <p className="text-gray-400 text-sm">Por hora</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-legal-cyan">A partir de R$ 800</div>
                    </div>
                  </div>
                </div>
                <div className="group p-6 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">Limpeza de Fachadas</h3>
                      <p className="text-gray-400 text-sm">Por m²</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-legal-cyan">R$ 25/m²</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="group p-6 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">Delivery Express</h3>
                      <p className="text-gray-300 text-sm mb-1">Projetos sob medida</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-xl font-bold text-legal-cyan">Consultar</div>
                    </div>
                  </div>
                </div>
                <div className="group p-6 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">Inspeção Técnica</h3>
                      <p className="text-gray-400 text-sm">Por hora</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-legal-cyan">R$ 300/h</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Soluções de IA */}
          <Card id="solucoes-ia" className="p-8 mb-12 bg-gray-900/95 backdrop-blur-sm border-gray-700">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">Soluções de IA</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="group p-6 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">MAGICPASS</h3>
                      <p className="text-gray-300 text-sm mb-1">Reconhecimento Facial</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-xl font-bold text-legal-purple">Sob Consulta</div>
                    </div>
                  </div>
                </div>
                <div className="group p-6 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">LinkAI</h3>
                      <p className="text-gray-300 text-sm mb-1">Networking Inteligente</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-xl font-bold text-legal-purple">Sob Consulta</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="group p-6 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">FitScore</h3>
                      <p className="text-gray-300 text-sm mb-1">Co-Piloto de Contratação e People Analytics</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-xl font-bold text-legal-purple">A partir de R$ 50/mês</div>
                    </div>
                  </div>
                </div>
                <div className="group p-6 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">Eventrix</h3>
                      <p className="text-gray-300 text-sm mb-1">Plataforma de Gestão de Eventos</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-xl font-bold text-legal-purple">A partir de R$ 1.990/mês</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </>;
};
export default PrecosPage;