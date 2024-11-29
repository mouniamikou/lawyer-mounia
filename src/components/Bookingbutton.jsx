"use client"
import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function BookingButton() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <a
      href="https://calendly.com/your-link"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center gap-2"
    >
      <Phone className="w-6 h-6" />
      <span className="font-medium">{t.booking.callToAction}</span>
    </a>
  );
}