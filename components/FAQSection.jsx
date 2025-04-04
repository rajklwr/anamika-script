"use client";
import { useState } from "react";

const FAQSection = () => {
  // Initialize state with all indices open
  const [activeIndices, setActiveIndices] = useState([0, 1, 2, 3]);

  const toggleFAQ = (index) => {
    if (activeIndices.includes(index)) {
      // Remove index if it's already active
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      // Add index to active
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#121212] to-[#1e1e1e] text-white px-6 sm:px-12 md:px-16 lg:px-20 py-16 flex flex-col lg:flex-row items-start justify-between gap-12">
      {/* FAQ Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-left mb-12">
          Frequently Asked Questions
        </h2>
        {[
          {
            question: "How long does it take to receive my script?",
            answer:
              "Most scripts are delivered within 24-48 hours, depending on length and workload.",
          },
          {
            question: "What types of YouTube niches do you cover?",
            answer:
              "I write scripts for almost any niche, including tech, finance, storytelling, reviews, mysteries, and more!",
          },
          {
            question: "Can I get revisions?",
            answer:
              "Yes! I offer one free revision to make sure you're 100% satisfied.",
          },
          {
            question: "How do I pay?",
            answer:
              "Payments can be made via PayPal, Wise, or another secure method (details will be provided upon order).",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] rounded-lg shadow-lg transition-all duration-300"
          >
            {/* Question */}
            <div
              className="flex justify-between items-center p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-bold">{faq.question}</h3>
              <span
                className={`text-2xl transform transition-transform ${
                  activeIndices.includes(index) ? "rotate-180" : "rotate-0"
                }`}
              >
                &#9660;
              </span>
            </div>

            {/* Answer */}
            {activeIndices.includes(index) && (
              <div className="px-6 pb-6 text-sm text-gray-300">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div className=" h-full flex justify-center items-stretch">
        <img
          src="/images/faq-image.png"
          alt="Decorative FAQ illustration"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FAQSection;
