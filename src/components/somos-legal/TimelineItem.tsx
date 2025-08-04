
import React from 'react';
import { Calendar } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  event: string;
  index: number;
  hideTimeline?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, event, index, hideTimeline = false }) => {
  // Alternamos as cores baseado no índice para variedade visual
  const colorVariant = index % 3;
  const borderColor = colorVariant === 0 ? 'border-legal-purple' : 
                     colorVariant === 1 ? 'border-legal-cyan' : 'border-legal';
  const dotColor = colorVariant === 0 ? 'bg-legal-purple' : 
                  colorVariant === 1 ? 'bg-legal-cyan' : 'bg-legal';

  return (
    <div className="relative w-full h-full">
      {/* Card do evento */}
      <div className={`mt-4 p-6 rounded-xl shadow-lg bg-white border-l-4 ${borderColor} hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[200px] flex flex-col w-full`}>
        <div className="flex items-center mb-4">
          <Calendar className="text-legal mr-3 h-6 w-6 flex-shrink-0" />
          <h3 className="text-xl font-bold text-legal-purple">{year}</h3>
        </div>
        <p className="text-gray-700 text-base leading-relaxed flex-1">{event}</p>
        
        {/* Indicador visual adicional */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Marco #{index + 1}</span>
            <div className={`w-3 h-3 rounded-full ${dotColor}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
