
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAssistant } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Oi! Eu sou a Luma, sua assistente do Seca Total. Pronta para brilhar nesse Carnaval? Como posso te ajudar hoje? 💃🔥' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "Como funciona o jejum?",
    "Ainda dá tempo de secar?",
    "Vou sentir fome?",
    "O que recebo no método?"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithAssistant(text, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    setIsLoading(false);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Dúvidas? Pergunte para nossa <span className="text-pink-600">Especialista</span>
          </h2>
          <p className="text-gray-600">Nossa IA está pronta para te motivar e tirar suas dúvidas agora mesmo.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-pink-600 to-orange-500 p-6 flex items-center gap-4 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-md">
              <i className="fas fa-robot"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg">Luma - Consultora Seca Total</h3>
              <div className="flex items-center gap-2 text-xs opacity-80">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Online agora
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm md:text-base ${
                  m.role === 'user' 
                    ? 'bg-pink-600 text-white rounded-tr-none' 
                    : 'bg-gray-100 text-gray-800 rounded-tl-none border border-gray-200 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          <div className="px-6 py-3 bg-gray-50 flex gap-2 overflow-x-auto no-scrollbar border-t border-gray-100">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap bg-white border border-pink-200 text-pink-600 px-4 py-2 rounded-full text-xs font-bold hover:bg-pink-50 transition-colors shadow-sm"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-100">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              className="flex gap-3"
            >
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua dúvida aqui..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-700"
              />
              <button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-pink-600 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-pink-700 transition-all active:scale-95 disabled:opacity-50"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            <p className="text-[10px] text-gray-400 mt-3 text-center">
              *Luma é uma assistente virtual motivacional. Não substitui consulta médica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
