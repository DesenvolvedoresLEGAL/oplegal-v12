import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    <li>
                      <Link to="/produtos/blue6" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">Blue6</div>
                        <p className="text-sm text-muted-foreground pt-1">Hotspot com Gestão WiFi</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/produtos/brilix" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">Brilix</div>
                        <p className="text-sm text-muted-foreground pt-1">Limpeza em Altura com Drone</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/produtos/eventrix" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">Eventrix</div>
                        <p className="text-sm text-muted-foreground pt-1">Plataforma de Gestão de Eventos</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/produtos/facepass" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">FacePass</div>
                        <p className="text-sm text-muted-foreground pt-1">Credenciamento e Acesso Rápido</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/produtos/fitscore" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">FitScore</div>
                        <p className="text-sm text-muted-foreground pt-1">Contratação e People Analytics</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/produtos/humanoid" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">Humanoid</div>
                        <p className="text-sm text-muted-foreground pt-1">Robô para Geração de Negócios</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/produtos/linkai" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">LinkAI</div>
                        <p className="text-sm text-muted-foreground pt-1">Matchmaking Inteligente e Eficiente</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/produtos/neurafit" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">NeuraFit</div>
                        <p className="text-sm text-muted-foreground pt-1">Musculação para o Cérebro</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/produtos/nuvyo" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">Nuvyo</div>
                        <p className="text-sm text-muted-foreground pt-1">Filmagem e Fotografia Aerea</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/produtos/ping" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">Ping</div>
                        <p className="text-sm text-muted-foreground pt-1">Atendimento Omnichannel</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/produtos/sonix" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">Sonix</div>
                        <p className="text-sm text-muted-foreground pt-1">Delivery de Tudo com Drone</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/produtos/speedy5g" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">Speedy 5G</div>
                        <p className="text-sm text-muted-foreground pt-1">Internet Plug and Play</p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Negócios */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-legal hover:text-legal-purple px-2">Negócios</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                    <li>
                      <Link to="/negocios/aero" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">AERO</div>
                        <p className="text-sm text-muted-foreground pt-1">Serviços de Drone</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/negocios/ai" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">AI</div>
                        <p className="text-sm text-muted-foreground pt-1">Soluções de IA</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/negocios/alugue" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">ALUGUE</div>
                        <p className="text-sm text-muted-foreground pt-1">Aluguel de Internet/Tech</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/negocios/assinatura" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium leading-none">ASSINATURA</div>
                        <p className="text-sm text-muted-foreground pt-1">Planos FWA 5G</p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* SmartEvents */}
              <NavigationMenuItem>
                <Link to="/smart-events" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-legal hover:text-legal-purple px-2")}>
                  SmartEvents™
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
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <Link to="/universo/tectec" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium">TecTec (blog)</div>
                        <p className="text-sm text-muted-foreground">Novidades e tendências</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/universo/historias" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium">Histórias</div>
                        <p className="text-sm text-muted-foreground">Casos de sucesso</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/universo/bits" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium">BITS</div>
                        <p className="text-sm text-muted-foreground">Conteúdos técnicos</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/universo/imprensa" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium">Imprensa</div>
                        <p className="text-sm text-muted-foreground">Notícias e releases</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/universo/status" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium">Status</div>
                        <p className="text-sm text-muted-foreground">Servidores e serviços</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/universo/faq" className="block p-3 hover:bg-accent rounded-md">
                        <div className="text-sm font-medium">FAQ</div>
                        <p className="text-sm text-muted-foreground">Perguntas frequentes</p>
                      </Link>
                    </li>
                  </ul>
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

        {/* Right side - BLUE access button */}
        <div className="hidden lg:flex">
          <Button 
            variant="outline" 
            className="border-legal text-legal hover:bg-legal hover:text-white flex items-center"
            asChild
          >
            <a href="" rel="noopener noreferrer">
              Acesso Blue™
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
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
              <Link to="/produtos/facepass" className="px-4 py-2 text-xs hover:bg-gray-100 rounded-md" onClick={() => setIsMenuOpen(false)}>
                FacePass - Credenciamento e Acesso Rápido
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
