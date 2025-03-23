"use client";

import Footer from "@/components/Footer";
import RealEstateForm from "@/components/form/RealEtateform";
import Navbar from "@/components/Navbar";
import RealEstateServicesPage from "@/components/realEstateCom/Realestate";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function Page() {
  const { language } = useLanguage();

  // No need to directly access translations here since the components handle their own translations
  return (
    <div>
      <Navbar />
      <RealEstateServicesPage />
      <RealEstateForm />
      <Footer />
    </div>
  );
}
