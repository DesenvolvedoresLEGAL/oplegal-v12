
import React from 'react';
import { Target } from 'lucide-react';
import Card from '@/components/Card';
import SectionTitle from '@/components/SectionTitle';

const BenchmarksSection = () => {
  const benchmarks = [
    {
      event: "Consumer Electronics Show (CES)",
      location: "Las Vegas, EUA",
      smartFeatures: ["Credenciamento biométrico", "Navegação AR", "Matching por IA"]
    },
    {
      event: "Web Summit",
      location: "Lisboa, Portugal",
      smartFeatures: ["App com ML para networking", "Análise de tráfego em tempo real", "QR codes dinâmicos"]
    },
    {
      event: "South by Southwest (SXSW)",
      location: "Austin, EUA",
      smartFeatures: ["Experiências imersivas", "Blockchain para credenciamento", "Áreas com IoT"]
    },
    {
      event: "Mobile World Congress (MWC)",
      location: "Barcelona, Espanha",
      smartFeatures: ["Demonstrações 5G", "Digital twins", "Robôs de atendimento"]
    }
  ];

  return (
    <section className="py-20 bg-white" id="benchmarks">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Benchmarks Globais"
          subtitle="A LEGAL democratiza no Brasil as tecnologias já utilizadas nos maiores eventos do mundo."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {benchmarks.map((benchmark, index) => (
            <Card
              key={index}
              title={benchmark.event}
              subtitle={benchmark.location}
              icon={<Target size={36} />}
              className="h-full"
            >
              <div className="mt-4">
                <p className="font-medium text-legal mb-2">Smart Features:</p>
                <ul className="styled-list">
                  {benchmark.smartFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenchmarksSection;
