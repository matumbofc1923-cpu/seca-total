
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050810] text-white pt-20 pb-20 px-4 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 items-start text-center md:text-left">
          
          {/* Brand & Mission */}
          <div className="col-span-1">
            <div className="text-2xl font-black tracking-tighter uppercase inline-flex items-center gap-x-2 mb-6">
              <span className="text-white">SECA TOTAL</span>
              <span className="text-[#ff6600] relative pb-1">
                2026
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff0080]"></div>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Nossa missão é transformar vidas através de protocolos práticos de saúde, ajudando homens e mulheres a recuperarem a autoestima e a disposição para o Carnaval e para a vida.
            </p>
          </div>

          {/* Quick Links & Contact - Now Text Only */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Suporte e Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-chevron-right text-[10px] text-pink-500"></i>
                Termos de Uso
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-chevron-right text-[10px] text-pink-500"></i>
                Política de Privacidade
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-envelope text-pink-500"></i>
                suporte@secatotal2026.com
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-clock text-pink-500"></i>
                Resposta em até 24h úteis
              </li>
            </ul>
          </div>

          {/* Security Seal */}
          <div className="col-span-1 bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-sm font-bold mb-4 uppercase tracking-widest text-gray-300">Ambiente Seguro</h4>
            <div className="flex items-center gap-4 mb-4">
              <i className="fas fa-shield-halved text-3xl text-green-500"></i>
              <p className="text-xs text-gray-400 text-left">
                Sua compra é processada com criptografia de ponta a ponta. Seus dados estão 100% protegidos.
              </p>
            </div>
            <div className="flex items-center gap-4 opacity-40 justify-center md:justify-start">
              <i className="fab fa-cc-visa text-xl"></i>
              <i className="fab fa-cc-mastercard text-xl"></i>
              <i className="fab fa-pix text-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
