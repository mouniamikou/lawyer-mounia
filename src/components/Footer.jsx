"use client";
import { MapPin, Mail, Linkedin, Instagram } from "lucide-react";
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import LanguageSelector from './LanguageSelector';

export default function Footer() {
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
    <footer className="bg-gray-900  text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Section - Address & Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="flex items-center space-x-2">
            <MapPin size={20} />
            <span>Travessa Cova da Moura 2, R/C dir. 1350 – 118 Lisboa</span>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            <Mail size={20} />
            <a href="mailto:mm@mouniamikou.com" className="hover:text-primary transition-colors">mm@mouniamikou.com</a>
          </p>
          <div className="flex space-x-6 mt-4">
            <Link
              href="https://www.linkedin.com/in/mounia-mikou/"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={28} />
            </Link>
            <Link
              href="https://www.instagram.com/mounmk/"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <Instagram size={28} />
            </Link>
          </div>
        </div>
        
        {/* Center Section - Navigation */}
       <div>
  <h3 className="text-xl font-semibold mb-4">Navigation</h3>
  <ul className="space-y-2">
    {navItems.map((item, index) => (
      <li key={index}>
        <Link href={item.href} className="hover:text-primary transition-colors">
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

        
        {/* Right Section - Legal Consultation Box */}
        <div className=" p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Need Legal Advice?</h3>
          <p className="text-sm text-gray-300 mt-2">Get professional legal guidance for your specific situation.</p>
          <Link href="/contact">
            <button className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition">🗓 Book Consultation</button>
          </Link>
        </div>

        <div className="flex space-x-2">
          <Link href="/terms" className="hover:text-primary transition-colors">
          Terms of Service
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/privacy" className="hover:text-primary transition-colors">
          Privacy Policy
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/cookies" className="hover:text-primary transition-colors">
          Cookie Policy
          </Link>
        </div>
      </div>

      {/* Legal Links */}
      <div className="text-center pb-6 text-sm text-gray-400 border-t border-gray-800 pt-6">   
        <p className="mt-2">© {new Date().getFullYear()} Cabinet Juridique. All rights reserved.</p>
      </div>
    </footer>
  );
}
