"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  AlertCircle, 
  Info, 
  ChevronLeft, 
  ChevronRight,
  Clock,
  FileText,
  LucideFileCheck
} from 'lucide-react';

const AcquisitionProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showTips, setShowTips] = useState(true);
  const [currentStep, setCurrentStep] = useState(null);

  const steps = [
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

  useEffect(() => {
    setCurrentStep(steps[activeStep]);
  }, [activeStep]);

  const handleStepChange = (type) => {
    if (type === 'next') {
      setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    } else if (type === 'prev') {
      setActiveStep((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  if (!currentStep) return null;

  return (
    <div className="w-full mx-auto p-4 bg-gradient-to-b from-gray-100 to-white rounded-xl shadow-lg">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-[#039B9B]">Property Acquisition Process</h2>
          <div className="relative">
            <button
              onClick={() => setShowTips(!showTips)}
              className="p-2 rounded-full hover:bg-[#039B9B]/10 transition-colors"
            >
              <Info className={`w-6 h-6 ${showTips ? 'text-[#039B9B]' : 'text-gray-400'}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="relative mb-4 md:mb-8 overflow-x-auto pb-4 md:pb-0">
          <div className="absolute top-8 left-0 w-full h-1 bg-[#039B9B]/10" />
          
          <div className="relative flex justify-between min-w-[600px] md:min-w-0 px-4 md:px-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col items-center w-32 md:w-48 group ${
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
                  <h3 className="font-bold text-xs md:text-sm mb-1">{step.title}</h3>
                  <p className="text-xs md:text-sm mb-1 opacity-80">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mb-6">
          <button
            type="button"
            onClick={() => handleStepChange('prev')}
            disabled={activeStep === 0}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all flex items-center gap-2 text-sm md:text-base ${
              activeStep > 0
                ? 'bg-[#039B9B] text-white hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <button
            type="button"
            onClick={() => handleStepChange('next')}
            disabled={activeStep === steps.length - 1}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all flex items-center gap-2 text-sm md:text-base ${
              activeStep < steps.length - 1
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
            className="bg-white rounded-xl shadow-lg p-4 md:p-8 border border-[#039B9B]/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <LucideFileCheck className="w-5 h-5 md:w-6 md:h-6 text-[#039B9B]" />
                  <h4 className="font-semibold text-[#039B9B] text-base md:text-lg">Key Tasks</h4>
                </div>
                <ul className="space-y-3 md:space-y-4">
                  {currentStep.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[#039B9B]/5 p-3 rounded-lg text-sm md:text-base">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#039B9B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 md:space-y-8">
                {showTips && (
                  <div className="bg-[#039B9B]/10 rounded-lg p-4 md:p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-[#039B9B] mt-1" />
                      <div>
                        <h4 className="font-semibold text-[#039B9B] mb-2 text-sm md:text-base">Helpful Tip</h4>
                        <p className="text-gray-600 text-sm md:text-base">{currentStep.tips}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 md:w-6 md:h-6 text-[#039B9B]" />
                    <h4 className="font-semibold text-[#039B9B] text-sm md:text-base">Required Documents</h4>
                  </div>
                  <ul className="space-y-3">
                    {currentStep.requiredDocs.map((doc, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600 bg-[#039B9B]/5 p-3 rounded-lg text-sm md:text-base">
                        <div className="w-2 h-2 rounded-full bg-[#039B9B]" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AcquisitionProcess;