"use client"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ];

  const practiceAreas = [
    'Corporate Law',
    'Litigation',
    'Real Estate',
    'Employment Law',
    'Intellectual Property',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Cabinet Juridique</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Rua Augusta, Lisbon, Portugal</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} />
                <span>+351 123 456 789</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <span>contact@cabinet-juridique.pt</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={18} />
                <span>Mon-Fri: 9:00 - 18:00</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a
                    href={`/practice-areas/${area.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-primary transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for legal updates and insights.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Cabinet Juridique. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}