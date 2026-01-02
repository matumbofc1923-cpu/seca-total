
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: "Preciso parar de comer o que gosto?", a: "Não! O foco é QUANDO comer. Você aprenderá a encaixar suas comidas preferidas na janela correta." },
    { q: "Vou sentir muita fome?", a: "Nos primeiros 2-3 dias o corpo se ajusta, mas nosso guia ensina alimentos que trazem saciedade prolongada." },
    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com todos os links e arquivos." },
    { q: "Serve para quem nunca fez dieta?", a: "Com certeza! O método foi desenhado para ser o mais simples e direto possível, sem complicações." }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-gray-900">{f.q}</span>
                <i className={`fas fa-chevron-down transition-transform ${open === i ? 'rotate-180' : ''}`}></i>
              </button>
              {open === i && (
                <div className="p-6 bg-white text-gray-600 leading-relaxed border-t border-gray-100 animate-fade-in">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
