
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Smart Events™", path: "/smart-events" },
    { name: "Produtos", path: "/produtos" },
    { name: "Implantação", path: "/implantacao" },
    { name: "Benefícios", path: "/beneficios" },
    { name: "Ofertas", path: "/ofertas" },
    { name: "Certificação", path: "/certificacao" },
    { name: "Conteúdo", path: "/conteudo" },
    { name: "Contato", path: "/contato" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold text-legal">
            <span className="font-space">LEGAL</span>
            <span className="text-legal-green text-sm align-super ml-1">v11</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button className="ml-4 bg-legal hover:bg-legal/90">Transforme seu evento</Button>
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
        className={`lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="mt-4 bg-legal hover:bg-legal/90">Transforme seu evento</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
