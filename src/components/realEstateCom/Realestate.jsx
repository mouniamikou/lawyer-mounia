"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserIcon,
  Home,
  Building2,
  ClipboardCheckIcon,
  LanguagesIcon,
  CheckCircle,
  AlertCircle,
  Info,
  ChevronLeft,
  ChevronRight,

  FileText,
  LucideFileCheck,

} from 'lucide-react';

const RealEstateServicesPage = () => {
  const [activeTab, setActiveTab] = useState('purchase');
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

  const purchaseSteps = [
    {
      title: "PREPARATION",
      description: "Documentation & Offer",
      duration: "1-2 weeks",
      details: [
        "Project Analysis",
        "Legal due diligence",
        "Purchase offer submission"
      ],
      tips: "Get pre-approved for mortgage if needed",
      requiredDocs: ["Property title", "Tax records", "Building permits", "Energy certificate"]
    },
    {
      title: "AGREEMENT",
      description: "Contract & Deposit",
      duration: "1-3 weeks",
      details: [
        "Conditions structuring",
        "Contract negotiation",
        "Signing",
        "Deposit payment"
      ],
      tips: "Standard deposit is 10-30%",
      requiredDocs: ["Draft preliminary contract", "Proof of funds for deposit", "NIF", "Identification documents"]
    },
    {
      title: "CONDITIONS PRECEDENT",
      description: "Verification & Funding",
      duration: "2-8 weeks",
      details: [
        "Funding confirmation, if any",
        "Verification of other conditions precedent",
        "Verification of preemptive rights",
        "Obtention of tax forms"
      ],
      tips: "For apartments, review condominium regulations and confirm no outstanding fees.",
      requiredDocs: ["Land registry certificate (less than 6 months old)", "Property tax certificate", "Condominium certificate (if applicable)", "Habitation license"]
    },
    {
      title: "NOTARY DEED",
      description: "Final Signature",
      duration: "1 week",
      details: [
        "Documentation preparation",
        "Translation if needed",
        "Legal representation if needed",
        "Tax payment oversight"
      ],
      tips: "Confirm exact payment procedures with your bank in advance, especially for international transfers.",
      requiredDocs: ["Final purchase contract", "Proof of funds for final payment", "Tax payment forms", "Power of attorney (if applicable)"]
    },
    {
      title: "TRANSFER",
      description: "Registration",
      duration: "2-4 weeks",
      details: [
        "Property registration",
        "Utility transfers",
        "Tax representation",
        "Post-acquisition support"
      ],
      tips: "Keep all acquisition documents safely stored for future reference and eventual resale.",
      requiredDocs: ["Signed deed", "Property tax registration form", "Proof of payment of all transaction taxes", "Utility contracts"]
    }
  ];


 
const saleSteps = [
  {
    title: "PREPARATION",
    description: "Documentation & Marketing",
    duration: "2-3 weeks",
    details: [
      "Property evaluation",
      "Document collection",
      "Legal verification",
      "Marketing preparation"
    ],
    tips: "Consider obtaining a new energy certificate if your current one is outdated",
    requiredDocs: ["Property Registration", "Habitation license", "Energy certificate", "Condominium agreements (if applicable)"]
  },
  {
    title: "NEGOTIATION",
    description: "Offers & Terms",
    duration: "4-12 weeks",
    details: [
      "Offer evaluation",
      "Terms negotiation",
      "Contract drafting"
    ],
    tips: "Negotiate progressive deposit terms for additional security if the closing timeline is extended.",
    requiredDocs: ["CPCV", "Property valuation documents", "Capital gains tax calculations", "Power of attorney (if selling remotely)"]
  },
  {
    title: "CLOSING",
    description: "Deed & Transfer",
    duration: "2-3 weeks",
    details: [
      "Final documentation",
      "Tax compliance",
      "Translation / Representation at notary",
      "Fund reception"
    ],
    tips: "Make sure all utility contracts are transferred or terminated.",
    requiredDocs: ["Final deed document", "Bank details for receiving funds", "Utility termination requests", "Capital gain declaration"]
  }
];

  const currentSteps = activeTab === 'purchase' ? purchaseSteps : saleSteps;

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
            backgroundImage: "url('/core-architects_portuguese-architecture99-1160x613.jpg')", // Replace with your image path

            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.4' // Adjust opacity as needed
          }}
        />

        {/* Header Content */}
        <div className="relative z-10 py-12">
          <motion.h1
            variants={serviceVariants}
            className="text-4xl md:text-5xl font-bold text-center text-primary-dark mb-8"
          >
            Real Estate Services
          </motion.h1>

          <motion.p
            variants={serviceVariants}
            className="text-xl text-center text-gray-800 max-w-3xl mx-auto mb-16"
          >
          Expert legal guidance through every stage of your property transaction in Portugal - ensuring security, compliance, and peace of mind.
          </motion.p>

          {/* Service Type Tabs */}
          <div className="flex justify-center gap-6 mb-12">
            <motion.button
              variants={serviceVariants}
              onClick={() => setActiveTab('purchase')}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl transition-all ${activeTab === 'purchase'
                  ? 'bg-[#039B9B] text-white shadow-lg'
                  : 'bg-white text-primary-dark hover:bg-[#039B9B]/10'
                }`}
            >
              <Home className="w-5 h-5" />
              <span className="text-base font-semibold">Purchase Process</span>
            </motion.button>
            <motion.button
              variants={serviceVariants}
              onClick={() => setActiveTab('sale')}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl transition-all ${activeTab === 'sale'
                  ? 'bg-[#039B9B] text-white shadow-lg'
                  : 'bg-white text-primary-dark hover:bg-[#039B9B]/10'
                }`}
            >
              <Building2 className="w-6 h-6" />
              <span className="text-base font-semibold">Sale Process</span>
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

            {/* Added overflow container */}
            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex min-w-max gap-4">
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
            {/* Representation Options */}
            <motion.section className="my-16">
              <div className="flex items-center justify-center mb-8">
                <UserIcon className="w-10 h-10 text-primary-dark mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Representation Options
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-300">
                  <div className="flex items-center mb-4">
                    <ClipboardCheckIcon className="w-8 h-8 text-primary-dark mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      In-Person Support
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Comprehensive legal presence throughout your property journey in Portugal. I personally attend all key meetings and signings, ensuring you have expert guidance at every critical moment, from first viewing to final handover. This option provides maximum security and support, especially recommended for first-time investors in Portuguese Real Estate.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-300">
                  <div className="flex items-center mb-4">
                    <LanguagesIcon className="w-8 h-8 text-primary-dark mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      Remote Representation
                    </h3>
                  </div>
                  <p className="text-gray-700">
                  Full legal protection and oversight for clients unable to be physically present in Portugal. Through secure power of attorney arrangements, I handle all aspects of your transaction with the same attention to detail as if you were present. Regular video consultations and detailed documentation keep you informed and in control throughout the process, regardless of your location.
                  </p>
                </div>
              </div>
            </motion.section>
          </AnimatePresence>
        </div>

        <motion.div variants={serviceVariants} className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-8">
            Start Your Property Journey
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
          Whether buying or selling property in Portugal, navigating the legal complexities requires expert guidance. From initial preparation to final registration, I provide comprehensive legal support to protect your interests and ensure a smooth transaction. Let's discuss your specific situation and create a tailored strategy for your Portuguese real estate journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RealEstateServicesPage;
