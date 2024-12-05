"use client"
import Image from 'next/image';
import Fra from "../../public/france.png"
import Eng from "../../public/us_uk_flag_pre.jpg"
import { useLanguage } from '../context/LanguageContext';

const languages = {
  en: { flag: Fra, alt: 'Passer en français', code: 'fr' },
  fr: { flag: Eng, alt: 'Switch to English', code: 'en' }
};

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const currentOption = languages[language];

  const handleLanguageSwitch = () => {
    setLanguage(currentOption.code);
  };

  return (
    <button 
      onClick={handleLanguageSwitch}
      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      title={currentOption.alt}
    >
      <div className="w-6 h-4 relative">
        <Image
          src={currentOption.flag}
          alt={currentOption.alt}
          fill
          className="object-cover rounded-sm hover:opacity-80 transition-opacity"
          priority
        />
      </div>
    </button>
  );
}