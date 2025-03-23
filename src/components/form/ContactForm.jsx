"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PersonalInfoForm from "./PersonalInfo";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const InstallationForm = () => {
  const { language } = useLanguage();
  const t =
    translations[language]?.installationForm ||
    translations.en.installationForm;

  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currentCountry: "",
    },
    projectStatus: "",
    residencyStatus: "", // 'eu' or 'non-eu'
    portugaStatus: "", // 'moving' or 'resident'
    needs: {
      administrative: false,
      consultation: false,
      other: false,
    },
    visaType: "", // 'D2' or 'D7'
    aimaDate: "",
    termsAccepted: false,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="max-w-2xl mx-auto p-6 mb-4 bg-white rounded-xl shadow-lg"
      style={{
        backgroundImage: "url('/blob-scene-haikei (2).svg')",
        backgroundSize: "cover", // Or 'contain', depending on your preference
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <motion.form initial="hidden" animate="visible" className="space-y-6">
        <PersonalInfoForm formData={formData} onFormDataChange={setFormData} />

        {/* Residency Status */}
        <motion.section variants={fadeIn} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {t.residencyStatus.title}
          </h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="residencyStatus"
                value="eu"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                onChange={(e) =>
                  setFormData({ ...formData, residencyStatus: e.target.value })
                }
                checked={formData.residencyStatus === "eu"}
              />
              <span className="text-gray-700">
                {t.residencyStatus.euCitizen}
              </span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="residencyStatus"
                value="non-eu"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                onChange={(e) =>
                  setFormData({ ...formData, residencyStatus: e.target.value })
                }
                checked={formData.residencyStatus === "non-eu"}
              />
              <span className="text-gray-700">
                {t.residencyStatus.nonEuCitizen}
              </span>
            </label>
          </div>
        </motion.section>

        {/* Conditional Sections based on EU/Non-EU status */}
        {formData.residencyStatus === "eu" && (
          <motion.section
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-gray-800">
              {t.euStatus.title}
            </h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="portugaStatus"
                  value="moving"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                  onChange={(e) =>
                    setFormData({ ...formData, portugaStatus: e.target.value })
                  }
                />
                <span className="text-gray-700">{t.euStatus.moving}</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="portugaStatus"
                  value="resident"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                  onChange={(e) =>
                    setFormData({ ...formData, portugaStatus: e.target.value })
                  }
                />
                <span className="text-gray-700">{t.euStatus.resident}</span>
              </label>
            </div>

            <div className="space-y-2 mt-4">
              <h3 className="text-lg font-medium text-gray-800">
                {t.needs.title}
              </h3>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      needs: {
                        ...formData.needs,
                        administrative: e.target.checked,
                      },
                    })
                  }
                />
                <span className="text-gray-700">{t.needs.administrative}</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      needs: {
                        ...formData.needs,
                        consultation: e.target.checked,
                      },
                    })
                  }
                />
                <span className="text-gray-700">{t.needs.legal}</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      needs: { ...formData.needs, other: e.target.checked },
                    })
                  }
                />
                <span className="text-gray-700">{t.needs.other}</span>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder={t.needs.specifyNeeds}
                  value={formData.needs.otherText || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      needs: {
                        ...formData.needs,
                        otherText: e.target.value,
                      },
                    })
                  }
                />
              </label>
            </div>
          </motion.section>
        )}

        {formData.residencyStatus === "non-eu" && (
          <motion.section
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">
                {t.needs.title}
              </h3>

              {/* Single choice visa options */}
              <div className="space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="needType"
                    value="d2"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        visaType: "D2",
                        needType: "visa",
                      })
                    }
                    checked={formData.visaType === "D2"}
                  />
                  <span className="text-gray-700">{t.nonEuNeeds.d2Visa}</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="needType"
                    value="d7"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        visaType: "D7",
                        needType: "visa",
                      })
                    }
                    checked={formData.visaType === "D7"}
                  />
                  <span className="text-gray-700">{t.nonEuNeeds.d7Visa}</span>
                </label>

                {/* AIMA appointment option */}
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="needType"
                    value="aima"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        needType: "aima",
                      })
                    }
                    checked={formData.needType === "aima"}
                  />
                  <span className="text-gray-700">
                    {t.nonEuNeeds.aimaAssistance}
                  </span>
                </label>

                {/* Conditional AIMA date input */}
                {formData.needType === "aima" && (
                  <div className="ml-7 mt-2">
                    <label className="block text-sm font-medium text-gray-700">
                      {t.nonEuNeeds.appointmentDate}
                    </label>
                    <input
                      type="date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      value={formData.aimaDate}
                      onChange={(e) =>
                        setFormData({ ...formData, aimaDate: e.target.value })
                      }
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        needs: {
                          ...formData.needs,
                          consultation: e.target.checked,
                        },
                      })
                    }
                    checked={formData.needs.consultation}
                  />
                  <div className="text-gray-700">
                    <span>{t.nonEuNeeds.legal}</span>
                  </div>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        needs: { ...formData.needs, other: e.target.checked },
                      })
                    }
                    checked={formData.needs.other}
                  />
                  <span className="text-gray-700">{t.needs.other}</span>
                </label>

                {/* Conditional text field for "other" */}
                {formData.needs.other && (
                  <div className="ml-7 mt-2">
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder={t.nonEuNeeds.specifyNeeds}
                      value={formData.needs.otherText || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          needs: {
                            ...formData.needs,
                            otherText: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.section>
        )}

        {/* Terms Acceptance */}
        <motion.section variants={fadeIn} className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              required
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              onChange={(e) =>
                setFormData({ ...formData, termsAccepted: e.target.checked })
              }
              checked={formData.termsAccepted}
            />
            <span className="text-gray-700">{t.terms}</span>
          </label>
        </motion.section>

        <motion.div variants={fadeIn} className="pt-6">
          <button
            type="submit"
            className="w-full bg-[#039B9B] text-white px-6 py-3 rounded-lg hover:bg-[#028787]] transition-colors font-semibold"
          >
            {t.submit}
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default InstallationForm;
