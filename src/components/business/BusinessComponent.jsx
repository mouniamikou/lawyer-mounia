"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
  LightbulbIcon,
  BuildingIcon,
  ClipboardCheckIcon,
  FileTextIcon,
  ScrollTextIcon,
  BookOpenIcon,
  CheckCircleIcon
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

  const companyFormationSteps = [
    {
      title: "Strategic Planning",
      items: [
        "Strategic legal consulting",
        "Customized business structure",
        "Company formation guidance"
      ]
    },
    {
      title: "Company Formation Process",
      items: [
        "Company constitution",
        "Business registration",
        "Beneficial owners declaration",
        "Shareholders' meeting records setup",
        "Complete social documentation delivery"
      ]
    },
    {
      title: "Operational Support",
      items: [
        "Compliance management (required licenses)",
        "Contract drafting (client/employment)",
        "Operational support (Meeting minutes, registered office changes...)"
      ]
    }
  ];

  const businessStatusSetup = {
    title: "Business Status Implementation",
    steps: [
      {
        label: "Company Creation",
        prerequisites: [
          "NIF and NIPC number applications",
          "Contact with accountants"
        ],
        presence: [
          "Partners present at meeting → Articles signing appointment",
          "Partners absent → Power of attorney or representation"
        ]
      },
      {
        label: "Company Life",
        requirements: [
          "Compliance",
          "Contracts",
          "Statutory modifications"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#039B9B]/10 to-white py-24 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#039B9B] mb-6">
            Business Creation Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Concept to Reality: Comprehensive Business Formation and Support
          </p>
        </motion.div>

        {/* Main Services Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <BuildingIcon className="w-10 h-10 text-[#039B9B] mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">Company Formation Process</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {companyFormationSteps.map((section, index) => (
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
          </div>
        </motion.section>

        {/* Business Status Implementation */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <ScrollTextIcon className="w-10 h-10 text-[#039B9B] mr-4" />
            <h2 className="text-3xl font-bold text-gray-800">{businessStatusSetup.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {businessStatusSetup.steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{step.label}</h3>
                {step.prerequisites && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Prerequisites:</h4>
                    <ul className="space-y-2">
                      {step.prerequisites.map((prereq, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-[#039B9B] mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {step.presence && (
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Attendance Options:</h4>
                    <ul className="space-y-2">
                      {step.presence.map((option, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 text-[#039B9B] mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {step.requirements && (
                  <ul className="space-y-2">
                    {step.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-[#039B9B] mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Service Note */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Service proposals include professional fees and administrative costs based on your project's specific characteristics.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
        <h1 className="bg-white text-3xl font-bold text-[#039B9B] px-8 py-4 ">
            Request a Consultation
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BusinessServicesPage;