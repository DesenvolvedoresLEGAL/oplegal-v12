import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Search, LogOut, LogIn, BookOpen, Star, Users, Newspaper, Activity, HelpCircle, FileText, TrendingUp } from "lucide-react";
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
              {/* HUMANOID */}
              <NavigationMenuItem>
                <Link to="/produtos/humanoid" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-legal hover:text-legal-purple px-2")}>
                  HUMANOID™
                </Link>
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
                              <p className="text-xs text-gray-500">Dicas e Ferramentas</p>
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
            // Temporarily removed Acesso Labs button
            <></>
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
          {/* HUMANOID */}
          <Link to="/produtos/humanoid" className="px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-md border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            HUMANOID™
          </Link>

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
            // Temporarily removed Acesso Labs button
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
