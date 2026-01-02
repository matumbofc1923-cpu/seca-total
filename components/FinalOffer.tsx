
import React from 'react';

const FinalOffer: React.FC = () => {
  const handleCheckout = () => {
    window.location.href = 'https://www.ggcheckout.com/checkout/v2/f3tI2Fyr6o57cr7ZpuYi';
  };

  const checklist = [
    "Acesso Vitalício ao Método Seca Total",
    "Protocolos de Jejum (Iniciante ao Avançado)",
    "Cardápios Completos para Homens e Mulheres",
    "Receita Brinde: Mounjaro de Pobre",
    "Bônus Exclusivos de Secagem Inclusos",
    "Garantia Total de 7 Dias"
  ];

  return (
    <section className="py-24 px-4 bg-[#0a0f1e] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-yellow-400 text-gray-900 font-black px-6 py-2 rounded-full text-sm uppercase tracking-widest mb-6 animate-pulse">
              ⚠️ ÚLTIMA OPORTUNIDADE
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              O Carnaval 2026 não vai <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">esperar por você.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Você tem apenas duas escolhas agora: ignorar esta página e chegar no Carnaval do mesmo jeito que está hoje...
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Ou garantir seu acesso e levar:</h3>
              <ul className="space-y-4">
                {checklist.map((item, i) => {
                  const isMounjaro = item.includes('Mounjaro');
                  return (
                    <li key={i} className={`flex items-center gap-4 text-gray-300 p-2 rounded-xl transition-all ${isMounjaro ? 'bg-purple-500/10 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]' : ''}`}>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isMounjaro ? 'bg-purple-500 animate-bounce' : 'bg-green-500'}`}>
                        <i className={`fas ${isMounjaro ? 'fa-flask-vial' : 'fa-check'} text-[12px] text-white`}></i>
                      </div>
                      <span className={`text-lg ${isMounjaro ? 'text-yellow-300 font-black uppercase' : ''}`}>
                        {item}
                        {isMounjaro && <i className="fas fa-star ml-2 text-yellow-400 animate-pulse"></i>}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-[2rem] border border-white/10 text-center transform md:rotate-2 shadow-2xl">
              <p className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-2">TUDO ISSO POR APENAS</p>
              <div className="flex items-center justify-center gap-1 mb-4">
                <span className="text-2xl font-bold align-top mt-2">R$</span>
                <span className="text-8xl font-black text-white">29</span>
                <span className="text-3xl font-bold">,90</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">Pagamento único. Sem pegadinhas.</p>
              <div className="flex justify-center gap-3 opacity-60">
                <i className="fab fa-cc-visa text-2xl"></i>
                <i className="fab fa-cc-mastercard text-2xl"></i>
                <i className="fab fa-pix text-2xl"></i>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <button 
              onClick={handleCheckout}
              className="group relative w-full md:w-auto px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-black text-lg md:text-xl rounded-xl shadow-lg hover:shadow-orange-500/40 transform transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 mx-auto"
            >
              <span className="uppercase">Quero Secar Agora</span>
              <i className="fas fa-rocket text-sm md:text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalOffer;
