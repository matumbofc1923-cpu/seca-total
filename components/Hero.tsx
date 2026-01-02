
import React from 'react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-carnival text-white overflow-hidden">
      {/* Brand Header Bar - Dark Navy Background */}
      <div className="w-full bg-[#0a0f1e] py-6 px-4 z-30 shadow-lg">
        <div className="container mx-auto flex justify-center items-center">
          <div className="text-xl md:text-2xl font-black tracking-tighter uppercase flex flex-wrap justify-center items-center gap-x-2">
            <span className="text-white">SECA TOTAL</span>
            <span className="text-[#ff6600] relative pb-1">
              ATÉ O CARNAVAL
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff0080]"></div>
            </span>
          </div>
        </div>
      </div>

      {/* Hero Content Area */}
      <div className="relative flex-1 flex flex-col items-center pt-12 pb-20 px-4">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-yellow-400/20 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-600/30 blur-[150px] rounded-full"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>

        <div className="container mx-auto text-center z-10 max-w-5xl flex-1 flex flex-col justify-center">
          {/* Authority Badge */}
          <div className="inline-flex flex-col items-center gap-2 px-6 py-3 mb-8 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 animate-fade-in self-center">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-ping"></span>
              <span className="text-[10px] md:text-sm font-black tracking-widest uppercase">Método testado por +5.400 jovens</span>
            </div>
            <div className="flex -space-x-2 mt-2">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" className="w-6 h-6 rounded-full border-2 border-white shadow-sm" />
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100" className="w-6 h-6 rounded-full border-2 border-white shadow-sm" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" className="w-6 h-6 rounded-full border-2 border-white shadow-sm" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" className="w-6 h-6 rounded-full border-2 border-white shadow-sm" />
            </div>
          </div>
          
          {/* Impactful Headline */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
            ÚLTIMA CHAMADA:<br/>
            <span className="text-yellow-300">SEQUE O CORPO</span><br/>
            PARA O VERÃO
          </h1>
          
          {/* Explanatory Subheadline */}
          <p className="text-lg md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-10 text-white/90 font-medium leading-relaxed px-4">
            O método focado em queima acelerada e definição real para quem não quer perder um minuto de folia.
          </p>

          {/* Strong CTA Section */}
          <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
            <button 
              onClick={scrollToPricing}
              className="group relative w-full px-6 py-4 md:px-12 md:py-6 bg-white text-pink-600 font-extrabold text-lg md:text-2xl rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:shadow-white/20 transform transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 uppercase">Quero Minha Vaga</span>
              <i className="fas fa-bolt text-yellow-400 group-hover:scale-125 transition-transform"></i>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gray-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 text-[11px] md:text-sm font-semibold text-white/80">
              <span className="flex items-center gap-2">
                <i className="fas fa-lock text-yellow-300"></i>
                Acesso Imediato
              </span>
              <span className="hidden sm:block opacity-30">|</span>
              <span className="flex items-center gap-2">
                <i className="fas fa-medal text-yellow-300"></i>
                Garantia de 7 Dias
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
