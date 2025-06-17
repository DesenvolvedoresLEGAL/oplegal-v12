
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-legal hover:bg-legal/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
        aria-label={isOpen ? "Fechar chat" : "Abrir chat de atendimento"}
        aria-expanded={isOpen}
        aria-controls="chatbot-panel"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
      
      {isOpen && (
        <div 
          id="chatbot-panel"
          className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col"
          role="dialog"
          aria-labelledby="chatbot-title"
        >
          <div className="bg-legal text-white p-4 rounded-t-lg">
            <h3 id="chatbot-title" className="font-bold">Assistente LEGAL</h3>
            <p className="text-sm opacity-90">Como posso ajudar você hoje?</p>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm">Olá! Sou o assistente da LEGAL. Posso ajudar com:</p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Informações sobre Smart Events™</li>
                  <li>• Demonstrações de produtos</li>
                  <li>• Orçamentos personalizados</li>
                  <li>• Suporte técnico</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <button 
              className="w-full bg-legal hover:bg-legal/90 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
              aria-label="Iniciar conversa com atendente"
            >
              Falar com Atendente
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotButton;
