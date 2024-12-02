"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      currentCountry: ''
    },
    businessType: '', // 'create', 'assist', or 'other'
    createType: '', // 'self-employed' or 'company'
    companyStructure: '', // 'alone' or 'partners'
    needAdvice: false,
    existingBusiness: {
      contracts: false,
      compliance: false,
      disputes: false,
      other: false,
      otherText: ''
    },
    businessSector: '',
    timeline: '', // '<1month', '1-3months', '>3months'
    other: '',
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

        {/* Business Type Selection */}
        <motion.section variants={fadeIn} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Your Business Needs</h2>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="businessType"
                value="create"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                checked={formData.businessType === 'create'}
              />
              <span className="text-gray-700">Create a business in Portugal</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="businessType"
                value="assist"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                checked={formData.businessType === 'assist'}
              />
              <span className="text-gray-700">Get assistance with existing Portuguese business</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="businessType"
                value="other"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                checked={formData.businessType === 'other'}
              />
              <span className="text-gray-700">Other</span>
            </label>
          </div>
        </motion.section>

        {/* Create Business Section */}
        {formData.businessType === 'create' && (
          <motion.section variants={fadeIn} className="space-y-6">
            <h3 className="text-lg font-medium text-gray-800">Business Structure</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="createType"
                  value="self-employed"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                  onChange={(e) => setFormData({ ...formData, createType: e.target.value })}
                  checked={formData.createType === 'self-employed'}
                />
                <span className="text-gray-700">As self-employed</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="createType"
                  value="company"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                  onChange={(e) => setFormData({ ...formData, createType: e.target.value })}
                  checked={formData.createType === 'company'}
                />
                <span className="text-gray-700">Create a company</span>
              </label>

              {formData.createType === 'company' && (
                <div className="ml-7 space-y-2">
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="companyStructure"
                      value="alone"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                      onChange={(e) => setFormData({ ...formData, companyStructure: e.target.value })}
                      checked={formData.companyStructure === 'alone'}
                    />
                    <span className="text-gray-700">As sole owner</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="companyStructure"
                      value="partners"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                      onChange={(e) => setFormData({ ...formData, companyStructure: e.target.value })}
                      checked={formData.companyStructure === 'partners'}
                    />
                    <span className="text-gray-700">With partners</span>
                  </label>
                </div>
              )}

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  onChange={(e) => setFormData({ ...formData, needAdvice: e.target.checked })}
                  checked={formData.needAdvice}
                />
                <span className="text-gray-700">Need advice on this choice</span>
              </label>
            </div>
          </motion.section>
        )}

        {/* Existing Business Section */}
        {formData.businessType === 'assist' && (
          <motion.section variants={fadeIn} className="space-y-4">
            <h3 className="text-lg font-medium text-gray-800">Assistance Needed With</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  onChange={(e) => setFormData({
                    ...formData,
                    existingBusiness: { ...formData.existingBusiness, contracts: e.target.checked }
                  })}
                />
                <span className="text-gray-700">Contracts</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  onChange={(e) => setFormData({
                    ...formData,
                    existingBusiness: { ...formData.existingBusiness, compliance: e.target.checked }
                  })}
                />
                <span className="text-gray-700">Compliance</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  onChange={(e) => setFormData({
                    ...formData,
                    existingBusiness: { ...formData.existingBusiness, disputes: e.target.checked }
                  })}
                />
                <span className="text-gray-700">Dispute resolution</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  onChange={(e) => setFormData({
                    ...formData,
                    existingBusiness: { ...formData.existingBusiness, other: e.target.checked }
                  })}
                />
                <span className="text-gray-700">Other</span>
              </label>

              {formData.existingBusiness.other && (
                <div className="ml-7">
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Please specify"
                    value={formData.existingBusiness.otherText}
                    onChange={(e) => setFormData({
                      ...formData,
                      existingBusiness: { ...formData.existingBusiness, otherText: e.target.value }
                    })}
                  />
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* Business Sector */}
        <motion.section variants={fadeIn} className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Business Sector</h3>
          <div>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Please specify your business sector"
              value={formData.businessSector}
              onChange={(e) => setFormData({ ...formData, businessSector: e.target.value })}
            />
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section variants={fadeIn} className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">Timeline</h3>
          <div className="space-y-2">
            {[
              { value: '<1month', label: 'Less than 1 month' },
              { value: '1-3months', label: '1-3 months' },
              { value: '>3months', label: 'More than 3 months' }
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="timeline"
                  value={option.value}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  checked={formData.timeline === option.value}
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </motion.section>

    {/* Other */}
    <motion.section variants={fadeIn} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Other</h2>
          <div className="space-y-4">
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
              placeholder="Please specify any other requests or requirements"
              value={formData.other}
              onChange={(e) => setFormData({ ...formData, other: e.target.value })}
            />
          </div>
        </motion.section>

        <motion.div variants={fadeIn} className="pt-6">
          <button
            type="submit"
            className="w-full bg-[#039B9B] text-white px-6 py-3 rounded-lg hover:bg-[#028787] transition-colors font-semibold"
          >
            Submit Request
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default BusinessForm;