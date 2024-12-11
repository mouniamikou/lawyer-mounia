"use client"
import React from 'react';
import { motion } from 'framer-motion';

const PersonalInfoForm = ({ formData, onFormDataChange }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handlePersonalInfoChange = (field, value) => {
    onFormDataChange({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [field]: value
      }
    });
  };

  const handleProjectStatusChange = (status) => {
    onFormDataChange({
      ...formData,
      projectStatus: status
    });
  };

  return (
    <>
      {/* Personal Information */}
      <motion.section 
        variants={fadeIn}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
        <div className="space-y-3">
          <div>
            {/* <label className="block text-sm font-medium text-gray-700">First Name</label> */}
            <input
              type="text"
              placeholder="Enter your first name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
              value={formData.personalInfo.firstName}
              onChange={(e) => handlePersonalInfoChange('firstName', e.target.value)}
            />
          </div>
          <div>
            {/* <label className="block text-sm font-medium text-gray-700">Last Name</label> */}
            <input
              type="text"
              placeholder="Enter your last name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
              value={formData.personalInfo.lastName}
              onChange={(e) => handlePersonalInfoChange('lastName', e.target.value)}
            />
          </div>
          <div>
            {/* <label className="block text-sm font-medium text-gray-700">Email</label> */}
            <input
              type="email"
              placeholder="your.email@example.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
              value={formData.personalInfo.email}
              onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
            />
          </div>
          <div>
            {/* <label className="block text-sm font-medium text-gray-700">Phone Number (include country code)</label> */}
            <input
              type="tel"
              placeholder="+1 234 567 8900"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
              value={formData.personalInfo.phone}
              onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
            />
          </div>
          <div>
            {/* <label className="block text-sm font-medium text-gray-700">Current Country of Residence</label> */}
            <input
              type="text"
              placeholder="Enter your current country of residence"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
              value={formData.personalInfo.currentCountry}
              onChange={(e) => handlePersonalInfoChange('currentCountry', e.target.value)}
            />
          </div>
        </div>
      </motion.section>

      {/* Project Status */}
      <motion.section variants={fadeIn} className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Where are you in your project?</h2>
        <div className="space-y-2">
          {[
            'Currently considering',
            'Decision made, need complete assistance',
            'Project ongoing, need specific assistance',
            'Urgent issue to resolve'
          ].map((status) => (
            <label key={status} className="flex items-center space-x-3">
              <input
                type="radio"
                name="projectStatus"
                value={status}
                className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                onChange={(e) => handleProjectStatusChange(e.target.value)}
                checked={formData.projectStatus === status}
              />
              <span className="text-gray-700">{status}</span>
            </label>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default PersonalInfoForm;