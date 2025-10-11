import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Zap, Users, Link2, Palette, Webhook, TestTube, MessageCircle, Shield, BarChart, Globe, Crown, Database } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HumanoidPricingSection = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-legal">
            Planos do Humanoid
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Cresça no seu ritmo com energia por VOLTS™ — sem limite de agentes.
          </p>
          <p className="text-sm md:text-base text-legal-purple bg-legal-purple/10 backdrop-blur-sm px-6 py-3 rounded-lg inline-block border border-legal-purple/20">
            Todos os planos incluem membros ilimitados (RBAC), conectores de catálogo, analytics e alertas 70/90/100%.
          </p>
        </div>

        {/* Grid de Cards */}
        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Card 1 - ORIGIN */}
            <div className="bg-white border border-gray-200 hover:border-legal-purple/50 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-lg animate-fade-up">
              <div className="space-y-6">
                <div className="space-y-3">
                  <Badge className="bg-legal-purple/20 text-legal-purple border-legal-purple/30">
                    Microempreendedores
                  </Badge>
                  <h3 className="text-2xl font-black text-legal">Origin</h3>
                  <p className="text-gray-600 text-sm">MEI/ME</p>
                  <p className="text-gray-900 font-bold">Energia inicial para começar agora</p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Zap className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>
                      <Tooltip>
                        <TooltipTrigger className="underline decoration-dotted">VOLTS/mês</TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Créditos de energia para execução de agentes e automações</p>
                        </TooltipContent>
                      </Tooltip>
                      {' '}+ rollover 20%
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Zap className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Torneira diária para testes</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Users className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>
                      Membros ilimitados com{' '}
                      <Tooltip>
                        <TooltipTrigger className="underline decoration-dotted">RBAC</TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Role-Based Access Control - controle de acesso por função</p>
                        </TooltipContent>
                      </Tooltip>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Link2 className="w-5 h-5 text-legal shrink-0 mt-0.5" />
                    <span>Conectores de catálogo ilimitados</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Palette className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Studio no/low-code</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Webhook className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Webhooks de saída básicos</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <TestTube className="w-5 h-5 text-legal shrink-0 mt-0.5" />
                    <span>Sandboxes: 3 | Logs: 180 dias</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <MessageCircle className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Suporte 8×5</span>
                  </li>
                </ul>

                <p className="text-xs text-gray-500 italic">
                  Top-ups instantâneos (packs S/M)
                </p>

                <Button 
                  asChild 
                  className="w-full bg-legal-purple hover:bg-legal-purple/90 text-white font-bold"
                >
                  <Link to="/contato?produto=humanoid&plano=origin">Começar agora</Link>
                </Button>
              </div>
            </div>

            {/* Card 2 - FUSION */}
            <div className="bg-white border border-gray-200 hover:border-legal-purple/50 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-lg animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="space-y-6">
                <div className="space-y-3">
                  <Badge className="bg-legal-purple/20 text-legal-purple border-legal-purple/30">
                    Pequenas Empresas
                  </Badge>
                  <h3 className="text-2xl font-black text-legal">Fusion</h3>
                  <p className="text-gray-600 text-sm">Pequeno Porte</p>
                  <p className="text-gray-900 font-bold">Energia para integrar e ganhar produtividade</p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Zap className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>VOLTS/mês + rollover 20%</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Zap className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Torneira diária média</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Link2 className="w-5 h-5 text-legal shrink-0 mt-0.5" />
                    <span>Conectores ilimitados + endpoints dedicados</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Palette className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Projetos privados + remover marca</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Palette className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Studio com publicação 1-clique (Prod)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <TestTube className="w-5 h-5 text-legal shrink-0 mt-0.5" />
                    <span>Sandboxes: 6 | Concorrência: 25 simultâneas</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Database className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Logs: 1 ano | Export CSV/JSON</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <MessageCircle className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Suporte Prioridade 8×5</span>
                  </li>
                </ul>

                <p className="text-xs text-gray-500 italic">
                  Top-ups (packs M/L) | Auto-recarga opcional
                </p>

                <Button 
                  asChild 
                  className="w-full bg-legal hover:bg-legal/90 text-white font-bold"
                >
                  <Link to="/contato?produto=humanoid&plano=fusion">Falar com Vendas</Link>
                </Button>
              </div>
            </div>

            {/* Card 3 - SCALE (Popular) */}
            <div className="bg-white border-2 border-legal rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-up relative" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-legal to-legal-purple text-white border-0 px-4 py-1 animate-pulse">
                  Popular
                </Badge>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <Badge className="bg-gradient-to-r from-legal to-legal-purple text-white border-0">
                    Médias Empresas
                  </Badge>
                  <h3 className="text-2xl font-black text-legal">Scale</h3>
                  <p className="text-gray-600 text-sm">Médio Porte</p>
                  <p className="text-gray-900 font-bold">Energia para escalar com controle</p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Zap className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Auto-recarga contratual + rollover 20%</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Shield className="w-5 h-5 text-legal shrink-0 mt-0.5" />
                    <span>
                      <Tooltip>
                        <TooltipTrigger className="underline decoration-dotted">API</TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">API completa do Humanoid para integrações customizadas</p>
                        </TooltipContent>
                      </Tooltip>
                      {' '}Humanoid completa + Webhooks
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Shield className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>
                      <Tooltip>
                        <TooltipTrigger className="underline decoration-dotted">SSO/SAML</TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Single Sign-On com Okta, Active Directory ou Azure AD</p>
                        </TooltipContent>
                      </Tooltip>
                      {' '}(Okta/AD/Azure)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <BarChart className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>
                      <Tooltip>
                        <TooltipTrigger className="underline decoration-dotted">BI</TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Business Intelligence - dashboards e relatórios avançados</p>
                        </TooltipContent>
                      </Tooltip>
                      {' '}avançado + métricas em tempo real
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Globe className="w-5 h-5 text-legal shrink-0 mt-0.5" />
                    <span>Domínio custom + remover marca</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <TestTube className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Sandboxes: 10 | Concorrência: 100</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Database className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>
                      Logs: 1 ano | Export{' '}
                      <Tooltip>
                        <TooltipTrigger className="underline decoration-dotted">SIEM</TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Security Information and Event Management - integração com Splunk/Datadog</p>
                        </TooltipContent>
                      </Tooltip>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <MessageCircle className="w-5 h-5 text-legal shrink-0 mt-0.5" />
                    <span>Suporte Prioridade 12×5</span>
                  </li>
                </ul>

                <p className="text-xs text-gray-500 italic">
                  Packs de top-up L/XL
                </p>

                <Button 
                  asChild 
                  className="w-full bg-legal hover:bg-legal/90 text-white font-bold"
                >
                  <Link to="/contato?produto=humanoid&plano=scale">Falar com Vendas</Link>
                </Button>
              </div>
            </div>

            {/* Card 4 - MATRIX */}
            <div className="bg-white border border-gray-200 hover:border-legal-purple/50 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-lg animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-gradient-to-r from-legal-purple to-legal-purple text-white border-0">
                      Enterprise
                    </Badge>
                    <Crown className="w-5 h-5 text-legal-purple" />
                  </div>
                  <h3 className="text-2xl font-black text-legal">Matrix</h3>
                  <p className="text-gray-600 text-sm">Corporações</p>
                  <p className="text-gray-900 font-bold">Sob contrato — energia corporativa</p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Crown className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Contrato Enterprise (VOLTS, SLO/SLA custom)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Shield className="w-5 h-5 text-legal shrink-0 mt-0.5" />
                    <span>API + rede privada (VPC Peering/PrivateLink)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Shield className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>BYOK/HSM, compliance internacional</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Globe className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Multi-região / on-prem / edge</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Palette className="w-5 h-5 text-legal shrink-0 mt-0.5" />
                    <span>White-label completo</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <BarChart className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Data feeds corporativos + BI avançado</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Database className="w-5 h-5 text-legal-purple shrink-0 mt-0.5" />
                    <span>Logs: 1-3 anos (contrato)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 text-sm">
                    <Users className="w-5 h-5 text-legal shrink-0 mt-0.5" />
                    <span>SLA custom + Squad dedicado</span>
                  </li>
                </ul>

                <p className="text-xs text-gray-500 italic">
                  Top-ups e rollover conforme SOW
                </p>

                <Button 
                  asChild 
                  className="w-full bg-legal-purple hover:bg-legal-purple/90 text-white font-bold"
                >
                  <Link to="/contato?produto=humanoid&plano=matrix">Fale com time Enterprise</Link>
                </Button>
              </div>
            </div>
          </div>
        </TooltipProvider>

        {/* Footer */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-gray-700 max-w-4xl mx-auto">
            Sem limite de agentes. O consumo é calculado por VOLTS™ (energia de IA). Ative top-ups a qualquer momento. Veja a política de rollover (20%) e auto-recarga nos termos do plano.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HumanoidPricingSection;