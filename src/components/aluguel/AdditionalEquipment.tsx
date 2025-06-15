
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';
import { 
  Server, 
  Shield, 
  Laptop, 
  Monitor, 
  Smartphone, 
  Radio, 
  HardDrive, 
  Headphones,
  ArrowRight
} from 'lucide-react';

const AdditionalEquipment = () => {
  const additionalEquipment = [
    { 
      name: 'Switches Gerenciáveis', 
      icon: <Server className="w-6 h-6" />, 
      description: 'Switches profissionais Cisco e HP para infraestrutura de rede robusta e escalável',
      specs: 'Até 48 portas Gigabit, PoE+, gestão SNMP'
    },
    { 
      name: 'Firewalls Empresariais', 
      icon: <Shield className="w-6 h-6" />, 
      description: 'Proteção avançada FortiGate e SonicWall para redes corporativas',
      specs: 'Throughput até 10Gbps, VPN SSL, filtro de conteúdo'
    },
    { 
      name: 'Notebooks Premium', 
      icon: <Laptop className="w-6 h-6" />, 
      description: 'Laptops Dell, HP e Lenovo de alta performance para equipes técnicas',
      specs: 'Intel i7/i9, 16-32GB RAM, SSD NVMe, tela 4K'
    },
    { 
      name: 'Totens Interativos', 
      icon: <Monitor className="w-6 h-6" />, 
      description: 'Displays touch 4K para credenciamento, wayfinding e informações',
      specs: 'Telas 32-75", touch capacitivo, Windows/Android'
    },
    { 
      name: 'Tablets Corporativos', 
      icon: <Smartphone className="w-6 h-6" />, 
      description: 'iPad Pro e Samsung Galaxy Tab para gestão móvel e controle',
      specs: 'Tela 12.9", 5G/WiFi 6, aplicativos customizados'
    },
    { 
      name: 'Rádios Comunicação', 
      icon: <Radio className="w-6 h-6" />, 
      description: 'Sistema Motorola e Hytera para comunicação da equipe operacional',
      specs: 'Alcance 5km, canais criptografados, GPS integrado'
    },
    { 
      name: 'Servidores Locais', 
      icon: <HardDrive className="w-6 h-6" />, 
      description: 'Infraestrutura Dell PowerEdge para dados locais e aplicações críticas',
      specs: 'Processadores Xeon, até 1TB RAM, storage SSD'
    },
    { 
      name: 'Headsets Profissionais', 
      icon: <Headphones className="w-6 h-6" />, 
      description: 'Equipamentos Sennheiser e Audio-Technica para transmissões',
      specs: 'Cancelamento de ruído, wireless, qualidade broadcast'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Equipamentos Complementares"
          subtitle="Infraestrutura completa de TI para eventos de qualquer complexidade, com especificações técnicas detalhadas e suporte especializado."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {additionalEquipment.map((equipment, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 bg-legal text-white rounded-full flex items-center justify-center group-hover:bg-legal-purple transition-colors">
                {equipment.icon}
              </div>
              <h3 className="text-lg font-bold text-legal mb-2">{equipment.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{equipment.description}</p>
              <div className="bg-legal/5 p-2 rounded text-xs text-gray-500 border border-legal/10">
                <strong>Specs:</strong> {equipment.specs}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-legal/5 to-legal-purple/5 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-legal mb-4">Equipamento Não Listado?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nossa equipe especializada pode providenciar praticamente qualquer solução tecnológica para seu evento. 
            Temos parcerias com os principais fornecedores globais e capacidade de importação expressa.
          </p>
          <Button asChild className="bg-legal hover:bg-legal/90 text-white">
            <Link to="/contato?solution=equipamentos-especiais">
              Solicitar Equipamento Específico
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdditionalEquipment;
