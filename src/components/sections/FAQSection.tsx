
import React from "react";
import { Plus, Minus } from "lucide-react";
import SectionTitle from "../SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é Smart Events™ e como funciona?",
      answer: "Smart Events™ é nossa plataforma proprietária que integra 5 pilares tecnológicos: Smart Connect (conectividade 5G/WiFi), Smart Sense (sensores IoT), Smart Flow (credenciamento facial), Smart Engage (IA e AR) e Smart Insight (analytics). Funciona como um ecossistema completo que transforma eventos tradicionais em experiências inteligentes e mensuráveis."
    },
    {
      question: "Quanto tempo leva para implementar o Smart Events™?",
      answer: "A implementação completa varia de 90 a 180 dias, dividida em 3 fases: Foundation (0-30 dias) com conectividade e credenciamento facial, Intelligence (30-90 dias) com sensores IoT e IA, e Immersive & Autonomous (90-180 dias) com drones, AR e relatórios preditivos. Cada fase já entrega valor imediato."
    },
    {
      question: "Qual o ROI esperado com Smart Events™?",
      answer: "Nossos clientes reportam aumento médio de 22% na receita por m², redução de 30% nos custos operacionais, aumento de 35% em leads qualificados para expositores e CSAT acima de 95% para participantes. O ROI típico é percebido já no primeiro evento implementado."
    },
    {
      question: "O MAGICPASS™ funciona com todos os tipos de eventos?",
      answer: "Sim, o MAGICPASS™ é adaptável para eventos corporativos, congressos médicos, feiras, festivais e convenções. Suporta desde 100 até 50.000+ participantes, com reconhecimento facial em menos de 1 segundo e precisão de 99.7%. É totalmente LGPD compliant."
    },
    {
      question: "Como funciona a conectividade AERO em eventos grandes?",
      answer: "A solução AERO combina FWA 5G e WiFi de alta densidade, suportando mais de 10.000 dispositivos simultâneos. Utilizamos multiple backhauls, balanceamento inteligente de carga e cobertura redundante. Garantimos 99.9% de uptime mesmo em picos de uso."
    },
    {
      question: "A IA da LEGAL substitui equipes humanas?",
      answer: "Não, nossa IA potencializa equipes humanas. O LinkAI™ facilita networking, o FitScore™ otimiza contratações, e nossos analytics fornecem insights para decisões estratégicas. A tecnologia automatiza tarefas repetitivas, liberando pessoas para atividades de maior valor."
    },
    {
      question: "Quais dados são coletados e como são protegidos?",
      answer: "Coletamos apenas dados necessários para otimizar a experiência: fluxo de pessoas, interações de networking, engajamento em atividades. Todos os dados são criptografados, anonimizados quando possível e armazenados em conformidade com LGPD. Participantes têm controle total sobre seus dados."
    },
    {
      question: "Smart Events™ funciona em eventos híbridos?",
      answer: "Perfeitamente! Nossa plataforma integra participantes presenciais e virtuais em uma experiência única. Streaming 4K, networking entre presenciais e online, credenciamento unificado e analytics consolidados. A experiência é fluida independente do formato de participação."
    },
    {
      question: "Qual o diferencial da LEGAL no mercado?",
      answer: "Somos a única empresa no Brasil que oferece um ecossistema completo para Smart Events™. Criamos e patenteamos tecnologias proprietárias, temos 3.000+ eventos de experiência, NPS de 90 e meta de conectar 1 milhão de pessoas até 2030. Não somos fornecedores, somos parceiros estratégicos."
    },
    {
      question: "Como posso começar com Smart Events™?",
      answer: "Simples: agende uma demonstração gratuita conosco. Fazemos um diagnóstico do seu evento, apresentamos um roadmap personalizado e você pode começar com nossa fase Foundation. Oferecemos suporte completo, treinamento e garantia de resultados."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes sobre Smart Events™"
          subtitle="Tire suas dúvidas sobre como transformar eventos com tecnologia inteligente e descubra por que somos líderes em inovação para eventos."
          center
        />

        <div className="max-w-4xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <h3 className="text-lg font-semibold text-legal pr-4">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA após FAQ */}
          <div className="text-center mt-12 p-8 bg-legal rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="mb-6 text-white/90">
              Nossa equipe especializada está pronta para esclarecer qualquer questão sobre Smart Events™
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contato" 
                className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Falar com Especialista
              </a>
              <a 
                href="tel:+5511999999999" 
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Ligar Agora: (11) 9999-9999
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
