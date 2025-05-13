
import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PlaceholderPage = () => {
  const location = useLocation();
  const pageName = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.slice(2);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex flex-col items-center justify-center bg-legal-gray">
      <div className="text-center max-w-3xl">
        <div className="w-16 h-16 rounded-full bg-legal-green bg-opacity-20 text-legal-green flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl font-bold">!</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-legal">Página {pageName}</h1>
        <p className="text-lg text-gray-600 mb-8">
          Esta página está em desenvolvimento. Em breve você terá acesso a todo o conteúdo relacionado a {pageName.toLowerCase()}.
        </p>
        
        <p className="text-gray-500 mb-12 text-sm">
          Ref: {location.pathname}
        </p>
        
        <Button asChild className="bg-legal hover:bg-legal/90">
          <Link to="/" className="inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Voltar para Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PlaceholderPage;
