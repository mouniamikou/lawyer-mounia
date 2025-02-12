import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Terms of Service</h1>
        <p className="text-lg mt-4">Updated as of 2025</p>
      </div>
      <div className="max-w-4xl mx-auto py-12 px-6">
        <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
          <p>Welcome to our website. These Terms of Service govern your use of our website and services. By accessing or using our site, you agree to be bound by these terms.</p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">2. Services Provided</h2>
          <p>We provide legal consulting services in real estate, corporate, and tax law. The content provided on this site is for informational purposes only and does not constitute legal advice.</p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">3. User Obligations</h2>
          <p>Users agree to comply with applicable laws and regulations. Any unauthorized access, misuse, or attempt to disrupt the website’s functionality is strictly prohibited.</p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">4. Limitation of Liability</h2>
          <p>We strive to ensure the accuracy of the information on our website but do not guarantee its completeness or reliability. We are not responsible for any damages resulting from the use of this site.</p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">5. Changes to the Terms</h2>
          <p>We reserve the right to modify these terms at any time. Users are encouraged to review the terms periodically for any updates.</p>
        </section>

        <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">6. Contact Information</h2>
          <p>For any questions regarding these terms, please contact us via our website.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
