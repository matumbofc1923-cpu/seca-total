
import React from 'react';

const Deliverables: React.FC = () => {
  const mainItems = [
    {
      title: "Guia Mestre Seca Total",
      desc: "O manual completo com o passo a passo do método, desde o primeiro dia até o resultado final.",
      icon: "fa-book-open"
    },
    {
      title: "Protocolos de Jejum 16/8 e 18/6",
      desc: "Instruções exatas de como intercalar os períodos de alimentação para derreter gordura.",
      icon: "fa-clock"
    },
    {
      title: "Cardápios 'Sem Frescura'",
      desc: "Opções de refeições baratas e fáceis de encontrar que saciam e aceleram o metabolismo.",
      icon: "fa-utensils"
    },
    {
      title: "Checklist da Rotina Diária",
      desc: "Para você marcar o que já fez e nunca se perder no processo. Organização é tudo!",
      icon: "fa-list-check"
    }
  ];

  const bonuses = [
    {
      title: "BÔNUS 1: Detox Turbo 3 Dias",
      desc: "Um plano intensivo para eliminar a retenção de líquido e desinchar a barriga já no primeiro final de semana.",
      icon: "fa-glass-water-droplet"
    },
    {
      title: "BÔNUS 2: Guia de Sucos Energéticos",
      desc: "Receitas que combatem a fadiga e dão um 'up' na disposição para você aguentar os blocos de Carnaval.",
      icon: "fa-apple-whole"
    },
    {
      title: "BRINDE EXTRA: Mounjaro de Pobre",
      desc: "A receita caseira e natural de alta saciedade que 'desliga' a fome e acelera a queima sem gastar com remédios caros.",
      icon: "fa-flask-vial",
      special: true
    }
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Tudo o que você <span className="text-pink-600">recebe agora:</span>
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold text-sm uppercase tracking-wider">
            <i className="fas fa-bolt"></i>
            Acesso Imediato
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {mainItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-6 p-8 bg-gray-50 rounded-[2rem] border border-gray-100 transition-transform hover:scale-[1.02]">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white text-orange-500 shadow-sm">
                <i className={`fas ${item.icon} text-2xl`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
            🎁 E você ainda ganha estes <span className="text-orange-600">Presentes Exclusivos:</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className={`p-8 rounded-[2rem] border relative group transition-all duration-300 ${bonus.special ? 'bg-gradient-to-br from-purple-900 to-indigo-900 text-white border-purple-500 shadow-xl scale-105' : 'bg-gradient-to-br from-orange-50 to-pink-50 border-orange-100'}`}>
              <div className={`absolute -top-4 -right-4 font-black px-4 py-1 rounded-xl text-xs rotate-12 shadow-md group-hover:scale-110 transition-transform ${bonus.special ? 'bg-yellow-400 text-gray-900' : 'bg-yellow-400 text-gray-900'}`}>
                {bonus.special ? 'EXCLUSIVO' : 'GRÁTIS'}
              </div>
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 shadow-sm ${bonus.special ? 'bg-purple-500 text-white' : 'bg-white text-pink-600'}`}>
                <i className={`fas ${bonus.icon} text-xl`}></i>
              </div>
              <h4 className={`text-lg font-bold mb-3 ${bonus.special ? 'text-yellow-300' : 'text-gray-900'}`}>{bonus.title}</h4>
              <p className={`text-sm leading-relaxed ${bonus.special ? 'text-gray-200' : 'text-gray-600'}`}>{bonus.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-gray-900 rounded-[2.5rem] text-center text-white shadow-2xl">
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <i className="fas fa-mobile-screen-button text-orange-500"></i>
              <span>Leia no Celular</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-tablet-screen-button text-orange-500"></i>
              <span>Leia no Tablet</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-laptop text-orange-500"></i>
              <span>Leia no PC</span>
            </div>
          </div>
          <h4 className="text-xl font-bold mb-4">Sem frete, sem espera.</h4>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Assim que seu pagamento for aprovado, você receberá os dados de acesso no seu e-mail. Comece agora para estar pronto(a) para 2026!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
