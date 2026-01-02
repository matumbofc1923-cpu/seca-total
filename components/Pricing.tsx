
import React from 'react';

const Pricing: React.FC = () => {
  const handleBuy = () => {
    window.location.href = 'https://www.ggcheckout.com/checkout/v2/f3tI2Fyr6o57cr7ZpuYi';
  };

  const items = [
    "Receita 'Mounjaro de Pobre' (Brinde)",
    "Método Seca Total",
    "Planejamento de Cardápios",
    "Guia de Sobremesas Saudáveis",
    "Suporte Individual para Dúvidas",
    "Acesso Vitalício"
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          <div className="p-10 md:w-3/5 bg-gray-50">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">O que você leva:</h3>
            <ul className="space-y-4">
              {items.map((item, i) => {
                const isMounjaro = item.includes('Mounjaro');
                return (
                  <li 
                    key={i} 
                    className={`flex items-center gap-3 text-gray-700 p-3 rounded-xl transition-all ${
                      isMounjaro 
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-200 transform scale-[1.02] mb-4' 
                        : 'bg-white/50 border border-gray-100'
                    }`}
                  >
                    <i className={`fas ${isMounjaro ? 'fa-star-of-life animate-spin-slow' : 'fa-check-circle text-green-500'}`}></i>
                    <span className={`${isMounjaro ? 'font-black text-lg uppercase tracking-tight' : 'font-medium'}`}>
                      {item}
                    </span>
                    {isMounjaro && (
                      <i className="fas fa-arrow-left ml-auto animate-bounce-x hidden md:block"></i>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 p-4 bg-yellow-100 rounded-2xl border border-yellow-200">
              <p className="text-sm text-yellow-800 font-medium text-center">
                <i className="fas fa-shield-alt mr-2"></i>
                7 Dias de Garantia Incondicional
              </p>
            </div>
          </div>

          <div className="p-10 md:w-2/5 flex flex-col justify-center items-center text-center bg-white border-t md:border-t-0 md:border-l border-gray-100">
            <div className="mb-4">
              <span className="bg-purple-100 text-purple-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                Oferta Limitada
              </span>
            </div>
            <span className="text-gray-500 line-through text-lg">De R$ 197,00</span>
            <div className="my-2">
              <span className="text-sm font-bold text-gray-900 align-top mt-2 inline-block">R$</span>
              <span className="text-7xl font-black text-orange-600">29</span>
              <span className="text-xl font-bold text-gray-900">,90</span>
            </div>
            <p className="text-gray-400 text-sm mb-8">Pagamento único. Acesso imediato.</p>
            
            <button 
              onClick={handleBuy}
              className="w-full py-5 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-black text-xl rounded-2xl shadow-xl hover:shadow-orange-500/30 transform transition-all hover:-translate-y-1 active:scale-95 mb-4"
            >
              COMPRAR AGORA
            </button>
            
            <div className="flex gap-2 opacity-50 grayscale">
              <i className="fab fa-cc-visa text-2xl"></i>
              <i className="fab fa-cc-mastercard text-2xl"></i>
              <i className="fab fa-pix text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
