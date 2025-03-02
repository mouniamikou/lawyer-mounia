"use client"
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import LanguageSelector from './LanguageSelector';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const navItems = [
    { label: t.nav.about, href: '/about' },
    { label: t.nav.installP, href: '/installationportugal' },
    { label: t.nav.realestate, href: '/Realestate' },
    { label: t.nav.business, href: '/business' },
    { label: t.nav.blogs, href: '/blogs' },
 
  ];
  
  return (
    <div className="fixed w-full bg-white/90 backdrop-blur-sm  z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">   
            <Link   href="/"
            className="text-xl font-bold w-16 h-16">         
            <Image src="/Logo blanc_page-0001.jpg" alt="logo lawyer" width={100} height={20}/>
            </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSelector />
            <Link
              href="/contact"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              {t.nav.contact}
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
                     <div className="px-2 py-2">
               <Link
              href="/contact"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              {t.nav.contact}
            </Link>
            </div>
              <div className="px-3 py-2">
                <LanguageSelector />
              </div>
              
            </div>
            
          </motion.div>
        )}
      </div>
    </div>
  );
}