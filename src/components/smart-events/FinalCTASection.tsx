import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Download, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';
const FinalCTASection = () => {
  return <>
      {/* CTA Section */}
      <CallToAction title="Quer levar seu evento para o próximo nível?" subtitle="Transforme seu evento em um Smart Event™ e ofereça uma experiência inovadora, conectada e mais lucrativa." buttonText="Fale com um especialista" buttonLink="/contato" secondaryButtonText="Baixe o whitepaper" secondaryButtonLink="#" background="gradient" fullWidth />

      {/* Final CTA Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Button asChild variant="outline" className="h-auto p-6 border-legal text-legal hover:bg-legal hover:text-white flex flex-col items-center text-center">
              <Link to="/contato">
                <MessageCircle size={36} className="mb-4" />
                <span className="text-xl font-medium">Fale com um especialista</span>
                <span className="text-sm mt-2">Agende uma consulta personalizada</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-6 border-legal text-legal hover:bg-legal hover:text-white flex flex-col items-center text-center">
              <Link to="#">
                <Download size={36} className="mb-4" />
                <span className="text-xl font-medium">Baixe o Whitepaper completo</span>
                <span className="text-sm mt-2">O Futuro dos Eventos no Brasil</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-auto p-6 border-legal text-legal hover:bg-legal hover:text-white flex flex-col items-center text-center">
              <Link to="/smart-events">
                <Target size={36} className="mb-4" />
                <span className="text-xl font-medium">Acesse o Portal Eventrix™</span>
                <span className="text-sm mt-2">Conteúdos exclusivos e ferramentas</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>;
};
export default FinalCTASection;