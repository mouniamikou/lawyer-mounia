"use client";

import InstallationForm from "@/components/form/InstallationForm";
import Navbar from "@/components/Navbar";
import Instal from "@/components/installation/InstallationPortugal.jsx";
import React from "react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

function page() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Navbar />
      <Instal />
      <InstallationForm />
      <Footer />
    </>
  );
}

export default page;
