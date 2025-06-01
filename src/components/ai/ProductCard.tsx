
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckSquare, Target } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  ctaLink: string;
  variant?: 'main' | 'complementary';
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  icon,
  features,
  benefits,
  ctaLink,
  variant = 'main'
}) => {
  if (variant === 'complementary') {
    return (
      <article className="bg-white border-legal-purple/20 hover:border-legal-purple/50 transition-all duration-300 transform hover:-translate-y-1 rounded-lg overflow-hidden">
        <header className="pb-4 p-6">
          <div className="flex flex-col items-center text-center">
            <div aria-hidden="true">{icon}</div>
            <h3 className="text-xl font-bold text-legal-purple mt-2">{name}</h3>
          </div>
        </header>
        <div className="pt-0 px-6 pb-6">
          <p className="text-gray-600 text-sm mb-4 text-center">{description}</p>
          <ul className="list-none space-y-1 text-xs" role="list">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start" role="listitem">
                <CheckSquare className="w-3 h-3 text-legal-purple mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-card border-legal/30 shadow-xl hover:shadow-legal-cyan/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden rounded-lg">
      <header className="bg-legal/5 p-6">
        <div className="flex items-center gap-4">
          <div aria-hidden="true">{icon}</div>
          <h3 className="text-3xl font-black text-legal uppercase tracking-wide">{name}</h3>
        </div>
      </header>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-muted-foreground mb-6 text-base leading-relaxed">
          {description}
        </p>
        
        <section className="mb-6">
          <h4 className="font-bold text-legal mb-3 text-lg">Principais Funcionalidades:</h4>
          <ul className="list-none space-y-2 text-sm" role="list">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start" role="listitem">
                <CheckSquare className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h4 className="font-bold text-legal-purple mb-3 text-lg">Benefícios Comprovados:</h4>
          <ul className="list-none space-y-2 text-sm" role="list">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start" role="listitem">
                <Target className="w-4 h-4 text-legal-purple mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-auto pt-4">
          <Button asChild className="w-full bg-legal hover:bg-legal-purple text-white">
            <Link to={ctaLink} title={`Saiba mais sobre ${name}`}>
              Saiba Mais sobre {name}
            </Link>
          </Button>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
