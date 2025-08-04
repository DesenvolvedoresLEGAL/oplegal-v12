import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "../SectionTitle";

const PlaudFAQ = () => {
  const faqs = [
    {
      question: "Como o Plaud funciona?",
      answer: "O Plaud é um gravador de voz ultra portátil com IA integrada. Você pressiona um botão para gravar, e o dispositivo captura áudio com qualidade profissional. A IA processa automaticamente a gravação, criando transcrições precisas em tempo real e gerando resumos estruturados com pontos-chave, decisões e próximos passos."
    },
    {
      question: "Quantos idiomas o Plaud suporta?",
      answer: "O Plaud suporta transcrição em 112 idiomas e dialetos, incluindo português brasileiro, inglês, espanhol, francês, alemão, mandarim, japonês e muitos outros. A IA também pode traduzir automaticamente entre idiomas durante o processamento."
    },
    {
      question: "Quanto tempo dura a bateria?",
      answer: "O Plaud oferece até 30 horas de gravação contínua com uma única carga. Em modo standby, a bateria dura até 60 dias. O carregamento é feito via USB-C e leva aproximadamente 2 horas para carga completa."
    },
    {
      question: "Os dados ficam seguros e privados?",
      answer: "Sim, a segurança é nossa prioridade. O Plaud usa criptografia end-to-end para todas as gravações. Você pode escolher armazenar dados localmente no dispositivo ou na nuvem com criptografia de nível bancário. Nunca acessamos seu conteúdo sem permissão."
    },
    {
      question: "Posso usar em reuniões do Zoom ou Teams?",
      answer: "Sim! O Plaud funciona perfeitamente com qualquer aplicativo de videoconferência. Simplesmente coloque o dispositivo próximo ao seu computador ou telefone. A IA irá capturar e transcrever tanto sua voz quanto a dos outros participantes da reunião."
    },
    {
      question: "Existe um app mobile?",
      answer: "Sim, oferecemos apps nativos para iOS e Android, além de uma versão web. Todos sincronizam automaticamente com seu dispositivo Plaud, permitindo acesso às suas gravações e transcrições em qualquer lugar."
    },
    {
      question: "Qual é a precisão da transcrição?",
      answer: "Nossa IA oferece precisão de transcrição superior a 98% em condições normais. A precisão pode variar dependendo da qualidade do áudio, ruído ambiente e clareza da fala, mas nossa tecnologia está constantemente melhorando através de machine learning."
    },
    {
      question: "Posso compartilhar os resumos com minha equipe?",
      answer: "Absolutamente! O Plaud se integra com Slack, Microsoft Teams, email, e outras ferramentas de colaboração. Você pode compartilhar resumos, transcrições ou gravações originais com um clique, mantendo controle total sobre permissões e acesso."
    },
    {
      question: "Existe período de teste gratuito?",
      answer: "Sim, oferecemos 14 dias de teste gratuito com acesso completo a todos os recursos. Não é necessário cartão de crédito para começar. Após o período de teste, você pode escolher o plano que melhor atende suas necessidades."
    },
    {
      question: "O que está incluído na compra?",
      answer: "Na compra do Plaud você recebe: o dispositivo, cabo USB-C, manual de instruções, 1 ano de garantia, e 3 meses grátis de nossa plataforma premium com IA avançada e armazenamento ilimitado na nuvem."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre o Plaud e descubra como ele pode transformar sua produtividade"
          center={true}
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg">
                  <span className="font-semibold text-legal pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-legal mb-4">Ainda tem dúvidas?</h3>
          <p className="text-gray-600 mb-6">
            Nossa equipe de especialistas está pronta para ajudar você a escolher a melhor solução.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato?produto=plaud" 
              className="inline-flex items-center justify-center px-6 py-3 bg-legal text-white rounded-lg hover:bg-legal/90 transition-colors"
            >
              Falar com Especialista
            </a>
            <a 
              href="mailto:suporte@legal.com" 
              className="inline-flex items-center justify-center px-6 py-3 border border-legal text-legal rounded-lg hover:bg-legal hover:text-white transition-colors"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaudFAQ;