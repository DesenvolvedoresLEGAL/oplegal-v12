import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

interface HumanoidProductHeroProps {
  headline: string;
  subheadline: string;
  video?: string;
}

const HumanoidProductHero: React.FC<HumanoidProductHeroProps> = ({
  headline,
  subheadline,
  video
}) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-legal/20 to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(3,249,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(3,249,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--legal)/0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-legal-cyan/20 backdrop-blur-sm rounded-full border border-legal-cyan/30">
            <Brain className="w-6 h-6 text-legal-cyan" />
            <span className="text-sm font-bold tracking-wider text-legal-cyan">HUMANOID™</span>
          </div>
          
          <h1 className="font-haas text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-legal-cyan">🧠</span> {headline}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
            {subheadline}
          </p>
          
          <div className="pt-8 animate-fade-up">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-legal to-legal-purple hover:from-legal-purple hover:to-legal text-white text-lg px-12 py-6 h-auto rounded-full font-bold shadow-2xl border-2 border-legal-cyan/50"
            >
              <Link to="/contato?produto=humanoid">Ativar meu workspace gratuito</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidProductHero;
