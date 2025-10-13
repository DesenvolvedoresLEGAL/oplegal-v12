import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBot = message.sender === 'bot';

  return (
    <div className={`flex gap-3 ${isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}>
      {isBot && (
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-legal to-legal-purple rounded-full flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
      )}
      
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl ${
          isBot
            ? 'bg-white border border-gray-200 text-gray-800'
            : 'bg-gradient-to-r from-legal to-legal-purple text-white'
        }`}
      >
        <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
        <span className={`text-xs mt-1 block ${isBot ? 'text-gray-400' : 'text-white/70'}`}>
          {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-gray-600" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
