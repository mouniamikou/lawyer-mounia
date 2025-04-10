"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const PersonalInfoForm = ({
  formData,
  onFormDataChange,
  formType = "installation",
}) => {
  const { language } = useLanguage();

  // Use the appropriate translation based on form type
  const t =
    translations[language]?.realEstateForm?.personalInfo ||
    translations.en.realEstateForm.personalInfo;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handlePersonalInfoChange = (field, value) => {
    onFormDataChange({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [field]: value,
      },
    });
  };

  const handleProjectStatusChange = (status) => {
    onFormDataChange({
      ...formData,
      projectStatus: status,
    });
  };

  const getProjectStatusOptions = () => {
    // If we're using realEstate form and it has project status options, use those
    // Otherwise fall back to installation form options
    const statusOptions =
      formType === "realEstate" && t.projectStatus?.options
        ? t.projectStatus.options
        : translations[language]?.installationForm?.projectStatus?.options ||
          translations.en.installationForm.projectStatus.options;

    return [
      { key: "considering", value: statusOptions.considering },
      { key: "needComplete", value: statusOptions.needComplete },
      { key: "needSpecific", value: statusOptions.needSpecific },
      { key: "urgent", value: statusOptions.urgent },
    ];
  };

  return (
    <>
      {/* Personal Information */}
      <motion.section variants={fadeIn} className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{t.title}</h2>
        <div className="space-y-3">
          <div>
            {/* <label className="block text-sm font-medium text-gray-700">First Name</label> */}
            <input
              type="text"
              placeholder={t.firstName}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
              value={formData.personalInfo.firstName}
              onChange={(e) =>
                handlePersonalInfoChange("firstName", e.target.value)
              }
              required
            />
          </div>
          <div>
            {/* <label className="block text-sm font-medium text-gray-700">Last Name</label> */}
            <input
              type="text"
              placeholder={t.lastName}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
              value={formData.personalInfo.lastName}
              onChange={(e) =>
                handlePersonalInfoChange("lastName", e.target.value)
              }
              required
            />
          </div>
          <div>
            {/* <label className="block text-sm font-medium text-gray-700">Email</label> */}
            <input
              type="email"
              placeholder={t.email}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
              value={formData.personalInfo.email}
              onChange={(e) =>
                handlePersonalInfoChange("email", e.target.value)
              }
              required
            />
          </div>
          <div>
            {/* <label className="block text-sm font-medium text-gray-700">Phone Number (include country code)</label> */}
            <input
              type="tel"
              placeholder={t.phone}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
              value={formData.personalInfo.phone}
              onChange={(e) =>
                handlePersonalInfoChange("phone", e.target.value)
              }
              required
            />
          </div>
          <div>
            {/* <label className="block text-sm font-medium text-gray-700">Current Country of Residence</label> */}
            <input
              type="text"
              placeholder={t.currentCountry}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
              value={formData.personalInfo.currentCountry}
              onChange={(e) =>
                handlePersonalInfoChange("currentCountry", e.target.value)
              }
              required
            />
          </div>
        </div>
      </motion.section>

      {/* Project Status */}
      <motion.section variants={fadeIn} className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {formType === "realEstate" && t.projectStatus?.title
            ? t.projectStatus.title
            : translations[language]?.installationForm?.projectStatus?.title ||
              translations.en.installationForm.projectStatus.title}
        </h2>
        <div className="space-y-2">
          {getProjectStatusOptions().map((option) => (
            <label key={option.key} className="flex items-center space-x-3">
              <input
                type="radio"
                name="projectStatus"
                value={option.value}
                className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                onChange={(e) => handleProjectStatusChange(e.target.value)}
                checked={formData.projectStatus === option.value}
                required
              />
              <span className="text-gray-700">{option.value}</span>
            </label>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default PersonalInfoForm;
