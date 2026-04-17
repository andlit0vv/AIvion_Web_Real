const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Автоматизация\nпроцессов',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '#',
    },
    {
      title: 'Интеграция систем',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      link: '#',
    },
    {
      title: 'Аналитика данных',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      link: '#',
    },
    {
      title: 'Облачные решения',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: '#',
    },
  ];

  return (
    <section className="min-h-[60vh] snap-start bg-black py-10" id="solutions">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Left Column - Title and Description */}
          <div className="lg:col-span-4">
            <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Решения
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-[280px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-[#229ED9] hover:bg-[#1B8FC5] text-white text-sm font-medium px-6 py-3 rounded transition-colors shadow-[0_10px_24px_rgba(34,158,217,0.35)]">
              Посмотреть все кейсы
            </button>
          </div>

          {/* Right Column - Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex h-full flex-col bg-[#1a1a1a] rounded-lg p-6 hover:bg-[#222] transition-colors duration-300"
                >
                  <h3 className="text-white text-lg font-semibold mb-4 whitespace-pre-line leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <a
                    href={solution.link}
                    className="mt-auto text-[#FFD700] text-sm font-medium hover:underline transition-all"
                  >
                    Подробнее
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
