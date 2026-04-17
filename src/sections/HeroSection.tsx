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
      className="relative flex min-h-screen snap-start flex-col items-center justify-center overflow-hidden bg-black pt-20 pb-10"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(34,158,217,0.16),transparent_42%),radial-gradient(circle_at_82%_70%,rgba(255,215,0,0.14),transparent_45%)]" />

      <div className="relative mx-auto flex min-h-[260px] w-full max-w-[980px] items-center justify-center px-8 text-center">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          const isPassed = index < activeSlide;

          return (
            <h1
              key={slide}
              className={`absolute max-w-[920px] text-3xl font-light leading-relaxed tracking-wide text-white transition-all duration-700 ease-out md:text-4xl lg:text-[46px] ${
                isActive
                  ? 'translate-y-0 scale-100 opacity-100 blur-0'
                  : isPassed
                    ? '-translate-y-10 scale-[0.96] opacity-0 blur-sm'
                    : 'translate-y-10 scale-[1.03] opacity-0 blur-sm'
              }`}
            >
              {slide}
            </h1>
          );
        })}
      </div>

      <div className="mt-14 flex items-center gap-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-3 w-3 transition-all duration-500 ${
              index <= activeSlide ? 'bg-white shadow-[0_0_14px_rgba(255,255,255,0.65)]' : 'bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
