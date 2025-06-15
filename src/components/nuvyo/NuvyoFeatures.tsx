
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Video, Image, Film, Zap, Shield, Clock } from 'lucide-react';

const NuvyoFeatures = () => {
  const features = [
    {
      icon: <Video className="w-12 h-12 text-legal-cyan" />,
      title: "Filmagem 4K/8K HDR",
      description: "Vídeos em ultra alta definição com qualidade cinematográfica e tecnologia HDR para máxima qualidade visual.",
      details: ["Resolução até 8K", "60fps estabilizado", "HDR para maior contraste", "Cores vibrantes e naturais"]
    },
    {
      icon: <Camera className="w-12 h-12 text-legal-cyan" />,
      title: "Fotografia Aérea Premium",
      description: "Imagens aéreas de alta resolução com composição profissional para marketing, eventos e documentação.",
      details: ["Resolução até 48MP", "RAW + JPEG", "Múltiplas perspectivas", "Edição profissional incluída"]
    },
    {
      icon: <Film className="w-12 h-12 text-legal-cyan" />,
      title: "Edição Cinematográfica",
      description: "Pós-produção completa com correção de cor, estabilização e efeitos especiais para resultado profissional.",
      details: ["Color grading profissional", "Estabilização avançada", "Efeitos visuais", "Trilha sonora original"]
    },
    {
      icon: <Camera className="w-12 h-12 text-legal-cyan" />,
      title: "Equipamentos de Última Geração",
      description: "Utilizamos os melhores drones do mercado com câmeras profissionais e tecnologia de estabilização avançada.",
      details: ["DJI Inspire 2", "DJI Mavic 3 Pro", "Câmeras Hasselblad", "Gimbal 3 eixos"]
    },
    {
      icon: <Zap className="w-12 h-12 text-legal-cyan" />,
      title: "Transmissão ao Vivo",
      description: "Streaming em tempo real para redes sociais e plataformas digitais diretamente do drone durante o voo.",
      details: ["Streaming 4K", "Múltiplas plataformas", "Baixa latência", "Qualidade broadcast"]
    },
    {
      icon: <Shield className="w-12 h-12 text-legal-cyan" />,
      title: "Operação Segura e Legal",
      description: "Pilotos certificados ANAC com seguro completo e todas as autorizações necessárias para voos urbanos.",
      details: ["Certificação ANAC", "Seguro contra terceiros", "Autorizações DECEA", "Plano de voo aprovado"]
    },
    {
      icon: <Clock className="w-12 h-12 text-legal-cyan" />,
      title: "Entrega Rápida",
      description: "Material editado e entregue em até 5 dias úteis com possibilidade de entrega expressa em 24h.",
      details: ["Entrega em 5 dias", "Opção expressa 24h", "Preview em 2 dias", "Revisões incluídas"]
    },
    {
      icon: <Image className="w-12 h-12 text-legal-cyan" />,
      title: "Pacotes Customizados",
      description: "Soluções personalizadas para cada tipo de projeto, desde eventos íntimos até grandes produções comerciais.",
      details: ["Projetos sob medida", "Preços competitivos", "Múltiplas locações", "Suporte completo"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Recursos Profissionais do Nuvyo"
          subtitle="Combinamos tecnologia de ponta com expertise técnica para entregar resultados excepcionais em filmagem e fotografia aérea"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-legal/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-legal group-hover:text-legal-purple transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-center">
                  {feature.description}
                </p>
                <ul className="text-sm space-y-1">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-legal-cyan rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuvyoFeatures;
