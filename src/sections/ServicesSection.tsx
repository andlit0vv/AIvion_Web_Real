const ServicesSection = () => {
  return (
    <section className="snap-start bg-black py-10" id="services">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
        <h2 className="text-left text-white text-3xl md:text-4xl font-semibold mb-6">Наши услуги</h2>
        {/* Row 1: Аналитика и AI (2/3) + Коммуникации (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Аналитика и AI */}
          <div className="lg:col-span-2 border border-white/20 rounded-lg p-8 transition-all duration-500 hover:scale-[1.015] hover:border-[#FFD700]/80 hover:shadow-[0_0_34px_rgba(255,215,0,0.32)]">
            <h3 className="text-white text-2xl font-semibold mb-2">Аналитика и AI</h3>
            <p className="text-white/50 text-sm mb-8">Data-driven подход и прогнозирование</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Прогнозирование и ML-модели</span>
              </a>
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Сегментация клиентов</span>
              </a>
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Мониторинг конкурентов</span>
              </a>
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Динамическое ценообразование</span>
              </a>
            </div>
          </div>

          {/* Коммуникации */}
          <div className="border border-white/20 rounded-lg p-8">
            <h3 className="text-white text-2xl font-semibold mb-2">Коммуникации</h3>
            <p className="text-white/50 text-sm mb-8">Взаимодействие с клиентами</p>
            <div className="space-y-6">
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">AI-ассистенты и чат-боты</span>
              </a>
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Персонализация ответов клиенту</span>
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: Продажи + Маркетинг + Разработка */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Продажи */}
          <div className="border border-white/20 rounded-lg p-8">
            <h3 className="text-white text-2xl font-semibold mb-2">Продажи</h3>
            <p className="text-white/50 text-sm mb-8">Оптимизация процессов продаж</p>
            <div className="space-y-6">
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Обработка и квалификация заявок</span>
              </a>
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Анализ звонков и диалогов</span>
              </a>
            </div>
          </div>

          {/* Маркетинг */}
          <div className="border border-white/20 rounded-lg p-8">
            <h3 className="text-white text-2xl font-semibold mb-2">Маркетинг</h3>
            <p className="text-white/50 text-sm mb-8">Автоматизация SMM</p>
            <div className="space-y-6">
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Автогенерация контента</span>
              </a>
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Аналитика каналов</span>
              </a>
            </div>
          </div>

          {/* Разработка */}
          <div className="border border-white/20 rounded-lg p-8">
            <h3 className="text-white text-2xl font-semibold mb-2">Разработка</h3>
            <p className="text-white/50 text-sm mb-8">Создание IT-систем</p>
            <div className="space-y-6">
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Внутренние системы и интерфейсы</span>
              </a>
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Telegram-боты и AI-ассистенты</span>
              </a>
            </div>
          </div>
        </div>

        {/* Row 3: AI-инфраструктура (expanded) + Операционные процессы */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* AI-инфраструктура - expanded width */}
          <div className="lg:col-span-2 border border-white/20 rounded-lg p-8">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-white text-2xl font-semibold whitespace-nowrap">AI-инфраструктура</h3>
              <span className="bg-[#FFD700] text-black text-xs font-semibold px-3 py-1 rounded">НОВОЕ</span>
            </div>
            <p className="text-white/50 text-sm mb-8 whitespace-nowrap">Интеграция продвинутых LLM-моделей</p>
            <div className="space-y-6">
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Облачные нейросети</span>
              </a>
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Гибридная архитектура</span>
              </a>
            </div>
          </div>

          {/* Операционные процессы - same height, adjusted width */}
          <div className="lg:col-span-3 border border-white/20 rounded-lg p-8">
            <h3 className="text-white text-2xl font-semibold mb-2">Операционные процессы</h3>
            <p className="text-white/50 text-sm mb-8">Оптимизация бизнес-процессов</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Документооборот и обработка данных</span>
              </a>
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Интеграция и управление данными</span>
              </a>
              <a href="#" className="group flex items-start gap-3">
                <div className="w-1 h-5 bg-white/30 rounded-full mt-0.5 flex-shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300"></div>
                <span className="text-white/80 text-sm group-hover:text-[#FFD700] transition-colors duration-300">Автоматизация процессов</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
