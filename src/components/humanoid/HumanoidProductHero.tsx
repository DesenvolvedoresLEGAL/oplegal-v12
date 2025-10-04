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
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-humanoid-dark via-humanoid-accent/10 to-humanoid-dark text-humanoid-light overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(55,55,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(55,55,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-humanoid-highlight/20 rounded-full mb-4">
            <Brain className="w-5 h-5 text-humanoid-highlight" />
            <span className="text-sm font-bold text-humanoid-light">PRODUTO</span>
          </div>
          
          <h1 className="font-haas text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            {headline}
          </h1>
          
          <p className="text-xl md:text-2xl text-humanoid-light/80 leading-relaxed max-w-3xl mx-auto">
            {subheadline}
          </p>
          
          <div className="pt-8 animate-fade-up">
            <Button 
              asChild 
              size="lg"
              className="bg-humanoid-highlight hover:bg-humanoid-highlight/90 text-humanoid-dark text-lg px-12 py-6 h-auto rounded-full font-bold shadow-2xl"
            >
              <Link to="/contato?produto=humanoid">Criar conta agora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidProductHero;
