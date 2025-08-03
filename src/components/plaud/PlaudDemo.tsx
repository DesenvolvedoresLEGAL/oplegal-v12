import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Download, Calendar } from "lucide-react";
import SectionTitle from "../SectionTitle";

const PlaudDemo = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Veja o Plaud em Ação"
          subtitle="Assista como o Plaud transforma suas conversas em insights acionáveis em tempo real"
          center={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Demo */}
          <div className="relative">
            <div className="aspect-video bg-legal/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop"
                alt="Demo do Plaud em reunião"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button size="lg" className="bg-white text-legal hover:bg-white/90 rounded-full h-16 w-16 p-0">
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-sm font-medium text-legal">🔴 Gravando em tempo real</span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
                <Play className="mr-2 h-4 w-4" />
                Assistir Demo Completa (3 min)
              </Button>
            </div>
          </div>

          {/* Demo Steps */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-legal text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-legal mb-2">Grave com Um Toque</h3>
                <p className="text-gray-600">
                  Simples pressionar para iniciar. O Plaud captura áudio cristalino mesmo em ambientes ruidosos.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-legal text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-legal mb-2">Transcrição Automática</h3>
                <p className="text-gray-600">
                  A IA processa em tempo real, identificando speakers e criando transcrições precisas automaticamente.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-legal text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-legal mb-2">Resumos Inteligentes</h3>
                <p className="text-gray-600">
                  Receba resumos estruturados com pontos-chave, decisões e próximos passos organizados.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-legal text-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-legal mb-2">Compartilhe Instantaneamente</h3>
                <p className="text-gray-600">
                  Distribua resultados para sua equipe via email, Slack, Teams ou suas ferramentas favoritas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-legal mb-4">Solicite um Orçamento de Locação</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Receba uma proposta personalizada para seu evento ou projeto. Entrega rápida e suporte completo inclusos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-legal text-white hover:bg-legal/90">
              <Download className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Button>
            <Button size="lg" variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Demonstração
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Entrega em 24h para Grande São Paulo • Suporte técnico incluso • Configuração gratuita
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlaudDemo;