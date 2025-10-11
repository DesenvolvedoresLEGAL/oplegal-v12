import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain } from 'lucide-react';

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
  primaryCTA
}) => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-legal to-legal-purple overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--legal-cyan)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--legal)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(3,249,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(3,249,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          {/* Quote Box */}
          <div className="bg-white/5 backdrop-blur-sm border-l-4 border-legal-cyan rounded-r-xl p-8 mb-12 animate-fade-in">
            <blockquote className="text-2xl md:text-3xl font-black text-white italic leading-relaxed">
              "Toda empresa tem um coração.<br />
              Mas só as mais inteligentes têm um sistema nervoso central."
            </blockquote>
            <p className="text-legal-cyan font-bold mt-4 text-xl">— HUMANOID™</p>
          </div>

          {/* Divider with icon */}
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-legal-cyan/50 to-transparent" />
            <Brain className="w-8 h-8 text-legal-cyan" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-legal-cyan/50 to-transparent" />
          </div>

          {/* Main CTA Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              {headline}
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              {subheadline}
            </p>
            
            <Button 
              asChild 
              size="lg"
              className="bg-white hover:bg-white/90 text-legal text-lg px-12 py-6 h-auto rounded-full font-black shadow-2xl group transition-all duration-300 hover:scale-105"
            >
              <Link to={primaryCTA.link} className="flex items-center gap-3">
                {primaryCTA.label}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidCTA;
