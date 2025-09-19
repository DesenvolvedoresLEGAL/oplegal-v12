import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Wifi, Zap, Calendar, User, Target, Bot, Heart, Brain, Camera, MessageCircle, Plane, Settings, Users, Gauge, Globe, BookOpen, Star, Newspaper, Activity, HelpCircle, FileText, Cpu, Wrench, TrendingUp, Search, Handshake, Cloud, LogOut, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, signOut, profile } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/busca?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="/lovable-uploads/0de2869f-f080-4ad5-9ba8-575aea2f9695.png" 
            alt="LEGAL" 
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center justify-center flex-grow">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="gap-0">
              {/* Produtos */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-legal hover:text-legal-purple px-2">Produtos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[1100px] xl:w-[1200px] p-6 bg-popover text-popover-foreground border border-border shadow-lg rounded-2xl backdrop-blur-md supports-[backdrop-filter]:bg-popover/90">
                    <div className="grid grid-cols-4 gap-8">
                      {/* Conectividade & WiFi */}
                      <div>
                        <h3 className="text-sm font-semibold text-legal mb-3 uppercase tracking-wide">Conectividade & WiFi & Gadgets</h3>
                        <div className="space-y-3">
                          <Link to="/produtos/blue6" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <Wifi className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">Blue6</div>
                              <p className="text-xs text-muted-foreground">Hotspot com Gestão WiFi</p>
                            </div>
                          </Link>
                          <Link to="/produtos/speedy5g" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <Zap className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">Speedy 5G</div>
                              <p className="text-xs text-muted-foreground">Internet Plug and Play</p>
                            </div>
                          </Link>
                          <Link to="/produtos/plaud" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <MessageCircle className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">Plaud</div>
                              <p className="text-xs text-muted-foreground">Gravação de Voz com IA</p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Eventos & Gestão */}
                      <div>
                        <h3 className="text-sm font-semibold text-legal mb-3 uppercase tracking-wide">Eventos & Gestão</h3>
                        <div className="space-y-3">
                          <Link to="/produtos/eventrix" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <Calendar className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">Eventrix</div>
                              <p className="text-xs text-muted-foreground">Plataforma de Gestão de Eventos</p>
                            </div>
                          </Link>
                          <Link to="/produtos/magicpass" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <User className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">MagicPass</div>
                              <p className="text-xs text-muted-foreground">Credenciamento e Acesso Rápido</p>
                            </div>
                          </Link>
                          <Link to="/produtos/linkai" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <Handshake className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">LinkAI</div>
                              <p className="text-xs text-muted-foreground">Matchmaking Inteligente</p>
                            </div>
                          </Link>
                          <Link to="/produtos/ping" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <MessageCircle className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">Ping</div>
                              <p className="text-xs text-muted-foreground">Atendimento Omnichannel</p>
                            </div>
                          </Link>
                          <Link to="/produtos/fitscore" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <Target className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">FitScore</div>
                              <p className="text-xs text-muted-foreground">Contratação e People Analytics</p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* IA & Inovação */}
                      <div>
                        <h3 className="text-sm font-semibold text-legal mb-3 uppercase tracking-wide">IA & Inovação</h3>
                        <div className="space-y-3">
                          <Link to="/produtos/galaxia" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <Cloud className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">GalaxIA</div>
                              <p className="text-xs text-muted-foreground">Infraestrutura de IA Personalizada</p>
                            </div>
                          </Link>
                          <Link to="/produtos/humanoid" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <Bot className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">Humanoid</div>
                              <p className="text-xs text-muted-foreground">Robô para Geração de Negócios</p>
                            </div>
                          </Link>
                          <a href="https://vitai.operadora.legal" target="_blank" rel="noopener noreferrer" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <Heart className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div className="flex items-center">
                              <div>
                                <div className="text-sm font-medium text-foreground group-hover:text-legal">VitAI</div>
                                <p className="text-xs text-muted-foreground">Hub de Gestão da Saúde</p>
                              </div>
                              <ExternalLink className="w-3 h-3 ml-2 text-muted-foreground" />
                            </div>
                          </a>
                          <Link to="/produtos/neurafit" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <Brain className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">NeuraFit</div>
                              <p className="text-xs text-muted-foreground">Musculação para o Cérebro</p>
                            </div>
                          </Link>
                          <Link to="/solucoes/tagpulse" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <TrendingUp className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">TagPulse™</div>
                              <p className="text-xs text-muted-foreground">Etiquetas Digitais Dinâmicas</p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* AERO */}
                      <div>
                        <h3 className="text-sm font-semibold text-legal mb-3 uppercase tracking-wide">AERO</h3>
                        <div className="space-y-3">
                          <Link to="/produtos/brilix" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <Settings className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">Brilix</div>
                              <p className="text-xs text-muted-foreground">Limpeza em Altura</p>
                            </div>
                          </Link>
                          <Link to="/produtos/nuvyo" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <Camera className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">Nuvyo</div>
                              <p className="text-xs text-muted-foreground">Filmagem e Fotografia</p>
                            </div>
                          </Link>
                          <Link to="/produtos/sonix" className="flex items-start p-2 rounded-md group hover:bg-accent/40 transition-colors">
                            <Plane className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-foreground group-hover:text-legal">Sonix</div>
                              <p className="text-xs text-muted-foreground">Delivery de Tudo</p>
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Negócios */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-legal hover:text-legal-purple px-2">Negócios</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-6 bg-white border border-gray-100 shadow-lg rounded-lg">
                    <div className="grid grid-cols-2 gap-6">
                      
                      {/* Soluções Principais */}
                      <div>
                        <h3 className="text-sm font-semibold text-legal mb-3 uppercase tracking-wide">Soluções Principais</h3>
                        <div className="space-y-3">
                          <Link to="/negocios/aero" className="flex items-start p-2 hover:bg-gray-50 rounded-md group">
                            <Plane className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-legal">AERO</div>
                              <p className="text-xs text-gray-500">Serviços completos de Drone</p>
                            </div>
                          </Link>
                          <Link to="/negocios/ai" className="flex items-start p-2 hover:bg-gray-50 rounded-md group">
                            <Cpu className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-legal">AI</div>
                              <p className="text-xs text-gray-500">Soluções de Inteligência Artificial</p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Modelos de Negócio */}
                      <div>
                        <h3 className="text-sm font-semibold text-legal mb-3 uppercase tracking-wide">Modelos de Negócio</h3>
                        <div className="space-y-3">
                          <Link to="/negocios/alugue" className="flex items-start p-2 hover:bg-gray-50 rounded-md group">
                            <Wrench className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-legal">ALUGUE</div>
                              <p className="text-xs text-gray-500">Aluguel de Internet/Tech</p>
                            </div>
                          </Link>
                          <Link to="/negocios/assinatura" className="flex items-start p-2 hover:bg-gray-50 rounded-md group">
                            <Globe className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-legal">ASSINATURA</div>
                              <p className="text-xs text-gray-500">Planos FWA 5G mensais</p>
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* SmartEvents */}
              <NavigationMenuItem>
                <Link to="/smart-events" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-legal hover:text-legal-purple px-2")}>
                  SmartEvents™
                </Link>
              </NavigationMenuItem>

              {/* Preços */}
              <NavigationMenuItem>
                <Link to="/precos" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-legal hover:text-legal-purple px-2")}>
                  Preços
                </Link>
              </NavigationMenuItem>

              {/* Somos LEGAL */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-legal hover:text-legal-purple px-2">Somos LEGAL</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link to="/missao-visao-valores" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-legal to-legal-purple p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Missão, Visão e Valores
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Nosso manifesto, propósito, direção e a história sendo construída desde 2010. Conectar 1 milhão até 2030.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link to="/time" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium">Time</div>
                        <p className="text-sm text-muted-foreground">Conheça quem faz a LEGAL</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/vagas" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium">Vagas</div>
                        <p className="text-sm text-muted-foreground">Venha transformar o futuro conosco</p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Universo */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-legal hover:text-legal-purple px-2">Universo</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[520px] p-6 bg-white border border-gray-100 shadow-lg rounded-lg">
                    <div className="grid grid-cols-2 gap-6">
                      
                      {/* Conteúdo & Comunidade */}
                      <div>
                        <h3 className="text-sm font-semibold text-legal mb-3 uppercase tracking-wide">Conteúdo & Comunidade</h3>
                        <div className="space-y-3">
                           <Link to="/universo/tectec" className="flex items-start p-2 hover:bg-gray-50 rounded-md group">
                             <BookOpen className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                             <div>
                               <div className="text-sm font-medium text-gray-900 group-hover:text-legal">TecTec (blog)</div>
                               <p className="text-xs text-gray-500">Notícias fresquinhas</p>
                             </div>
                           </Link>
                          <Link to="/universo/historias" className="flex items-start p-2 hover:bg-gray-50 rounded-md group">
                            <Users className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-legal">Histórias</div>
                              <p className="text-xs text-gray-500">Casos de sucesso reais</p>
                            </div>
                          </Link>
                           <Link to="/universo/bits" className="flex items-start p-2 hover:bg-gray-50 rounded-md group">
                             <Star className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                             <div>
                               <div className="text-sm font-medium text-gray-900 group-hover:text-legal">BITS</div>
                               <p className="text-xs text-gray-500">Fidelidade & Relacionamento</p>
                             </div>
                           </Link>
                          <Link to="/universo/pesquisas" className="flex items-start p-2 hover:bg-gray-50 rounded-md group">
                            <TrendingUp className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-legal">Pesquisas</div>
                              <p className="text-xs text-gray-500">Insights exclusivos</p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Suporte & Transparência */}
                      <div>
                        <h3 className="text-sm font-semibold text-legal mb-3 uppercase tracking-wide">Suporte & Transparência</h3>
                        <div className="space-y-3">
                          <Link to="/universo/recursos" className="flex items-start p-2 hover:bg-gray-50 rounded-md group">
                            <FileText className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-legal">Recursos</div>
                              <p className="text-xs text-gray-500">Conteúdos, Dicas e Ferramentas</p>
                            </div>
                          </Link>
                          <Link to="/universo/imprensa" className="flex items-start p-2 hover:bg-gray-50 rounded-md group">
                            <Newspaper className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-legal">Imprensa</div>
                              <p className="text-xs text-gray-500">Notícias e releases oficiais</p>
                            </div>
                          </Link>
                          <Link to="/universo/status" className="flex items-start p-2 hover:bg-gray-50 rounded-md group">
                            <Activity className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-legal">Status</div>
                              <p className="text-xs text-gray-500">Monitoramento de serviços</p>
                            </div>
                          </Link>
                          <Link to="/universo/faq" className="flex items-start p-2 hover:bg-gray-50 rounded-md group">
                            <HelpCircle className="w-5 h-5 text-legal-green mt-1 mr-3 group-hover:text-legal" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-legal">FAQ</div>
                              <p className="text-xs text-gray-500">Perguntas frequentes</p>
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contato */}
              <NavigationMenuItem>
                <Link to="/contato" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-legal hover:text-legal-purple px-2")}>
                  Contato
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side - Search bar and BLUE access button */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar produtos, conteúdos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-48 border-gray-300 focus:border-legal focus:ring-legal"
            />
          </form>
          
          {/* BLUE Access Button */}
          <Button 
            variant="outline" 
            className="border-legal text-legal hover:bg-legal hover:text-white flex items-center"
            asChild
          >
            <a href="https://blue.operadora.legal" target="_blank" rel="noopener noreferrer">
              Acesso Blue™
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              {profile && (
                <span className="text-sm text-muted-foreground">
                  Olá, {profile.full_name || profile.email}
                </span>
              )}
              <Button 
                onClick={signOut}
                variant="ghost" 
                size="sm"
                className="text-legal hover:bg-legal hover:text-white flex items-center"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </div>
          ) : (
            <Button 
              variant="outline" 
              className="border-legal text-legal hover:bg-legal hover:text-white flex items-center"
              asChild
            >
              <Link to="/auth">
                <LogIn className="mr-2 h-4 w-4" />
                Acesso Labs™
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-legal rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 z-40 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-2 max-h-[80vh] overflow-y-auto">
          {/* Produtos */}
          <div className="border-b border-gray-100 pb-2">
            <p className="px-4 py-2 text-sm font-bold text-legal uppercase">Produtos</p>
            <div className="grid grid-cols-1 gap-1 ml-4">
              <Link to="/produtos/blue6" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Blue6 - Hotspot com Gestão WiFi
              </Link>
              <Link to="/produtos/brilix" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Brilix - Limpeza em Altura com Drone
              </Link>
              <Link to="/produtos/eventrix" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Eventrix - Plataforma de Gestão de Eventos
              </Link>
              <Link to="/produtos/magicpass" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                MagicPass - Credenciamento e Acesso Rápido
              </Link>
              <Link to="/produtos/fitscore" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                FitScore - Contratação e People Analytics
              </Link>
              <Link to="/produtos/humanoid" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Humanoid - Robô para Geração de Negócios
              </Link>
              <Link to="/produtos/linkai" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                LinkAI - Matchmaking Inteligente e Eficiente
              </Link>
              <Link to="/produtos/neurafit" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                NeuraFit - Musculação para o Cérebro
              </Link>
              <Link to="/produtos/nuvyo" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Nuvyo - Filmagem e Fotografia Aerea
              </Link>
              <Link to="/produtos/ping" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Ping - Atendimento Omnichannel
              </Link>
              <Link to="/produtos/sonix" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Sonix - Delivery de Tudo com Drone
              </Link>
              <Link to="/produtos/speedy5g" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Speedy 5G - Internet Plug and Play
              </Link>
              <Link to="/produtos/plaud" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Plaud - Gravação de Voz com IA
              </Link>
              <Link to="/solucoes/tagpulse" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                TagPulse™ - Etiquetas Digitais Dinâmicas
              </Link>
            </div>
          </div>

          {/* Negócios */}
          <div className="border-b border-gray-100 pb-2">
            <p className="px-4 py-2 text-sm font-bold text-legal uppercase">Negócios</p>
            <div className="grid grid-cols-1 gap-1 ml-4">
              <Link to="/negocios/aero" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                AERO - Serviços de Drone
              </Link>
              <Link to="/negocios/ai" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                AI - Soluções de IA
              </Link>
              <Link to="/negocios/alugue" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                ALUGUE - Aluguel de Internet/Tech
              </Link>
              <Link to="/negocios/assinatura" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                ASSINATURA - Planos FWA 5G
              </Link>
            </div>
          </div>

          {/* SmartEvents */}
          <Link to="/smart-events" className="px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-md border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            SmartEvents™
          </Link>

          {/* Preços */}
          <Link to="/precos" className="px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-md border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            Preços
          </Link>

          {/* Somos LEGAL */}
          <div className="border-b border-gray-100 pb-2">
            <p className="px-4 py-2 text-sm font-bold text-legal uppercase">Somos LEGAL</p>
            <div className="grid grid-cols-1 gap-1 ml-4">
              <Link to="/missao-visao-valores" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Missão, Visão e Valores
              </Link>
              <Link to="/time" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Time
              </Link>
              <Link to="/vagas" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Vagas
              </Link>
            </div>
          </div>

          {/* Universo */}
          <div className="border-b border-gray-100 pb-2">
            <p className="px-4 py-2 text-sm font-bold text-legal uppercase">Universo</p>
            <div className="grid grid-cols-1 gap-1 ml-4">
              <Link to="/universo/tectec" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                TecTec (blog)
              </Link>
              <Link to="/universo/historias" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Histórias
              </Link>
              <Link to="/universo/bits" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                BITS
              </Link>
               <Link to="/universo/recursos" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                 Recursos
               </Link>
               <Link to="/universo/pesquisas" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                 Pesquisas
               </Link>
              <Link to="/universo/imprensa" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Imprensa
              </Link>
              <Link to="/universo/status" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Status
              </Link>
              <Link to="/universo/faq" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
            </div>
          </div>

          {/* Contato */}
          <Link to="/contato" className="px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-md border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            Contato
          </Link>

          {/* Acesso Blue */}
          <a 
            href="https://blue.operadora.legal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-3 mt-2 text-sm font-medium bg-legal text-white rounded-md flex items-center justify-center"
          >
            Acesso Blue™
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>

          {/* Auth Buttons Mobile */}
          {isAuthenticated ? (
            <div className="mt-2 space-y-2">
              {profile && (
                <div className="px-4 py-2 text-sm text-muted-foreground border-b border-gray-100">
                  Olá, {profile.full_name || profile.email}
                </div>
              )}
              <button
                onClick={() => {
                  signOut();
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md flex items-center"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </button>
            </div>
          ) : (
            <Link 
              to="/auth" 
              className="px-4 py-3 mt-2 text-sm font-medium text-legal border border-legal rounded-md flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Acesso Labs™
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
