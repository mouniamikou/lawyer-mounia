"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  FileText,
  CheckCircle,
  AlertCircle,
  Info,
  ChevronLeft,
  ChevronRight,
  Building,
  Scale,
  FileCheck,
  Users,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const BusinessFormationService = () => {
  const { language } = useLanguage();
  const t = translations[language]?.business || translations.en.business;

  console.log("Current language:", language);
  console.log("Business translations:", t);
  console.log("Steps translation:", t.steps);
  console.log("First step details:", t.steps && t.steps[0]);

  useEffect(() => {
    // Force a re-render when language changes
    console.log("Language changed to:", language);
  }, [language]);

  const [activeStep, setActiveStep] = useState(0);
  const [showTips, setShowTips] = useState(true);
  const [currentStep, setCurrentStep] = useState(null);
  const [steps, setSteps] = useState([]);

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

  useEffect(() => {
    // Recreate the steps array when language changes
    const newSteps = [
      {
        title: t.steps[0].title,
        description: t.steps[0].description,
        icon: <Download className="w-6 h-6 text-[#039B9B]" />,
        duration: "1-2 weeks",
        details: t.steps[0].details,
        tips: t.steps[0].tips,
        requiredDocs: t.steps[0].requiredDocs,
      },
      {
        title: t.steps[1].title,
        description: t.steps[1].description,
        icon: <Building className="w-6 h-6 text-[#039B9B]" />,
        duration: "1-2 weeks",
        details: t.steps[1].details,
        tips: t.steps[1].tips,
        requiredDocs: t.steps[1].requiredDocs,
      },
      {
        title: t.steps[2].title,
        description: t.steps[2].description,
        icon: <FileCheck className="w-6 h-6 text-[#039B9B]" />,
        duration: "1-3 business days",
        details: t.steps[2].details,
        tips: t.steps[2].tips,
        requiredDocs: t.steps[2].requiredDocs,
      },
      {
        title: t.steps[3].title,
        description: t.steps[3].description,
        icon: <Users className="w-6 h-6 text-[#039B9B]" />,
        duration: "1-2 weeks",
        details: t.steps[3].details,
        tips: t.steps[3].tips,
        requiredDocs: t.steps[3].requiredDocs,
      },
      {
        title: t.steps[4].title,
        description: t.steps[4].description,
        icon: <Scale className="w-6 h-6 text-[#039B9B]" />,
        duration: "1-2 weeks",
        details: t.steps[4].details,
        tips: t.steps[4].tips,
        requiredDocs: t.steps[4].requiredDocs,
      },
    ];
    setSteps(newSteps);
  }, [language, t]);

  useEffect(() => {
    setCurrentStep(steps[activeStep]);
  }, [activeStep, steps]);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
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
            backgroundImage:
              "url('/GettyImages-1084171152-8445a490b5894f0a9bb588dbfc2ac22d.jpg')",
            backgroundSize: "60%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "0.3",
          }}
        />

        {/* Header Content */}
        <div className="relative z-10  py-12">
          <motion.h1
            variants={serviceVariants}
            className="text-4xl md:text-5xl font-bold text-center text-primary-dark mb-8"
          >
            {t.formationPackage.title}
          </motion.h1>
          <motion.p
            variants={serviceVariants}
            className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16"
          >
            {t.formationPackage.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-dark">
              {t.formationProcess}
            </h2>
            <button
              onClick={() => setShowTips(!showTips)}
              className="p-2 rounded-full hover:bg-[#039B9B]/10 transition-colors"
            >
              <Info
                className={`w-5 h-5 sm:w-6 sm:h-6 ${showTips ? "text-primary-dark" : "text-gray-400"}`}
              />
            </button>
          </div>

          {/* Timeline */}
          <div className="relative mb-8 sm:mb-12 overflow-x-auto pb-4">
            <div className="absolute top-8 left-0 w-full h-1 bg-[#039B9B]/10" />

            <div className="relative flex justify-between min-w-[640px] sm:min-w-0 px-4 sm:px-0">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col items-center w-40 sm:w-48 group ${
                    index === activeStep ? "scale-105" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`w-8 h-8 mt-1 rounded-full flex items-center justify-center
                      ${index <= activeStep ? "text-primary-dark" : "text-gray-400"} 
                      ${index === activeStep ? "ring-4 ring-[#039B9B]/20" : ""}
                      bg-white border-2 border-current
                      transition-all duration-300 cursor-pointer group-hover:shadow-lg`}
                  >
                    <span className="font-medium">{index + 1}</span>
                  </button>

                  <div
                    className={`text-center mt-4 transition-colors duration-300 ${
                      index === activeStep
                        ? "text-primary-dark"
                        : "text-gray-600"
                    }`}
                  >
                    <h3 className="font-bold text-xs sm:text-sm mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-80">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between gap-4 mb-6 sm:mb-8">
            <button
              onClick={handlePrevious}
              disabled={activeStep === 0}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all flex items-center gap-2 text-sm sm:text-base flex-1 sm:flex-none justify-center ${
                activeStep > 0
                  ? "bg-[#039B9B] text-white hover:shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{t.stepAction.previous}</span>
            </button>
            <button
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all flex items-center gap-2 text-sm sm:text-base flex-1 sm:flex-none justify-center ${
                activeStep < steps.length - 1
                  ? "bg-[#039B9B] text-white hover:shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <span className="hidden sm:inline">{t.stepAction.next}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  {currentStep.icon}
                  <h4 className="font-semibold text-primary-dark text-base sm:text-lg">
                    {t.stepInfo.details}
                  </h4>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {t.steps[activeStep].details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 bg-[#039B9B]/5 p-3 rounded-lg text-sm sm:text-base"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-dark mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {showTips && (
                  <div className="bg-[#039B9B]/10 rounded-lg p-4 sm:p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-primary-dark mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary-dark mb-2 text-sm sm:text-base">
                          {t.stepInfo.tips}
                        </h4>
                        <p className="text-gray-600 text-sm sm:text-base">
                          {t.steps[activeStep].tips}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary-dark" />
                    <h4 className="font-semibold text-primary-dark text-sm sm:text-base">
                      {t.stepInfo.requiredDocs}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {t.steps[activeStep].requiredDocs.map((doc, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-600 bg-[#039B9B]/5 p-3 rounded-lg text-sm sm:text-base"
                      >
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 sm:mt-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#039B9B] mb-4">
            {t.cta.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            {t.cta.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessFormationService;
