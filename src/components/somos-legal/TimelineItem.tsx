
import React from 'react';
import { Calendar } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  event: string;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, event, isLeft }) => {
  const alignmentClass = isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8';
  const dotPositionClass = isLeft ? 'md:right-[-10.5px]' : 'md:left-[-10.5px]'; // Ajustado para 10.5px para centralizar melhor no 1px de largura

  return (
    <div className={`mb-8 flex md:items-center w-full ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="hidden md:block w-5/12"></div> {/* Espaçador */}
      <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-legal-cyan border-2 border-white shadow-md ${dotPositionClass}`}>
         {/* Ponto central na linha, pode ser um ícone também */}
      </div>
      <div className={`w-full md:w-5/12 p-4 rounded-lg shadow-lg bg-white border-l-4 md:border-l-0 md:border-transparent ${isLeft ? 'border-legal-purple' : 'border-legal-cyan'} hover:shadow-xl transition-all`}>
        <div className={`flex items-center mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
          <Calendar className="text-legal mr-2 h-5 w-5" />
          <h3 className="text-xl font-bold text-legal-purple">{year}</h3>
        </div>
        <p className="text-gray-700 text-sm">{event}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
