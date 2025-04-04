"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const RealEstateServicesPage = () => {
  const { language } = useLanguage();
  const t = translations[language]?.realEstate || translations.en.realEstate;

  const [activeTab, setActiveTab] = useState("purchase");
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
      title: t.purchaseSteps
        ? t.purchaseSteps[0]?.title || "PREPARATION"
        : "PREPARATION",
      description: t.purchaseSteps
        ? t.purchaseSteps[0]?.description || "Documentation & Offer"
        : "Documentation & Offer",
    },
    {
      title: t.purchaseSteps
        ? t.purchaseSteps[1]?.title || "AGREEMENT"
        : "AGREEMENT",
      description: t.purchaseSteps
        ? t.purchaseSteps[1]?.description || "Contract & Deposit"
        : "Contract & Deposit",
    },
    {
      title: t.purchaseSteps
        ? t.purchaseSteps[2]?.title || "CONDITIONS PRECEDENT"
        : "CONDITIONS PRECEDENT",
      description: t.purchaseSteps
        ? t.purchaseSteps[2]?.description || "Verification & Funding"
        : "Verification & Funding",
    },
    {
      title: t.purchaseSteps
        ? t.purchaseSteps[3]?.title || "NOTARY DEED"
        : "NOTARY DEED",
      description: t.purchaseSteps
        ? t.purchaseSteps[3]?.description || "Final Signature"
        : "Final Signature",
    },
    {
      title: t.purchaseSteps
        ? t.purchaseSteps[4]?.title || "TRANSFER"
        : "TRANSFER",
      description: t.purchaseSteps
        ? t.purchaseSteps[4]?.description || "Registration"
        : "Registration",
    },
  ];

  const saleSteps = [
    {
      title: t.saleSteps
        ? t.saleSteps[0]?.title || "PREPARATION"
        : "PREPARATION",
      description: t.saleSteps
        ? t.saleSteps[0]?.description || "Documentation & Marketing"
        : "Documentation & Marketing",
    },
    {
      title: t.saleSteps
        ? t.saleSteps[1]?.title || "NEGOTIATION"
        : "NEGOTIATION",
      description: t.saleSteps
        ? t.saleSteps[1]?.description || "Offers & Terms"
        : "Offers & Terms",
    },
    {
      title: t.saleSteps ? t.saleSteps[2]?.title || "CLOSING" : "CLOSING",
      description: t.saleSteps
        ? t.saleSteps[2]?.description || "Deed & Transfer"
        : "Deed & Transfer",
    },
  ];

  const currentSteps = activeTab === "purchase" ? purchaseSteps : saleSteps;

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
      <div className="relative mb-12 max-w-6xl mx-auto">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 "
          style={{
            backgroundImage:
              "url('/core-architects_portuguese-architecture99-1160x613.jpg')", // Replace with your image path
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: "0.3", // Adjust opacity as needed
          }}
        />

        {/* Header Content */}
        <div className="relative z-10   py-12 px-12">
          <motion.h1
            variants={serviceVariants}
            className="text-4xl md:text-5xl font-bold text-center text-primary-dark mb-8"
          >
            {t.title}
          </motion.h1>

          <motion.p
            variants={serviceVariants}
            className="text-xl text-center text-gray-600   mx-auto mb-8"
          >
            {t.subtitle}
          </motion.p>

          {/* Service Type Tabs */}
          <div className="flex justify-center gap-6 ">
            <motion.button
              variants={serviceVariants}
              onClick={() => setActiveTab("purchase")}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl transition-all ${
                activeTab === "purchase"
                  ? "bg-[#039B9B] text-white shadow-lg"
                  : "bg-white text-primary-dark hover:text-white hover:bg-primary-dark"
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="text-base font-semibold">
                {t.purchase.title}
              </span>
            </motion.button>
            <motion.button
              variants={serviceVariants}
              onClick={() => setActiveTab("sale")}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl transition-all ${
                activeTab === "sale"
                  ? "bg-[#039B9B] text-white shadow-lg"
                  : "bg-white text-primary-dark hover:text-white hover:bg-primary-dark"
              }`}
            >
              <Building2 className="w-6 h-6" />
              <span className="text-base font-semibold">{t.sale.title}</span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-primary-dark">
              {t.timeline || "Process Timeline"}
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

            {/* Added overflow container */}
            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex justify-between">
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
                      <h3 className="font-bold text-xs mb-1">{step.title}</h3>
                      <p className="text-xs mb-1 opacity-80">
                        {step.description}
                      </p>
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
              className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${
                activeStep > 0
                  ? "bg-[#039B9B] text-white hover:shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />{" "}
              {t.stepAction?.previous || "Previous"}
            </button>
            <button
              onClick={handleNext}
              disabled={activeStep === currentSteps.length - 1}
              className={`px-6 py-3 rounded-lg transition-all flex items-center gap-2 ${
                activeStep < currentSteps.length - 1
                  ? "bg-[#039B9B] text-white hover:shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {t.stepAction?.next || "Next"}{" "}
              <ChevronRight className="w-4 h-4" />
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
                  <h4 className="font-semibold text-primary-dark text-lg">
                    {t.stepInfo?.details || "Key Tasks"}
                  </h4>
                </div>
                <ul className="space-y-4">
                  {t[activeTab === "purchase" ? "purchaseSteps" : "saleSteps"][
                    activeStep
                  ].details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 bg-[#039B9B]/5 p-3 rounded-lg"
                    >
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
                        <h4 className="font-semibold text-primary-dark mb-2">
                          {t.stepInfo?.tips || "Helpful Tip"}
                        </h4>
                        <p className="text-gray-600">
                          {
                            t[
                              activeTab === "purchase"
                                ? "purchaseSteps"
                                : "saleSteps"
                            ][activeStep].tips
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-6 h-6 text-primary-dark" />
                    <h4 className="font-semibold text-primary-dark">
                      {t.stepInfo?.requiredDocs || "Required Documents"}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {t[
                      activeTab === "purchase" ? "purchaseSteps" : "saleSteps"
                    ][activeStep].requiredDocs.map((doc, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-600 bg-[#039B9B]/5 p-3 rounded-lg"
                      >
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
                  {t.representationOptions?.title || "Representation Options"}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-300">
                  <div className="flex items-center mb-4">
                    <ClipboardCheckIcon className="w-8 h-8 text-primary-dark mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {t.representationOptions?.inPerson?.title ||
                        "In-Person Support"}
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    {t.representationOptions?.inPerson?.description ||
                      "Comprehensive legal presence throughout your property journey in Portugal. I personally attend all key meetings and signings, ensuring you have expert guidance at every critical moment, from first viewing to final handover. This option provides maximum security and support, especially recommended for first-time investors in Portuguese Real Estate."}
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-300">
                  <div className="flex items-center mb-4">
                    <LanguagesIcon className="w-8 h-8 text-primary-dark mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {t.representationOptions?.remote?.title ||
                        "Remote Representation"}
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    {t.representationOptions?.remote?.description ||
                      "Full legal protection and oversight for clients unable to be physically present in Portugal. Through secure power of attorney arrangements, I handle all aspects of your transaction with the same attention to detail as if you were present. Regular video consultations and detailed documentation keep you informed and in control throughout the process, regardless of your location."}
                  </p>
                </div>
              </div>
            </motion.section>
          </AnimatePresence>
        </div>

        <motion.div variants={serviceVariants} className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-8">
            {t.cta?.title || "Start Your Property Journey"}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t.cta?.description ||
              "Whether buying or selling property in Portugal, navigating the legal complexities requires expert guidance. From initial preparation to final registration, I provide comprehensive legal support to protect your interests and ensure a smooth transaction. Let's discuss your specific situation and create a tailored strategy for your Portuguese real estate journey."}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RealEstateServicesPage;
