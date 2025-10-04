import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SmartEventsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-legal-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-legal-green/20 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in">
            <span className="text-sm font-medium text-legal-green">
              O novo padrão para eventos
            </span>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up">
            <span className="text-legal-green">Smart Events™</span> — eventos 10× mais inteligentes, conectados e eficientes.
          </h2>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Da gestão inteligente até a conectividade super rápida: a LEGAL ajuda a criar eventos surpreendentes e com experiência superior.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button
              asChild
              size="lg"
              className="btn-primary bg-legal-green hover:bg-legal-green/90 text-legal-black font-semibold px-8 py-6 text-lg"
            >
              <Link to="/contato?produto=smart-events">
                Quero transformar meu evento
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              className="bg-white text-legal hover:bg-white/90 font-semibold px-8 py-6 text-lg"
            >
              <Link to="/smart-events">
                Conheça Smart Events™
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartEventsSection;
