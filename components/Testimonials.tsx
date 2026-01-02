
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    { 
      name: "Lorena Dias", 
      location: "Florianópolis, SC", 
      role: "Perdeu 3.8kg em 10 dias", 
      text: "Tinha pânico de usar biquíni de amarrar, mas o Seca Total mudou meu jogo. O inchaço sumiu muito rápido e as fotos na praia ficaram outro nível!", 
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150" 
    },
    { 
      name: "Luan Guedes", 
      location: "Balneário Camboriú, SC", 
      role: "Abdominais em evidência", 
      text: "Pra quem quer curtir a folia sem camisa e com confiança, esse é o caminho. O protocolo detox limpou meu shape em tempo recorde pra primeira festa do ano.", 
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" 
    },
    { 
      name: "Bia Rezende", 
      location: "Rio de Janeiro, RJ", 
      role: "Recuperou o shape da facul", 
      text: "Achei que ia passar fome, mas a janela de 16h é super de boa. Consegui secar 5kg sem deixar de sair com meus amigos no fds. Melhor investimento!", 
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
    },
    { 
      name: "Enzo Vasconcelos", 
      location: "Salvador, BA", 
      role: "Mais pique pros blocos", 
      text: "Mano, o Mounjaro de Pobre funciona demais! Parei de atacar a geladeira à noite e os resultados vieram na balança e no espelho. Prontíssimo pro trio!", 
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" 
    },
    { 
      name: "Giulia Mello", 
      location: "Guarapari, ES", 
      role: "Redução de cintura visível", 
      text: "Eu tava inchada demais por causa da rotina de estudos. Com o método, em 2 semanas meu corpo deu um estalo. To me sentindo muito mais confiante!", 
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150" 
    },
    { 
      name: "Vitor Hugo", 
      location: "Belo Horizonte, MG", 
      role: "Transformação em 21 dias", 
      text: "Fiz o desafio com uns amigos e fui o que mais mudou. O passo a passo é muito direto, sem enrolação. Agora é só manter pro resto do ano!", 
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" 
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-pink-600 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Resultados na Prática</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            A galera que já <br className="hidden md:block" />
            <span className="text-pink-600">destravou o shape</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={r.img} 
                  alt={r.name} 
                  className="w-16 h-16 rounded-full border-2 border-pink-100 shadow-sm group-hover:scale-110 transition-transform object-cover" 
                />
                <div>
                  <div className="font-bold text-gray-900 flex items-center gap-2">
                    {r.name}
                    <i className="fas fa-check-circle text-blue-500 text-[10px]" title="Compra Verificada"></i>
                  </div>
                  <div className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{r.location}</div>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4 gap-0.5">
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star text-[10px]"></i>)}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed font-medium text-sm flex-grow">"{r.text}"</p>
              <div className="mt-auto pt-4 border-t border-gray-50">
                <div className="text-xs text-pink-600 font-black uppercase tracking-tight">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
