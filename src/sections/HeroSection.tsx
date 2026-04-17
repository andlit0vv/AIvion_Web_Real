import { useRef, useState, type TouchEventHandler, type WheelEventHandler } from 'react';

const slides = [
  'Вы построили бизнес, затем начали масштабироваться и нанимать сотрудников',
  'Вы ищете людей, собеседуете их, а после даёте время на адаптацию или обучение',
  'Ваш рост упирается в команду',
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const isAnimatingRef = useRef(false);

  const changeSlide = (direction: 1 | -1) => {
    if (isAnimatingRef.current) {
      return false;
    }

    const nextSlide = activeSlide + direction;
    if (nextSlide < 0 || nextSlide > slides.length - 1) {
      return false;
    }

    isAnimatingRef.current = true;
    setActiveSlide(nextSlide);

    window.setTimeout(() => {
      isAnimatingRef.current = false;
    }, 650);

    return true;
  };

  const handleWheel: WheelEventHandler<HTMLElement> = (event) => {
    if (event.deltaY > 0) {
      const changed = changeSlide(1);
      if (changed || activeSlide < slides.length - 1) {
        event.preventDefault();
      }
      return;
    }

    const changed = changeSlide(-1);
    if (changed || activeSlide > 0) {
      event.preventDefault();
    }
  };

  const handleTouchStart: TouchEventHandler<HTMLElement> = (event) => {
    setTouchStartY(event.changedTouches[0]?.clientY ?? null);
  };

  const handleTouchEnd: TouchEventHandler<HTMLElement> = (event) => {
    if (touchStartY === null) {
      return;
    }

    const touchEndY = event.changedTouches[0]?.clientY ?? touchStartY;
    const deltaY = touchStartY - touchEndY;

    if (Math.abs(deltaY) < 40) {
      setTouchStartY(null);
      return;
    }

    if (deltaY > 0) {
      const changed = changeSlide(1);
      if (changed || activeSlide < slides.length - 1) {
        event.preventDefault();
      }
    } else {
      const changed = changeSlide(-1);
      if (changed || activeSlide > 0) {
        event.preventDefault();
      }
    }

    setTouchStartY(null);
  };

  return (
    <section
      id="hero"
      className="min-h-[65vh] flex flex-col items-center justify-center bg-black overflow-hidden py-10"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-[920px] mx-auto px-8 text-center min-h-[220px] flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-4xl lg:text-[42px] font-light leading-relaxed tracking-wide transition-opacity duration-500">
          {slides[activeSlide]}
        </h1>
      </div>

      <div className="flex items-center gap-2 mt-12">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 transition-all duration-300 ${
              index <= activeSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
