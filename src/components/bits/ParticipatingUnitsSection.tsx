import React from 'react';
import { Wifi, Brain, Package, Building } from 'lucide-react';

const units = [
  { name: "ASSINATURA", description: "Conectividade FWA e soluções de rede.", icon: Wifi, color: "text-sky-400" },
  { name: "AI", description: "Inteligência Artificial para eventos e negócios.", icon: Brain, color: "text-purple-400" },
  { name: "ALUGUE", description: "Equipamentos audiovisuais e de TI.", icon: Package, color: "text-amber-400" },
  { name: "AERO", description: "Drones e soluções aéreas inteligentes.", icon: Building, color: "text-teal-400" },
];

const ParticipatingUnitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-legal-purple mb-12">Unidades Participantes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {units.map((unit) => (
            <div key={unit.name} className={`p-6 rounded-lg shadow-lg border-t-4 ${unit.color.replace('text-','border-')} bg-bits-lightGray hover:shadow-xl transition-shadow`}>
              <unit.icon size={48} className={`mb-4 ${unit.color}`} />
              <h3 className={`text-2xl font-bold ${unit.color} mb-2`}>{unit.name}</h3>
              <p className="text-gray-700">{unit.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-12 text-lg">
          Qualquer serviço contratado em uma dessas unidades da LEGAL acumula BITS para você!
        </p>
      </div>
    </section>
  );
};

export default ParticipatingUnitsSection;
