import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Zap, Crown } from 'lucide-react';

interface Plan {
  name: string;
  description: string;
  cta: string;
  link: string;
}

interface HumanoidPricingPreviewProps {
  headline?: string;
  plans?: Plan[];
}

const HumanoidPricingPreview: React.FC<HumanoidPricingPreviewProps> = ({
  headline = "Comece agora com o plano ideal para sua empresa.",
  plans = [
    {
      name: "Auto",
      description: "Implantação instantânea e automações essenciais.",
      cta: "Começar agora",
      link: "/precos#auto"
    },
    {
      name: "Prime",
      description: "Camada avançada com agentes personalizados e IA sob medida.",
      cta: "Falar com especialista",
      link: "/contato"
    }
  ]
}) => {
  const icons = {
    Auto: <Zap className="w-8 h-8" />,
    Prime: <Crown className="w-8 h-8" />
  };

  return (
    <section className="py-24 bg-gradient-to-br from-humanoid-accent/10 to-humanoid-dark">
      <div className="container mx-auto px-4">
        <h2 className="font-haas text-3xl md:text-5xl font-bold text-center text-humanoid-light mb-16 animate-fade-in">
          {headline}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="bg-humanoid-dark/80 backdrop-blur-sm rounded-2xl p-10 border-2 border-humanoid-accent/30 hover:border-humanoid-highlight/50 transition-all animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-humanoid-highlight mb-6">
                {icons[plan.name as keyof typeof icons]}
              </div>
              
              <h3 className="font-haas text-3xl font-bold mb-4 text-humanoid-light">
                {plan.name}
              </h3>
              
              <p className="text-lg text-humanoid-light/70 mb-8 leading-relaxed">
                {plan.description}
              </p>
              
              <Button 
                asChild 
                size="lg"
                className={`w-full ${index === 1 ? 'bg-humanoid-highlight hover:bg-humanoid-highlight/90 text-humanoid-dark' : 'bg-humanoid-accent hover:bg-humanoid-accent/90 text-white'} font-bold rounded-full`}
              >
                <Link to={plan.link}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanoidPricingPreview;
