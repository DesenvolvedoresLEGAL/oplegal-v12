
import React from 'react';
import { LucideProps } from 'lucide-react';

interface ValorCardProps {
  sigla: string;
  titulo: string;
  descricao: string;
  drivers: string;
  Icone: React.ElementType<LucideProps>;
  corIcone: string;
}

const ValorCard: React.FC<ValorCardProps> = ({ sigla, titulo, descricao, drivers, Icone, corIcone }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border-b-4 border-legal-purple">
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full bg-opacity-10 mr-4 ${corIcone.replace('text-', 'bg-')}`}>
          <Icone size={28} className={corIcone} />
        </div>
        <h3 className="text-5xl font-black text-gray-300">{sigla}</h3>
      </div>
      <h4 className="text-xl font-bold text-legal mb-2">{titulo}</h4>
      <p className="text-gray-600 text-sm mb-3 flex-grow">{descricao}</p>
      <div className="mt-auto pt-3 border-t border-gray-200">
        <p className="text-xs text-legal-purple font-semibold">
          <span className="font-bold">Drivers:</span> {drivers}
        </p>
      </div>
    </div>
  );
};

export default ValorCard;
