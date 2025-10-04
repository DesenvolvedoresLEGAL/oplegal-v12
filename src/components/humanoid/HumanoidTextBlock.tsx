import React from 'react';
import { cn } from '@/lib/utils';

interface HumanoidTextBlockProps {
  headline: string;
  body: string;
  layout?: 'centered-narrow' | 'centered' | 'wide';
  animation?: 'fade-in' | 'fade-up' | 'slide-up';
  className?: string;
}

const HumanoidTextBlock: React.FC<HumanoidTextBlockProps> = ({
  headline,
  body,
  layout = 'centered',
  animation = 'fade-up',
  className
}) => {
  const layoutClasses = {
    'centered-narrow': 'max-w-3xl mx-auto text-center',
    'centered': 'max-w-5xl mx-auto text-center',
    'wide': 'max-w-7xl mx-auto'
  };

  const animationClasses = {
    'fade-in': 'animate-fade-in',
    'fade-up': 'animate-fade-up',
    'slide-up': 'animate-slide-up'
  };

  return (
    <section className={cn("py-24 bg-humanoid-dark text-humanoid-light", className)}>
      <div className="container mx-auto px-4">
        <div className={cn(layoutClasses[layout], animationClasses[animation], "space-y-6")}>
          <h2 className="font-haas text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {headline}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-humanoid-light/80 leading-relaxed">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HumanoidTextBlock;
