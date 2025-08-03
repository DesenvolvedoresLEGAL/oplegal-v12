import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-legal-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <h3 className="text-2xl font-bold text-legal-green mb-4">LEGAL</h3>
            <p className="text-gray-300 mb-6">A maior TechCo do Brasil e criadora do Smart Events™. Junte-se a nós na missão de conectar 1 milhão de pessoas, negócios e coisas até 2030.</p>
            
            {/* Redes Sociais e Badges de Avaliação */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Redes Sociais */}
              <div className="flex items-center gap-3">
                <a href="https://instagram.com/legal_oficial" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="Siga a LEGAL no Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com/company/legal-brasil" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="Conecte-se com a LEGAL no LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com/legal_tech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110" aria-label="Siga a LEGAL no Twitter">
                  <Twitter size={20} />
                </a>
              </div>
              
              {/* Divisor */}
              <div className="w-px h-6 bg-border"></div>
              
              {/* Badges de Avaliação */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/30 px-3 py-1.5 rounded-full text-xs font-medium text-accent-foreground backdrop-blur-sm">
                  <span className="text-emerald-400">🔒</span>
                  <span>SSL Seguro</span>
                </div>
                
                <a 
                  href="https://g.page/r/CXBwSjN486gbEAE/review" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 px-3 py-1.5 rounded-full text-xs font-medium text-yellow-100 hover:from-yellow-500/30 hover:to-orange-500/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <span className="text-yellow-400">⭐</span>
                  <span>Google 4.9</span>
                </a>
                
                <a 
                  href="https://br.trustpilot.com/review/operadora.legal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-3 py-1.5 rounded-full text-xs font-medium text-green-100 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <span className="text-emerald-400">🛡️</span>
                  <span>TrustPilot</span>
                </a>
                
                <a 
                  href="https://www.reclameaqui.com.br/empresa/legal/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 px-3 py-1.5 rounded-full text-xs font-medium text-blue-100 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <span className="text-cyan-400">✓</span>
                  <span>Reclame Aqui A</span>
                </a>
              </div>
            </div>
          </div>

          {/* Smart Events */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-legal-green">Smart Events™</h4>
            <ul className="space-y-2">
              <li><Link to="/smart-events" className="text-gray-300 hover:text-white transition-colors">O que é Smart Events</Link></li>
              <li><Link to="/smart-events#pilares" className="text-gray-300 hover:text-white transition-colors">Pilares Tecnológicos</Link></li>
              <li><Link to="/smart-events#beneficios" className="text-gray-300 hover:text-white transition-colors">Benefícios</Link></li>
              <li><Link to="/contato?demo=smart-events" className="text-gray-300 hover:text-white transition-colors">Solicitar Demo</Link></li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-legal-green">Produtos</h4>
            <ul className="space-y-2">
              <li><Link to="/produtos/facepass" className="text-gray-300 hover:text-white transition-colors">FacePass</Link></li>
              <li><Link to="/produtos/linkai" className="text-gray-300 hover:text-white transition-colors">LinkAI</Link></li>
              <li><Link to="/produtos/eventrix" className="text-gray-300 hover:text-white transition-colors">Eventrix</Link></li>
              <li><Link to="/produtos/speedy5g" className="text-gray-300 hover:text-white transition-colors">Speedy5G</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-legal-green">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="text-legal-green mr-2 flex-shrink-0" />
                <a href="mailto:contato@operadora.legal" className="text-gray-300 hover:text-white transition-colors">sos@operadora.legal</a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-legal-green mr-2 flex-shrink-0" />
                <a href="tel:+551140042000" className="text-gray-300 hover:text-white transition-colors">(11) 5194-2223</a>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="text-legal-green mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright e Links Legais */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 LEGAL. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/universo/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/universo/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;