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
  plans = []
}) => {
  return (
    <section className="py-32 bg-gradient-to-br from-[hsl(242,97%,37%)] to-[hsl(242,86%,58%)] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(3,249,255,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-2xl">💰</span>
              <span className="text-sm font-bold tracking-wider">PLANOS E CREDITAÇÃO</span>
            </div>
            
            <h2 className="font-haas text-3xl md:text-5xl font-black leading-tight">
              O HUMANOID opera por créditos de execução <span className="text-[hsl(176,98%,51%)]">(VOLTS™)</span>.
            </h2>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Cada VOLT representa uma operação inteligente realizada por seus agentes.
            </p>
          </div>

          {/* Credits Consumed Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="font-haas text-2xl font-bold mb-6 text-center">
              <span className="text-[hsl(176,98%,51%)]">💳</span> Créditos são consumidos por:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Ações (execuções, mensagens, integrações)',
                'Inferências (tokens IA)',
                'Voz (minutos)',
                'Automações (exec-min)'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                  <span className="text-[hsl(176,98%,51%)]">•</span>
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Plans Grid */}
          <div className="space-y-4">
            <h3 className="font-haas text-2xl font-bold text-center mb-8">
              Planos disponíveis:
            </h3>
            <div className="grid gap-4">
              {[
                { name: 'Auto', desc: 'Comece grátis e teste seus primeiros agentes', icon: <Zap className="w-6 h-6" /> },
                { name: 'Origin', desc: 'Para pequenas empresas em transformação digital', icon: <Zap className="w-6 h-6" /> },
                { name: 'Fusion', desc: 'Para PMEs em escala de automação', icon: <Zap className="w-6 h-6" /> },
                { name: 'Core', desc: 'Para empresas que querem padronizar e medir tudo', icon: <Crown className="w-6 h-6" /> },
                { name: 'Matrix', desc: 'Para grandes corporações com integrações dedicadas', icon: <Crown className="w-6 h-6" /> }
              ].map((plan, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[hsl(176,98%,51%)]/50 transition-all animate-fade-up"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="text-[hsl(176,98%,51%)]">
                    {plan.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-haas text-lg font-bold">{plan.name}</h4>
                    <p className="text-sm text-white/70">{plan.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Button 
              asChild 
              size="lg"
              className="bg-white hover:bg-white/90 text-[hsl(242,97%,37%)] text-lg px-12 py-6 h-auto rounded-full font-bold"
            >
              <Link to="/precos">Ver planos e créditos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidPricingPreview;
