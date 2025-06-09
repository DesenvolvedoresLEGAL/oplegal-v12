import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Trophy, BarChart, Star, MapPin, Award, TrendingUp } from 'lucide-react';

const VisaoSection = () => {
  const metrics = [
    {
      icon: BarChart,
      title: "Market Share",
      description: "Liderança de mercado"
    },
    {
      icon: Star,
      title: "NPS",
      description: "Satisfação excepcional"
    },
    {
      icon: TrendingUp,
      title: "Receita",
      description: "Crescimento sustentável"
    },
    {
      icon: MapPin,
      title: "Presença Nacional",
      description: "Em todo o Brasil"
    },
    {
      icon: Award,
      title: "Cultura Reconhecida",
      description: "Referência no mercado"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-legal/5 to-legal-purple/5">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="🛰 NOSSA VISÃO"
          subtitle="Onde queremos chegar e como vamos medir nosso sucesso"
          center
        />
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-legal-purple to-legal-cyan text-white rounded-2xl shadow-2xl mb-8">
            <Trophy size={48} className="mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Ser a maior e melhor TechCo do Brasil até 2034
            </h2>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-legal mb-12">📌 Medimos isso por:</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center card-hover border-b-4 border-legal-cyan">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-legal-cyan/20 rounded-full mb-4">
                  <metric.icon size={28} className="text-legal" />
                </div>
                <h4 className="text-lg font-bold text-legal mb-2">{metric.title}</h4>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white p-6 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700">
                <strong className="text-legal">Marcas que confiam na LEGAL</strong><br />
                Construindo parcerias sólidas e duradouras
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaoSection;
