import React from "react";
import SectionTitle from "../SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, FileText, Brain, Languages, Users, Clock, Shield, Cloud } from "lucide-react";

const PlaudFeatures = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Gravação Crystal Clear",
      description: "Tecnologia de microfone avançada para capturar áudio com qualidade profissional em qualquer ambiente"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Transcrição Instantânea",
      description: "Converte automaticamente suas gravações em texto com precisão de 98% em tempo real"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Resumos Inteligentes",
      description: "IA gera resumos estruturados com pontos-chave, decisões e próximos passos automaticamente"
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "112 Idiomas",
      description: "Suporte nativo para transcrição e tradução em mais de 112 idiomas e dialetos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Identificação de Speakers",
      description: "Reconhece e separa automaticamente diferentes vozes na conversa para melhor organização"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Bateria de Longa Duração",
      description: "30 horas de gravação contínua e até 60 dias em standby com uma única carga"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança Avançada",
      description: "Criptografia end-to-end e opções de armazenamento local para máxima privacidade"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Sync na Nuvem",
      description: "Sincronização automática com armazenamento ilimitado na nuvem e acesso multiplataforma"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Recursos Avançados do Plaud"
          subtitle="Tecnologia de ponta para transformar suas conversas em insights acionáveis"
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-legal/10 text-legal rounded-xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-legal">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specifications Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8" id="especificacoes">
          <h3 className="text-2xl font-bold text-center mb-8 text-legal">Especificações Técnicas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-legal">Hardware</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Dimensões: 95 x 18 x 8mm</li>
                <li>• Peso: 30g (ultra leve)</li>
                <li>• Microfone omnidirecional de alta qualidade</li>
                <li>• Conectividade: USB-C, Bluetooth 5.0</li>
                <li>• Armazenamento interno: 64GB</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-legal">Bateria & Performance</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 30 horas de gravação contínua</li>
                <li>• 60 dias em modo standby</li>
                <li>• Carregamento rápido USB-C</li>
                <li>• Indicador LED de status</li>
                <li>• Ativação por toque</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-legal">Software & IA</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 112 idiomas suportados</li>
                <li>• Precisão de transcrição: 98%+</li>
                <li>• 15+ templates de resumo</li>
                <li>• Apps iOS, Android e Web</li>
                <li>• API para integrações</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaudFeatures;