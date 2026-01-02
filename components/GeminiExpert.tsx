
import React from 'react';
import { useState } from 'react';
import { getCarnivalTip } from '../services/geminiService';

const GeminiExpert: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [weight, setWeight] = useState('');
  const [tip, setTip] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetTip = async () => {
    if (!goal || !weight) return;
    setLoading(true);
    const result = await getCarnivalTip(goal, weight);
    setTip(result);
    setLoading(false);
  };

  return (
    <section className="py-24 px-4 bg-[#0a0f1e] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-[#161e2e] p-8 md:p-16 rounded-[2.5rem] border border-white/5 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-black text-[#fcc419] mb-4 tracking-tight">
              Simulador de Resultado
            </h3>
            <p className="text-gray-400 text-lg md:text-xl font-medium">
              Receba uma dica exclusiva da nossa inteligência especialista
            </p>
          </div>

          <div className="space-y-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-400 ml-1 uppercase tracking-widest">
                  Qual seu objetivo principal?
                </label>
                <input 
                  type="text" 
                  placeholder="Ex: Secar a barriga"
                  className="w-full bg-[#1e293b] border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-[#fcc419] outline-none transition-all text-white placeholder:text-gray-600 text-lg shadow-inner"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-400 ml-1 uppercase tracking-widest">
                  Seu peso atual (kg)
                </label>
                <input 
                  type="number" 
                  placeholder="Ex: 80"
                  className="w-full bg-[#1e293b] border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-[#fcc419] outline-none transition-all text-white placeholder:text-gray-600 text-lg shadow-inner"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>

            <button 
              onClick={handleGetTip}
              disabled={loading || !goal || !weight}
              className={`w-full py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-black/20 ${
                loading 
                  ? 'bg-gray-700 cursor-not-allowed text-gray-400' 
                  : 'bg-[#fcc419] text-[#0a0f1e] hover:bg-[#ffcf33] active:scale-[0.98] hover:shadow-[#fcc419]/20'
              }`}
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <i className="fas fa-circle-notch animate-spin"></i>
                  <span>PROCESSANDO...</span>
                </div>
              ) : (
                <>
                  <i className="fas fa-pencil-alt text-base"></i>
                  GERAR DICA PERSONALIZADA
                </>
              )}
            </button>
          </div>

          {tip && (
            <div className="mt-12 p-8 md:p-10 bg-black/40 border border-white/10 rounded-[2rem] animate-fade-in backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-[#fcc419] rounded-xl flex items-center justify-center text-[#0a0f1e] text-lg shadow-lg">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#fcc419] font-black text-xs uppercase tracking-[0.2em]">Especialista Luma</span>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Dica Estratégica</span>
                </div>
              </div>
              <p className="text-xl md:text-2xl italic text-gray-100 leading-relaxed font-medium">
                "{tip}"
              </p>
              <div className="mt-6 flex justify-end">
                 <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#fcc419] text-sm font-black uppercase tracking-widest border-b-2 border-[#fcc419]/30 hover:border-[#fcc419] transition-all"
                 >
                   Ver método completo <i className="fas fa-arrow-right ml-1"></i>
                 </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default GeminiExpert;
