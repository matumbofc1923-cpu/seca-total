
import React from 'react';

const Transformation: React.FC = () => {
  const benefits = [
    {
      title: "Liberdade para vestir o que quiser",
      desc: "Sabe aquela roupa ou fantasia que você guardou por insegurança? Esqueça. Tenha a liberdade de curtir sem se preocupar com o ângulo das fotos.",
      icon: "fa-shirt"
    },
    {
      title: "Inchaço abdominal é coisa do passado",
      desc: "Dê adeus àquela sensação de 'estufamento'. O protocolo de jejum limpa seu organismo e deixa sua definição muscular muito mais aparente.",
      icon: "fa-wind"
    },
    {
      title: "Energia que não acaba mais",
      desc: "Diferente das dietas que te deixam fraco(a), o Seca Total otimiza seu metabolismo para você ter pique do primeiro ao último bloco.",
      icon: "fa-bolt-lightning"
    },
    {
      title: "Sua autoestima no topo",
      desc: "Não é só sobre o espelho. É sobre a confiança de caminhar na praia ou no trio sabendo que você está na sua melhor versão física e mental.",
      icon: "fa-face-grin-stars"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-pink-600 to-orange-500 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-yellow-300 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Imagine você chegando no <br className="hidden md:block"/>
            <span className="text-yellow-300">Carnaval 2026...</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
            Não é apenas sobre os quilos na balança. É sobre como você vai se sentir quando a música começar a tocar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 hover:bg-white/15 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-yellow-400 text-gray-900 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-lg">
                <i className={`fas ${benefit.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-6">
            O Carnaval 2026 será o <span className="text-pink-600">marco da sua vida.</span>
          </h3>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Pare de adiar sua felicidade. O método Seca Total é o atalho seguro para você conquistar o corpo que sempre quis exibir na avenida.
          </p>
          
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-extrabold text-lg rounded-xl shadow-lg hover:shadow-orange-500/30 transform transition-all active:scale-95 flex items-center justify-center gap-3 mx-auto"
          >
            QUERO ESSA TRANSFORMAÇÃO
            <i className="fas fa-angles-right text-sm"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
