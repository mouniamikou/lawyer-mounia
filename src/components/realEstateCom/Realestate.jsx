"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  HomeIcon,
  MapPinIcon,
  ScaleIcon,
  FileIcon,
  CheckCircleIcon,
  UserIcon,
  ClipboardCheckIcon,
  Building2Icon,
  LanguagesIcon,
} from "lucide-react";
import AcquisitionProcess from "./Acquisition";

const RealEstateServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const acquisitionServices = [
    {
      title: "Legal Documentation",
      items: [
        "Property legal documentation verification",
        "3-hour legal consultation package",
        "Review and preparation of purchase agreements in Portuguese and English/French",
        "Contract negotiation support if needed",
      ],
    },
    {
      title: "Transaction Support",
      items: [
        "Organization of purchase agreement signing",
        "Signature certification",
        "Tax amount determination ('Guias')",
        "Translation and assistance during notary deed signing",
        "Transaction registration with tax authorities",
      ],
    },
  ];

  const saleServices = [
    {
      title: "Legal Preparation",
      items: [
        "Legal documentation preparation assistance",
        "3-hour legal consultation package",
        "Power of attorney preparation (for absent clients)",
        "Bilingual sale agreement preparation (Portuguese-French)",
      ],
    },
    {
      title: "Transaction Management",
      items: [
        "Sale agreement negotiation",
        "Signing ceremony organization",
        "Signature certification",
        "Administrative procedures for preemption rights",
        "Translation and assistance during notary deed signing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#039B9B]/10 to-white py-24 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center opacity-10 mb-16">
        <div className="absolute inset-0">
        <Image
          width={900}
          height={100}
          src="/pexels-jing-zhang-1250761192-24287350.jpg"
          alt="Lisbon"
          className="w-full h-600 object-cover opacity-10"
        />
      </div>
      
          <h1 className="text-4xl md:text-5xl font-bold text-[#028787] mb-6">
            Professional Real Estate Services in Portugal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal support and representation for your property
            transactions, ensuring security and peace of mind throughout the
            process.
          </p>
          {/* Representation Options */}
          <motion.section variants={itemVariants} className="my-16">
            <div className="flex items-center justify-center mb-8">
              <UserIcon className="w-10 h-10 text-[#039B9B] mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">
                Representation Options
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-300">
                <div className="flex items-center mb-4">
                  <ClipboardCheckIcon className="w-8 h-8 text-[#039B9B] mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    In-Person Support
                  </h3>
                </div>
                <p className="text-gray-700">
                  Comprehensive support with your physical presence during all
                  key stages of the transaction, ensuring complete understanding
                  and control.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-300">
                <div className="flex items-center mb-4">
                  <LanguagesIcon className="w-8 h-8 text-[#039B9B] mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Remote Representation
                  </h3>
                </div>
                <p className="text-gray-700">
                  Full power of attorney services for clients unable to be
                  present, managing all aspects of the transaction on your
                  behalf.
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>

        {/* Property Acquisition Section */}
        <motion.section variants={itemVariants} className="mb-16">
          {/* <div className="flex items-center justify-center mb-8">
            <HomeIcon className="w-10 h-10 text-[#039B9B] mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Property Acquisition Services</h2>
          </div> */}
          {/* <div className="grid md:grid-cols-2 gap-8">
            {acquisitionServices.map((section, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#039B9B] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
          <AcquisitionProcess></AcquisitionProcess>
        </motion.section>

        {/* Property Sale Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Building2Icon className="w-10 h-10 text-[#039B9B] mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">
              Property Sale Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {saleServices.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#039B9B] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div variants={itemVariants} className="text-center">
          <h1 className="bg-white text-3xl font-bold text-[#039B9B] px-8 py-4 ">
            Request a Consultation
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RealEstateServicesPage;
