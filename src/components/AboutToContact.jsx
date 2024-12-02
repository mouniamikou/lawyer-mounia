"use cleint"
import React from 'react';


import Link from 'next/link';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Portuguese Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your plans and how I can help you make Portugal your new home. Schedule a consultation today.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold 
                     transition-transform hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
          </Link>
  
      </div>
    </section>
  );
};

export default ContactCTA;