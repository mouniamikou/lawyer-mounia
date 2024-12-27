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
      duration: "4-6 weeks",
      details: [
        "Digital Nomad visa processing",
        "Document preparation",
        "Application submission",
        "Status tracking"
      ],
      tips: "Ensure all documents are translated to Portuguese",
      requiredDocs: ["Valid passport", "Proof of income", "Criminal record", "Health insurance"]
    },
    {
      title: "RELOCATION",
      description: "Moving Process",
      duration: "2-3 weeks",
      details: [
        "Housing arrangement",
        "Bank account setup",
        "NIF registration",
        "Healthcare registration"
      ],
      tips: "Start bank account process early",
      requiredDocs: ["Proof of address", "Employment contract", "Tax documents"]
    },
    {
      title: "SETTLEMENT",
      description: "Final Steps",
      duration: "2-4 weeks",
      details: [
        "Residency registration",
        "Social security setup",
        "Healthcare enrollment",
        "Community integration"
      ],
      tips: "Register with local authorities within 3 days of arrival",
      requiredDocs: ["Visa approval", "Rental contract", "Bank statements"]
    }
  ];

  const euSteps = [
    {
      title: "REGISTRATION",
      description: "Initial Setup",
      duration: "1-2 weeks",
      details: [
        "EU citizenship verification",
        "Registration certificate",
        "Address registration",
        "Document preparation"
      ],
      tips: "EU citizens must register if staying over 3 months",
      requiredDocs: ["EU ID/Passport", "Proof of address", "Employment details"]
    },
    {
      title: "ESTABLISHMENT",
      description: "Local Setup",
      duration: "2-3 weeks",
      details: [
        "NIF acquisition",
        "Bank account opening",
        "Healthcare registration",
        "Social security"
      ],
      tips: "NIF is essential for most services",
      requiredDocs: ["ID documents", "Proof of address", "Employment contract"]
    },
    {
      title: "INTEGRATION",
      description: "Final Process",
      duration: "2-4 weeks",
      details: [
        "Permanent registration",
        "Community integration",
        "Local services setup",
        "Administrative completion"
      ],
      tips: "Consider Portuguese language courses",
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
          Installation in Portugal
        </motion.h1>

        <motion.p
          variants={serviceVariants}
          className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16"
        >
          Seamless transition support for individuals looking to make Portugal
          their new home, with personalized guidance through administrative and
          legal processes.
        </motion.p>

        {/* Citizenship Type Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          <motion.button
            variants={serviceVariants}
            onClick={() => setActiveTab('global')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all ${
              activeTab === 'global'
                ? 'bg-[#039B9B] text-white shadow-lg'
                : 'bg-white text-[#039B9B] hover:bg-[#039B9B]/10'
            }`}
          >
            <Globe className="w-6 h-6" />
            <span className="text-lg font-semibold">Global Citizens</span>
          </motion.button>
          <motion.button
            variants={serviceVariants}
            onClick={() => setActiveTab('eu')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all ${
              activeTab === 'eu'
                ? 'bg-[#039B9B] text-white shadow-lg'
                : 'bg-white text-[#039B9B] hover:bg-[#039B9B]/10'
            }`}
          >
            <Image src={EUImag} alt="eu citizen" width={24} height={24} />
            <span className="text-lg font-semibold">EU Citizens</span>
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
                    <p className="text-xs text-gray-500">{step.duration}</p>
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
          </AnimatePresence>
        </div>

        <motion.div variants={serviceVariants} className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-[#039B9B] mb-8">
            Start Your Portugal Journey
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end support, from initial consultation to complete
            administrative setup, ensuring a smooth and stress-free transition
            to your new life in Portugal.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InstallationPortugal;