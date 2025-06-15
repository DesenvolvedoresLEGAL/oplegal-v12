
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionTitle from '@/components/SectionTitle';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Como funciona o aluguel de internet para eventos da LEGAL?',
      answer: 'Nosso processo é simples: fazemos uma análise técnica do local, dimensionamos a capacidade necessária, instalamos os equipamentos em até 24h e oferecemos suporte 24/7 durante todo o evento. Incluímos roteadores 5G, access points Wi-Fi 6, switches e toda infraestrutura necessária.'
    },
    {
      question: 'Qual é o prazo mínimo para locação de internet temporária?',
      answer: 'Trabalhamos com locações desde 1 dia até vários meses. Para eventos corporativos, o prazo mínimo é de 1 dia, mas recomendamos solicitar orçamento com ao menos 7 dias de antecedência para garantir disponibilidade de equipamentos e planejamento adequado.'
    },
    {
      question: 'Quais tipos de eventos podem usar soluções de rede para eventos da LEGAL?',
      answer: 'Atendemos todos os tipos: congressos médicos, feiras industriais, festivais de música, eventos corporativos, workshops, hackathons, casamentos, formaturas e qualquer evento que precise de conectividade estável. Temos soluções específicas para cada segmento.'
    },
    {
      question: 'A infraestrutura de TI para feiras inclui equipamentos de backup?',
      answer: 'Sim! Toda nossa infraestrutura possui redundância completa: múltiplos links de internet, equipamentos de backup em standby, fontes de energia alternativas e equipe técnica on-site. Garantimos uptime superior a 99.9% com SLA documentado.'
    },
    {
      question: 'Como é dimensionada a capacidade do Wi-Fi para congressos?',
      answer: 'Fazemos um site survey detalhado considerando: número de participantes, dispositivos por pessoa (média 2-3), aplicações que serão usadas, layout do ambiente e interferências. Utilizamos access points Wi-Fi 6 com capacidade para até 200 usuários simultâneos cada.'
    },
    {
      question: 'Quais equipamentos de TI para aluguel vocês disponibilizam?',
      answer: 'Oferecemos: roteadores 5G, access points Wi-Fi 6, switches gerenciáveis, firewalls, notebooks, tablets, totens interativos, servidores, equipamentos de áudio/vídeo, rádios de comunicação, projetores e muito mais. Consulte nossa lista completa.'
    },
    {
      question: 'O aluguel de internet móvel 5G funciona em qualquer local?',
      answer: 'Sim, nossa solução 5G funciona em qualquer local com cobertura das operadoras Vivo, Claro, TIM e Oi. Utilizamos múltiplas operadoras simultaneamente para garantir a melhor conectividade. Em locais remotos, podemos usar internet via satélite.'
    },
    {
      question: 'Qual é o custo médio para locação de Wi-Fi empresarial?',
      answer: 'O investimento varia conforme o tamanho do evento, duração, quantidade de usuários e equipamentos necessários. Oferecemos orçamentos gratuitos e personalizados. Para eventos de 100-500 pessoas, valores partem de R$ 2.500/dia com equipamentos e suporte inclusos.'
    },
    {
      question: 'Vocês oferecem suporte técnico durante eventos noturnos e finais de semana?',
      answer: 'Absolutamente! Nosso suporte é 24/7/365. Temos técnicos de plantão durante todo o evento, incluindo madrugadas, finais de semana e feriados. Nosso NOC monitora proativamente a rede e responde a incidentes em menos de 15 minutos.'
    },
    {
      question: 'Como garantir segurança na rede temporária para eventos corporativos?',
      answer: 'Implementamos múltiplas camadas de segurança: firewalls empresariais, VPN segura, criptografia WPA3, segregação de redes por perfil de usuário, monitoramento de tráfego e compliance com LGPD. Auditoria de segurança incluída no serviço.'
    },
    {
      question: 'É possível integrar a rede temporária com sistemas existentes da empresa?',
      answer: 'Sim! Fazemos integração com sistemas corporativos, ERPs, plataformas de credenciamento, aplicativos do evento e qualquer sistema que precise de conectividade. Nossa equipe de TI especializada cuida de toda a configuração e testes.'
    },
    {
      question: 'Qual é a velocidade máxima disponível para internet de eventos?',
      answer: 'Oferecemos desde 100 Mbps até 10 Gbps, dependendo da necessidade. Para eventos com streaming ao vivo, demos interativas ou muitos usuários simultâneos, recomendamos links dedicados de alta velocidade. Fazemos testes de capacidade antes do evento.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre nossos serviços de locação de equipamentos e soluções de conectividade para eventos."
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left font-bold text-legal hover:text-legal-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 p-6 bg-legal/5 rounded-xl">
          <h3 className="text-xl font-bold text-legal mb-4">Ainda tem dúvidas?</h3>
          <p className="text-gray-600 mb-4">
            Nossa equipe técnica está pronta para esclarecer qualquer questão sobre locação de equipamentos para seu evento.
          </p>
          <button className="bg-legal hover:bg-legal/90 text-white px-6 py-3 rounded-lg font-bold transition-colors">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
