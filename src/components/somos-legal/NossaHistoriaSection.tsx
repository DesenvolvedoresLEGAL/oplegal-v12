
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import TimelineItem from './TimelineItem';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const historia = [
  { year: "2010", event: "Wagner tem a ideia de instalar WiFi em seu carro." },
  { year: "2011", event: "Testes com diversos roteadores WiFi 3G." },
  { year: "2012", event: "Testes com todas as operadoras de internet móvel." },
  { year: "2013", event: "Validação e homologação de Roteador WiFi 4G." },
  { year: "2014", event: "Abertura da empresa e os primeiros 500 clientes." },
  { year: "2015", event: "Atingimos a marca de 1000 assinaturas de internet móvel." },
  { year: "2016", event: "Mudança de estratégia, atendendo somente empresas." },
  { year: "2017", event: "Parceria com a Volkswagen conectando 2500 caminhões de fábrica com WiFi." },
  { year: "2018", event: "A 1ª locação de internet foi para a FRUTAP no APAS Show." },
  { year: "2018", event: "Glaucia entra na LEGAL e inicia uma grande reestruturação no time financeiro." },
  { year: "2019", event: "A LEGAL lança sua 4ª identidade visual e comemora 5 anos de vida." },
  { year: "2020", event: "Realizamos as primeiras entregas de Amburgui com Drone." },
  { year: "2020", event: "Criamos uma solução de internet para empresas que adotaram o home office na pandemia." },
  { year: "2021", event: "Atingimos a marca de 5000 clientes atendidos." },
  { year: "2021", event: "Lançamento dos serviços com roteadores WiFi 6." },
  { year: "2022", event: "Volta dos eventos e recorde de faturamento com os serviços de locação." },
  { year: "2022", event: "Lançamento dos serviços com Internet Móvel 5G." },
  { year: "2023", event: "Lançamento da nossa unidade de negócios de Drones, após autorização da ANAC." },
  { year: "2023", event: "Lançamento da nossa 5ª identidade visual (e atual)." },
  { year: "2024", event: "Comemoramos 10 anos de vida. Apenas 2% das empresas no Brasil alcançam esse marco. Parabéns LEGAL!" },
  { year: "2024", event: "Atingimos mais de 7.000 clientes atendidos e 100.000 pessoas, negócios e coisas conectadas." },
  { year: "2025", event: "Lançamento da unidade de negócios de Inteligência Artificial." },
  { year: "Futuro", event: "Mais marcos incríveis por vir..." }
];

const NossaHistoriaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="A HISTÓRIA SENDO CONSTRUÍDA, DESDE 2010"
          subtitle="Desde suas origens pré-históricas, sem smartphones, com apenas um modem 3G e um sonho, até se tornar a maior e melhor TechCo para eventos e negócios."
          center
        />
        
        {/* Timeline horizontal */}
        <div className="relative mt-16">
          {/* Linha principal horizontal */}
          <div className="absolute top-8 left-8 right-8 h-1 bg-legal-purple/20 hidden md:block"></div>
          
          <Carousel
            opts={{
              align: "start",
              loop: false,
              slidesToScroll: 1,
            }}
            className="w-full max-w-full"
          >
            <CarouselContent className="ml-4">
              {historia.map((item, index) => (
                <CarouselItem key={`${item.year}-${index}`} className="pl-4 basis-80 md:basis-96 flex-shrink-0">
                  <TimelineItem 
                    year={item.year} 
                    event={item.event} 
                    index={index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Controles do carrossel */}
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative transform-none bg-legal-purple hover:bg-legal-purple/90 text-white border-legal-purple" />
              <CarouselNext className="relative transform-none bg-legal-purple hover:bg-legal-purple/90 text-white border-legal-purple" />
            </div>
          </Carousel>
          
          {/* Indicador de progresso */}
          <div className="flex justify-center mt-6">
            <p className="text-sm text-gray-600">
              Deslize para ver toda nossa jornada → {historia.length} marcos importantes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NossaHistoriaSection;
