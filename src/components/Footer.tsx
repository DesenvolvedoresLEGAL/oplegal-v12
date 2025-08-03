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
            <div className="flex space-x-4">
              <a href="https://instagram.com/legal_oficial" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-legal-green transition-colors p-2" aria-label="Siga a LEGAL no Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/legal-brasil" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-legal-green transition-colors p-2" aria-label="Conecte-se com a LEGAL no LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/legal_tech" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-legal-green transition-colors p-2" aria-label="Siga a LEGAL no Twitter">
                <Twitter size={20} />
              </a>
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

        {/* Selos de Segurança */}
        <div className="border-t border-gray-800 mt-12 pt-8 pb-6">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
              <span className="text-green-400">🔒</span>
              <span className="text-sm text-gray-300">SSL Seguro</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
              <span className="text-yellow-400">⭐</span>
              <span className="text-sm text-gray-300">Google Reviews 4.9</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
              <span className="text-blue-400">🛡️</span>
              <span className="text-sm text-gray-300">TrustPilot Verified</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
              <span className="text-green-400">✓</span>
              <span className="text-sm text-gray-300">Reclame Aqui Nota A</span>
            </div>
          </div>
        </div>

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