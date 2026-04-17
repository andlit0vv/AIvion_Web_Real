import { useState, useEffect } from 'react';
import ContactModal from './ContactModal';
import logoArrowA from '../assets/logo-arrow-a.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('intro')}>
              <img src={logoArrowA} alt="AIvion logo" className="h-12 w-auto object-contain" />
            </div>

            <nav className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-white text-sm font-normal hover:opacity-80 transition-opacity"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('ai-business')}
                className="text-white text-sm font-normal hover:opacity-80 transition-opacity"
              >
                ИИ для бизнеса
              </button>
              <button
                onClick={() => scrollToSection('ai-chatbots')}
                className="text-white text-sm font-normal hover:opacity-80 transition-opacity"
              >
                ИИ-чат-боты
              </button>
              <button
                onClick={() => scrollToSection('cases')}
                className="text-white text-sm font-normal hover:opacity-80 transition-opacity"
              >
                Кейсы
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#FFD700] hover:bg-[#E6C200] text-black text-sm font-medium px-6 py-2.5 rounded transition-colors"
              >
                Обсудить проект
              </button>
            </nav>
          </div>
        </div>
      </header>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
