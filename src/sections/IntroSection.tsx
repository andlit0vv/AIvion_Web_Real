import { useEffect, useRef } from 'react';

const IntroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let isMounted = true;
    let animationInstance: { destroy?: () => void } | null = null;

    const initAnimation = async () => {
      try {
        const dotLottieCdnUrl = 'https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm';
        const module = (await import(/* @vite-ignore */ dotLottieCdnUrl)) as {
          DotLottie: new (config: {
            autoplay: boolean;
            loop: boolean;
            canvas: HTMLCanvasElement;
            src: string;
          }) => { destroy?: () => void };
        };
        if (!isMounted || !canvasRef.current) {
          return;
        }

        animationInstance = new module.DotLottie({
          autoplay: true,
          loop: true,
          canvas: canvasRef.current,
          src: '/media/hero-section.json',
        });
      } catch (error) {
        console.error('Не удалось загрузить dotLottie-плеер:', error);
      }
    };

    initAnimation();

    return () => {
      isMounted = false;
      animationInstance?.destroy?.();
    };
  }, []);

  return (
    <section
      id="intro"
      className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden bg-black pt-20 pb-12"
    >
      <canvas
        id="dotlottie-canvas"
        ref={canvasRef}
        className="absolute inset-0 h-full w-full scale-[1.08] opacity-45"
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 25%, rgba(255, 215, 0, 0.24), transparent 35%), radial-gradient(circle at 80% 20%, rgba(60, 120, 255, 0.2), transparent 38%), radial-gradient(circle at 50% 75%, rgba(255, 255, 255, 0.1), transparent 40%)',
        }}
      />
      <div className="intro-grid-overlay absolute inset-0" aria-hidden="true" />
      <div className="intro-glow intro-glow-left absolute -left-24 top-10 h-72 w-72" aria-hidden="true" />
      <div className="intro-glow intro-glow-right absolute -right-16 bottom-0 h-80 w-80" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center md:px-10">
        <h1 className="text-4xl font-medium leading-tight text-white md:text-6xl lg:text-7xl">
          Помогаем вашему бизнесу расти без увеличения команды
        </h1>
        <p className="max-w-3xl text-base font-normal leading-relaxed text-white/85 md:text-xl">
          Определяем узкие места в процессах, где теряются время и деньги, и закрываем их через автоматизацию,
          внутренние системы и AI
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
