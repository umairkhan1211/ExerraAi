// RightSection.jsx
import React from "react";

const RightSection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-white text-center max-w-full ">
      <h2 className="text-4xl font-bold mb-4  max-md:text-4xl max-lg:text-4xl max-sm:text-lg animate-fade-in-slow p-[12px]">
        Automation.exerra.ai
      </h2>
      <p className="text-lg mb-8 animate-fade-in-delay-100 text-justify max-sm:text-justify  max-sm:text-sm">
        We build custom no-code systems to automate lead processing, CRM syncs,
        client onboarding, and reporting using tools like Zapier and Make.
        Eliminate manual data entry, reduce errors, and speed up conversions
        with seamless integrations for Close, HubSpot, and GoHighLevel. Most
        automations deploy in 5-10 days, requiring zero technical skills. Free
        audits available to identify workflow.
      </p>
      <button className="bg-gradient-to-r from-[#24145D] to-[#C95EEA] border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-[#832c67] transition duration-300 animate-fade-in-delay-200">
        automation.exerra.ai
      </button>
    </div>
  );
};

export default RightSection;