
import React from 'react';

const SmartEventsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-legal-black text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-legal to-legal-black opacity-80"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIHN0cm9rZT0iIzE5MTk3MDIwIiBmaWxsPSJub25lIiAvPjxwYXRoIGQ9Ik0gNjAgMCBMIDYwIDYwIiBzdHJva2U9IiMxOTE5NzAyMCIgZmlsbD0ibm9uZSIgLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-20"></div>

      {/* Floating elements */}
      <div className="absolute w-64 h-64 rounded-full bg-legal-green blur-[100px] top-20 -left-20 opacity-20 animate-pulse"></div>
      <div className="absolute w-96 h-96 rounded-full bg-legal blur-[120px] bottom-0 right-0 opacity-20 animate-pulse" style={{
        animationDelay: "1s"
      }}></div>

      <div className="container mx-auto px-4 z-10 py-24">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-legal-green bg-opacity-20 text-legal-green px-4 py-2 rounded-full text-sm font-medium mb-6">O novo padrão para eventos</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            Smart Events™
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            O novo padrão para eventos com tecnologia 100% integrada — IA, 5G, drones, IoT e dados em tempo real.
          </p>
          <p className="text-lg mb-12 text-gray-300">
            Criado pela LEGAL — pioneira no Brasil no conceito de eventos inteligentes.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <p className="text-xl font-semibold">
              "Transforme eventos em experiências 10x mais conectadas, imersivas e lucrativas."
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default SmartEventsHero;
