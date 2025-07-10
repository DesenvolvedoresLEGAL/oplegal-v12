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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card 
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center cursor-pointer hover:bg-white/20 transition-all"
              onClick={() => scrollToSection('locacao-fwa')}
            >
              <h3 className="text-xl font-bold text-white mb-2">Locação FWA 5G</h3>
              <p className="text-white/80 text-sm">Preços dinâmicos por evento</p>
            </Card>
            <Card 
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center cursor-pointer hover:bg-white/20 transition-all"
              onClick={() => scrollToSection('assinatura-fwa')}
            >
              <h3 className="text-xl font-bold text-white mb-2">Assinatura</h3>
              <p className="text-white/80 text-sm">Planos mensais e anuais</p>
            </Card>
            <Card 
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center cursor-pointer hover:bg-white/20 transition-all"
              onClick={() => scrollToSection('servicos-drone')}
            >
              <h3 className="text-xl font-bold text-white mb-2">Serviços Drone</h3>
              <p className="text-white/80 text-sm">Foto, vídeo, limpeza, delivery</p>
            </Card>
            <Card 
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center cursor-pointer hover:bg-white/20 transition-all"
              onClick={() => scrollToSection('solucoes-ia')}
            >
              <h3 className="text-xl font-bold text-white mb-2">Soluções IA</h3>
              <p className="text-white/80 text-sm">IA para eventos e negócios</p>
            </Card>
          </div>

          {/* Locação FWA 5G - Simulador Dinâmico */}
          <Card id="locacao-fwa" className="p-8 mb-12 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-legal-cyan" />
              <h2 className="text-2xl font-bold text-white">Locação FWA 5G - Simulador de Preços</h2>
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
            <div className="bg-legal-cyan/20 rounded-lg p-6 border border-legal-cyan/30 mb-8">
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

          {/* Assinatura FWA 5G */}
          <Card id="assinatura-fwa" className="p-8 mb-12 bg-white/10 backdrop-blur-sm border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Assinatura FWA 5G</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Plano Básico</h3>
                <div className="text-3xl font-bold text-legal-cyan mb-4">R$ 299/mês</div>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• 50GB de dados</li>
                  <li>• Velocidade até 100Mbps</li>
                  <li>• Suporte técnico</li>
                  <li>• Instalação gratuita</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6 border-2 border-legal-cyan">
                <h3 className="text-xl font-bold text-white mb-4">Plano Professional</h3>
                <div className="text-3xl font-bold text-legal-cyan mb-4">R$ 599/mês</div>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• 200GB de dados</li>
                  <li>• Velocidade até 300Mbps</li>
                  <li>• Suporte prioritário</li>
                  <li>• Backup redundante</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Plano Enterprise</h3>
                <div className="text-3xl font-bold text-legal-cyan mb-4">R$ 999/mês</div>
                <ul className="text-white/80 space-y-2 text-sm">
                  <li>• Dados ilimitados</li>
                  <li>• Velocidade até 1Gbps</li>
                  <li>• SLA 99.9%</li>
                  <li>• Gerente dedicado</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Serviços de Drone */}
          <Card id="servicos-drone" className="p-8 mb-12 bg-white/10 backdrop-blur-sm border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Serviços de Drone</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-white/20 to-white/10 rounded-lg border border-white/30 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white text-lg">Foto e Filmagem Aérea</div>
                      <div className="text-white/70 text-sm">Por evento</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white bg-legal/80 px-3 py-1 rounded-lg">
                        A partir de R$ 800
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-white/20 to-white/10 rounded-lg border border-white/30 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white text-lg">Limpeza de Fachadas</div>
                      <div className="text-white/70 text-sm">Por m²</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white bg-legal/80 px-3 py-1 rounded-lg">
                        R$ 25/m²
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-white/20 to-white/10 rounded-lg border border-white/30 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white text-lg">Delivery Express</div>
                      <div className="text-white/70 text-sm">Por entrega até 5km</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white bg-legal/80 px-3 py-1 rounded-lg">
                        R$ 150
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-white/20 to-white/10 rounded-lg border border-white/30 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white text-lg">Inspeção Técnica</div>
                      <div className="text-white/70 text-sm">Por hora</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white bg-legal/80 px-3 py-1 rounded-lg">
                        R$ 300/h
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Soluções de IA */}
          <Card id="solucoes-ia" className="p-8 mb-12 bg-white/10 backdrop-blur-sm border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Soluções de IA</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-white/20 to-white/10 rounded-lg border border-white/30 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white text-lg">FacePass</div>
                      <div className="text-white/90 text-sm mb-1">(Reconhecimento Facial)</div>
                      <div className="text-white/70 text-sm">Por evento</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white bg-legal/80 px-3 py-1 rounded-lg">
                        R$ 1.200
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-white/20 to-white/10 rounded-lg border border-white/30 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white text-lg">LinkAI</div>
                      <div className="text-white/90 text-sm mb-1">(Networking Inteligente)</div>
                      <div className="text-white/70 text-sm">Por evento</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white bg-legal/80 px-3 py-1 rounded-lg">
                        R$ 800
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-white/20 to-white/10 rounded-lg border border-white/30 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white text-lg">FitScore</div>
                      <div className="text-white/90 text-sm mb-1">(IA para Fitness)</div>
                      <div className="text-white/70 text-sm">Mensalidade</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white bg-legal/80 px-3 py-1 rounded-lg">
                        R$ 299/mês
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-white/20 to-white/10 rounded-lg border border-white/30 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white text-lg">Eventrix</div>
                      <div className="text-white/90 text-sm mb-1">(Gestão Inteligente)</div>
                      <div className="text-white/70 text-sm">Por evento</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white bg-legal/80 px-3 py-1 rounded-lg">
                        R$ 1.500
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </>
  );
};

export default PrecosPage;