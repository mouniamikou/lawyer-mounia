"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormHandler from "@/components/form/FormHandler";
import InstallationForm from "@/components/form/InstallationForm";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

function InstallationPage() {
  const { language } = useLanguage();
  const t = translations[language]?.mainForm || translations.en.mainForm;

  return (
    <>
      <Navbar />
      <div
        className="mb-4 bg-gray-50 py-24 px-4 sm:px-4 lg:px-8"
        style={{
          backgroundImage: "url('/blob-scene-haikei (2).svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#039B9B] mb-6">
              {t.services.installation.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t.services.installation.description}
            </p>
          </div>

          <FormHandler
            formType="installation"
            FormComponent={InstallationForm}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InstallationPage;
