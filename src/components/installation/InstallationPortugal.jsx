"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import {
  CheckCircle,
  AlertCircle,
  Info,
  ChevronLeft,
  ChevronRight,
  Clock,
  BookMarked,
  FileText,
  LucideFileCheck,
  Globe,
  Flag
} from 'lucide-react';
import EUImag from "../../../public/european.png";

const InstallationPortugal = () => {
  const [activeTab, setActiveTab] = useState('global');
  const [activeStep, setActiveStep] = useState(0);
  const [showTips, setShowTips] = useState(true);
  const [currentStep, setCurrentStep] = useState(null);

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const globalSteps = [
    {
      title: "VISA APPLICATION",
      description: "Initial Process",
      descriptionDetails: "Secure your legal right to reside in Portugal with strategic visa planning and expert application support.",
      duration: "4-6 weeks",
      details: [
        "Determination of best suitable visa",
        "Document preparation",
        "Application submission",
        "Status tracking"
      ],
      tips: "Begin the process at least 3-4 months before your intended move date",
      requiredDocs: ["Passport", "Proof of income", "Criminal record certificate", "Health insurance", "Proof of accommodation"]
    },
    {
      title: "RELOCATION",
      description: "Moving Process",
      descriptionDetails: "Navigate pre-arrival preparations and essential administrative steps for a smooth transition.",
      duration: "2-3 weeks",
      details: [
        "Housing arrangement",
        "Bank account setup",
        "NIF registration",
        "Healthcare registration"
      ],
      tips: "Consider temporary accommodation first to allow for in-person property viewing before long-term commitment",
      requiredDocs: ["Proof of address", "Employment contract or proof of self-employment", "Tax documents", "Visa approval"]
    },
    {
      title: "SETTLEMENT",
      description: "Final Steps",
      descriptionDetails: "Complete your integration with residency registration, healthcare enrollment, and community establishment.",
      duration: "2-4 weeks",
      details: [
        "Residency registration",
        "Social security enrollment",
        "Embassy Registration",
        "Community integration"
      ],
      tips: "Consider Portuguese language courses to facilitate integration and daily interactions.",
      requiredDocs: ["Visa approval documentation", "Rental contract or property deed", "Bank statements from your Portuguese account", "Proof of health insurance coverage"]
    }
  ];

  const euSteps = [
    {
      title: "REGISTRATION",
      description: "Initial Setup",
      descriptionDetails: "Begin your journey with essential registrations and document preparations for EU citizens.",
      duration: "1-2 weeks",
      details: [
        "EU citizenship verification",
        "NIF Registration",
        "Address registration",
        "Registration certificate"
      ],
      tips: "Get your NIF before moving to Portugal",
      requiredDocs: ["EU ID/Passport", "Proof of address", "Employment details or proof of sufficient financial means"]
    },
    {
      title: "ESTABLISHMENT",
      description: "Local Setup",
      descriptionDetails: "Secure your local administrative foundation with banking, healthcare, and residential documentation.",
      duration: "2-3 weeks",
      details: [
        "Bank account opening",
        "Healthcare registration",
        "Social security registration"
      ],
      tips: "Registration with the Portuguese system is mandatory for EU citizens staying more than 3 months in Portugal",
      requiredDocs: ["ID documents", "Proof of address", "Employment contract or proof of financial means", "Tax registration certificate"]
    },
    {
      title: "INTEGRATION",
      description: "Final Process",
      descriptionDetails: "Complete your transition with long-term administrative requirements and consider citizenship.",
      duration: "2-4 weeks",
      details: [
        "Permanent registration",
        "Citizenship"
      ],
      tips: "Consider Portuguese language courses for better integration and professional opportunities",
      requiredDocs: ["Registration certificate", "Residence proof", "Tax documents"]
    }
  ];

  const currentSteps = activeTab === 'global' ? globalSteps : euSteps;

  useEffect(() => {
    setActiveStep(0);
  }, [activeTab]);

  useEffect(() => {
    if (currentSteps && activeStep >= 0) {
      setCurrentStep(currentSteps[activeStep]);
    }
  }, [activeStep, activeTab]);

  const handleNext = () => {
    if (activeStep < currentSteps.length - 1) {
      setActiveStep(prevStep => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep(prevStep => prevStep - 1);
    }
  };

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  if (!currentStep) return null;

  return (
    <div className="py-24 px-4">
      {/* Header Section with Background */}
      <div className="relative mb-12">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/passportPP.jpeg')", // Use your image path

            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.3' // Adjust opacity as needed
          }}
        />

        {/* Header Content */}
        <div className="relative z-10 py-12">
          <motion.h1
            variants={serviceVariants}
            className="text-4xl md:text-5xl font-bold text-center text-primary-dark mb-8"
          >
            Installation in Portugal
          </motion.h1>

          <motion.p
            variants={serviceVariants}
            className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16"
          >
            Expert legal guidance for a smooth transition to Portugal, with personalized support through every administrative step of your relocation journey.
          </motion.p>

          {/* Citizenship Type Tabs */}
          <div className="flex justify-center gap-6">
            <motion.button
              variants={serviceVariants}
              onClick={() => setActiveTab('global')}
              className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2 sm:py-4 rounded-xl transition-all text-sm sm:text-lg ${activeTab === 'global'
                ? 'bg-[#039B9B] text-white shadow-lg'
                : 'bg-white text-primary-dark hover:bg-[#039B9B]/10'
                }`}
            >
              <Globe className="w-4 h-4 sm:w-6 sm:h-6" />
              <span className="font-semibold">Non-EU Citizens - Complete Visa Process</span>
            </motion.button>
            <motion.button
              variants={serviceVariants}
              onClick={() => setActiveTab('eu')}
              className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2 sm:py-4 rounded-xl transition-all text-sm sm:text-lg ${activeTab === 'eu'
                ? 'bg-[#039B9B] text-white shadow-lg'
                : 'bg-white text-primary-dark hover:bg-[#039B9B]/10'
                }`}
            >
              <Image src={EUImag} alt="eu citizen" width={20} height={20} className="w-4 h-4 sm:w-6 sm:h-6" />
              <span className="font-semibold">EU Citizens - Streamlined Process</span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-primary-dark">Process Timeline</h2>
            <button
              onClick={() => setShowTips(!showTips)}
              className="p-2 rounded-full hover:bg-[#039B9B]/10 transition-colors"
            >
              <Info className={`w-6 h-6 ${showTips ? 'text-primary-dark' : 'text-gray-400'}`} />
            </button>
          </div>

          <div className="relative mb-12">
            <div className="absolute top-8 left-0 w-full h-1 bg-[#039B9B]/10" />

            <div className="relative flex justify-between">
              {currentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col items-center w-48 group ${index === activeStep ? 'scale-105' : ''
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center
                      ${index <= activeStep ? 'text-primary-dark' : 'text-gray-400'} 
                      ${index === activeStep ? 'ring-4 ring-[#039B9B]/20' : ''}
                      bg-white border-2 border-current
                      transition-all duration-300 cursor-pointer group-hover:shadow-lg`}
                  >
                    <span className="font-medium">{index + 1}</span>
                  </button>

                  <div className={`text-center mt-4 transition-colors duration-300 ${index === activeStep ? 'text-primary-dark' : 'text-gray-600'
                    }`}>
                    <h3 className="font-bold text-xs mb-1">{step.title}</h3>
                    <p className="text-xs mb-1 opacity-80">{step.description}</p>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-between mb-8">
            <button
              onClick={handlePrevious}
              disabled={activeStep === 0}
              className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${activeStep > 0
                ? 'bg-[#039B9B] text-white hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <button
              onClick={handleNext}
              disabled={activeStep === currentSteps.length - 1}
              className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${activeStep < currentSteps.length - 1
                ? 'bg-[#039B9B] text-white hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <AnimatePresence mode="wait">

            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <BookMarked className="w-6 h-6 text-primary-dark" />
                  <h4 className="font-semibold text-primary-dark text-lg">Description</h4>
                </div>
                <p className="bg-[#039B9B]/10 rounded-lg p-6">{currentStep.descriptionDetails}</p>
                <div className="flex items-center gap-2 my-6">
                  <LucideFileCheck className="w-6 h-6 text-primary-dark" />
                  <h4 className="font-semibold text-primary-dark text-lg">Key Tasks</h4>
                </div>

                <ul className="space-y-4">
                  {currentStep.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[#039B9B]/5 p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary-dark mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>


              <div className="space-y-8">
                {showTips && (
                  <div className="bg-[#039B9B]/10 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-primary-dark mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary-dark mb-2">Helpful Tip</h4>
                        <p className="text-gray-600">{currentStep.tips}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-6 h-6 text-primary-dark" />
                    <h4 className="font-semibold text-primary-dark">Required Documents</h4>
                  </div>
                  <ul className="space-y-3">
                    {currentStep.requiredDocs.map((doc, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600 bg-[#039B9B]/5 p-3 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-[#039B9B]" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div variants={serviceVariants} className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-8">
            Start Your Portugal Journey
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
          Whether you're an EU citizen with streamlined processes or a global citizen navigating visa requirements, my legal expertise ensures a compliant and efficient transition to your new life in Portugal. Let's discuss your unique situation and create a personalized roadmap for your move.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InstallationPortugal;