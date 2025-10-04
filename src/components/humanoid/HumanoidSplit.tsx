import React from 'react';
import { cn } from '@/lib/utils';

interface HumanoidSplitProps {
  image: string;
  headline: string;
  body: string;
  imagePosition?: 'left' | 'right';
  animation?: 'fade-in' | 'parallax';
  className?: string;
}

const HumanoidSplit: React.FC<HumanoidSplitProps> = ({
  image,
  headline,
  body,
  imagePosition = 'left',
  animation = 'fade-in',
  className
}) => {
  const animationClasses = animation === 'parallax' ? 'animate-fade-in' : 'animate-fade-up';
  
  return (
    <section className={cn("py-24 bg-humanoid-dark text-humanoid-light", className)}>
      <div className="container mx-auto px-4">
        <div className={cn(
          "grid md:grid-cols-2 gap-12 items-center",
          imagePosition === 'right' && 'md:grid-flow-dense'
        )}>
          {/* Image */}
          <div className={cn(
            "relative rounded-2xl overflow-hidden",
            animationClasses,
            imagePosition === 'right' && 'md:col-start-2'
          )}>
            <div className="aspect-[4/3] bg-humanoid-accent/10 backdrop-blur-sm">
              <img 
                src={image} 
                alt={headline}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className={cn("space-y-6 animate-fade-up", imagePosition === 'right' && 'md:col-start-1 md:row-start-1')}>
            <h2 className="font-haas text-3xl md:text-5xl font-bold leading-tight">
              {headline}
            </h2>
            <p className="text-lg md:text-xl text-humanoid-light/80 leading-relaxed">
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidSplit;
