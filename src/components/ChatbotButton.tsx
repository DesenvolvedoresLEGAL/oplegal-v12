
import React, { useState } from "react";
import { Bot, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'bot' | 'user' }>>([
    { text: "Olá! Sou o Smart Assistant LEGAL. Como posso ajudar você hoje?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, sender: "user" }]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Os Smart Events™ são eventos potencializados com tecnologias como 5G, IA, IoT e drones. Quer saber mais?",
        "Nossa implantação leva de 90 a 180 dias, divididos em 3 fases: Foundation, Intelligence e Immersive.",
        "A LEGAL é a maior TECHCO do Brasil, inventora do conceito Smart Events™ que revoluciona o setor de eventos.",
        "Nossos clientes reportam aumento médio de 22% na receita por m² após implementação de Smart Events™.",
        "Podemos ajudar com várias soluções. Gostaria de agendar uma demonstração personalizada?",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: "bot" }]);
    }, 1000);
    
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-legal-green text-white rounded-full p-4 shadow-lg z-40 h-14 w-14 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </Button>

      {/* Chatbot window */}
      <div
        className={`fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-xl shadow-xl z-40 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Chat header */}
        <div className="bg-legal p-4 flex items-center justify-between text-white">
          <div className="flex items-center">
            <Bot className="mr-2" size={20} />
            <div>
              <h3 className="font-bold">Smart Assistant LEGAL</h3>
              <p className="text-xs text-gray-200">Online</p>
            </div>
          </div>
          <button onClick={toggleChat} className="text-white hover:text-gray-200">
            <ChevronDown size={20} />
          </button>
        </div>

        {/* Chat messages */}
        <div className="p-4 h-80 overflow-y-auto bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-lg p-3 max-w-xs md:max-w-sm ${
                  message.sender === "user"
                    ? "bg-legal-green text-white"
                    : "bg-white text-gray-800 border border-gray-200"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-legal"
          />
          <button
            type="submit"
            className="bg-legal text-white px-4 py-2 rounded-r-md hover:bg-legal/90"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatbotButton;
