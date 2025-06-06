
import React from 'react';
import { Calendar } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  event: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, event, index }) => {
  // Alternamos as cores baseado no índice para variedade visual
  const colorVariant = index % 3;
  const borderColor = colorVariant === 0 ? 'border-legal-purple' : 
                     colorVariant === 1 ? 'border-legal-cyan' : 'border-legal';

  return (
    <div className="relative h-full">
      {/* Linha horizontal conectora */}
      <div className="absolute top-8 left-0 right-0 h-1 bg-legal-purple/20 hidden sm:block"></div>
      
      {/* Ponto central */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-legal-cyan border-2 border-white shadow-md z-10"></div>
      
      {/* Card do evento */}
      <div className={`mt-16 p-4 rounded-lg shadow-lg bg-white border-l-4 ${borderColor} hover:shadow-xl transition-all duration-300 hover:scale-105 h-48 flex flex-col`}>
        <div className="flex items-center mb-3">
          <Calendar className="text-legal mr-2 h-5 w-5 flex-shrink-0" />
          <h3 className="text-lg font-bold text-legal-purple">{year}</h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden">{event}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
