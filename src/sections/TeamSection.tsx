const TeamSection = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center bg-black py-10">
      <div className="max-w-[800px] mx-auto px-8 text-center">
        <h2 className="text-white text-3xl md:text-4xl lg:text-[44px] font-semibold leading-tight tracking-wide mb-6">
          Наша команда создает
          <br />
          такие системы
        </h2>

        <p className="text-white/80 text-base md:text-lg font-light leading-relaxed tracking-wide mb-8 max-w-[650px] mx-auto">
          С их помощью те же люди начинают давать больше результата —
          <br />
          быстрее выполняют задачи, допускают меньше ошибок и
          <br />
          закрывают больший объём работы без перегрузки
        </p>

        <button className="bg-transparent border border-white text-white text-sm font-medium px-8 py-3.5 rounded hover:bg-white hover:text-black transition-all duration-300">
          Посмотреть примеры
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
