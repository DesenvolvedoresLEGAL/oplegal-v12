
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const FacePassFAQ = () => {
  const faqs = [
    {
      question: "Como funciona o reconhecimento facial do FacePass?",
      answer: "O FacePass utiliza algoritmos avançados de inteligência artificial para criar um perfil biométrico único de cada participante a partir de uma foto. Durante o evento, câmeras capturam a imagem e comparam com o banco de dados em tempo real, liberando o acesso automaticamente."
    },
    {
      question: "Qual é a precisão do sistema?",
      answer: "Nosso sistema possui 99.9% de precisão no reconhecimento facial, com taxa de falsos positivos menor que 0.1%. Utilizamos tecnologia de deep learning treinada com milhões de imagens para garantir a máxima confiabilidade."
    },
    {
      question: "O FacePass está em conformidade com a LGPD?",
      answer: "Sim, 100%. Todos os dados biométricos são criptografados e armazenados seguindo as diretrizes da LGPD. Os participantes têm controle total sobre seus dados, podendo solicitar exclusão a qualquer momento."
    },
    {
      question: "Como é feito o cadastro dos participantes?",
      answer: "O cadastro é simples: participantes fazem upload de uma foto através de formulário web ou app do evento. Nossa IA processa a imagem automaticamente e cria o perfil biométrico em segundos."
    },
    {
      question: "Funciona em ambientes com pouca luz?",
      answer: "Sim, utilizamos câmeras com sensores infravermelhos e algoritmos otimizados para funcionar em diversas condições de iluminação, garantindo reconhecimento eficaz mesmo em ambientes com baixa luminosidade."
    },
    {
      question: "Quantas pessoas o sistema suporta simultaneamente?",
      answer: "O FacePass é altamente escalável, suportando desde eventos pequenos até grandes festivais com mais de 100.000 participantes. O sistema processa múltiplos acessos simultâneos sem perda de performance."
    },
    {
      question: "Qual o tempo de implementação?",
      answer: "A implementação é rápida: configuração completa em até 48 horas para eventos de qualquer tamanho. Nossa equipe técnica oferece suporte completo durante todo o processo."
    },
    {
      question: "Oferece relatórios e analytics?",
      answer: "Sim, dashboard completo com relatórios em tempo real incluindo: horários de pico, análise de fluxo, estatísticas de acesso, e métricas detalhadas para otimização de eventos futuros."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre o FacePass e nossa tecnologia de reconhecimento facial"
          center
        />
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-legal hover:text-legal-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Não encontrou sua resposta?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-legal hover:bg-legal/90">
                Falar com Especialista
              </Button>
              <Button size="lg" variant="outline" className="border-legal text-legal hover:bg-legal hover:text-white">
                Central de Ajuda
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacePassFAQ;
