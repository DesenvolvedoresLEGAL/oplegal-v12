import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Check } from 'lucide-react';

const GalaxiaDifferentials = () => {
  const differentials = [
    "IA tailor-made, sem soluções engessadas",
    "Integração com seus sistemas atuais", 
    "Setup rápido + suporte contínuo",
    "Foco em eficiência + receita (não só tecnologia)"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Diferenciais LEGAL"
          subtitle="Por que escolher a GalaxIA™ para transformar seu negócio"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-legal-primary/5 to-legal-secondary/5 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="bg-legal-tertiary rounded-full p-2 flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-legal-primary" />
                </div>
                <p className="text-lg font-medium text-legal-primary font-haas">
                  {differential}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 font-haas max-w-3xl mx-auto">
              Na <strong className="text-legal-primary">LEGAL</strong>, não vendemos tecnologia. 
              Vendemos <strong className="text-legal-secondary">transformação</strong> através da IA 
              mais avançada do mercado, feita especificamente para o seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalaxiaDifferentials;