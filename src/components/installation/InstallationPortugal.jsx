"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Flag,
} from "lucide-react";
import EUImag from "../../../public/european.png";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const InstallationPortugal = () => {
  const [activeTab, setActiveTab] = useState("global");
  const [activeStep, setActiveStep] = useState(0);
  const [showTips, setShowTips] = useState(true);
  const [currentStep, setCurrentStep] = useState(null);
  const { language } = useLanguage();
  const t =
    translations[language]?.installationPortugal ||
    translations.en.installationPortugal;

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

  const currentSteps = activeTab === "global" ? t.globalSteps : t.euSteps;

  useEffect(() => {
    setActiveStep(0);
  }, [activeTab]);

  useEffect(() => {
    if (currentSteps && activeStep >= 0) {
      setCurrentStep(currentSteps[activeStep]);
    }
  }, [activeStep, activeTab, currentSteps]);

  const handleNext = () => {
    if (activeStep < currentSteps.length - 1) {
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
            backgroundImage: "url('/passportPP.jpeg')", // Use your image path
            backgroundPosition: "center",
            backgroundSize: "60%",
            backgroundRepeat: "no-repeat",
            opacity: "0.3", // Adjust opacity as needed
          }}
        />

        {/* Header Content */}
        <div className="relative z-10 py-12">
          <motion.h1
            variants={serviceVariants}
            className="text-4xl md:text-5xl font-bold text-center text-primary-dark mb-8"
          >
            {t.title}
          </motion.h1>

          <motion.p
            variants={serviceVariants}
            className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16"
          >
            {t.subtitle}
          </motion.p>

          {/* Citizenship Type Tabs */}
          <div className="flex justify-center gap-6 mb-12">
            <motion.button
              variants={serviceVariants}
              onClick={() => setActiveTab("global")}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl transition-all ${
                activeTab === "global"
                  ? "bg-[#039B9B] text-white shadow-lg"
                  : "bg-white text-primary-dark hover:text-white hover:bg-primary-dark"
              }`}
            >
              <Globe className=" w-5 h-5" />
              <span className="text-base font-semibold">{t.tabs.nonEU}</span>
            </motion.button>
            <motion.button
              variants={serviceVariants}
              onClick={() => setActiveTab("eu")}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl transition-all ${
                activeTab === "eu"
                  ? "bg-[#039B9B] text-white shadow-lg"
                  : "bg-white text-primary-dark hover:text-white hover:bg-primary-dark"
              }`}
            >
              <Image
                src={EUImag}
                alt="eu citizen"
                width={20}
                height={20}
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <span className="text-base  font-semibold">{t.tabs.eu}</span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-primary-dark">
              {t.timeline}
            </h2>
            <button
              onClick={() => setShowTips(!showTips)}
              className="p-2 rounded-full hover:bg-[#039B9B]/10 transition-colors"
            >
              <Info
                className={`w-6 h-6 ${showTips ? "text-primary-dark" : "text-gray-400"}`}
              />
            </button>
          </div>

          <div className="relative mb-12">
            <div className="absolute top-8 left-0 w-full h-1 bg-[#039B9B]/10" />

            <div className="relative flex justify-between">
              {currentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col items-center w-48 group ${
                    index === activeStep ? "scale-105" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center
                      ${index <= activeStep ? "text-primary-dark" : "text-gray-400"} 
                      ${index === activeStep ? "ring-4 ring-[#039B9B]/20" : ""}
                      bg-white border-2 border-current
                      transition-all duration-300 cursor-pointer group-hover:shadow-lg`}
                  >
                    <span className="font-medium">{index + 1}</span>
                  </button>
                  <span className="text-center text-sm text-gray-600 mt-2 font-medium">
                    {step.description}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Step Info */}
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-primary-dark mb-3">
                    {currentStep.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {currentStep.descriptionDetails}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-primary-dark mb-3 flex items-center">
                      <LucideFileCheck className="mr-2 text-primary" />
                      {t.stepInfo.details}
                    </h4>
                    <ul className="space-y-3">
                      {currentStep.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 mr-2 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-primary-dark mb-3 flex items-center">
                      <Clock className="mr-2 text-primary" />
                      {t.stepInfo.duration}
                    </h4>
                    <div className="px-4 py-3 bg-blue-50 text-blue-800 rounded-lg">
                      {currentStep.duration}
                    </div>
                  </div>

                  {showTips && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-primary-dark mb-3 flex items-center">
                        <AlertCircle className="mr-2 text-amber-500" />
                        {t.stepInfo.tips}
                      </h4>
                      <div className="px-4 py-3 bg-amber-50 text-amber-800 rounded-lg">
                        {currentStep.tips}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column - Required Documents */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary-dark mb-4 flex items-center">
                    <FileText className="mr-2 text-primary" />
                    {t.stepInfo.requiredDocs}
                  </h4>
                  <ul className="space-y-3">
                    {currentStep.requiredDocs.map((doc, index) => (
                      <li
                        key={index}
                        className="flex items-start border-b border-gray-200 pb-2"
                      >
                        <BookMarked className="text-primary h-5 w-5 mt-0.5 mr-2 shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between pt-4">
            <button
              onClick={handlePrevious}
              disabled={activeStep === 0}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                activeStep === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              {t.stepAction.previous}
            </button>
            <button
              onClick={handleNext}
              disabled={activeStep === currentSteps.length - 1}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                activeStep === currentSteps.length - 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {t.stepAction.next}
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationPortugal;
