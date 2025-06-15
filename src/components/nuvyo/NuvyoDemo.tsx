
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Camera, Video, Eye } from 'lucide-react';

const NuvyoDemo = () => {
  const demoVideos = [
    {
      title: "Casamento Cinematográfico",
      description: "Veja como capturamos a magia de um casamento com perspectivas aéreas únicas",
      thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&h=450",
      duration: "2:30",
      category: "Eventos Sociais"
    },
    {
      title: "Lançamento Imobiliário",
      description: "Filmagem aérea completa de empreendimento imobiliário de alto padrão",
      thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&h=450",
      duration: "1:45",
      category: "Imobiliário"
    },
    {
      title: "Evento Corporativo",
      description: "Cobertura profissional de convenção empresarial com qualidade broadcast",
      thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&h=450",
      duration: "3:15",
      category: "Corporativo"
    }
  ];

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-legal to-legal-purple text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Veja o Nuvyo em Ação"
          subtitle="Demonstrações reais dos nossos trabalhos em diferentes segmentos e aplicações"
          center
          light
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {demoVideos.map((video, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-legal-cyan rounded-full p-4 cursor-pointer transform scale-100 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-legal-cyan/90 text-white px-2 py-1 rounded text-xs font-bold">
                  {video.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{video.title}</h3>
                <p className="text-legal-cyan text-sm leading-relaxed">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <Camera className="w-6 h-6 mr-3 text-legal-cyan" />
              <span className="text-lg">Fotografia 4K/8K</span>
            </div>
            <div className="flex items-center justify-center">
              <Video className="w-6 h-6 mr-3 text-legal-cyan" />
              <span className="text-lg">Filmagem Cinematográfica</span>
            </div>
            <div className="flex items-center justify-center">
              <Eye className="w-6 h-6 mr-3 text-legal-cyan" />
              <span className="text-lg">Transmissão ao Vivo</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal font-bold">
              <Link to="/contato?subject=nuvyo-demo">
                Agendar Demonstração
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-legal">
              <Link to="/contato?subject=nuvyo-portfolio">
                Ver Portfólio Completo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuvyoDemo;
