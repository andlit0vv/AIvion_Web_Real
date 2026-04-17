import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-black pt-20">
      <div className="max-w-[900px] mx-auto px-8 text-center">
        <h1 className="text-white text-3xl md:text-4xl lg:text-[42px] font-light leading-relaxed tracking-wide">
          Вы построили бизнес. Затем начали
          <br />
          масштабироваться и нанимать сотрудников
        </h1>
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

export default HeroSection;
