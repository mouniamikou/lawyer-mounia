"use client";
import { motion } from "framer-motion";
import React from "react";
import EUImag from "../../../public/european.png";
import Image from "next/image";
import { CheckCircle2, GlobeIcon, FileText } from "lucide-react";

const installationportugal = () => {
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

  const services = [
    {
      icon: <Image src={EUImag} alt="eu citizen" width={50} height={50} />,
      title: "EU Citizens",
      description:
        "Streamlined administrative processes and comprehensive guidance for EU citizenship holders relocating to Portugal.",
      steps: [
        "Citizenship Documentation Processing",
        "Administrative Compliance Support",
        "Relocation Strategy Planning",
      ],
    },
    {
      icon: <GlobeIcon className="w-12 h-12 text-blue-600" />,
      title: "Global Citizens",
      description:
        "Full-service immigration support for digital nomads, entrepreneurs, and international professionals seeking Portuguese citizenship.",
      steps: [
        "Visa Application Processing",
        "Digital Nomad Visa Expertise",
        "Entrepreneur Immigration Pathways",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#039B9B]/10 to-white py-24  px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          variants={serviceVariants}
          className="text-4xl md:text-5xl font-bold text-center text-[#039B9B] mb-12"
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

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={serviceVariants}
              className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                {service.icon}
                <h2 className="text-2xl font-semibold ml-4 text-gray-800">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.steps.map((step, stepIndex) => (
                  <li
                    key={stepIndex}
                    className="flex items-center text-gray-700"
                  >
                    <CheckCircle2 className="w-5 h-5 mr-3 text-[#039B9B]" />
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div variants={serviceVariants} className="mt-16 text-center">
          <h1 className="text-3xl font-bold text-[#039B9B] px-8 py-8 ">
            Your Personalized Transition Journey
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            We provide end-to-end support, from initial consultation to complete
            administrative setup, ensuring a smooth and stress-free transition
            to your new life in Portugal.
          </p>
          <h1 className="text-3xl font-bold text-[#039B9B] px-8 ">
            Start Your Portugal Journey
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default installationportugal;
