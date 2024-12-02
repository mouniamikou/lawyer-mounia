"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MainContactForm = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      currentCountry: ''
    },
    projectStatus: '',
    serviceType: '', // 'installation', 'realEstate', 'business', 'other'
    
    // Installation specific fields
    installation: {
      residencyStatus: '', // 'eu' or 'non-eu'
      portugaStatus: '', // 'moving' or 'resident'
      needs: {
        administrative: false,
        consultation: false,
        other: false,
        otherText: ''
      },
      visaType: '', // 'D2' or 'D7'
      aimaDate: '',
    },
    
    // Real Estate specific fields
    realEstate: {
      transactionType: '', // 'buy' or 'sell'
      budget: '',
      projectStage: {
        searching: false,
        identifiedProperty: false,
        submittedOffer: false,
        offerAccepted: false,
        promiseSigned: false,
        deedSigned: false,
        promiseDate: '',
        deedDate: '',
      },
      sellingStage: {
        considering: false,
        listed: false,
        offerAccepted: false,
        promiseSigned: false,
        deedSigned: false,
        promiseDate: '',
        deedDate: '',
      }
    },
    
    // Business specific fields
    business: {
      businessType: '', // 'create', 'assist', 'other'
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
    },
    
    additionalInfo: ''
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const budgetRanges = [
    '< 250K€',
    '250K€ - 500K€',
    '500K€ - 1M€',
    '> 1M€'
  ];

  const projectStatusOptions = [
    'Currently considering',
    'Decision made, need complete assistance',
    'Project ongoing, need specific assistance',
    'Urgent issue to resolve'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#039B9B] mb-6">
            Legal Services in Portugal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert assistance with business creation, real estate transactions, and relocation services in Portugal. Choose your service below to get started with personalized guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#039B9B] bg-opacity-10 text-[#039B9B] rounded-full text-sm font-medium">Business Formation</span>
            <span className="px-3 py-1 bg-[#039B9B] bg-opacity-10 text-[#039B9B] rounded-full text-sm font-medium">Property Purchase</span>
            <span className="px-3 py-1 bg-[#039B9B] bg-opacity-10 text-[#039B9B] rounded-full text-sm font-medium">Immigration</span>
            <span className="px-3 py-1 bg-[#039B9B] bg-opacity-10 text-[#039B9B] rounded-full text-sm font-medium">D7 Visa</span>
            <span className="px-3 py-1 bg-[#039B9B] bg-opacity-10 text-[#039B9B] rounded-full text-sm font-medium">D2 Visa</span>
            <span className="px-3 py-1 bg-[#039B9B] bg-opacity-10 text-[#039B9B] rounded-full text-sm font-medium">Legal Consultation</span>
          </div>
          <p className="text-lg text-gray-700 font-medium">
            Select your desired service below to access the appropriate form and get started with your journey
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          {/* Service Type Cards */}
          {[
            { value: 'installation', label: 'Installation in Portugal', icon: '🏠' },
            { value: 'realEstate', label: 'Real Estate', icon: '🏢' },
            { value: 'business', label: 'Business', icon: '💼' },
            { value: 'other', label: 'Other', icon: '📝' }
          ].map((service) => (
            <div
              key={service.value}
              className={`flex-1 min-w-[250px] max-w-[300px] p-6 bg-white rounded-xl shadow-lg cursor-pointer transform transition-all duration-200 hover:scale-105 ${
                formData.serviceType === service.value ? 'ring-2 ring-[#039B9B]' : ''
              }`}
              onClick={() => setFormData({ ...formData, serviceType: service.value })}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.label}</h3>
              <p className="mt-2 text-gray-600">Click to select this service type</p>
            </div>
          ))}
        </div>

        {/* Main Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <motion.form 
            initial="hidden"
            animate="visible"
            className="space-y-8 max-w-4xl mx-auto"
          >
            {/* Personal Information */}
            <motion.section variants={fadeIn} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
                    value={formData.personalInfo.phone}
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, phone: e.target.value }
                    })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Current Country of Residence</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
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
              <h2 className="text-xl font-semibold text-gray-800">Project Status</h2>
              <div className="space-y-2">
                {projectStatusOptions.map((status) => (
                  <label key={status} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="projectStatus"
                      value={status}
                      className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                      onChange={(e) => setFormData({ ...formData, projectStatus: e.target.value })}
                      checked={formData.projectStatus === status}
                    />
                    <span className="text-gray-700">{status}</span>
                  </label>
                ))}
              </div>
            </motion.section>

            {/* Installation Section */}
            {formData.serviceType === 'installation' && (
              <motion.section variants={fadeIn} className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Installation Details</h2>
                
                {/* Residency Status */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800">Residency Status</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="residencyStatus"
                        value="eu"
                        className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                        onChange={(e) => setFormData({
                          ...formData,
                          installation: { ...formData.installation, residencyStatus: e.target.value }
                        })}
                        checked={formData.installation.residencyStatus === 'eu'}
                      />
                      <span className="text-gray-700">EU Resident</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="residencyStatus"
                        value="non-eu"
                        className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                        onChange={(e) => setFormData({
                          ...formData,
                          installation: { ...formData.installation, residencyStatus: e.target.value }
                        })}
                        checked={formData.installation.residencyStatus === 'non-eu'}
                      />
                      <span className="text-gray-700">Non-EU Resident</span>
                    </label>
                  </div>
                </div>

                {formData.installation.residencyStatus === 'eu' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-800">Status in Portugal</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="portugaStatus"
                          value="moving"
                          className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                          onChange={(e) => setFormData({
                            ...formData,
                            installation: { ...formData.installation, portugaStatus: e.target.value }
                          })}
                        />
                        <span className="text-gray-700">Want to move to Portugal</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="portugaStatus"
                          value="resident"
                          className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                          onChange={(e) => setFormData({
                            ...formData,
                            installation: { ...formData.installation, portugaStatus: e.target.value }
                          })}
                        />
                        <span className="text-gray-700">Already living in Portugal</span>
                      </label>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-gray-800">Your Needs</h3>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                          onChange={(e) => setFormData({
                            ...formData,
                            installation: {
                              ...formData.installation,
                              needs: { ...formData.installation.needs, administrative: e.target.checked }
                            }
                          })}
                        />
                        <span className="text-gray-700">Administrative assistance (NIF, NISS, Utente)</span>
                      </label>
                      {/* Add other EU-specific needs */}
                    </div>
                  </div>
                )}

                {formData.installation.residencyStatus === 'non-eu' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-800">Visa Requirements</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="visaType"
                          value="D2"
                          className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                          onChange={(e) => setFormData({
                            ...formData,
                            installation: { ...formData.installation, visaType: e.target.value }
                          })}
                        />
                        <span className="text-gray-700">D2 Visa Application</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="visaType"
                          value="D7"
                          className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                          onChange={(e) => setFormData({
                            ...formData,
                            installation: { ...formData.installation, visaType: e.target.value }
                          })}
                        />
                        <span className="text-gray-700">D7 Visa Application</span>
                      </label>
                      {/* Add AIMA appointment section */}
                    </div>
                  </div>
                )}
              </motion.section>
            )}
{/* Real Estate Section */}
{formData.serviceType === 'realEstate' && (
              <motion.section variants={fadeIn} className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Real Estate Details</h2>
                
                {/* Transaction Type */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800">Type of Transaction</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="transactionType"
                        value="buy"
                        className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                        onChange={(e) => setFormData({
                          ...formData,
                          realEstate: { ...formData.realEstate, transactionType: e.target.value }
                        })}
                        checked={formData.realEstate.transactionType === 'buy'}
                      />
                      <span className="text-gray-700">Buy Property</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="transactionType"
                        value="sell"
                        className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                        onChange={(e) => setFormData({
                          ...formData,
                          realEstate: { ...formData.realEstate, transactionType: e.target.value }
                        })}
                        checked={formData.realEstate.transactionType === 'sell'}
                      />
                      <span className="text-gray-700">Sell Property</span>
                    </label>
                  </div>
                </div>

                {/* Buying Section */}
                {formData.realEstate.transactionType === 'buy' && (
                  <div className="space-y-6">
                    {/* Budget Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-800">Purchase Budget</h3>
                      <div className="space-y-2">
                        {budgetRanges.map((range) => (
                          <label key={range} className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="budget"
                              value={range}
                              className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                              onChange={(e) => setFormData({
                                ...formData,
                                realEstate: { ...formData.realEstate, budget: e.target.value }
                              })}
                              checked={formData.realEstate.budget === range}
                            />
                            <span className="text-gray-700">{range}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Project Stage */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-800">Project Stage</h3>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                            onChange={(e) => setFormData({
                              ...formData,
                              realEstate: {
                                ...formData.realEstate,
                                projectStage: {
                                  ...formData.realEstate.projectStage,
                                  searching: e.target.checked
                                }
                              }
                            })}
                            checked={formData.realEstate.projectStage.searching}
                          />
                          <span className="text-gray-700">Currently searching for property</span>
                        </label>

                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                            onChange={(e) => setFormData({
                              ...formData,
                              realEstate: {
                                ...formData.realEstate,
                                projectStage: {
                                  ...formData.realEstate.projectStage,
                                  identifiedProperty: e.target.checked
                                }
                              }
                            })}
                            checked={formData.realEstate.projectStage.identifiedProperty}
                          />
                          <span className="text-gray-700">Identified specific property and want to submit offer</span>
                        </label>

                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                            onChange={(e) => setFormData({
                              ...formData,
                              realEstate: {
                                ...formData.realEstate,
                                projectStage: {
                                  ...formData.realEstate.projectStage,
                                  submittedOffer: e.target.checked
                                }
                              }
                            })}
                            checked={formData.realEstate.projectStage.submittedOffer}
                          />
                          <span className="text-gray-700">Submitted an offer</span>
                        </label>

                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                            onChange={(e) => setFormData({
                              ...formData,
                              realEstate: {
                                ...formData.realEstate,
                                projectStage: {
                                  ...formData.realEstate.projectStage,
                                  offerAccepted: e.target.checked
                                }
                              }
                            })}
                            checked={formData.realEstate.projectStage.offerAccepted}
                          />
                          <span className="text-gray-700">Offer has been accepted</span>
                        </label>

                        {formData.realEstate.projectStage.offerAccepted && (
                          <div className="ml-7">
                            <label className="block text-sm font-medium text-gray-700">
                              Promise of sale ("CPCV") expected before:
                              <input
                                type="date"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
                                onChange={(e) => setFormData({
                                  ...formData,
                                  realEstate: {
                                    ...formData.realEstate,
                                    projectStage: {
                                      ...formData.realEstate.projectStage,
                                      promiseDate: e.target.value
                                    }
                                  }
                                })}
                                value={formData.realEstate.projectStage.promiseDate}
                              />
                            </label>
                          </div>
                        )}

                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                            onChange={(e) => setFormData({
                              ...formData,
                              realEstate: {
                                ...formData.realEstate,
                                projectStage: {
                                  ...formData.realEstate.projectStage,
                                  promiseSigned: e.target.checked
                                }
                              }
                            })}
                            checked={formData.realEstate.projectStage.promiseSigned}
                          />
                          <span className="text-gray-700">Signed promise of sale ("CPCV")</span>
                        </label>

                        {formData.realEstate.projectStage.promiseSigned && (
                          <div className="ml-7">
                            <label className="block text-sm font-medium text-gray-700">
                              Notarial deed ("escritura") expected before:
                              <input
                                type="date"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
                                onChange={(e) => setFormData({
                                  ...formData,
                                  realEstate: {
                                    ...formData.realEstate,
                                    projectStage: {
                                      ...formData.realEstate.projectStage,
                                      deedDate: e.target.value
                                    }
                                  }
                                })}
                                value={formData.realEstate.projectStage.deedDate}
                              />
                            </label>
                          </div>
                        )}

                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                            onChange={(e) => setFormData({
                              ...formData,
                              realEstate: {
                                ...formData.realEstate,
                                projectStage: {
                                  ...formData.realEstate.projectStage,
                                  deedSigned: e.target.checked
                                }
                              }
                            })}
                            checked={formData.realEstate.projectStage.deedSigned}
                          />
                          <span className="text-gray-700">Signed notarial deed</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Selling Section */}
                {formData.realEstate.transactionType === 'sell' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-gray-800">Selling Stage</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                          onChange={(e) => setFormData({
                            ...formData,
                            realEstate: {
                              ...formData.realEstate,
                              sellingStage: {
                                ...formData.realEstate.sellingStage,
                                considering: e.target.checked
                              }
                            }
                          })}
                          checked={formData.realEstate.sellingStage.considering}
                        />
                        <span className="text-gray-700">Currently considering selling</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                          onChange={(e) => setFormData({
                            ...formData,
                            realEstate: {
                              ...formData.realEstate,
                              sellingStage: {
                                ...formData.realEstate.sellingStage,
                                listed: e.target.checked
                              }
                            }
                          })}
                          checked={formData.realEstate.sellingStage.listed}
                        />
                        <span className="text-gray-700">Property is listed</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                          onChange={(e) => setFormData({
                            ...formData,
                            realEstate: {
                              ...formData.realEstate,
                              sellingStage: {
                                ...formData.realEstate.sellingStage,
                                offerAccepted: e.target.checked
                              }
                            }
                          })}
                          checked={formData.realEstate.sellingStage.offerAccepted}
                        />
                        <span className="text-gray-700">Accepted an offer</span>
                      </label>

                      {formData.realEstate.sellingStage.offerAccepted && (
                        <div className="ml-7">
                          <label className="block text-sm font-medium text-gray-700">
                            Promise of sale ("CPCV") expected before:
                            <input
                              type="date"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
                              onChange={(e) => setFormData({
                                ...formData,
                                realEstate: {
                                  ...formData.realEstate,
                                  sellingStage: {
                                    ...formData.realEstate.sellingStage,
                                    promiseDate: e.target.value
                                  }
                                }
                              })}
                              value={formData.realEstate.sellingStage.promiseDate}
                            />
                          </label>
                        </div>
                      )}

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                          onChange={(e) => setFormData({
                            ...formData,
                            realEstate: {
                              ...formData.realEstate,
                              sellingStage: {
                                ...formData.realEstate.sellingStage,
                                promiseSigned: e.target.checked
                              }
                            }
                          })}
                          checked={formData.realEstate.sellingStage.promiseSigned}
                        />
                        <span className="text-gray-700">Signed promise of sale ("CPCV")</span>
                      </label>

                      {formData.realEstate.sellingStage.promiseSigned && (
                        <div className="ml-7">
                          <label className="block text-sm font-medium text-gray-700">
                            Notarial deed ("escritura") expected before:
                            <input
                              type="date"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
                              onChange={(e) => setFormData({
                                ...formData,
                                realEstate: {
                                  ...formData.realEstate,
                                  sellingStage: {
                                    ...formData.realEstate.sellingStage,
                                    deedDate: e.target.value
                                  }
                                }
                              })}
                              value={formData.realEstate.sellingStage.deedDate}
                            />
                          </label>
                        </div>
                      )}

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                          onChange={(e) => setFormData({
                            ...formData,
                            realEstate: {
                              ...formData.realEstate,
                              sellingStage: {
                                ...formData.realEstate.sellingStage,
                                deedSigned: e.target.checked
                              }
                            }
                          })}
                          checked={formData.realEstate.sellingStage.deedSigned}
                        />
                        <span className="text-gray-700">Signed notarial deed</span>
                      </label>
                    </div>
                  </div>
                )}
              </motion.section>
            )}

            {/* Business Section */}
            {formData.serviceType === 'business' && (
              <motion.section variants={fadeIn} className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">Business Details</h2>
                
                {/* Business Type Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800">Your Business Needs</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="businessType"
                        value="create"
                        className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                        onChange={(e) => setFormData({
                          ...formData,
                          business: { ...formData.business, businessType: e.target.value }
                        })}
                        checked={formData.business.businessType === 'create'}
                      />
                      <span className="text-gray-700">Create a business in Portugal</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="businessType"
                        value="assist"
                        className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                        onChange={(e) => setFormData({
                          ...formData,
                          business: { ...formData.business, businessType: e.target.value }
                        })}
                        checked={formData.business.businessType === 'assist'}
                      />
                      <span className="text-gray-700">Get assistance with existing Portuguese business</span>
                    </label>
                  </div>
                </div>

                {/* Create Business Section */}
                {formData.business.businessType === 'create' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-800">Business Structure</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="createType"
                          value="self-employed"
                          className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                          onChange={(e) => setFormData({
                            ...formData,
                            business: { ...formData.business, createType: e.target.value }
                          })}
                          checked={formData.business.createType === 'self-employed'}
                        />
                        <span className="text-gray-700">As self-employed</span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="createType"
                          value="company"
                          className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                          onChange={(e) => setFormData({
                            ...formData,
                            business: { ...formData.business, createType: e.target.value }
                          })}
                          checked={formData.business.createType === 'company'}
                        />
                        <span className="text-gray-700">Create a company</span>
                      </label>

                      {formData.business.createType === 'company' && (
                        <div className="ml-7 space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="companyStructure"
                              value="alone"
                              className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                              onChange={(e) => setFormData({
                                ...formData,
                                business: { ...formData.business, companyStructure: e.target.value }
                              })}
                              checked={formData.business.companyStructure === 'alone'}
                            />
                            <span className="text-gray-700">As sole owner</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="companyStructure"
                              value="partners"
                              className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                              onChange={(e) => setFormData({
                                ...formData,
                                business: { ...formData.business, companyStructure: e.target.value }
                              })}
                              checked={formData.business.companyStructure === 'partners'}
                            />
                            <span className="text-gray-700">With partners</span>
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Existing Business Section */}
                {formData.business.businessType === 'assist' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-800">Assistance Needed With</h3>
                    <div className="space-y-2">
                      {[
                        { key: 'contracts', label: 'Contracts' },
                        { key: 'compliance', label: 'Compliance' },
                        { key: 'disputes', label: 'Dispute resolution' }
                      ].map(({ key, label }) => (
                        <label key={key} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                            onChange={(e) => setFormData({
                              ...formData,
                              business: {
                                ...formData.business,
                                existingBusiness: {
                                  ...formData.business.existingBusiness,
                                  [key]: e.target.checked
                                }
                              }
                            })}
                            checked={formData.business.existingBusiness[key]}
                          />
                          <span className="text-gray-700">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Business Sector */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800">Business Sector</h3>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B]"
                    placeholder="Please specify your business sector"
                    value={formData.business.businessSector}
                    onChange={(e) => setFormData({
                      ...formData,
                      business: { ...formData.business, businessSector: e.target.value }
                    })}
                  />
                </div>

                {/* Timeline */}
                <div className="space-y-4">
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
                          className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300"
                          onChange={(e) => setFormData({
                            ...formData,
                            business: { ...formData.business, timeline: e.target.value }
                          })}
                          checked={formData.business.timeline === option.value}
                        />
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}

            {/* Additional Information Section */}
            <motion.section variants={fadeIn} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Additional Information</h2>
              <div>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B] min-h-[100px]"
                  placeholder="Please share any additional information about your situation and needs"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                />
              </div>
            </motion.section>

            {/* Submit Button */}
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
      </div>
    </div>
  );
};

export default MainContactForm;