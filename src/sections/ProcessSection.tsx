import { useState, useEffect } from 'react';

const ProcessSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="max-w-[800px] mx-auto px-8 text-center">
        <p className="text-white/90 text-xl md:text-2xl lg:text-[26px] font-light leading-relaxed tracking-wide">
          Вы ищите людей, собеседуете их, а после даёте
          <br />
          время на адаптацию или обучение. Каждый новый
          <br />
          сотрудник — это время и деньги, а увольнение
          <br />
          всегда сложный и затратный процесс
        </p>
      </div>

      {/* Slider Indicators */}
      <div className="flex items-center gap-2 mt-24">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeSlide
                ? 'bg-white w-2 h-2'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
