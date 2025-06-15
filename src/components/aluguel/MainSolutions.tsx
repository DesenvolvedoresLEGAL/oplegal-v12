
import React from 'react';
import { Card } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { 
  Wifi, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Star,
  Antenna,
  Cog
} from 'lucide-react';

const MainSolutions = () => {
  const mainSolutions = [
    {
      name: 'SPEEDY 5G',
      tagline: 'Internet 5G Plug-and-Play',
      description: 'Nossa solução SPEEDY 5G revoluciona o aluguel de internet para eventos corporativos. Com roteadores FWA 5G de última geração, oferecemos conectividade ultra-rápida, estável e de fácil instalação. Ideal para transmissões ao vivo, credenciamento digital, e operações que exigem internet premium temporária.',
      icon: <Zap className="w-8 h-8" />,
      features: [
        'Velocidade até 1 Gbps simétrica',
        'Latência ultra-baixa (<20ms)',
        'Instalação plug-and-play em minutos',
        'Cobertura nacional 5G ampliada',
        'Backup automático 4G integrado',
        'Monitoramento 24/7 com alertas',
        'Gestão remota centralizada',
        'Suporte a múltiplos dispositivos simultâneos'
      ],
      applications: [
        'Eventos corporativos de grande porte',
        'Feiras e exposições industriais',
        'Transmissões ao vivo profissionais',
        'Obras temporárias e canteiros',
        'Congressos médicos e científicos',
        'Festivais e eventos culturais'
      ],
      technicalSpecs: [
        'Bandas: n1, n3, n7, n8, n28, n78',
        'Agregação de portadoras: até 4CC',
        'MIMO: 4x4 DL / 2x2 UL',
        'Antenas: Omnidirecionais integradas',
        'Consumo: <50W',
        'Temperatura: -20°C a +60°C'
      ],
      useCases: [
        {
          title: 'Feira Industrial',
          description: 'Conectividade para 500+ expositores com demonstrações IoT em tempo real'
        },
        {
          title: 'Transmissão Esportiva',
          description: 'Upload de conteúdo 4K simultâneo para múltiplas plataformas'
        },
        {
          title: 'Congresso Médico',
          description: 'Telemedicina e demonstrações cirúrgicas remotas em alta definição'
        }
      ],
      color: 'from-legal to-legal-purple'
    },
    {
      name: 'BLUE6',
      tagline: 'WiFi 6 Profissional',
      description: 'O BLUE6 estabelece o novo padrão para Wi-Fi para congressos e eventos de alta densidade. Nossa infraestrutura de rede para eventos combina access points WiFi 6 de última geração com gestão inteligente, garantindo conectividade premium para milhares de usuários simultâneos.',
      icon: <Wifi className="w-8 h-8" />,
      features: [
        'Tecnologia WiFi 6 (802.11ax) avançada',
        'Suporte robusto a 1000+ dispositivos',
        'Roaming inteligente sem interrupções',
        'QoS dinâmico com priorização',
        'Gestão centralizada em tempo real',
        'Análise de performance detalhada',
        'Segurança WPA3 Enterprise',
        'Balanceamento automático de carga'
      ],
      applications: [
        'Congressos e convenções médicas',
        'Conferências de tecnologia',
        'Eventos esportivos internacionais',
        'Festivais de música e cultura',
        'Centros de convenções',
        'Hotéis e resorts para eventos'
      ],
      technicalSpecs: [
        'Padrão: IEEE 802.11ax (WiFi 6)',
        'Velocidade: até 9.6 Gbps combinado',
        'Frequências: 2.4GHz + 5GHz dual-band',
        'MIMO: 8x8 MU-MIMO',
        'Usuários simultâneos: até 512 por AP',
        'Cobertura: até 150m² por access point'
      ],
      useCases: [
        {
          title: 'Congresso de Cardiologia',
          description: '3.000 médicos conectados simultaneamente para streaming de cirurgias'
        },
        {
          title: 'Tech Conference',
          description: 'Demonstrações de AR/VR com baixa latência para 2.000 participantes'
        },
        {
          title: 'Festival de Música',
          description: 'Compartilhamento social instantâneo para 15.000 visitantes'
        }
      ],
      color: 'from-legal-purple to-legal-cyan'
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nossas Principais Soluções"
          subtitle="Equipamentos de TI para aluguel que garantem conectividade premium e performance máxima para eventos de qualquer porte e complexidade."
          center
        />
        
        <div className="space-y-16">
          {mainSolutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className={`h-2 bg-gradient-to-r ${solution.color}`}></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Main Info */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${solution.color} text-white`}>
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-legal uppercase tracking-wide">
                        {solution.name}
                      </h3>
                      <p className="text-lg font-medium text-legal-purple">{solution.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {solution.description}
                  </p>

                  {/* Technical Specifications */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-legal mb-4 flex items-center">
                      <Cog className="w-5 h-5 mr-2" />
                      Especificações Técnicas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {solution.technicalSpecs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-start text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                          <Antenna className="w-4 h-4 text-legal-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Features & Applications */}
                <div className="p-8 bg-gray-50">
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-legal mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Características Avançadas
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700 bg-white p-3 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-legal-cyan mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-legal-purple mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Aplicações Ideais
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.applications.map((app, appIndex) => (
                        <span key={appIndex} className="bg-legal-purple/10 text-legal-purple px-4 py-2 rounded-full text-sm font-medium border border-legal-purple/20">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h4 className="text-xl font-bold text-legal mb-4 flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Casos de Sucesso
                    </h4>
                    <div className="space-y-4">
                      {solution.useCases.map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className="bg-white p-4 rounded-lg border-l-4 border-legal-cyan">
                          <h5 className="font-bold text-legal mb-2">{useCase.title}</h5>
                          <p className="text-sm text-gray-600">{useCase.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSolutions;
