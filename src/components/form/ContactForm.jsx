"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InstallationForm = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      currentCountry: ''
    },
    projectStatus: '',
    residencyStatus: '', // 'eu' or 'non-eu'
    portugaStatus: '', // 'moving' or 'resident'
    needs: {
      administrative: false,
      consultation: false,
      other: false,
    },
    visaType: '', // 'D2' or 'D7'
    aimaDate: '',
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <motion.form 
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Personal Information */}
        <motion.section 
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.personalInfo.firstName}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, firstName: e.target.value }
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.personalInfo.lastName}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, lastName: e.target.value }
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.personalInfo.email}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, email: e.target.value }
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number (include country code)</label>
              <input
                type="tel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.personalInfo.phone}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, phone: e.target.value }
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Country of Residence</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.personalInfo.currentCountry}
                onChange={(e) => setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, currentCountry: e.target.value }
                })}
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
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                  onChange={(e) => setFormData({ ...formData, projectStatus: e.target.value })}
                  checked={formData.projectStatus === status}
                />
                <span className="text-gray-700">{status}</span>
              </label>
            ))}
          </div>
        </motion.section>

        {/* Residency Status */}
        <motion.section variants={fadeIn} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Residency Status</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="residencyStatus"
                value="eu"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                onChange={(e) => setFormData({ ...formData, residencyStatus: e.target.value })}
                checked={formData.residencyStatus === 'eu'}
              />
              <span className="text-gray-700">EU Resident</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="residencyStatus"
                value="non-eu"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                onChange={(e) => setFormData({ ...formData, residencyStatus: e.target.value })}
                checked={formData.residencyStatus === 'non-eu'}
              />
              <span className="text-gray-700">Non-EU Resident</span>
            </label>
          </div>
        </motion.section>

        {/* Conditional Sections based on EU/Non-EU status */}
        {formData.residencyStatus === 'eu' && (
          <motion.section
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-gray-800">Your Status</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="portugaStatus"
                  value="moving"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                  onChange={(e) => setFormData({ ...formData, portugaStatus: e.target.value })}
                />
                <span className="text-gray-700">Want to move to Portugal</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="portugaStatus"
                  value="resident"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                  onChange={(e) => setFormData({ ...formData, portugaStatus: e.target.value })}
                />
                <span className="text-gray-700">Already living in Portugal</span>
              </label>
            </div>

            <div className="space-y-2 mt-4">
              <h3 className="text-lg font-medium text-gray-800">Your Needs</h3>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  onChange={(e) => setFormData({
                    ...formData,
                    needs: { ...formData.needs, administrative: e.target.checked }
                  })}
                />
                <span className="text-gray-700">Administrative assistance (NIF, NISS, Utente)</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  onChange={(e) => setFormData({
                    ...formData,
                    needs: { ...formData.needs, consultation: e.target.checked }
                  })}
                />
                <span className="text-gray-700">Legal and fiscal consultation</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  onChange={(e) => setFormData({
                    ...formData,
                    needs: { ...formData.needs, other: e.target.checked }
                  })}
                />
                <span className="text-gray-700">Other</span>
                <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Share your needs"
              value={formData.needs.otherText || ''}
              onChange={(e) => setFormData({
                ...formData,
                needs: { 
                  ...formData.needs, 
                  otherText: e.target.value 
                }
              })}
            />
    
              </label>
            </div>
          </motion.section>
        )}

        
{formData.residencyStatus === 'non-eu' && (
  <motion.section
    variants={fadeIn}
    initial="hidden"
    animate="visible"
    className="space-y-6"
  >
    <h3 className="text-lg font-medium text-gray-800">*Non-EU Resident</h3>
    <div className="space-y-4">
      <p className="text-gray-700">You need:</p>
      
      {/* Single choice visa options */}
      <div className="space-y-2">
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="needType"
            value="d2"
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
            onChange={(e) => setFormData({
              ...formData,
              visaType: 'D2',
              needType: 'visa'
            })}
            checked={formData.visaType === 'D2'}
          />
          <span className="text-gray-700">D2 Visa Application</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="needType"
            value="d7"
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
            onChange={(e) => setFormData({
              ...formData,
              visaType: 'D7',
              needType: 'visa'
            })}
            checked={formData.visaType === 'D7'}
          />
          <span className="text-gray-700">D7 Visa Application</span>
        </label>
        
        {/* AIMA appointment option */}
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="needType"
            value="aima"
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
            onChange={(e) => setFormData({
              ...formData,
              needType: 'aima'
            })}
            checked={formData.needType === 'aima'}
          />
          <span className="text-gray-700">Assistance for AIMA appointment</span>
        </label>
        
        {/* Conditional AIMA date input */}
        {formData.needType === 'aima' && (
          <div className="ml-7 mt-2">
            <label className="block text-sm font-medium text-gray-700">Appointment Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.aimaDate}
              onChange={(e) => setFormData({ ...formData, aimaDate: e.target.value })}
            />
          </div>
        )}
      </div>

      {/* Multiple choice options */}
      <div className="space-y-2 mt-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
            onChange={(e) => setFormData({
              ...formData,
              needs: { ...formData.needs, consultation: e.target.checked }
            })}
            checked={formData.needs.consultation}
          />
          <div className="text-gray-700">
            <span>Legal and Tax Consultation</span>
            <a 
              href="#" 
              className="block text-blue-600 hover:text-blue-800 text-sm mt-1"
            >
              Book your consultation directly by clicking this link
            </a>
          </div>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
            onChange={(e) => setFormData({
              ...formData,
              needs: { ...formData.needs, other: e.target.checked }
            })}
            checked={formData.needs.other}
          />
          <span className="text-gray-700">Other</span>
        </label>

        {/* Conditional text field for "other" */}
        {formData.needs.other && (
          <div className="ml-7 mt-2">
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Please specify your need"
              value={formData.needs.otherText || ''}
              onChange={(e) => setFormData({
                ...formData,
                needs: { 
                  ...formData.needs, 
                  otherText: e.target.value 
                }
              })}
            />
          </div>
        )}
      </div>
    </div>
  </motion.section>
)}

        <motion.div variants={fadeIn} className="pt-6">
          <button
            type="submit"
            className="w-full bg-[#039B9B] text-white px-6 py-3 rounded-lg hover:bg-[#028787]] transition-colors font-semibold"
          >
            Submit Request
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default InstallationForm;