
import React from 'react';

const Problems: React.FC = () => {
  const problems = [
    { icon: "fa-sad-tear", text: "Insegurança ao usar roupas mais curtas ou biquíni." },
    { icon: "fa-battery-empty", text: "Cansaço constante e falta de disposição no dia a dia." },
    { icon: "fa-weight", text: "Sensação de inchaço e estufamento após as refeições." },
    { icon: "fa-clock", text: "Medo de não dar tempo de emagrecer para a folia." }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
            Você se sente assim quando pensa no <span className="text-pink-600">Carnaval?</span>
          </h2>
          <div className="h-1 w-20 bg-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                <i className={`fas ${p.icon} text-xl`}></i>
              </div>
              <p className="text-lg text-gray-700 leading-snug pt-1">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-orange-50 border-l-4 border-orange-400 rounded-r-2xl">
          <p className="text-xl italic text-gray-800 leading-relaxed">
            "A verdade é que a maioria das pessoas tenta dietas restritivas que matam a disposição logo no segundo dia. O segredo não é comer menos, é comer no tempo certo."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problems;
