
import React from 'react';
import { CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const MaturityModelSection = () => {
  const maturityLevels = [
    {
      level: "Tradicional",
      description: "Processos manuais, dados isolados, experiência analógica",
      features: ["Credenciamento manual", "WiFi básico ou inexistente", "Relatórios pós-evento", "Sem dados em tempo real"]
    },
    {
      level: "Digitalizado",
      description: "Algumas ferramentas digitais, mas sem integração",
      features: ["Credenciamento digital", "WiFi padrão", "Apps isolados", "Alguns relatórios digitais"]
    },
    {
      level: "Conectado",
      description: "Sistemas integrados e experiência digital ampliada",
      features: ["QR codes e NFC", "WiFi estruturado", "Apps integrados", "Dashboard unificado"]
    },
    {
      level: "Smart",
      description: "Totalmente autônomo, dados em tempo real, experiência sem atrito",
      features: ["Reconhecimento facial", "5G dedicado", "IA e AR/VR", "ROI em tempo real"]
    },
  ];

  return (
    <section className="py-20 bg-white" id="maturidade">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Modelo de Maturidade Smart Events™"
          subtitle="Identifique em que nível seu evento está hoje e descubra o caminho para transformá-lo em um Smart Event™."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {maturityLevels.map((level, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                index === 3
                  ? "bg-legal text-white"
                  : index === 2
                  ? "bg-white border-2 border-legal"
                  : "bg-white"
              } transition-all hover:shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                  index === 3 ? "bg-white text-legal" : "bg-legal text-white"
                }`}>
                  {index + 1}
                </div>
                <h3 className={`text-xl font-bold ${
                  index === 3 ? "text-white" : "text-legal"
                }`}>
                  {level.level}
                </h3>
              </div>
              <p className={`mb-4 ${
                index === 3 ? "text-gray-100" : "text-gray-600"
              }`}>
                {level.description}
              </p>
              <ul className={`space-y-2 ${
                index === 3 ? "text-white" : ""
              }`}>
                {level.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className={`w-5 h-5 mr-2 flex-shrink-0 ${
                      index === 3 ? "text-white" : "text-legal-cyan"
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaturityModelSection;
