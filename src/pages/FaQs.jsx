import React from "react";

const FAQs = ({ isDark = false }) => {
  return (
    <section
      className={`py-20 text-center transition-colors duration-300 `}
    >
      <div className="container mx-auto px-6">
        <h2
          className={`text-5xl font-bold mb-10 ${
            isDark ? "text-black" : "text-white"
          }`}
        >
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-8 text-left">
          <div>
            <h3
              className={`text-xl font-semibold ${
                isDark ? "text-gray-900" : "text-gray-200"
              }`}
            >
              Q: How can I contact you?
            </h3>
            <p className={isDark ? "text-gray-600" : "text-gray-300"}>
              A: You can reach me via the contact form on the{" "}
              <a
                href="/contact"
                className={`${
                  isDark ? "text-black" : "text-white"
                } hover:underline`}
              >
                Contact page
              </a>
              .
            </p>
          </div>
          <div>
            <h3
              className={`text-xl font-semibold ${
                isDark ? "text-gray-900" : "text-gray-200"
              }`}
            >
              Q: What’s your response time?
            </h3>
            <p className={isDark ? "text-gray-600" : "text-gray-300"}>
              A: I typically respond within 24-48 hours.
            </p>
          </div>
          <div>
            <h3
              className={`text-xl font-semibold ${
                isDark ? "text-gray-900" : "text-gray-200"
              }`}
            >
              Q: Do you offer consultations?
            </h3>
            <p className={isDark ? "text-gray-600" : "text-gray-300"}>
              A: Yes, please send me a message to discuss availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;