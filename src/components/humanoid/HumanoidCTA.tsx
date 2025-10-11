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
    <section className="py-32 bg-gradient-to-br from-gray-900 via-[hsl(242,97%,37%)] to-[hsl(242,86%,58%)] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(3,249,255,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in">
          {/* Quote Section */}
          <div className="space-y-8 mb-12">
            <div className="inline-flex p-2 bg-[hsl(176,98%,51%)]/20 rounded-full">
              <span className="text-4xl">✨</span>
            </div>
            
            <p className="font-haas text-2xl md:text-4xl font-black leading-tight italic">
              "Toda empresa tem um coração.<br />
              Mas só as mais inteligentes têm um <span className="text-[hsl(176,98%,51%)]">sistema nervoso central</span>."
            </p>
            
            <p className="text-xl text-white/70">
              Esse é o <span className="text-[hsl(176,98%,51%)] font-bold">HUMANOID™</span>.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 py-8">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-[hsl(176,98%,51%)]" />
            <span className="text-2xl">🔹</span>
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-[hsl(176,98%,51%)]" />
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <h2 className="font-haas text-3xl md:text-5xl font-black leading-tight">
              {headline}
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              {subheadline}
            </p>
            
            <div className="pt-8 animate-fade-up">
              <Button 
                asChild 
                size="lg"
                className="bg-white hover:bg-white/90 text-[hsl(242,97%,37%)] text-xl px-16 py-8 h-auto rounded-full font-bold shadow-2xl group"
              >
                <Link to={primaryCTA.link} className="inline-flex items-center gap-3">
                  {primaryCTA.label}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidCTA;
