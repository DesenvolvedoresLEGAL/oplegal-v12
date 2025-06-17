
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Globe } from "lucide-react";

const MovimentoSmartEventsSection = () => {
  return (
    <section className="py-20 bg-legal-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-legal mb-4">
            Junte-se ao Movimento Smart Events™
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mais de 3.000 eventos já adotaram nossa tecnologia. 
            Seja parte da revolução que está transformando o setor de eventos no Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-legal-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-legal" />
            </div>
            <h3 className="text-xl font-semibold text-legal mb-2">+3.000 Eventos</h3>
            <p className="text-gray-600">Já transformados com nossa tecnologia</p>
          </div>

          <div className="text-center">
            <div className="bg-legal-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-legal" />
            </div>
            <h3 className="text-xl font-semibold text-legal mb-2">22% ROI</h3>
            <p className="text-gray-600">Aumento médio no retorno sobre investimento</p>
          </div>

          <div className="text-center">
            <div className="bg-legal-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-legal" />
            </div>
            <h3 className="text-xl font-semibold text-legal mb-2">50+ Cidades</h3>
            <p className="text-gray-600">Em todo o Brasil já utilizam Smart Events™</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            asChild 
            className="bg-legal-purple hover:bg-legal text-white px-8 py-6 text-lg h-auto border-2 border-transparent hover:border-legal-cyan focus:border-legal-cyan focus:ring-4 focus:ring-legal-cyan/20"
          >
            <Link to="/contato" aria-label="Participar do movimento Smart Events - Solicitar demonstração">
              Participar Agora
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            Demonstração gratuita • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovimentoSmartEventsSection;
