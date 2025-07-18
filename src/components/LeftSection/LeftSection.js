import React from "react";

const LeftSection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-white text-center max-w-full">
      <h2 className="text-4xl max-md:text-4xl max-lg:text-4xl max-sm:text-lg font-bold mb-4 animate-fade-in-slow">
       Appointment.exxerra.ai
      </h2>
      <p className="text-lg mb-8 animate-fade-in-delay-100 max-sm:text-justify  max-sm:text-sm ">
        Exerra AI handles end-to-end outbound prospecting to fill your calendar
        with qualified sales calls. Our team manages LinkedIn/email outreach,
        follow-ups, and appointment booking—delivering 25-50+ meetings/month
        with a 65-85% show-up rate. Ideal for SaaS, agencies, and consultants
        who want a done-for-you lead generation system without hiring in-house
        SDRs. Packages start at $1,500/month with guaranteed results.
      </p>
      <button className="bg-gradient-to-l from-[#F47321] to-[#65235C] border-2 border-white text-white px-6 py-3 max-sm:text-sm max-md:px-6 max-md:py-3 max-sm:px-1 max-sm:py-2  rounded-lg text-lg font-semibold hover:bg-[#f26a1e] transition duration-300 animate-fade-in-delay-200">
        appointment.exerra.ai
      </button>
    </div>
  );
};

export default LeftSection;
