import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const HumanoidHomeHero = () => {
  return (
    <section className="hero-instant relative min-h-screen flex items-center justify-center overflow-hidden bg-legal-black text-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-legal-black via-legal-black/95 to-legal-black" />
      <div className="absolute inset-0 bg-gradient-to-tr from-legal/10 via-transparent to-legal-cyan/10" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-legal-green/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-legal-cyan/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in">
            <span className="text-sm font-medium text-legal-cyan">
              O futuro das empresas
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up">
            O futuro das empresas não será{" "}
            <span className="text-legal-green">humano</span> ou{" "}
            <span className="text-legal">artificial</span>.
            <br />
            Será <span className="text-legal-cyan">HUMANOID</span>.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Empresas não quebram por falta de talento. Quebram por falta de consciência, gestão, planejamento e autoconhecimento organizacional.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button
              asChild
              size="lg"
              className="btn-primary bg-legal-green hover:bg-legal-green/90 text-legal-black font-semibold px-8 py-6 text-lg"
            >
              <Link to="/produtos/humanoid">
                Conhecer HUMANOID
              </Link>
            </Button>
            
            <Button
              size="lg"
              className="bg-white text-legal hover:bg-white/90 font-semibold px-8 py-6 text-lg"
              onClick={(e) => e.preventDefault()}
            >
              Criar conta grátis
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-legal-cyan opacity-50" />
      </div>
    </section>
  );
};

export default HumanoidHomeHero;
