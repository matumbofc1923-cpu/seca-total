
import React from 'react';

const Qualification: React.FC = () => {
  const isFor = [
    "Quer resultados rápidos e visíveis para o Carnaval.",
    "Busca um método prático que se adapte à rotina corrida.",
    "Deseja desinchar e perder gordura de forma saudável.",
    "Está cansada de dietas restritivas que não funcionam.",
    "Precisa de um passo a passo claro e direto ao ponto."
  ];

  const isNotFor = [
    "Procura por pílulas mágicas ou milagres sem esforço.",
    "Não está disposta a seguir um cronograma de horários.",
    "Acredita que pode emagrecer comendo ultraprocessados o dia todo.",
    "Não tem compromisso com a própria transformação.",
    "É menor de idade, gestante ou possui restrições médicas graves."
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Este método é para <span className="text-orange-600">você?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Queremos que você tenha certeza de que este é o investimento certo para o seu momento. 
            Seja honesto com você mesmo:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Column: For whom it IS */}
          <div className="bg-green-50 rounded-[2.5rem] p-8 md:p-12 border border-green-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg shadow-green-200">
                <i className="fas fa-check"></i>
              </div>
              <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
                É para você se...
              </h3>
            </div>
            <ul className="space-y-6">
              {isFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-1 text-green-500">
                    <i className="fas fa-check-circle text-xl"></i>
                  </span>
                  <p className="text-lg text-gray-700 font-medium leading-tight">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: For whom it IS NOT */}
          <div className="bg-red-50 rounded-[2.5rem] p-8 md:p-12 border border-red-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg shadow-red-200">
                <i className="fas fa-times"></i>
              </div>
              <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
                Não é para você se...
              </h3>
            </div>
            <ul className="space-y-6">
              {isNotFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-1 text-red-500">
                    <i className="fas fa-times-circle text-xl"></i>
                  </span>
                  <p className="text-lg text-gray-700 font-medium leading-tight">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 italic text-sm">
            *Transparência é um dos nossos pilares. Só compre se você estiver pronta para aplicar o método.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
