const INTRO_BACKGROUND_SRC = '/media/intro-hero.gif';

const IntroSection = () => {
  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <img
        src={INTRO_BACKGROUND_SRC}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" aria-hidden="true" />

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
