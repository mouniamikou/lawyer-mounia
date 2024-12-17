"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
  DownloadIcon,
  PenIcon,
  WrenchIcon,
  FileTextIcon,
  FolderIcon,
  CheckCircleIcon,
  Users2Icon,
  BuildingIcon,
  MapPinIcon,
  ActivityIcon,
  GlobeIcon
} from 'lucide-react';

const BusinessServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const preRequisites = [
    {
      title: "Strategy Phase",
      items: [
        "Business plan development",
        "Market analysis",
        "Financial projections",
        "Legal structure selection"
      ]
    },
    {
      title: "Prerequisites",
      items: [
        "Initial capital requirements",
        "Documentation preparation",
        "Location selection",
        "Shareholder agreements"
      ]
    }
  ];

  const locationOptions = [
    {
      title: "Inside Country Formation",
      requirements: [
        "Local address verification",
        "Physical presence requirements",
        "Local bank account",
        "Resident director requirements"
      ]
    },
    {
      title: "Outside Country Formation",
      requirements: [
        "Power of attorney",
        "Apostille documents",
        "International banking setup",
        "Remote registration process"
      ]
    }
  ];

  const formationSteps = [
    {
      icon: <DownloadIcon className="w-8 h-8 text-[#039B9B]" />,
      number: "1",
      title: "Information Collection",
      items: ["Required documentation", "Identity verification", "Business details"]
    },
    {
      icon: <PenIcon className="w-8 h-8 text-[#039B9B]" />,
      number: "2",
      title: "Company Constitution",
      items: ["Articles of association", "Shareholder structure", "Capital declaration"]
    },
    {
      icon: <WrenchIcon className="w-8 h-8 text-[#039B9B]" />,
      number: "3",
      title: "Company Registration",
      items: ["Official registration", "Tax number acquisition", "Business licenses"]
    },
    {
      icon: <FileTextIcon className="w-8 h-8 text-[#039B9B]" />,
      number: "4",
      title: "Beneficial Owners Declaration",
      items: ["Ownership structure", "UBO registration", "Compliance verification"]
    },
    {
      icon: <FolderIcon className="w-8 h-8 text-[#039B9B]" />,
      number: "5",
      title: "Social Documentation",
      items: ["Corporate documents", "Operational guidelines", "Compliance records"]
    }
  ];

  const postFormationSteps = [
    // {
    //   icon: <Users2Icon className="w-8 h-8 text-[#039B9B]" />,
    //   title: "Shareholder Management",
    //   items: [
    //     "Shareholder meetings",
    //     "Voting procedures",
    //     "Rights and obligations",
    //     "Share transfers"
    //   ]
    // },
    {
      icon: <BuildingIcon className="w-8 h-8 text-[#039B9B]" />,
      title: "Business Life Cycle",
      items: [
        "Annual compliance",
        "Financial reporting",
        "Corporate changes",
        "Statutory modifications"
      ]
    },
    {
      icon: <ActivityIcon className="w-8 h-8 text-[#039B9B]" />,
      title: "Freelance Activity",
      items: [
        "Self-employed status",
        "Tax obligations",
        "Social security",
        "Professional insurance"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b py-24 from-[#039B9B]/10 to-white  px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#039B9B] mb-4">
            Complete Business Formation Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Strategy to Operational Business
          </p>
        </motion.div>

        {/* Pre-Formation Phase */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <GlobeIcon className="w-8 h-8 text-[#039B9B] mr-3" />
            Pre-Formation Strategy
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {preRequisites.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-[#039B9B] mb-4">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#039B9B] mt-1 mr-2" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Location Options */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <MapPinIcon className="w-8 h-8 text-[#039B9B] mr-3" />
            Formation Location Options
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {locationOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-[#039B9B] mb-4">{option.title}</h3>
                <ul className="space-y-3">
                  {option.requirements.map((req, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#039B9B] mt-1 mr-2" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Formation Steps */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Formation Process</h2>
          <div className="space-y-4">
            {formationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#039B9B]/10 rounded-full p-2 mr-4">
                    {step.icon}
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-[#039B9B] mr-3">{step.number}</span>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  </div>
                </div>
                <ul className="grid md:grid-cols-3 gap-4">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#039B9B] mt-1 mr-2" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Post Formation */}
        <motion.section variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Post Formation & Ongoing Support</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {postFormationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#039B9B]/10 rounded-full p-2 mr-3">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                </div>
                <ul className="space-y-3">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-[#039B9B] mt-1 mr-2" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div variants={itemVariants} className="text-center">
          <h2 className=" text-2xl font-bold text-[#039B9B] px-8 py-4 inline-block rounded-lg ">
            Start Your Business Journey Today
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BusinessServicesPage;