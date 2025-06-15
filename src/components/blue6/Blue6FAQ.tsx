
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Blue6FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para instalar o Blue6?",
      answer: "A instalação completa do Blue6 leva entre 2-4 horas, dependendo da complexidade do ambiente. Isso inclui configuração de hardware, setup da rede, customização do captive portal e testes de performance. Nossa equipe técnica realiza todo o processo."
    },
    {
      question: "Quantos usuários simultâneos o Blue6 suporta?",
      answer: "Cada ponto de acesso Blue6 suporta até 500 usuários simultâneos com performance otimizada. Para ambientes maiores, múltiplos pontos podem ser gerenciados centralmente através da mesma interface, escalando para milhares de usuários."
    },
    {
      question: "Como funciona a segurança do Blue6?",
      answer: "O Blue6 utiliza protocolo WPA3, criptografia individual por dispositivo, firewall integrado com filtragem de conteúdo e sistema de detecção de intrusões. Também oferece isolamento de rede por perfil de usuário e logs detalhados de acesso."
    },
    {
      question: "Posso personalizar o captive portal com minha marca?",
      answer: "Sim! O captive portal é totalmente personalizável com suas cores, logo, textos e campos de cadastro específicos. Você pode coletar dados dos usuários, integrar com CRM e criar experiências únicas de boas-vindas."
    },
    {
      question: "Qual é o alcance de cobertura do Blue6?",
      answer: "Em ambientes internos, o alcance é de até 100 metros. Em áreas externas, pode chegar até 2km dependendo das condições do ambiente. Para cobertura maior, recomendamos múltiplos pontos de acesso com roaming seamless."
    },
    {
      question: "O Blue6 funciona sem internet?",
      answer: "O Blue6 pode operar em modo local para acesso a recursos internos, mas para funcionalidades completas como captive portal, analytics na nuvem e atualizações automáticas, é necessária conexão com internet."
    },
    {
      question: "Como é feita a gestão de múltiplos pontos de acesso?",
      answer: "Através do painel web centralizado ou app mobile, você gerencia todos os pontos Blue6 de forma unificada. Configurações, monitoramento, relatórios e atualizações são sincronizadas automaticamente entre todos os equipamentos."
    },
    {
      question: "Qual suporte técnico está incluído?",
      answer: "Suporte técnico 24/7 via chat, email e telefone, instalação e configuração inicial incluídas, treinamento da equipe, monitoramento proativo e atualizações automáticas de firmware sem custo adicional."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Tire todas suas dúvidas sobre o Blue6 e como ele pode transformar sua conectividade WiFi"
          center
        />
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline font-semibold text-legal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Blue6FAQ;
