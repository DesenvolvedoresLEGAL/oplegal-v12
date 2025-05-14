
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const levels = [
  { name: "ORIGIN", points: "0+", color: "bg-gray-500", textColor: "text-gray-500" },
  { name: "QUANTUM", points: "1.000+", color: "bg-sky-500", textColor: "text-sky-500" },
  { name: "NEBULA", points: "5.000+", color: "bg-indigo-500", textColor: "text-indigo-500" },
  { name: "CELESTIAL", points: "15.000+", color: "bg-purple-500", textColor: "text-purple-500" },
  { name: "GALACTIC", points: "30.000+", color: "bg-pink-500", textColor: "text-pink-500" },
  { name: "COSMIC", points: "50.000+", color: "bg-red-500", textColor: "text-red-500" },
  { name: "ZENITH", points: "100.000+", color: "bg-amber-500", textColor: "text-amber-500" },
  { name: "APEX", points: "250.000+", color: "bg-lime-500", textColor: "text-lime-500" },
  { name: "INFINITE", points: "500.000+", color: "bg-emerald-500", textColor: "text-emerald-500" },
  { name: "ECLIPSE", points: "1.000.000+", color: "bg-bits-cyan", textColor: "text-bits-cyan" },
];

const GamifiedLevelsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-bits-purple mb-4 font-space">Níveis Gamificados BITS™</h2>
        <p className="text-center text-gray-700 mb-12 max-w-xl mx-auto">
          Sua jornada no universo BITS™ é dividida em 10 níveis emocionantes. Quanto mais você interage, mais alto você chega e melhores são as recompensas!
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {levels.map((level, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className={`border-2 ${level.textColor.replace('text-','border-')} shadow-lg hover:shadow-2xl transition-shadow`}>
                    <CardContent className="flex flex-col items-center justify-center p-6 aspect-[3/2]">
                      <div className={`w-16 h-16 ${level.color} rounded-full mb-4 flex items-center justify-center text-white font-bold text-2xl shadow-md`}>
                        {level.name.substring(0,1)}
                      </div>
                      <h3 className={`text-2xl font-bold ${level.textColor} mb-1`}>{level.name}</h3>
                      <p className="text-sm text-gray-600">A partir de {level.points} BITS</p>
                      {index < levels.length -1 && <ArrowRight className={`mt-4 ${level.textColor}`} size={20}/>}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-bits-purple border-bits-purple hover:bg-bits-purple hover:text-white" />
          <CarouselNext className="text-bits-purple border-bits-purple hover:bg-bits-purple hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default GamifiedLevelsSection;
