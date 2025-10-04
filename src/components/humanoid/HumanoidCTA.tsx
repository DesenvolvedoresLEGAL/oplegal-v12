import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTAButton {
  label: string;
  link: string;
}

interface HumanoidCTAProps {
  headline: string;
  subheadline: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
}

const HumanoidCTA: React.FC<HumanoidCTAProps> = ({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA
}) => {
  return (
    <section className="py-32 bg-gradient-to-br from-humanoid-accent via-humanoid-accent/90 to-humanoid-dark text-humanoid-light relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(242,185,12,0.2),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="font-haas text-4xl md:text-6xl font-black leading-tight">
            {headline}
          </h2>
          
          <p className="text-xl md:text-2xl text-humanoid-light/90 leading-relaxed">
            {subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-up">
            <Button 
              asChild 
              size="lg"
              className="bg-humanoid-highlight hover:bg-humanoid-highlight/90 text-humanoid-dark text-lg px-12 py-6 h-auto rounded-full font-bold shadow-2xl animate-pulse-slow group"
            >
              <Link to={primaryCTA.link} className="inline-flex items-center gap-2">
                {primaryCTA.label}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-humanoid-light hover:bg-humanoid-light/10 text-humanoid-light text-lg px-12 py-6 h-auto rounded-full font-bold"
            >
              <Link to={secondaryCTA.link}>{secondaryCTA.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidCTA;
