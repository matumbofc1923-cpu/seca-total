
import React from 'react';

const Solution: React.FC = () => {
  const features = [
    { title: "Protocolo 16/8 Descomplicado", desc: "Aprenda a aplicar o jejum de forma que ele se adapte à sua rotina, não o contrário." },
    { title: "Guia Alimentar de Secagem", desc: "O que comer na janela de alimentação para acelerar o metabolismo ao máximo." },
    { title: "Lista de Compras Inteligente", desc: "Economize no mercado com alimentos que realmente saciam e nutrem." },
    { title: "Detox Pré-Carnaval", desc: "Um bônus especial de 3 dias para eliminar retenção de líquido rapidamente." }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900">
            A Estratégia <span className="text-orange-600">Seca Total</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Esqueça as dietas de fome. Nosso foco é regular seus hormônios e fazer seu corpo queimar gordura estocada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Results Gallery - Real Before & After */}
        <div className="mt-20 flex flex-col items-center">
          <div className="mb-12 text-center">
            <span className="inline-block bg-pink-100 text-pink-600 font-black px-6 py-2 rounded-full text-sm uppercase tracking-[0.2em] mb-4">
              🔥 RESULTADOS REAIS 🔥
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              A transformação de quem <span className="text-orange-600">seguiu o método</span>
            </h3>
            <p className="text-gray-500 max-w-xl mx-auto">Confira a evolução impressionante de nossas alunas em poucas semanas de protocolo.</p>
          </div>
          
          <div className="w-full max-w-5xl">
            {/* Main Featured Transformation Card */}
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 p-4 md:p-8">
              <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                {/* Before Image */}
                <div className="relative group rounded-[2rem] overflow-hidden h-[500px] md:h-[650px]">
                  <img 
                    src="https://i.postimg.cc/tRncRkkq/Whats-App-Image-2026-01-01-at-19-52-08.jpg" 
                    alt="Antes do Método Seca Total" 
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-red-500/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
                      ANTES
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* After Image */}
                <div className="relative group rounded-[2rem] overflow-hidden h-[500px] md:h-[650px]">
                  <img 
                    src="https://i.postimg.cc/L5kBYJhx/Whats-App-Image-2026-01-01-at-19-52-07.jpg" 
                    alt="Depois do Método Seca Total" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-green-500/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
                      DEPOIS
                    </span>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg animate-pulse">
                      RESULTADO
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              <div className="mt-8 text-center px-4">
                <div className="flex justify-center gap-1 text-yellow-400 mb-4 text-xl">
                  {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-2">"A melhor escolha que fiz pro meu verão!"</h4>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto italic">
                  "Eu estava me sentindo muito inchada e sem disposição. Com o Seca Total, perdi medidas onde mais me incomodava e recuperei minha autoestima para as fotos na praia."
                </p>
                <div className="mt-4 font-bold text-orange-600 uppercase tracking-widest text-sm">— Aline S., Transformação Real</div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-600 text-white px-6 py-3.5 rounded-xl font-black text-lg shadow-lg shadow-orange-600/20 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2 mx-auto"
            >
              QUERO ESSE RESULTADO TAMBÉM
              <i className="fas fa-arrow-right text-sm"></i>
            </button>
          </div>
          
          <div className="mt-12 animate-bounce">
            <i className="fas fa-chevron-down text-orange-400 text-2xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
