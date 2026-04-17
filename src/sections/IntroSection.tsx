const IntroSection = () => {
  return (
    <section
      id="intro"
      className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-black pt-16 pb-12"
    >
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" aria-hidden="true" />

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
