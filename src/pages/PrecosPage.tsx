import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Calculator, TrendingUp, Clock, Users, AlertTriangle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PrecosPage = () => {
  const [selectedDays, setSelectedDays] = useState(15);
  const [selectedDemand, setSelectedDemand] = useState(60);
  const [selectedPlan, setSelectedPlan] = useState("SPEEDY 5G PRO");

  const baseRates = {
    "SPEEDY 5G LITE": 150,
    "SPEEDY 5G PLUS": 300,
    "SPEEDY 5G PRO": 600,
    "SPEEDY 5G ULTRA": 900,
    "SPEEDY 5G LIVE": 1500,
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

  return (
    <>
      <Helmet>
        <title>Preços | LEGAL - Internet FWA 5G para Eventos</title>
        <meta name="description" content="Conheça nossa precificação dinâmica para locação de internet FWA 5G. Valores que variam conforme antecedência e demanda para maximizar seu planejamento." />
        <meta name="keywords" content="preços internet FWA 5G, locação internet eventos, precificação dinâmica, tabela preços LEGAL" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-legal via-legal-purple to-legal-cyan pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Preços <span className="text-legal-cyan">Dinâmicos</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Nossa precificação inteligente recompensa o planejamento e otimiza disponibilidade. 
              Quanto antes você reservar, melhor o preço.
            </p>
          </div>

          {/* Calculadora Interativa */}
          <Card className="p-8 mb-12 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-legal-cyan" />
              <h2 className="text-2xl font-bold text-white">Simulador de Preços</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Seleção de Plano */}
              <div>
                <label className="block text-white font-medium mb-3">Plano Desejado</label>
                <div className="space-y-2">
                  {Object.entries(baseRates).map(([plan, price]) => (
                    <button
                      key={plan}
                      onClick={() => setSelectedPlan(plan)}
                      className={`w-full p-3 rounded-lg text-left transition-all ${
                        selectedPlan === plan 
                          ? "bg-legal-cyan text-legal font-semibold" 
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      <div className="font-medium">{plan}</div>
                      <div className="text-sm opacity-75">Base: R$ {price.toLocaleString('pt-BR')}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Antecedência */}
              <div>
                <label className="block text-white font-medium mb-3">
                  Antecedência: {selectedDays} dias
                </label>
                <input
                  type="range"
                  min="0"
                  max="60"
                  value={selectedDays}
                  onChange={(e) => setSelectedDays(Number(e.target.value))}
                  className="w-full mb-4"
                />
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-legal-cyan font-medium">
                    {advanceFactor >= 0 ? "+" : ""}{(advanceFactor * 100).toFixed(0)}%
                  </div>
                  <div className="text-white text-sm">
                    {advanceFactor < 0 ? "Desconto por planejamento" : 
                     advanceFactor === 0 ? "Preço base" : "Acréscimo por urgência"}
                  </div>
                </div>
              </div>

              {/* Demanda */}
              <div>
                <label className="block text-white font-medium mb-3">
                  Ocupação: {selectedDemand}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={selectedDemand}
                  onChange={(e) => setSelectedDemand(Number(e.target.value))}
                  className="w-full mb-4"
                />
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
                <div className="text-white text-lg mb-2">Preço Final Estimado</div>
                <div className="text-4xl font-bold text-legal-cyan mb-4">
                  R$ {finalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
                <div className="text-white/80 text-sm">
                  Valor base: R$ {baseRates[selectedPlan as keyof typeof baseRates].toLocaleString('pt-BR')} • 
                  Antecedência: {advanceFactor >= 0 ? "+" : ""}{(advanceFactor * 100).toFixed(0)}% • 
                  Demanda: +{(demandFactor * 100).toFixed(0)}%
                </div>
                <Button className="mt-4 bg-legal-cyan text-legal hover:bg-legal-cyan/90">
                  Solicitar Cotação
                </Button>
              </div>
            </div>
          </Card>

          {/* Tabela Base */}
          <Card className="p-8 mb-12 bg-white/10 backdrop-blur-sm border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Tabela Base de Preços</h2>
            <div className="grid gap-4">
              {Object.entries(baseRates).map(([plan, price]) => (
                <div key={plan} className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <div>
                    <div className="font-semibold text-white">{plan}</div>
                    <div className="text-white/70 text-sm">Ideal para diferentes portes de evento</div>
                  </div>
                  <div className="text-legal-cyan font-bold text-xl">
                    R$ {price.toLocaleString('pt-BR')}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Como Funciona */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-legal-cyan" />
                <h3 className="text-xl font-bold text-white">Fator Antecedência</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white">30+ dias antes</span>
                  <Badge className="bg-green-500 text-white">-10%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white">21-29 dias</span>
                  <Badge className="bg-blue-500 text-white">Base</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white">10-20 dias</span>
                  <Badge className="bg-yellow-500 text-white">+10%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white">4-9 dias</span>
                  <Badge className="bg-orange-500 text-white">+20%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white">0-3 dias</span>
                  <Badge className="bg-red-500 text-white">+30%</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-legal-cyan" />
                <h3 className="text-xl font-bold text-white">Fator Demanda</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white">&lt; 50% ocupação</span>
                  <Badge className="bg-blue-500 text-white">Base</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white">50-75% ocupação</span>
                  <Badge className="bg-yellow-500 text-white">+10%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white">76-90% ocupação</span>
                  <Badge className="bg-orange-500 text-white">+20%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-white">&gt; 90% ocupação</span>
                  <Badge className="bg-red-500 text-white">+30%</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Vantagens */}
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Por que Preços Dinâmicos?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-legal-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Previsibilidade</h3>
                <p className="text-white/80">
                  Planeje com antecedência e garante os melhores preços para seu evento.
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-legal-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Disponibilidade</h3>
                <p className="text-white/80">
                  Sistema inteligente que garante equipamentos mesmo em alta demanda.
                </p>
              </div>
              <div className="text-center">
                <AlertTriangle className="w-12 h-12 text-legal-cyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Transparência</h3>
                <p className="text-white/80">
                  Você sabe exatamente como o preço é calculado, sem surpresas.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PrecosPage;