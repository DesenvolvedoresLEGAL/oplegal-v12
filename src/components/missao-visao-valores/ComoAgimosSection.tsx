
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { CheckCircle, X } from 'lucide-react';

const ComoAgimosSection = () => {
  const comoAgimos = [
    "Com velocidade inteligente",
    "Com atitude protagonista", 
    "Com dados na mão e coração no que fazemos",
    "Com coragem para errar rápido, corrigir mais rápido ainda",
    "Com unidade e linguagem com todos da empresa"
  ];

  const comoNaoAgimos = [
    "Terceirizando culpa",
    "Empurrando com a barriga",
    "Romantizando problemas", 
    "Com passividade ou negatividade",
    "Fugindo de feedbacks reais"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="COMO AGIMOS"
          subtitle="Os comportamentos que praticamos e os que evitamos"
          center
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Como Agimos */}
            <div className="bg-gradient-to-br from-green-50 to-legal-cyan/10 p-8 rounded-2xl border-t-4 border-green-500">
              <div className="flex items-center mb-8">
                <CheckCircle size={32} className="text-green-500 mr-4" />
                <h3 className="text-2xl font-bold text-legal">✅ Como Agimos</h3>
              </div>
              
              <ul className="space-y-4">
                {comoAgimos.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Como NÃO Agimos */}
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-8 rounded-2xl border-t-4 border-red-500">
              <div className="flex items-center mb-8">
                <X size={32} className="text-red-500 mr-4" />
                <h3 className="text-2xl font-bold text-legal">❌ Como NÃO Agimos</h3>
              </div>
              
              <ul className="space-y-4">
                {comoNaoAgimos.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <X size={20} className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-legal text-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Consistência é a Chave</h3>
              <p className="text-lg opacity-90 max-w-2xl">
                Estes comportamentos não são apenas ideais – são práticas diárias que 
                moldam nossa cultura e garantem que nossa missão se torne realidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoAgimosSection;
