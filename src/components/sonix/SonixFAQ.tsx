
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const SonixFAQ = () => {
  const faqs = [
    {
      question: "Quais formatos de áudio o Sonix suporta?",
      answer: "O Sonix suporta todos os principais formatos de áudio incluindo MP3, WAV, M4A, FLAC, OGG e mais de 20 outros formatos. Também processamos áudio de vídeos MP4, AVI, MOV e outros formatos multimídia."
    },
    {
      question: "Como funciona a análise de sentimentos?",
      answer: "Nossa IA analisa tom de voz, velocidade da fala, pausas e conteúdo linguístico para identificar emoções como alegria, frustração, ansiedade e confiança. Os resultados são apresentados em tempo real com métricas de confiança."
    },
    {
      question: "O Sonix funciona com áudio ao vivo?",
      answer: "Sim! O Sonix processa áudio em tempo real com latência menor que 200ms. Ideal para reuniões ao vivo, webinars, atendimento ao cliente e transmissões onde você precisa de insights imediatos."
    },
    {
      question: "Posso integrar o Sonix com outras ferramentas?",
      answer: "Absolutamente! Oferecemos APIs REST robustas, webhooks, integrações nativas com Slack, Teams, Zoom, Google Meet e SDKs para principais linguagens de programação. Também suportamos integrações via Zapier."
    },
    {
      question: "Como vocês garantem a segurança dos dados?",
      answer: "Utilizamos criptografia AES-256 em trânsito e em repouso, data centers certificados SOC 2, conformidade total com LGPD e opção de processamento on-premise para máxima segurança. Seus dados nunca são compartilhados."
    },
    {
      question: "Qual é a precisão da transcrição?",
      answer: "Nossa IA alcança 99,5% de precisão em condições ideais e 95%+ mesmo com ruído de fundo. A precisão melhora continuamente com nossos modelos de machine learning que são atualizados mensalmente."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre como o Sonix pode transformar seu conteúdo de áudio"
          center
        />
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-legal font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
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

export default SonixFAQ;
