import React from 'react';
import { cn } from '@/lib/utils';

interface Column {
  headline: string;
  body: string;
  icon?: string;
}

interface HumanoidColumnsProps {
  headline?: string;
  columns: Column[];
  animation?: 'fade-in' | 'fade-up';
  className?: string;
}

const HumanoidColumns: React.FC<HumanoidColumnsProps> = ({
  headline,
  columns,
  animation = 'fade-in',
  className
}) => {
  const animationClass = animation === 'fade-up' ? 'animate-fade-up' : 'animate-fade-in';
  
  return (
    <section className={cn("py-24 bg-humanoid-dark text-humanoid-light", className)}>
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="font-haas text-3xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            {headline}
          </h2>
        )}
        
        <div className={cn("grid md:grid-cols-3 gap-8 lg:gap-12", animationClass)}>
          {columns.map((column, index) => (
            <div 
              key={index}
              className="bg-humanoid-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-humanoid-accent/20 hover:border-humanoid-accent/40 transition-all hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-haas text-xl md:text-2xl font-bold mb-4 text-humanoid-highlight">
                {column.headline}
              </h3>
              <p className="text-base md:text-lg text-humanoid-light/80 leading-relaxed">
                {column.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanoidColumns;
