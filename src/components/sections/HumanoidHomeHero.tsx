import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
const HumanoidHomeHero = () => {
  return <section className="hero-instant relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e40af] to-[#3b82f6] text-background">
      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
        backgroundSize: "48px 48px"
      }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in">
            <span className="text-sm font-medium text-legal-cyan">O futuro das empresas</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up">
            O futuro das empresas não será <span className="text-legal-green">humano</span> ou{" "}
            <span className="text-white">artificial</span>.
            <br />
            Será <span className="text-legal-cyan">HUMANOID</span>.
          </h1>

          {/* Subheadline */}
          <p style={{
          animationDelay: "0.2s"
        }} className="text-lg sm:text-xl max-w-3xl mx-auto animate-fade-up text-slate-50 md:text-3xl text-center font-extrabold">
            Porque o novo poder competitivo não é contratar mais gente, é conectar cérebros, dados e decisões em um sistema que pensa e executa com você.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            <Button asChild size="lg" className="btn-primary bg-legal-green hover:bg-legal-green/90 text-legal-black font-semibold px-8 py-6 text-lg">
              <Link to="/produtos/humanoid">Conhecer HUMANOID</Link>
            </Button>

            <Button size="lg" className="bg-white text-legal hover:bg-white/90 font-semibold px-8 py-6 text-lg" onClick={e => e.preventDefault()}>Criar conta grátis</Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-legal-cyan opacity-50" />
      </div>
    </section>;
};
export default HumanoidHomeHero;