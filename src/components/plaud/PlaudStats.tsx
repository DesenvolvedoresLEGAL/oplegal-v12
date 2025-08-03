import React from "react";

const PlaudStats = () => {
  const stats = [
    {
      number: "50k+",
      label: "Profissionais usando",
      description: "Em empresas Fortune 500"
    },
    {
      number: "2M+",
      label: "Horas gravadas",
      description: "Processadas mensalmente"
    },
    {
      number: "98%",
      label: "Precisão de transcrição",
      description: "Em 112 idiomas"
    },
    {
      number: "40%",
      label: "Aumento de produtividade",
      description: "Reportado pelos usuários"
    },
    {
      number: "5h",
      label: "Economizadas por semana",
      description: "Por profissional"
    },
    {
      number: "99.9%",
      label: "Uptime garantido",
      description: "Serviço sempre disponível"
    }
  ];

  return (
    <section className="py-20 bg-legal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-legal via-legal-purple to-legal-secondary opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Números que Impressionam
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            O Plaud está transformando a forma como profissionais trabalham em todo o mundo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <div className="text-4xl lg:text-5xl font-bold text-legal-cyan mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Reconhecimento da Indústria</h3>
            <p className="text-white/90">Premiado pelas principais publicações de tecnologia</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-legal-cyan text-2xl font-bold mb-2">#1</div>
              <div className="font-semibold mb-1">AI Voice Recorder</div>
              <div className="text-sm text-white/80">PCMag 2024</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-legal-cyan text-2xl font-bold mb-2">4.8/5</div>
              <div className="font-semibold mb-1">User Rating</div>
              <div className="text-sm text-white/80">App Store & Google Play</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-legal-cyan text-2xl font-bold mb-2">CES</div>
              <div className="font-semibold mb-1">Innovation Award</div>
              <div className="text-sm text-white/80">2024 Winner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaudStats;