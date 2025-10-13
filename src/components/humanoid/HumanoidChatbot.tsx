import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { X, MessageCircle, Send, Bot } from 'lucide-react';
import { useChatbot } from '@/hooks/useChatbot';
import ChatMessage from './ChatMessage';
import { Link } from 'react-router-dom';

const HumanoidChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const { messages, addMessage, addBotMessage } = useChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Mensagem inicial do bot
      setTimeout(() => {
        addBotMessage(
          'Funciona e transforma! ✨ Nossos clientes de RH, por exemplo, reduziram o tempo de triagem de currículos em 70% com a orquestração de IA. Em vendas, eles triplicaram os leads qualificados.\n\nNós orquestramos as IAs para que cada VOLT investido traga resultados reais e mensuráveis. Qual processo você gostaria de ver transformado? 😊'
        );
      }, 500);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      addMessage(inputMessage, 'user');
      setInputMessage('');
      
      // Simular resposta do bot
      setTimeout(() => {
        addBotMessage('Obrigado pela sua mensagem! Nossa equipe está analisando sua solicitação. Para respostas imediatas, você pode explorar nossos casos de uso ou falar diretamente com um especialista. 🚀');
      }, 1000);
    }
  };

  const handleVerExemplos = () => {
    const element = document.getElementById('casos-de-uso');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const handleVerPlanos = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = encodeURIComponent('Olá! Gostaria de conhecer mais sobre o HUMANOID™ e como pode transformar meu negócio.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Botão flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-legal to-legal-purple text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
          aria-label="Abrir chat do Humanoid"
        >
          <Bot className="w-6 h-6" />
        </button>
      )}

      {/* Modal do Chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[95vw] max-w-[420px] h-[600px] max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col animate-scale-in border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-legal to-legal-purple text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg">HUMANOID™</h3>
                <p className="text-xs text-white/80">Geralmente responde em segundos</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            
            {/* Botões de ação após primeira mensagem */}
            {messages.length > 0 && messages[messages.length - 1].sender === 'bot' && (
              <div className="space-y-2 animate-fade-in">
                <button
                  onClick={handleVerExemplos}
                  className="w-full bg-white border border-legal-purple text-legal-purple hover:bg-legal-purple hover:text-white transition-all py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2"
                >
                  📊 Ver Exemplos
                </button>
                <button
                  onClick={handleVerPlanos}
                  className="w-full bg-white border border-legal text-legal hover:bg-legal hover:text-white transition-all py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2"
                >
                  💰 Ver Planos
                </button>
                <Link to="/contato?produto=humanoid">
                  <button className="w-full bg-gradient-to-r from-legal to-legal-purple text-white hover:opacity-90 transition-all py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2">
                    🚀 Criar Workspace Grátis
                  </button>
                </Link>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white border border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2"
                >
                  📞 Falar com Especialista
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-legal-purple text-sm"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-legal hover:bg-legal/90 text-white px-4"
                disabled={!inputMessage.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HumanoidChatbot;
