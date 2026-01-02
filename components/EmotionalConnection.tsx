
import React from 'react';

const EmotionalConnection: React.FC = () => {
  const pains = [
    {
      title: "Cansado(a) de promessas vazias?",
      text: "Você já tentou de tudo: dietas restritivas, shakes milagrosos e treinos exaustivos que só te deixaram sem energia e frustrado(a).",
      icon: "fa-heart-crack"
    },
    {
      title: "Sem tempo para a academia?",
      text: "Sua rotina é uma loucura e a última coisa que você consegue é passar 2 horas puxando ferro todos os dias.",
      icon: "fa-hourglass-half"
    },
    {
      title: "Aquela barriga que não desincha?",
      text: "Acordar se sentindo bem e terminar o dia com a sensação de estar 'estufado(a)' e com a roupa apertando.",
      icon: "fa-compress"
    },
    {
      title: "Ansiedade que vira comida?",
      text: "O estresse do dia a dia te faz buscar conforto nos doces e massas, e a culpa vem logo em seguida.",
      icon: "fa-brain"
    }
  ];

  return (
    <section className="py-24 px-4 bg-pink-50/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-pink-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Eu sei como você se sente...
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Sente que o tempo para 2026 está <br className="hidden md:block"/>
            <span className="text-pink-600">correndo contra você?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {pains.map((pain, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 hover:border-pink-300 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                  <i className={`fas ${pain.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{pain.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {pain.text}
              </p>
            </div>
          ))}
        </div>

        <div className="relative bg-gray-900 rounded-[2.5rem] p-10 md:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              O medo de chegar no Carnaval e querer se esconder...
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              É horrível olhar para as fotos ou para aquela fantasia/sunga/biquíni e sentir que "dessa vez também não vai dar". O Carnaval deveria ser sobre liberdade e alegria, não sobre vergonha do próprio corpo.
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-semibold text-yellow-400 italic">
              "Mas e se eu te dissesse que as próximas semanas podem ser o início da sua melhor versão, sem sofrimento?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalConnection;
