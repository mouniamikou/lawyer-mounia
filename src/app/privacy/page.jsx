import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="bg-gray-100  text-gray-900">
    <div className="bg-primary text-white pt-24 pb-12  text-center">
        <h1 className="text-5xl font-bold">Privacy Policy</h1>
       
      </div>
      <div className="max-w-4xl mx-auto py-12 px-6">
        <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
          <p>This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or use our services.</p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">2. Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, phone number, and any other data you provide when contacting us or using our services.</p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">3. How We Use Your Information</h2>
          <p>We use your information to provide legal consultation, improve our services, and communicate with you. Your data will not be shared with third parties without your consent, except as required by law.</p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Security</h2>
          <p>We take appropriate measures to protect your personal data from unauthorized access, alteration, or disclosure.</p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">5. Your Rights</h2>
          <p>You have the right to request access to, correction, or deletion of your personal data. If you wish to exercise these rights, please contact us.</p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">6. Policy Updates</h2>
          <p>We may update this policy from time to time. Please check this page for any changes.</p>
        </section>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default PrivacyPolicy;
