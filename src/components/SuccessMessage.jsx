"use client"
import React from 'react';

const SuccessMessage = () => {
  return (
    <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
      <p className="text-gray-600 mb-8">Your form has been submitted successfully. Would you like to schedule a direct consultation?</p>
      <button
        onClick={() => {/* Add your Calendly link here */}}
        className="bg-[#039B9B] text-white px-6 py-3 rounded-lg hover:bg-[#028787] transition-colors font-semibold"
      >
        Book a Call Now
      </button>
    </div>
  );
};

export default SuccessMessage;