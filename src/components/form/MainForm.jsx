"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Building, Briefcase, FileText } from "lucide-react";
import PersonalInfoForm from "./PersonalInfo";
import InstallationForm from "./ContactForm";
import RealEstateForm from "./RealEtateform";
import BusinessForm from "./BusinessForm";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const MainContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language]?.mainForm || translations.en.mainForm;
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currentCountry: "",
    },
    projectStatus: "",
    serviceType: "",
    installation: {
      /* ... installation fields */
    },
    realEstate: {
      /* ... real estate fields */
    },
    business: {
      /* ... business fields */
    },
    otherDetails: "",
    additionalInfo: "",
    termsAccepted: false,
  });
  const [step, setStep] = useState(1);
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const isPersonalInfoComplete = () => {
    const { firstName, lastName, email, phone, currentCountry } =
      formData.personalInfo;
    return (
      firstName &&
      lastName &&
      email &&
      phone &&
      currentCountry &&
      formData.projectStatus
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You could add a loading state here if needed
    // const [isSubmitting, setIsSubmitting] = useState(false);
    // setIsSubmitting(true);

    try {
      const response = await fetch("/api/general", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send email");
      }

      // Show success message
      alert(t.form?.successMessage || "Form submitted successfully!");

      // Reset form
      setFormData({
        personalInfo: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          currentCountry: "",
        },
        projectStatus: "",
        serviceType: "",
        installation: {},
        realEstate: {},
        business: {},
        otherDetails: "",
        additionalInfo: "",
        termsAccepted: false,
      });
      setStep(1);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(t.form?.errorMessage || "Failed to submit form. Please try again.");
    } finally {
      // Hide loading state if needed
      // setIsSubmitting(false);
    }
  };

  return (
    <div
      className="mb-4 bg-gray-50 py-24 px-4 sm:px-4 lg:px-8"
      style={{
        backgroundImage: "url('/blob-scene-haikei (2).svg')",
        backgroundSize: "cover", // Or 'contain', depending on your preference
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#039B9B] mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t.subtitle}
          </p>
        </div>

        {/* Main Form */}

        <motion.form
          initial="hidden"
          animate="visible"
          className="space-y-8 max-w-4xl mx-auto"
          onSubmit={handleSubmit}
        >
          {/* {step === 1 && (
  <>
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Schedule a Consultation</h1>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Book a call directly to discuss your needs in Portugal, or continue with our form to provide more details about your specific requirements. We're here to help with business formation, real estate transactions, and relocation services.
      </p>
      <div className="flex flex-col gap-4">
        <button
          type="button"
          className="w-full bg-[#039B9B] text-white px-6 py-3 rounded-lg hover:bg-[#028787] transition-colors font-semibold"
          onClick={() => {}}
        >
          Book a Call
        </button>
        <button
          type="button"
          className="w-full bg-gray-100 text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
          onClick={() => setStep(2)}
        >
          Continue with Form
        </button>
      </div>
    </div>
  </>
)} */}

          {step === 1 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    value: "installation",
                    label: t.services.installation.title,
                    icon: <Home size={20} />,
                  },
                  {
                    value: "realEstate",
                    label: t.services.realEstate.title,
                    icon: <Building size={20} />,
                  },
                  {
                    value: "business",
                    label: t.services.business.title,
                    icon: <Briefcase size={20} />,
                  },
                  {
                    value: "other",
                    label: t.services.other.title,
                    icon: <FileText size={20} />,
                  },
                ].map((service) => (
                  <div
                    key={service.value}
                    className={`p-6 bg-white rounded-xl shadow-lg cursor-pointer transform transition-all duration-200 hover:scale-105 ${
                      formData.serviceType === service.value
                        ? "ring-2 ring-[#039B9B]"
                        : "border border-gray-200"
                    }`}
                    onClick={() => {
                      setFormData({ ...formData, serviceType: service.value });
                      setStep(2);
                    }}
                  >
                    <div className="text-4xl text-primary mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {service.label}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {t.services[service.value].description}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              {formData.serviceType === "installation" && (
                <InstallationForm
                  formData={formData.installation}
                  onFormDataChange={(installationData) =>
                    setFormData({
                      ...formData,
                      installation: installationData,
                    })
                  }
                />
              )}

              {formData.serviceType === "realEstate" && (
                <RealEstateForm
                  formData={formData.realEstate}
                  onFormDataChange={(realEstateData) =>
                    setFormData({
                      ...formData,
                      realEstate: realEstateData,
                    })
                  }
                />
              )}

              {formData.serviceType === "business" && (
                <BusinessForm
                  formData={formData.business}
                  onFormDataChange={(businessData) =>
                    setFormData({
                      ...formData,
                      business: businessData,
                    })
                  }
                />
              )}

              {formData.serviceType === "other" && (
                <motion.section variants={fadeIn} className="space-y-6">
                  <PersonalInfoForm
                    formData={formData}
                    onFormDataChange={setFormData}
                  />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {t.otherServices.title}
                  </h2>
                  <div>
                    <textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#039B9B] focus:ring-[#039B9B] min-h-[200px]"
                      placeholder={t.otherServices.placeholder}
                      value={formData.otherDetails}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          otherDetails: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Terms Acceptance */}
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        required
                        className="focus:ring-[#039B9B] h-4 w-4 text-[#039B9B] border-gray-300 rounded"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            termsAccepted: e.target.checked,
                          })
                        }
                        checked={formData.termsAccepted}
                      />
                      <span className="text-gray-700">
                        {t.termsAndConditions}
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <motion.button
                      type="submit"
                      className="w-full bg-[#039B9B] text-white px-6 py-3 rounded-lg hover:bg-[#028787] transition-colors font-semibold"
                    >
                      {t.buttons.submit}
                    </motion.button>
                  </div>
                </motion.section>
              )}

              <div className="flex flex-col space-y-4">
                <motion.button
                  type="button"
                  className="w-full bg-gray-100 text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                  onClick={() => setStep(1)}
                >
                  {t.buttons.back}
                </motion.button>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default MainContactForm;
