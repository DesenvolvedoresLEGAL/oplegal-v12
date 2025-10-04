import React from 'react';
import { Quote } from 'lucide-react';

interface HumanoidQuoteProps {
  quote: string;
  author: string;
  animation?: 'fade-in' | 'reveal';
}

const HumanoidQuote: React.FC<HumanoidQuoteProps> = ({
  quote,
  author,
  animation = 'reveal'
}) => {
  const animationClass = animation === 'reveal' ? 'animate-reveal' : 'animate-fade-in';
  
  return (
    <section className="py-24 bg-gradient-to-br from-humanoid-accent/20 to-humanoid-highlight/10">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center space-y-8 ${animationClass}`}>
          <Quote className="w-16 h-16 text-humanoid-highlight mx-auto opacity-50" />
          
          <blockquote className="font-haas text-2xl md:text-4xl lg:text-5xl font-bold text-humanoid-light leading-tight">
            {quote}
          </blockquote>
          
          <footer className="text-lg md:text-xl text-humanoid-light/70 font-medium">
            — {author}
          </footer>
        </div>
      </div>
    </section>
  );
};

export default HumanoidQuote;
