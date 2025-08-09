import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  Bolt, 
  Signal, 
  Database, 
  Cpu, 
  ShoppingCart, 
  BarChart3, 
  Shield, 
  SlidersHorizontal, 
  Zap, 
  Clock3, 
  Link as LinkIcon, 
  Sparkles, 
  HelpCircle, 
  ArrowRight,
  Building,
  Wifi,
  Target,
  Eye,
  Settings,
  TrendingUp
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import ProductSchema from '@/components/seo/ProductSchema';
import WebPageSchema from '@/components/seo/WebPageSchema';

const TagPulsePage = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [simulationInputs, setSimulationInputs] = useState({
    skus: 1000,
    hours: 8,
    margin: 5
  });
  const [roiInputs, setRoiInputs] = useState({
    stores: 3,
    skusPerStore: 2000,
    activeLabels: 5000,
    hourlyWage: 25,
    monthlyHours: 40,
    priceLoss: 2,
    marginUplift: 4,
    monthlyCost: 15000
  });

  // Tracking function
  const trackCTA = (cta: string) => {
    console.log('CTA clicked:', cta);
    // Future: analytics.track('cta_click', { cta, page: 'tagpulse' });
  };

  // Simulation calculation
  const monthlyGain = (simulationInputs.skus * simulationInputs.hours * simulationInputs.margin * 30) / 100;

  // ROI calculations
  const operationalSavings = roiInputs.monthlyHours * roiInputs.hourlyWage;
  const marginGain = (roiInputs.skusPerStore * roiInputs.stores * roiInputs.marginUplift * 50) / 100;
  const priceCorrection = (roiInputs.activeLabels * roiInputs.priceLoss * 15) / 100;
  const totalBenefit = (operationalSavings + marginGain + priceCorrection) * 12;
  const payback = roiInputs.monthlyCost > 0 ? Math.ceil((roiInputs.monthlyCost * 12) / totalBenefit * 12) : 0;

  const plans = {
    start: { monthly: 3990, annual: 3490 },
    scale: { monthly: 8990, annual: 7990 }
  };

  const valueProps = [
    {
      icon: <Bolt className="w-6 h-6" />,
      title: "Troca Instantânea",
      description: "Atualize milhares de SKUs em segundos"
    },
    {
      icon: <SlidersHorizontal className="w-6 h-6" />,
      title: "Regras Sob Medida",
      description: "Categoria, estoque, demanda, hora, clima, margem-alvo"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Campanhas Relâmpago",
      description: "Por loja/região/cluster, janelas de tempo"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Salvaguardas Éticas",
      description: "Limites/horários/essenciais"
    },
    {
      icon: <LinkIcon className="w-6 h-6" />,
      title: "Integração Simples",
      description: "ERP/POS, API, Shadow A/B antes do go-live"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Insights Acionáveis",
      description: "Uplift de margem, giro, elasticidade"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Conecte seus dados",
      description: "ERP/POS/planilha"
    },
    {
      number: "2", 
      title: "Modele as regras",
      description: "Categoria, loja, margem, eventos/clima"
    },
    {
      number: "3",
      title: "Teste sem risco",
      description: "Shadow Mode/A-B sem alterar gôndola"
    },
    {
      number: "4",
      title: "Ative nas etiquetas",
      description: "Envio com auditoria/log por SKU"
    }
  ];

  const integrations = [
    {
      title: "ERPs & Backoffice",
      description: "Linx, TOTVS, Bling, Omie, SAP, Oracle, API/CSV",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "POS/PDV",
      description: "Espelho/consistência gôndola-PDV",
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      title: "Infra & IoT",
      description: "Gateways, Wi‑Fi/5G Privativo LEGAL, etiquetas e‑ink líderes",
      icon: <Wifi className="w-8 h-8" />
    }
  ];

  const safeguards = [
    {
      title: "Limites de Variação",
      description: "Teto/assoalho por SKU/categoria/tempo",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Janela Sensível",
      description: "Bloquear aumentos em feriados/itens essenciais",
      icon: <Clock3 className="w-6 h-6" />
    },
    {
      title: "Motivadores Claros",
      description: "Demanda, estoque, validade, clima, concorrência",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Auditoria & Logs",
      description: "Trilha por SKU: quem/por que/quando",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Comunicação ao Cliente",
      description: "Selo de promoção/queda, preço anterior quando aplicável",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "LGPD & ANPD",
      description: "Dados minimizados, criptografia, sem dados pessoais em regras",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const faqs = [
    {
      question: "Quais etiquetas são compatíveis?",
      answer: "E‑ink 2.1\" a 13.3\", mix por iluminação/distância de visualização."
    },
    {
      question: "Preciso trocar meu ERP?",
      answer: "Não, trabalhamos com conectores/API/CSV para integração com seu sistema atual."
    },
    {
      question: "E se a rede cair?",
      answer: "Mantém último preço válido. Com 5G Privativo LEGAL garantimos alta disponibilidade."
    },
    {
      question: "Como evitar abuso de preços?",
      answer: "Salvaguardas automáticas e bloqueios por categoria, horário e variação máxima."
    },
    {
      question: "Qual o prazo de implantação?",
      answer: "Piloto em 2–4 semanas pós kick-off. Varia conforme integrações e número de lojas."
    }
  ];

  return (
    <>
      <SEOHead
        title="TagPulse™ | Etiquetas Digitais com Precificação Dinâmica — LEGAL"
        description="Plataforma de etiquetas digitais com precificação dinâmica, integrações ERP/POS e salvaguardas éticas. Instalação ágil e controle total das regras."
        canonical="https://operadora.legal/solucoes/tagpulse"
        image="https://operadora.legal/images/tagpulse-social.jpg"
        type="product"
      />
      
      <ProductSchema
        productName="TagPulse™"
        description="Etiquetas digitais com precificação dinâmica para varejo"
        category="Software de Varejo"
        features={["Precificação dinâmica", "Integração ERP/POS", "Salvaguardas éticas", "API completa"]}
        url="https://operadora.legal/solucoes/tagpulse"
        applicationCategory="BusinessApplication"
        pricing={{
          type: "subscription",
          currency: "BRL",
          price: "3490-7990"
        }}
      />
      
      <WebPageSchema
        name="TagPulse™ - Etiquetas Digitais com Precificação Dinâmica"
        description="Acelere a troca de preços, elimine retrabalho e aumente margem com inteligência em tempo real"
        url="https://operadora.legal/solucoes/tagpulse"
        breadcrumb={[
          { name: "Home", url: "https://operadora.legal" },
          { name: "Produtos", url: "https://operadora.legal/produtos" },
          { name: "TagPulse™", url: "https://operadora.legal/solucoes/tagpulse" }
        ]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6">
                  TagPulse™ — Etiquetas Digitais com Precificação Dinâmica para Varejo
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  Acelere a troca de preços, elimine retrabalho e aumente margem com inteligência em tempo real — sem burocracia.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90"
                    data-cta="demo"
                    onClick={() => trackCTA('demo')}
                  >
                    <Link to="/demo">Agendar Demo ao Vivo</Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    data-cta="proposta"
                    onClick={() => trackCTA('proposta')}
                  >
                    <Link to="/proposta">Receber Proposta</Link>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="lg"
                    onClick={() => {
                      document.getElementById('roi-section')?.scrollIntoView({ behavior: 'smooth' });
                      trackCTA('roi');
                    }}
                    data-cta="roi"
                  >
                    Calcular ROI
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {['Instalação rápida', 'Integração ERP/POS', 'Salvaguardas éticas'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Simulação Rápida */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Simulação Rápida</CardTitle>
                    <CardDescription>Calcule o potencial de ganho mensal</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="skus">SKUs com etiqueta</Label>
                      <Input
                        id="skus"
                        type="number"
                        value={simulationInputs.skus}
                        onChange={(e) => setSimulationInputs({...simulationInputs, skus: Number(e.target.value)})}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="hours">Horas/dia de estratégia</Label>
                      <Input
                        id="hours"
                        type="number"
                        value={simulationInputs.hours}
                        onChange={(e) => setSimulationInputs({...simulationInputs, hours: Number(e.target.value)})}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="margin">Ganho de margem (%)</Label>
                      <Input
                        id="margin"
                        type="number"
                        value={simulationInputs.margin}
                        onChange={(e) => setSimulationInputs({...simulationInputs, margin: Number(e.target.value)})}
                      />
                    </div>
                    
                    <div className="bg-accent/10 p-4 rounded-xl">
                      <p className="text-sm text-muted-foreground">Potencial de ganho mensal estimado</p>
                      <p className="text-2xl font-bold text-primary">
                        R$ {monthlyGain.toLocaleString('pt-BR')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trusted Bar */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-6">
                <Signal className="w-6 h-6 text-muted-foreground" />
                <Database className="w-6 h-6 text-muted-foreground" />
                <Cpu className="w-6 h-6 text-muted-foreground" />
                <ShoppingCart className="w-6 h-6 text-muted-foreground" />
                <BarChart3 className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">
                Confiado por operações que valorizam velocidade e controle
              </p>
            </div>
          </div>
        </section>

        {/* Grid de Valor */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Por que muda o jogo
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transforme sua operação de precificação com tecnologia inteligente
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-primary mb-4">{prop.icon}</div>
                      <h3 className="font-bold mb-2">{prop.title}</h3>
                      <p className="text-muted-foreground">{prop.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Como Funciona
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Implementação simples em 4 etapas
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                        {step.number}
                      </div>
                      <h3 className="font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculadora de ROI */}
        <section id="roi-section" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Calculadora de ROI
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Calcule o retorno do investimento com seus dados
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Seus Dados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="stores">Número de lojas</Label>
                      <Input
                        id="stores"
                        type="number"
                        value={roiInputs.stores}
                        onChange={(e) => setRoiInputs({...roiInputs, stores: Number(e.target.value)})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="skusPerStore">SKUs por loja</Label>
                      <Input
                        id="skusPerStore"
                        type="number"
                        value={roiInputs.skusPerStore}
                        onChange={(e) => setRoiInputs({...roiInputs, skusPerStore: Number(e.target.value)})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="activeLabels">Etiquetas ativas</Label>
                      <Input
                        id="activeLabels"
                        type="number"
                        value={roiInputs.activeLabels}
                        onChange={(e) => setRoiInputs({...roiInputs, activeLabels: Number(e.target.value)})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="hourlyWage">Salário/hora (R$)</Label>
                      <Input
                        id="hourlyWage"
                        type="number"
                        value={roiInputs.hourlyWage}
                        onChange={(e) => setRoiInputs({...roiInputs, hourlyWage: Number(e.target.value)})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="monthlyHours">Horas troca/mês</Label>
                      <Input
                        id="monthlyHours"
                        type="number"
                        value={roiInputs.monthlyHours}
                        onChange={(e) => setRoiInputs({...roiInputs, monthlyHours: Number(e.target.value)})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="monthlyCost">Custo mensal (R$)</Label>
                      <Input
                        id="monthlyCost"
                        type="number"
                        value={roiInputs.monthlyCost}
                        onChange={(e) => setRoiInputs({...roiInputs, monthlyCost: Number(e.target.value)})}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Resultados Projetados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Economia operacional/mês:</span>
                      <span className="font-bold">R$ {operationalSavings.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Ganho de margem/mês:</span>
                      <span className="font-bold">R$ {marginGain.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Correção de preço/mês:</span>
                      <span className="font-bold">R$ {priceCorrection.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Benefício total anual:</span>
                        <span className="font-bold text-primary text-lg">R$ {totalBenefit.toLocaleString('pt-BR')}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-semibold">Payback estimado:</span>
                        <span className="font-bold text-accent">{payback} meses</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    *Estimativa simplificada — validamos com dados reais no onboarding.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="outline" className="flex-1">
                      <Link to="/contato">Validar com meus dados</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link to="/proposta">Solicitar proposta</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Planos & Preços */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Planos & Preços
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Escolha o plano ideal para sua operação
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <span className={!isAnnual ? "font-semibold" : "text-muted-foreground"}>Mensal</span>
                <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
                <span className={isAnnual ? "font-semibold" : "text-muted-foreground"}>Anual</span>
                {isAnnual && <Badge variant="secondary">12% desconto</Badge>}
              </div>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Start Plan */}
              <Card className="relative">
                <CardHeader>
                  <CardTitle>Start</CardTitle>
                  <CardDescription>Ideal para primeiros passos</CardDescription>
                  <div className="text-3xl font-bold">
                    R$ {(isAnnual ? plans.start.annual : plans.start.monthly).toLocaleString('pt-BR')}
                    <span className="text-sm font-normal text-muted-foreground">/mês</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Até 2 lojas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Até 5.000 etiquetas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Regras básicas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Relatórios essenciais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Suporte comercial</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/proposta">Começar</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Scale Plan */}
              <Card className="relative border-primary shadow-lg">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary">Mais Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle>Scale</CardTitle>
                  <CardDescription>Para operações em crescimento</CardDescription>
                  <div className="text-3xl font-bold">
                    R$ {(isAnnual ? plans.scale.annual : plans.scale.monthly).toLocaleString('pt-BR')}
                    <span className="text-sm font-normal text-muted-foreground">/mês</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Até 6 lojas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Até 20.000 etiquetas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Regras avançadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Clima/estoque</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Shadow A/B</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">SLA 8x5 + AM</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link to="/proposta">Escolher Scale</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Para grandes operações</CardDescription>
                  <div className="text-3xl font-bold">
                    Custom
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Multilojas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Etiquetas ilimitadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">API & SSO</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Playbooks sazonais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">SLA 24/7 e on‑site</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/contato">Falar com Vendas</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-8">
              *Valores indicativos. Variam conforme volume, gateways, instalação e SLA.
            </p>
          </div>
        </section>

        {/* Integrações */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Integrações & Infraestrutura
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conecte com seus sistemas existentes
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <div className="text-primary mb-4 flex justify-center">{integration.icon}</div>
                      <h3 className="font-bold mb-2">{integration.title}</h3>
                      <p className="text-muted-foreground text-sm">{integration.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Política de Precificação Responsável */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Política de Precificação Responsável
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ética e transparência em cada decisão de preço
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safeguards.map((safeguard, index) => (
                <motion.div
                  key={safeguard.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-primary">{safeguard.icon}</div>
                        <h3 className="font-bold">{safeguard.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{safeguard.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tire suas dúvidas sobre o TagPulse™
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <HelpCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold mb-2">{faq.question}</h3>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Vamos fazer um piloto pago em uma loja?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Mostramos resultado em semanas e escalamos com governança.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  variant="secondary"
                  data-cta="demo"
                  onClick={() => trackCTA('demo')}
                >
                  <Link to="/demo">
                    Agendar Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  data-cta="proposta"
                  onClick={() => trackCTA('proposta')}
                >
                  <Link to="/proposta">Receber Proposta</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer links */}
        <footer className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
              <button 
                onClick={() => document.getElementById('safeguards')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Precificação
              </button>
              <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                Privacidade
              </Link>
              <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </div>
            <p className="text-center text-muted-foreground mt-6">
              © 2025 LEGAL. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TagPulsePage;