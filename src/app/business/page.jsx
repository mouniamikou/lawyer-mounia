"use client";

import BusinessServicesPage from "@/components/business/BusinessComponent";
import Footer from "@/components/Footer";
import BusinessForm from "@/components/form/BusinessForm";
import Navbar from "@/components/Navbar";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

function Page() {
  const { language } = useLanguage();

  return (
    <>
      <Navbar />
      <BusinessServicesPage />
      <BusinessForm />
      <Footer />
    </>
  );
}

export default Page;
