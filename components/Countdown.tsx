
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    // Arbitrary target date for carnival excitement
    const target = new Date();
    target.setDate(target.getDate() + 15);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((difference / 1000 / 60) % 60);
      const secs = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, mins, secs });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6">
        <span className="text-lg font-bold text-orange-400 uppercase tracking-widest text-center">
          ⏰ O Carnaval está chegando:
        </span>
        <div className="flex gap-4">
          {[
            { label: 'DIAS', value: timeLeft.days },
            { label: 'HORAS', value: timeLeft.hours },
            { label: 'MIN', value: timeLeft.mins },
            { label: 'SEG', value: timeLeft.secs },
          ].map((item) => (
            <div key={item.label} className="text-center bg-gray-800 p-2 rounded-lg min-w-[70px]">
              <div className="text-2xl font-black">{String(item.value).padStart(2, '0')}</div>
              <div className="text-[10px] text-gray-400 font-bold">{item.label}</div>
            </div>
          ))}
        </div>
        <span className="hidden lg:block text-sm text-gray-400 max-w-[200px] leading-tight">
          Ainda dá tempo de transformar seu corpo se começar hoje!
        </span>
      </div>
    </div>
  );
};

export default Countdown;
