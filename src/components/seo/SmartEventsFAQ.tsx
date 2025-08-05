import React from 'react';
import FAQPageSchema from './FAQPageSchema';

const SmartEventsFAQ: React.FC = () => {
  const smartEventsFAQs = [
    {
      question: "O que são Smart Events™?",
      answer: "Smart Events™ são eventos com infraestrutura tecnológica 100% integrada, combinando Inteligência Artificial, conectividade 5G, drones, IoT e análise de dados em tempo real. Eles transformam eventos tradicionais em experiências 10x mais conectadas, imersivas e lucrativas."
    },
    {
      question: "Como funciona o credenciamento facial FacePass™?",
      answer: "O FacePass™ utiliza tecnologia de reconhecimento facial biométrico para eliminar filas de entrada. Os participantes se cadastram previamente, e na chegada ao evento, basta olhar para a câmera para ter acesso liberado instantaneamente. O sistema reduz fraudes em 99% e acelera o processo de entrada em até 300%."
    },
    {
      question: "Qual é o ROI dos Smart Events™?",
      answer: "Eventos que implementam Smart Events™ registram redução média de 40% nos custos operacionais, aumento de 300% no engajamento dos participantes e incremento de 250% na efetividade do networking. O ROI típico é recuperado em 2-3 eventos."
    },
    {
      question: "Como funciona a conectividade 5G FWA da AERO?",
      answer: "A tecnologia FWA (Fixed Wireless Access) 5G da AERO oferece internet de alta velocidade via ondas de rádio, sem necessidade de cabeamento. Fornecemos velocidades de até 1Gbps, ideal para eventos que precisam de conectividade premium para streaming, IoT e aplicações em tempo real."
    },
    {
      question: "O LinkAI™ realmente melhora o networking em eventos?",
      answer: "Sim, o LinkAI™ utiliza algoritmos de IA para analisar perfis, interesses e objetivos dos participantes, sugerindo conexões altamente relevantes. Eventos com LinkAI™ registram aumento de 250% em conexões qualificadas e 40% mais negócios fechados durante o evento."
    },
    {
      question: "Os Smart Events™ são seguros em termos de dados?",
      answer: "Absolutamente. Todos os nossos sistemas são certificados ISO 27001 e seguem rigorosamente a LGPD. Os dados biométricos do FacePass™ são criptografados e armazenados com as mais altas medidas de segurança. Temos conformidade total com regulamentações brasileiras e internacionais."
    },
    {
      question: "Qual o tempo de implementação de um Smart Event™?",
      answer: "A implementação varia conforme o escopo, mas tipicamente leva de 2-4 semanas para eventos médios e 4-8 semanas para eventos complexos. Oferecemos suporte 24/7 durante todo o processo e treinamento completo para as equipes."
    },
    {
      question: "Os Smart Events™ funcionam para eventos de qualquer tamanho?",
      answer: "Sim, nossa plataforma é escalável desde eventos corporativos de 50 pessoas até grandes conferências com +50.000 participantes. Adaptamos a infraestrutura tecnológica conforme o porte e necessidades específicas de cada evento."
    },
    {
      question: "Como os drones AERO são utilizados nos eventos?",
      answer: "Os drones AERO oferecem múltiplas funcionalidades: transmissão de internet via 5G para áreas remotas, filmagem aérea em tempo real, monitoramento de segurança, entrega de materiais e criação de experiências imersivas. Cada drone é operado por pilotos certificados ANAC."
    },
    {
      question: "Posso integrar Smart Events™ com meus sistemas existentes?",
      answer: "Sim, nossa plataforma possui APIs robustas e conectores nativos para os principais sistemas de gestão de eventos (CRM, ERP, plataformas de registro). Garantimos integração seamless sem interromper seus processos atuais."
    }
  ];

  return <FAQPageSchema faqs={smartEventsFAQs} pageUrl="https://operadora.legal/smart-events" />;
};

export default SmartEventsFAQ;