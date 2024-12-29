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
        "Property documentation review",
        "Legal status verification",
        "Market analysis",
        "Offer submission"
      ],
      tips: "Get pre-approved for mortgage if needed",
      requiredDocs: ["Property title", "Tax records", "Building permits"]
    },
    {
      title: "AGREEMENT",
      description: "Contract & Deposit",
      duration: "1-3 weeks",
      details: [
        "Offer acceptance",
        "Contract negotiation",
        "Deposit payment",
        "CPCV signing"
      ],
      tips: "Standard deposit is 10-20%",
      requiredDocs: ["Bank details", "ID documents", "Proof of funds"]
    },
    {
      title: "PREEMPTION",
      description: "Rights Verification",
      duration: "2-8 weeks",
      details: [
        "Public authority rights check",
        "Tenant rights verification",
        "Notification procedures",
        "Waiting period"
      ],
      tips: "Timeline varies by municipality",
      requiredDocs: ["Property registration", "Tenant contracts"]
    },
    {
      title: "NOTARY DEED",
      description: "Final Signature",
      duration: "1 week",
      details: [
        "Conditions verification",
        "Final payment preparation",
        "Deed review",
        "Official signing"
      ],
      tips: "Bring valid ID and POA if applicable",
      requiredDocs: ["All previous documents", "Payment confirmation"]
    },
    {
      title: "TRANSFER",
      description: "Registration",
      duration: "2-4 weeks",
      details: [
        "Land registry filing",
        "Tax authority registration",
        "Utility transfers",
        "Key handover"
      ],
      tips: "Keep all documentation safe",
      requiredDocs: ["Signed deed", "Tax forms", "Registration fees"]
    }
  ];

  const saleSteps = [
    {
      title: "PREPARATION",
      description: "Documentation Setup",
      duration: "2-3 weeks",
      details: [
        "Property evaluation",
        "Document collection",
        "Legal verification",
        "Marketing preparation"
      ],
      tips: "Ensure all property documents are current",
      requiredDocs: ["Property deed", "Tax certificates", "Technical documents"]
    },
    {
      title: "MARKETING",
      description: "Sale Process",
      duration: "4-12 weeks",
      details: [
        "Market listing",
        "Buyer negotiations",
        "Offer acceptance",
        "Contract preparation"
      ],
      tips: "Consider professional staging",
      requiredDocs: ["Listing agreement", "Offer documents", "Sale contract"]
    },
    {
      title: "CLOSING",
      description: "Final Process",
      duration: "2-3 weeks",
      details: [
        "Final negotiations",
        "Contract signing",
        "Payment receipt",
        "Property transfer"
      ],
      tips: "Prepare for final utility readings",
      requiredDocs: ["Final contract", "Payment proof", "Transfer documents"]
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
    <div className="bg-gradient-to-b from-[#039B9B]/10 to-white py-24 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          variants={serviceVariants}
          className="text-4xl md:text-5xl font-bold text-center text-[#039B9B] mb-8"
        >
          Real Estate Services
        </motion.h1>

        <motion.p
          variants={serviceVariants}
          className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16"
        >
          Professional support for your property transactions in Portugal, ensuring a smooth and secure process.
        </motion.p>

        {/* Service Type Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          <motion.button
            variants={serviceVariants}
            onClick={() => setActiveTab('purchase')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all ${
              activeTab === 'purchase'
                ? 'bg-[#039B9B] text-white shadow-lg'
                : 'bg-white text-[#039B9B] hover:bg-[#039B9B]/10'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-lg font-semibold">Purchase Process</span>
          </motion.button>
          <motion.button
            variants={serviceVariants}
            onClick={() => setActiveTab('sale')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all ${
              activeTab === 'sale'
                ? 'bg-[#039B9B] text-white shadow-lg'
                : 'bg-white text-[#039B9B] hover:bg-[#039B9B]/10'
            }`}
          >
            <Building2 className="w-6 h-6" />
            <span className="text-lg font-semibold">Sale Process</span>
          </motion.button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#039B9B]">Process Timeline</h2>
            <button
              onClick={() => setShowTips(!showTips)}
              className="p-2 rounded-full hover:bg-[#039B9B]/10 transition-colors"
            >
              <Info className={`w-6 h-6 ${showTips ? 'text-[#039B9B]' : 'text-gray-400'}`} />
            </button>
          </div>

          <div className="relative mb-12">
            <div className="absolute top-8 left-0 w-full h-1 bg-[#039B9B]/10" />
            
            <div className="relative flex justify-between">
              {currentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col items-center w-48 group ${
                    index === activeStep ? 'scale-105' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center
                      ${index <= activeStep ? 'text-[#039B9B]' : 'text-gray-400'} 
                      ${index === activeStep ? 'ring-4 ring-[#039B9B]/20' : ''}
                      bg-white border-2 border-current
                      transition-all duration-300 cursor-pointer group-hover:shadow-lg`}
                  >
                    <span className="font-medium">{index + 1}</span>
                  </button>

                  <div className={`text-center mt-4 transition-colors duration-300 ${
                    index === activeStep ? 'text-[#039B9B]' : 'text-gray-600'
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
              className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${
                activeStep > 0
                  ? 'bg-[#039B9B] text-white hover:shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <button
              onClick={handleNext}
              disabled={activeStep === currentSteps.length - 1}
              className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${
                activeStep < currentSteps.length - 1
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
                  <LucideFileCheck className="w-6 h-6 text-[#039B9B]" />
                  <h4 className="font-semibold text-[#039B9B] text-lg">Key Tasks</h4>
                </div>
                <ul className="space-y-4">
                  {currentStep.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[#039B9B]/5 p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-[#039B9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                {showTips && (
                  <div className="bg-[#039B9B]/10 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-[#039B9B] mt-1" />
                      <div>
                        <h4 className="font-semibold text-[#039B9B] mb-2">Helpful Tip</h4>
                        <p className="text-gray-600">{currentStep.tips}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-6 h-6 text-[#039B9B]" />
                    <h4 className="font-semibold text-[#039B9B]">Required Documents</h4>
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
         <motion.section  className="my-16">
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
          </AnimatePresence>
        </div>

        <motion.div variants={serviceVariants} className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-[#039B9B] mb-8">
            Start Your Property Journey
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support throughout your real estate transaction,
            ensuring a seamless experience from initial consultation to final closing.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RealEstateServicesPage;
            