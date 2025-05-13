
import React from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Twitter, 
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-legal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">LEGAL</h3>
            <p className="text-gray-300 mb-4">
              A maior TECHCO do Brasil e inventora do conceito Smart Events™. 
              Entregamos o novo padrão para eventos inteligentes, conectados e lucrativos.
            </p>
            <button 
              onClick={scrollToTop} 
              className="flex items-center text-legal-green hover:text-white transition-colors"
            >
              <span className="mr-1">Voltar ao topo</span>
              <ArrowUp size={16} />
            </button>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/smart-events" className="text-gray-300 hover:text-legal-green transition-colors">Smart Events™</Link></li>
              <li><Link to="/produtos" className="text-gray-300 hover:text-legal-green transition-colors">Produtos</Link></li>
              <li><Link to="/implantacao" className="text-gray-300 hover:text-legal-green transition-colors">Implantação</Link></li>
              <li><Link to="/beneficios" className="text-gray-300 hover:text-legal-green transition-colors">Benefícios</Link></li>
              <li><Link to="/certificacao" className="text-gray-300 hover:text-legal-green transition-colors">Certificação</Link></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><Link to="/conteudo" className="text-gray-300 hover:text-legal-green transition-colors">Blog TecTec</Link></li>
              <li><Link to="/conteudo" className="text-gray-300 hover:text-legal-green transition-colors">Whitepaper</Link></li>
              <li><Link to="/conteudo" className="text-gray-300 hover:text-legal-green transition-colors">Casos de Sucesso</Link></li>
              <li><Link to="/conteudo" className="text-gray-300 hover:text-legal-green transition-colors">FAQ</Link></li>
              <li><Link to="/conteudo" className="text-gray-300 hover:text-legal-green transition-colors">Programa Bits</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-legal-green flex-shrink-0" />
                <span className="text-gray-300">Av. Paulista, 1000, São Paulo - SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-legal-green flex-shrink-0" />
                <span className="text-gray-300">(11) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-legal-green flex-shrink-0" />
                <a href="mailto:contato@legal.com.br" className="text-gray-300 hover:text-legal-green transition-colors">
                  contato@legal.com.br
                </a>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-legal-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-legal-green transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-legal-green transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} LEGAL. Todos os direitos reservados. Smart Events™ é uma marca registrada da LEGAL.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
