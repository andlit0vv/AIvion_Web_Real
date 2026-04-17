import { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    teamSize: '',
    budget: '',
    task: '',
    contact: '',
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setOpenDropdown(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  const dropdownOptions = {
    role: ['CEO / Founder', 'CTO', 'Product Manager', 'Marketing Director', 'Другое'],
    teamSize: ['1-10', '11-50', '51-200', '200+'],
    budget: ['До 500K ₽', '500K - 2M ₽', '2M - 5M ₽', '5M+ ₽'],
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn" />

      {/* Modal */}
      <div
        className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-[500px] mx-4 p-8 md:p-10 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          aria-label="Закрыть"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-white text-2xl font-semibold mb-10">Обсудить проект</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Your Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full bg-transparent text-white text-base placeholder:text-white/40 border-b border-white/20 pb-3 focus:outline-none focus:border-white/50 transition-colors"
              required
            />
          </div>

          {/* Company Name */}
          <div className="relative">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="w-full bg-transparent text-white text-base placeholder:text-white/40 border-b border-white/20 pb-3 focus:outline-none focus:border-white/50 transition-colors"
              required
            />
          </div>

          {/* Роль в компании */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'role' ? null : 'role')}
              className="w-full bg-transparent text-left text-base pb-3 border-b border-white/20 focus:outline-none flex items-center justify-between"
            >
              <span className={formData.role ? 'text-white' : 'text-white/40'}>
                {formData.role || 'Роль в компании'}
              </span>
              <svg
                className={`w-5 h-5 text-white/50 transition-transform ${openDropdown === 'role' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'role' && (
              <div className="absolute top-full left-0 right-0 bg-[#1a1a1a] border border-white/10 rounded-lg mt-2 py-2 z-10 animate-fadeIn">
                {dropdownOptions.role.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleDropdownSelect('role', option)}
                    className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Размер команды */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'teamSize' ? null : 'teamSize')}
              className="w-full bg-transparent text-left text-base pb-3 border-b border-white/20 focus:outline-none flex items-center justify-between"
            >
              <span className={formData.teamSize ? 'text-white' : 'text-white/40'}>
                {formData.teamSize || 'Размер команды'}
              </span>
              <svg
                className={`w-5 h-5 text-white/50 transition-transform ${openDropdown === 'teamSize' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'teamSize' && (
              <div className="absolute top-full left-0 right-0 bg-[#1a1a1a] border border-white/10 rounded-lg mt-2 py-2 z-10 animate-fadeIn">
                {dropdownOptions.teamSize.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleDropdownSelect('teamSize', option)}
                    className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Бюджет */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'budget' ? null : 'budget')}
              className="w-full bg-transparent text-left text-base pb-3 border-b border-white/20 focus:outline-none flex items-center justify-between"
            >
              <span className={formData.budget ? 'text-white' : 'text-white/40'}>
                {formData.budget || 'Бюджет'}
              </span>
              <svg
                className={`w-5 h-5 text-white/50 transition-transform ${openDropdown === 'budget' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'budget' && (
              <div className="absolute top-full left-0 right-0 bg-[#1a1a1a] border border-white/10 rounded-lg mt-2 py-2 z-10 animate-fadeIn">
                {dropdownOptions.budget.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleDropdownSelect('budget', option)}
                    className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Опишите вашу задачу */}
          <div className="relative">
            <textarea
              name="task"
              value={formData.task}
              onChange={handleInputChange}
              placeholder="Опишите вашу задачу"
              rows={4}
              className="w-full bg-transparent text-white text-base placeholder:text-white/40 border-b border-white/20 pb-3 focus:outline-none focus:border-white/50 transition-colors resize-none"
            />
          </div>

          {/* Ваш контакт */}
          <div className="relative">
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Ваш контакт (@telegram_id)"
              className="w-full bg-transparent text-white text-base placeholder:text-white/40 border-b border-white/20 pb-3 focus:outline-none focus:border-white/50 transition-colors"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-medium py-4 rounded-lg transition-colors mt-4"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
