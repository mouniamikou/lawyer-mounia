"use client";
import { motion } from "framer-motion";
import { Home, Building, Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Home,
    title: "Settling in Portugal",
    description: "Expert Guidance for Seamless Relocation and Tax Optimization",
    items: [
      "Tax Identification Number (NIF)",
      "European Resident Status",
      "Visa and Nationality Consultation",
      "Non-Habitual Resident (NHR) Tax Regime",
    ],
    image: "/passportPP.jpeg",
    buttonText: "Discover Relocation Solutions",
    seoKeywords: [
      "Portugal immigration",
      "tax optimization",
      "NHR status",
      "expat relocation",
    ],
    link:"/installationportugal"
  },
  {
    icon: Building,
    title: "Real Estate Investment",
    description: "Comprehensive Legal Support for Property Transactions",
    items: [
      "Property Purchase and Sale",
      "Primary Residence Acquisition",
      "Company Incorporation",
      "Investment Property Management",
    ],
    image: "/pexels-jing-zhang-1250761192-24287350.jpg",
    buttonText: "Explore Property Options",
    seoKeywords: [
      "Portugal real estate",
      "property investment",
      "legal property support",
      "international property",
    ],
    link:"/Realestate"
  },
  {
    icon: Briefcase,
    title: "Business Establishment",
    description: "End-to-End Support for Your Business Venture in Portugal",
    items: [
      "Optimal Legal Structure Identification",
      "Business Activity Registration",

      "Regulatory Compliance",
      "Contract Development",
    ],
    image: "/pexels-su-lopes-54155462-7789476.jpg",
    buttonText: "Launch Your Business",
    seoKeywords: [
      "Portugal business formation",
      "startup legal services",
      "corporate law",
      "business compliance",
    ],
    link:"/business"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {services.map((service, index) => (
   <motion.div
     key={service.title}
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8, delay: index * 0.2 }}
     className="bg-white rounded-xl shadow-lg overflow-hidden group"
   >
     <div className="relative h-56 w-full overflow-hidden">
       <Image
         fill
         src={service.image}
         alt={service.title}
         className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-110"
         quality={90}
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
       />
     </div>
     <div className="p-6">
       <h3 className="text-xl font-bold text-gray-900 mb-3">
         {service.title}
       </h3>
       <p className="text-gray-600 mb-4">{service.description}</p>
       <ul className="space-y-2 mb-6">
         {service.items.map((item) => (
           <li key={item} className="text-gray-600 flex items-center">
             <span className="text-primary mr-2">•</span>
             {item}
           </li>
         ))}
       </ul>
       <button className="w-full bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
        <Link href={service.link}>
        
         {service.buttonText}
        </Link>
         <ArrowRight size={16} />
       </button>
     </div>
   </motion.div>
 ))}
</div>
      </div>
    </section>
  );
}
