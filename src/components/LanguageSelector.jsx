"use client"
import { Globe } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';
const languages = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },

] 

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
        <Globe className="w-5 h-5" />
        <span>{languages.find(l => l.code === language)?.label}</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`block w-full text-left px-4 py-2 text-sm ${
              language === lang.code ? 'bg-gray-100 text-primary' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}