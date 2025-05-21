
import React, { useState, useEffect } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Target } from 'lucide-react';

const NossaMetaSection = () => {
  const targetConnections = 1000000;
  const currentConnectionsInitial = 119835; // Valor inicial dado no prompt
  const [displayedConnections, setDisplayedConnections] = useState(0);

  useEffect(() => {
    // Animação do contador
    let start = 0;
    const end = currentConnectionsInitial;
    if (start === end) return;

    const duration = 2000; // 2 segundos
    const incrementTime = (duration / end) * 10; // Ajusta a velocidade da animação
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime)); // Incremento dinâmico
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setDisplayedConnections(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [currentConnectionsInitial]);

  const progressPercentage = (displayedConnections / targetConnections) * 100;

  return (
    <section className="py-16 md:py-24 bg-legal text-white">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle
          title="QUAL A PRINCIPAL META DA LEGAL?"
          subtitle="Conectar 1 milhão de pessoas, negócios e coisas no Brasil até o final de 2030"
          center
          light
        />
        
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex justify-between text-sm font-mono mb-1">
            <span>Início: 0</span>
            <span>Meta: 1.000.000</span>
          </div>
          <div className="w-full bg-legal-purple/50 rounded-full h-8 shadow-inner overflow-hidden">
            <div 
              className="bg-legal-cyan h-full rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2"
              style={{ width: `${progressPercentage > 100 ? 100 : progressPercentage}%` }}
            >
              <span className="text-legal font-bold text-xs md:text-sm whitespace-nowrap">
                {displayedConnections.toLocaleString()} Conexões
              </span>
            </div>
          </div>
           <p className="mt-2 text-sm text-legal-cyan/80">
            Progresso atual: {displayedConnections.toLocaleString()} / {targetConnections.toLocaleString()}
          </p>
        </div>

        {/* Placeholder para visualização gráfica 3D futurista */}
        {/* <div className="my-12 h-64 bg-white/10 rounded-lg flex items-center justify-center">
          <p className="text-legal-cyan">[Visualização Gráfica Futurista do Progresso Aqui]</p>
        </div> */}

        <Button 
          size="lg" 
          className="bg-legal-cyan text-legal font-bold hover:bg-legal-cyan/90 animate-pulse-glow"
          onClick={() => window.open('https://wa.me/5511SEUNUMERO?text=Ol%C3%A1%21%20Quero%20colaborar%20com%20a%20meta%20da%20LEGAL%21', '_blank')}
        >
          <Target className="mr-2 h-5 w-5" />
          COLABORE COM ESSE NÚMERO
        </Button>
      </div>
    </section>
  );
};

export default NossaMetaSection;
